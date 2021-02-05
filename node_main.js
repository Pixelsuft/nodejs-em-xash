const express = require('express');
const app = express();
const sets = {
  port: process.env.PORT || 5000,
  public: 'static'
};
app.use(express.static(__dirname + '/' + sets['public']));
app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/' + sets['public'] + '/error404.html');
});
app.listen(sets['port']);
console.log('Server started!');
