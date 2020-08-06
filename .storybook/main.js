module.exports = {
  stories: ['../src/**/*.stories.tsx'],

  // '../src/**/*.stories.mdx'
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-jsx',
    '@react-theming/storybook-addon', // Storybook: React Theme Provider
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',

    // docs & mdx
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    }
  ]
}
