module.exports = function(){
	this.StateService = {

		getImplementationStatus: function(){
			return STATES.map( function( state ){
				return {
					name: state.name,
					implemented: state.implemented,
					url: state.url
				};
			});
		},

		getResult: function( state, person ){
			var result = {
				state: state.name,
				money: 0
			};

			return result;        
		}
	}
};