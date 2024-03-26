import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MyButtom() {
  return (
    <button>Click</button>
  )
}

function AboutPage(){
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo vas?</p>
    </>
  )
}


// let content;

// if(isLoggedIn){
//   content = <AdminPanel></AdminPanel>
// } else {
//   content = <LoginForm></LoginForm>
// }

function App() {
  const [count, setCount] = useState(0)

  let users = [
    {name:"emanuel",
    // imageUrl: "https://images.app.goo.gl/h3arrAhypeef2E6H7",
    imageSize: 90
    }
  ]

  const products = [
    { title: 'Col',isFruit:false, id: 1 },
    { title: 'Ajo',isFruit:false, id: 2 },
    { title: 'Manzana',isFruit:true, id: 3 },
  ];



  const listaElementos = products.map(product => 
    <li 
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
    </li>  
  )

  function handleClick() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <>
      <h1 className='titulo'>hola mundo</h1>
      <MyButtom></MyButtom>
      <AboutPage></AboutPage>

      <p>
        {users[0].name}
      </p>

      <img src= {users[0].imageUrl} alt= {users[0].name} style={{ width: users.imageSize, height: users.imageSize}}

      ></img>

      <ul>{listaElementos}</ul>

      <p>contador: {count}</p>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

    </>
  )

  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Hiciste clic {count} veces
      </button>
    );
  }
}

export default App
