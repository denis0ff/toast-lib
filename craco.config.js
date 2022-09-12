const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@App': path.resolve(__dirname, 'src/App'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
