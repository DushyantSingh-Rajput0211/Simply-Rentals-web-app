// sw.js
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

// Use a NavigationRoute for offline navigation fallback
const navigationRoute = new NavigationRoute(({ event }) => {
  return new Response('', { headers: { 'Content-Type': 'text/html' } });
});
registerRoute(navigationRoute);

// Cache API responses with StaleWhileRevalidate strategy
registerRoute(
  ({ url }) => url.origin.includes('api'),
  new StaleWhileRevalidate()
);
