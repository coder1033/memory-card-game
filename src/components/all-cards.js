import { Image, Row, Col, Container } from "react-bootstrap";
import "./all-cards.css";

const AllCards = (props) => {
  let cards = props.cards;
  let cards_url = props.cards_url;
  let att = {
    style: { cursor: "pointer" },
    className: "img-thumbnail",
    width: "200",
  };
  const onClick = (id) => {
    props.onClickCard(id);
  };
  return (
    <Container className="w-100">
      <Row className="row-spacing no-gutters">
        <Col>
          <Image
            {...att}
            src={cards_url[cards[0]]}
            alt="..."
            onClick={() => onClick(cards[0])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[1]]}
            alt="..."
            onClick={() => onClick(cards[1])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[2]]}
            alt="..."
            onClick={() => onClick(cards[2])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[3]]}
            alt="..."
            onClick={() => onClick(cards[3])}
          />
        </Col>
      </Row>
      <Row className="row-spacing no-gutters">
        <Col>
          <Image
            {...att}
            src={cards_url[cards[4]]}
            alt="..."
            onClick={() => onClick(cards[4])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[5]]}
            alt="..."
            onClick={() => onClick(cards[5])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[6]]}
            alt="..."
            onClick={() => onClick(cards[6])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[7]]}
            alt="..."
            onClick={() => onClick(cards[7])}
          />
        </Col>
      </Row>
      <Row className="row-spacing no-gutters">
        <Col>
          <Image
            {...att}
            src={cards_url[cards[8]]}
            alt="..."
            onClick={() => onClick(cards[8])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[9]]}
            alt="..."
            onClick={() => onClick(cards[9])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[10]]}
            alt="..."
            onClick={() => onClick(cards[10])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[11]]}
            alt="..."
            onClick={() => onClick(cards[11])}
          />
        </Col>
      </Row>
      <Row className="row-spacing no-gutters">
        <Col>
          <Image
            {...att}
            src={cards_url[cards[12]]}
            alt="..."
            onClick={() => onClick(cards[12])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[13]]}
            alt="..."
            onClick={() => onClick(cards[13])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[14]]}
            alt="..."
            onClick={() => onClick(cards[14])}
          />
        </Col>
        <Col>
          <Image
            {...att}
            src={cards_url[cards[15]]}
            alt="..."
            onClick={() => onClick(cards[15])}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllCards;
