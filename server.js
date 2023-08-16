const express = require('express');
const router = require('express').Router();

const path = require('path');

const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))

})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    //returns to the index.html when anything else is used
})


// app.get('/', (req, res)=> 
// res.sendFile(path.join(__dirname, '/'))
// );
// this done in the routes folder already. do i need to move it?
//working links for both the notes and index page
//need post and get routes for creating notes
//delete would be nice but not rq

//at end
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
