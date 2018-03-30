let settings = {};

//Global Settings
settings.debugging = true;

console.log( 'Initializings Settings:', settings );

module.exports = function () {
	this.SETTINGS = settings;
};