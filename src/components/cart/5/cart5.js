import Link from "next/link";
import "./cart5.css"

export default function Cart5({id, heading, value, link}) {
    return <div id={id}>
        <h3 className='fs5 mfs4 i-m'>{heading}</h3>
        <p className='fs8 mfs7 i-m'>{value}</p>
        <Link className='mfs6 i-m cart5-link' href={link}>→Подробнее</Link>
    </div>
}