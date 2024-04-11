import { Navigate, Outlet } from "react-router-dom";

export default ({allowedRoles}) => {
    const isAuthenticated = localStorage.getItem("token");

    const userType = localStorage.getItem("type");

    return (isAuthenticated? (
        allowedRoles.find((role) => role === userType) ? 
            <Outlet/> : 
            <Navigate to='/'/>
        ) :
        <Navigate to='/'/>
    );
}