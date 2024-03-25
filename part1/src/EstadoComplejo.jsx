
import { useState } from "react";


const History = (props) => {

    // renderizado condicional
    if(props.allClicks.length === 0){
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )

}


const Buttom = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}



const EstadoComplejo = () => {
    
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    // const [allClicks, setAll] = useState([])
    // const [total, setTotal] = useState(0)
    const [value, setValue] = useState(10)
    // estado complejo
    // return (
    //     <>
    //     <div>
    //         {left}
    //         <button onClick={() => setLeft(left + 1)}>
    //           left
    //         </button>
    //         <button onClick={() => setRight(right + 1)}>
    //           right
    //         </button>
    //         {right}
    //     </div>
    //     </>
    // )

    // const [click, setclick] = useState({
    //     left: 0,
    //     right: 0
    // })

    // const handleLeftClick  = () => {
    //     const newClicks = {
    //         ...click,
    //         left: click.left + 1,
    //     }

    //     setclick(newClicks)

    // }

    // const handleLeftClick = () => setclick({...click,left: click.left + 1})

    // const handleRightClick  = () => {
    //     const newClicks = {
    //         ...click,
    //         right: click.right + 1
    //     }

    //     setclick(newClicks)
    
    // }

    // const handleRightClick = () => setclick({...click,right: click.right + 1})

    const Button = ({ handleClick, text }) => (
        <button onClick={handleClick}>
          {text}
        </button>
    )
    // manejo de matrices

    const handleLeftClick  = () => {
        setAll(allClicks.concat("L"))

        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }
    const handleRightClick  = () => {
        setAll(allClicks.concat("R"))
        setRight(right + 1)
        setTotal(left + right)
    }

    const hello = () => {
        const hadler = () => console.log("hola mundo")
        return hadler
    }

    const setTovalue = (newValue) => {
        setValue(newValue)
    }

    // los hooks solo se pueden llamar desde el interior de un cuerpo de la función que define un componente de React:

    return (
        <div>
            {/* {left}
            <Button handleClick={handleLeftClick} text={"left"}></Button>
            <Button handleClick={handleRightClick} text={"right"}></Button>
            {right}
            <p>{allClicks.join(' ')}</p>
            <p>total: {total}</p>
            <History allClicks={allClicks}></History>
            {value}
            <button onClick={hello()}>hello buttom</button> */}
{/* 
            <button onClick={setTovalue(1000)}>thousand</button>
            <button onClick={setTovalue(0)}>reset</button>
            <button onClick={setTovalue(value + 1)}>increment</button> */}
            {value}
            <Buttom handleClick= {()=> setTovalue(1000)} text="thousand"></Buttom>
            <Buttom handleClick= {()=> setTovalue(0)} text="reset"></Buttom>
            <Buttom handleClick= {()=> setTovalue(value + 1)} text="increment"></Buttom>

        </div>
    )

}

export default EstadoComplejo