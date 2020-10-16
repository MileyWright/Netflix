import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Background, Frame, Logo } from './styles/Header';

export default function Header({ bg = true, children, ...restProps}) {
    return bg ? (
        <Background {...restProps}>
            {children}
        </Background>
    ) : (
        children
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}> { children } </Container>
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>

    )
}
