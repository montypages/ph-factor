import { json } from '@sveltejs/kit';
import { sendEmail } from '$lib/server/email';

export async function POST({ request }) {
    const { name, email, message } = await request.json();

    // Validate
    if (!name || !email || !message) {
        return json(
            { success: false, message: 'All fields are required.' },
            { status: 400 }
        );
    }

    // Email to you
    await sendEmail({
        from: process.env.SMTP_FROM,
        to: process.env.CONTACT_EMAIL,
        subject: `Website Contact - ${name}`,
        text: `
Name: ${name}
Email: ${email}

${message}
`
    });

    // Confirmation to visitor
    await sendEmail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: 'Thanks for contacting PH Factor!',
        text: `
Hi ${name},

Thanks for reaching out! We received your message and will get back to you soon.

Your message:
${message}

-The PH Factor
`
    });

    return json({
        success: true,
        message: 'Message sent!'
    });
}