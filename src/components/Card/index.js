import React from 'react'

const Card = ({character}) => {
    const {name, species, status, gender, image} = character;

    return ( 
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name}/>
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>
                    <span className={`status status-${status.toLowerCase()}`}></span>
                    {status}
                </p>
                <p>
                    {species}
                </p>
                <p>
                    <i className={`fas fa-${gender.toLowerCase()}`}></i>
                    {gender}
                </p>
            </div>
        </div>
    );
}

export default Card;