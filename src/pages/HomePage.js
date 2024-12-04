import Header from '../components/Header';
import TopHit from "../components/TopHits";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <main>
                <TopHit/>
            </main>
            <hr className="line"/>
            <Footer/>
            <Modal/>
        </div>
    )
}

export default HomePage;