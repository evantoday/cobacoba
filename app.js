const express = require('express')
app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/penduduk')
const db = mongoose.connection
db.on('error',(error) => console.log('koneksi database error'))
db.on('open',() => console.log('koneksi database berhasil'))

app.use(express.json())
const pendudukRouter = require('./routes/penduduk')
app.use('/penduduk',pendudukRouter)

app.listen(3000, () => console.log('server berjalan'))