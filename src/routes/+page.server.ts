import { redirect } from '@sveltejs/kit';

export const actions = {
	enviar: async ({ cookies }) => {
		cookies.set('session', "Soy la cookie", {
      // send cookie for every page
      path: '/',
      // server side only cookie so you can't use `document.cookie`
      httpOnly: true,
      // only requests from same site can send cookies
      // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
      sameSite: 'none',
      // only sent over HTTPS in production
      secure: false,
      // set cookie to expire after a month
      maxAge: 60 * 60 * 24 * 30,
    })
    throw redirect(302,"/recibir")
	},
};