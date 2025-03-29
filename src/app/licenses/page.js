import lic11 from "./license1_1.png"
import lic12 from "./license1_2.png"
import lic21 from "./license2_1.png"
import lic22 from "./license2_2.png"
import lic31 from "./license3_1.png"
import lic32 from "./license3_2.png"
import Image from "next/image";
import "./page.css"
import Cart7 from "@/components/cart/7/cart7";

export default function Page() {
    return (
        <section id='licensesp-sec'>
            <h1 className='fs3 m-b'>Лицензии и допуски</h1>
            <div id='licensesp-container1'>
                <button className='btn fs5 i-m up'>скачать лицензии и допуски</button>
            </div>
            <div>
                <div>
                    <Cart7 heading={'Лицензия на монтаж и обслуживание систем пожарной безопасности'}>
                        <div className="licensesp-img1">
                            <Image src={lic11} alt={"license"} className='licensesp-img'/>
                        </div>
                        <div className="licensesp-img2">
                            <Image src={lic12} alt={"license"} className='licensesp-img'/>
                        </div>
                    </Cart7>
                    <Cart7 heading={'Допуски СРО'}>
                        <div className="licensesp-img1">
                            <Image src={lic21} alt={"license"} className='licensesp-img'/>
                        </div>
                        <div className="licensesp-img2">
                            <Image src={lic22} alt={"license"} className='licensesp-img'/>
                        </div>
                    </Cart7>
                    <Cart7 heading={'Допуски ЧелРОП'}>
                        <div className="licensesp-img1">
                            <Image src={lic31} alt={"license"} className='licensesp-img'/>
                        </div>
                        <div className="licensesp-img2">
                            <Image src={lic32} alt={"license"} className='licensesp-img'/>
                        </div>
                    </Cart7>
                </div>
            </div>
        </section>
    );
}
