module.exports = {
  base:'/',
  locales: {
    '/docs/': {
      lang: 'zh-hk',
      title: '數字極權時代生存手記'
    },
    '/docs/zh/': {
      lang: 'zh-CN',
      title: '数字极权时代生存手记'
    },
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      '/docs/': {
        selectText: '选择语言',
        label: '繁體中文',
        ariaLabel: '选择语言',
        algolia: {},
        nav: [
          { text: '主頁',  link: '/docs/' },
          { text: '正文', link: '/docs/book/' }
        ],
        sidebar:[
        {
          title: '目錄',
          path: '/docs/book/',
          collapsable: false,
          sidebarDepth: 1,
          displayAllHeaders: true,
          children: [
            '/docs/book/0-1.md',
            '/docs/book/0-2.md',
            '/docs/book/1.md',
            '/docs/book/2.md',
            '/docs/book/3.md',
            '/docs/book/4.md',
            '/docs/book/5.md',
            '/docs/book/6.md',
            '/docs/book/7.md',
            '/docs/book/8.md',
            '/docs/book/9.md',
            '/docs/book/10.md',
            '/docs/book/11.md',
            '/docs/book/12.md',
            '/docs/book/13.md',
            '/docs/book/14.md',
            '/docs/book/15.md',
            '/docs/book/ap.md',
          ]
        }
        ]
      },
      '/docs/zh/': {
        selectText: '選擇語言',
        label: '简体中文',
        ariaLabel: '選擇語言',
        algolia: {},
        nav: [
          { text: '主页',  link: '/docs/zh/' },
          { text: '正文', link: '/docs/zh/book/' }
        ],
        sidebar:[
        {
          title: '目录',
          path: '/docs/zh/book/',
          collapsable: false,
          sidebarDepth: 1,
          displayAllHeaders: true,
          children: [
            '/docs/zh/book/0-1.md',
            '/docs/zh/book/0-2.md',
            '/docs/zh/book/1.md',
            '/docs/zh/book/2.md',
            '/docs/zh/book/3.md',
            '/docs/zh/book/4.md',
            '/docs/zh/book/5.md',
            '/docs/zh/book/6.md',
            '/docs/zh/book/7.md',
            '/docs/zh/book/8.md',
            '/docs/zh/book/9.md',
            '/docs/zh/book/10.md',
            '/docs/zh/book/11.md',
            '/docs/zh/book/12.md',
            '/docs/zh/book/13.md',
            '/docs/zh/book/14.md',
            '/docs/zh/book/15.md',
            '/docs/zh/book/ap.md',
          ]
        },
        ]
      }
    },
    lastUpdated: 'Last Updated',
    repo: 'reconsidera/reconsidera.github.io',
    repoLabel: '查看原碼',
    docsRepo: 'reconsidera/reconsidera.github.io',
    docsDir: '/docs/',
    docsBranch: 'main'
  }
}
