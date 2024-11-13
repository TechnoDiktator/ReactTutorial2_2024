import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { fetchCartdata, sendCartdata } from './store/cart-slice';
import { useSelector  , useDispatch} from 'react-redux';
import Notification from './components/UI/Notification'
import {Fragment,useEffect , useState} from 'react'
import { uiActions } from './store/ui-slice';
let isInitialRender = true
function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartdata())
  },[dispatch])


  useEffect(()=> {
    
    if(isInitialRender){
      isInitialRender = false
      return 
    }
    if(cart.changed){
        //====================================================
        //USING OUR CUSTOM ACTION CREATOR /GENERATOR METHOD !!
        dispatch(sendCartdata(cart)) 
        //===================================================
    
    }
    




    //==================OLD SCHOOL WAY======================================
    //const sendCartData = async () => {
      // dispatch(uiActions.showNotification({
      //   status:'pending',
      //   title:'Sending...',
      //   message:"Sending cart data"
      // }))
      // const response = await fetch('https://freeproject-59eb8-default-rtdb.firebaseio.com/cart.json' , 
      //   { method:"PUT",
      //     body:JSON.stringify(cart)
      //   } 
      // )
      
      // if(!response.ok){
          
      //   // dispatch(uiActions.showNotification({
      //   //   status:'Failure',
      //   //   title:'Data not Sent...',
      //   //   message:"Failed update"
      //   // }))
        
      //   throw new Error("Updating cart data failed")
      // }

      
      // dispatch(uiActions.showNotification({
      //   status:'success',
      //   title:'Data Sent...',
      //   message:"Successfully updated"
      // }))

    // }
    //======================================================================


    // sendCartData().catch((error) => {
    //   dispatch(uiActions.showNotification({
    //     status:'error',
    //     title:'Data not Sent...',
    //     message:"Failed update"
    //   }))
    // })

  
  } , [cart , dispatch])
  

  return (
    <Fragment>
      {notification && <Notification status = {notification.status} title = {notification.title} message = {notification.message}></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
