import type { PageServerLoad } from './$types';
export const prerender = true;

import { posts } from '$lib/collections';

export const load = (async ({ params }) => {
    return {
        posts: posts
    }
}) satisfies PageServerLoad;  