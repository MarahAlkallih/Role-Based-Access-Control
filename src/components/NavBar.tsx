import { Link, useMatchRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

const NavBar=()=>{
    const {user,logout}=useAuth();
    const navigate=useNavigate();
    const matchRoute=useMatchRoute();
    const isLoginPage=matchRoute({to:"/login"});
    const handleLogout=()=>{
        logout();
        navigate({to:"/dashboard"})
    }
    return (
       <nav className="hidden md:flex space-x-6 mx-4 py-3">
        {user?(<>
         <Link to="/products">Products</Link>
          <button onClick={handleLogout}>Logout</button>
        </>):(
            <>
            {isLoginPage?( <Link to="/dashboard">Dashboard</Link>)
            :(  <Link to="/login">Login</Link>)}
             
             
            </>
        )}
      
       

       </nav>
    )
}
export default NavBar;