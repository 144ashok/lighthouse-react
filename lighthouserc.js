module.exports = {
  ci: {
    collect: {
      // as
      // url: ['http://localhost/3000'],
      numberOfRuns: 1,
      staticDistDir: "./build",
      // startServerCommand: 'npm start',
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        'categories:accessibility': ['error', {minScore: 92}],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};