import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zeno Chatbot',
  description: 'AI-powered chatbot solution for WordPress',
  base: '/zeno-docs/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Figtree:wght@400;500;600&display=swap' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Pro Version',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Dashboard', link: '/dashboard' },
          { text: 'Settings', link: '/settings/general' },
        ],
      },
      {
        text: 'Free Version',
        items: [
          { text: 'Getting Started', link: '/free/getting-started' },
          { text: 'Dashboard', link: '/free/dashboard' },
          { text: 'Settings', link: '/free/settings/general' },
        ],
      },
    ],

    sidebar: {
      '/free/': [
        {
          text: '🆓 Free Version',
          items: [
            { text: 'What is Zeno Chatbot?', link: '/free/getting-started' },
            { text: 'Dashboard Overview', link: '/free/dashboard' },
          ],
        },
        {
          text: 'Settings',
          items: [
            { text: 'General Settings', link: '/free/settings/general' },
            { text: 'LLM Settings', link: '/free/settings/llm' },
            { text: 'Chat Settings', link: '/free/settings/chat' },
            { text: 'Conversation Settings', link: '/free/settings/conversation' },
            { text: 'Email Settings', link: '/free/settings/email' },
            { text: 'Saved Replies', link: '/free/settings/saved-replies' },
            {
              text: 'Data Source',
              link: '/free/settings/data-source/',
              items: [
                { text: 'Internal Content', link: '/free/settings/data-source/internal-content' },
                { text: 'External Sources', link: '/free/settings/data-source/external-sources' },
                { text: 'Resources', link: '/free/settings/data-source/resources' },
                { text: 'Knowledge Notes', link: '/free/settings/data-source/knowledge-notes' },
              ],
            },
          ],
        },
        {
          text: '⭐ Upgrade to Pro',
          items: [
            { text: 'View Pro Documentation', link: '/getting-started' },
          ],
        },
      ],

      '/': [
        {
          text: '⭐ Pro Version',
          items: [
            { text: 'What is Zeno Chatbot?', link: '/getting-started' },
            { text: 'Dashboard Overview', link: '/dashboard' },
          ],
        },
        {
          text: 'Settings',
          items: [
            { text: 'General Settings', link: '/settings/general' },
            { text: 'LLM Settings', link: '/settings/llm' },
            { text: 'Chat Settings', link: '/settings/chat' },
            { text: 'Conversation Settings', link: '/settings/conversation' },
            { text: 'Email Settings', link: '/settings/email' },
            { text: 'Saved Replies', link: '/settings/saved-replies' },
            {
              text: 'Data Source',
              link: '/settings/data-source/',
              items: [
                { text: 'Internal Content', link: '/settings/data-source/internal-content' },
                { text: 'External Sources', link: '/settings/data-source/external-sources' },
                { text: 'Resources', link: '/settings/data-source/resources' },
                { text: 'Knowledge Notes', link: '/settings/data-source/knowledge-notes' },
              ],
            },
          ],
        },
        {
          text: '🆓 Free Version',
          items: [
            { text: 'View Free Documentation', link: '/free/getting-started' },
          ],
        },
      ],
    },

    socialLinks: [],

    footer: {
      message: 'Zeno Chatbot Documentation',
    },

    search: {
      provider: 'local',
    },
  },
})
