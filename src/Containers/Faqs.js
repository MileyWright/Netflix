import React from 'react';
import faqsData from '../Fixtures/Faqs.json';
import { Accordion, OptForm } from '../Components';

function FaqsContainer() {

    return (
        <Accordion>
            <Accordion.Title> Frequently Asked Questions </Accordion.Title>
            <Accordion.Frame>
                {faqsData.map(item => {
                    return (
                        <Accordion.Item key={item.id}>
                            <Accordion.Header> {item.header} </Accordion.Header>
                            <Accordion.Body> {item.body} </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion.Frame>
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button to='/signup' >Get Started</OptForm.Button>
                <OptForm.Break />
            </OptForm>
        </Accordion>
    )
}

export default FaqsContainer;