const express = require('express');

const initRoute = (app) =>{
    app.use(require("./userRouter"))
    app.use(require("./imageRouter"))
}

module.exports = initRoute;