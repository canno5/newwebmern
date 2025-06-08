// const validate = (req, res,next)=>{
const errMiddle = (err, req, res,next)=>{
    // console.log('The Err mildle Info '+ err);
    // console.log(err);

    const status = err.status || 500;
    const message = err.message || "Fill Inout Fields Properly";
    const extraDetails = err.extraDetails || "Server Error";
    res.status(status).json({msg: extraDetails, err_msg: message})
    next();
    // console.log('The Err mildle '+ err);
    // console.log("Err "+err);
    // if(req.body.name.length <= 3){
    //     throw new Error("valudate "+ err.errors.name)
    // }
    // console.log(err.errors.name.properties.message);
    // console.log(req.body.name);
    //    console.log(err.errors.name);
    // const status = err.status || 500;
    // const message = err.messgae || "Fill Inout Fields Properly";
   
   
    // console.log("The "+ status);
    // console.log(...status);
    // console.log(err.ValidatorError);
    // console.log("The "+ err.errors.name);
    // const {status, message} = err;
    // console.log(status);
    // console.log(message);
    // console.log(err.status);
    // console.log(err.errors.name.properties.message);
    // console.log("The Falied: "+ err);
    // console.log(err.password);
    // try{
    //     return req.status(401).json({msg: "User UnAuthorized"});
    //     // next();

    // }catch(er){
    //     next(err);
    //     // console.log(er);
    //     console.log('The validate '+er);
    // }


    // return res.status(401).json({msg: "User UnAuthorized"});
    // next();
   
   
//    return res.status(401).json({msg: "User UnAuthorized"});
   
   // return res.status(401).json({msg: "Error User UnAuthorized"});
    // console.log(next);
    // console.log(next);
    // console.log(err.body);
    // console.log(err.);
    // console.log(req.body);
    // console.log(req);
    // console.log(next);
    // console.log(req);
    // res.send()
    // next();

    // const errMsg = req.body.name || "Fill Input Fileds";
    // const status = err.body.name || "Fill Input Fileds";
    // console.log(err.body.name);
    // req.status(401).json({msg:errMsg})
}
module.exports = errMiddle;