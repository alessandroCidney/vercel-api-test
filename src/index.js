const express = require('express')

const cors = require('cors')

const app = express()

const port = 8000

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Success',
  })
})

app.listen(port, () => {
  console.log(`The application is accessible via port http://localhost:${port}`)
})
