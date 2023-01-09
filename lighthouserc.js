module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./build",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
        'categories:accessibility': ['error', {minScore: 95}],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};