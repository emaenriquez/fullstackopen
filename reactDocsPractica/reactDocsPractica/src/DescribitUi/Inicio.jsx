
// export default function Inicio() {

//     const person = {
//         name: 'Gregorio Y. Zara',
//         theme: {
//             backgroundColor: 'black',
//             color: 'pink'
//         }
//     };

//     return (
//         <div style={person.theme}>
//             <h1>tareas de : {person.name}</h1>

//             <img
//                 className="avatar"
//                 src="https://i.imgur.com/MK3eW3As.jpg"
//                 alt="Gregorio Y. Zara"
//             />

//             <ul>
//                 <li>Mejorar el videoteléfono</li>
//                 <li>Preparar clases de aeronáutica</li>
//                 <li>Trabajar en el motor de alcohol</li>
//             </ul>
//         </div>
//     )
// // }
// import { getImageUrl } from './utils.js'

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }


// function Item({ name, idioma }) {
//     return (
//         <li className="item">
//             {name} {idioma && '✔'}
//         </li>
//     )
// }


// export default function Profile() {
//     return (
//         <section>
//             <h1>Lista de equipaje de Sally Ride</h1>
//             <ul>
//                 <Item
//                     idioma={true}
//                     name="Javascript"
//                 />

//                 <Item
//                     idioma={false}
//                     name="c"
//                 />

//                 <Item
//                     idioma={true}
//                     name="java"
//                 />

//             </ul>
//         </section>
//     )
// }


import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function Inicio() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}