const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('connected successfully');
}).catch((err) => {
    console.log('not connected');
})
