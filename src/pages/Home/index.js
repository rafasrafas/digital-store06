import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import productsHigh from "../../components/Productshigh";

export default function Home() {
    return (
        <div>
            <Header/>
            <Menu active="home"/>
            <productsHigh/>
            <Banner/>
        </div>
    );
}
