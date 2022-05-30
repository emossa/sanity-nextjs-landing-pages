export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6294d0d9fe985441dfb83a03',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u7ktuofc',
                  apiId: 'ff6e2b7d-d04c-4436-9edd-ae0cad4968b2'
                },
                {
                  buildHookId: '6294d0d9b52d8631cd02e57c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7fjgqs2w',
                  apiId: '7b2eb733-a982-432c-a62a-6bfd9c5a787c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emossa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7fjgqs2w.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
