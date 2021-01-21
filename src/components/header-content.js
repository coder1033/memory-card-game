import Header from 'react-bootstrap/Header';

const HeaderContent = (props) => {

    return (
        <Header>
            <h1>Memory Game</h1>
            <h3>Your Score - {props.score}</h3>
            <h3>High Score - {props.high_score}</h3>
        </Header>
    )
};

export default HeaderContent;