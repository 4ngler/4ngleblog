import { defineConfig } from 'vitepress'
import { Nav } from './config/nav'
import { Sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/',
  
  title: '4ngle’s Blog',
  
  description: '记录我的学习笔记',
  
  lastUpdated: true, // string | 
  
  head: [ // 网站图标
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ],

  themeConfig: {
    
    // 导航上的logo
    logo: '/logo.png',

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: Nav,

    sidebar: Sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/4ngler/4ngleblog' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 build by vitepress | write by 4ngle'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/4ngler/4ngleblog', // 自己项目仓库地址
      text: '在 github 上编辑此页',
    },
    lastUpdatedText: '最后更新', // string
  }
})
