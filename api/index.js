
const express = require('express');
const app = express();

const Data = require('../data/data');
const connectDb = require('../config/db');

app.use(express.json());

app.get('/api', (req, res) => {
    res.send("this is main");
})

connectDb().then(() => { 
    // app.listen(5000, () => {
        console.log("Server has started at : http://localhost:5000");  
    // })
}).catch((err) => {
    console.log('error');
    console.log(err);
})

// connect DB safely (Vercel-friendly)
// const start = async () => {
//     try {
//         await connectDb();
//         console.log("DB connected");
//     } catch (err) {
//         console.log("DB error:", err);
//     }
// };

// start();

app.use('/api/data', Data);

module.exports = app;
