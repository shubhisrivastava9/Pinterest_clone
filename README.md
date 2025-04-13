# 📌 Pinterest Clone — MERN-Lite Stack (MongoDB, Express, Node.js, EJS)

A visually appealing, fully responsive **Pinterest-style application** built using a lightweight MERN stack (without React), with server-side rendering via **EJS** and a mobile-first UI powered by **Tailwind CSS**.

---

## 🧰 Tech Stack

| Tech                 | Description                                      |
|----------------------|--------------------------------------------------|
| ⚙️ Node.js + Express | Backend server and routing                       |
| 🌿 MongoDB + Mongoose | NoSQL database for users and pins               |
| 🖼️ EJS               | Template engine for rendering dynamic views     |
| 🎨 Tailwind CSS       | Utility-first CSS framework                     |
| 📸 Multer            | Middleware for image upload                     |
| 🔒 Express-Session   | Session-based user authentication               |

---

## ✨ Core Features

### 🔐 User Authentication
- Secure session-based login/logout
- Protected routes and POST `/logout`

### 👤 Profile Management
- Upload and preview profile pictures
- Hover-based upload icon with real-time image preview

### 📌 Pin Board
- Responsive grid for pins with hover zoom-in effect
- ➕ “Add a Post” feature for new pins
- Pins contain title & metadata saved in MongoDB

### 📱 Responsive UI
- Mobile-first, fully responsive layout
- Designed using Tailwind CSS utility classes

---

## 🚀 Getting Started

### 📥 Clone the Repository
```bashing Mongoose models. The MongoDB connection is defined in server.js:


### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd pinterest-clone
```


💡 Replace the **MongoDB URI** with your **MongoDB Atlas connection string** if you're using the cloud.

### 4️⃣ Start the Server
Start the application:
```bash
npm start
```
🌐 Visit the application at: [http://localhost:3000](http://localhost:3000)

---

## 💾 MongoDB Integration

Data is managed using **Mongoose schemas**. The database connection is established in `server.js`:
```javascript
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("🟢 MongoDB connected");
}).catch((err) => {
  console.error("🔴 MongoDB connection error:", err);
});
```

---

## 📁 Project Structure

```plaintext
📂 pinterest-clone/
├── 📁 models/
│   ├── User.js             # Mongoose schema for user
│   └── Pin.js              # Mongoose schema for pins
├── 📁 routes/
│   └── index.js            # Main route definitions
├── 📁 views/
│   ├── 📁 partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── layout.ejs
│   └── profile.ejs
├── 📁 public/
│   ├── 📁 images/uploads/  # Uploaded images stored here
│   └── styles.css          # Tailwind CSS file
├── server.js               # Main server file
├── package.json            # Node project file
└── .env                    # Environment variables
```

---

## 🖼️ Image Uploads with Multer

- **Multer** is used to handle image uploads.
- Uploaded images are stored in `public/images/uploads/`.
- Upload buttons are available for profile and pin images, which appear on hover.
- Real-time preview capability for uploaded images.

---

## 🌟 Future Enhancements

- 🏷️ **Add categories and tags** for pins.
- ❤️ **Likes and comments** on each pin.
- 📌 **Save/share pins** with others.
- 🔍 **Global search functionality** to find pins and users.
- 👥 **Follow/unfollow** functionality for users.

