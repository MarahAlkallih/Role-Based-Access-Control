import type React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "@tanstack/react-router";

const ProtectedRoutes=({children,permisions,allowGuest=false}:{
    children:React.ReactNode,
    permisions?:string[],
    allowGuest?:boolean
})=>{
    const {user,hasPermission}=useAuth();
    console.log(user,allowGuest);
    //allow guest user if `allowGuest` is true
    if(allowGuest && !user){
        return children;
    }
    //Redricate to login if the user is not authenticeated
    if(!user){
        return <Navigate to="/login"/>
    }
    //Redicate unauthorized if the user lacks required permission
    if(permisions && !permisions.every((p)=>hasPermission(p))){
        return <Navigate to="/unauthorized"/>
    }
    //Render the children if user uthenticeated and hasPermision
    return children;

}
export default ProtectedRoutes;