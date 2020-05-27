const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
require('./server/config/mongoose.config');
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('./server/routes/user.routes');
const playerRoutes = require('./server/routes/pirate.routes');

playerRoutes(app);
userRoutes(app);
app.listen(8000, () => console.log("Listening on port: 8000"));