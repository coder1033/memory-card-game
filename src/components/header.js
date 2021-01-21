const Header = (props) => {

    return (
        <header>
            <h1>Memory Game</h1>
            <h3>Your Score - {props.score}</h3>
            <h3>High Score - {props.high_score}</h3>
        </header>
    )
};

export default Header;