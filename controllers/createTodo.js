const Todo = require("../models/Todo")


//default handler

exports.creatTodo=async(req,res) => {
try{
    // extract titile and description from request body(request ki body se)
    const {title,description}=req.body;
    // create a new Todo object and insert it on DB
    const response= await Todo.create({title,description})
// send a json response wuth a success    flag

res.status(200).json({
success:true,
data:response,
massage:"Entry created successfully"
});

}
catch(err){
    console.error(err);
    console.log(err);
    res.status(500).
    json({
     success:false,
     data:"internal server error",
     massage:err.massage,
      
    });
    
}};