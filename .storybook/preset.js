function webpack(webpackConfig = {}, options = {}) {
  const { module = {} } = webpackConfig
  const { loaderOptions, rule = {} } = options

  return {
    ...webpackConfig
  }
}

function managerEntries(entry = []) {
  return [...entry, require.resolve('@storybook/addon-storysource/register')]
}

module.exports = { webpack, managerEntries }
