import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';


mongoose.connect("mongodb+srv://shubhisrivastava9:Shubhi%402806@cluster0.zsepak2.mongodb.net/shub?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"));

const userSchema = new mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  contact:Number,
  boards:{
    type:Array,
    default: []
  },
  posts:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"post"
    }
  ]
})

userSchema.plugin(passportLocalMongoose);

const user = mongoose.model('User', userSchema);
 export default user; 