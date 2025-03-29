import "./cart7.css"

export default function Cart7({children, heading}) {
    return <div className='main-grid cart7'>
        <h3 className='heading3 cart7-heading'>{heading}</h3>
        {children}
    </div>
}