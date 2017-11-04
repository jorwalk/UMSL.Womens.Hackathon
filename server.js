var Hapi = require('hapi')
var Vision = require('vision')
var Handlebars = require('handlebars')
var Inert = require('inert')
var server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 5000
})
/* ROUTES */
server.route([{
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var data = { message: 'Hello from Future Studio' }
    reply.view('index', data)
  }
},{
  method: 'GET',
  path: '/feedback',
  handler: function (request, reply) {
    var data = { message: 'Provides feedback to community', title: 'Feedback' }
    reply.view('feedback', data)
  }
},{
  method: 'GET',
  path: '/alert',
  handler: function (request, reply) {
    var data = { message: 'Put alert here', title: 'Alert' }
    reply.view('alert', data)
  }
},{
  method: 'GET',
  path: '/awareness',
  handler: function (request, reply) {
    var data = { message: 'Put awareness here', title: 'Awareness' }
    reply.view('awareness', data)
  }
}])



/* REGISTER */
server.register(Vision, function(err) {
  if (err) {
    console.log('Cannot register vision')
  }

  server.views({
    engines: {
      html: Handlebars
    },
    path: __dirname + '/views',
    layout: 'layout'
  })
})
server.register(Inert, (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });
});
server.start(function(err) {
  if (err) {
    throw err
  }

  console.log('Server running at: ', server.info.uri)
})
