import {
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    SET_MESSAGE
} from './type';

import jobService from '../services/job.service';

export const createJobPost = (companyname, jobtitle, description, salary) => (dispatch) => {
    jobService.createJobPost(companyname, jobtitle, description, salary). then(
        (data) => {
            dispatch({
                type: CREATE_JOB_SUCCESS,
                payload: {
                    companyname: data.companyname,
                    jobtitle: data.jobtitle,
                    description: data.description,
                    salary: data.salary,
                }
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

            dispatch({
                type: CREATE_JOB_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    )
}