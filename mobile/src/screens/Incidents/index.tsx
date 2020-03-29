import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import { Container, Header, Image, HeaderText, 
  Title, Description, Incident,
  IncidentProperty, IncidentValue, IncidentButton
} from './styles';



const Incidents: React.FC = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getOngData();
  }, [])

  async function getOngData() {
    const response = await api.get('/incidents')
    setData(response.data)
  }

  function navigateToDetail(item: any) {
    navigation.navigate('Detail', {item});
  }

  return (
    <Container>
        <Header>
          <Image source={require('../../assets/logo.png')}></Image>
          <HeaderText>Total de casos</HeaderText>
        </Header>

        <Title>Bem-vindo</Title>
        <Description>Escolha um dos casos abaixo e salve o dia</Description>

        <FlatList data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={data => String(data.id)}
          renderItem={({item}) => (
            <Incident>
              <IncidentProperty>ONG:</IncidentProperty>
              <IncidentValue>{item.ong.name}</IncidentValue>

              <IncidentProperty>Caso: </IncidentProperty>
              <IncidentValue>{item.title}</IncidentValue>

              <IncidentProperty>Valor:</IncidentProperty>
              <IncidentValue>R$ {parseFloat(item.value)}</IncidentValue>
              
              <IncidentButton onPress={() => {
                navigateToDetail(item);
              }}>
                <Text style={{
                  color: "#e02041",
                  fontSize: 15,
                  fontWeight: 'bold'
                }}>Detalhes</Text>
              </IncidentButton>
          </Incident>
          )}
        />
    </Container>
  );
}

export default Incidents;