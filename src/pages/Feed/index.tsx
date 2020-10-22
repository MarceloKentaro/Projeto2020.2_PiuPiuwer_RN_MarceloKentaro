import React, { useState, useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import {useAuth} from '../../hooks/useAuth';

import {Main, Titulo, H1, Header, Container, Perfil, Pius,FabButtonView, FabButton, FabButtonImage, Sair, ButtonLogout, TextLogout} from './styles';

import PiusItem, {Piu} from '../../components/itemPius';

import Message from '../../assets/images/icons/message.png';


const Feed = () =>  {
    const { navigate } = useNavigation();

    const{user, logout}=useAuth();

    const[myinfo,setMyinfo] = useState({
        nome:'',
        usuario:'',
        foto:''
    });

    const [load, setLoad] = useState(false);

    /* Pegando Pius*/
    const[pius, SetPius] = useState([]);

    /*Ir para Tela de escrever menssagem*/
    function handleNavigateToPostPiu() {
        navigate('PostPiu')
      }

    //Pegar meus dados
    const getMyinfo = useCallback((user) => {
        setMyinfo({nome:user.first_name, usuario:user.username, foto:user.foto});
    },[user]);

    async function getPius(){
        const response = await api.get('/pius/');
        SetPius(response.data);
    }
    
    if(!load){
        getPius();
        getMyinfo(user);
        setLoad(!load);
    }
    useFocusEffect(() => {
        getPius();
    });        
    return(
            <Main>
                <Header>
                    <Titulo>
                        <Perfil source={{uri:myinfo.foto}}/>
                        <H1>Página Inicial</H1>
                    </Titulo>
                </Header>
                <Container>
                    <Pius>
                        {pius.map((piu:Piu) => {
                            return <PiusItem key={piu.id} piu={piu} />;
                            })
                        }
                    </Pius>
                </Container>
                <FabButtonView>
                    <FabButton onPress={handleNavigateToPostPiu}>
                        <FabButtonImage source={Message}></FabButtonImage>
                    </FabButton>
                </FabButtonView>
                <Sair>
                    <ButtonLogout onPress={logout}>
                        <TextLogout>Sair</TextLogout>
                    </ButtonLogout>
                </Sair>
            </Main>
            
    );
}

export default Feed;