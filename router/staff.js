var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
var models = require('.././models/schema.js')
var db = mongoose.connect("mongodb://localhost:27017/school")

var Staff = mongoose.model("Staff");

router.post('/create',(req,res) => {
  console.log(req.body);
  Staff.create(req.body , (err,data) => {
    if (err) {
      res.json(err)
    }

    else {
      res.json(data)
    }
  })
})

router.get('/getAll',(req,res) => {
  Staff.find().sort({_id: -1}).exec(function(err,userpost) {
    if(err){
        res.json(err);
    }

    else{
        res.json(userpost);
    }
  })
})

router.post('/getById',(req,res) => {
  Staff.find(req.body , (err,data) => {
    if (err) {
      res.json(err)
    }

    else {
      res.json(data)
    }
  })
})

router.post('/count', (req,res) => {
  Staff.count(req.body, (err,count)=>{
    if (err) {
      res.end()
    }

    else {
      res.json(count)
    }
  })
})


module.exports = router;
