# LiveForLive

A demo static website concept for `LiveForLive`, a free sports and live event aggregator site.

## Features

- Browse the main live sports categories
- Filter upcoming schedule by sport and search terms
- Explore featured stream cards and trending events
- Open a modal with watch details for every source
- Save favorites in a persistent watchlist
- Search across schedules, streams, and notifications
- Dark/light theme switching and PWA manifest support
- Service worker caching for offline-friendly loading

## Files

- `index.html` — main landing page, content sections, navigation, and markup structure
- `styles.css` — styling for layout, components, responsiveness, and UI states
- `app.js` — application logic for rendering, filtering, search, watchlist, notifications, and events
- `scripts/site-utils.js` — utility helpers, local storage wrappers, query matching, and DOM helpers
- `data/stream-data.js` — rich sample dataset for categories, schedules, streams, trending events, and notifications
- `manifest.webmanifest` — PWA metadata, icons, and shortcuts for installable behavior
- `service-worker.js` — caching strategy, offline fallback, push notification stubs, and sync support

## How to use

1. Open the folder in VS Code.
2. Open `index.html` in the browser or use a local server extension.
3. Customize the arrays in `data/stream-data.js` or `app.js` to add new streams, schedules, and notifications.
4. Use the `Search` button to search all events and streams.
5. Use the `Alerts` button to view live notifications and site updates.

## Development Notes

- `index.html` contains the page structure, hidden panels, and PWA manifest link.
- `styles.css` includes both dark and light theme rules, plus responsive breakpoints.
- `app.js` maintains the event loop, renders dynamic content, and registers page interactions.
- `scripts/site-utils.js` contains reusable helpers used across the page.
- `service-worker.js` caches the site shell and handles fetch requests with dynamic cache updates.

## Local testing

- Use a simple server extension in VS Code or run a local static server from the folder.
- Verify the PWA manifest by opening developer tools and inspecting the `Application` tab.
- Check service worker registration and cache behavior in the browser dev tools.

## Notes

This is a front-end demo site. In production, you would replace static arrays with a backend API for live schedules, streaming source discovery, event metadata, and authentication. 
