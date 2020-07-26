import React from 'react';
import Table from './components/table/table';
import Sidenav from './components/sidenav/sidenav';
import Header from './components/header/header';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
export default()=>{
    return(
        <div style={{display:"flex"}}>
            <Sidenav/>
            <div>
                <Switch>
                    <Route path={"/header"} component={Header}/>
                     {/* redirect to main page */}
                    <Route path={"/"} component={Table} exact= {true}/> 
                </Switch>
               
            </div>
        </div>
    )
}