const IndividualCard = (props) => {
    const onClick = () => {
        props.onClickCard(props.id);
    }
    return (
        <div>
            <img src={props.src} alt="..." onClick={onClick}/>
        </div>
    )
};

export default IndividualCard;