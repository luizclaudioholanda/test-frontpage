import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Docs extends Component {
  render() {
    return (
      <div>
        <Header />

            <div id="extra" className="container">

              <header className="major">
                <h2>Welcome to Back4App Docs</h2>
                <p>Who should use Back4App?</p>
              </header>

          		<div id="three-column">
          			<div className="boxA">
          				<div className="box"> <span className="fa fa-cloud-download"></span>
          					<p>Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
          				</div>
          			</div>
          			<div className="boxB">
          				<div className="box"> <span className="fa fa-cogs"></span>
          					<p>Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis.</p>
          				</div>
          			</div>
          			<div className="boxC">
          				<div className="box"> <span className="fa fa-user"></span>
          					<p> Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.</p>
          				</div>
          			</div>
          		</div>

          	</div>

         <Footer />
        </div>
    );
  }
}

export default Docs;
