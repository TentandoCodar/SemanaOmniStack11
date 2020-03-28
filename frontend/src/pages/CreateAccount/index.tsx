import React, {useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import Loading from '../../animations/Loading';
import whiteLoading from '../../animations/white.json';
import redLoading from '../../animations/red.json';
import { Container, LoadingContainer, Content, FormSection, Logo, Form, Title, Description, Input, InputGroup, SubmitButton } from './styles';
import logoImg from '../../assets/logo.svg';

interface Props {
    history: any
}

const CreateAccount: React.FC<Props> = ({history}) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [whatsapp, setWhatsapp] = useState<string>("");
    const [uf, setUF] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        verifyLoguedIn();
    }, [])

    const verifyLoguedIn = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoading(false);
            return true;
        };
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
        const data = {name, email, password, whatsapp, uf, city}
        const response = await api.post('/ongs', data);
        history.push('/');
    }

    return (
        <Container>
            {
                isLoading ? 
                <LoadingContainer>
                    <Loading animation={redLoading}></Loading>
                </LoadingContainer>
                :
                <Content>
                    <FormSection>
                        <Logo src={logoImg}></Logo>
                        <Title>Cadastro</Title>
                        <Description>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</Description>
                        <Link className="specialLink" to="/" style={{textDecoration: 'none'}}>
                            <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                            <h5 style={{color: '#e02041'}}>Voltar ao login</h5>
                        </Link>
                    </FormSection>
                    <Form>
                        <Input onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"></Input>
                        <Input onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"></Input>
                        <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite sua senha"></Input>
                        <Input onChange={(e) => setWhatsapp(e.target.value)} maxLength={11} placeholder="Digite seu whatsapp"></Input>
                        <InputGroup>
                            <Input onChange={(e) => setUF(e.target.value)} maxLength={2} placeholder="Digite sua UF"></Input>
                            <Input onChange={(e) => setCity(e.target.value)} placeholder="Digite sua cidade"></Input>
                        </InputGroup>
                        <SubmitButton onClick={handleSubmit} disabled={submitButtonIsDisabled}>
                            {
                                submitButtonIsDisabled ?
                                <Loading animation={whiteLoading}></Loading>
                                :
                                'Entrar'
                            }
                        </SubmitButton>
                    </Form>
                </Content>
            }
        </Container>
    )
}

export default CreateAccount;