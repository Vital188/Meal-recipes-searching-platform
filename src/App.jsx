import All from './Components/All';
import './App.scss';
import Create from './Components/Create'
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {



let navigate = useNavigate();
const navigateToCreate = () => {
  // 👇️ navigate to /Create
  navigate('/Create');
};

const navigateToHome = () => {
  // 👇️ navigate to /
  navigate('/');
};

  return (
    <div className="App">
    <header className="App-header">
      <div className='boxs'>
    <button onClick={navigateToHome} style={{
      // height: '80px',
      marginLeft: '100px',
      fontSize: '25px',
      marginTop: '60px',
      cursor: 'pointer',
      color: 'blue',
      border: '2px solid crimson',
      borderRadius: '10px',
      padding: '20px'
    }}>HOME PAGE
    </button> 
    <button onClick={navigateToCreate} style={{
      // height: '80px',
      marginLeft: '100px',
      fontSize: '25px',
      marginTop: '60px',
      cursor: 'pointer',
      color: 'blue',
      border: '2px solid crimson',
      borderRadius: '10px',
      padding: '20px'
    }}>FAVORITE RECEPIES LIST
    </button>
    </div>
    <Routes>
    <Route path="/create" element={<Create />} />
    <Route path="/" element={<All/>} /> 
    </Routes> 
    </header>
    </div>
  );
}

export default App;
