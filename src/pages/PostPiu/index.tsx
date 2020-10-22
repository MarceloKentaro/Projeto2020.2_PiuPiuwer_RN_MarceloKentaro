import React, { useState, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import {useAuth} from '../../hooks/useAuth';

import {Header, Form, Textarea,BoxButton, BotaoPiu,TextButton, Contador, Erro, PostPiuView} from './styles';

const PostPiu = () =>{
    //Voltar tela
    const { goBack } = useNavigation();

    function handleNavigateBack() {
      goBack();
    }

    const{user, token}=useAuth();
    //Abaixo é para registrar erro na postagem de um PIU
    const[erro,setErro] = useState({
        mensagem:''
    });

    const[contador, setContador] = useState({
        caracteres:'',
    });

        /* Postando Pius*/
        const postPiu = useCallback(async(user, token, text) => {
            const data={
                usuario:user.id,
                texto:text
            }
            const response = await api.post('/pius/',
                data,
                { 
                headers:{
                    Authorization: `JWT ${token}`
                },
            });

            handleNavigateBack();
            //console.log(response);
        },[]);
    return(
        <PostPiuView>
            <Header>


            </Header>
            <Form >
                <Textarea placeholder={"O que está acontecendo?"}
                    onChangeText={
                        text => {
                            if(text.length > 140){
                                setErro({mensagem:'Passou o limite de caracteres!'});
                            }
                            else{
                                setErro({ mensagem:''});
                                setContador({caracteres: text});
                            }
                        }
                    }
                />

                <Erro>{erro.mensagem}</Erro>
                
            </Form>
            <BoxButton>
                <Contador>{contador.caracteres.length}/140</Contador>
                <BotaoPiu onPress=
                {
                    event => {
                        if(contador.caracteres.length === 0){
                            setErro({mensagem:'Caixa de texto está vazia!'});
                        }
                        else{
                            postPiu(user, token,contador.caracteres);
                            contador.caracteres='';
                        }
                    }
                }>
                    <TextButton>Piar</TextButton>
                </BotaoPiu>
            </BoxButton>
        </PostPiuView>
    );
}
export default PostPiu;