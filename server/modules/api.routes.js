var apiRoute = require('express').Router();
var admin = require('./admin/admin.routes');
var core = require('./core/core.routes');
var { verifyToken, isAdmin } = require('./token.manager');

module.exports = function bindApiRoutes(app) {
    apiRoute.use('/admin', verifyToken, isAdmin, admin);
    apiRoute.use("/core", core);
    app.use("/api", apiRoute);
}