export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/svg',
					href: '/favicon.svg'
				}
			]
		},
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	css: ['@/assets/styles/main.css'],

	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', 'nuxt-swiper', '@vueuse/nuxt'],
	i18n: {
		locales: ['uz', 'ru', 'en'],
		defaultLocale: 'uz',
		vueI18n: './i18n.config.ts'
	},
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.API_BASE_URL || 'https://verel-auto.uz/api'
		}
	}
});
