var Browser = require( 'zombie' );

let states = [
	
	{
		name: 'Missouri',
		abbreviation: 'MO',
		implemented: true,
		url: 'https://treasurer.mo.gov/UnclaimedProperty/',
		search: function( person, result ){
			var me = this,
				browser = new Browser();

			return new Promise( function( resolve, reject ){		
				browser.visit( me.url, function(){
					
					// Check to make sure the elements we need exist
					if ( 
						!browser.document.getElementById( 'UCPname5' ) // text input
						||
						!browser.document.getElementById( 'Button1' ) // search button
					){
						result.error = 'Missing elements';
						resolve( result );
						return;
					}
					
					browser.fill( '#UCPname5', person.last + ' ' + person.first );

					browser.pressButton( '#Button1', function(){
						
						// A table only exists in the DOM if we have results
						var resultTableBody = browser.document.querySelector( 'tbody' );
						
						if ( resultTableBody ){						

							// Every row in the resulting table represents unclaimed funds
							for ( let row of resultTableBody.querySelectorAll( 'tr' ) ) {								
								result.money += Number( row.lastElementChild.innerHTML.trim().replace( /[^0-9\.]+/g, '' ) );
							}							
						}

						resolve( result );
					});
				});
			});	
		}
	},

	{
		name: 'Indiana',
		abbreviation: 'IN',
		implemented: true,
		url: 'https://indianaunclaimed.gov/apps/ag/ucp/index.html',
		search: function( person, result ){
			var me = this,
				browser = new Browser();

			// This site throws console errors
			browser.silent = true;

			return new Promise( function( resolve, reject ){		
				browser.visit( me.url, function(){
					
					// Check to make sure the elements we need exist
					if ( 
						!browser.document.getElementById( 'searchPhrase' ) // text input
						||
						!browser.document.querySelector( 'input.gsc-search-button' )  // search button
					){
						result.error = 'Missing elements';
						resolve( result );
						return;
					}
					
					browser.fill( '#searchPhrase', person.first + ' ' + person.last );		

					browser.pressButton( 'Search', function(){
						
						// Sometimes the following error randomly errors in Zombie's implementation
						try {
							var rows = browser.document.querySelectorAll( 'tr' );	
						} catch( e ){
							result.error = 'That strange error happened';
							resolve( result );
							return;
						}					

						if ( rows.length ){
							
							// Skip first row while looping
							for ( var i = 1; i < 20; i++ ){
								var row = rows[i],
									cell = row.children[6],
									content = cell.innerHTML;

								// On this site they hide the actual values inside comments in the cells
								// Lets dig them out of there
								result.money += Number( content.substring( content.lastIndexOf( '<!--' ) + 4, content.lastIndexOf( '-->' ) ).trim() );
							}
						}						

						resolve( result );
					});
				});
			});
		}
	},

	{
		name: 'Alabama',
		abbreviation: 'AL',
		implemented: false
	},
	{
		name: 'Alaska',
		abbreviation: 'AK',
		implemented: false
	},
	{
		name: 'Arizona',
		abbreviation: 'AZ',
		implemented: false
	},
	{
		name: 'Arkansas',
		abbreviation: 'AR',
		implemented: false
	},
	{
		name: 'California',
		abbreviation: 'CA',
		implemented: false
	},
	{
		name: 'Colorado',
		abbreviation: 'CO',
		implemented: false
	},
	{
		name: 'Connecticut',
		abbreviation: 'CT',
		implemented: false
	},
	{
		name: 'Delaware',
		abbreviation: 'DE',
		implemented: false
	},
	{
		name: 'District Of Columbia',
		abbreviation: 'DC',
		implemented: false
	},
	{
		name: 'Florida',
		abbreviation: 'FL',
		implemented: false
	},
	{
		name: 'Georgia',
		abbreviation: 'GA',
		implemented: false
	},
	{
		name: 'Hawaii',
		abbreviation: 'HI',
		implemented: false
	},
	{
		name: 'Idaho',
		abbreviation: 'ID',
		implemented: false
	},
	{
		name: 'Illinois',
		abbreviation: 'IL',
		implemented: false
	},
	{
		name: 'Iowa',
		abbreviation: 'IA',
		implemented: false
	},
	{
		name: 'Kansas',
		abbreviation: 'KS',
		implemented: false
	},
	{
		name: 'Kentucky',
		abbreviation: 'KY',
		implemented: false
	},
	{
		name: 'Louisiana',
		abbreviation: 'LA',
		implemented: false
	},
	{
		name: 'Maine',
		abbreviation: 'ME',
		implemented: false
	},
	{
		name: 'Maryland',
		abbreviation: 'MD',
		implemented: false
	},
	{
		name: 'Massachusetts',
		abbreviation: 'MA',
		implemented: false
	},
	{
		name: 'Michigan',
		abbreviation: 'MI',
		implemented: false
	},
	{
		name: 'Minnesota',
		abbreviation: 'MN',
		implemented: false
	},
	{
		name: 'Mississippi',
		abbreviation: 'MS',
		implemented: false
	},
	{
		name: 'Montana',
		abbreviation: 'MT',
		implemented: false
	},
	{
		name: 'Nebraska',
		abbreviation: 'NE',
		implemented: false
	},
	{
		name: 'Nevada',
		abbreviation: 'NV',
		implemented: false
	},
	{
		name: 'New Hampshire',
		abbreviation: 'NH',
		implemented: false
	},
	{
		name: 'New Jersey',
		abbreviation: 'NJ',
		implemented: false
	},
	{
		name: 'New Mexico',
		abbreviation: 'NM',
		implemented: false
	},
	{
		name: 'New York',
		abbreviation: 'NY',
		implemented: false
	},
	{
		name: 'North Carolina',
		abbreviation: 'NC',
		implemented: false
	},
	{
		name: 'North Dakota',
		abbreviation: 'ND',
		implemented: false
	},
	{
		name: 'Ohio',
		abbreviation: 'OH',
		implemented: false
	},
	{
		name: 'Oklahoma',
		abbreviation: 'OK',
		implemented: false
	},
	{
		name: 'Oregon',
		abbreviation: 'OR',
		implemented: false
	},
	{
		name: 'Pennsylvania',
		abbreviation: 'PA',
		implemented: false
	},
	{
		name: 'Rhode Island',
		abbreviation: 'RI',
		implemented: false
	},
	{
		name: 'South Carolina',
		abbreviation: 'SC',
		implemented: false
	},
	{
		name: 'South Dakota',
		abbreviation: 'SD',
		implemented: false
	},
	{
		name: 'Tennessee',
		abbreviation: 'TN',
		implemented: false
	},
	{
		name: 'Texas',
		abbreviation: 'TX',
		implemented: false
	},
	{
		name: 'Utah',
		abbreviation: 'UT',
		implemented: false
	},
	{
		name: 'Vermont',
		abbreviation: 'VT',
		implemented: false
	},
	{
		name: 'Virginia',
		abbreviation: 'VA',
		implemented: false
	},
	{
		name: 'Washington',
		abbreviation: 'WA',
		implemented: false
	},
	{
		name: 'West Virginia',
		abbreviation: 'WV',
		implemented: false
	},
	{
		name: 'Wisconsin',
		abbreviation: 'WI',
		implemented: false
	},
	{
		name: 'Wyoming',
		abbreviation: 'WY',
		implemented: false
	}
];

console.log( 'Initializing States:', states.map( function( state ){
	return state.name;
}));

module.exports = function () {
	this.STATES = states;
};