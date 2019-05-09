const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var multer  = require('multer')
const mime = require('mime');
var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.'+mime.getExtension(file.mimetype))
  },
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
})
var error = 'Incorrect File Type(s)'
const fileFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
    return cb(error);
  }
  cb(null, true);
}

var upload = multer({ storage: storage , fileFilter : fileFilter})

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))

var students = require('./router/students.js')
var receipts = require('./router/receipts.js')
var examinations = require('./router/examinations.js')
var staff = require('./router/staff.js')

app.use('/api/student', students)
app.use('/api/receipt', receipts)
app.use('/api/examination', examinations)
app.use('/api/staff', staff)

var cpUpload = upload.fields([{ name: 'sdoc1'}, { name: 'sdoc2'}, { name: 'gdoc1'}, { name: 'gdoc2'}, { name: 'pdoc1'}, { name: 'pdoc2'}])
app.post('/upload', cpUpload, (req, res, next) => {
  console.log(req.files);
  res.send(req.files)
})


app.listen(7000,'192.168.0.10')
