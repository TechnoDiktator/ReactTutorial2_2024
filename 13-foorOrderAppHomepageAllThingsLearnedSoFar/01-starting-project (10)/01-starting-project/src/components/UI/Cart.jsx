import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";



export default function Cart() {
    
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce((totalPrice , item)=>{
        return totalPrice+ (item.quantity*item.price)
    } , 0)

    return <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => {
                return (
                    <li key={item.id}>{item.name} - {item.quantity}</li>
                )
            })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly={true}Close></Button>
            <Button>Go to Checkout</Button>
        </p>

    </Modal>
    
}



