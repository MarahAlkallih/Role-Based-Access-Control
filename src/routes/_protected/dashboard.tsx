import { createFileRoute } from "@tanstack/react-router";

import { useAuth } from "../../context/AuthContext";
import ProtectedRoutes from "../../components/ProtectedRoutes";

export const Route=createFileRoute("/_protected/dashboard")(
    {
        component:()=>(
            <ProtectedRoutes allowGuest>
                <RouteComponent/>
            </ProtectedRoutes>
        )
    }
)
function RouteComponent(){
    const {user}=useAuth();
    console.log(user);
    return (
         <div className="p-10">
            {user?(<>
             <h2 className="text-4xl font-bold mb-2">
             Welcome ,{user?.name}
            </h2>
            <p className="text-gray-800">
               Role:{user?.role}
           </p>
            </>):(<>
             <h2 className="text-4xl font-bold mb-2">
             Welcome Guest
            </h2>
            <p className="text-gray-800">
               No role assigned to you
           </p>
            </>)}
           
        </div>
    )
}