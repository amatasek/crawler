let states = [
	
	{
		name: 'Missouri',
		abbreviation: 'MO',
		implemented: true,
		url: 'https://treasurer.mo.gov/UnclaimedProperty/',
		search: function( person, result ){
			return result;
		}
	},

	{
		name: 'Wisconsin',
		abbreviation: 'WI',
		implemented: true,
		url: 'https://tap.revenue.wi.gov/UCPSearch/_/',
		search: function( person, result ){
			return result;
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
		name: 'Indiana',
		abbreviation: 'IN',
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