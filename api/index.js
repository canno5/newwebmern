const express = require("express");
const app = express();
let port = 2000 || process.env.PORT;
const router = require("../routes/routes");
const validate = require("../middleware/error-middleware");
const dbConnect = require("../db/conn");
require('dotenv').config();
const path = require('path');

// app.get('/:id', (req,res)=>{
//     console.log(req.query);
//     res.send(req.params.id);
// })

const staticPath = path.join(__dirname, '../frontend');
app.use(express.json());
app.use('/api', router);
app.use(validate);
app.use(express.static(`${staticPath}/build`));


// console.log(path.join(__dirname, '../frontend/build', 'index.html'));
// app.get('/*', (req,res)=>{
//     res.send('404 Error Page')
    // res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'))
// })
dbConnect().then(() => {
    app.listen(port, () => {
        console.log('Server Running at port ' + port);
    });
});



// const { default: dbConnect } = require("../db/conn");
// app.get('/', (req,res)=>{res.send("Hello World")});
// app.use('/route', router);
