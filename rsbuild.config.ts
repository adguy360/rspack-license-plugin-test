import { defineConfig } from '@rsbuild/core';
import LicensePlugin from 'webpack-license-plugin';

export default defineConfig({
  server: {
    open: '/rsbuild-dev-server',
  },
  tools: {
    rspack: {
      plugins: [
        new LicensePlugin({
          outputFilename: 'licenses.json',
          unacceptableLicenseTest: (licenseType: string) => /^(?!.*MIT).*GPL/gi.test(licenseType),
        }),
      ],
    },
  },
});
