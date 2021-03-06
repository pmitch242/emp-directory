import React from 'react';
import './style.css';

function EmpCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Maturity Level:</strong> {props.maturity}
                    </li>
                    <li>
                        <strong>Funny Rate:</strong> {props.funninessLevel}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmpCard;