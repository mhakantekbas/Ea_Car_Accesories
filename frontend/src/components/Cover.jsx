import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cover = ({ scrollToLatestProducts }) => {
	return (
		<div className="cover-page">
			<div className="photo-background"></div>
			<div className="content-container" md={5}>
				<Container>
					<Row >
						<Col md={7}>
							<div className="content">
								<h1 className="heading">Welcome to Car Gear Hoodies</h1>
								<p>Rev up your style with our premium collection of car gear-inspired hoodies.</p>
								<Button variant="info" onClick={scrollToLatestProducts}>Shop Now</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Cover;
