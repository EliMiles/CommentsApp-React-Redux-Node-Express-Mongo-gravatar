const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/api/insert', { target: 'http://localhost:5000/' }));
// };

// module.exports = function(app) {
//   app.use(proxy('/api/comments', { target: 'http://localhost:5000/' }));
// };

module.exports = function(app) {
  app.use(proxy('/api/*', { target: 'http://localhost:5000/' }));
};