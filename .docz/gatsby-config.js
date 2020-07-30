const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Real Estate Ui',
    description: 'Made with create-react-library',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/liamellis/Desktop/real-estate-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Real Estate Ui',
        description: 'Made with create-react-library',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/liamellis/Desktop/real-estate-ui',
          templates:
            '/Users/liamellis/Desktop/real-estate-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/liamellis/Desktop/real-estate-ui/.docz',
          cache: '/Users/liamellis/Desktop/real-estate-ui/.docz/.cache',
          app: '/Users/liamellis/Desktop/real-estate-ui/.docz/app',
          appPackageJson:
            '/Users/liamellis/Desktop/real-estate-ui/package.json',
          appTsConfig: '/Users/liamellis/Desktop/real-estate-ui/tsconfig.json',
          gatsbyConfig:
            '/Users/liamellis/Desktop/real-estate-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/liamellis/Desktop/real-estate-ui/gatsby-browser.js',
          gatsbyNode: '/Users/liamellis/Desktop/real-estate-ui/gatsby-node.js',
          gatsbySSR: '/Users/liamellis/Desktop/real-estate-ui/gatsby-ssr.js',
          importsJs:
            '/Users/liamellis/Desktop/real-estate-ui/.docz/app/imports.js',
          rootJs: '/Users/liamellis/Desktop/real-estate-ui/.docz/app/root.jsx',
          indexJs:
            '/Users/liamellis/Desktop/real-estate-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/liamellis/Desktop/real-estate-ui/.docz/app/index.html',
          db: '/Users/liamellis/Desktop/real-estate-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
