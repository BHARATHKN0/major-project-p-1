import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  full_name:{
    type:String,
    required: true,
    unique:true
    
  },
  reva_srn:{
    type:String,
    required: true,
    unique:true
    // match: /^[A-Za-z]\d{5}$/
  },
  reva_branch:{
    type:String,
    required: true,
    unique:true
    
  },
  reva_mail:{
    type:String,
    required: true,
    unique:true
  },
  username:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required: true,
    unique:true
  }
})

const user = mongoose.model('user', userSchema);
export default user;