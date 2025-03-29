import "./cart2.css"

export default function Cart2({children, heading}) {
    return <div className="cart2">
        <p className='heading3'>{heading}</p>
        <div className="cart2-children">
            {children}
        </div>
    </div>
}