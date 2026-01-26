import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { login } from "../../api";

export const Route=createFileRoute("/_auth/login")(
    {
        component:RouteComponent,
    }
)
function RouteComponent(){
    const [username,setUsername]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const {login:authLogin}=useAuth();
    const navigate=useNavigate();
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        if(!username) return alert("Invalid Credintials");
        console.log("1");
        const user=await login(username,password);
        console.log("2");
        if(user){
            console.log("3");
            authLogin(user);
            navigate({to:"/dashboard"});

        }else{
            console.log("4");
            alert("Invalid Credintials")
            setUsername("");
            setPassword("");

        }

    }
    return (
        <div className="flex flex-col items-center p-10">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <label className="md:w-1/3 block text-gray-300 font-bold">
                    User Name
                    </label>
                    <input className="md:w-2/3 border rounded w-full py-2 px-3 "
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className="md:flex md:items-center mb-6">
                    <label className="md:w-1/3 block text-gray-300 font-bold">
                    Password
                    </label>
                    <input className="md:w-2/3 border rounded w-full py-2 px-3 "
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="md:flex md:justify-end">
                    <button type="submit" className="bg-purple-700 border rounded text-white p-2 md:w-2/3">
                     Login
                    </button>
                </div>

            </form>
          
        </div>
    )
}