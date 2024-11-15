import classes from './MainNavigation.module.css';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to={"/"}></Link> */}

            {/* nav link has in implicitely present isActive prop */}
            <NavLink 
            to={"/"} 
            className={({isActive}) => isActive ? classes.active:undefined} end>
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to={"/events"}></Link> */}
            <NavLink 
            to={"/events"} 
            className={({isActive}) => isActive ? classes.active:undefined} end>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
