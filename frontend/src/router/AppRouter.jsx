import React, { useContext, useEffect } from 'react'
import {
    Navigate,
    Route,
    Routes
  } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const { auth, verificaToken } = useContext( AuthContext );

  useEffect(() => {
    verificaToken();
  }, [verificaToken])

  if( auth.checking ) {
    return <h1>Espere por favor...</h1>
  }

  return (
    <>
        <Routes>
            <>
                {/* <Route path='/auth/*' element={<AuthRouter/>}/> */}
                <Route path='/auth/*' element={<PublicRoute isAuthenticated={auth.logged}/>}/>
                <Route path='/' element={<PrivateRoute isAuthenticated={auth.logged}/>}></Route>
                <Route path='*' element={<Navigate to='/'/>}></Route>
            </>
        </Routes>
    </>
  )
}
