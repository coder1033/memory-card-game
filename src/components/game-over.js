import { Button, Modal, Row, Col } from "react-bootstrap";
const GameOver = (props) => {
  const onClick = () => {
    props.onRestart();
  };

  return (
    <Modal show={props.game_over} onHide={onClick} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You just clicked a card twice</p>
        <Row>
          <Col className="text-muted justify-content-left">
            Your Score - {props.your_score}
          </Col>
          <Col className="text-muted justify-content-right">
            High Score - {props.high_score}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClick}>
          Restart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameOver;
