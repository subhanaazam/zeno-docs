import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zeno Chatbot',
  description: 'AI-powered chatbot solution for WordPress',
  base: '/zeno-docs/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Dashboard', link: '/dashboard' },
      { text: 'Settings', link: '/settings/general' },
    ],

    sidebar: [
      {
        text: 'Introduction',
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
    ],

    socialLinks: [],

    footer: {
      message: 'Zeno Chatbot Documentation',
    },

    search: {
      provider: 'local',
    },
  },
})
