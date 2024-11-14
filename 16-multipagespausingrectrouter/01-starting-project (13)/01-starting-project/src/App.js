import {createBrowserRouter , Routes  ,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';


//OLD SCHOOL WAY
// const routeDefinitions = createRoutesFromElements(

//   <Route>
//     <Route path='/' element= {<HomePage></HomePage>}></Route>
//     <Route path='/products' element = {<ProductsPage></ProductsPage>} ></Route>
//   </Route>

// )

// const router  =  createBrowserRouter(routeDefinitions)





//defining routes NEW WAY  
const router = createBrowserRouter(
[ 
  //ANY path that begins with a  /  is an absolute path
  
  
  //WE CAN REGISTER THE ORUTES INDIVIDUALLY
  //{path:'/' , element:<HomePage></HomePage>},
  //{path:"/products" , element:<ProductsPage></ProductsPage>},
  
  //OR WE CAN WRAP THEM THIS WAY
  //NOTE THAT WE ARE MAKING ABSOLUTE pATHS
  //why because all child paths are beginning with a  /
  {path:'/',
    element:<RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {path:'/' , element:<HomePage></HomePage> },
      {path:"/products" , element:<ProductsPage></ProductsPage>},
      //dynamic routes
      {path:"/products/:productId" , element:<ProductDetail></ProductDetail>}
    ],
  },

  //RELATIVE pATHS note that we have removed the /
  
  
  
  // {path:'/',
  //   element:<RootLayout></RootLayout>,
  //   errorElement:<ErrorPage></ErrorPage>,
  //   children: [
  //     {path:'' , element:<HomePage></HomePage> },
  //     {path:"products" , element:<ProductsPage></ProductsPage>},
  //     //dynamic routes
  //     {path:"products/:productId" , element:<ProductDetail></ProductDetail>}
  //   ],
  // },




]
)

function App() {
  return <RouterProvider router={router}></RouterProvider>;

}

export default App;
