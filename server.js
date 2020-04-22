 const express = require('express')
 const bodyParser = require('body-parser')
 const app = express()
 const port = 4000
 const db = require('./formsRoutes')

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/frontend/public'));


// function css(request, response) {
//   if (request.url === '/styles.css') {
//     response.writeHead(200, {'Content-type' : 'text/css'});
//     var fileContents = fs.readFileSync('./public/css/styles.css', {encoding: 'utf8'});
//     response.write(fileContents);
//   }
// }

// function js(request, response) {
//   if (request.url === '/form.js') {
//     response.writeHead(200, {'Content-type' : 'text/js'});
//     var fileContents = fs.readFileSync('./public/js/form.js', {encoding: 'utf8'});
//     response.write(fileContents);
//   }
// }

app.get('/frontend/public/css/styles.css', function(req,res) {
  res.sendFile('/frontend/public/css/style.css',{ root: __dirname})
 });

 app.get('/frontend/public/js/form.js', function(req,res) {
  res.sendFile('/frontend/public/js/form.js',{ root: __dirname})
 });

 app.get('/', function(req,res) {
  res.sendFile('/frontend/src/app/form/form.component.html',{ root: __dirname})
 });
 app.get('/formshow', function(req,res) {
  res.sendFile('/index.html',{ root: __dirname})
 });


app.get('/form', db.getUsers)
app.post('/formcreate', db.createUser)
app.get('/formshows', db.formtable)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
  })




