import { Outlet,createRootRoute } from "@tanstack/react-router";
import React from "react";
import NavBar from "../components/NavBar";
export const Route=createRootRoute({
    component:RootComponent,
})
function RootComponent(){
    return (
        <React.Fragment>
           <NavBar/>
           <hr className="border-gray-300"/>
            <Outlet/>
        </React.Fragment>
    )
}