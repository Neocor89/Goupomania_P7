const express = require('express');
const app = express();

// const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const db = require('./models');
const userRoutes = require("./Routes/user.js"); 
const messageRoutes = require("./Routes/post.js"); 
const answerRoutes = require("./Routes/comment.js"); 

db.sequelize
    .authenticate()
    .then(() => {
        console.log('connexion à la base de données');
        db.sequelize.sync({
            /*  force:true */
        })
    })
    .catch(error => {
        console.log(error);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use('/images', express.static(path.join(__dirname, 'images'))); 

app.use('/api/auth', userRoutes);
app.use('/api/posts', messageRoutes); 
app.use('/api/comments', answerRoutes); 

module.exports = app; 