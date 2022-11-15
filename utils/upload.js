const uploadFile = require('../middleware/upload');

const upload = async (req, res) => {
  try {
    console.log(req.file);
    await uploadFile();

    if (req.file === undefined) {
      return res.status(400).json({
        message: 'please upload image',
        statusCode: 400
      });
    }

    return req.file;
  } catch (error) {
    return res.status(500).json({
      message: `Could not upload the file: ${req.file.originalName}`
    })
  }
}

module.exports = upload;