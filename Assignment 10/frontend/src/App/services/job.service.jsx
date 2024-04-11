import axios from 'axios';

const API_URL = "http://localhost:3000/";

const createJobPost = async (companyname, jobtitle, description, salary) => {
    const response = await axios.post(API_URL + "create/job", {
        companyname,
        jobtitle,
        description,
        salary
    });
    return response.data;
};

export default {
    createJobPost
}