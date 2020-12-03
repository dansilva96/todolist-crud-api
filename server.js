const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/todolist-crud',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
require('./src/models/Task')

app.use('/', require('./src/routes'))

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})