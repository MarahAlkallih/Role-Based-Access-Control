import { createFileRoute, useNavigate } from "@tanstack/react-router";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import { PERMESSIONS } from "../../utils/roles";
import { deleteProduct, getProducts, type Product } from "../../api";
import { useAuth } from "../../context/AuthContext";

export const Route = createFileRoute("/_protected/products")(
    {
        component: () => (
            <ProtectedRoutes permisions={[PERMESSIONS.VIEW_PRODUCTS]}>
                <RouteComponent />
            </ProtectedRoutes>
        ),
        loader: async () => {
            return await getProducts();

        }
    }
)
function RouteComponent() {
    const products = Route.useLoaderData();
    const {hasPermission}=useAuth();
    const navigate=useNavigate();
    const handleDelete=async (id:string,e:React.MouseEvent)=>{
        e.preventDefault();
        if(!hasPermission(PERMESSIONS.DELETE_PRODUCTS)){
            navigate({to:"/unauthorized"});
            return;
        }
        if(window.confirm("Are you sure you want to delete this product?")){
            await deleteProduct(id);
            products?.filter((product)=>product.id !=id)
        }
    }
    console.log(products);
    return (
        <div className="p-10">
         
             <h2 className="text-4xl font-bold mb-2">
             Products
            </h2>
            <p className="text-gray-800">
               Here is the products
           </p>
           <ul>
            {
                products?.map((product:Product)=>(
                    <li key={product.id } className="text-gray-600 border border-gray-300 p-2 md:w-1/3 ">
                      {product.name} - ${product.price}
                      <button type="button" className="bg-red-400 rounded-full px-5 py-1.5 text-white mr-3 ml-3">
                        Edit
                      </button>
                      <button onClick={(e)=>handleDelete(product.id,e)} type="button" className="bg-red-800 rounded-full px-5 py-1.5 text-white mr-3 ml-3">
                        Delete
                      </button>
                    </li>
                ))
            }
           </ul>
            
        </div>
    )
}