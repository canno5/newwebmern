const zod = require('zod');
const signupSchema =  zod.object({
    name: zod.string({ required_error: 'Name is required' }).trim().min(3, { message: 'Name must be have at least 3 chars' }).max(255, { message: 'Name must not be more than 255 characters' }),    
    
    phone: zod.string({ required_error: 'Phone Number is required' }).trim().min(10, { message: 'Phone Number must be have at least 10 chars' }).max(20, { message: 'Phone Number must not be more than 255 characters' }),

    email: zod.string({ required_error: 'Email Address is required' }).email({ message: 'Invalid Credentail' }).trim().min(3, { message: 'Email must be have at least 3 chars' }).max(255, { message: 'Email Address must not be more than 255 characters' }),   
    password: zod.string({ required_error: 'Password is required' }).trim().min(3, { message: 'Password must be have at least 3 chars' }).max(255, { message: 'Password must not be more than 255 characters' })
});
const signinSchema =  zod.object({
    email: zod.string({ required_error: 'Email Address is required' }).email({ message: 'Invalid Credentail' }).trim().min(3, { message: 'Email must be have at least 3 chars' }).max(255, { message: 'Email Address must not be more than 255 characters' }),   
    password: zod.string({ required_error: 'Password is required' }).trim().min(3, { message: 'Password must be have at least 3 chars' }).max(255, { message: 'Password must not be more than 255 characters' })
});
module.exports = {signupSchema, signinSchema};