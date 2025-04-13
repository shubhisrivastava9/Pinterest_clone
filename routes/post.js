import mongoose from 'mongoose';



mongoose.connect("mongodb+srv://shubhisrivastava9:Shubhi%402806@cluster0.zsepak2.mongodb.net/shub?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"));

const postSchema = new mongoose.Schema({
  user:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
title:String,
Description:String,
image:String,

})



const PostModel = mongoose.model('post', postSchema);
export default PostModel;