const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcrypt')
const app = express()
const port = 4000

const salt = bcrypt.genSaltSync(10)

app.use(cors())
app.use(express.json())

mongoose.connect(
  'mongodb+srv://blog:94SarNL4qW22MH05@cluster0.5t5joft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    })
    res.json(userDoc)
  } catch (error) {
    res.status(400).json({ error })
  }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// user: blog
// password: 94SarNL4qW22MH05
// mongodb+srv://blog:94SarNL4qW22MH05@cluster0.5t5joft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
