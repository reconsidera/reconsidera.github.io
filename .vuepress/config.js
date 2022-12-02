module.exports = {
  base:'/',
  locales: {
    '/': {
      lang: 'zh-hk',
      title: '數字極權時代生存手記'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '数字极权时代生存手记'
    },
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '繁體中文',
        lastUpdated: '上次更新',
        ariaLabel: '选择语言',
        algolia: {},
        nav: [
          { text: '主頁',  link: '/' },
          { text: '正文', link: '/book/' }
        ],
        sidebar:[
        {
          title: '目錄',
          path: '/book/',
          collapsable: false,
          sidebarDepth: 1,
          displayAllHeaders: true,
          children: [
            '/book/0-1.md',
            '/book/0-2.md',
            '/book/1.md',
            '/book/2.md',
            '/book/3.md',
            '/book/4.md',
            '/book/5.md',
            '/book/6.md',
            '/book/7.md',
            '/book/8.md',
            '/book/9.md',
            '/book/10.md',
            '/book/11.md',
            '/book/12.md',
            '/book/13.md',
            '/book/14.md',
            '/book/15.md',
            '/book/ap.md',
          ]
        }
        ]
      },
      '/zh/': {
        selectText: '選擇語言',
        label: '简体中文',
        ariaLabel: '選擇語言',
        lastUpdated: '上次更新',
        algolia: {},
        nav: [
          { text: '主页',  link: '/zh/' },
          { text: '正文', link: '/zh/book/' }
        ],
        sidebar:[
        {
          title: '目录',
          path: '/zh/book/',
          collapsable: false,
          sidebarDepth: 1,
          displayAllHeaders: true,
          children: [
            '/zh/book/0-1.md',
            '/zh/book/0-2.md',
            '/zh/book/1.md',
            '/zh/book/2.md',
            '/zh/book/3.md',
            '/zh/book/4.md',
            '/zh/book/5.md',
            '/zh/book/6.md',
            '/zh/book/7.md',
            '/zh/book/8.md',
            '/zh/book/9.md',
            '/zh/book/10.md',
            '/zh/book/11.md',
            '/zh/book/12.md',
            '/zh/book/13.md',
            '/zh/book/14.md',
            '/zh/book/15.md',
            '/zh/book/ap.md',
          ]
        },
        ]
      }
    },
    repo: 'reconsidera/reconsidera.github.io',
    repoLabel: '查看原碼',
    docsRepo: 'reconsidera/reconsidera.github.io',
    docsDir: 'reconsidera.github.io',
    docsBranch: 'main'
  }
}
