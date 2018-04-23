const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Student's Login Schema & model

const StudentSchema = new Schema({
  name:{
    type: String,
  },
  id: {
    type: Number,
    required:[true,'Id field is required']
  },
  password:{
    type:String,
    required:[true,'Password field is required']
  },
  class:{
    type: String,
    required:[true,'Class is required']
  }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;
