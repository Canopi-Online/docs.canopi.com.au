const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Canopi Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Canopi-Online/docs.canopi.com.au',
    editLinks: false,
    docsDir: '/',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Janison',
        link: '/janison/',
      },
      {
        text: 'Dovetail',
        link: '/dovetail/'
      },
      {
        text: 'Canopi Online',
        link: 'https://www.canopi.com.au'
      }
    ],
    sidebar: {
      '/janison/': [
        {
          title: 'Janison CLS',
          collapsable: false,
          children: [
            '',
            'authentication',
            'report-api',
            'enrolment-api',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
