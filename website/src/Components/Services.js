import React, { Component } from 'react'
import Title from './Title.js';

export default class Services extends Component {
    state ={
        services:[
            {
            
            title:"About",
            info:"The Node Innovation Centre Collingwood is a brand new serviced buisnes center with Private office suites. The suites are fully furnished with desks and chairs. The Building is in the heart of Collingwood. Over 200 Sqm of Space! it flows over 2 floors with 4 private - & open office spaces with a 24/7 meeting room available.",
            para:"Try out Collingwood's most talked-about business space. if your looking for a prestige fully serviced office The Node Innovation Centre Collingwood is the space for you. Depending on your office requirements our suites range between $800-$1200 per Week."
        
            }

        ]
    }
    render() {
        return (
            <section className="services ">
                <Title title="Node Innovation Buisness Centre Collingwood | Melbourne"></Title>
            <div className="service-center ">
                {
                    this.state.services.map((item, index)=>{
                        return <article key={index} className="service">
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            <p>{item.para}</p>
                        </article>
    
                    })
                }
            <div className="verticaLine"></div>

                <article>
                    <h6>Features</h6>
                    <ul>
                        <li>UNLIMITED Free WIFI</li>
                        <li>UNLIMITED Free printing and scanning</li>
                        <li>UNLIMITED 24/7 access to the space</li>
                        <li>50 metres from Smith Street, 10 minute walk from Collingwood station</li>
                        <li>Kitchen/shower facilities</li>
                        <li>Secure access via Key-card or mobile</li>
                        <li>Flexible terms: pay per month</li>
                        <li>professional meeting room</li>
                        <li>Day beds to chill and play </li>
                    </ul>
                </article>

            <div className="verticaLine"></div>

                 <article>
                     <h6>AMENITIES</h6>
                     <ul>
                         <li>7 Person Meeting Room</li>
                         <li>Fast WIFI</li>
                         <li>Kitchen</li>
                         <li>24/7 access</li>
                         <li>Print</li>
                         <li>Scan</li>
                         <li>Copy</li>
                         <li>Wheelchair accessible</li>
                         <li>Shower</li>
                         <li>Security</li>
                         <li>Cleaning</li>
                     </ul>
                 </article>

                 <div className="verticaLine"></div>

                 <article>
                     <h6>SUITES AVAILABLE</h6>
                     <p>Lets Innovate at The Node Innovation Centre Collingwood is a desk office suitable for a team of 12 people. </p>
                     <div className="verticaLine"></div>
                     <h6>Divider Desks</h6>
                     <p>The room is furnished with chaurs and divider desks This office is in the main open area of The Node Collingwood.</p>
                     <p>2 Divider Desks to fit 12 people comfortably</p>
                 </article>

                 <div className="verticaLine"></div>

                 <article>
                     <p>The Pent House office space at The Node Innovation Centre Collingwood is a Skyline office suitable for team of 13 people. it is on the second floor of The Node.</p>
                     <p>The room is furnishedwith chairs and desks. This room has its entry and exit via the staircase.</p>
                     
                     <p>1 Divider Desk to fit up to 8 people</p>

                     <p>6 Sit Stand Desks to fit up to 5 people</p>
                 </article>

                 <div className="verticaLine"></div>
                 
                 <article>
                     <p>The Ocean Room at The Node Innovation Centre is a fully private office suitable for team of 15 people.</p>

                     <h6>Desks</h6>
                     <p>The room is furnished with chairs and desks. This room has its own seperate entry and exit secluded from the other suites. This suite is suitable for companies that want full privacy. suitable for call Centers.</p>

                     <p>1 Divider Desk to fit up to 8 People</p>

                     <p>Side Desk with privacy divider (removable) to fit up to 7 people for further information regarding the suites or to arrange a tour please contat us at our email hello@thenode.com.au</p>
                 </article>


            </div>
            </section>
        )
    }
}
