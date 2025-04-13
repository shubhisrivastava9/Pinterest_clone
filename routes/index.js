import express from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import upload from './multer.js';
import usermodel from './users.js';
import postmodel from './post.js';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('register');
});
router.get('/add-post', function(req, res, next) {
  res.render('add-post');
});




router.get('/profile',isloggedIn,async function(req, res, next) {
  const user=await usermodel.findOne(
    {
      
username:req.session.passport.user
    }
  ).populate('posts');
  res.render('profile',{user})
});
router.get('/login', function(req, res, next) {
  res.render('index');
});

router.get('/show/posts',isloggedIn,async function(req, res, next) {
  const user=await usermodel.findOne(
    {
      
username:req.session.passport.user
    }
  ).populate('posts');
  res.render('profile',{user})
.populate("posts");
res.render("show",{user});
});


router.post("/login",passport.authenticate("local",
  {
   successRedirect:"/profile",
   failureRedirect:"/" ,
   failureFlash:true
  }),function(req,res)
{}
);




passport.use(new LocalStrategy(usermodel.authenticate()));

router.post('/register', async function(req, res, next) {
const data=new usermodel({
  username:req.body.username,
  email:req.body.email,
  contact:req.body.contact
})

try {
  await usermodel.register(data, req.body.password);
  passport.authenticate("local")(req, res, function () {
    res.redirect("/profile");
  });
} catch (error) {
  if (error.name === "UserExistsError") {
    req.flash("error", "Username already taken.");
    // return res.redirect("/");
  }
  console.error("Registration error:", error);
  res.status(500).send("Something went wrong.");
}
});



router.get('/feed',isloggedIn, async function(req, res, next) {
  const user=await usermodel.findOne({username:req.session.passport.user})
  const posts=await postmodel.find().populate("user")

  res.render("feed",{user,posts})
  
  });


router.post('/createpost', isloggedIn, upload.single("file"), async function(req, res, next) {
  try {
   
    const user = await usermodel.findOne({ username: req.session.passport.user });

    // Safely access logged-in user's username
    const username = req.user?.username;

    if (!username) {
      return res.status(400).send('User not logged in or username missing.');
    }

    const post = await postmodel.create({
      user: user._id,
      title: req.body.title,
      description: req.body.description,
      image: req.file.filename,
      username,
    });
    user.posts.push(post._id); 
    await user.save();
    res.redirect('/profile');
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).send(err.message); // fixed err reference
  }
});


router.get("/logout",function(req,res)
{
  req.logout(function(err)
{if(err)
{
  return next(err);
}
res.redirect('/');
});
})
function isloggedIn(req,res,next)
{
  if(req.isAuthenticated())
    return next();

  res.redirect("/");
}

router.post('/fileupload', isloggedIn, upload.single('image'), async (req, res) => {
  console.log("File:", req.file);
  console.log("Caption:", req.body.filecaption);
  
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  const user=await usermodel.findOne(
    {
      
username:req.session.passport.user
    }
  )
  user.profileImage=req.file.filename;
  await user.save();
  res.redirect('/profile');

});


export default router;


