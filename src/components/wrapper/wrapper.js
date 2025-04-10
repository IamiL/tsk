import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Wrapper({children, location}) {
    return <>
        <Header location={location}/>
        {children}
        <Footer/>
    </>
}