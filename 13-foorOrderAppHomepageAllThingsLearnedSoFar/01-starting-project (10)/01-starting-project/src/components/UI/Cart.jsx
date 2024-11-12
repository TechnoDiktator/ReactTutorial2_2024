import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from "./CartItem";


export default function Cart() {
    
    const userProgressctx = useContext(UserProgressContext)
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce((totalPrice , item)=>{
        return totalPrice+ (item.quantity*item.price)
    } , 0)



    function handleClosecart(){
        userProgressctx.hideCart()
    }

    function handleGoToChecout(){
        userProgressctx.showCheckOut()
    }

    return <Modal open={userProgressctx.progress == 'cart'} className="cart" onClose={userProgressctx.progress ==='cart' ? handleClosecart: null}>
        <h2>Your Cart {cartCtx.items.length === 0 ? "Is Empty" :""} </h2>
        <ul>
            { cartCtx.items.map((item) => {
                return (
                    <CartItem key={item.id} 
                    name={item.name}
                    quantity={item.quantity}
                    price ={item.price}
                    onIncrease ={() => {
                        cartCtx.addItem(item)
                    }}
                    onDecrease ={() => {
                        cartCtx.removeItem(item.id)
                    }}
                    ></CartItem>
                )
            })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button onClick={handleClosecart} textOnly={false}>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleGoToChecout}>Go to Checkout</Button>}
        </p>

    </Modal>
    
}



