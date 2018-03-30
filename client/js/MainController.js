window.onload = function(){

	let socket = io();

	socket.on( 'implementation', function( implementation ){

		setTimeout( function(){
			document.getElementById( 'app-mask' ).hidden = true;
		}, 500 );

		setupStateList( implementation );
	});

	socket.on( 'result', updateLiWithResult );
	socket.on( 'results', displayResults );
};

function displayResults( results ){
	var button = document.querySelector( 'button' );

	button.disabled = false;
}