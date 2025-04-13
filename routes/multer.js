const multer = require('multer');
const { v4: uuidv4 } = require("uuid");
const path = require("path");               // <-- ✅ Add this line
const fs = require("fs");      
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/uploads');  // Make sure this folder exists!
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();
    const extension = file.originalname.split('.').pop();
    cb(null, `${uniqueSuffix}.${extension}`);
  }
});

const upload = multer({ storage: storage });
module.exports = upload;
