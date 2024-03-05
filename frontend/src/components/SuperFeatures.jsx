// SuperFeatures.js

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaTruck, FaMoneyCheckAlt, FaPaypal } from 'react-icons/fa';


const SuperFeatures = () => {
	return (
		<Row className="super-features">
			<Col className="feature-section">
				<Row>
					<FaTruck className="icon" />
					<h4>SUPER FAST & FREE DELIVERY</h4>
					<p className="explanation">Get your items delivered at lightning speed.</p>
				</Row>
			</Col>
			<Col className="feature-section">
				<Row>
					<FaPaypal className="icon" />
					<h4>SUPER SECURE PAYMENT SYSTEM</h4>
					<p className="explanation">Pay with confidence using our secure payment system.</p>
				</Row>
			</Col>
			<Col className="feature-section">
				<Row>
					<FaMoneyCheckAlt className="icon" />
					<h4>MONEY-BACK GUARANTEE</h4>
					<p className="explanation">If you're not satisfied, we're not satisfied. Money-back guarantee.</p>
				</Row>
			</Col>
		</Row>
	);
};

export default SuperFeatures;
