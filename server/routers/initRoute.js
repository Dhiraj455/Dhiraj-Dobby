const express = require('express');

const initRoute = (app) =>{
    app.use(require("./userRouter"))
}

module.exports = initRoute;