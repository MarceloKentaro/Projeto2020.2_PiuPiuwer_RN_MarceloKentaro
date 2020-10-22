import React,{useCallback, useEffect} from 'react';
import {useAuth} from '../../hooks/useAuth';

import api from '../../services/api';

import {ConteudoBox, FotoPerfil, PiuBox, MessageBox, DadosUser,Name, Username, Interacao, Button,Imagem, Mensagem, Contador} from './styles';

import Like from '../../assets/images/icons/like.png';
import Favorito from '../../assets/images/icons/highlight.png';


export interface usuario{
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    sobre: string;
    foto: string;
}

export interface Piu {
    id: number;
    usuario: usuario;
    likers: object;
    favoritado_por: object;
    texto: string;
    horario: string;
}

interface PiuProps {
    piu: Piu;
}

const PiusItem: React.FC<PiuProps> = ({piu}) =>{
    const{user, token}=useAuth();

    /* Dar Like*/
    const handleLike = useCallback(async(user, piu, token) => {
        const data={
            usuario:user.id,
            piu:piu.id,
        }
        const response = await api.post('/pius/dar-like/',
            data,
            { 
            headers:{
                Authorization: `JWT ${token}`
            },
        });
        console.log(response);
    },[]);

    

    /* Favoritar */
    const handleFavorito = useCallback(async(user, piu, token) => {
        const data={
            usuario:user.id,
            piu:piu.id,
        }
        const response = await api.post('/pius/favoritar/',
            data,
            { 
            headers:{
                Authorization: `JWT ${token}`
            },
        });
        console.log(response);
    },[]);


    return(
        <PiuBox>
            <ConteudoBox>
                <FotoPerfil source={{uri: piu.usuario.foto}} />
                    <MessageBox>
                        <DadosUser>
                            <Name>{piu.usuario.first_name +" "+ piu.usuario.last_name}</Name>
                            <Username>{" @"+piu.usuario.username}</Username>
                        </DadosUser>
                        <Mensagem>{piu.texto}</Mensagem>
                    </MessageBox>
                </ConteudoBox>
                <Interacao>
                    <Button onPress={e=>{
                        handleLike(user, piu,token);
                        
                    }}>
                        <Imagem source={Like}/>
                        <Contador>{Object.keys(piu.likers).length }</Contador>
                    </Button>
                    <Button onPress={e=>{handleFavorito(user, piu,token)}} >
                        <Imagem source={Favorito}/>
                        <Contador>{Object.keys(piu.favoritado_por).length}</Contador>
                    </Button>
                </Interacao>
           
        </PiuBox>
    );
}
export default PiusItem;
