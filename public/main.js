// Functions

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f91cd18521d94e419a6cb0f0116ec1b5',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


const giveAlert = () => {
    rollbar.info('User clicked on information link')
    alert('Fill out the information on the following page for the puppy!')
}