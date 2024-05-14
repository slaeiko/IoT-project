import React from 'react'
import { Navigate } from 'react-router-dom';
import { SensorPage } from '../pages/SensorPage';

export const PrivateRoute = ({isAuthenticated}) => {
    return ( isAuthenticated ) ? <SensorPage/> : <Navigate to='/auth/login'/>;
}
