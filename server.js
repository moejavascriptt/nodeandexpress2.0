const express = require('express')

// initialize express
const app = express()

// basic route
app.get('/', (req, res) => {})

//start the serveer
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
