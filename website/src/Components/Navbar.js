import React, { Component } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src="" alt="TheNode"/>
                        </Link>

                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            
                            <DehazeIcon className="nav-icon"/>

                        </button>
                         
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav":"nav-links"} >
                        <li>
                            <Link to="/"><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to="/rooms">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/">Membership</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Amenities</Link>
                        </li>

                        <li>
                            <Link to="/">Location</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Events</Link>
                        </li>

                        <li>
                            <Link to="/rooms">Get In Contact</Link>
                        </li>
                        
                    </ul>
                </div>
                
            </nav>

             
        )
    }
}
