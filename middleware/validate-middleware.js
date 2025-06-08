const validate = (schema) => async (req,res,next)=>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        // parseBody = req.body;
        // req.body = parseBody; //write
       next(); 
    }catch(err){
        const [val] = err.errors[0].path;
        const errObj = {
            status: 422,
            message: val,
            extraDetails: err.errors[0].message
        }
        next(errObj);
    }
}
module.exports = validate;