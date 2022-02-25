import React, { Component } from 'react'
import "./Style.css"

class Newpg extends Component {
  
  change = () => {
    // console.log(this.props.stateobj);

    this.props.statechange();

  }

  render() {
    return (
      <div className='form'>

        <h1 className='heading'>EMPLOYEE FEEDBACK DATA</h1>
        <div className='main-box'>
          {this.props.employee.length > 0 && this.props.employee.map((value, index) => {
            return (
            <div className='detail-box'>
              {index+1}. {value.name} | {value.dept} | {value.rate}
            </div>)

          })}
        </div>
        <button onClick={this.change}>GO BACK</button>
      </div>
    )
  }
}

export default Newpg