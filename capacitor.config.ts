import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.momspride.billing',
  appName: "Mom's Pride Billing",
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#fffaf4'
  }
};

export default config;
