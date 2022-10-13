const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinaryUpload = require('./cloudinary');
const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: {
    folder: 'rewallet',
    format: async (req, file) => 'png',
    public_id: (req, file) => new Date().getTime(),
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 4 * 1000 * 1000,
  },
  fileFilter: (req, file, cb) => {
    const allowExt = ['image/jpg', 'image/png', 'image/jpeg'];
    if (allowExt.includes(file.mimetype)) {
      cb(null, true);
    } else {
      const err = new Error('Extension not supported');
      cb(err, false);
    }
  },
});

module.exports = upload;