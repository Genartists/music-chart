import styles from './Chart.module.css';
import { Button, Container } from "react-bootstrap";
import useSWR from "swr";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getToken } from "../GetToken";

const ACCESS_TOKEN = 'access_Token';

export const songFetcher = async (url) => {
    try {
        if (!sessionStorage.getItem(ACCESS_TOKEN)) {
            const { access_token } = await getToken();
            sessionStorage.setItem(ACCESS_TOKEN, access_token);
            console.log(access_token);
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) },
        });

        const jsonData = await response.json();
        console.log(jsonData)
        return jsonData;
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
};

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}

export const MusicChart = () => {
    const [isRedTheme, setIsRedTheme] = useState(false);

    const { data, isError, isLoading } = useSWR(
        'https://api.spotify.com/v1/playlists/6hc5u3TG6h8dbM7cJ7umPj',
        songFetcher,
        { fallbackData: {tracks: {items: []}} }
    );

    const toggleTheme = () => {
        setIsRedTheme((prevTheme) => !prevTheme);
    };

    if (isError) return <div>Error: Failed to load data</div>;
    if (isLoading) return <div>loading...</div>;
    console.log(data)
    return (
        <Container className={styles.container}>
            <div className={styles.chartHeadContainer}>
                <div className={styles.chartHeader}>
                    <div>
                        <h2>Top 50 Songs Global</h2>
                        <div className={styles.miniDate}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-calendar2-week" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </div>
                            <div>{getDate()}</div>
                        </div>
                    </div>
                    <div className={styles.switchHandler}>
                        <Button onClick={toggleTheme}>Change Theme</Button>
                    </div>
                </div>
                <ol>
                    <div>
                        {data?.tracks.items?.length > 0 ? (
                            data.tracks.items.map((chart, index) => (
                                <li
                                    key={chart.id}
                                    className={`${styles.flexChart} ${isRedTheme ? styles.redBackground : ''}`}
                                >
                                    <div className={styles.flexChartInner}>
                                        <div className={styles.chartNumber}>
                                            <span className={styles.text}>{index + 1}</span>
                                        </div>
                                        <div className={styles.chartImages}>
                                            <img src={chart.track.album.images[0]?.url} alt="" />
                                        </div>
                                        <div className={styles.artistSong}>
                                            <h3>{chart.track.name}</h3>
                                            <span>{chart.track.artists.map((artist) => artist.name).join(", ")}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <a href={chart.track.uri}>
                                            <Button className={styles.directBtn}>Let's Enjoy</Button>
                                        </a>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <div>No tracks available</div>
                        )}

                    </div>
                </ol>
            </div>
        </Container>
    );
};
