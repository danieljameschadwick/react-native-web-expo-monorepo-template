const STAGE = process.env.STAGE;
const SCHEME = process.env.SCHEME ?? "com.group.app-name";

const envConfig = {
  development: {
    scheme: `${SCHEME}`,
    icon: "./assets/icon.development.png",
    backgroundColor: "#FF0000"
  },
  staging: {
    scheme: `${SCHEME}`,
    icon: "./assets/icon.staging.png",
    backgroundColor: "#8000FF"
  },
  production: {
    scheme: SCHEME,
    icon: "./assets/icon.png",
    backgroundColor: "#1610FF"
  }
};

const config = envConfig[STAGE ?? "development"];

export default {
  name: "app-name",
  description: "",
  slug: "example",
  scheme: "example",
  icon: config.icon,
  version: "0.0.1",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#000000"
  },
  ios: {
    bundleIdentifier: config.scheme,
    supportsTablet: true,
    jsEngine: "hermes"
  },
  android: {
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: config.backgroundColor
    },
    jsEngine: "hermes"
  },
  androidNavigationBar: {
    barStyle: "dark-content",
    backgroundColor: "#FFFFFF"
  },
  assetBundlePatterns: ["**/*"],
  orientation: "portrait",
  updates: {
    fallbackToCacheTimeout: 0
  },
  // hooks: {
  //   postPublish: [
  //     {
  //       file: 'sentry-expo/upload-sourcemaps',
  //       config: {}
  //     }
  //   ]
  // },
  extra: {
    STAGE: process.env.STAGE
  }
  // plugins: ['sentry-expo']
};
