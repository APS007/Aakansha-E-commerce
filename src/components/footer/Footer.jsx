import React from 'react';
import './footer.css';
// import { InstagramIcon } from '@material-ui/icons/Instagram';

const Footer = () => (
	<footer className="footer">
		<div className="footer-container">
			<div className="footer-row">
				<div className="footer-col">
					<h4>company</h4>
					<ul>
						<li>
							<a href="/">about us</a>
						</li>
						<li>
							<a href="/">our services</a>
						</li>
						<li>
							<a href="/">privacy policy</a>
						</li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>get help</h4>
					<ul>
						<li>
							<a href="/">FAQ</a>
						</li>
						<li>
							<a href="/">shipping</a>
						</li>
						<li>
							<a href="/">order status</a>
						</li>
						<li>
							<a href="/">payment options</a>
						</li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>online shop</h4>
					<ul>
						<li>
							<a href="/">watch</a>
						</li>
						<li>
							<a href="/">bag</a>
						</li>
						<li>
							<a href="/">shoes</a>
						</li>
						<li>
							<a href="/">dress</a>
						</li>
					</ul>
				</div>
				<div className="footer-col">
					<h4>follow us</h4>
					<div className="footer-social-links">
						<a href="/">
							<i className="fa fa-facebook-f" />
						</a>
						<a href="/">
							<i className="fa fa-twitter" />
						</a>
						<a href="/">
							<i className="fa fa-instagram" />
						</a>
						<a href="/">
							<i className="fa fa-linkedin" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
