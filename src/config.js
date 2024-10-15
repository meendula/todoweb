const mongoose=require('mongoose');
const connect=mongoose.connect('mongodb://localhost:27017/todo');

connect.then(()=>{
    console.log("Mongodb connected Succesfully");
},(err)=>{
    console.log(err);
});

const LoginSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const Login=mongoose.model('Users',LoginSchema);

module.exports=Login;