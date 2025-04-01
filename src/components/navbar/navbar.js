import "./navbar.css"
import Link from "next/link";

export default function Navbar({location}) {
    return <nav id='desktop-nav'>
        <div id='navbar-block'>
            <Link href={"/about"} className={`fs8 i-b ${location === "/about" ? 'navbar-active-link' : ''}`}
                  style={location === "/about" ? {whiteSpace: "nowrap"} : {whiteSpace: "nowrap"}}>
                о компании
            </Link>
            <Link href={"/services"} className={`fs8 i-b ${location === "/services" ? 'navbar-active-link' : ''}`}>
                услуги
            </Link>
            <Link href={"/cases"} className={`fs8 i-b ${location === "/cases" ? 'navbar-active-link' : ''}`}>
                проекты
            </Link>
            <Link href={"/licenses"} className={`fs8 i-b ${location === "/licenses" ? 'navbar-active-link' : ''}`}>
                лицензии
            </Link>
            <Link href={"/reviews"} className={`fs8 i-b ${location === "/reviews" ? 'navbar-active-link' : ''}`}>
                отзывы
            </Link>
            <Link href={"/contacts"} className={`fs8 i-b ${location === "/contacts" ? 'navbar-active-link' : ''}`}>
                контакты
            </Link>
        </div>
        <Link href={"/contactus"} className='fs8 i-b' id='navbar-contactus'>
            связаться
        </Link>
    </nav>
}