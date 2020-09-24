const multer = require("multer");

module.exports = (avatarType, avatarName) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (avatarType === "customer-avatar") {
        cb(null, "client/public/images/customer-avatar");
      } else if (avatarType === "teacher-avatar") {
        cb(null, "client/public/images/teacher-avatar");
      }
    },

    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Please upload an image"));
    }
  };

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 2,
    },
    fileFilter: fileFilter,
  });

  return upload.single(avatarName);
};
