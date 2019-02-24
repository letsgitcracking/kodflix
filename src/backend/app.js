const express = require('express')
const app = express()
const port = 3001
const getTVShows = require('./shows-list');


app.get('/rest/shows-list', (req, res) => res.send(getTVShows()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))