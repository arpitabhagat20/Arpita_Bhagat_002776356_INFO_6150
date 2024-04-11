const mongoose = require("mongoose");

export const jobSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: 'Enter name of the company'
    },
    jobtitle: {
        type: String,
        required: 'Enter the job title',
    },
    description: {
        type: String
    },
    salary: {
        type: Number,
        required: 'Enter the salary' 
    }
});