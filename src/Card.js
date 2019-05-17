import React from 'react';
import {Link} from "react-router-dom"

function Card(props){
    return <div style={{display: "flex", padding: "10px"}}>
        <img width="200px" src='https://picsum.photos/id/120/200/200'  />
        <div>
            <h1>{props.login}</h1>
            <h4>{props.age}</h4>
            <h6>Цена за час {props.price_hour}</h6>
            <h6>Цена за ночь {props.price_night}</h6>
            <Link
                to={{pathname: "/item", id: props.id}}>
                Посмотреть больше
            </Link>
        </div>
        <br />
    </div>
}

export default Card;