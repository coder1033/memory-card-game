const GameOver = (props) => {

    const onClick = () => {
        props.onRestart();
    }

    return (
        <div>
            <div>Game Over</div>
            <button onClick={onClick}>Restart</button>
        </div>
    )
};


export default GameOver;