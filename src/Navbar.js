import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render(){
    const {title, text1} = this.props;
    return(
      <div className="navbar">
        <h3>{title}</h3>
        <ul>
          <li><a onClick={this.props.showForm}>{text1}</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
