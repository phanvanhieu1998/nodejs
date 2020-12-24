const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    var a= 3;
    var b= 4;
    var c = a+b;
  res.send('Hello World! hahha')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})