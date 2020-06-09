import React from 'react';
import Hello from './components/hello'

function App() {
  let hello ="Hello World"
  return (
    <React.Fragment>
       <Hello hello={hello} color={'green'} />
    </React.Fragment>
  );
}

export default App;
