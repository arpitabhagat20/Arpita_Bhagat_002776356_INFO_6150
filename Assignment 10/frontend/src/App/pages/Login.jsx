import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from "react-bootstrap";
import Button from '@mui/material/Button';
import '../css/Login.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../actions/auth';
import CircularProgress from '@mui/material/CircularProgress';

export default () => {
    let navigate = useNavigate();

    const form = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const getUserType = () => {
        const userType = localStorage.getItem("type");
        return userType;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        dispatch(login(email, password))
            .then(() => {
                console.log(getUserType());
                if(getUserType() === "employee"){
                    navigate("/home");
                    window.location.reload();
                } else {
                    navigate("/employees");
                    window.location.reload();
                }
            })
            .catch(() => {
                setLoading(false);
            });
    };

    if(isLoggedIn) {
        if(getUserType() === "employee"){
            return <Navigate to="/home"/>;
        } else {
            return <Navigate to="/employees"/>;
        }
    }

    // const handleSubmit = async (e) => {
    //     try {
    //         e.preventDefault();
    //         const response = await axios.post('http://localhost:3000/user/login', {email: email, password: password});
    //         console.log(response);
    //         setLogin(true);
    //         localStorage.setItem("type", response.data.type)
    //         localStorage.setItem("token", response.data.token);
    //         if(response.data.type === 'admin') {
    //             window.location = "/employees";
    //         } else {
    //             window.location = "/home";
    //         }
            
    //     } catch ( error ) {
    //         console.log(login)
    //         console.log(error)
    //     }
    // }

    return (
        <>
        <div className='card'>
            <h2 className='card-header'>Login</h2><br/>
            <Form onSubmit={handleSubmit} ref={form}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group> <br/>

                {/* submit button */}
                <Button 
                    style={{
                        borderColor: "#57c7cb",
                        backgroundColor: '#57c7cb',
                        color: 'aliceblue',
                    }}  
                    variant="contained" 
                    type="submit"
                    className="Button"
                    onClick={handleSubmit}
                >
                    Submit
                    {loading && (
                        <CircularProgress size={30}/>
                    )}
                </Button>
            </Form>
        </div>
        </>
    )
}