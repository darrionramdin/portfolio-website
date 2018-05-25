import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Motion, spring } from 'react-motion';

import Container from '../Layout/Container';

import closeIcon from './assets/close.png';

class Navbar extends Component {
    state = {
        navOpen: false
    }

    toggleNav = () => {
        this.setState({navOpen: !this.state.navOpen});
    }

    render(){
        let nav = null;
        this.state.navOpen ? 
            nav = (
                <Motion
                    defaultStyle={{width: 0, height: 0 }}
                    style={{
                        width: spring(this.state.navOpen ? 210 : 0),
                        height: spring(this.state.navOpen ? 250 : 0)
                    }}
                > 
                {style => (
                    <div style={{height: style.height, width: style.width}} className="mobile-nav-menu bg-black absolute right-0 top-0 flex flex-column justify-center pa3 tr">
                    <button onClick={this.toggleNav} className="bg-transparent bn tr pa0">
                        <img className="w1" src={closeIcon} alt="Close" />
                    </button>
                    <NavLink activeClassName="yellow" to="/about" className="link white dim pv2">
                        <span className="f4 fw4 ttu">About</span>
                    </NavLink>
                    <NavLink activeClassName="yellow" to="/portfolio" className="link white dim pv2">
                        <span className="f4 fw4 ttu">Portfolio</span>
                    </NavLink>
                    <NavLink activeClassName="yellow" to="/blog" className="link white dim pv2">
                        <span className="f4 fw4 ttu">Blog</span>
                    </NavLink>
                    <NavLink activeClassName="yellow" to="/contact" className="link white dim pt2 pb4">
                        <span className="f4 fw4 ttu">Contact</span>
                    </NavLink>
                    </div>
                )}  
                
                </Motion>
            )
         :
            nav = (
                <div className="pa2 dn db-ns">
                    <NavLink activeClassName="yellow" to="/about" className="link white dim ph2">
                        <span className="f6 fw4 ttu">About</span>
                    </NavLink>
                    <NavLink activeClassName="yellow" to="/portfolio" className="link white dim ph2">
                        <span className="f6 fw4 ttu">Portfolio</span>
                    </NavLink>
                    <NavLink activeClassName="yellow" to="/blog" className="link white dim ph2">
                        <span className="f6 fw4 ttu">Blog</span>
                    </NavLink>
                    <NavLink activeClassName="yellow" to="/contact" className="link white dim pl2">
                        <span className="f6 fw4 ttu">Contact</span>
                    </NavLink>
                </div>
            )
        return (
            <div className="pv4 white bg-jaguar roboto fixed w-100 z-max">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="pa2">
                            <NavLink to="/" className="link white dim">
                                <span className="f4 fw6">Darrion Ramdin,</span> <br/> 
                                <span className="f5">Web Developer</span>
                            </NavLink>
                        </div>
                        {nav}
                        <div onClick={this.toggleNav} className="flex flex-column dn-ns mr2 pointer">
                            <div className="bar bg-white"></div>
                            <div className="bar bg-white"></div>
                            <div className="bar bg-white"></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
 
export default Navbar;