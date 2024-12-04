import React from 'react';
import styles from './TopHit.module.css';
import {PlayIcon} from 'lucide-react';
import alot from '../assets/alot.jpg'
import drake from '../assets/Drake1.jpg'
import good from '../assets/good.png'
import lord from '../assets/lord.jpg'
import {Container, Card, Row, CardImg} from "react-bootstrap";

// This is just the template design, we will change into data by API calling later
const songs = [
    { id: 'DmWWqogr_r8', title: 'A lot', artist: '21 Savage ft. J.cole', image: alot },
    { id: 'AwqyNGByUS0', title: 'More Life', artist: 'Drake', image: drake },
    { id: 'Wisthc226SU', title: 'Goodbyes', artist: 'Post Malone ft. Juice Wrld', image: good },
    { id: 'Kbj2Zss-5GY', title: 'Praise The Lord', artist: 'A$AP Rocky ft. Skepta', image: lord },
];

const TopHit = () => {
    // const openModal = (key) => {
    //     const modal = document.getElementById('media-model');
    //     const iframe = document.querySelector('.jw-modal iframe');
    //     if (modal && iframe) {
    //         modal.classList.add('open');
    //         iframe.src = `https://www.youtube.com/embed/${key}`;
    //         document.body.classList.add('jw-modal-open');
    //     }
    // };

    return (
        <Container id="top-hit" className={styles.hitBg}>
            <h1>Hot 50</h1>
            <Container className={`${styles.cardContainer} ${styles.block}`}>
                {songs.map((song) => (
                    <Card key={song.id} className={`${styles.card} ${styles.eventClick} ${styles.con}`}>
                        <div style={{ position: 'relative', display: 'flex' }}>
                            <Card.Img src={song.image} alt="Album Cover" />
                            <div className={styles.overlayContainer}>
                                <div className={styles.overlay}></div>
                                <PlayIcon className={styles.playBtn} size={72} />
                            </div>
                        </div>
                        <h2>{song.title}</h2>
                        <p>{song.artist}</p>
                    </Card>
                ))}
            </Container>
        </Container>
    );
}

export default TopHit;

