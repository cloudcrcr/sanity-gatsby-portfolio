export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61245fae73197436f7effdcf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qfykfsry',
                  apiId: 'b5a08d2e-97ec-4715-bee4-7f16c81885d7'
                },
                {
                  buildHookId: '61245fae08efed3da1ba2c80',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ztc8ybgq',
                  apiId: '7a141704-6a41-4628-809a-e4aa95922513'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cloudcrcr/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ztc8ybgq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
