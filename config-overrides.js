const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@components": path.resolve(__dirname, 'src/components'),
      "@modules": path.resolve(__dirname, 'src/modules'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@api": path.resolve(__dirname, 'src/api'),
      "@src": path.resolve(__dirname, 'src'),
    },
  };

  return config;
};
