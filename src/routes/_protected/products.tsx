import { createFileRoute } from "@tanstack/react-router";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import { PERMESSIONS } from "../../utils/roles";

export const Route=createFileRoute("/_protected/products")(
    {
        component:()=>{
            <ProtectedRoutes permisions={[PERMESSIONS.VIEW_PRODUCTS]}>
                <RouteComponent/>
            </ProtectedRoutes>
        }
    }
)
function RouteComponent(){
    return (
        <div>
            hello "products"
        </div>
    )
}