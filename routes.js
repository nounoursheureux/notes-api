var basicAuth = require('basic-auth');

module.exports = function(app,database) {
    var api = require('./api').init(database);
    app.route('/')
        .get(api.list)
        .post(api.new);
    app.route('/note/:id')
        .get(api.note)
        .put(api.update)
        .delete(api.delete);
    app.post('/auth',api.register);
};