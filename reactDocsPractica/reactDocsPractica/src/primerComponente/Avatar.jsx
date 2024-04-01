
import { getImageUrl } from "./Utils";
export default function Avatar({person,size}) {
    return (
        <img
        
        className="Avartar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        
        ></img>
    )
}