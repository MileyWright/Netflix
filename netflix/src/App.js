import React from 'react';
import JumboData from './Fixtures/Jumbo.json';
import Jumbotron from './Components/Jumbotron';

function App() {
  return (
    <Jumbotron.Container >
      {JumboData.map(item => {
        return <Jumbotron key={item.id} direction={item.direction} />
      })}
    </Jumbotron.Container>
  );
}

export default App;
