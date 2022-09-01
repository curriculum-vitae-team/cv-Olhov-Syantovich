import path from 'path'

module.exports = {
    webpack: {
        alias: {
            '@api': path.resolve(__dirname, 'src/api'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@utils': path.resolve(__dirname, 'src/utils'),

            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@templates': path.resolve(__dirname, 'src/components/templates'),
            '@pages': path.resolve(__dirname, 'src/components/pages'),
            '@router': path.resolve(__dirname, 'src/components/router'),
        }
    },
};