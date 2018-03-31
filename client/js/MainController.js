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
		first = document.getElementById( 'field-first' ).value,
		last = document.getElementById( 'field-last' ).value,
		hits = results.filter( function( result ){
			return result.money;
		});

		if ( !hits.length ){
			h3.innerText = 'No Results';
			p.innerText = 'No unclaimed money found for ' + first + ' ' + last + '. Try searching for someone else or selectiong a different set of states.';
		} else {
			h3.innerText = 'Unclaimed Money Found!';
			p.innerHTML = 'The following states may be holding unclaimed money for ' + first + ' ' + last + ':<br><br>';

			for ( let hit of hits ){        
				p.innerHTML += hit.state + ': $' + hit.money + '<br>';
			}      
    	}

	// Show modal
	modal.style.display = "block";
	
	// Close on X click
	button.onclick = function () {
		modal.style.display = "none";
		resetApp();
	}
	
	// Close on click outside modal
	window.onclick = function( event ){
		if ( event.target == modal ) {
			modal.style.display = "none";
			resetApp();
		}
	}
}

function resetApp(){
	var button = document.querySelector( 'button' ),
		ul = document.getElementById( 'list-states' ),
		lis = ul.querySelectorAll( 'li' );

	lis.forEach( function( li ){
		var statusIcon = li.querySelector( '.status' );
		if ( statusIcon ) li.removeChild( statusIcon );
	});

	button.disabled = false;
}