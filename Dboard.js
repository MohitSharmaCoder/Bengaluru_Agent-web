import React from 'react'
import './css/Dboard.css';
import {Link} from 'react-router-dom'
import Builder from './Builder'
const Dboard = (props) => {
  return (
    <>
      <div className="boad-container">
        <div className="left-board">
          <ul>
            <li><Link to='/builder'>Bulder Detail</Link></li>
            <li><Link to='/agent'>Agent Detail</Link></li>
          </ul>
        </div>
        <div className="right-board">
            <h2>{props.newPro}</h2>
            <Builder api={props.api}/>
        </div>
      </div>
    </>
  )
}

export default Dboard
