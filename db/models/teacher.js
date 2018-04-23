const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Teacher's Login Schema & model

const TeacherSchema = new Schema({
  name:{
    type: String
  },
  id: {
    type: Number
  },
  password:{
    type:String
  },
  skill:{
    type:String
  }
});


const Teacher = mongoose.model('faculty',TeacherSchema);

module.exports = Teacher;
