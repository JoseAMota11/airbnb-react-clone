import React from "react";
import star from "../Images/star.svg";

export default function Card(props){
    const {img, openSpots, rating, reviewCount, location, title, price} = props;
    
    let spotText;
    if(openSpots === 0){
        spotText = "SOLD OUT";
    } else if(location === "Online"){
        spotText = "ONLINE";
    }

    return (
        <section>
            <div className="card">
                <div className="imagen">
                    <img src={img} alt="A random person" className="card__person"/>
                    { spotText && <div className="upside__button">{spotText}</div> }
                </div>
                <div className="card__info">
                    <img src={star} alt="" />
                    <span>{rating}</span>
                    <span>{reviewCount}</span>
                    <span>·</span>
                    <span>{location}</span>
                </div>
                <p className="para__card">{title}</p>
                <p className="para__card"><strong>{price}</strong> / person</p>
            </div>
        </section>
    );
}