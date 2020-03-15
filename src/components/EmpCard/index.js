import React from 'react';
import './style.css';
import { Card, Col } from 'react-bootstrap'

function EmpCard(props) {
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="{props.image}" />
                    <Card.Body>
                        <ul>
                            <li>
                                <strong>Name:</strong> {props.name}
                            </li>
                            <li>
                                <strong>Occupation:</strong> {props.occupation}
                            </li>
                            <li>
                                <strong>Location:</strong> {props.location}
                            </li>
                            <li>
                                <strong>Funny Rate:</strong> {props.funninessLevel}
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default EmpCard;