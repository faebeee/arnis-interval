'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

let server = new Hapi.Server();
let app = server.connection({
    port: process.env.PORT || 3000,
});

app.register([
        Inert,
    ],
    (err) => {
        if(err){
            throw err;
        }

    });

app.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './'
        }
    }
});


server.start( (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server running at: ${server.info.uri}`);

});

module.exports = server;