module.exports = {
    plugins: {
        'autoprefixer': {},
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
    },
};
