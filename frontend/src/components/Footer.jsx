import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/EACA_Std_L_White.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="custom-footer-bg text-light py-5 mt-2">
			<Container>
				<Row>
					<Col md={4}>
						<Row className="align-items-center">
							<Col xs={3} className="logo-column">
								<img width='100' height='100' src={logo} alt='Ea Car Accessories' />
							</Col>
							<Col xs={9}>
								<h5>Contact Us</h5>
								<ul className="list-unstyled">
									<li><FaEnvelope className="me-2" />edrisafzali8@gmail.com</li>
									<li><FaPhone className="me-2" />+1 (916) 841-5679</li>
									<li><FaMapMarkerAlt className="me-2" />3610 Auburn blvd, Sacramento, California</li>
								</ul>
							</Col>
						</Row>


					</Col>
					<Col md={4}>
						<h5>Quick Links</h5>
						<ul className="list-unstyled">
							<li ><a href="/">Home</a></li>
							<li ><a href="/search/s">Products</a></li>
							<li ><a href="/about">About Us</a></li>
							<li ><a href="/contact">Contact Us</a></li>
						</ul>
					</Col>
					<Col md={4}>
						<h5>Follow Us</h5>
						<ul className="list-unstyled">
							<li ><a href="/">Facebook</a></li>
							<li ><a href="/">Twitter</a></li>
							<li ><a href="/">Instagram</a></li>
							<li ><a href="/">LinkedIn</a></li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div className="text-center py-3">
				<p>&copy; {currentYear} Ea Car Accessories. All Rights Reserved.</p>
			</div>
		</footer >
	);
};

export default Footer;
