import "./navbar.css"
import Link from "next/link";

export default function Navbar({location}) {
    return <nav>
        <div id='navbar-block'>
            <Link href={"/about"} className="text1"
                  style={location === "/about" ? {color: "red", whiteSpace: "nowrap"} : {whiteSpace: "nowrap"}}>
                о компании
            </Link>
            <Link href={"/services"} className="text1" style={location === "/services" ? {color: "red"} : {}}>
                услуги
            </Link>
            <Link href={"/cases"} className="text1" style={location === "/cases" ? {color: "red"} : {}}>
                проекты
            </Link>
            <Link href={"/licenses"} className="text1" style={location === "/licenses" ? {color: "red"} : {}}>
                лицензии
            </Link>
            <Link href={"/reviews"} className="text1" style={location === "/reviews" ? {color: "red"} : {}}>
                отзывы
            </Link>
            <Link href={"/contacts"} className="text1" style={location === "/contacts" ? {color: "red"} : {}}>
                контакты
            </Link>
        </div>
        <Link href={"/contactus"} className="text1" style={location === "/contactus" ? {color: "red"} : {}}>
            связаться
        </Link>
    </nav>
}