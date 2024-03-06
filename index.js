const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getHouses,
    deleteHouse, 
    createHouse, 
    updateHouse
} = require('./controller')

app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.get(`/api/houses`, getHouses)
app.delete(`/api/houses/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)

app.use(express.static(__dirname + '/static'));

app.listen(4004, () => console.log(`running on 4004`))