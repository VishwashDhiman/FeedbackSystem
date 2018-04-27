const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: 
    {
        type: String,
        required:[true,'Name field is required']
    },
    
    id: 
    {
        type: Number,
        required:[true,'ID field is required']
    },
    
    password: 
    {
        type:String,
        required:[true,'Name field is required']
    },

    class: 
    {
        type: String,
        required:[true,'Class field is required']
    }
});

const students = mongoose.model('students', StudentSchema);
module.exports = students; 