var apiRoute = require('express').Router();
var admin = require('./admin/admin.routes');

module.exports= function bindApiRoutes(app){
apiRoute.use('/admin', admin);

app.use("/api", apiRoute);
}