const mongoose= require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("db is connected"))
    .catch((error)=>{
        console.error("issue in db connect")
        console.error(error.massage)});
    process.exit(1)

}

module.exports=dbConnect;








// mongoose.connect(
//     process.env.DB_URL
// ).then(() => {
//     console.log("Database connection is successfull.");
//     app.listen(process.env.PORT, () => {
//         console.log("Server is running on port 3000");
//     });
// }).catch(() => {
//     console.log("Database connection failed!");
// })
