const mysql = require('mysql');
const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Nivi@7492',
  database: 'myDB',
  port: '3306'
});

// //  const Pool = require('pg').Pool
// //  const pool = new Pool({
// //    user: 'postgres',
// //    host: 'localhost',
// //    database: 'myDB',  
// //    password: 'Nivi@7492',
// //    port: 5432,
// //  })

 const formtable = (request, response) => {
  console.log(request.query.name);
     con.query("Select * from forms WHERE name = '"+request.query.name+"'", (error, results) => {
     
      if (error) {
        throw error
          } 
        else{
          // response.status(200).send(results.rows[0])
          response.render('output.ejs', { forms: results }); 
        }
      })
}  

const getUsers = (request, response) => {
  const { name, dept, project, datefrom, dateto, wip, ka, nexts } = request.body

     con.query(`copy (SELECT * FROM forms) TO 'C:/Users/Public/file.csv' DELIMITER ',' CSV HEADER`, (error, results) => {
   
      if (error) {
        throw error
      }
      response.status(200).send(`Downloaded the user: ${name} in the path : C:/Users/Public/file.csv`)
    })
  }

  const createUser = (request, response) => {    
    console.log(request.body);
   // const { name, dept, project, datefrom, dateto, wip, ka, nexts } = request.body
   results= request.body
    response.render('output.ejs', { results });
    // con.query('Insert into forms (name, dept, project, datefrom, dateto, wip, ka, nexts) values(?,?,?,?,?,?,?,?)', [name, dept, project, datefrom, dateto, wip, ka, nexts],(error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   // response.status(201).send(`User added with name: ${name}`)
    //  response.render('output.ejs', { forms:results }); 

  //  else{
  //   con.query("Select * from forms WHERE name = '"+request.query.name+"'", (error, results) => {
     
  //     if (error) {
  //       throw error
  //         } 
  //       else{
  //         // response.status(200).send(results.rows[0])
  //         response.render('output.ejs', { forms: results }); 
  //       }
  //     })
  //    }
  // })
  }

  module.exports = {
    getUsers,
    createUser,
    formtable
  }