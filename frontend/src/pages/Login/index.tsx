import React, {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, LoadingContainer, FormSection, Logo, Form, Title, Input, SubmitButton, Register, Image } from "./styles";
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import Loading from '../../animations/Loading';
import whiteLoading from '../../animations/white.json';
import redLoading from '../../animations/red.json';
interface Props {
    history: any;
}

const Login: React.FC<Props> = ({history}) => {
    const [email, setEmail] = useState<string>("gustavosjn2013@gmail.com");
    const [password, setPassword] = useState<string>("123456");
    const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        verifyLoguedIn();
    }, [])

    const verifyLoguedIn = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoading(false);
            return null;
        }
        api.post('/verifyLogin', {}, {headers: {
            authorization: token
        }}).then((resp) => {
            history.push('/profile');
        }).catch((err) => {
            localStorage.removeItem('token');
            setIsLoading(false);
        }) 
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setSubmitButtonIsDisabled(true);
        const data = {email, password};
        const response = await api.post('/login', data);
        setSubmitButtonIsDisabled(false);
        const informations = response.data;
        localStorage.setItem('token', "Bearer " + informations.token);
        history.push('/profile')
    }

    return (
        <Container>
            {
                isLoading ?
                <LoadingContainer>
                    <Loading animation={redLoading}></Loading>
                </LoadingContainer>
                :
                <Fragment>
                    <FormSection>
                        <Logo src={logoImg}></Logo>

                        <Form>
                            <Title>Faça seu login</Title>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu email"></Input>
                            <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha"></Input>
                            <SubmitButton disabled={submitButtonIsDisabled} onClick={handleSubmit}>
                                {
                                    submitButtonIsDisabled ?
                                    <Loading animation={whiteLoading}></Loading>
                                    :
                                    'Entrar'
                                }
                            </SubmitButton>
                            <Link to="/register" style={{textDecoration: 'none', border: 0}}>
                                <Register>Faça seu registro</Register>
                            </Link> 
                            <Link to="/register" style={{textDecoration: 'none', border: 0}}>
                                <FiLogIn size={16} color="#e02041"></FiLogIn>
                            </Link>
                        </Form>
                    </FormSection>
                    <Image alt="Heroes" src={heroesImg}></Image>
                </Fragment>
            }
        </Container>
    )
}

export default Login;
