import React, {useEffect, useState} from 'react';
import { FiPower, FiTrash2, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Header, Logo, Welcome, 
    NewIncident, SignUpButton, Title,

} from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Props {
    history: any
}

const Profile: React.FC<Props> = ({history}) => {
    const [ong, setOng] = useState<any>([]);
    const [ongName, setOngName] = useState<string>("");
    const [page, setPage] = useState<Number>(1);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            history.push('/');
        }
    }, [])

    useEffect(() => {
        getOngData();
    }, [])

    

    const getOngData = async () => {
        const localName = localStorage.getItem('ongName');
        if(localName) {
            setOngName(localName);
        }
        const token = await localStorage.getItem('token');
        const response = await api.get(`/ongs/${page}`, {
            headers: {
                authorization: token
            }
        });

        localStorage.setItem('ongName',response.data.name);

        if(!localName) {
            setOngName(response.data.name);
        }

        setOng(response.data);
    }

    const deleteItem = async (id: Number) => {
        const token = localStorage.getItem('token');
        const response = await api.delete(`/incidents/${id}`, {
            headers: {
                authorization: token
            }
        })
        getOngData()
    }

    const signUp = (e:any) => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <Container>
            <Header>
                <Logo src={logoImg}></Logo>
                <Welcome>{ongName ? `Bem vinda, ${ongName}`: 'Carregando ... '}</Welcome>

                <Link to="/newincident">
                    <NewIncident>Cadastrar novo caso</NewIncident>
                </Link>
                <SignUpButton onClick={signUp}>
                    <FiPower size={18} color="#fff"></FiPower>
                </SignUpButton>
            </Header>
            <Title>Casos cadastrados</Title>
            
            <ul>
                {ong.incidents?.map((value: any) => {
                    return (
                        <li key={value.id}>
                            <strong>CASO:</strong>
                            <p>{value.title}</p>

                            <strong>DESCRIÇÃO</strong>
                            <p>{value.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value.value)}</p>

                            <button onClick={() => deleteItem(value.id)} type="button">
                                <FiTrash2  size={20} color="#e02041"/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </Container>
    );
}

export default Profile;