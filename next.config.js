// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  importScripts: ['/worker.js'],
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // next.js config
})
