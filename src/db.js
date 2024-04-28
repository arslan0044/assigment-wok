require('dotenv').config();

const mongoose = require('mongoose');

// Connect to the MongoDB server using the environment variable
mongoose.connect(
    'mongodb+srv://adminuser:nGogT314RksQTGOX@cluster0.9ya7xfn.mongodb.net/',
    // "mongodb+srv://businessman2118:Just@passw0rd@assignment-work.p4zhewp.mongodb.net/?retryWrites=true&w=majority&appName=assignment-work",
    // 'mongodb+srv://businessman2118:Just@passw0rd@assignment-work.p4zhewp.mongodb.net/?retryWrites=true&w=majority&appName=assignment-work',
// "mongodb://localhost:27017/newproject",
 {
    serverSelectionTimeoutMS: 5000, // Optional but recommended

}).then(console.log("databse started "));

