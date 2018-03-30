let settings = {};

//Global Settings
settings.debugging = true;
settings.port = 3000;

console.log( 'Initializings Settings:', settings );

module.exports = function () {
	this.SETTINGS = settings;
};