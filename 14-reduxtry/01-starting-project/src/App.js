
import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from '../src/components/Header.js'

import UserProfile from '../src/components/UserProfile.js';
import { useSelector } from 'react-redux';


import Auth from './components/Auth';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)


  return (
    <Fragment>
    <Header></Header>
    {!isAuth && <Auth></Auth>}
    {isAuth && <UserProfile></UserProfile>}
    <Counter />
    </Fragment>
  );
}

export default App;
