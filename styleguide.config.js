module.exports = {
  title: 'Farkle',
  sections: [
    {
      name: 'Section 1',
      components: 'src/components/**/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse',
    },
    {
      name: 'Section 2',
      components: 'src/components/**/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
