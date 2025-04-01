'use client';

import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Cart2 from "@/components/cart/2/cart2";
import Image from "next/image";
import license1 from "@/images/licenses/license1.png";
import toleranceSRO1 from "@/images/licenses/toleranceSRO1.png";
import tolerancechelrop1 from "@/images/licenses/toleranceChelROP1.png";
import "./licensesMobile.css";

export default function LicensesSlider() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '1px',
        swipeToSlide: true,
        prevArrow: <></>,
        nextArrow: <></>
    };

    return (
        isMobile && <div id='mainp-sec5-licenses-mobile'>
            <Slider {...settings}>
                <Cart2 heading={"Лицензия на монтаж и обслуживание систем пожарной безопасности"}>
                    <Image src={license1} alt={"license"} className='mainp-sec5-licenses-img'/>
                </Cart2>
                <Cart2 heading={"Допуски СРО"}>
                    <Image src={toleranceSRO1} alt={"license"} className='mainp-sec5-licenses-img'/>
                </Cart2>
                <Cart2 heading={"Допуски ЧелРОП"}>
                    <Image src={tolerancechelrop1} alt={"license"} className='mainp-sec5-licenses-img'/>
                </Cart2>
            </Slider>
        </div>
    );
}