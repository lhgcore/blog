module.exports = {
    theme: 'yubisaki',
    title: 'LHG', 
    description: `我的个人技术博客`,
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: '/blog/',
    dest: './docs/.vuepress/dist',
    ga: '',
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        github: 'lhgcore',
        logo: '/img/logo.png',
        accentColor: '#2196f3',
        per_page: 6,
        date_format: 'yyyy-MM-dd',
        tags: true,
        comment: {
            clientID: 'ae44f8d98bd8cc8a465b',
            clientSecret: '18b7f2b185aa181fc28aa9d87a9d14073b7b6e9c',
            repo: 'blog',  // blog of repo name
            owner: 'lhgcore',  // github of name
            admin: 'lhgcore', // github of name
            distractionFreeMode: false
        },
        nav: [
            {text: '首页', link: '/', root: true},
            {text: '标签', link: '/tags/', tags: true},
            {text: '关于我', link: '/about/'},
            {text: 'GITHUB', link: 'https://github.com/lhgcore'}
        ]
    },
    markdown: {
        anchor: {
            permalink: true
        },
        toc: {
            includeLevel: [1, 2]
        },
        config: md => {
            // 使用更多 markdown-it 插件！
            md.use(require('markdown-it-task-lists'))
            .use(require('markdown-it-imsize'), { autofill: true })
        }
    },
    postcss: {
        plugins: [require('autoprefixer')]
    }
}

