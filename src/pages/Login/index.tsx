import React, {useState, useCallback} from 'react';
import * as Yup from 'yup';
import { ValidationError } from 'yup';

import {useAuth} from '../../hooks/useAuth';

import {Global, Header, Logo, LoginBox, Title, Form, Button, TextButton, InputUser, InputPassword} from './styles';
import imgLogo from '../../assets/images/logo.png';

interface Errors {
    [key: string]: string;
}

export function getValidationErrors(error: ValidationError): Errors {
    const validationErrors: Errors = {};

    error.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    });

    return validationErrors;
        }

const Login: React.FC =() => {
    const[cred, setCred] = useState({
        username:'',
        password:'',
    });
    const {fazLogin} = useAuth();
    const handleLogin = useCallback(async () =>{
        try {
            const esquema = Yup.object().shape({
                username: Yup.string().required('Usuário obrigatório'),
                password: Yup.string().required('Senha obrigatória'),
            });
        
            await esquema.validate(cred, { abortEarly: false });
        
            await fazLogin(cred);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // Fazer o que queremos com o erro do Yup
                const errors = getValidationErrors(err);
                if(errors.username === "Usuário obrigatório" && errors.password === "Senha obrigatória"){
                    alert("Usuário e Senha são obrigatórios"); 
                }
                else{
                    if(errors.username === "Usuário obrigatório"){alert(errors.username);}
                    else{alert(errors.password);  }   
                }
            }
            else{
                alert("Usuário ou Senha incorretos")
            }

        }
    }, [cred]);
    
    return(
        <Global>
            <Header>
            <Logo source={imgLogo}/>
            <Title>
                Entrar no Piupiuwer
            </Title>
            </Header>

            <LoginBox>
                <Form>
                    <InputUser 
                        placeholder="Usuário"
                        placeholderTextColor="#657786" 
                        onChangeText={text => {
                            setCred({
                                username: text, 
                                password: cred.password
                            })}
                        }
                        defaultValue={''}
                    />

                    <InputPassword 
                        placeholder="Senha"
                        placeholderTextColor="#657786"
                        onChangeText={text => {
                            setCred({
                                ...cred, 
                                password: text
                            })}
                        }
                        defaultValue={''}  
                    />

                    <Button onPress={handleLogin}>
                        <TextButton>Entrar</TextButton>
                    </Button>
                    
                    
                </Form>
            </LoginBox>
        </Global>
    );
}

export default Login;
