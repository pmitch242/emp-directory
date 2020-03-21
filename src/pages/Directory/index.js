import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import './style.css';
import EmpCard from '../../components/EmpCard';
import employees from '../../employees.json'


class Directory extends Component {
    state = {
        employees
    }
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        {this.state.employees.map(employee => (
                            <EmpCard
                                id={employee.id}
                                key={employee.id}
                                name={employee.name}
                                image={employee.image}
                                maturity={employee.maturity}
                                occupation={employee.occupation}
                                funninessLevel={employee.funninessLevel}
                            />
                        ))}

                    </Row>
                </Container>
            </div>
        )
    }
}
export default Directory;