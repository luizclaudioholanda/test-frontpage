import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
				<div className="container">
					<section className="links">
						<div className="row">
							<section className="3u 6u(medium) 12u$(small)">
								<h3>Type Something</h3>
								<ul className="unstyled">
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
								</ul>
							</section>
							<section className="3u 6u$(medium) 12u$(small)">
								<h3>Type Something</h3>
								<ul className="unstyled">
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
								</ul>
							</section>
							<section className="3u 6u(medium) 12u$(small)">
								<h3>Type Something</h3>
								<ul className="unstyled">
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
									<li><a href="#">Type Something</a></li>
								</ul>
							</section>
							<section className="3u$ 6u$(medium) 12u$(small)">
                  <h3>Type Something</h3>
                  <ul className="icons">
                    <li>
                      <a className="icon rounded fa-facebook"><span className="label">Facebook</span></a>
                    </li>
                    <li>
                      <a className="icon rounded fa-twitter"><span className="label">Twitter</span></a>
                    </li>
                    <li>
                      <a className="icon rounded fa-google-plus"><span className="label">Google+</span></a>
                    </li>
                    <li>
                      <a className="icon rounded fa-linkedin"><span className="label">LinkedIn</span></a>
                    </li>
                  </ul>
							</section>
						</div>
					</section>
				</div>
			</footer>
    );
  }
}

export default Footer;
