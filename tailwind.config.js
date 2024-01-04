/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/**.ejs'],
    theme: {
        extend: {
            colors: {
                lbackground: 'hsla(var(--background))',
                lherotext: 'hsla(var(--hero-text))',
                ltext: 'hsla(var(--text))',
                lcta: 'hsla(var(--cta))',
                lctatext: 'hsla(var(--cta-text))',
            },
        },
    },
    plugins: [],
}
