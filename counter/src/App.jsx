import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  let afterZero = 'already zero'

  const addValue =() => {
    if (count == afterZero) {
      setCount(0);
    }else{
      setCount(count + 1);
    }
  }
  const removeValue = ()=> {
    if(count != 0){
      setCount(count - 1);
    }else{
      setCount(afterZero)
    }
  }
  const removeAll = () => {
    setCount(0);
  }

  return (
    <>
      <h1>Simple Counter </h1>
      <h2>Counter value : {count}</h2>
      <h2 id='h2'></h2>

      <button onClick={addValue}>Add value by 1</button>
      <button onClick={removeValue}>Remove value by 1</button>
      <button onClick={removeAll}>Remove all</button>
    </>
  )
}

export default App
