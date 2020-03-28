import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;
    }
    
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;
    }

    ul > li {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        position: relative;
    }

    ul > li > button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;
    }

    ul > li > button:hover {
        opacity: 0.8;
        transition: .5s;
    }

    ul > li > strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
    }

    ul > li > p + strong {
        margin-top: 32px;
    }

    ul > li > p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    a {
        width: 260px;
        margin-left: auto;
        border: 0;
    }

    
`;

export const Logo = styled.img`
    height: 64px;
`;

export const Welcome = styled.span`
    font-size: 20px;
    margin-left: 24px;
`;

export const NewIncident = styled.h4`
    background: #e02041;
    padding: 12px;
    border: 0;
    color: white;
`;

export const SignUpButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 4px;
    background: #e02041;
    border: 0;
    margin-left: 10px;

    &:hover {
        opacity: 0.7;
        transition: .5s;
    }
`;

export const Title = styled.h1`

`;




