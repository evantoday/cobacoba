const express = require("express")
//const penduduk = require("../models/penduduk")
const Penduduk = require('../models/penduduk') 

const router = express.Router()
router.get('/',async (req,res) =>{
    try{
        res.json('BADALA CARI APA KAMU')

    }catch(err){
        res.json({message : err.message})

    }
})

router.get('/:alamat',async (req,res) =>{
    //res.send(req.params.nama)
    try{
        //var data = await penduduk.find({ALAMAT:req.params.nama}).limit(10)
        var alamat = req.params.alamat;
        var penduduk = await Penduduk.find({'NAMA_LGKP': {'$regex': alamat,$options:'i'}}).limit(10);
            res.json(penduduk)

    }catch(err){
        res.json({message : err.message})

    }

})


  

module.exports = router