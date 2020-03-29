import styled from 'styled-components/native';

export const Container = styled.View`
    padding-horizontal: 25px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`;

export const Image = styled.Image`
    
`;

export const BackButton = styled.TouchableOpacity`
    background-color: #e02041;
    padding: 8px;
`;

export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-top: 20px;

`;

export const IncidentProperty = styled.Text`
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`;

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
`;

export const ContactBox = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-top: 10px;
`;

export const ContactTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #13131a;
    line-height: 30px;
`;

export const ContactDescription = styled.Text`
    font-size: 15px;
    color: #737380;
    margin-top: 16px;
`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
`;

export const Action = styled.TouchableOpacity`
    background-color: #e02041;
    border-radius: 8px;
    height: 50px;
    width: 48%;
    align-items: center;
    justify-content: center;
`;

export const ActionText = styled.Text`
    font-weight: bold;
    color: white;
`;