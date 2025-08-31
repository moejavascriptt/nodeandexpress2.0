const express = require('express')

const app = express()

//start the server
app.listen(5000, () => {
  console.log('server is up and running, thank you')
})

// homepage
app.get('/', (req, res) => {
  res.send('Hello, welcome to the homepage!')
})

app.get('/products', (req, res) => {
  res.send('This is all of our products at the moment.')
})

app.get('/learning', (req, res) => {
  res.send('Learning section abouit the store.')
})

app.get('/contactpage', (req, res) => {
  res.send('This is our contact page, feel free to reach out!')
})

app.post('/signup', (req, res) => {
  res.send('Click here to signup ')
})
