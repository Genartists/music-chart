import {Col, Container} from "react-bootstrap";
const NoPage = () => {
    return (
        <Container style={{ textAlign: "center"}}>
            <Col style={{ display: "block", padding: "20vh 0", fontSize: "36px"}}>
                <h1>404</h1>
                <p>No Page Found</p>
            </Col>
        </Container>
    );
};

export default NoPage;