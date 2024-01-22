// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  importScripts: ['worker.js'],
  register: false,
})

module.exports = withPWA({
  // next.js config
})