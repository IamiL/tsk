'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import "./carousel.css"


export default function Carousel({children}) {
    const settings = {
        dots: true, // Показывать точки навигации
        infinite: true, // Зациклить слайды
        speed: 500, // Скорость анимации
        slidesToShow: 4, // Количество показываемых элементов
        slidesToScroll: 1, // Количество прокручиваемых элементов за раз
        autoplay: true, // Автоматическая прокрутка
        autoplaySpeed: 2000, // Скорость автоматической прокрутки в миллисекундах
        arrows: false
    };

    return (
        <Slider {...settings}>
            {
                children
            }
        </Slider>
    );
}