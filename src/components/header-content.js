import { Navbar } from "react-bootstrap";

const HeaderContent = (props) => {
  return (
    <>
      <Navbar className="justify-content-center" variant="dark" bg="dark">
        <Navbar.Brand href="#" className="pt-0">
          <h1 className="m-0 h2 font-weight-normal">Memory Game</h1>
        </Navbar.Brand>
      </Navbar>
      <Navbar
        className="justify-content-center p-0 mb-1"
        variant="secondary"
        bg="light"
      >
        <Navbar.Text className="mr-2">
          Your Score - <span className="text-primary">{props.score}</span>
        </Navbar.Text>
        <Navbar.Text className="ml-2">
          High Score - <span className="text-danger">{props.high_score}</span>
        </Navbar.Text>
      </Navbar>
    </>
  );
};

export default HeaderContent;
