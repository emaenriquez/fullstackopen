import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onSmash,text}) => <button onClick={onSmash}> {text} </button>


const App2 = () => {

    const [ counter, setCounter ] = useState(0)
    
    const increaseByOne  = () => setCounter(counter + 1);
    const setToZero  = () => setCounter(0)

    return (
      <div>
        <Display counter={counter}></Display>
        <Button onClick={increaseByOne} text={"plus"}></Button>
        <Button onClick={setToZero} text={"zero"}></Button>
      </div>
    )
  }
  export default App2