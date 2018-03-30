function setupStateList( implementation ){
	var ul = document.getElementById( 'list-states' );

	// Empty the list
	while( ul.firstChild ){
		grid.removeChild( ul.firstChild );
	}

	// Add a Li to the Ul for each state
	for ( let datum of implementation ){
		ul.appendChild( createStateLi( datum ) );
	}
}

function createStateLi( data ){
	var row = document.createElement( 'Li' ),
		check = document.createElement( 'Input' ),
		label = document.createElement( 'Span' ),
		link = document.createElement( 'A' ),
		icon = document.createElement( 'I' );

	check.setAttribute( 'type', 'checkbox' );

	if ( data.implemented ){
		check.setAttribute( 'checked', true );
		icon.setAttribute( 'class', 'far fa-window-restore' );
		link.setAttribute( 'href', data.url );
		link.setAttribute( 'target', '_blank' );
		link.appendChild( icon );
	} else {
		check.setAttribute( 'disabled', true );
		row.classList.add( 'masked' );
	}

	row.setAttribute( 'data-state', data.name );
	label.innerText = data.name;

	row.appendChild( check );
	row.appendChild( label );
	row.appendChild( link );

	return row;
}

function updateLiWithResult( result ){
	var ul = document.getElementById( 'list-states' ),
		li = ul.querySelector( 'li[data-state=' + result.state + ']' ),
		spinner = li.querySelector( '.fa-spinner' ),
		newIcon = document.createElement( 'I' );

	li.removeChild( spinner );

	newIcon.setAttribute( 'class', result.money ? 'status fas fa-dollar-sign' : 'status fas fa-times' );

	li.appendChild( newIcon );
}