const express = require('express');
var cors = require('cors');
var axios = require('axios');
const bodyParser = require('body-parser');
const multer = require('multer')
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// enable CORS
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

const {Image} = require('./db/database');




// handle storage using multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

 var upload = multer({ storage: storage });



app.get('/api', function (req, res) {
    res.send('Hello world!');
});

// handle single file upload
app.post('/api/upload-file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if (!file) {
       return res.status(400).send({ message: 'Please upload a file.' });
    }

    const image = new Image({
      name: file.filename,
    });
    image.save();

    return res.send({ message: 'File uploaded successfully.', file });
 });





app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

