import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUsScreen = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				alert('Message sent successfully!');
				setFormData({ name: '', email: '', message: '' }); // Clear form fields
			} else {
				alert('Failed to send message');
			}
		} catch (error) {
			console.error('Error sending message:', error);
			alert('An error occurred while sending message');
		}
	};

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={8}>
					<h1 className="my-4">Contact Us</h1>
					<p>We'd love to hear from you! Get in touch using the form below or reach out to us through our social media channels.</p>

					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
						</Form.Group>

						<Form.Group controlId="formBasicMessage">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={3} name="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} />
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
