import React from 'react';
import './sidenav.css';

export default()=>{
    return(
        <div className = "sidenav float-left w-100">
            <a href = "#" className="logo">
                <img src={require('../../assets/images/ISC_logo.png')} />
            </a>
            <ul>
                <a href="#"><li><img className="deactive" src={require('../../assets/images/dashboard.png')} /> <img className= "active1" src={require('../../assets/images/dashboardactive.png')} /> Dashboard </li></a>
                <a href="#"><li><img className="deactive" src={require('../../assets/images/admin.png')} /> <img className= "active1" src={require('../../assets/images/adminactive.png')} /> Administrator </li></a>
            </ul>
        </div>
    )
}