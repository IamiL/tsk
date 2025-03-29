import Link from "next/link";

export default function Cart4({heading, value, link, mainClassName}) {
    return <div className={mainClassName}>
        <h2 className='heading3'>{heading}</h2>
        <p className='text3'>{value}</p>
        <Link href={link} className='text7'>→Подробнее</Link>
    </div>
}