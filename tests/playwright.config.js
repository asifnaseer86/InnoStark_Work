const config = {
  timeout: 5 * 60 * 1000,
  use: {
    headless: false,
    baseURL: "https://consult-au.test.attend.vc",
    permissions: ["camera", "microphone"],

    channel: 'chrome',
    args: [
      '--use-fake-ui-for-media-stream',
      '--use-fake-device-for-media-stream',
    ]

  },
};

module.exports = config;