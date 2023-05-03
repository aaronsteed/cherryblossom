/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    theme: {
        screens: {
            // https://tailwindcss.com/docs/screens
            // iPhone 4, and older have smaller width screens
            'legacy-mobile': '320px',
            // => @media (min-width: 390px { ... }
            // Modern mobile phone width
            'mobile': '390px',
            // => @media (min-width: 390px) { ... }

            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {},
    },
    plugins: [],
}