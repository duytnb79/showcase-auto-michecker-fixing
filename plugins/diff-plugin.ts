// diffPlugin.ts
 

import * as diff from 'diff'

export default defineNuxtPlugin((nuxtApp) => {
    // if (nuxtApp.vueApp) {
    //   nuxtApp.vueApp.config.globalProperties.$diff = diff;
    //   console.log('Diff', nuxtApp.vueApp.config.globalProperties.$diff);
    // } else {
    //   console.error('Vue app is undefined.');
    // }
    return {
      provide: {
          diff: diff
      }
  }

  
  });