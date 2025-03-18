import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../assets/Drake1.jpg"



const HeaderArtist = () => {
    return (
        <header>
            <div className={styles.containerHeroChart}>
                <div id="top"></div>
                <div className={styles.heroHead}>
                    <h2 style={{fontSize: "50px"}}><Link to="/" style={{color: "white", textShadow: "-10px 5px black"}}>Sporticloud</Link></h2>
                    <nav>
                        <ul className={styles.navMenu}>
                            <li className={`${styles.child}`}><Link to="/" style={{backgroundColor: "white", color: "black"}} className={`${styles.navLink}`}>Home</Link>
                            </li>
                            <li className={`${styles.child}`}><Link to="/artists" style={{backgroundColor: "white", color: "black"}}
                                                                    className={`${styles.navLink}`}>Charts</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.heroChart}>
                    <h1>"Worldwide Vibes, One Chart – Find Your Next Favorite Hit!"
                    </h1>
                    <h5>Current most popular songs</h5>
                    <div className={styles.heroStat}>
                        <div className={styles.heroImgContainer}>
                            <img src={"https://i.scdn.co/image/ab67616d0000b27382ea2e9e1858aa012c57cd45"} alt="Top current song"/>
                            <div className={styles.heroStat}>
                                <p>sp</p>
                                <p>toronto, ontario</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </header>
    );
}

export default HeaderArtist;

