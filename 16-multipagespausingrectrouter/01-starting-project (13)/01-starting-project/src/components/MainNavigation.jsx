import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import classes from './Mainnavigation.module.css'
export default function MainNavigation() {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    {/* is active is provided by rect router */}
                    <NavLink to={"/"} className={({isActive}) => isActive ? classes.active: undefined} end >Home</NavLink>
                    <NavLink to={"/products"} className={({isActive}) => isActive ? classes.active: undefined} end >Products</NavLink>
                    
                    {/* <Link to={"/"}>Home</Link> */}
                    {/* <Link to={"/products"}>Products</Link> */}
                </li>
            </ul>
        </nav>
    </header>
}
