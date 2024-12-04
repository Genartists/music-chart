import React from 'react';
import styles from './Genres.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container, Row, Col, Image} from 'react-bootstrap'

const Genres = () => {
    return (
        <Container id="genres">
            <h2>Music Genres</h2>
            <Row className={`${styles.genreContainer} ${styles.block}`}>
                <Col xs={6} md={4}>
                    <Card className={`p-4 ${styles.cardHover}`}>

                        <Card.Title style={{fontWeight: "900", fontSize: "30px"}}>Rock</Card.Title>
                        <Card.Text>Rock music is a broad genre of popular music that originated as "rock and roll"
                            in the United States in the late 1940s and early 1950s. It is characterized
                            by strong rhythms and prominent electric guitar riffs.</Card.Text>
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                    <Card className={`p-4 ${styles.cardHover}`}>
                        <Card.Title style={{fontWeight: "900", fontSize: "30px"}}>Pop</Card.Title>
                        <Card.Text>Pop music is a genre of popular music that originated in its modern form during
                            the mid-1950s in the United States and the United Kingdom. It is often
                            characterized by its catchy melodies and lyrics.</Card.Text>
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                    <Card className={`p-4 ${styles.cardHover}`}>
                        <Card.Title style={{fontWeight: "900", fontSize: "30px"}}>Hip Hop</Card.Title>
                        <Card.Text>Hip hop is a cultural movement that emerged from the Bronx in New York City in
                            the 1970s, primarily among African Americans and Latin Americans. The style is
                            characterized by rapping, beatboxing, DJing/scratching, breakdancing, and
                            graffiti writing. Hip hop music often tells a story or expresses thoughts on
                            cultural and societal issues, making it a powerful medium for conveying
                            messages.</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Genres;

