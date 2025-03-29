'use client'
import "./page.css"
import React from 'react'

const defaultState = {
    "option1": false,
    "option2": false,
    "option3": false,
    "option4": false,
    "option5": false,
    "option6": false,
}


export default function Page() {
    const [checkbox1, setcheckbox1] = React.useState(defaultState)
    const [checkbox2, setcheckbox2] = React.useState(defaultState)
    const [checkbox3, setcheckbox3] = React.useState(defaultState)
    const [checkbox4, setcheckbox4] = React.useState(defaultState)
    const [checkbox5, setcheckbox5] = React.useState(defaultState)
    const [checkbox6, setcheckbox6] = React.useState(defaultState)
    const [checkbox7, setcheckbox7] = React.useState(defaultState)

    return (
        <>
            <section id='contactusp-sec1'>
                <h1 className='heading2'>
                    Обсудить проект
                </h1>
                <div id='contactusp-sec1-container'>
                    <div id='divider5'/>
                    <p id='contactusp-sec1-container-text'>
                        {'Заполните ключевые данные по вашему проекту, чтобы мы могли подготовить индивидуальное предложение с учетом всех особенностей вашего объекта.'}
                    </p>
                </div>
            </section>
            <form id='contactusp-sec2'>
                <div id='form1'>
                    <h2>Характеристика объекта</h2>
                    <div>
                        <h3>Функциональное назначение:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox1['option1']}
                                       onChange={() => setcheckbox1({...checkbox1, "option1": !checkbox1['option1']})}/>
                                завод
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox1['option2']}
                                       onChange={() => setcheckbox1({...checkbox1, "option2": !checkbox1['option2']})}/>
                                административное здание
                            </label>
                            <label>
                                <input type="checkbox" value="option3" checked={checkbox1['option3']}
                                       onChange={() => setcheckbox1({...checkbox1, "option3": !checkbox1['option3']})}/>
                                специальный объект
                            </label>
                            <label>
                                <input type="checkbox" value="option4" checked={checkbox1['option4']}
                                       onChange={() => setcheckbox1({...checkbox1, "option4": !checkbox1['option4']})}/>
                                прочее
                            </label>
                            {checkbox1['option4'] && <input type='text' placeholder='введите ваш вариант'/>}
                        </div>
                    </div>
                    <div>
                        <h3>Адрес объекта:</h3>
                        <input type='text'/>
                    </div>
                    <div>
                        <h3>Объект находится:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox2['option1']}
                                       onChange={() => setcheckbox2({...checkbox2, "option1": !checkbox2['option1']})}/>
                                в собственности
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox2['option2']}
                                       onChange={() => setcheckbox2({...checkbox2, "option2": !checkbox2['option2']})}/>
                                в аренде
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3>Объект:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox3['option1']}
                                       onChange={() => setcheckbox3({...checkbox3, "option1": !checkbox3['option1']})}/>
                                относится к группе компаний
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox3['option2']}
                                       onChange={() => setcheckbox3({...checkbox3, "option2": !checkbox3['option2']})}/>
                                является самостоятельным
                            </label>
                        </div>
                    </div>
                </div>

                <div id='form2'>
                    <h2>Потребность заказчика</h2>
                    <div>
                        <h3>Наименование запроса:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox4['option1']}
                                       onChange={() => setcheckbox4({...checkbox4, "option1": !checkbox4['option1']})}/>
                                система автоматической пожарной сигнализации и опевещения о пожаре
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox4['option2']}
                                       onChange={() => setcheckbox4({...checkbox4, "option2": !checkbox4['option2']})}/>
                                система контроля и управления доступом
                            </label>
                            <label>
                                <input type="checkbox" value="option3" checked={checkbox4['option3']}
                                       onChange={() => setcheckbox4({...checkbox4, "option3": !checkbox4['option3']})}/>
                                система охраны периметра
                            </label>
                            <label>
                                <input type="checkbox" value="option4" checked={checkbox4['option4']}
                                       onChange={() => setcheckbox4({...checkbox4, "option4": !checkbox4['option4']})}/>
                                система охранной сигнализации
                            </label>
                            <label>
                                <input type="checkbox" value="option5" checked={checkbox4['option5']}
                                       onChange={() => setcheckbox4({...checkbox4, "option5": !checkbox4['option5']})}/>
                                прочее
                            </label>
                            {checkbox4['option5'] && <input type='text' placeholder='введите ваш вариант'/>}
                        </div>
                    </div>
                    <div>
                        <h3>Основание для запроса:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox5['option1']}
                                       onChange={() => setcheckbox5({...checkbox5, "option1": !checkbox5['option1']})}/>
                                предписание надзорных органов
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox5['option2']}
                                       onChange={() => setcheckbox5({...checkbox5, "option2": !checkbox5['option2']})}/>
                                строительство нового объекта
                            </label>
                            <label>
                                <input type="checkbox" value="option3" checked={checkbox5['option3']}
                                       onChange={() => setcheckbox5({...checkbox5, "option3": !checkbox5['option3']})}/>
                                модернизация существующей системы
                            </label>
                            <label>
                                <input type="checkbox" value="option4" checked={checkbox5['option4']}
                                       onChange={() => setcheckbox5({...checkbox5, "option4": !checkbox5['option4']})}/>
                                прочее
                            </label>
                            {checkbox5['option4'] && <input type='text' placeholder='введите ваш вариант'/>}
                        </div>
                    </div>
                </div>

                <div id='form3'>
                    <h2>Ответ на запрос</h2>
                    <div>
                        <h3>Ожидаемый результат запроса:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox6['option1']}
                                       onChange={() => setcheckbox6({...checkbox6, "option1": !checkbox5['option1']})}/>
                                ориентировочная стоимость для формирования бюджета, оценка стоимости реализации
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox6['option2']}
                                       onChange={() => setcheckbox6({...checkbox6, "option2": !checkbox5['option2']})}/>
                                коммерческое предложение без детализации для формирования стоимости
                            </label>
                            <label>
                                <input type="checkbox" value="option3" checked={checkbox6['option3']}
                                       onChange={() => setcheckbox6({...checkbox6, "option3": !checkbox5['option3']})}/>
                                подробный расчет с составлением спецификации оборудования и материалов
                                и ведомости объемов работ
                            </label>
                            <label>
                                <input type="checkbox" value="option4" checked={checkbox6['option4']}
                                       onChange={() => setcheckbox6({...checkbox6, "option4": !checkbox5['option4']})}/>
                                прочее
                            </label>
                            {checkbox6['option4'] && <input type='text' placeholder='введите ваш вариант'/>}
                        </div>
                    </div>
                    <div>
                        <h3>Срок получения результата обработки запроса:</h3>
                        <input type='text'/>
                    </div>
                </div>
                <div id='form5'>
                    <h2>Контактная информация</h2>
                    <div>
                        <h3>Откуда вы узнали о компании:</h3>
                        <div>
                            <label>
                                <input type="checkbox" value="option1" checked={checkbox7['option1']}
                                       onChange={() => setcheckbox7({...checkbox7, "option1": !checkbox7['option1']})}/>
                                интернет
                            </label>
                            <label>
                                <input type="checkbox" value="option2" checked={checkbox7['option2']}
                                       onChange={() => setcheckbox7({...checkbox7, "option2": !checkbox7['option2']})}/>
                                рекомендации
                            </label>
                            <label>
                                <input type="checkbox" value="option3" checked={checkbox7['option3']}
                                       onChange={() => setcheckbox7({...checkbox7, "option3": !checkbox7['option3']})}/>
                                прочее
                            </label>
                            {checkbox7['option3'] && <input type='text' placeholder='введите ваш вариант'/>}
                        </div>
                    </div>
                    <div>
                        <h3>Наименование должности:</h3>
                        <input type='text' placeholder='введите название должности'/>
                    </div>
                    <div>
                        <h3>ФИО:</h3>
                        <input type='text' placeholder='введите ФИО'/>
                    </div>
                    <div>
                        <h3>E-mail:</h3>
                        <input type='text' placeholder='введите e-mail'/>
                    </div>
                    <div>
                        <h3>Контактный телефон:</h3>
                        <input type='text' placeholder='введите номер телефона'/>
                    </div>
                </div>
                <button className='send-btn text5'>отправить</button>
            </form>
        </>
    );
}
