
const staticAssets = [
  './',
  './css/master.css',
  './js/app.js',
]

self.addEventListener('install',async event => {
  const cache = await caches.open('todoist-statis');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch',event => {
  console.log('fetch');
});
