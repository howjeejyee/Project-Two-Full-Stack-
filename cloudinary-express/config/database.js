const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

connect.then(() => {
    console.log('Database connected');
})
.catch(() => {
    console.log('Database not connected');
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const users = new mongoose.model("User", userSchema);
module.exports = users;