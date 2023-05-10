import React from "react";
import './Card.css';

const Card = ({ url, title, description, onBuyClick }) => {
    function handleClick(){
        onBuyClick();
    }
    return (
        <>
        <div className="card">
            <img src={url} alt={title} />
            <div className="card-body"> 
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <button onClick={handleClick} className="btn btn-primary" id="button">
                Comprar
            </button>
           
        </div>
        </>
    )
}

export default Card;