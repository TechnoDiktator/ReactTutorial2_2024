import { CartContext } from "../store/shopping-cart-context";


//THIS hook HELPS US USE THE CNTEXT THAT WE CRETED ANAD WRAPPED 
//IN THE PARENT COMPONENET FILE IN OUR CURRENT COMPONENT
import { useContext } from "react";



export default function Cart() {
  
  
  //const cartCx  = useContext(CartContext)
  
  const {items, updateItemQuantity} = useContext(CartContext)
  //you can even do this 
  //that is destructuring the context object wemade
  //const {items} = useContext(CartContext)


  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
