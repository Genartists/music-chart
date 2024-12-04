import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.heroMain}>
            <div className={styles.heroFlex}>
                <div>
                    <h1>We Got Your Hits!</h1>
                    <p className={styles.textIntro}>
                        "Welcome to Sporticloud Charts"
                        <br/>
                        &zwj;
                        <br/>
                        Your ultimate hub for the hottest music trends and rankings.
                        Explore the top tracks, rising stars, and chart-breaking albums across
                        various genres. Stay updated with weekly rankings, discover new favorites,
                        and celebrate the artists shaping the music scene. Whether you're a die-hard
                        fan or a casual listener, Sporticloud Charts is your backstage pass to the
                        music world. Let’s climb the charts together!
                    </p>
                    <div>
                        <button className={styles.button}>
                            <a href="#top-hit" className={styles.introLink}>Hits of the world</a>
                        </button>
                    </div>
                </div>
                <div>
                    <i className={`bi bi-music-note ${styles.fillColor}`}></i>
                </div>
            </div>
        </div>
    );
}

export default Hero;

