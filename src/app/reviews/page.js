import Cart3 from "@/components/cart/3/cart3";
import Image from "next/image";
import review from "./review.png"
import "./page.css"

export default function Page() {
    return (
        <section id='reviewsp-sec'>
            <h1 className='fs3 m-b'>Отзывы</h1>
            <p className='fs5 i-m'>Доверие клиентов — лучшая оценка нашей работы. Узнайте, как наши комплексные решения
                помогли обеспечить
                безопасность и надежность на объектах различных компаний и предприятий.</p>
            <div id='reviewsp-reviews'>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <Image src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
            </div>
        </section>
    );
}
