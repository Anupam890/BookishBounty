/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            "sans": ["Inter", "sans-serif"]
        },
        colors: {
            "primary": "#5675FF",
            "secondary": "#FF6584",
            "tertiary": "#FFD76F",
            gray: {
                100: "#F4F4F4",
                200: "#E4E4E4",
                300: "#D4D4D4",
                400: "#A1A1A1",
                500: "#717171",
                600: "#525252",
                700: "#3F3F3F",
                800: "#2C2C2C",
                900: "#1A1A1A",
            }
        },
        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        }


    },
    plugins: [],
}