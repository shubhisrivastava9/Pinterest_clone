import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://shubhisrivastava9:Shubhi%402806@cluster0.zsepak2.mongodb.net/shub?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;

    try {
      await db.collection('posts').dropIndex('username_1');
      console.log("✅ Dropped 'username_1' index from 'posts' collection.");
    } catch (err) {
      console.error("❌ Failed to drop index:", err.message);
    } finally {
      process.exit(0);
    }
  })
  .catch(err => {
    console.error("Connection error:", err.message);
    process.exit(1);
  });
