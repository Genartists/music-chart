import Footer from "../components/Footer";
import Modal from "../components/Modal";
import HeaderArtist from "../components/HeaderArtists";
import {MusicChart} from "../components/Chart";

const HomePage = () => {
    return(
        <div>
            <HeaderArtist/>
            <main>
                <MusicChart/>
            </main>
            <Footer/>
            <Modal/>
        </div>
    )
}

export default HomePage;