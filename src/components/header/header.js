import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";

export default()=>{
    return(
        <div>
            <Link to = "/">
             <Button variant="primary" size="lg" active>
                 Primary button
            </Button>
            </Link>
        </div>
    )
}