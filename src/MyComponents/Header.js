import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();

export default function Header(props) {
    return (
         
        <nav className="navbar navbar-expand-lg navbar-light "  >
          
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color:'white',fontWeight: 'bold',fontSize:'2em'}}><img src="/images/task1.png" alt=""/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"></Link>
              </li>  
            </ul>
            <p style={{marginLeft:"650px"}}>{currDate} </p>
          
            <p style={{marginLeft:"10px"}}>{currTime} </p>


          </div>
        </div>
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}