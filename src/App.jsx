import Feedback from "./components/Feedback/Feedback.jsx";
import { useState } from 'react';

import './App.css'
import Button from './components/Button/Button.jsx'

function App() {
  const [count, setCount] = useState(0);
  
  const onMinus = () =>  setCount((prev) => prev - 1);
  return (
    <div className='app'> 
      React Introduction
      {/* Вызов компонента */}
      <Button name="plus" onButtonClick={()=> setCount((prev) => prev +1)} />
      <Button name="minus" onButtonClick={onMinus}/>
        <div>{count}</div>
        <Feedback />
    </div>
  );
}
export default App