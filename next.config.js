module.exports = {
    exportPathMap: async function (defaultPathMap) {
        return {
            '/index.html': { page: '/' },
            '/about.html': { page: '/about' },
            '/gallery.html': { page: '/gallery' },
            '/product.html': { page: '/product' },
        }
    }
}
