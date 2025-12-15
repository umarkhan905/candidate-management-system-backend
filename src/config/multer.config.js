import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: function (req, file, cb) {
    // Validate file type is pdf
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("File type is not supported"));
    }

    cb(null, true);
  },
});
