import './cart6.css'
import Link from "next/link";

export default function Cart6({children, heading, value, link}) {
    return <div className='cart6 main-grid'>
        <h3 className='fs5 i-m cart6-heading'>{heading}</h3>
        <div className='cart6-value'>
            <p className='fs8 i-m'>{value}</p>
            <Link href={link} className='fs8 i-b'>→Подробнее</Link>
        </div>
        <div className='cart6-img'>
            {children}
        </div>
    </div>
}