const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);
const db = mongoose.connection;
console.log(db);
db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

