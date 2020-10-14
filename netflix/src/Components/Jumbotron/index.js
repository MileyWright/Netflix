import React from 'react';
import { Container, Inner } from './Styles/Jumbotron';

function Jumbotron ({ children, direction = 'row', ...restProps }) {
    return (
        <Inner direction={direction}>
            {children}
            </Inner>
        
    )
}

Jumbotron.Container = function  JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}> {children} </Container>
}
export default Jumbotron;