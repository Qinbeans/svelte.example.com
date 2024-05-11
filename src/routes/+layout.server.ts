/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ request, url }) => {
    // get user agent
    const userAgent = request.headers.get('user-agent')!;
    // get current path
    const path = url.pathname;
    if (userAgent.includes('Mobile')) {
        return {
            mobile: true,
            path
        };
    }
    return {
        mobile: false,
        path
    };
}