import path from 'path'

module.exports = {
    webpack: {
        alias: {
            '@api': path.resolve(__dirname, 'src/api'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@styles': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        }
    },
};