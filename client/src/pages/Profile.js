import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {

}

export default function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CorgiFan21</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Ashley Johnson</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Dallas, TX</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>test</Col>
        </Row>
      </Container>
    </div>
  );
}