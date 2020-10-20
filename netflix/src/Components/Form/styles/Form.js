import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
  `;

export const Error = styled.div``;

export const Base = styled.form``;

export const Title = styled.h1``;

export const Text = styled.p``;

export const TextSmall = styled.p``;

export const Button = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:hover {
    text-decoration: underline;
    }
`;

export const Input = styled.input``;

export const Submit = styled.button``;

