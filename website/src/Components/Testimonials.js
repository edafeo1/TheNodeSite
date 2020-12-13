import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
        <div className="last_prop">
          <h4>Located in the heart of Collingwood!</h4>

          <p>Cafe Culture and smith street shopping at your doorstep!</p>

        </div>

   </section>
    );
  }
}

export default Testimonials;
