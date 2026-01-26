import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

const NavBar=()=>{
    const {logout}=useAuth();
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate({to:"/dashboard"})
    }
    return (
       <nav className="hidden md:flex space-x-6 mx-4 py-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <button onClick={handleLogout}>Logout</button>

       </nav>
    )
}
export default NavBar;