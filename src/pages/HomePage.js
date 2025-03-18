import Header from '../components/Header';
import TopHit from "../components/TopHits";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Artist from "../components/Artists";
import {Container} from "react-bootstrap";
const HomePage = () => {
    return (
        <div>
            <Header/>
            <main>
                <Container>
                    <div style={{marginBottom: "8rem"}}>
                        <TopHit/>
                    </div>
                    <div style={{marginBottom: "8rem"}}>
                        <Artist/>
                    </div>
                </Container>
            </main>
            <hr className="line"/>
            <Footer/>
            <Modal/>
        </div>
    )
}

export default HomePage;