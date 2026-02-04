import { createFileRoute, Navigate } from "@tanstack/react-router";
import ProtectedRoutes from "../../components/ProtectedRoutes";

export const Route=createFileRoute("/_protected/")(
    {
         component:()=>{
            <ProtectedRoutes allowGuest>
                <Navigate to="/dashboard"/>
            </ProtectedRoutes>
        
    }}
)
