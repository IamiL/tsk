import "./page.css"
import Wrapper from "@/components/wrapper/wrapper";
import Logo1 from "@/components/logo/1/logo";
import Cart1 from "@/components/cart/1/cart1";
import Map from "@/components/map/map";
import Cart2 from "@/components/cart/2/cart2";
import license1 from "@/images/licenses/license1.png"
import license2 from "@/images/licenses/license2.png"
import toleranceSRO1 from "@/images/licenses/toleranceSRO1.png"
import toleranceSRO2 from "@/images/licenses/toleranceSRO2.png"
import tolerancechelrop1 from "@/images/licenses/toleranceChelROP1.png"
import tolerancechelrop2 from "@/images/licenses/toleranceChelROP2.png"
import uralsibirelectrocompany from "@/images/reviews/UralSibirElectroCompany.png"
import chelyabconcertcompany from "@/images/reviews/ChelyabConcertCompany.png"
import cheltelecabel from "@/images/reviews/Cheltelecabel.png"
import Image from "next/image";
import Cart3 from "@/components/cart/3/cart3";
import Cart5 from "@/components/cart/5/cart5";

export default function Home() {
    return (
        <Wrapper location={"/"}>
            <main>
                <section className="main-grid" id="mainp-sec1">
                    <h1 className="heading1" id="mainp-sec1-h">системный<br/>
                        <span id="h1-2padding">интегратор</span><br/><span id="h1-3padding">крутойойо</span></h1>
                    <Logo1 id={"mainp-sec1-img"}/>
                </section>
                <section id="mainp-sec2">
                    <h2 className="heading2 mainp-heading2">о компании</h2>
                    <div id='mainp-sec2-text-container'>
                        <div id='divider1'/>
                        <p className='text2' id='mainp-sec2-text'>“ТелекомСервисКомплект” — ведущий российский<br/>
                            интегратор систем безопасности и охраны объектов </p>
                    </div>
                    <div id='mainp-sec2-carts'>
                        <Cart1 heading={"год основания компании"} value={"2006"} type={1}
                               mainClassName="mainp-sec2-carts-cart"/>
                        <Cart1 heading={"реализованных проектов"} value={"10.000+"} type={1}
                               mainClassName="mainp-sec2-carts-cart"/>
                        <Cart1 heading={"Регионов России"} value={"11"} type={1}
                               mainClassName="mainp-sec2-carts-cart"/>
                    </div>
                </section>
                <section id='mainp-sec3'>
                    <h2 className="heading2 mainp-heading2">услуги</h2>
                    <div className='main-grid' id='mainp-sec3-services'>
                        <p id='mainp-sec3-block1' className='text4'>Мы предлагаем комплексные решения для охраны
                            объектов и контроля
                            доступа. Проектируем,
                            устанавливаем и обслуживаем системы безопасности для вашего бизнеса. Вы получите надежную
                            защиту, которая обеспечит сохранность имущества и жизни людей.</p>
                        <Cart5 id={'mainp-sec3-block2'}
                               heading={'КИТСОЗ'}
                               value={'Проектируем и внедряем комплекс инженерно-технических средств охраны для обеспечения безопасности объектов и персонала.'}/>
                        <Cart5 id={'mainp-sec3-block3'}
                               heading={'Видеонаблюдение'}
                               value={'Устанавливаем системы видеонаблюдения для контроля производственных процессов и предотвращения несанкционированного доступа.'}/>
                        <Cart5 id={'mainp-sec3-block4'}
                               heading={'Охранно-пожарная сигнализация'}
                               value={'Проектируем системы охранно-пожарной сигнализации для своевременного обнаружения угроз и автоматического оповещения.'}/>
                        <Cart5 id={'mainp-sec3-block5'}
                               heading={'СКУД'}
                               value={'Внедряем системы контроля и управления доступом для обеспечения безопасности и контроля рабочих процессов на объектах.'}/>
                        <Cart5 id={'mainp-sec3-block6'}
                               heading={'Охрана периметра'}
                               value={'Предлагаем системы охраны периметра, которые обеспечивают защиту объекта в любых условиях, круглосуточно.'}/>
                        <Cart5 id={'mainp-sec3-block7'}
                               heading={'Структурированные кабельные сети'}
                               value={'Проектируем и устанавливаем СКС, обеспечивая надежную передачу данных и стабильную работу ИТ-инфраструктуры на долгие годы.'}/>
                    </div>
                </section>
                <section id='mainp-sec4'>
                    <h2 className="heading2 mainp-heading2">проекты</h2>
                    <Map/>
                </section>
                <section id='mainp-sec5'>
                    <h2 className="heading2 mainp-heading2">лицензии и допуски</h2>
                    <div id='mainp-sec5-licenses'>
                        <Cart2 heading={"Лицензия на монтаж и обслуживание систем пожарной безопасности"}>
                            <Image src={license1} alt={"license"} className='mainp-sec5-licenses-img'/>
                            <Image src={license2} alt={"license"} className='mainp-sec5-licenses-img'/>
                        </Cart2>
                        <Cart2 heading={"Допуски СРО"}>
                            <Image src={toleranceSRO1} alt={"license"} className='mainp-sec5-licenses-img'/>
                            <Image src={toleranceSRO2} alt={"license"} className='mainp-sec5-licenses-img'/>
                        </Cart2>
                        <Cart2 heading={"Допуски ЧелРОП"}>
                            <Image src={tolerancechelrop1} alt={"license"} className='mainp-sec5-licenses-img'/>
                            <Image src={tolerancechelrop2} alt={"license"} className='mainp-sec5-licenses-img'/>
                        </Cart2>
                    </div>
                    <button className='mainp-btn text5'>↓ скачать лицензии и допуски</button>
                </section>
                <section id='mainp-sec6'>
                    <h2 className="heading2 mainp-heading2">отзывы</h2>
                    <div id='mainp-sec6-reviews'>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Уральско-Сибирская электромонтажная компания\""}
                            type={1}>
                            <Image src={uralsibirelectrocompany}
                                   alt={"Благодарственное письмо от ООО \"Уральско-Сибирская электромонтажная компания\""}
                                   className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от Челябинского концертного объединения"}
                            type={1}>
                            <Image src={chelyabconcertcompany}
                                   alt={"Благодарственное письмо от Челябинского концертного объединения"}
                                   className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Челтелекабель\""}
                            type={1}>
                            <Image src={cheltelecabel}
                                   alt={"Благодарственное письмо от ООО \"Челтелекабель\""}
                                   className='mainp-sec6-reviews-img'/>
                        </Cart3>
                    </div>
                    <button className='mainp-btn text5'>↓ скачать портфолио</button>
                </section>
            </main>
        </Wrapper>
    );
}
