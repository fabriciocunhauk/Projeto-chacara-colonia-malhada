import styled from 'styled-components';

export const ContactSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    text-align: center;

    h1 {
        margin-top: 90px;
        font-size: 3em;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 600px;
    height: 400px;
    background: #00A699;
    margin-top: 50px;
    border-radius: 5px;

    @media (max-width: 500px) {
        width: 350px;
        height: 500px;
    }
`;

export const Label = styled.label`
    color: white;
`;
export const Input = styled.input`
    width: 400px;
    height: 50px;
    background: transparent;
    border: transparent;
    border-bottom: 1px solid white;
    outline: none;
    color: white;

    &::placeholder {
        color: white;
    }

    @media (max-width: 500px) {
        width: 300px;
    }
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 50px;
    outline: none;
    border: 1px solid white;
    background: #000d1a;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
   

    &:hover {
        transform: translateY(-2px);
    }
`;