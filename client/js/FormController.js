function onSubmit(){
	var form = event.currentTarget,
		button = form.querySelector( 'button' ),
		lis = form.querySelectorAll( 'li' ),
		excludedStates = [];

	// Disable the Start button
	button.disabled = true;

	// Remove focus from field in case of enter press
	document.activeElement.blur();

	// Iterate over all states collecting exclusions and starting spinners
	lis.forEach( function( li ){
		var check = li.querySelector( 'input' ),
			state = li.dataset;

		if ( !check.checked && !check.disabled ) {
			excludedStates.push( li.dataset.state );
		} else if ( check.checked ) {
			var spinner = document.createElement( 'I' );            
			spinner.setAttribute( 'class', 'status fas fa-spinner fa-spin' );
			li.appendChild( spinner );
		}
	});

	// Collect and format all form data
	var payload = {
		person: {
			first: document.getElementById( 'field-first' ).value,
			last: document.getElementById( 'field-last' ).value
		},
		exclude: excludedStates
	};

	io().emit( 'formsubmission', payload );

	// Prevent default form submission behavior
	return false;
}