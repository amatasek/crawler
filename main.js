/**
 * Created by Andrew Matasek on 3/28/2018
 */

'use strict';

console.log( 'Starting Application:', new Date().toUTCString() );

var express = require( 'express' ),
    app = express(); 
   
app.http = require( 'http' ).Server( app ),
app.io = require( 'socket.io' )( app.http );

app.use( express.static( __dirname + '/client' ) );

app.http.listen( 3000, function(){
    console.log( 'Navigate your browser to localhost:3000' );
});

app.io.on( 'connection', function( client ){
    console.log( 'Sending implementation status to client' );
});