# Template for making a simple SvelteKit website

## Getting started
 - [SvelteKit Docs](https://kit.svelte.dev/docs/introduction)
 - [TailwindCSS Docs](https://tailwindcss.com/docs)
 - [Free Icons From Heroicons](https://heroicons.com/)

### Install dependencies
```bash
# Replace npm with whatever package manager you use
npm install
```

### Start the development server
```bash
npm run dev
```

### Build for production

Used outside the adapters below.

```bash
npm run build
```

### SvelteKit adapters

Many of the below adapters don't need a build command as they build the project for you.

 - [SvelteKit Adapters](https://kit.svelte.dev/docs/adapters)
 - [SvelteKit Adapter Vercel](https://kit.svelte.dev/docs/adapter-vercel)
 - [SvelteKit Adapter Netlify](https://kit.svelte.dev/docs/adapter-netlify)
 - [SvelteKit Adapter Cloudflare](https://kit.svelte.dev/docs/adapter-cloudflare)

## Structure

```bash
src/
    lib/
        # Put components here for increased reusability and readability
        components/
            # Mobile components
            mobile/
                burger.svelte
            navbar.svelte
        styles/
            app.css
        index.ts
    routes/
        # Each directory in routes is a page if a +page.svelte file is present
        about/
            +page.svelte
        contact/
            +page.svelte
        +page.svelte
        +layout.svelte
        +layout.server.ts
    app.d.ts
    app.html
static/
    favicon.png
...
```