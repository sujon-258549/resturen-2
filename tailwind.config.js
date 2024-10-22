/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: ["light"],
    },
    theme: {
        extend: {
            colors: {

                'custom-red': '#D30000',
                'custom-green': '#10B981',
            },

            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
            },

        },
    },
    plugins: [
        require('daisyui'),
    ],
}