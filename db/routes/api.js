const express = require('express');
const router = express.Router();

const Student = require('../models/student');
const Teacher = require('../models/teacher');

router.post('/student',function(req,res,next){
    let id = req.body.id;
    let password = req.body.password; 
    console.log(req.body);
  Student.findOne({'id':id,'password':password}).then(function(studentdata){
    console.log(studentdata);
    res.send(studentdata); 
  }).catch(next);    
 });
 
 router.post('/addstudent',function(req,res,next){ 
  console.log(req.body);
Student.create(req.body).then(function(studentdata){
  console.log(studentdata);
  res.send(studentdata); 
}).catch(next);    
});

router.post('/addfaculty',function(req,res,next){ 
  console.log(req.body);
Teacher.create(req.body).then(function(studentdata){
  console.log(studentdata);
  res.send(studentdata); 
}).catch(next);    
});

 router.post('/faculty',function(req,res,next){
    let ids = req.body.id;
    let passwords = req.body.password; 
    console.log(req.body);
  Teacher.findOne({'id':ids,'password':passwords}).then(function(studentdata){
    console.log(studentdata);
    res.send(studentdata);  
  }).catch(next);    
 });
//Get Request for Bus

router.get('/student',function(req,res){
  Student.find({}).then(function(data){
    res.send(JSON.stringify(data));
  });
  
});

router.get('/faculty',function(req,res){
  Teacher .find({}).then(function(data){
    res.send(JSON.stringify(data));
  });
});
module.exports = router;
