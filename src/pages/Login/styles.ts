import styled from 'styled-components/native';
// --color-primary: #1f2226;
// --color-primary-light: #657786;
// --color-secondary: #e6ecf0;
// --color-secondary-dark: #9a9a9a;
// --color-background-grey:#F5F8FA;
// --color-background-yellow:#FFD23F;
// --color-error:#FF0000;

export const Global = styled.View`
	align-items: center;
	justify-content:center;
	flex:1;
`;

export const Header = styled.View`
	align-items: center;
`;

export const Logo = styled.Image`

	
`;
export const LoginBox = styled.View`

`;

export const Title = styled.Text`
	font-family:'Archivo_400Regular';
	font-size: 20px;
	
`;

export const Form = styled.View`
    width:100%;
`;

export const InputUser = styled.TextInput`
	font-family:'Archivo_400Regular';
	width:280px;
	height:45px;
	border: none;
	font-size: 18px;
	background:#F5F8FA;
	margin: 10px 0;
	text-align:center;
`;

export const InputPassword = styled.TextInput`
	font-family:'Archivo_400Regular';
	width:280px;
	height:45px;
	border: none;
	font-size: 18px;
	background:#F5F8FA;
	margin: 10px 0;
	text-align:center;
`;

export const Button = styled.TouchableOpacity`
	margin-top: 10px;
	width:280px;
	height:45px;
	border-radius:20px;
	background-color:#FFD23F;
	align-items:center;
	justify-content:center;
`;

export const TextButton = styled.Text`
	font-family:'Archivo_700Bold';
	text-align:center;
	font-size: 18px;

`;






