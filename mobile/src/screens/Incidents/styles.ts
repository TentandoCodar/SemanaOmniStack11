import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    paddingHorizontal: 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    color: #737380;
`;

export const Image = styled.Image`
    
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 48px;
    color: #13131a;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
`;



export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #FFF;
    margin-bottom: 16px;
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

export const IncidentButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;




