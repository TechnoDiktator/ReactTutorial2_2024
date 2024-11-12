import { useCallback } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
export default function Header() {

    const userProgressCtx =useContext(UserProgressContext)


    const cartCtx = useContext(CartContext)
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems , item)=>{
        return totalNumberOfItems+item.quantity
    } , 0)
    
    function handleShowCart(){
        userProgressCtx.showCart()
    }
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A food order app" />
            <h1>ShaDY Food</h1>
        </div>
        <nav>
            <Button onClick={handleShowCart} textOnly={true}>{`Cart ${totalCartItems}` }</Button>
        </nav>
    </header>

}