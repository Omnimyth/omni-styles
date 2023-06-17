import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from '@vuepress/theme-default';
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { getDirname, path } from '@vuepress/utils'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Component Library',
    // description: 'Just playing around',
    theme: defaultTheme({
        // public file path
        logo: '/images/logo.png',
        navbar: [
            {
                text: 'Intro',
                link: '/intro/',
            },
            {
                text: 'Styles',
                children: [
                    {
                        text: 'Overview',
                        link: '/styles/'
                    },
                    "/styles/colors/",
                    "/styles/typography/",
                ],
            },
            // NavbarGroup
            {
                text: 'Components',
                children: [
                    {
                        text: 'Overview',
                        link: '/components/'
                    },
                    '/components/buttons.md',
                    '/components/swatches.md',
                ],
            },
        ],
        sidebar: {
            '/intro/': [
                '/intro/',
                '/intro/quickstart/'
            ],
            '/components/': [
                '/components/',
                {
                    text: "Library",
                    children: [
                        '/components/buttons.md',
                        '/components/swatches.md',
                    ]
                }
            ],
            '/styles/': [
                '/styles/',
                {
                    text: "Library",
                    children: [
                        '/styles/colors/',
                        '/styles/typography/'
                    ]
                }
            ],
        },
        sidebarDepth: 1,
        smoothScroll: true
    }),
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/images/favicon.png'
            }
        ]
    ],
    plugins: [
        searchPlugin({
            // options
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, '../../src/components/')
        }),
        shikiPlugin({
            theme: 'github-dark'
        }),
    ]
})