module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                titillium: ['Titillium Web', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
