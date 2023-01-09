module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: "./public",
      "settings": {
        "emulatedFormFactor": "desktop",
        "disableDeviceEmulation": true,
        "disableCpuThrottling": true,
        "disableNetworkThrottling": true,
        "throttlingMethod": "provided"
    }
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};