import axios from "axios";

const API_URL = "http://localhost:3000/user/";

const getAllData = async () => {
    return await axios.get(API_URL + "getAll" );
}

export default {
    getAllData
};