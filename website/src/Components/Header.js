import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">


         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Gallery</a></li>
            <li><a className="smoothscroll" href="#about">Membership</a></li>
	         <li><a className="smoothscroll" href="#resume">Ammenities</a></li>
            <li><a className="smoothscroll" href="#portfolio">Location</a></li>
            <li><a className="smoothscroll" href="#testimonials">Events</a></li>
            <li><a className="smoothscroll" href="#contact">Get in Contact</a></li>
         </ul>

      </nav>


   </header>
    );
  }
}

export default Header;
