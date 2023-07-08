const router = require('express').Router();
const path = require('path');


router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
  
})

router.post('/api/notes', (req, res) => {
    req.readFile(path)
    res.sendFile(path.join(__dirname, '../db/db.json'))
  //how does the heroku see this
})
module.exports = router 

// db\db.json
// enable user to modify db.json CRUD

//google express CRUD routes
//  router.post 
//  router.get 
//  /api/notes 