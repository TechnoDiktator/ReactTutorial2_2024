import MainNavigation from "../components/MainNavigation"
import PageContent from "../components/PageContext"
import { useRouteError } from "react-router-dom"


function ErrorPage() {

    /*
    what ever error is thrown by the page is cought 
    and the errorcomponenet is displayed
    is the thrown error is in the form of an object 
    we can extracct it suin g this hoik
    */
    const error = useRouteError()
    let title = "An error occured"

    let message = "something went wrond"

    if(error.status === 500){
        message = JSON.parse(error.data).message
    }
    if(error.status === 404){
        message = "Not found"
        title = "Counld not find the resource or page"
    }
    return( 
        <>
            <MainNavigation></MainNavigation>
            <PageContent title={title}>    
                <h1>
                An Error Occured
                {message}
                </h1>
            </PageContent>
        </>
    )




}
export default ErrorPage