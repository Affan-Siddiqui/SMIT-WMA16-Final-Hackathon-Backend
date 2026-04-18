
const mangoose = require('mongoose');

// mongodb+srv://maffans913_db_user:db_User_913@cluster.hnrho'h5.mongodb.net/

const connectDB = () => { 
    
    return new Promise((resolve, reject) => {
        mangoose.connect(`mongodb+srv://affan:compasspassword913@cluster.hnrhoh5.mongodb.net/?appName=Cluster`)
            // 'mongodb+srv://maffans913_db_user:db_User_913@cluster.hnrhoh5.mongodb.net/?appName=Cluster'
        .then(() => {
            console.log('db connected');
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = connectDB; 