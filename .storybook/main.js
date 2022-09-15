const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@theme'] = path.resolve(__dirname, '../src/theme')
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils')
    config.resolve.alias['@constants'] = path.resolve(__dirname, '../src/constants')
    config.resolve.alias['@types'] = path.resolve(__dirname, '../src/types')
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets')
    config.resolve.alias['@src'] = path.resolve(__dirname, '../src')
    return config
  }
};