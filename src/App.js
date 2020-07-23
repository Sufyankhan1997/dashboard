import React from 'react';
import './assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from './components/sidenav/sidenav';
import Table from './components/table/table';

export default() =>{
  return(
    <div  className = "float-left w-100 dashboard">
      <div className = "container-fluid">
        <div className = "row">
          <div className = " col-lg-2 p-0">
            <div className="sidenav_main">
              
            <Sidenav />
            </div>
          </div>
          <div className="col-lg-10">
            <div className ="table_main float-left w-100">
              <Table/>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}