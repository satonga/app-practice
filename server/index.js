const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f91cd18521d94e419a6cb0f0116ec1b5',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
// rollbar.log('Hello world!')

const app = express()

app.get('/', (req, res) => {
    rollbar.info('Someone has visited the puppy page')
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.use(express.static('public'))



const port = process.env.PORT || 4005

app.listen(port, () => console.log(`Listening on ${port}`))