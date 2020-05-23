export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec9767fc94566ee065a1cdb',
                  title: 'Sanity Studio',
                  name: 'jorge-press-studio',
                  apiId: '59cb0ef5-52e9-433c-94d5-0479721d0427'
                },
                {
                  buildHookId: '5ec9767fc16d84362450e27b',
                  title: 'Blog Website',
                  name: 'jorge-press',
                  apiId: 'a08e3e66-7cd3-430d-bf50-6e42eb4e3d6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorge-alegre/jorge-press',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jorge-press.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
