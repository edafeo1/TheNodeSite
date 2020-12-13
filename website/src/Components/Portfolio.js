import React, { Component } from 'react';
import Title from './Title';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">


      <Title title="Included amenities"></Title> 
      <p id="p_tags"><b>All the amenities you need!</b></p>
        <div className="amenities">
          <div className="">
           
            <p id="p_tags">Free WiFi</p>

            <p id="p_tags">Shower facilities</p>
            

    
          </div>

          <div className="">
           
           <p id="p_tags">Free Printing and scanning (fair use applies)</p>

    
           

   
         </div>

          <div className="">
        
            
              <p id="p_tags">24/7 access to the space</p>

              <p id="p_tags">Secure access via Keycard,</p>

              <p id="p_tags"> or mobile</p>

          
          </div>

          <div className="">
         
            <p id="p_tags">Kitchen facilities</p>

            <p id="p_tags">Flexible</p>

            <p id="p_tags">terms: Pay per month.</p>


          </div>

      <div className="">
         
         <p id="p_tags">Work pods and quiet areas </p>

         <p id="p_tags">Professional meeting rooms.</p>

       </div>


        </div>


  
   </section>
    );
  }
}

export default Portfolio;
