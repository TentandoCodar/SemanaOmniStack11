import React, {useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import Loading from '../../animations/Loading';
import whiteLoading from '../../animations/white.json';
import redLoading from '../../animations/red.json';
import { Container, LoadingContainer, Content, FormSection, 
    Logo, Form, Title, Description, Input, DescriptionText, 
    InputGroup, ButtonsContainer, Button
} from './styles';
import logoImg from '../../assets/logo.svg';

interface Props {
    history: any
}

const CreateAccount: React.FC<Props> = ({history}) => {
    const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [value, setValue] = useState<string>("0");

    useEffect(() => {
        verifyTokenIsValid();
    }, [])

    const verifyTokenIsValid = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
            return null;
        }
        api.post('/verifyLogin', {}, {headers: {
            authorization: token
        }}).then((resp) => {
        }).catch((err) => {
            localStorage.removeItem('token');
            history.push('/')
        }) 
    }

    const handleCancel = (e:any) => {
        e.preventDefault();
        history.push('/profile');
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        setSubmitButtonIsDisabled(true);
        const data = {title, description, value: parseFloat(value)};

        const response = await api.post('/incidents', data, {
            headers: {
                authorization: token
            }
        })

        history.push('/profile');
    }

    return (
        <Container>
            <Content>
                <FormSection>
                    <Logo src={logoImg}></Logo>
                    <Title>Cadastrar novo caso</Title>
                    <Description>Descreva o caso detalhadamente para encontrar um novo heroi</Description>
                    <Link className="specialLink" to="/" style={{textDecoration: 'none'}}>
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        <h5 style={{color: '#e02041'}}>Voltar para home</h5>
                    </Link>
                </FormSection>
                <Form>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Titulo do caso"></Input>
                    <DescriptionText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição do caso"></DescriptionText>
                    <Input value={value} onChange={(e) => setValue(e.target.value)}  type="number" placeholder="Valor do caso"></Input>
                    <ButtonsContainer>
                        <Button onClick={(e) => handleCancel(e)} style={{backgroundColor: "#dcdce6"}}  disabled={submitButtonIsDisabled}>
                            {
                                'Cancelar'
                            }
                        </Button>
                        <Button onClick={handleSubmit}  disabled={submitButtonIsDisabled}>
                            {
                                submitButtonIsDisabled ?
                                <Loading animation={whiteLoading}></Loading>
                                :
                                'Entrar'
                            }
                        </Button>
                    </ButtonsContainer>
                </Form>
            </Content>
        </Container>
    )
}

export default CreateAccount;