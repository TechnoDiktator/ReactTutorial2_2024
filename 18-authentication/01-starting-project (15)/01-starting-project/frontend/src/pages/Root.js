import { Outlet, useNavigation, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData()
  const submit  = useSubmit()

  useEffect(() => {
    if(!token){
      return 
    }

    if(token === "EXPIRED") {
      submit(null , {action:'logout' , method:'post'})
    }

    const tokenRemainingDuration   = getTokenDuration()
    setTimeout(() => {
      submit(null , {action:'logout' , method:'post'})
    } , tokenRemainingDuration) //1 hour

  } , [token , submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
