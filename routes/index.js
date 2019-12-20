const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/dec', (req, res) => res.render('index'));

router.get('/', (req, res) => res.sendFile('../index.html'));
router.get('/dec', (req, res) => res.sendFile(__dirname,'../','dec.html'));
router.get('/E18', function (req, res) {
    res.sendFile(path.join(__dirname,'../EsummitArchives/E18','index.html'));
  });
  
  
router.get('/E19', function (req, res) {
    res.sendFile(__dirname,'../EsummitArchives/E19','index.html');
  });

module.exports = router;
