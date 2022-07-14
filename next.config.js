/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['tailwindui.com', 'images.unsplash.com'],
	},
	async redirects() {
		return [
		  {
			source: '/',
			destination: '/dummyDataPage',
			permanent: true,
		  },
		]
	  },
}

module.exports = nextConfig
