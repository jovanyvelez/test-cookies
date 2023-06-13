
export const load = async ({cookies})=>{
	const dato = cookies.get('session')
	return {cookie: dato}
}