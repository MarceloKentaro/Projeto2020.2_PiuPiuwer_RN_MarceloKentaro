import styled from 'styled-components/native';

export const PostPiuView = styled.View`
    
    font-family:'Archivo_400Regular';
    align-items:center;
    justify-content: center;   
`;

export const Header = styled.View`
    flex-direction:row;
    font-family:'Archivo_400Regular';
    align-items:center;
    justify-content: space-between;   
`;

export const Voltar = styled.TouchableOpacity`
    width:50px;
`;

export const Form = styled.View`
    font-family:'Archivo_400Regular';
    align-items:flex-end;
    justify-content: center;   
`;

export const Textarea = styled.TextInput`
    width:340px;
	height:200px;
	font-size: 18px;
	text-align:center;
    margin-top:-50px;
`;

export const Contador = styled.Text`
    font-family:'Archivo_400Regular';
    color: #9a9a9a;
    font-size: 15px;
    margin-top:-40px;
`;

export const BoxButton = styled.View`
    align-items: center;
`;

export const BotaoPiu = styled.TouchableOpacity`
    width: 75px;
    height: 30px;
    margin-top:5px;
    border-radius: 20px;
    color:#1f2226;
    background:#FFD23F;
    font-size:15px;
    border: none;
`;

export const TextButton = styled.Text`
    font-family:'Archivo_400Regular';
	text-align:center;
	font-size: 18px;
`;

export const Erro = styled.Text`
    margin-top:-40px;
    margin-bottom:50px;
    font-size:15px;
    color: red;
`;