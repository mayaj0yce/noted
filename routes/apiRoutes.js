const router = require('express').Router();
const path = require('path');
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err
    res.json(JSON.parse(data))
  })

})

router.post('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err
    let db = JSON.parse(data)

    let note = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4()
    }

    db.push(note)

    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
      if (err) throw err
      console.log('saved new note')
    })
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  })
})

router.delete("/notes/:id", (req, res) => {
  let noteId = req.params.id

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err
    let db = JSON.parse(data)

    let filteredNotesDb = db.filter(note => note.id !== noteId)

    fs.writeFile('./db/db.json', JSON.stringify(filteredNotesDb), (err) => {
      if (err) throw err
      console.log('note deleted!')
    })
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  })
})


module.exports = router

// db\db.json
// enable user to modify db.json CRUD

//google express CRUD routes
//  router.post
//  router.get
//  /api/notes 