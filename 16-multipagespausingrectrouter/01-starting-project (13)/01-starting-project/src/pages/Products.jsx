import MainNavigation from "../components/MainNavigation";
import { Link } from "react-router-dom";

const PRODUCTS = [
    {id:"p1"  , title:"Product 1" },
    {id:"p2"  , title:"Product 2" },
    {id:"p3"  , title:"Product 3" },

]
export default function ProductsPage() {
    return (
        <>
            <h1>
                My Products
                
            {/* if we wrap the roots in aroot laypout 
            we dont need to difine vavigaition seperately
            in each componenet */}
            {/* <MainNavigation></MainNavigation> */}
            </h1>
        
            <ul>
                {PRODUCTS.map((prod)=>{
                    return (
                        <li key={prod.id}>
                            {prod.id}
                            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                        </li>
                    )
                })}
            </ul>
        
        </>
    )

}