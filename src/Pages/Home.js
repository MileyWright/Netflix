import React from 'react';
import { Feature, OptForm } from '../Components';
import HeaderContainer from '../Containers/Header';
import { JumbotronContainer } from '../Containers/Jumbotron';
import { FooterContainer } from '../Containers/Footer';
import FaqsContainer from '../Containers/Faqs';

export default function Home() {
    return (
        <>  
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button to='/signup'>Get Started</OptForm.Button>
                    <OptForm.Break />
                </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
