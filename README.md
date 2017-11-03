"# UMSL.Womens.Hackathon" 
echo "# UMSL.Womens.Hackathon" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jorwalk/UMSL.Womens.Hackathon.git
git push -u origin master


# Getting Started
## Setup Folder & File Structure
```
mkdir hackathon
cd hackathon
mkdir public
mkdir views
touch server.js
cd views
touch index.html
touch layout.html
cd ..
cd public
mkdir img
mkdir js
mkdir css
```
### Setup Node Package Managed Project
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
```
npm init
```
Enter
* package name
* version
* description
* entry point
* test command
* git repository
* keywords
* author
* license
* yes

### Install dependencies
```
npm install --save hapi@16.6.2
npm install --save handlebars
npm install --save inert
npm install --save vision
```
## Repository
### Setup Git
```
git init
```
### Add Public Repository and Push
```
git remote add origin git@bitbucket.org:JordanWalker/test.git
git push -u origin master
```

## NodeJS server
In order to create a Hapi NodeJs project we need to add the following code.

Require the needed packages install previously through npm.
```
var Hapi = require('hapi')
var Vision = require('vision')
var Handlebars = require('handlebars')
var Inert = require('inert')
```
Create a server with a host and port, add server’s connection information
```
var server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: process.env.PORT || 5000
})
```
Add a default root route
```
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var data = { message: 'Hello from Future Studio' }
    reply.view('index', data)
  }
})
```
Register vision to your server instance, configure template support
```
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
```
Register inert and configure route to serve assets
```
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
```
Start the server
```
server.start(function(err) {
  if (err) {
    throw err
  }

  console.log('Server running at: ', server.info.uri)
})
```
### Layout View
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title></title>
  </head>
  <body>
    <article>
      {{{content}}}
    </article>
  </body>
</html>
```
### Index View
```
{{!< layout}}
{{! The tag above means - insert everything in this file into the {content} of the layout.html template }}

<h1>{{title}}</h1>
<p>{{message}}</p>
```

Once the server js file has the necessary code, in a command prompt / terminal
```
node server.js
- or -
nodemon server.js
```
### HTML Responsive Template
Build responsive, mobile-first projects on the web with the world's most popular front-end component library. [Bootstrap](http://getbootstrap.com/)

Add the following link and style tags to the template.html file

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"</script>
```

Use a variation from the default template style, free themes for Bootstrap [Bootswatch](https://bootswatch.com/)

Download the `.css.min` to the css folder, and add stylesheet rel to html head
```
<link rel="stylesheet" href="">
```
