import { Outlet } from "react-router-dom"
import EventsNavigation from '../components/EventsNavigation';



function EventsRootLayout() {
    return<>
        <EventsNavigation></EventsNavigation>
        <Outlet></Outlet>
    </>

}

export default EventsRootLayout