import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import './style.css';
import EmpCard from '../../components/EmpCard';
import employees from '../../employees.json'
import Button from 'react-bootstrap/Button'



class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees,
            filterEmp: employees
        };
    }

    handleClick = async event => {
        if (event.target.innerText === 'All') {
            await this.setState({
                filterEmp: employees
            });
        } else {
            let empCopy = employees.filter(employee => {
                return employee.maturity === event.target.innerText
            });

            await this.setState({
                filterEmp: empCopy
            })
        }
    };

    handleSort = async event => {
        let sortedArray = this.state.filterEmp
        console.log(sortedArray)
        console.log(event.target.innerText)
        if (event.target.innerText === 'Ascending') {
            sortedArray.sort((a, b) => { return a.funninessLevel - b.funninessLevel });
            console.log(sortedArray);
            await this.setState({
                filterEmp: sortedArray
            });
        } else if (event.target.innerText === 'Descending') {
            sortedArray.sort((a, b) => { return b.funninessLevel - a.funninessLevel });
            await this.setState({
                filterEmp: sortedArray
            });
        } else {
            sortedArray.sort((a, b) => { return a.id - b.id });
            await this.setState({
                filterEmp: sortedArray
            });
        }
    }

    render() {
        return (
            <div>
                <h5>Filter:</h5>
                <Button onClick={this.handleClick} variant="danger">All</Button>{' '}
                <Button onClick={this.handleClick} variant="danger">Adult</Button>{' '}
                <Button onClick={this.handleClick} variant="danger">Child</Button>{' '}
                <Button onClick={this.handleClick} variant="danger">God</Button>{' '}
                <h5>Sort</h5>
                <Button onClick={this.handleSort} variant="success">Ascending</Button>{' '}
                <Button onClick={this.handleSort} variant="success">Descending</Button>{' '}
                <Button onClick={this.handleSort} variant="success">Reset</Button>{' '}

                <Container>
                    <Row className="justify-content-md-center">
                        {this.state.filterEmp.map(employee => (
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