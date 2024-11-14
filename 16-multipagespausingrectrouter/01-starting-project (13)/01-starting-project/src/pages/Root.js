import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"


function RootLayout() {

    return <>
        {/* <h1>ROOT Layout</h1> */}
        <MainNavigation></MainNavigation>
        <main>
        <Outlet></Outlet>
        </main>
    </>


    
}

export default RootLayout