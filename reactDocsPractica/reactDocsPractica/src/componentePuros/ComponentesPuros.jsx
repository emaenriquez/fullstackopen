
function Recipe({ drinkers }) {
    return (
        <ol>
            <li>Hervir {drinkers} tazas de agua.</li>
            <li>Añadir {drinkers} cucharadas de té y {0.5 * drinkers} cucharada de especias.</li>
            <li>Añadir {0.5 * drinkers} tazas de leche hirviendo y azúcar a gusto.</li>
        </ol>
    )
}

function Cup({guest}){
    return <h2>Taza de té para invitado #{guest}</h2>;
}


export default function ComponentesPuros() {

    let cups = []

    for (let i = 1; i < 12; i++) {
        cups.push(<Cup key={i} guest={i}></Cup>)        
    }

    return (
        <>
            <h1>Componente ComponentesPuros</h1>
            <h1>Receta de té Chai especiado</h1>
            <h2>Para dos</h2>
            <Recipe drinkers={2}></Recipe>
            <Recipe drinkers={4}></Recipe>
            <p>------------------------------</p>
            <Cup guest={1}></Cup>
            <Cup guest={2}></Cup>
            <Cup guest={3}></Cup>
            <br></br>
            <p>{cups}</p>
        </>
    )
}