import styled from 'styled-components/native';

export const Main = styled.ScrollView`
    margin-top:25px;
    flex:1;
`;

export const Header = styled.View`
    width:100%;
    flex-direction: column;
`;

export const Titulo = styled.View`
    flex-direction: row;
    align-items:center;
    height:40px;
    border-bottom-width: 1px;
    border-bottom-color: #e6ecf0;
    margin-bottom: 4px;
`;

export const H1 = styled.Text`
    width: 100%;
    font-family:'Archivo_400Regular';
    font-weight: bold;
    font-size: 20px;
    margin-left:10px;
    
`;

export const Container = styled.View`
    align-items:center;
    justify-content:center;
    width: 100%;
`;

export const Perfil = styled.Image`
    width: 35px;
    height: 35px;
    border-radius:100px;
    margin-left: 5px;
`;

export const Pius = styled.View`
    flex: 1;
    margin:10px 0 0 0;
`;

export const FabButtonView = styled.View`
    position:absolute;
    top: 10px;
    right:10px;
    flex:1;
    align-items: center;
    justify-content:center;
    
`;

export const FabButton = styled.TouchableOpacity`
    width:25px;
`;

export const FabButtonImage = styled.Image`
    width: 25px;
    height: 25px;
`;

export const Sair = styled.View`
    align-items:center;
    height:20px;
    width:100%;
    margin-bottom:10px;
`;

export const ButtonLogout = styled.TouchableOpacity`
    width:30px;
`;

export const TextLogout = styled.Text`
    font-size: 16px;
    
`;