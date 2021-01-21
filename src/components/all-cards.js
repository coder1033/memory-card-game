import IndividualCard from "./individual-card.js";

const AllCards = (props) => {
    return (
        <div>
            {props.cards.map((id) => <IndividualCard id={id} src={props.cards_url[id]} onClickCard={props.onClickCard} key={id}/>)}
        </div>
    )
};

export default AllCards;