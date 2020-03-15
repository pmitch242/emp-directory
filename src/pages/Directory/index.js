import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import './style.css';
import EmpCard from '../../components/EmpCard';
import employee from '../../employees.json'


class Directory extends Component {
    state ={
        employee
    }
    render(){ 
        return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <EmpCard 
                        id={employee[0].id}
                        key={employee[0].id}
                        name={employee[0].name}
                        image={employee[0].image}
                        occupation={employee[0].occupation}
                        location={employee[0].location}
                        funninessLevel={employee[0].funninessLevel}
                    />
                    <EmpCard />
                    <EmpCard />
                </Row>
            </Container>
        </div>
    )}
}
export default Directory;