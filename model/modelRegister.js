const {Schema, model} = require("mongoose")
const validator = require('validator');
const passwordHash  = require("password-hash");
const jwt = require("jsonwebtoken");
const RegisterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: [true, "Phone Number is Unique"],
        validate(val) {
            if (!validator.isMobilePhone(val)) {
                throw new Error("Mobile Number is Invalid");
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Address is Unique"],
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Invalid Email Address");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(val) {
            if (!validator.isStrongPassword(val)) {
                throw new Error("Passowd is Strong");
            }
        }
    },
    gender: {
        type: String,
        default: "Other"
    }
}, {
    timestamps: true
});
RegisterSchema.pre("save", function (next) {
    // if (this.isModified(this.password)) {}
    this.password = passwordHash.generate(this.password);
    next();

});
RegisterSchema.methods.genreateToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECREY_KEY);
        return token;
    } catch (err) {
        console.log("Toeken Err " + err);
    }
}
const Registers =  model("registers", RegisterSchema);
module.exports = Registers;
// export default Registers;
// Register.collection.drop();