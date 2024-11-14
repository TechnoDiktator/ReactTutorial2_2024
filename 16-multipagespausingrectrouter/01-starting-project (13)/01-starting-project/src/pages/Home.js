
import { Link , useNavigate } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

export default function HomePage() {
    //hook provided by the react router dom
    const navigate  = useNavigate()

    function navigateHandler () {
        navigate('/products')
    }


    return <>
        {/* <MainNavigation></MainNavigation> */}
        {/* 
         if we wrap the roots in aroot laypout 
        we dont need to difine vavigaition seperately
        in each componenet 
        
        */}


        <h1>My Homepage</h1>
        {/* This is not the best way to provide links to different pages
            because it reloads the application which is stupid
        */}
        {/* <p>Go to <a href={"/products"}>The list of products</a></p> */}
        
        
        
        
        {/*  CORRECT WAY */}
        <p>Go to <Link to={'/products'}>The link of products</Link> </p>
            
        <p>
            <button onClick={navigateHandler}>
                Navigate To Product
            </button>
        </p>

    </>

}



