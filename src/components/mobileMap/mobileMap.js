"use client";

import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart6 from "@/components/cart/6/cart6";
import CaseUral from "@/app/cases/CaseUral.png"
import "./mobileMap.css"
import Image from "next/image";
import map from "@/components/map/map.png";
import PointCart from "@/components/point/cart/cart";

const cards = [
    {title: 'Card 1', content: 'This is the content of card 1.'},
    {title: 'Card 2', content: 'This is the content of card 2.'},
    {title: 'Card 3', content: 'This is the content of card 3.'},
    {title: 'Card 4', content: 'This is the content of card 4.'},
];

export default function MobileMap() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '1px',
        swipeToSlide: true,
        beforeChange: (current, next) => {
            setActiveCardIndex(next);
        }
    };

    return (
        <>
            <div>
                <Image id='map' src={map} alt="Map" width={400} height={200}/>
                <PointCart id={'point1'}/>
                <PointCart id={'point2'}/>
                <PointCart id={'point3'}/>
                <PointCart id={'point4'}/>
                <PointCart id={'point5'}/>
                <PointCart id={'point6'}/>
                <PointCart id={'point7'}/>
                <PointCart id={'point8'}/>
            </div>

            <Slider {...settings}>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                    <img src={CaseUral} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                    <img src={CaseUral} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                    <img src={CaseUral} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                    <img src={CaseUral} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                    <img src={CaseUral} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                    <img src={CaseUral} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного назначения и установку оборудования для обеспечения надежной и бесперебойной работы инфраструктуры'}
                       link={'/ural'}>
                </Cart6>
            </Slider>
            <div>
                Current card: {activeCardIndex + 1}
            </div>
        </>
    );
}