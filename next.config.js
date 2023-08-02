
// next.config.js


module.exports = {
  // Other Next.js configurations can go here...
  // ...
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    sw: 'sw.js',
    // Add the path to your manifest file here
    // The manifest file should be located in the public folder
    manifest: '/manifest.json',
  },
};
