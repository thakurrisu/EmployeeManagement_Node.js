const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/employees_db").then(()=>{
    console.log("Db connection successful")
}).catch((err)=>{
    console.log(err);

})