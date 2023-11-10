const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const users = require('./cloudinary-express/config/database');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post('/signup', async (req, res) => {

    const data = {
        username: req.body.username,
        password: req.body.password
    }

    const existUser = await collection.findOne({username: data.username});
    if(existUser){
        res.send('Username already taken! Please try again!');
    }else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword;

        const userdata = await Collection.insertMany(data);
        console.log(userdata);
    }
})

app.post('/login', async (req, res) => {
    try{
        const check = await collection.findOne({name: req.body.username});
        if(!check){
            res.send('Username cannot be found!')
        }
        const passwordMatch = await bcrypt.compare(req.body.password, check.password);
        if(passwordMatch){
            res.render('home');
        }else{
            req.send('Wrong Password!');
        }
    }catch{
        res.send('Wrong Login Details');
        }
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})

