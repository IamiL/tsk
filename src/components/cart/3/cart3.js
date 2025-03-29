import "./cart3.css"

export default function Cart3({children, heading, type}) {
    return <div className={type === 1 ? 'cart3t1' : 'cart3t2'}>
        {(type === 2) ? <div className='cart3t2-container'>
                <div className='cart3-divider'/>
                <p className='text3 cart3t2-container-text'>{heading}</p></div>
            : <p className='text3'>{heading}</p>
        }
        <div className={type === 1 ? 'cart3t1-children' : 'cart3t2-children'}>
            {children}
        </div>
    </div>
}