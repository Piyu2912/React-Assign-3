import React, { Component } from 'react'
import Newpg from './Newpg';
import "./Style.css"

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            dept: "",
            rate: "",
            employees: [],
            formDisp: true,
            newDisp: false,
        }
    }

    handleChange = (event) => {
        // console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleStateChange = () => {
        this.setState({
            formDisp: true,
            newDisp: false,
        });
    }

    handleButtonClicked = (event) => {
        event.preventDefault();

        const tempObj = {
            name: this.state.name,
            dept: this.state.dept,
            rate: this.state.rate,
        }
        this.state.employees.push(tempObj)
        this.setState({
            name: "",
            dept: "",
            rate: "",
            formDisp: false,
            newDisp: true

        })
    }

    render() {
        return (
            <>
                {this.state.formDisp && (
                    <>
                        <div className='form'>
                            <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
                            <form onSubmit={this.handleButtonClicked}>
                                <label for="name" className='labell'>Name : </label>
                                <input type="text" className='inputt' id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                                <br />

                                <label for="dept" className='labell'>Department : </label>
                                <input type="text" className='inputt' id="dept" name="dept" value={this.state.dept} onChange={this.handleChange} />
                                <br />

                                <label for="rate" className='labell'>Rating : </label>
                                <input type="text" className='inputt' id="rate" name="rate" value={this.state.rate} onChange={this.handleChange} />
                                <br />

                                <button type='submit' onClick={this.handleButtonClicked}>Submit</button>
                            </form>
                        </div>
                    </>
                )
                }
                {this.state.newDisp && <Newpg employee={this.state.employees} stateObj={this.state} statechange={this.handleStateChange} />}
            </>
        )
    }
}

export default Form