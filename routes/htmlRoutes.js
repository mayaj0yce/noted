//ONLY html routes 
const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  
})
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  //returns to the index.html when anything else is used
})

module.exports = router 