const express = require('express');
require('./config/db');
const app = express();
const cookieParser = require('cookie-parser')
const initRoute = require('./routers/initRoute');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(cors({origin : true}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())

const upload = multer({
    destination: 'public/images',
});
app.use(express.static(path.join(__dirname, 'public')));

const dotenv = require('dotenv');
dotenv.config();

app.get("/", (req, res) => {res.send("Hello World")});
app.use(express.json());

initRoute(app);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

module.exports = app;