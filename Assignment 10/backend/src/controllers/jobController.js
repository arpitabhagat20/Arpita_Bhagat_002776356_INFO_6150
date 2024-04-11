import { createJobPost, getAllJobs, deleteJob } from "../services/jobService";

export const createJob = async (req, res) => {

    const companyName = req.body.companyname;
    const jobTitle = req.body.jobtitle;
    const description = req.body.description;
    const salary = req.body.salary;

    try{

        const job = await createJobPost(companyName, jobTitle, description, salary);
        res.status(201).send(job);

    } catch ( error ) {

        if(error.name === "ValidatorError") {

            return res.status(400).json({ message: error.message });

        } else {

            return res.status(500).send(error);
        
        }

    }

};

export const getJobs = async (req, res, next) => {
    try {

        const jobs = await getAllJobs();
        res.status(200).send(jobs);

    } catch (error) {

        return next(error);

    }
};

export const deleteJobs = async (req, res) => {

    const companyName = req.body.companyname;
    const jobTitle = req.body.jobtitle;
    console.log(companyName);
    console.log(jobTitle);

    try{

        await deleteJob(companyName, jobTitle);
        res.status(200).json({ message: "Job has been deleted successfully"});

    } catch ( error ) {

        if( error.name === "JobDoesNotExist") {

            return res.status(404).json({ message: error.message });

        } else {

            res.status(500).json({ message: "Internal server error" });

        }

    }

};