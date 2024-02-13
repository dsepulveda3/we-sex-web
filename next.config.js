// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  importScripts: ['worker.js'],
  register: true,
})

module.exports = withPWA({
  // next.js config
})