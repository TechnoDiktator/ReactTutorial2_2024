import MainNavigation from  '../components/MainNavigation'

import { Outlet , useNavigation } from 'react-router-dom';

export default function RootLayout(){

    const navigation = useNavigation()


    
    return(
        <>
            <MainNavigation></MainNavigation>
            
            <main>
                {/* the navigation object provided by useNavigation 
                    has the state property that is that has some 
                    implicitely defined states like loading
                */}
                {/* {navigation.state === "loading" && <p>Loading ....</p>} */}




                {/*this defines where the childroutes/pages should berendered  
                after the render of the root route */}
                <Outlet></Outlet>
            </main>

        </>
    )


}

/*
The RootLayout is typically a parent or wrapper component that provides structure and shared functionality across multiple routes in your application. Common uses include:

Layout Styling: Defining the main structure of the application, such as headers, footers, and sidebars.
Shared State: Providing context or state that is accessible to all nested components (e.g., authentication, theme settings).
Persistent UI Elements: Ensuring components like navigation bars remain visible across all routes.
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="app-layout">
      <header>Header</header>
      <main>
        <Outlet /> //* This is where child routes are rendered
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
  
  export default RootLayout;


*/




