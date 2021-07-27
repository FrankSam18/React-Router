import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Home from '../Pages/Home';
import ServiceDetails from '../Pages/ServiceDetails';
import Services from '../Pages/Services';

const Router = () => {
    return (
        <BrowserRouter>
        <div>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contacts" >Contacts</Link>
            <Link to="/services" >Services</Link>
        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:id" component={ServiceDetails} />
        </BrowserRouter>
    );
}

export default Router;
