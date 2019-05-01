var express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
var models = require('.././models/schema.js')
var db = mongoose.connect("mongodb://localhost:27017/school")

var Student = mongoose.model("Student");

router.post('/create',(req,res) => {
  console.log(req.body);
  Student.create(req.body , (err,data) => {
    if (err) {
      res.json(err)
    }

    else {
      res.json(data)
    }
  })
})

router.get('/getAll',(req,res) => {
  Student.find({} , (err,data) => {
    if (err) {
      res.json(err)
    }

    else {
      res.json(data)
    }
  })
})

router.post('/getById',(req,res) => {
  Student.findOne(req.body , (err,data) => {
    if (err) {
      res.json(err)
    }

    else {
      res.json(data)
    }
  })
})

router.post('/getByClass',(req,res) => {
  Student.find(req.body , (err,data) => {
    if (err) {
      res.json(err)
    }

    else {
      res.json(data)
    }
  })
})

router.post('/count', (req,res) => {
  Student.count(req.body, (err,count)=>{
    if (err) {
      res.end()
    }

    else {
      res.json(count)
    }
  })
})


module.exports = router;
