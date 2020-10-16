import React from 'react';
import { JumbotronContainer } from '../Containers/Jumbotron';
import { FooterContainer } from '../Containers/Footer';
import FaqsContainer from '../Containers/Faqs';

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
