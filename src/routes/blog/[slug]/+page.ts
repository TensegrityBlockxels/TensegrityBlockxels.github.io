import type { PageLoad } from './$types';
export const prerender = true;

export const load = (async ({ fetch, params, url }) => {
    
    const post = await fetch("/" + params.slug + '.md', {referrerPolicy: 'same-origin'});

    return {
        slug: params.slug,
        mdslug: params.slug + '.md',
        post: post
    }
}) satisfies PageLoad;  