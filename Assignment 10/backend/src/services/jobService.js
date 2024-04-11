const mongoose = require('mongoose');
import { jobSchema } from '../models/jobSchema';
import { JobDoesNotExist, JobAlreadyExists } from '../errors/errorHandling';

const Job = mongoose.model('Job', jobSchema)

export const createJobPost = async (companyName, jobTitle, description, salary) => {

    const jobExists = await Job.findOne({companyname: companyName, jobtitle: jobTitle});
    if(jobExists != null) {
        throw new JobAlreadyExists();
    }

    let job = new Job({
        companyname: companyName,
        jobtitle: jobTitle,
        description: description,
        salary: salary
    })
    const newJob = await job.save();
    return newJob;

};

export const getAllJobs = async () => {
    return await Job.find();
};

export const deleteJob = async (companyName, jobTitle) => {
    const deleteOneJob = await Job.findOne({companyname: companyName, jobtitle: jobTitle});
    if(deleteOneJob == null) {
        throw new JobDoesNotExist();
    }
    await Job.findOneAndDelete({companyname: companyName, jobtitle: jobTitle});
}