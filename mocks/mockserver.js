const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

const data = require('./data/data.json')

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get(`/list`, cors(), (req, res) => {
  const query = req.query
  const row = query.row

  const list = data.slice(0, row ? +row - 1 : 9)

  return res.json({ data: list })
})

// server states at port:4000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
