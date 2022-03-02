'use strict';

const UI = require('../lib/ui');
const Server = require('@liqd-js/server');
const Template = require('@liqd-js/template');

const template = new Template({ directories: [ __dirname + '/templates', UI.path ]});
const server = new Server({ port: 8080 });

server.get( '/', async( req, res ) =>
{
    res.reply( await template.render( 'Test' ), 'text/html' );
});

server.error( error => console.log( error ));