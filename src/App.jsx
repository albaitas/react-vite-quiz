import './App.css';
import { useState } from 'react';
import Home from './Home';
import Intro from './Intro';

function App() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(true);
  };

  return <>{show ? <Home /> : <Intro onClick={onClick} />}</>;
}
export default App;
