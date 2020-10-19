import React, { Component } from 'react';
import './house.css'
import emailIcon from './email.jpg'
import  Inquiry from './inquiry'

class House extends Component {
    state = {inquiryshown: false};
    
inquiryToggle = () => {
    this.setState({inquiryshown: !this.state.inquiryshown})
}    
    render() { 
        const house = this.props.house
        const inquiry = this.state.inquiryshown ?
        <Inquiry house={house}/> : null;
        return ( 
               <div>
               <div className="row mt-2">
               <h3 className="col-md-12 country">{house.country}</h3>
               </div>
               <div className="row">
               <h3 className="col-md-12">{house.address}</h3>
               </div>
               <div className="row">
               <div className="col-md-7">
                   <img className="img" src={house.photo} alt="House" />
               </div>
               <div className="col-md-5">
               <p className="price">${house.price}</p>
               <p>{house.Description}</p>
               <img src={emailIcon}
                    alt="inquiry"
                    height="50"
                    onClick={this.inquiryToggle}/>
                    {inquiry}
               </div>
               </div>



            </div>
         );
    }
}
 
export default House;