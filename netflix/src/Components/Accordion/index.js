import React, {useState} from 'react';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/Footer';

const ToggleContext = createContext();

function Accordion({ children, direction = 'row', ...restProps }) {
    return  ( 
        <Container {...restProps}>
            <Inner> {children }</Inner>
        </Container>
)}

export default Accordion;

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);

    return <Item {...restProps}>{children}</Item>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    return <Header onClick={() => setToggle()}>{children}</Header>;
};