// const { Register } = require('../model/modelRegister');
// const { default: Register } = require('../model/modelRegister');
// const { default: Register } = require("../model/Register");
// import passwordHash from 'password-hash'
// const passwordHash = require('password-hash');
// import passwordHash from 'password-hash'
const passwordHash = require("password-hash");
const Registers = require("../model/modelRegister");
// import Registers from '../model/modelRegister';


const home = (req, res) => {
    res.send("Hello World!1");
    console.log(req.user);
    // console.log(req.token);
    // console.log(req.userId);

}
// const register = async (req, res, next) => {
const register = async (req, res) => {
    // console.log(req.body);
    try {
        const { name, phone, email, password, cpassword, gender } = req.body;
        if (password === cpassword) {
            // if (user && user_2) {
            // const user = await Register.findOne({email,phone});
            const user = await Registers.findOne({ email });
            const user_2 = await Registers.findOne({ phone });
            if (user || user_2) {
                res.status(422).json({ msg: "User Already Exits" });
                return;
            }
            const data = await Registers.create({ name, phone, email, password, gender });
            const token = await data.genreateToken();
            res.status(201).json({ userId: data._id, msg: "Register Sucessfully", userToken: token });
        } else {
            res.status(422).json({ msg: "Invalid Credentail" });
        }
    } catch (err) {
        res.status(422).json({ msg: err.errors });
        // const errObj = {
        //     status: 422,
        //     message: err.errors.name.path,
        //     extraDetails: err.errors.name.message
        // }
        // next(errObj)

    }
}
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Registers.findOne({ email });
        if (user) {
            // const token = await user.genreateToken();
            // console.log(passwordHash.isHashed(password));
            // console.log(passwordHash.verify(password));
            if (passwordHash.verify(password, user.password)) {
                return res.status(201).json({ msg: 'Login Sucessfully', userId: user._id.toString(), userToken: await user.genreateToken() });
            }
            res.status(401).json({ msg: "Invalid Credentails" });
        } else {
            res.status(401).json({ msg: 'Invalid Credentail' });
        }
    } catch (err) {
        // console.log(err);
        next(err);
        // console.log('The Login Err ' + err);
    }

}
module.exports = {
    home, register, login,
}

// module.exports = { home, register, login };
// export {home, register, login}
// db.registers.findOne({email: 'cannoi@gmail.com', phone: '031310549312'});