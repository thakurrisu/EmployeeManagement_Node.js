const mongoose=require('mongoose')
const validator=require('validator')

const EmployeeSchema=new mongoose.Schema({
    name :{
        type:String,
        unique:true,
        require:true,
        minlength:3
    },
    email:{
        type:String,
        require:[true,"Please provide Email"],
        unique:[true,"Email is present"] ,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not correct");
            }
        }
        
    },
    phone:{
        type:Number
    },
    joindate:{
        type : Date
    }
}) 

const Employee=new mongoose.model('Employee',EmployeeSchema)


module.exports= Employee