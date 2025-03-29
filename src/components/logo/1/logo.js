import logo1 from './logo1.png';
import Image from "next/image";

export default function Logo1({id}) {
    return <Image src={logo1} alt="Logo" style={{width: "100%"}} id={id}/>
}