import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Artists from "../components/Artists";
import HeaderArtist from "../components/HeaderArtists";

const HomePage = () => {
    return(
        <div>
            <HeaderArtist/>
            <main>
                <Artists/>
            </main>
            <Footer/>
            <Modal/>
        </div>
    )
}

export default HomePage;