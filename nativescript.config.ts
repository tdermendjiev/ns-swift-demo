import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsswiftdemo',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  ios: {
    experimentalSPMPackages: [
      {
        name: 'LocalConsole',
        libs: [],
        repositoryURL: 'https://github.com/duraidabdul/LocalConsole.git',
        version: '1.12.1'
      }
    ]
  },
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;