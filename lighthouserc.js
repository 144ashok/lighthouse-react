module.exports ={
    "ci": {
      "collect": {
        "url": [
          'https://mediregs.stg.lynx-app.com'
          // "https://csaba.page/",
          // "https://csaba.page/about.html",
          // "https://csaba.page/blog/",
          // "https://csaba.page/blog/suunto-under-armour-integrations.html"
        ],
        "puppeteerScript": "login-script.js",
        "puppeteerLaunchOptions": {defaultViewport: null, args:["--disable-gpu --window-size=1920,1080", "--no-sandbox"], headless: true},
        "numberOfRuns": 1,
        // "staticDistDir": "./build",
        // "settings": {
        //     "emulatedFormFactor": "desktop",
        //     "disableStorageReset": "view",
        //     "disableDeviceEmulation": true,
        //     "disableCpuThrottling": true,
        //     "disableNetworkThrottling": true,
        //     "throttlingMethod": "provided"
        // }
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};