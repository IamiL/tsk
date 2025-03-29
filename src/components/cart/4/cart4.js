import Link from "next/link";

export default function Cart4({heading, value, link, mainClassName}) {
    return <div className={mainClassName}>
        <h2 className='fs5 i-m'>{heading}</h2>
        <p className='fs8 i-m'>{value}</p>
        <Link href={link} className='fs8 i-b'>→Подробнее</Link>
    </div>
}