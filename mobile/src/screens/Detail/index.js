import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Container, Header, Image, BackButton, HeaderText, 
  Incident, IncidentProperty, IncidentValue, ContactBox,
  ContactDescription, ContactTitle, Actions, Action,
  ActionText
} from './styles';


const Detail = () => {
  const navigator = useNavigation();
  const route = useRoute();
  const [incident, setIncident] = useState();

  
  useEffect(() => {
    setIncident(route.params.item)
  }, [])
  

  function backToIncidents() {
    navigator.navigate('Home');
  }

  return (
    <Container>
        <Header>
          <Image source={require('../../assets/logo.png')}></Image>
          <BackButton onPress={backToIncidents}>
            <HeaderText>Voltar</HeaderText>
          </BackButton>
        </Header>

        <Incident>
          <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue>{incident?.ong.name}</IncidentValue>

          <IncidentProperty>Caso:</IncidentProperty>
          <IncidentValue>{incident?.title}</IncidentValue>

          <IncidentProperty>Valor:</IncidentProperty>
          <IncidentValue>R$ {incident?.value}</IncidentValue>
        </Incident>

        <ContactBox>
          <ContactTitle>Salve o dia!</ContactTitle>
          <ContactTitle>Seja o heroi desse caso.</ContactTitle>

          <ContactDescription>Entre em contato:</ContactDescription>

          <Actions>
            <Action>
              <ActionText>Whatsapp</ActionText>
            </Action>
            <Action>
              <ActionText>E-mail</ActionText>
            </Action>
          </Actions>
        </ContactBox>
    </Container>
  );
}

export default Detail;
