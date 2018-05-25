import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../scenes/Home';
import About from '../../scenes/About';
import Portfolio from '../../scenes/Portfolio';
import Blog from '../../scenes/Blog';
import Contact from '../../scenes/Contact';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}
 
export default Routes;