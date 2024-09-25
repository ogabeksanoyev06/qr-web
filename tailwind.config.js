const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	safelist: ['dark'],
	prefix: '',

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))'
				},

				black: {
					DEFAULT: '#020105'
				},
				blue: {
					DEFAULT: '#1878F3'
				},
				grey: {
					0: '#F5F5F7',
					1: '#5D5D5F',
					2: '#C2C2C3',
					3: '#353437',
					4: '#9A999B'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				},
				'collapsible-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-collapsible-content-height)' }
				},
				'collapsible-up': {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-in-out',
				'collapsible-up': 'collapsible-up 0.2s ease-in-out'
			}
		}
	},
	plugins: [animate]
};
