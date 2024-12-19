const mongoose = require('mongoose');

const connectDb = async ()=>{
    const mongoURL = process.env.MONGO_URL;
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected to mongodb');
    } catch (error) {
        console.log('error ')
    }

}

module.exports = connectDb;