import Footer from "../components/Footer/Footer";
import HomeCard from "../components/Card/HomeCard";
import NavigationBar from "../components/NavBar/NavigationBar";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default () => {

    const { token: token } = useSelector((state) => state.auth);

    if (!token) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <NavigationBar name="Home"/>
            <HomeCard/>
            <Footer/>
        </>
    );
};