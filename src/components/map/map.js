import "./map.css"
import map from "./map.png";
import Image from "next/image";

export default function Map() {
    return <div id='map-container'>
        <Image id='map' src={map} alt="Map" width={400} height={200}/>
    </div>
}