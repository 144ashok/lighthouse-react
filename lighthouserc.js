module.exports = {
  ci: {
    collect: {
      "url": [
        "https://csaba.page/",
        "https://csaba.page/about.html",
        "https://csaba.page/blog/",
        "https://csaba.page/blog/suunto-under-armour-integrations.html"
      ],
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