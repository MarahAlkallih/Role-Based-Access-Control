
import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
export const Route=createFileRoute("/_auth/unauthorized")(
    {
        component:RouteComponent,
    }
)
function RouteComponent(){
    return (
        <div className="p-10">
            <h2 className="text-4xl font-bold mb-2">
                Unauthorized Access 
            </h2>
            <p className="text-gray-800">
                You do not have permissions to access this page
           </p>
         <Link className="text-blue-300" to="/dashboard">
         Go to Dashboard
         </Link>
         <br/>
         <Link className="text-blue-300" to="/login">
         Go to Login
         </Link>

          
        </div>
    )
}