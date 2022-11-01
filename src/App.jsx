import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  const [redMode, setRedMode] = useState(false)
  function toggleRedMode(){
    setRedMode(prevState => !prevState)
  }

  return (
    <main className="card">
      <Header redMode={redMode} toggleRedMode={toggleRedMode} />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
