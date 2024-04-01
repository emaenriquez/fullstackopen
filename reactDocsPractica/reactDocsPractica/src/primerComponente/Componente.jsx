
import Gallery from "./Gallery"
import { Profile } from "./Gallery"
import Avatar from "./Avatar";

// function Avatar({ person, size }) {
//     return (
//         <img
//             className="avatar"
//             src="https://i.imgur.com/1bX5QH6.jpg"
//             alt="person.name"
//             width={size}
//             height={size}
//         />
//     );
// }

export default function Componente({ color, time }) {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const name = 'Gregorio Y. Zara';

    const today = new Date()

    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'es-ES',
            { weekday: 'long' }
        ).format(date);
    }

    function Card({ children }) {
        return (
            <div className="card">
                {children}
            </div>
        )
    }

    return (
        <>
            <img src={avatar}></img>
            <h1>Hola mundo</h1>
            <h2>Lista de tareas pendientes de {name}</h2>
            <h3>Lista de tareas pendientes del {formatDate(today)}</h3>
            <Gallery></Gallery>
            <Profile></Profile>
            {/* <Avatar person={{
                name: 'Aklilu Lemma',
                imageId: 'OKS67lh'
            }}
                size={80}
            >
            </Avatar>

            <Avatar person={{
                name: 'Aklilu Lemma',
                imageId: 'OKS67lh'
            }}
                size={120}
            >
            </Avatar> */}

            <Card children={<Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={90} > </Avatar>} > </Card>

            <h1 style={{ color: color }}>
                {time}
            </h1>
        </>
    )
}
