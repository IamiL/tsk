import "./footer.css"

export default function Footer() {
    return <footer>
        <div id='footer' className='text3'>
            <address>
                <div className='footer-address-container'>
                    <h4 className='footer-h4'>Адрес:</h4><p>454048, г. Челябинск, ул. Доватора, 32 в, оф. 6</p>
                </div>
                <div className='footer-address-container'>
                    <h4 className='footer-h4'>Телефон:</h4><p>(351) 261-59-79</p>
                </div>
                <div className='footer-address-container'>
                    <h4 className='footer-h4'>Телефон/Факс:</h4><p>(351) 261-55-53</p>
                </div>
                <div className='footer-address-container'>
                    <h4 className='footer-h4'>E-mail:</h4><p>info@tsk74.ru</p>
                </div>
            </address>
            <a className='text5'>Политика конфиденциальности </a>
        </div>
    </footer>
}