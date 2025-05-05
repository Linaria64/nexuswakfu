import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx,astro,html,js,jsx,md,mdx,svelte,vue}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				wakfu: {
					'blue': '#1E90FF',
					'teal': '#32CD9A',
					'gold': '#FFD700',
					'brown': '#8B4513',
					'green': '#3CB371',
					'purple': '#9370DB',
					'dark': '#2C3E50',
					'light': '#ECF0F1',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
			},
			fontFamily: {
				'wakfu': ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern': "url('/hero-background.jpg')",
				'texture': "url('/texture-background.jpg')",
			}
		}
	},
	plugins: [
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				glassmorphism: {
					"color-scheme": "dark",
					"primary": "oklch(62% 0.214 259.815)",
					"primary-content": "oklch(97% 0.014 254.604)",
					"secondary": "oklch(68% 0.169 237.323)",
					"secondary-content": "oklch(97% 0.013 236.62)",
					"accent": "oklch(76% 0.188 70.08)",
					"accent-content": "oklch(98% 0.022 95.277)",
					"neutral": "oklch(37% 0.01 67.558)",
					"neutral-content": "oklch(98% 0.001 106.423)",
					"base-100": "oklch(14% 0.004 49.25)",
					"base-200": "oklch(21% 0.006 56.043)",
					"base-300": "oklch(26% 0.007 34.298)",
					"base-content": "oklch(97% 0.001 106.424)",
					"info": "oklch(74% 0.16 232.661)",
					"info-content": "oklch(29% 0.066 243.157)",
					"success": "oklch(77% 0.152 181.912)",
					"success-content": "oklch(27% 0.046 192.524)",
					"warning": "oklch(85% 0.199 91.936)",
					"warning-content": "oklch(28% 0.066 53.813)",
					"error": "oklch(70% 0.191 22.216)",
					"error-content": "oklch(25% 0.092 26.042)",
					"--rounded-box": "2rem",
					"--rounded-btn": "1rem",
					"--rounded-badge": "0.5rem",
					"--animation-btn": "0.25s",
					"--animation-input": "0.2s",
					"--btn-focus-scale": "0.95",
					"--border-btn": "1px",
					"--tab-border": "1px",
					"--tab-radius": "0.5rem",
				},
			},
			"dark",
			"light"
		],
		darkTheme: "glassmorphism",
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: false,
	},
} satisfies Config;
