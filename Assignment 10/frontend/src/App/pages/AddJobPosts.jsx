import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import TableHead from '@mui/material/TableHead';
import { useState } from 'react';
import axios from 'axios';
import AdminNavigationBar from '../components/NavBar/AdminNavigationBar';
import Footer from '../components/Footer/Footer';
import { Form } from "react-bootstrap";

export default () => {

    const [companyname, setCompanyName] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/create/job', {
            companyname: companyname, 
            jobtitle: jobtitle,
            description: description,
            salary: salary
        });
        document.getElementById('addJob').submit();
        console.log(response);
    }

    return (
        <>
            <AdminNavigationBar name="Add Job Posts"/>
            <form onSubmit={handleSubmit} id='addJob'>
                <TableContainer component={Paper} sx={{  flexGrow: 1, maxWidth: 752, backgroundColor:'#F3FFFF' }}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ "& td": { border: 0 } }}>
                                <TableCell align="center" colSpan={2}>
                                    Create New Job Post
                                </TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                <TableRow sx={{ "& td": { border: 0 } }}><TableCell></TableCell></TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Company Name:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='companyname'
                                            placeholder='Enter Company Name'
                                            value={companyname}
                                            onChange={(e) => setCompanyName(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Job Title:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='jobtitle'
                                            placeholder='Enter Job Title'
                                            value={jobtitle}
                                            onChange={(e) => setJobTitle(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Job Description:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='description'
                                            placeholder='Enter a Description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 } }}>
                                    <TableCell>Enter Salary:</TableCell>
                                    <TableCell align="right">
                                        <input 
                                            id='salary'
                                            type="number"
                                            placeholder='Enter Salary'
                                            value={salary}
                                            onChange={(e) => setSalary(e.target.value)}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow sx={{ "& td": { border: 0 }, justifyContent: 'center' }}>
                                    <TableCell align="center" colSpan={2}>
                                        <Button 
                                            variant="outlined" 
                                            style={{ color:'black', borderBlockColor: 'black' }}
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow><TableCell></TableCell></TableRow>
                            </TableBody>
                    </Table>
                </TableContainer>  
                </form>          
            <Footer/>
        </>
    )
} 