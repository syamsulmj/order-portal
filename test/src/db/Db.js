const { Client } = require('pg')

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'setel',
  password: '',
  port: 5433,
})

client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
