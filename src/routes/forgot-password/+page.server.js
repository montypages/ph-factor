export const actions = {
	default: async ({ request, locals, url }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		if (!email) {
			return {
				error: 'Please enter your email address.'
			};
		}

		const { error } = await locals.supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${url.origin}/reset-password`
		});

		if (error) {
			return {
				error: error.message
			};
		}

		return {
			success: true
		};
	}
};
