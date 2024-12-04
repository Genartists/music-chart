import React from 'react';
import styles from './Artists.module.css';
import {Card, Col, Container, Row} from "react-bootstrap";
import drake from '../assets/Drake1.jpg'

const Artist = () => {
    return (
        <Container id="artists" className={styles.artistBg}>
            <h1>Artists 50</h1>
            <Row className={`${styles.artistsContainer} ${styles.block}`}>
                <Col>
                    <Card className={`p-4 ${styles.cardHover}`}>
                        <div className={styles.cardHead}>
                            <Card.Title style={{fontWeight: "900", fontSize: "36px", position: "relative"}}>1</Card.Title>
                            <Card.Img src={drake} style={{width: "100%"}}/>
                        </div>

                        <Card.Title className={styles.titleGlobal}>21 Savage</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>Atlanta rap royalty 21 Savage is a success story straight from the streets.
                            A two-time Grammy nominee, his verses are often based on traumas from his own
                            turbulent past, and it is in many people eyes this authenticity that allows
                            him to maintain his underground cred, while being a commercially successful artist.
                        </Card.Text>

                    </Card>
                </Col>
                <Col>
                    <Card className={`p-4 ${styles.cardHover}`}>
                        <div className={styles.cardHead}>
                            <Card.Title
                                style={{fontWeight: "900", fontSize: "36px", position: "relative"}}>2</Card.Title>
                            <Card.Img src={drake} style={{width: "100%"}}/>
                        </div>
                        <Card.Title style={{fontWeight: "900", fontSize: "30px"}}>Drake</Card.Title>
                        <Card.Text>Aubrey Drake Graham (born October 24, 1986), known mononymously as Drake,
                            is a Canadian rapper, singer and actor. An influential figure in popular music,
                            he has been credited with popularizing R&B sensibilities in hip hop artists.
                            Gaining recognition by starring as Jimmy Brooks in the CTV teen drama series
                            Degrassi.</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className={`p-4 ${styles.cardHover}`}>
                        <div className={styles.cardHead}>
                            <Card.Title
                                style={{fontWeight: "900", fontSize: "36px", position: "relative"}}>3</Card.Title>
                            <Card.Img src={drake} style={{width: "100%"}}/>
                        </div>
                        <Card.Title style={{fontWeight: "900", fontSize: "30px"}}>Post Malone</Card.Title>
                        <Card.Text>Austin Richard Post (born July 4, 1995),
                            known professionally as Post Malone, is an American rapper, singer, songwriter,
                            and record producer. Malone has gained distinction and acclaim for his blending of
                            various genres including hip hop, pop, R&B, and trap.
                            His stage name was derived from inputting his birth name into a rap name
                            generator.</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Artist;

