const categories = [
  { id: 'soccer', title: 'Soccer', description: 'Live matches, league cups, and international fixtures.', badge: 'Popular', count: 92 },
  { id: 'ufc', title: 'UFC', description: 'Pay-per-view cards and fight night streams with top fighters.', badge: 'Fight nights', count: 24 },
  { id: 'mma', title: 'MMA', description: 'Bellator, ONE Championship and global MMA event highlights.', badge: 'Live action', count: 19 },
  { id: 'football', title: 'American Football', description: 'NFL, college football and prime-time matchups.', badge: 'Gridiron', count: 38 },
  { id: 'basketball', title: 'Basketball', description: 'NBA, NCAA and international hoops broadcast windows.', badge: 'Hoops', count: 34 },
  { id: 'boxing', title: 'Boxing', description: 'World title fights, undercards, and boxing stream previews.', badge: 'Main events', count: 12 },
  { id: 'tennis', title: 'Tennis', description: 'Grand Slams, ATP, WTA and live court coverage.', badge: 'Grand Slam', count: 14 },
  { id: 'motorsports', title: 'Motorsports', description: 'Formula 1, NASCAR, rally and racing highlights.', badge: 'Racing', count: 16 },
];

const scheduleRecords = [
  { time: '18:00 GMT', event: 'Manchester United vs Liverpool', sport: 'Soccer', league: 'Premier League', status: 'Live', watchLink: '#', id: 'schedule-01' },
  { time: '19:00 GMT', event: 'Brazil vs Argentina', sport: 'Soccer', league: 'International Friendly', status: 'Upcoming', watchLink: '#', id: 'schedule-02' },
  { time: '20:00 GMT', event: 'UFC 310: Endgame', sport: 'UFC', league: 'Main Card', status: 'Upcoming', watchLink: '#', id: 'schedule-03' },
  { time: '20:45 GMT', event: 'Jon Jones vs Stipe Miocic', sport: 'MMA', league: 'Light Heavyweight', status: 'Upcoming', watchLink: '#', id: 'schedule-04' },
  { time: '21:15 GMT', event: 'Chiefs vs 49ers', sport: 'American Football', league: 'NFL Regular Season', status: 'Live', watchLink: '#', id: 'schedule-05' },
  { time: '22:30 GMT', event: 'Lakers vs Celtics', sport: 'Basketball', league: 'NBA', status: 'Upcoming', watchLink: '#', id: 'schedule-06' },
  { time: '23:00 GMT', event: 'F1 Miami Grand Prix', sport: 'Motorsports', league: 'Formula 1', status: 'Upcoming', watchLink: '#', id: 'schedule-07' },
  { time: '23:45 GMT', event: 'Bellator 320', sport: 'MMA', league: 'Bellator Card', status: 'Upcoming', watchLink: '#', id: 'schedule-08' },
  { time: '00:30 GMT', event: 'Nets vs Bucks', sport: 'Basketball', league: 'NBA', status: 'Upcoming', watchLink: '#', id: 'schedule-09' },
  { time: '02:00 GMT', event: 'Barcelona vs Real Madrid', sport: 'Soccer', league: 'La Liga', status: 'Upcoming', watchLink: '#', id: 'schedule-10' },
  { time: '03:30 GMT', event: 'Broncos vs Patriots', sport: 'American Football', league: 'NFL Night Game', status: 'Upcoming', watchLink: '#', id: 'schedule-11' },
  { time: '05:00 GMT', event: 'Wimbledon Finals', sport: 'Tennis', league: 'Grand Slam', status: 'Upcoming', watchLink: '#', id: 'schedule-12' },
];

const streams = [
  { id: 'stream-01', title: 'Manchester United vs Liverpool — Watch Window', sport: 'Soccer', description: 'Premier League clash with multiple free stream links available.', tags: ['Premier League', 'Live', 'HD'], source: 'soccer-01' },
  { id: 'stream-02', title: 'Brazil vs Argentina — Live Match', sport: 'Soccer', description: 'International friendly coverage, free worldwide stream.', tags: ['Friendly', 'Worldwide', 'HD'], source: 'soccer-02' },
  { id: 'stream-03', title: 'UFC 310: Endgame — Main Card', sport: 'UFC', description: 'Fight night stream guide for the main card and prelims.', tags: ['PPV', 'Fight Night', 'Live'], source: 'ufc-01' },
  { id: 'stream-04', title: 'Bellator 320 — Full Card', sport: 'MMA', description: 'Bellator event watch details with secondary channels.', tags: ['Bellator', 'Main Card', 'Live'], source: 'mma-01' },
  { id: 'stream-05', title: 'Chiefs vs 49ers — NFL Prime Time', sport: 'American Football', description: 'Live NFL game with alternate free broadcast sources.', tags: ['NFL', 'Live', 'Prime Time'], source: 'football-01' },
  { id: 'stream-06', title: 'Lakers vs Celtics — NBA Stream', sport: 'Basketball', description: 'NBA matchup watch window with commentary options.', tags: ['NBA', 'Live', 'HD'], source: 'basketball-01' },
  { id: 'stream-07', title: 'F1 Miami Grand Prix — Live Feed', sport: 'Motorsports', description: 'Formula 1 race feed and highlight replay lanes.', tags: ['F1', 'Race', 'Live'], source: 'motorsports-01' },
  { id: 'stream-08', title: 'Wimbledon Finals — Court Coverage', sport: 'Tennis', description: 'Grand Slam finals live court stream and score board.', tags: ['Tennis', 'Grand Slam', 'Finals'], source: 'tennis-01' },
];

const topEvents = [
  { title: 'Real Madrid vs Barcelona', sport: 'Soccer', league: 'La Liga', time: '23:30 GMT', description: 'El Clasico watch window and live stream options.' },
  { title: 'UFC 310 Main Event', sport: 'UFC', league: 'Main Event', time: '20:00 GMT', description: 'Jones vs Miocic live stream preview and event breakdown.' },
  { title: 'Chiefs vs 49ers', sport: 'American Football', league: 'NFL', time: '21:15 GMT', description: 'Prime time matchup with alternate channel sources.' },
  { title: 'Miami Grand Prix', sport: 'Motorsports', league: 'Formula 1', time: '23:00 GMT', description: 'Race day coverage with live timing and pit lane feeds.' },
];

const newsUpdates = [
  { title: 'New live stream sources added for UFC 310', summary: 'Multiple free stream windows are now available for the UFC fight night.', time: '5 minutes ago' },
  { title: 'Soccer schedule refreshed', summary: 'Updated international fixtures for Spain, England, and Italy.', time: '15 minutes ago' },
  { title: 'Live NFL watchlist enabled', summary: 'Saved NFL games will now persist across browser sessions.', time: '1 hour ago' },
  { title: 'Tennis Grand Slam watch guide released', summary: 'New coverage details for the upcoming Wimbledon finals.', time: '2 hours ago' },
];

const notifications = [
  { id: 'alert-001', title: 'Live score update', message: 'Real Madrid just scored against Liverpool.', time: '2 minutes ago', level: 'live' },
  { id: 'alert-002', title: 'Stream source refreshed', message: 'New free streams were added for the Champions League match.', time: '10 minutes ago', level: 'info' },
  { id: 'alert-003', title: 'Watchlist reminder', message: 'You have several saved events waiting in your watchlist.', time: '22 minutes ago', level: 'reminder' },
  { id: 'alert-004', title: 'Schedule change', message: 'UFC main card start time updated to 20:30 GMT.', time: '45 minutes ago', level: 'warning' },
];

const liveMetrics = [
  { title: 'Active watch windows', value: '148', note: 'Open stream pages available now' },
  { title: 'Saved items', value: '0', note: 'Your watchlist count updates live' },
  { title: 'Recent updates', value: '12', note: 'New streams and schedule changes' },
  { title: 'Site uptime', value: '99.9%', note: 'Service health for the current day' },
];

const categoryGrid = document.getElementById('categoryGrid');
const scheduleBody = document.getElementById('scheduleBody');
const streamGrid = document.getElementById('streamGrid');
const topEventsList = document.getElementById('topEventsList');
const watchlistGrid = document.getElementById('watchlistGrid');
const newsGrid = document.getElementById('newsGrid');
const scheduleSports = document.getElementById('scheduleSports');
const scheduleSearch = document.getElementById('scheduleSearch');
const searchButton = document.getElementById('openSearch');
const searchPanel = document.getElementById('searchPanel');
const searchClose = document.getElementById('closeSearch');
const globalSearch = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');
const viewScheduleButton = document.getElementById('viewSchedule');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const themeToggle = document.getElementById('themeToggle');
const nav = document.querySelector('.site-nav');
const menuToggle = document.getElementById('menuToggle');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseButton = document.getElementById('modalCloseButton');
const modalContent = document.getElementById('modalContent');
const notificationGrid = document.getElementById('notificationGrid');
const notificationsButton = document.getElementById('openNotifications');
const liveMetricsGrid = document.getElementById('liveMetricsGrid');

const storageKey = 'liveforlive-watchlist';
let watchlist = loadWatchlist();

function createCategoryCard(category) {
  const card = document.createElement('article');
  card.className = 'category-card';
  card.innerHTML = `
    <div class="category-label">${category.badge}</div>
    <h3>${category.title}</h3>
    <p>${category.description}</p>
    <div class="category-meta">
      <strong>${category.count} sources</strong>
      <button class="button button-secondary" data-category="${category.id}">Explore</button>
    </div>
  `;

  card.querySelector('button').addEventListener('click', () => filterByCategory(category.title));
  return card;
}

function renderCategories() {
  categoryGrid.innerHTML = '';
  categories.forEach((category) => categoryGrid.appendChild(createCategoryCard(category)));
}

function createScheduleRow(record) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${record.time}</td>
    <td>${record.event}</td>
    <td>${record.sport}</td>
    <td>${record.league}</td>
    <td><span class="schedule-status ${record.status.toLowerCase()}">${record.status}</span></td>
    <td><button class="button button-primary button-sm" data-stream="${record.watchLink}" data-event="${record.event}">Watch</button></td>
  `;

  row.querySelector('button').addEventListener('click', () => openWatchModal(record.event, record.watchLink));
  return row;
}

function renderSchedule(records) {
  scheduleBody.innerHTML = '';
  if (!records.length) {
    scheduleBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-row">No events match your search.</td>
      </tr>
    `;
    return;
  }

  records.forEach((record) => scheduleBody.appendChild(createScheduleRow(record)));
}

function populateSportFilter() {
  const uniqueSports = Array.from(new Set(scheduleRecords.map((record) => record.sport)));
  uniqueSports.forEach((sport) => {
    const option = document.createElement('option');
    option.value = sport.toLowerCase();
    option.textContent = sport;
    scheduleSports.appendChild(option);
  });
}

function filterSchedule() {
  const sportValue = scheduleSports.value;
  const query = scheduleSearch.value.trim().toLowerCase();

  const filtered = scheduleRecords.filter((record) => {
    const matchesSport = sportValue === 'all' || record.sport.toLowerCase() === sportValue;
    const text = `${record.event} ${record.league} ${record.sport}`.toLowerCase();
    const matchesQuery = query === '' || text.includes(query);
    return matchesSport && matchesQuery;
  });

  renderSchedule(filtered);
}

function createStreamCard(stream) {
  const card = document.createElement('article');
  card.className = 'stream-card';
  card.innerHTML = `
    <div class="stream-image">${stream.sport}</div>
    <div>
      <div class="stream-label">${stream.sport}</div>
      <h3>${stream.title}</h3>
      <p>${stream.description}</p>
    </div>
    <div class="stream-meta">
      ${stream.tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join('')}
    </div>
    <div class="stream-actions">
      <button class="button button-primary">Watch now</button>
      <button class="button button-secondary" data-id="${stream.id}">Save</button>
    </div>
  `;

  const [watchButton, saveButton] = card.querySelectorAll('button');
  watchButton.addEventListener('click', () => openWatchModal(stream.title, stream.source));
  saveButton.addEventListener('click', () => toggleWatchlist(stream));
  return card;
}

function renderStreams() {
  streamGrid.innerHTML = '';
  streams.forEach((stream) => streamGrid.appendChild(createStreamCard(stream)));
}

function createTopEventCard(event) {
  const card = document.createElement('article');
  card.className = 'top-event-card';
  card.innerHTML = `
    <div class="event-header">
      <div>
        <h3>${event.title}</h3>
        <p>${event.league}</p>
      </div>
      <span class="event-tag">${event.sport}</span>
    </div>
    <p>${event.description}</p>
    <div class="event-meta">
      <span>${event.time}</span>
      <button class="button button-secondary button-sm">Open stream</button>
    </div>
  `;

  card.querySelector('button').addEventListener('click', () => openWatchModal(event.title, '#'));
  return card;
}

function renderTopEvents() {
  topEventsList.innerHTML = '';
  topEvents.forEach((event) => topEventsList.appendChild(createTopEventCard(event)));
}

function createNewsCard(article) {
  const card = document.createElement('article');
  card.className = 'news-card';
  card.innerHTML = `
    <small>${article.time}</small>
    <h3>${article.title}</h3>
    <p>${article.summary}</p>
  `;
  return card;
}

function renderNews() {
  newsGrid.innerHTML = '';
  newsUpdates.forEach((article) => newsGrid.appendChild(createNewsCard(article)));
}

function renderNotifications() {
  notificationGrid.innerHTML = '';
  notifications.forEach((alert) => {
    const card = document.createElement('article');
    card.className = 'notification-card';
    card.dataset.level = alert.level;
    card.innerHTML = `
      <h3>${alert.title}</h3>
      <p>${alert.message}</p>
      <div class="notification-meta">
        <span>${alert.time}</span>
        <span>${alert.level.toUpperCase()}</span>
      </div>
    `;
    notificationGrid.appendChild(card);
  });
}

function renderLiveMetrics() {
  liveMetrics[1].value = String(watchlist.length || 0);
  liveMetricsGrid.innerHTML = '';
  liveMetrics.forEach((metric) => {
    const card = document.createElement('article');
    card.className = 'metric-card';
    card.innerHTML = `
      <h3>${metric.title}</h3>
      <p class="metric-value">${metric.value}</p>
      <p>${metric.note}</p>
    `;
    liveMetricsGrid.appendChild(card);
  });
}

function openNotificationsPanel() {
  document.getElementById('notifications').scrollIntoView({ behavior: 'smooth' });
}

function createWatchlistCard(stream) {
  const card = document.createElement('article');
  card.className = 'watchlist-card';
  card.innerHTML = `
    <div>
      <h3>${stream.title}</h3>
      <p>${stream.description}</p>
      <div class="stream-meta">${stream.tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join('')}</div>
    </div>
    <div class="watchlist-actions">
      <button class="button button-primary">Watch now</button>
      <button class="button button-secondary">Remove</button>
    </div>
  `;

  const [watchButton, removeButton] = card.querySelectorAll('button');
  watchButton.addEventListener('click', () => openWatchModal(stream.title, stream.source));
  removeButton.addEventListener('click', () => removeFromWatchlist(stream.id));
  return card;
}

function renderWatchlist() {
  watchlistGrid.innerHTML = '';
  if (!watchlist.length) {
    watchlistGrid.innerHTML = `
      <article class="watchlist-card">
        <h3>Your watchlist is empty</h3>
        <p>Save events by clicking the save button on any stream card.</p>
      </article>
    `;
    return;
  }

  watchlist.forEach((stream) => watchlistGrid.appendChild(createWatchlistCard(stream)));
}

function openWatchModal(title, source) {
  modalContent.innerHTML = `
    <div class="modal-header">
      <h2>${title}</h2>
      <p>Use the browser button to open the stream in a new tab.</p>
    </div>
    <div class="modal-video">
      <div class="preview-video">${source === '#' ? 'Stream preview' : 'Source page'}</div>
    </div>
    <div class="modal-details">
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Tip:</strong> choose the stream with the highest resolution for best playback.</p>
    </div>
    <div class="modal-actions">
      <button class="button button-primary" id="modalOpenChannel">Open channel</button>
      <button class="button button-secondary" id="modalCloseAction">Close</button>
    </div>
  `;

  document.getElementById('modalOpenChannel').addEventListener('click', () => {
    const url = source === '#' ? 'https://example.com/watch/' + encodeURIComponent(title) : source;
    window.open(url, '_blank');
  });
  document.getElementById('modalCloseAction').addEventListener('click', closeModal);
  modalBackdrop.classList.remove('hidden');
}

function closeModal() {
  modalBackdrop.classList.add('hidden');
  modalContent.innerHTML = '';
}

function loadWatchlist() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (error) {
    console.warn('Could not load watchlist:', error);
    return [];
  }
}

function saveWatchlist() {
  localStorage.setItem(storageKey, JSON.stringify(watchlist));
}

function toggleWatchlist(stream) {
  const exists = watchlist.some((item) => item.id === stream.id);
  if (exists) {
    watchlist = watchlist.filter((item) => item.id !== stream.id);
  } else {
    watchlist.push(stream);
  }
  saveWatchlist();
  renderWatchlist();
}

function removeFromWatchlist(streamId) {
  watchlist = watchlist.filter((item) => item.id !== streamId);
  saveWatchlist();
  renderWatchlist();
}

function filterByCategory(categoryName) {
  const lower = categoryName.toLowerCase();
  scheduleSports.value = lower === 'boxing' ? 'all' : lower;
  filterSchedule();
  document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
}

function openSearchPanel() {
  searchPanel.classList.remove('hidden');
  globalSearch.focus();
}

function closeSearchPanel() {
  searchPanel.classList.add('hidden');
  searchResults.innerHTML = '';
  globalSearch.value = '';
}

function renderSearchResults(query) {
  searchResults.innerHTML = '';
  if (!query.trim()) {
    searchResults.innerHTML = '<p class="empty-row">Enter a term to search all events and streams.</p>';
    return;
  }

  const lowercaseQuery = query.trim().toLowerCase();
  const matchedSchedule = scheduleRecords.filter((record) => {
    return `${record.event} ${record.sport} ${record.league}`.toLowerCase().includes(lowercaseQuery);
  });
  const matchedStreams = streams.filter((stream) => {
    return `${stream.title} ${stream.description} ${stream.sport}`.toLowerCase().includes(lowercaseQuery);
  });

  if (!matchedSchedule.length && !matchedStreams.length) {
    searchResults.innerHTML = '<p class="empty-row">No matches found for that query.</p>';
    return;
  }

  matchedSchedule.forEach((record) => {
    const card = document.createElement('article');
    card.className = 'search-result-card';
    card.innerHTML = `
      <h3>${record.event}</h3>
      <p>${record.sport} · ${record.league} · ${record.time}</p>
      <button class="button button-secondary button-sm">Open schedule</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
      closeSearchPanel();
    });
    searchResults.appendChild(card);
  });

  matchedStreams.forEach((stream) => {
    const card = document.createElement('article');
    card.className = 'search-result-card';
    card.innerHTML = `
      <h3>${stream.title}</h3>
      <p>${stream.sport} · ${stream.tags.join(', ')}</p>
      <button class="button button-primary button-sm">Open stream</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      openWatchModal(stream.title, stream.source);
      closeSearchPanel();
    });
    searchResults.appendChild(card);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('liveforlive-theme', theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme || 'dark';
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function initializeTheme() {
  const saved = localStorage.getItem('liveforlive-theme');
  applyTheme(saved || 'dark');
}

function registerEvents() {
  scheduleSports.addEventListener('change', filterSchedule);
  scheduleSearch.addEventListener('input', filterSchedule);
  viewScheduleButton.addEventListener('click', () => document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' }));
  searchButton.addEventListener('click', openSearchPanel);
  searchClose.addEventListener('click', closeSearchPanel);
  notificationsButton.addEventListener('click', openNotificationsPanel);
  globalSearch.addEventListener('input', (event) => renderSearchResults(event.target.value));
  menuToggle.addEventListener('click', () => nav.classList.toggle('show'));
  modalBackdrop.addEventListener('click', (event) => { if (event.target === modalBackdrop) closeModal(); });
  modalCloseButton.addEventListener('click', closeModal);
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`Thanks! We'll send updates to ${newsletterEmail.value}.`);
    newsletterEmail.value = '';
  });
  themeToggle.addEventListener('click', toggleTheme);
  window.addEventListener('storage', () => {
    watchlist = loadWatchlist();
    renderWatchlist();
    renderLiveMetrics();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement.tagName !== 'INPUT') {
      event.preventDefault();
      globalSearch.focus();
    }
    if (event.key === 'Escape') {
      closeSearchPanel();
    }
  });
}

function initializePage() {
  renderCategories();
  populateSportFilter();
  renderSchedule(scheduleRecords);
  renderStreams();
  renderTopEvents();
  renderNews();
  renderNotifications();
  renderLiveMetrics();
  renderWatchlist();
  initializeTheme();
  registerEvents();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service worker registered:', registration.scope);
      }).catch(function(error) {
        console.warn('Service worker registration failed:', error);
      });
    });
  }
}

initializePage();
registerServiceWorker();
