import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method:"POST"
    ,
    headers:{
        'Context-Type':'application/json'
    }
    
}
export  default function Checkout() {
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((totalPrice , item)=>{
        return totalPrice+ (item.quantity*item.price)
    } , 0)




    const userProgressCtx = useContext(UserProgressContext)
    

    const {
        data,
        isLoading :isSending,
        error,
        sendRequest

    } = useHttp('http://localhost:3000/orders',requestConfig)

    function handleClose() {
        userProgressCtx.hideCheckOut()
    }
    function handleSubmit (event) {
        event.preventDefault()
        
        //shortcut
        const fd = new FormData(event.target)

        const customerData = Object.fromEntries(fd)

        sendRequest(
            JSON.stringify({
              order: {
                items: cartCtx.items,
                customer: customerData,
              },
            })
        );



        // fetch('http://localhost:3000/orders' ,{
        //     method:"POST",
        //     headers:{
        //         'Content-type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         order:{
        //             items:cartCtx.items,
        //             customer:customerData
        //         }
        //     })
        // })
        
    }

    let actions = (
        <>
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </>
    );

    if (isSending) {
        actions = <span>Sending order data...</span>;
    }

    console.log("progress is checkout" , userProgressCtx.progress === 'checkout')
    if (data && !error) {
        return (
          <Modal
            open={userProgressCtx.progress === 'checkout'}
            onClose={handleFinish}
          >
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>
              We will get back to you with more details via email within the next
              few minutes.
            </p>
            <p className="modal-actions">
              <Button onClick={handleFinish}>Okay</Button>
            </p>
          </Modal>
        );
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={userProgressCtx.progress === 'checkout' ? handleClose : null}>
            <form onSubmit={handleSubmit} action="">
                <h2>Checkout</h2>
                <p>Total Amount : {currencyFormatter.format( cartTotal )}</p>

                <Input label={"Full Name"} type="text" id="name"></Input>
                <Input label={"E-mail Address"} type='email' id="email"></Input>
                <Input label="Street" type="text" id="street"></Input>

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"></Input>
                    <Input label="City" type="text" id="city"></Input>
                </div>
            
                {error && <Error title="Failed to submit order" message={error} />}

                <p className="modal-actions">{actions}</p>
            </form>

        </Modal>


    )
}