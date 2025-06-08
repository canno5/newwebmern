const jwt = require("jsonwebtoken");
const Registers = require("../model/modelRegister");

const auth = async (req, res, next) => {
    try {
        // console.log(req.params);
        // console.log(req.query.id);
        const token = req.query.token;
        // const token = req.header('Authorization');
        if (!token) {
            return res.json({msg: 'User is not Auhtntication Please Auhtntication'})
        }
        const isUser =  jwt.verify(token, process.env.SECREY_KEY)
        const user = await Registers.findById(isUser._id, {password:0});
        // const user = await Registers.findById(isUser._id).select({password:0});  

        req.user = user;
        req.userId = user._id;
        req.token = token;
        next();
    } catch (err) {
        console.log('The auth ' + err);
    }
}
module.exports = auth;