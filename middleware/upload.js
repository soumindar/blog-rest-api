const util = require('util');
const multer = require('multer');
const maxSize = 2 * 1024 * 1024;
const path = require('path');

function getExt(str) {
  const basename = path.basename(str);
  const firstDot = basename.indexOf(".");
  const lastDot = basename.lastIndexOf(".");
  const extname = path.extname(basename).replace(/(\.[a-z0-9]+).*/i, "$1");

  if (firstDot === lastDot) {
    return extname;
  }

  return extname;
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/public/images/');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null,
      file.fieldname + '-' + Date.now() + getExt(file.originalname)
    );
  }
});

const uploadFile = multer({
  storage,
  limits: { fileSize: maxSize },
}).single('file');

module.exports = uploadFile;