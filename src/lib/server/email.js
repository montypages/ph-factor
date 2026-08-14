import nodemailer from 'nodemailer';
import { SMTP_USER, SMTP_PASS } from '$env/static/private';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS
	}
});

export async function sendEmail(options) {
	return transporter.sendMail(options);
}
