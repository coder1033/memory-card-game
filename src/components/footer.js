import { Navbar, OverlayTrigger, Popover } from "react-bootstrap";
import { AiFillGithub, AiOutlineQuestionCircle } from "react-icons/ai";

const about_game = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">About Game</Popover.Title>
    <Popover.Content>
      It's simple, you click a card twice game ends.
    </Popover.Content>
  </Popover>
);

const Footer = () => {
  return (
    <Navbar
      className="fixed-bottom justify-content-center p-0"
      variant="light"
      bg="light"
    >
      <Navbar.Text className="mr-2">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/coder1033/memory-card-game"
        >
          <AiFillGithub />
        </a>
      </Navbar.Text>
      <Navbar.Text className="ml-2">
        <OverlayTrigger trigger="click" placement="top" overlay={about_game}>
          <AiOutlineQuestionCircle color="black" cursor="pointer" />
        </OverlayTrigger>
      </Navbar.Text>
    </Navbar>
  );
};

export default Footer;
