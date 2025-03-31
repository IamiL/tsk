import Link from "next/link";

export default function Cart5({id, heading, value, link}) {
    return <div id={id}>
        <h3 className='fs5 mfs4 i-m'>{heading}</h3>
        <p className='fs8 mfs7 i-m'>{value}</p>
        <Link id='cart5-link' className='mfs6 i-m' href={link}>→Подробнее</Link>
    </div>
}