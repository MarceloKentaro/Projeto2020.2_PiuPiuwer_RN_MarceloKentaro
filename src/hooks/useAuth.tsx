import React, {createContext, useContext, useState, useCallback, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}
interface AuthContextData{
    user: object;
    token:string;
    fazLogin(user: object): void;
    logout(): void;
    
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({children}) =>{
    const [data,setData] = useState<AuthState>({} as AuthState);

    useEffect(()=> {
        async function carregarDados(){
           const [user,token] = await AsyncStorage.multiGet(['@Piupiuwer:cred','@Piupiuwer:token']);

            if(user[1] && token[1]){
                //  api.defaults.headers.authorization = `JWT ${token}`;
                setData({user: JSON.parse(user[1]), token: token[1]});    
            }
        }
        carregarDados()
    }, []);

    const fazLogin = useCallback(async(cred) => {
            const response = await api.post('/login/', cred);
            
            const{user, token} = response.data;

            await AsyncStorage.setItem('@Piupiuwer:token', token);

            if (!!token) {
                const userResponse = await api.get(`usuarios/?search=${cred.username}`);
                const user = userResponse.data[0];
                await AsyncStorage.setItem('@Piupiuwer:cred', JSON.stringify(user));
                setData({token: token, user: user});
            }
        },[data]);
        //api.defaults.headers.authorization = `JWT ${token}`;
    const logout = useCallback(async() => {   
        await AsyncStorage.removeItem('@Project:cred');
        await AsyncStorage.removeItem('@Project:token');
        setData({} as AuthState);
    },[setData]);
    return(
        <AuthContext.Provider value={{user:data.user, token:data.token, fazLogin, logout}}>
            {children}
        </ AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}


