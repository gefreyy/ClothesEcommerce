import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import HomeBody from "../components/home-component/HomeBody.jsx";

export default function Home() {
    return(
        <main>
            <Header />
            <HomeBody/>
            <Footer />
        </main>
    )
}