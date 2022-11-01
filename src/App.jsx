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
  const redCard = redMode ? "red__main card" : "card"
  return (
    <main className={redCard}>
      <Header redMode={redMode} toggleRedMode={toggleRedMode} />
      <Main redMode={redMode} />
      <Footer redMode={redMode} />
    </main>
  );
}

export default App;
