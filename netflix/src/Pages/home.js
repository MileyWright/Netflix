import React from 'react';
import HeaderContainer from '../Containers/Header';
import { JumbotronContainer } from '../Containers/Jumbotron';
import { FooterContainer } from '../Containers/Footer';
import FaqsContainer from '../Containers/Faqs';

export default function Home() {
    return (
        <>  
            <HeaderContainer />
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
