import {  createContext, useContext, useState, type ReactNode } from "react";
export interface User{
    id:string;
    userName:string;
    password:string;
    role:string;
    permissions:string[];
}
interface AuthContextType{
    user:User| null;
    login:(userData:User)=>void;
    logout:()=>void;
    hasPermission:(permission:string)=>boolean;

}
const AuthContext=createContext<AuthContextType|null>(null);
export const AuthProvider=({children}:{children:ReactNode})=>{
    const [user,setUser]=useState<User|null>(null);
    const authLogin=(uerData:User)=>{
        setUser(uerData);
    };
    const logout=()=>{
        setUser(null);
    };
    const hasPermission=(permission:string)=>{
        return user?.permissions?.includes(permission)||false;
    }
   return(
     <AuthContext.Provider value={{user,login: authLogin,logout,hasPermission}}>
{children}
    </AuthContext.Provider>
   )
};
export const useAuth=()=>{
    const context =useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}