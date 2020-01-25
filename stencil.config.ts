import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{
    type: 'dist',
  }],
  // globalScript: 'src/global/test/app.ts',
  // globalStyle: 'src/global/test/app.css',
  namespace: "test"
};
