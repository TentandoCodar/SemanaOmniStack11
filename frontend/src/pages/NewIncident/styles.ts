import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0,0,0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
`;

export const FormSection = styled.section`
    width: 100%;
    max-width: 380px;
`;

export const Logo = styled.img`

`;

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
`;

export const Title = styled.h1`
    margin: 64px 0 32px;
    font-size: 32px;
`;

export const Description = styled.p`
    font-size: 18px;
    color: #737380;
    line-height: 32px;
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 0 12px;
`;

export const DescriptionText = styled.textarea`
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 0 12px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 48%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #ba0f2c;
        font-weight: bold;
        transition: .5s;
    }
`;