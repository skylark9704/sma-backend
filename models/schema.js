var mongoose = require('mongoose'), Schema = mongoose.Schema;

var Student = new Schema({
    as_on:{type:Date , required:true},
    admission_no  : {type:String,required:true, unique:true},
    roll_no: {type:String,required:true},
    fName: {type:String,required:true},
    lName: {type:String,required:true},
    class: {type:String,required:true},
    house:{type:String, required:true},
    type:{type:String,required:true},
    blood_group: {type:String},
    gender: {type:String,required:true},
    height: {type:String},
    weight: {type:String},
    religion: {type:String,required:true},
    phone: {type:String},
    dob: {type:Date,required:true},
    father_name: {type:String,required:true},
    mother_name: {type:String,required:true},
    father_phone: {type:String,required:true},
    mother_phone: {type:String,required:true},
    father_email: {type:String},
    mother_email: {type:String},
    father_occ: {type:String},
    mother_occ: {type:String},
    guardian_name: {type:String,required:true},
    guardian_phone: {type:String,required:true},
    guardian_occ: {type:String},
    guardian_relation: {type:String,required:true},
    guardian_address: {type:String,required:true},
    guardian_email: {type:String,required:true},
    hostel: {type:String},
    room: {type:String},
    consession: {type:String,required:true},
    section: {type:String,required:true}
});

mongoose.model("Student",Student);

var Attendance = new Schema({
    username  : {type:String,required:true, unique:true},
    password: {type:String,required:true},
    role: {type:String,required:true},
});

mongoose.model("Attendance",Attendance);

var Fee = new Schema({
    receipt  : {type:String,required:true, unique:true},
    password: {type:String,required:true},
    role: {type:String,required:true},
});

mongoose.model("Fee",Fee);

var Receipt = new Schema({
    receipt_no  : {type:String,required:true, unique:true},
    admission_no: {type:String,required:true},
    status: {type:String,required:true},
    paid_on: {type:Date,required:false},
    paid_through:{type:String,required:false},
    generated_on: {type:Date,required:true},
    amount : {type:String, required: true}
});

mongoose.model("Receipt",Receipt);

var Examination = new Schema({
    exam_id: {type:String,required:true, unique:true},
    type: {type:String,required:true},
    classes: {type:Array,required:true},
    doc: {type:Date, required:true},
    term: {type:String, required:true}
});

mongoose.model("Examination",Examination);
