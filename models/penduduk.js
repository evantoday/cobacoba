const mongoose = require('mongoose')
const pendudukSchema = new mongoose.Schema({
    ALAMAT: {type: String, required: true},
    NAMA_LGKP: {type: String, required: true}

},
{collection:'penduduk'}
)

module.exports = mongoose.model('penduduk', pendudukSchema)