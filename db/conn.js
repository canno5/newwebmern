const mongoose = require('mongoose');
const dbConnect = async () => {
    try { 
        await mongoose.connect(process.env.MONGOURI);
        console.log('Conntecion Created');
    } catch (err) {
        console.log('Connection ' + err);
        process.exit(0);
    }
}
module.exports = dbConnect;