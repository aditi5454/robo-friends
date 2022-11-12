import React from "react";
import "./card.css"

const Card = (props) => {
    const {name,email,id}=props;
    return (
        <div className="grow  one_card">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;