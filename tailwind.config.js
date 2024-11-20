/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)']
      },
      boxShadow: {
        custom: '0px 0px 37px 0px #0170FF80',
        custom2: '0px 4px 20px 0px #00000033'
      },
      colors: {
        'custom-blue': '#0170FF80',
        'custom-pink': '#FFD4EE',
        'custom-green': '#D3FEE8',
        'custom-pink2': '#D9D3FF',
        'custom-green2': '#C5E8FF',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
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
        pulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 var(--pulse-color)'
          },
          '50%': {
            boxShadow: '0 0 0 8px var(--pulse-color)'
          }
        },
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        marquee: {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))'
          }
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0'
          }
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse var(--duration) ease-out infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        gradient: 'gradient 8s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}