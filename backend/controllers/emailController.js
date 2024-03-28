// emailController.js
import nodemailer from 'nodemailer';
import asyncHandler from '../middleware/asyncHandler.js';

// Function to send email
export const sendEmail = asyncHandler(async (req, res) => {
	const { name, email, message } = req.body;


	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD
		}
	});

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_RECEIVER,
		subject: 'New message from your EA Car Accessories website',
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
	};

	try {
		// Send email
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: 'Email sent successfully' });
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({ error: 'Failed to send email' });
	}
});
