import { redirect } from '@sveltejs/kit';

export const actions = {
	enviar: async ({ cookies }) => {
		cookies.set('session', "Soy la cookie", {
      // send cookie for every page
      path: '/',
    })
    throw redirect(302,"/recibir")
	},
};