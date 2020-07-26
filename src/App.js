import React from 'react';
import './assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from './components/sidenav/sidenav';
import Table from './components/table/table';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Routes from './routes';

export default() =>{
  return(
    <div  className = "float-left w-100 dashboard">
      <Switch>
        <Route path={"/"} component = {Routes}/>
      </Switch> 
    </div>
  )
}