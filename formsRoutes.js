// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'myDB',
//   password: 'Nivi@7492',
//   port: 5432,
// })

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM form', (error, results) => {
//         // 
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

//   const createUser = (request, response) => {
    
//     const { name, dept, project, datefrom, dateto, wip, ka, nexts } = request.body
  
//     pool.query('Insert into form (name, dept, project, datefrom, dateto, wip, ka, nexts) values($1, $2, $3, $4, $5, $6, $7, $8)', [name, dept, project, datefrom, dateto, wip, ka, nexts],(error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with name: ${name}`)
//     })
//   }

//   module.exports = {
//     getUsers,
//     createUser
//   }