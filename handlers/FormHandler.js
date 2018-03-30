module.exports = function( socket, client ){
	
	client.on( 'formsubmission', function( formData ){
	
		var promises = [],
			results = [];

		for ( let state of STATES ){
			if ( state.implemented && !formData.exclude.includes( state.name ) ){
				var result = StateService.getResult( state, formData.person );

				console.log( 'Sending results for', state.name, results );
				socket.emit( 'result', result );
				results.push( result );
			}
		}

		console.log( 'Sending full result set', results );
		socket.emit( 'results', results );        
	});
};