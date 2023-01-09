module.exports ={
    "ci": {
      "collect": {
        "url": [
          "https://csaba.page/",
          "https://csaba.page/about.html",
          "https://csaba.page/blog/",
          "https://csaba.page/blog/suunto-under-armour-integrations.html"
        ],
        "numberOfRuns": 1,
        "staticDistDir": "./public",
        "settings": {
            "emulatedFormFactor": "desktop",
            "disableStorageReset": "view",
            "disableDeviceEmulation": true,
            "disableCpuThrottling": true,
            "disableNetworkThrottling": true,
            "throttlingMethod": "provided"
        }
      },
      "assert": {
        "preset": "lighthouse:recommended",
        "assertions": {
          "first-contentful-paint": [
            "warn",
            {
              "maxNumericValue": 2500,
              "aggregationMethod": "optimistic"
            }
          ],
          "interactive": [
            "warn",
            {
              "maxNumericValue": 5000,
              "aggregationMethod": "optimistic"
            }
          ],
          "uses-long-cache-ttl": "off",
          "uses-http2": "off"
        }
      },
      "upload": {
        "target": "temporary-public-storage"
      }
    }
  }