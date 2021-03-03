const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],

  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.module.scss$/,
      use: ['style-loader', 'css-loader?modules=true'],
      include: path.resolve(__dirname, '../'),
    });
    
    return config;
  },
}