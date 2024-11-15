// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components



import {createBrowserRouter ,  RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage , {loader as eventDetailLoader , action as deleteEventActiom} from './pages/EventDetail';
import NewEventPage , {action as newEvent} from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

import {loader as eventsLoader} from './pages/Events' 
import ErrorPage from './pages/ErrorPage';

//so we are creating routes
const router = createBrowserRouter([
  //we are going to use relative paths
  {path:'/', 
    element:<RootLayout></RootLayout>  , 
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {path:'' , element : <HomePage></HomePage> } ,

      {
        path:'events' , element: <EventsRootLayout></EventsRootLayout> ,
        
        children:[
          {
            path:"" , 
            element : <EventsPage></EventsPage> , 
            //in case of error on a page the closest error in the route configuration elemnt os executed
            errorElement:<ErrorPage></ErrorPage>,
            loader: eventsLoader

            //we can delacre the loader in the route object as below also
            //async () => {
            //a loader function just gets executed when someone visits that route
            //even though the fucntion below is returniing a promise
            //react reouter dom knpws and will give you the resolved result 
            //when it is done
            //ot will make the result of such a function available when someone visits such a page
            // const response = await fetch('http://localhost:8080/events');

            //   if (!response.ok) {
            //     //
            //   } else {
            //     const resData = await response.json();
            //     return resData.events
            //     //
            //   }
            // } 
          } , 
          
          
          
          {path: ":eventId", 
            id:'event-detail',
            loader:eventDetailLoader,
            
            children:[

            {
              path: "" , 
              element : <EventDetailPage></EventDetailPage>,
              action:deleteEventActiom
            } , 

            {
              //the id property 
              //gives us the way to pass loader
              //data to the child route
              path:"edit" , 
              element: <EditEventPage></EditEventPage>
            }

          ]},

          {
            path:"new" , 
            action:newEvent,
            element :<NewEventPage></NewEventPage> 
          } , 

        ]
      },

    ]
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
