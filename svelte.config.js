import adapter from '@sveltejs/adapter-static';

const config = { kit: { adapter: adapter({
    pages: 'dist',
    assets: 'dist',
    fallback: 'app.html'}) } };

export default config;
