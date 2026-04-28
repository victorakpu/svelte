import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	const post = await res.json();

	return { post };
};
