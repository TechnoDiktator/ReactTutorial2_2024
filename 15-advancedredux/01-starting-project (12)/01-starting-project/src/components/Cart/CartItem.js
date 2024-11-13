import classes from './CartItem.module.css';

import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {



  const { title, quantity, total, price , id } = props.item;

  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }))
  }
  //   https://console.firebase.google.com/u/0/project/freeproject-59eb8/database/freeproject-59eb8-default-rtdb/data/~2F?fb_gclid=CjwKCAiAudG5BhAREiwAWMlSjKxzAslhy05Yn1vrVjLjVambpkhspR6DAa4QQ1Rr1rjIjYFpungY4RoCCNAQAvD_BwE
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
