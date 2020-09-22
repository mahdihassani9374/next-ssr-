module.exports = {
    trailingSlash: true,
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/gallery': { page: '/gallery' },
            '/project': { page: '/project' }
        };
        return paths;
    }
};
