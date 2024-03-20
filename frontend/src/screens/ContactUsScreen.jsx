import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsScreen = () => {
	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={8}>
					<h1 className="my-4">Contact Us</h1>
					<p>We'd love to hear from you! Get in touch using the form below or reach out to us through our social media channels.</p>

					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter your name" />
						</Form.Group>

						<Form.Group controlId="formBasicMessage">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Type your message here" />
						</Form.Group>

						<Button variant="primary" type="submit" className='mt-3'>
							Send Message
						</Button>
					</Form>

					<p className="mt-4">
						{/* Replace these placeholders with your actual information */}
						You can also reach us at:
						<br />
						- Email: edrisafzali8@gmail.com
						<br />
						- Phone: +1 (916) 841-5679
					</p>


				</Col>
			</Row>
		</Container>
	);
};

export default ContactUsScreen;
