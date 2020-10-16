import React from 'react';
import { JumbotronContainer } from './Containers/Jumbotron';
import { FooterContainer } from './Containers/Footer';
import FaqsContainer from './Containers/Faqs';
import OptForm from './Containers/Opt-form';

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <OptForm />
      <FooterContainer />
    </>
  );
}

export default App;
