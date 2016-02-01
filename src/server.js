var Hapi = require('hapi')
  , server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 5000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply('Ok');
  }
});

server.start(function() {
  console.log('server running at', server.info.uri);
});