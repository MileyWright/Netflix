import React from 'react';
import { JumbotronContainer } from './Containers/Jumbotron';
import { FooterContainer } from './Containers/Footer';
import FaqsContainer from './Containers/Faqs';


function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
