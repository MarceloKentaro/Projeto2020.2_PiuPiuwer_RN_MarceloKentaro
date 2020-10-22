import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const PiuBox = styled.ScrollView`
    height: 150px;
    border-bottom-width: 1px;
    border-bottom-color: #e6ecf0;
    margin-top:10px;
    margin-right:10px;

`;
export const FotoPerfil = styled.Image`
    width:50px;
    height:50px;
    border-radius:30px;
    margin-right:10px;
`;
export const ConteudoBox = styled.View`
    flex-direction: row;
    margin-left:10px;
    flex: 0 1 auto;
`;

export const DadosUser = styled.View`
    flex-direction: row;
    

`;

export const MessageBox = styled.View`
    flex-shrink: 1;
`;

export const Name = styled.Text`
    font-family:'Archivo_700Bold';
    font-size:12px;

`;

export const Username = styled.Text`
    font-family:'Archivo_400Regular';
    font-size:12px;
    color:#657786;
    font-weight: normal;
    margin-left:5px;
`;

export const Button = styled(RectButton)`
    flex-direction:row;
    align-items: center;
    font-size:10px;
    margin-left: 20px;
`;

export const Imagem = styled.Image`
    width:19px;
    height:19px;
    margin-right:10px;
`;

export const Mensagem = styled.Text`
    font-size:14px;
    color: #657786;
    text-align: justify;
    /* margin: 0 0 0 0; */
`;

export const Interacao =  styled.View`
    flex-direction:row;
    justify-content:flex-end;
    margin: 10px 10px 10px 0;
    
`;

export const Contador =  styled.Text`
`;

