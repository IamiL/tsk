import "./navbar.css"
import Link from "next/link";

export default function Navbar({location}) {
    return <nav id='desktop-nav'>
        <div id='navbar-block'>
            <Link href={"/about"} className="fs8 i-b"
                  style={location === "/about" ? {color: "red", whiteSpace: "nowrap"} : {whiteSpace: "nowrap"}}>
                о компании
            </Link>
            <Link href={"/services"} className="fs8 i-b" style={location === "/services" ? {color: "red"} : {}}>
                услуги
            </Link>
            <Link href={"/cases"} className="fs8 i-b" style={location === "/cases" ? {color: "red"} : {}}>
                проекты
            </Link>
            <Link href={"/licenses"} className="fs8 i-b" style={location === "/licenses" ? {color: "red"} : {}}>
                лицензии
            </Link>
            <Link href={"/reviews"} className="fs8 i-b" style={location === "/reviews" ? {color: "red"} : {}}>
                отзывы
            </Link>
            <Link href={"/contacts"} className="fs8 i-b" style={location === "/contacts" ? {color: "red"} : {}}>
                контакты
            </Link>
        </div>
        <Link href={"/contactus"} className="fs8 i-b" style={location === "/contactus" ? {color: "red"} : {}}>
            связаться
        </Link>
    </nav>
}