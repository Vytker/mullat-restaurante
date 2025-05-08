import adapter from '@sveltejs/adapter-static';

const config = { kit: { adapter: adapter({fallback: 'app.html'}) } };

export default config;
