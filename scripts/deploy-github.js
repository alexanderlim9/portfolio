const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:alexanderlim9/portfolio.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)