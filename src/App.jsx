import All from './Components/All';
import './App.scss';
import randColor from './Functions/randColor'
import { useEffect, useState } from 'react';


import Single from './Components/Single';


function App() {

const [color, setColor ] = useState (null)



useEffect(() => {
  const timerId = setInterval(() => {
      setColor(randColor());
  }, 1500);
  return () => {
      clearInterval(timerId);
  }
}, []);

  return (
  //   <BrowserRouter>
  //   <Nav />
  //   <Routes>
  //     <Route path="/" element={<Home/>}></Route>
  //     <Route path="/categories" element={<MainCat/>}></Route>
  //      <Route path="/movies" element={<MainMovies/>}></Route>
  //   </Routes>
  // </BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className='top-list'>
        <h1 style={{
          color: color,
          marginLeft: '200px'
        }}>Easy meal preparation ideas for creative persons</h1>
         
        
        </div>
       <All />
      </header>
    </div>
  );
}

export default App;
