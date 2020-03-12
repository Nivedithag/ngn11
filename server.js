const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const pg = require('pg')
const conString = 'postgres://postgres:Nivi@7492@localhost/myDB'


app.post('/form', function (req, res, next) {
  const user = req.body

  pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
    client.query('INSERT INTO form (name, dept, project, datefrom, dateto, wip, ka, nexts) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [form.name, form.dept, form.project, form.datefrom, form.dateto, form.wip, form.ka, form.nexts], function (err, result) {
      done() //this done callback signals the pg driver that the connection can be closed or returned to the connection pool

      if (err) {
        // pass the error to the express error handler
        return next(err)
      }

      res.send(200)
    })
  })
})
// //const db = require('./formsRoutes')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// //app.use(express.static(__dirname +'/form/form.component.html'))

// app.get('/formall', (req,res) => {
//   res.render('/frontend/form')
// });

// const users = []

// app.post('/users', function (req, res) {
//     // retrieve user posted data from the body
//     const user = req.body
//     users.push({
//       name: user.name,
//       dept: user.dept,
//       project: user.project,
//       datefrom: user.datefrom,
//       dateto: user.dateto,
//       wip: user.wip,
//       ka: user.ka,
//       nexts: user.nexts
//     })
//     res.send('successfully registered')
// })

//   app.listen(port, () => {
//     console.log(`App running on port ${port}`)
//   })