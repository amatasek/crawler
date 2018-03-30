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
	var button = document.querySelector( '.close' ),
		modal = document.getElementById( 'modal-summary' ),
		h3 = document.getElementById( 'h3-results' ),
		p = document.getElementById( 'p-results' ),
		hits = results.filter( function( result ){
			return result.money;
		});

		if ( !hits.length ){
			h3.innerText = 'No Results';
			p.innerText = 'No unclaimed money found for PERSON. Try searching for someone else or selectiong a different set of states.';
		} else {
			h3.innerText = 'Unclaimed Money Found!';
			p.innerHTML = 'The following states may be holding unclaimed money for PERSON:<br><br>';

			for ( let hit of hits ){        
				p.innerHTML += hit.state + ': $' + hit.money + '<br>';
			}      
    	}

	// Show modal
	modal.style.display = "block";
	
	// Close on X click
	button.onclick = function () {
		modal.style.display = "none";
	}
	
	// Close on click outside modal
	window.onclick = function( event ){
		if ( event.target == modal ) {
			modal.style.display = "none";
		}
	}
}

function resetApp(){
	var button = document.querySelector( 'button' );

	button.disabled = true;
}