'use client';
import Point from "@/components/point/point";
import Image from "next/image";
import CaseUral from "@/app/cases/CaseUral.png";
import Link from "next/link";
import "./cart.css"
import React from "react"

export default function PointCart({id}) {
    const [onDisplay, setOnDisplay] = React.useState(false);

    return <div className='point' id={id}>
        <Point className={'point-icon'} onClick={() => setOnDisplay(!onDisplay)}/>
        {onDisplay && <div className='point-info'>
            <div className='point-info-top'>
                <h3 className='point-info-heading fs9 i-m'>КИТСОЗ</h3>
                <div className='point-info-close fs10 i-m'>крест</div>
            </div>
            <div className='point-info-img'>
                <Image src={CaseUral} alt={'caseUral'}/>
            </div>
            <div className='point-info-info fs10 i-r'>
                Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для
                объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...
            </div>
            <div className='point-info-link fs10 i-b'>
                <Link href={'/'}>→Подробнее</Link>
            </div>
        </div>}
    </div>
}