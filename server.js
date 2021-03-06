const http = require('http');
// bring in the app
const app = require('./app');

// allow environment to set port
const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log('App listening on ' + port + ' @ ' + (new Date()).toLocaleString());
});