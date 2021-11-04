// Functions
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '078df177ed74422abaa982e73f6ebe85',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const giveAlert = () => {
    rollbar.info('User clicked on information link')
    alert('Fill out the information on the following page for the puppy!')
}