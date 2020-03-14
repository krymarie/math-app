// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'math-app',
        // URL to the GraphQL API
  uri:'http://localhost:8000/graphql'
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }