import React from 'react';
import {useAuth} from '../hooks/useAuth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';



const Routes: React.FC = () =>{

    const{user} = useAuth();
    if(user){
    return<AppRoutes />;
    } else{
        return <AuthRoutes />
    }
}

export default Routes;