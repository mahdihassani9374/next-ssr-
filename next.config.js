module.exports = {
  compress: false,
  devIndicators: {
    autoPrerender: false,
  },
  crossOrigin: 'anonymous',
  env: {
    customKey: 'value',
  },
  distDir: 'build',
  generateEtags: false,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  pageExtensions: ['mdx', 'jsx', 'js'],
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'my-build-id'
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/project': { page: '/project' },
      '/gallery': { page: '/gallery' }
    }
  },
}