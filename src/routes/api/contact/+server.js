import { json } from '@sveltejs/kit';
import { sendEmail } from '$lib/server/email';
import { SMTP_FROM, SMTP_USER } from '$env/static/private';
import { isRateLimited } from '$lib/server/rateLimiter.js';

export async function POST({ request, getClientAddress }) {
	// const { name, email, message, website } = await request.json();
	const form = await request.formData();
	const name = form.get('name');
	const email = form.get('email');
	const message = form.get('message');
	const website = form.get('website');
	// const token = form.get('cf-turnstile-response');
	const [firstName, lastName] = name.split(' ');
	const ip = request.headers.get('x-forwarded-for') ?? getClientAddress();

	if (isRateLimited(ip)) {
		return json(
			{
				success: false,
				message: 'Too many messages. Please try again later.'
			},
			{ status: 429 }
		);
	}

	// Validate
	if (!name || !email || !message) {
		return json(
			{ success: false, message: `<p class="error">All fields are required.</p>` },
			{ status: 400 }
		);
	}

	if (website) {
		return json({
			success: true,
			message: `
            <h2>Thank You!</h2>
            <p>We appreciate you contacting us.</p>
            <h3>-pH Factor</h3>
            `
		});
	}

	// Email to you
	await sendEmail({
		from: SMTP_FROM,
		to: SMTP_USER,
		subject: `New Message from ${name} - phFactorBigBand.com`,
		text: `
Name: ${name}
Email: ${email}

${message}
`
	});

	// Confirmation to visitor
	await sendEmail({
		from: SMTP_USER,
		to: email,
		subject: 'Thanks for contacting PH Factor!',
		text: `
Hi ${name},

Thanks for reaching out! We received your message and will get back to you soon.

Your message:
${message}

-PH Factor
`
	});

	return json({
		success: true,
		message: `
        <h3 class="clr-inherit">Thank You, ${firstName ?? 'friend'}!</h3>
        <p class="clr-inherit">We appreciate you reaching out to us.</p>
        <p class="clr-inherit">We will try to get back to you as soon as we can.</p>
        <h4 class="clr-inherit">-pH Factor</h4>
        `
	});
}
