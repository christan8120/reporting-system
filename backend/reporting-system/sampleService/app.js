const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.status(200).json({ users: [{ id: 1, name: "bog" }] });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})