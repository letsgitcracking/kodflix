const express = require('express')
const app = express()
const getTVShows = require('./shows-list');
const path = require('path');
const port = process.env.PORT || 3001;

app.get('/rest/shows-list', (req, res) => res.send(getTVShows()))
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))