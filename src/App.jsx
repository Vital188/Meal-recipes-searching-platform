import All from './Components/All';
import './App.scss';
import randColor from './Functions/randColor'
import { useEffect, useState } from 'react';


function App() {

//   useState [color, setColor ] = ('green')

// useEffect (() => {
//   setColor(randColor())
// }, [3000])

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          color: randColor()
        }}>Easy meal preparation ideas for creative persons</h1>
       <All />
       <h1 style={{
          color: randColor()
        }}>Delicious food recipes ideas only for you</h1>
      </header>
    </div>
  );
}

export default App;
