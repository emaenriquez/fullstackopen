import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentesPuros from './componentePuros/ComponentesPuros'
// import List from './renderizarListas/List.jsx'
// import AppRenderizado from './renderizadoCondisional/AppRenderizado.jsx'
// import PrimerComponente from './primerComponente/Componente.jsx'
// import App from './App.jsx'
// import Inicio from './DescribitUi/Inicio.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* react ui de la documentacion */}
    {/* <Inicio></Inicio> */}
    {/* primer componenete */}
    {/* <PrimerComponente color={"red"} time={21}></PrimerComponente> */}
    {/* renderizado condicinonal*/}
    {/* <AppRenderizado></AppRenderizado> */}
    {/* renderizar listas */}
    {/* <List></List> */}
    {/* componenete puros */}
    <ComponentesPuros></ComponentesPuros>


  </React.StrictMode>,
)
