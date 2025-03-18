import React from 'react';
import styles from './TopHit.module.css';
import {PlayIcon} from 'lucide-react';
import alot from '../assets/alot.jpg'
import drake from '../assets/Drake1.jpg'
import good from '../assets/good.png'
import lord from '../assets/lord.jpg'
import {Container, Card} from "react-bootstrap";
import {Link} from 'react-router';

const songs = [
    {id: 'DmWWqogr_r8', title: 'A lot', artist: '21 Savage ft. J.cole', image: alot},
    {id: 'AwqyNGByUS0', title: 'More Life', artist: 'Drake', image: drake},
    {id: 'Wisthc226SU', title: 'Goodbyes', artist: 'Post Malone ft. Juice Wrld', image: good},
    {id: 'Kbj2Zss-5GY', title: 'Praise The Lord', artist: 'A$AP Rocky ft. Skepta', image: lord},
];



const TopHit = () => {
    return (
        <Container id="top-hit" className={styles.hitBg}>
            <h1><Link to="/chart">Hot 50</Link></h1>
            <Container className={`${styles.cardContainer} ${styles.block}`}>
                {songs.map((song) => (
                    <Card key={song.id} className={`${styles.card} ${styles.eventClick} ${styles.con}`}>
                        <div style={{position: 'relative', display: 'flex'}}>
                            <Card.Img src={song.image} alt="Album Cover"/>
                            <div className={styles.overlayContainer}>
                                <div className={styles.overlay}></div>
                                <PlayIcon className={styles.playBtn} size={72}/>
                            </div>
                        </div>
                        <h2>{song.title}</h2>
                        <p style={{textTransform: "capitalize"}}>{song.artist}</p>
                    </Card>
                ))}
            </Container>
        </Container>
    );
}

export default TopHit;

