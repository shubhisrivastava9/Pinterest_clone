🎯 Pinterest Clone | MERN-Lite Stack (MongoDB, Express, Node.js, EJS)

🧰 Tech Stack
Tech	Description
⚙️ Node.js + Express	Backend server & routing
🌿 MongoDB + Mongoose	NoSQL database for storing user and pin data
🖼️ EJS	Templating engine for rendering views
🎨 Tailwind CSS	Utility-first styling for responsive UI
📸 Multer	Image upload middleware
🔒 Express-Session	Secure session-based authentication
✨ Core Features
🔐 User Authentication
Session-based login/logout system

Secure POST logout route

👤 Profile Management
Upload and display profile pictures

Hover-based upload icon with real-time preview

📌 Pin Board
Responsive, interactive pin grid

Hover zoom-in effect on pins

Add a new post via “➕ Add a Post” button

Pins contain titles and metadata, stored in MongoDB

📱 Fully Responsive
Mobile-first design

Built with Tailwind CSS utilities

🚀 Getting Started
1. 📥 Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/pinterest-clone.git
cd pinterest-clone
2. 📦 Install Dependencies
bash
Copy
Edit
npm install
3. ⚙️ Setup Environment Variables
Create a .env file with:

env
Copy
Edit
PORT=3000
SESSION_SECRET=your_secret_key
MONGODB_URI=mongodb://localhost:27017/pinterest-clone
Replace MONGODB_URI with your MongoDB Atlas URI if you're using the cloud.

4. ▶️ Start the Server
bash
Copy
Edit
npm start
🔗 Visit: http://localhost:3000

💾 MongoDB Integration
User profiles, pins, and sessions are stored in MongoDB.

Schema models (via Mongoose) manage data structure.

Connection is established in server.js:

js
Copy
Edit
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
📂 Project Structure
bash
Copy
Edit
📁 pinterest-clone
├── 📁 models
│   ├── 📄 User.js             # Mongoose schema for users
│   └── 📄 Pin.js              # Mongoose schema for image pins
├── 📁 routes
│   └── 📄 index.js            # Express routes
├── 📁 views
│   ├── 📁 partials
│   │   ├── 📄 header.ejs
│   │   └── 📄 footer.ejs
│   ├── 📄 layout.ejs
│   └── 📄 profile.ejs
├── 📁 public
│   └── 📁 images/uploads      # Uploaded images
│   └── 📄 styles.css          # Tailwind CSS
├── 📄 server.js
├── 📄 package.json
└── 📄 .env
🖼️ File Upload — Profile & Pin Images
Image upload handled by Multer

Stored locally in /public/images/uploads

Triggered by hidden <input type="file"> on profile or pin creation

💡 Future Enhancements
🏷️ Categories and tags for pins

❤️ Likes & comments on pins

📌 Save/share pins

🔍 Global search

👥 Follow other users

