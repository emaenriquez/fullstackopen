const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'matemática',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'químico',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'físico',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'químico',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrofísico',
}];

export default function List() {
    const chemists = people.filter(person => person.profession === 'químico')


    const listItems = chemists.map(person =>
        <li>
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                conocido/a por {person.accomplishment}
            </p>
        </li>
    )

    return <>
        <h1>Hola mundo</h1>
        <h2>Estos son los fisicos mas demandados</h2>
        <h3>{listItems}</h3>
    </>
}