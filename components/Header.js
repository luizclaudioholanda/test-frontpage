import React, { Component } from 'react';
import {openNav,closeNav} from '../js/sidemenu.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Header extends Component {

  constructor(props){
    super(props);
    this.openNavMenu = this.openNavMenu.bind(this);
  }

  openNavMenu(){
    openNav();
  }

  closeNavMenu(){
    closeNav();
  }

  render() {
    return (
      <header id="header">

				<h1>Documentation</h1>
				<nav id="nav">
					<ul>
						<li><a href="#" className="button special">&#x1F50E;</a></li>
					</ul>
				</nav>
        <span className="sideopen" onClick={this.openNavMenu}>&#9776;</span>
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavMenu}>&times;</a>
            <a href="#">Home</a>
            <Link to="/Docs">Docs</Link>
            <Link to="/ErrorPage">ErrorPage</Link>
            <Link to="/TroubleShootingPage">TroubleShooting</Link>
        </div>
			</header>
    );
  }
}

export default Header;
