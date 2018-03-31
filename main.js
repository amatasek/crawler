/**
 * Created by Andrew Matasek on 3/28/2018
 */

require( './statics/Settings.js' )();
require( './statics/States.js' )();
require( './services/StateService.js' )();

console.log( 'Starting Application:', new Date().toUTCString() );

var express = require( 'express' ),
	app = express();
   
app.http = require( 'http' ).Server( app );
app.io = require( 'socket.io' )( app.http );

app.use( express.static( __dirname + '/client' ) );

app.http.listen( SETTINGS.port, function(){
	console.log( 'Navigate your browser to localhost:' + SETTINGS.port );
});

app.io.on( 'connection', function( client ){
	console.log( 'Registering Handlers' );
	require( './handlers/FormHandler.js' )( app.io, client );
	
	console.log( 'Sending implementation status to client' );
	client.emit( 'implementation', StateService.getImplementationStatus() );
});