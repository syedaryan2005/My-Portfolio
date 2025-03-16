
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
			},
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
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				slideDown: {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				slideInLeft: {
					"0%": { transform: "translateX(-20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				slideInRight: {
					"0%": { transform: "translateX(20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				float: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" }
				},
				pulse: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" }
				},
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14.0deg)" },
					"20%": { transform: "rotate(-8.0deg)" },
					"30%": { transform: "rotate(14.0deg)" },
					"40%": { transform: "rotate(-4.0deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" }
				},
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-15px)" }
				},
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				typing: {
					"0%": { width: "0" },
					"100%": { width: "100%" }
				},
				blink: {
					"0%, 100%": { borderColor: "transparent" },
					"50%": { borderColor: "hsl(var(--primary))" }
				},
				tiltCard: {
					"0%, 50%, 100%": { transform: "rotate3d(0, 0, 0, 0deg)" },
					"25%": { transform: "rotate3d(1, 0, 0, 5deg)" },
					"75%": { transform: "rotate3d(0, 1, 0, 5deg)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fadeIn 0.6s ease-in-out forwards",
				"slide-up": "slideUp 0.6s ease-out forwards",
				"slide-down": "slideDown 0.6s ease-out forwards",
				"slide-in-left": "slideInLeft 0.6s ease-out forwards",
				"slide-in-right": "slideInRight 0.6s ease-out forwards",
				"float": "float 3s ease-in-out infinite",
				"pulse": "pulse 2s ease-in-out infinite",
				"wave": "wave 2s linear infinite",
				"bounce": "bounce 2s ease infinite",
				"spin": "spin 8s linear infinite",
				"typing": "typing 3.5s steps(40, end), blink .75s step-end infinite",
				"tilt-card": "tiltCard 5s ease-in-out infinite"
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
