module.exports = function( socket, client ){
	
	client.on( 'formsubmission', function( formData ){
	
		// Create a promise for every state we are searching
		var promises = [];

		for ( let state of STATES ){
			if ( state.implemented && !formData.exclude.includes( state.name ) ){
				var result = { state: state.name, money: 0 },
					promise = state.search( formData.person, result );

				// Notify the client as soon as each promise resolves
				if ( promise.then ) promise.then( function( result ){
					console.log( 'Sending results for', state.name, result );
					socket.emit( 'result', result );
				});
				else {
					console.log( 'Sending results for', state.name, promise );
					socket.emit( 'result', promise );
				}

				promises.push( promise );				
			}
		}

		// When all promises resolve, send a summary to the client
		Promise.all( promises ).then( function( results ){
			console.log( 'Sending full result set', results );
			socket.emit( 'results', results );
		});		        
	});
};