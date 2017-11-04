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

const awareness = {
	"officials": [{
		"title": "Mayor",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/mayor/profiles/images/Krewson-Official-Photo-Profile-250px.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/mayor/profiles/profile-mayor-lyda-krewson.cfm",
			"name": "Lyda Krewson"
		}
	}, {
		"title": "Comptroller",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/comptroller/profiles/images/Darlene-Green_2-250px_2.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/comptroller/profiles/About-Comptroller-Darlene-Green.cfm",
			"name": "Darlene Green"
		}
	}, {
		"title": "President of the Board of Aldermen",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/aldermen/profiles/images/Copy-of-Reed_Lewis_6275.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/aldermen/profiles/profile-president-lewis-reed.cfm",
			"name": "Lewis Reed"
		}
	}, {
		"title": "Sheriff",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/sheriff/profiles/images/vernon-betts-250px.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/sheriff/profiles/vernon-betts.cfm",
			"name": "Vernon Betts",
			"phone": "(314) 622-4131"
		}
	}, {
		"title": "Recorder Of Deeds",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/recorder/profiles/images/Sharon_Quigley_Carpenter_4.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/recorder/profiles/recorder-of-deeds-sharon-quigley-carpenter.cfm",
			"name": "Sharon Carpenter",
			"phone": "(314) 622-4610"
		}
	}, {
		"title": "Collector of Revenue",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/collector/profiles/images/Gregory-F-X-Daly-Portrait-250px.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/collector/profiles/Gregory-fx-daly.cfm",
			"name": "Gregory F.X. Daly",
			"phone": "(314) 622-4111"
		}
	}, {
		"title": "Circuit Attorney",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/circuit-attorney/profiles/images/kimberly-gardner-circuit-attorney-250px.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/circuit-attorney/profiles/kim-gardner.cfm",
			"name": "Kim Gardner",
			"phone": "(314) 622-4941"
		}
	}, {
		"title": "Treasurer, City of St. Louis",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/treasurer/images/Treasurer-Tishaura-Jones_2_4-250px.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/treasurer/profiles/Tishaura-Jones.cfm",
			"name": "Tishaura O. Jones",
			"phone": "(314) 622-4700"
		}
	}, {
		"title": "License Collector",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/license/profiles/images/MavisTThompsonHeadShot-WR-131224.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/license/profiles/Mavis-T-Thompson-Esq.cfm",
			"name": "Mavis Thompson",
			"phone": "(314) 622-4528"
		}
	}, {
		"title": "Ward 01 Alderwoman",
		"data": {
			"image": "https://www.stlouis-mo.gov/government/departments/aldermen/profiles/images/Tyus_Sharon_8491.jpg",
			"cfm": "https://www.stlouis-mo.gov/government/departments/aldermen/profiles/alderman-sharon-tyus.cfm",
			"name": "Sharon Tyus",
			"phone": "(314) 622-3287"
		}
	}]
}

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
    var data = { message: 'Put awareness here', title: 'Awareness', data: awareness }
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
