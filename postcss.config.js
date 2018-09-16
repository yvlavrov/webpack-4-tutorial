module.exports = {
    plugins: [
        require('postcss-import'),
        // require('precss'),
        require('postcss-mixins')({
            mixins: {
                aloha: {
                    color: 'red'
                }
            }
        }),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', '> 5%'],
        }),
    ]
};