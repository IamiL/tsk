'use client'
import "./page.css"
import React from 'react'

const defaultState = {
    "1": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    },
    "2": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    },
    "3": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    },
    "4": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    },
    "5": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    },
    "6": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    },
    "7": {
        "option1": false,
        "option2": false,
        "option3": false,
        "option4": false,
        "option5": false,
        "option6": false,
    }
}


export default function Page() {
    const [checkbox, setcheckbox] = React.useState(defaultState)

    return (
        <>
            <section id='contactusp-sec1'>
                <h1 className='fs3 m-b'>
                    Обсудить проект
                </h1>
                <div id='contactusp-sec1-container'>
                    <div className='divid' id='divid5'/>
                    <p className='fs5 i-m' id='contactusp-sec1-container-text'>
                        {'Заполните ключевые данные по вашему проекту, чтобы мы могли подготовить индивидуальное предложение с учетом всех особенностей вашего объекта.'}
                    </p>
                </div>
            </section>
            <form id='contactusp-sec2' className='fs5 i-m' onScroll={(event) => {
                event.preventDefault()
            }}>
                <div className='border-top form-sec' id='form1'>
                    <h2 className='fs4 i-m contactusp-header1'>Характеристика объекта</h2>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Функциональное назначение:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='1-1' type="checkbox" value="option1"
                                       checked={checkbox['1']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "1": {...checkbox['1'], "option1": !checkbox['1']['option1']}
                                       })}/>
                                <label htmlFor='1-1' className='label'>
                                    <span/>
                                    завод
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='1-2' type="checkbox" value="option2"
                                       checked={checkbox['1']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "1": {...checkbox['1'], "option2": !checkbox['1']['option2']}
                                       })}/>
                                <label htmlFor='1-2' className='label'>
                                    <span/>
                                    административное здание
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='1-3' type="checkbox" value="option3"
                                       checked={checkbox['1']["option3"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "1": {...checkbox['1'], "option3": !checkbox['1']['option3']}
                                       })}/>
                                <label htmlFor='1-3' className='label'>
                                    <span/>
                                    специальный объект
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='1-4' type="checkbox" value="option4"
                                       checked={checkbox['1']["option4"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "1": {...checkbox['1'], "option4": !checkbox['1']['option4']}
                                       })}/>
                                <label htmlFor='1-4'>
                                    <span/>
                                    прочее
                                </label>
                            </li>

                            {checkbox['1']['option4'] &&
                                <input className='input input-end1 input-text fs5 i-r' type='text'
                                       placeholder='введите ваш вариант'/>}
                        </ul>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Адрес объекта:</h3>
                        <div className='main-grid cb-list'>
                            <input className='input input-end1 input-text fs5 i-r' type='text'/>
                        </div>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Объект находится:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='2-1' type="checkbox" value="option1"
                                       checked={checkbox['2']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "2": {...checkbox['2'], "option1": !checkbox['2']['option1']}
                                       })}/>
                                <label htmlFor='2-1'>
                                    <span/>
                                    в собственности
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='2-2' type="checkbox" value="option2"
                                       checked={checkbox['2']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "2": {...checkbox['2'], "option2": !checkbox['2']['option2']}
                                       })}/>
                                <label htmlFor='2-2' className='input input-end1'>
                                    <span/>
                                    в аренде
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Объект:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='3-1' type="checkbox" value="option1"
                                       checked={checkbox['3']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "3": {...checkbox['3'], "option1": !checkbox['3']['option1']}
                                       })}/>
                                <label htmlFor='3-1' className='input input-end1'>
                                    <span/>
                                    относится к группе компаний
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='3-2' type="checkbox" value="option2"
                                       checked={checkbox['3']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "3": {
                                               ...checkbox['3'],
                                               "option2": !checkbox['3']['option2']
                                           }
                                       })}/>
                                <label htmlFor='3-2' className='input input-end1'>
                                    <span/>
                                    является самостоятельным
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='border-top form-sec' id='form2'>
                    <h2 className='fs4 i-m'>Потребность заказчика</h2>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Наименование запроса:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='4-1' type="checkbox" value="option1"
                                       checked={checkbox['4']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "4": {...checkbox['4'], "option1": !checkbox['4']['option1']}
                                       })}/>
                                <label htmlFor='4-1' className='input input-end2'>
                                    <span/>
                                    система автоматической пожарной сигнализации и опевещения о пожаре
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='4-2' type="checkbox" value="option2"
                                       checked={checkbox['4']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "4": {...checkbox['4'], "option2": !checkbox['4']['option2']}
                                       })}/>
                                <label htmlFor='4-2' className='input input-end1'>
                                    <span/>
                                    система контроля и управления доступом
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='4-3' type="checkbox" value="option3"
                                       checked={checkbox['4']["option3"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "4": {...checkbox['4'], "option3": !checkbox['4']['option3']}
                                       })}/>
                                <label htmlFor='4-3' className='input input-end1'>
                                    <span/>
                                    система охраны периметра
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='4-4' type="checkbox" value="option4"
                                       checked={checkbox['4']["option4"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "4": {...checkbox['4'], "option4": !checkbox['4']['option4']}
                                       })}/>
                                <label htmlFor='4-4' className='input input-end1'>
                                    <span/>
                                    система охранной сигнализации
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='4-5' type="checkbox" value="option5"
                                       checked={checkbox['4']["option5"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "4": {...checkbox['4'], "option5": !checkbox['4']['option5']}
                                       })}/>
                                <label htmlFor='4-5' className='input input-end1'>
                                    <span/>
                                    прочее
                                </label>
                            </li>

                            {checkbox['4']['option5'] &&
                                <input className='input input-end1 input-text fs5 i-r' type='text'
                                       placeholder='введите ваш вариант'/>}
                        </ul>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Основание для запроса:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='5-1' type="checkbox" value="option1"
                                       checked={checkbox['5']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "5": {...checkbox['5'], "option1": !checkbox['5']['option1']}
                                       })}/>
                                <label htmlFor='5-1' className='input input-end1'>
                                    <span/>
                                    предписание надзорных органов
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='5-2' type="checkbox" value="option2"
                                       checked={checkbox['5']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "5": {...checkbox['5'], "option2": !checkbox['5']['option2']}
                                       })}/>
                                <label htmlFor='5-2' className='input input-end1'>
                                    <span/>
                                    строительство нового объекта
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='5-3' type="checkbox" value="option3"
                                       checked={checkbox['5']["option3"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "5": {...checkbox['5'], "option3": !checkbox['5']['option3']}
                                       })}/>
                                <label htmlFor='5-3' className='input input-end1'>
                                    <span/>
                                    модернизация существующей системы
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='5-4' type="checkbox" value="option4"
                                       checked={checkbox['5']["option4"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "5": {...checkbox['5'], "option4": !checkbox['5']['option4']}
                                       })}/>
                                <label htmlFor='5-4' className='input input-end1'>
                                    <span/>
                                    прочее
                                </label>
                            </li>
                            {checkbox['5']['option4'] &&
                                <input className='input input-end1 input-text fs5 i-r' type='text'
                                       placeholder='введите ваш вариант'/>}
                        </ul>
                    </div>
                </div>

                <div className='border-top form-sec' id='form3'>
                    <h2 className='fs4 i-m'>Ответ на запрос</h2>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Ожидаемый результат запроса:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='6-1' type="checkbox" value="option1"
                                       checked={checkbox['6']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "6": {...checkbox['6'], "option1": !checkbox['6']['option1']}
                                       })}/>
                                <label htmlFor='6-1' className='input input-end1'>
                                    <span/>
                                    ориентировочная стоимость для формирования бюджета, оценка стоимости реализации
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='6-2' type="checkbox" value="option2"
                                       checked={checkbox['6']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "6": {...checkbox['6'], "option2": !checkbox['6']['option2']}
                                       })}/>
                                <label htmlFor='6-2' className='input input-end1'>
                                    <span/>
                                    коммерческое предложение без детализации для формирования стоимости
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='6-3' type="checkbox" value="option3"
                                       checked={checkbox['6']["option3"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "6": {...checkbox['6'], "option3": !checkbox['6']['option3']}
                                       })}/>
                                <label htmlFor='6-3' className='input input-end1'>
                                    <span/>
                                    подробный расчет с составлением спецификации оборудования и материалов
                                    и ведомости объемов работ
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='6-4' type="checkbox" value="option4"
                                       checked={checkbox['6']["option4"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "6": {...checkbox['6'], "option4": !checkbox['6']['option4']}
                                       })}/>
                                <label htmlFor='6-4' className='input input-end1'>
                                    <span/>
                                    прочее
                                </label>
                            </li>
                            {checkbox['6']['option4'] &&
                                <input className='input input-end1 input-text fs5 i-r' type='text'
                                       placeholder='введите ваш вариант'/>}
                        </ul>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Срок получения результата обработки запроса:</h3>
                        <div className='main-grid cb-list'>
                            <input className='input input-end1 input-text fs5 i-r' type='text'/>
                        </div>
                    </div>
                </div>
                <div className='border-top form-sec' id='form5'>
                    <h2 className='fs4 i-m'>Контактная информация</h2>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Откуда вы узнали о компании:</h3>
                        <ul className='main-grid cb-list'>
                            <li className='input input-end1'>
                                <input className='cb' id='7-1' type="checkbox" value="option1"
                                       checked={checkbox['7']["option1"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "7": {...checkbox['7'], "option1": !checkbox['7']['option1']}
                                       })}/>
                                <label htmlFor='7-1' className='input input-end1'>
                                    <span/>
                                    интернет
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='7-2' type="checkbox" value="option2"
                                       checked={checkbox['7']["option2"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "7": {...checkbox['7'], "option2": !checkbox['7']['option2']}
                                       })}/>
                                <label htmlFor='7-2' className='input input-end1'>
                                    <span/>
                                    рекомендации
                                </label>
                            </li>

                            <li className='input input-end1'>
                                <input className='cb' id='7-3' type="checkbox" value="option3"
                                       checked={checkbox['7']["option3"]}
                                       onChange={() => setcheckbox({
                                           ...checkbox,
                                           "7": {...checkbox['7'], "option3": !checkbox['7']['option3']}
                                       })}/>
                                <label htmlFor='7-3' className='input input-end1'>
                                    <span/>
                                    прочее
                                </label>
                            </li>
                            {checkbox['7']['option3'] &&
                                <input className='input input-end1 input-text fs5 i-r' type='text'
                                       placeholder='введите ваш вариант'/>}
                        </ul>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Наименование должности:</h3>
                        <div className='main-grid'>
                            <input className='input input-end1 input-text fs5 i-r' type='text'
                                   placeholder='введите название должности'/>
                        </div>
                    </div>
                    <div>
                        <h3 className='fs5 i-m'>ФИО:</h3>
                        <div className='main-grid'>
                            <input className='input input-end1 input-text fs5 i-r' type='text'
                                   placeholder='введите ФИО'/>
                        </div>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>E-mail:</h3>
                        <div className='main-grid'>
                            <input className='input input-end1 input-text fs5 i-r' type='text'
                                   placeholder='введите e-mail'/>
                        </div>
                    </div>
                    <div className='contactusp-block1'>
                        <h3 className='fs5 i-m'>Контактный телефон:</h3>
                        <div className='main-grid'>
                            <input className='input input-end1 input-text fs5 i-r' type='text'
                                   placeholder='введите номер телефона'/>
                        </div>
                    </div>
                </div>
                <button className='btn fs5 i-m up'>отправить</button>
            </form>
        </>
    );
}
