import axios from 'axios';
import Table from '../components/Table/Table';
import { useEffect, useState } from 'react';
import Footer from "../components/Footer/Footer";
import AdminNavigationBar from '../components/NavBar/AdminNavigationBar';

export default () => {

    const [employees, setEmployees] = useState([]);

    const getAllData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/user/getAll');
            setEmployees(response.data);
            console.log(employees);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            <AdminNavigationBar name="Employee Portal"/>
            <Table employees={employees}/>
            <Footer/>
        </>
    );
    
}