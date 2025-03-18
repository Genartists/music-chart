import React from 'react';
import styles from './Artists.module.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import useSWR from "swr";
import {fetcher} from "../GetToken";
import {Link} from "react-router";
const id = ["2YZyLoL8N0Wb9xBt1NhZWg,1Xyo4u8uXC1ZmMpatF05PJ,1vCWHaC5f2uS3yhpwWbIA6,6qqNVTkY8uBg9cP3Jd7DAH"]

const Artist = () => {
    const {data, isError, isLoading} = useSWR(`https://api.spotify.com/v1/artists/?ids=${id}`, fetcher, {fallbackData: []});
    if (isError) return <div>Error: Failed to load data</div>;
    if (isLoading) return <div>loading...</div>;
    return (
        <Container id="artists" className={styles.artistBg}>
            <h1><Link to="/chart">Artists 50</Link></h1>
            <Row className={`${styles.artistsContainer} ${styles.block}`}>
                {data.map((artist, index) => (
                    <Col>
                        <Card className={`p-4 ${styles.cardHover}`}>
                            <div className={styles.cardHead}>
                                <Card.Title
                                style={{fontWeight: "900", fontSize: "36px", position: "relative"}}></Card.Title>
                                <Card.Img src={artist.images[0]?.url} style={{width: "100%"}}/>
                            </div>
                            <h2 className={styles.titleGlobal}>{artist.name}</h2>
                            <p style={{textTransform: "capitalize"}} >Popularity: {artist.popularity}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Artist;
