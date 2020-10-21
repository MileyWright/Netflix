import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Background, Logo, Button, Feature, Group, Text, FeatureCallOut, NavLink } from './styles/Header';

export default function Header({ bg = true, children, ...restProps}) {
    return bg ? (
        <Background {...restProps}>
            {children}
        </Background>
    ) : (
        children
    )
}

Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}> {children} </Feature>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}> { children } </Container>
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>

    )
}
Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <NavLink {...restProps}>{children}</NavLink>;
};