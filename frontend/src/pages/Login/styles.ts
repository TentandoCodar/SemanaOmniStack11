import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoadingContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const FormSection = styled.section`
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
`;

export const Logo = styled.img`

`;

export const Image = styled.img``;

export const Form = styled.form`
    margin-top: 25px;
`;

export const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 32px;
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

export const SubmitButton = styled.button`
    width: 100%;
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

export const Register = styled.h3`
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
`;