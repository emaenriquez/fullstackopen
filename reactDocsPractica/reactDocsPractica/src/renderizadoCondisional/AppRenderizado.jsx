
function Item({ name, isPacked }) {
    return (
        <li className="item"> {isPacked ? ( <del> {name + ' ✔'} </del>) : ( name )} </li>
    );
}

export default function AppRenderizado() {
    return (
        <section>
            <h1>Lista de equipaje de Sally Ride</h1>

            <Item
                name={"c"}
                isPacked={true}
            ></Item>

            <Item
                name={"c#"}
                isPacked={false}
            ></Item>

            <Item
                name={"Javascript"}
                isPacked={true}
            ></Item>
        </section>
    )
}