/*
  LiveForLive sample stream data.
  This data file contains a large set of sports categories, schedule records, stream sources, and trending events.
  It is intentionally verbose and contains many entries to match the request for long, rich code content.
*/

window.LIVEFORLIVE_DATA = window.LIVEFORLIVE_DATA || {};

LIVEFORLIVE_DATA.categories = [
  { id: 'soccer', title: 'Soccer', description: 'Live matches, European leagues, and world tournaments for football fans.', icon: '⚽', badge: 'Popular', sourceCount: 96 },
  { id: 'ufc', title: 'UFC', description: 'Mixed martial arts pay-per-view and fight nights with free watch guides.', icon: '🥊', badge: 'Fight nights', sourceCount: 27 },
  { id: 'mma', title: 'MMA', description: 'Global unsanctioned events, Bellator, ONE Championship and more.', icon: '🥋', badge: 'Live action', sourceCount: 21 },
  { id: 'football', title: 'American Football', description: 'NFL, NCAA and championship games with alternate stream sources.', icon: '🏈', badge: 'Gridiron', sourceCount: 45 },
  { id: 'basketball', title: 'Basketball', description: 'NBA, WNBA, NCAA and international hoops live stream panels.', icon: '🏀', badge: 'Hoops', sourceCount: 38 },
  { id: 'boxing', title: 'Boxing', description: 'World title fights, undercards and boxing preview streams.', icon: '🥊', badge: 'Main events', sourceCount: 19 },
  { id: 'tennis', title: 'Tennis', description: 'Grand Slams, majors and ATP/WTA tournament coverage.', icon: '🎾', badge: 'Grand Slam', sourceCount: 18 },
  { id: 'motorsports', title: 'Motorsports', description: 'Formula 1, NASCAR, rally and endurance racing watch windows.', icon: '🏎️', badge: 'Racing', sourceCount: 24 },
  { id: 'hockey', title: 'Hockey', description: 'NHL and international ice hockey live streams and highlights.', icon: '🥅', badge: 'Puck drop', sourceCount: 22 },
  { id: 'cricket', title: 'Cricket', description: 'Test matches, one-day internationals and T20 cricket live coverage.', icon: '🏏', badge: 'World Cup', sourceCount: 15 },
  { id: 'combat-sports', title: 'Combat Sports', description: 'Kickboxing, Muay Thai, and combat leagues across the world.', icon: '🥊', badge: 'Hard hits', sourceCount: 12 },
  { id: 'esports', title: 'Esports', description: 'Competitive gaming events, live tournaments, and stream aggregators.', icon: '🎮', badge: 'Digital arena', sourceCount: 31 },
  { id: 'baseball', title: 'Baseball', description: 'MLB, college baseball and Japanese professional baseball streams.', icon: '⚾', badge: 'Diamond', sourceCount: 14 },
  { id: 'formula1', title: 'Formula 1', description: 'F1 race weekends, qualifying, and practice session watch guides.', icon: '🏁', badge: 'Speed', sourceCount: 13 },
  { id: 'college-sports', title: 'College Sports', description: 'NCAA teams across football, basketball, hockey, and more.', icon: '🎓', badge: 'Campus', sourceCount: 29 },
  { id: 'rugby', title: 'Rugby', description: 'Rugby Union and Rugby League stream listings around the world.', icon: '🏉', badge: 'Scrum', sourceCount: 11 },
  { id: 'athletics', title: 'Athletics', description: 'Track and field meets, championships, and live competition streams.', icon: '🏃', badge: 'Field', sourceCount: 10 },
  { id: 'golf', title: 'Golf', description: 'PGA Tour, majors, and golf tournament coverage reserve pages.', icon: '⛳', badge: 'Fairway', sourceCount: 8 },
  { id: 'wrestling', title: 'Wrestling', description: 'WWE, AEW, NJPW, and pro wrestling stream guides.', icon: '🤼', badge: 'Main event', sourceCount: 20 },
  { id: 'volleyball', title: 'Volleyball', description: 'Indoor and beach volleyball matches and international play.', icon: '🏐', badge: 'Spikes', sourceCount: 6 },
];

LIVEFORLIVE_DATA.scheduleRecords = [
  { id: 'sched-soccer-001', time: '16:00 GMT', event: 'Manchester United vs Chelsea', sport: 'Soccer', league: 'Premier League', status: 'Live', venue: 'Old Trafford', source: 'mufc-chelsea-stream' },
  { id: 'sched-soccer-002', time: '18:30 GMT', event: 'Brazil vs Argentina', sport: 'Soccer', league: 'International Friendly', status: 'Upcoming', venue: 'Maracana', source: 'brazil-argentina-watch' },
  { id: 'sched-soccer-003', time: '20:00 GMT', event: 'Barcelona vs Real Madrid', sport: 'Soccer', league: 'La Liga', status: 'Upcoming', venue: 'Camp Nou', source: 'el-clasico-stream' },
  { id: 'sched-soccer-004', time: '22:00 GMT', event: 'Liverpool vs PSG', sport: 'Soccer', league: 'Champions League', status: 'Upcoming', venue: 'Anfield', source: 'liverpool-psg-feed' },
  { id: 'sched-soccer-005', time: '23:15 GMT', event: 'Juventus vs Inter', sport: 'Soccer', league: 'Serie A', status: 'Upcoming', venue: 'Allianz Stadium', source: 'juve-inter-watch' },
  { id: 'sched-ufc-001', time: '01:00 GMT', event: 'UFC 310 Main Card', sport: 'UFC', league: 'Main Event', status: 'Upcoming', venue: 'T-Mobile Arena', source: 'ufc-310-main' },
  { id: 'sched-ufc-002', time: '01:45 GMT', event: 'Jon Jones vs Stipe Miocic', sport: 'UFC', league: 'Heavyweight Title', status: 'Upcoming', venue: 'Las Vegas', source: 'jones-miocic-live' },
  { id: 'sched-mma-001', time: '02:30 GMT', event: 'Bellator 320 Main Card', sport: 'MMA', league: 'Bellator', status: 'Upcoming', venue: 'SAP Center', source: 'bellator-320-watch' },
  { id: 'sched-mma-002', time: '03:15 GMT', event: 'ONE Championship: Dynasty', sport: 'MMA', league: 'ONE', status: 'Upcoming', venue: 'Singapore Indoor Stadium', source: 'one-dynasty-stream' },
  { id: 'sched-football-001', time: '03:45 GMT', event: 'Chiefs vs 49ers', sport: 'American Football', league: 'NFL Regular Season', status: 'Live', venue: 'Arrowhead Stadium', source: 'nfl-prime' },
  { id: 'sched-basketball-001', time: '04:00 GMT', event: 'Lakers vs Celtics', sport: 'Basketball', league: 'NBA', status: 'Upcoming', venue: 'Crypto.com Arena', source: 'lakers-celtics-watch' },
  { id: 'sched-motorsports-001', time: '05:00 GMT', event: 'F1 Miami Grand Prix', sport: 'Motorsports', league: 'Formula 1', status: 'Upcoming', venue: 'Miami International Autodrome', source: 'f1-miami-race' },
  { id: 'sched-tennis-001', time: '06:00 GMT', event: 'Wimbledon Finals', sport: 'Tennis', league: 'Grand Slam', status: 'Upcoming', venue: 'All England Club', source: 'wimbledon-finals' },
  { id: 'sched-hockey-001', time: '23:30 GMT', event: 'Maple Leafs vs Canadiens', sport: 'Hockey', league: 'NHL', status: 'Upcoming', venue: 'Scotiabank Arena', source: 'nhl-root' },
  { id: 'sched-cricket-001', time: '07:00 GMT', event: 'India vs Australia', sport: 'Cricket', league: 'Test Match', status: 'Upcoming', venue: 'Melbourne Cricket Ground', source: 'india-aus-test' },
  { id: 'sched-baseball-001', time: '00:30 GMT', event: 'Yankees vs Red Sox', sport: 'Baseball', league: 'MLB', status: 'Upcoming', venue: 'Yankee Stadium', source: 'mlb-yankees-redsox' },
  { id: 'sched-rugby-001', time: '08:30 GMT', event: 'All Blacks vs Wallabies', sport: 'Rugby', league: 'Test Match', status: 'Upcoming', venue: 'Eden Park', source: 'allblacks-wallabies' },
  { id: 'sched-wrestling-001', time: '09:00 GMT', event: 'WWE SummerSlam', sport: 'Wrestling', league: 'WWE', status: 'Upcoming', venue: 'RingCentral Coliseum', source: 'wwe-summerslam' },
  { id: 'sched-boxing-001', time: '10:00 GMT', event: 'Canelo Alvarez vs Charlo', sport: 'Boxing', league: 'Super Middleweight', status: 'Upcoming', venue: 'T-Mobile Arena', source: 'canelo-charlo-stream' },
  { id: 'sched-esports-001', time: '11:00 GMT', event: 'LoL World Championship', sport: 'Esports', league: 'Riot Games', status: 'Upcoming', venue: 'Shanghai Arena', source: 'lol-worlds-stream' },
  { id: 'sched-college-001', time: '12:00 GMT', event: 'Michigan vs Ohio State', sport: 'College Sports', league: 'NCAA Football', status: 'Upcoming', venue: 'Michigan Stadium', source: 'big-ten-watch' },
  { id: 'sched-athletics-001', time: '13:30 GMT', event: 'Diamond League Finals', sport: 'Athletics', league: 'IAAF', status: 'Upcoming', venue: 'Olympic Stadium', source: 'diamond-league-live' },
  { id: 'sched-golf-001', time: '14:00 GMT', event: 'The Masters Day 1', sport: 'Golf', league: 'PGA Tour', status: 'Upcoming', venue: 'Augusta National', source: 'masters-day1' },
  { id: 'sched-volleyball-001', time: '15:00 GMT', event: 'Brazil vs Serbia', sport: 'Volleyball', league: 'Nations League', status: 'Upcoming', venue: 'O2 Arena', source: 'volleyball-nations' },
  { id: 'sched-soccer-006', time: '16:45 GMT', event: 'Paris Saint-Germain vs Bayern Munich', sport: 'Soccer', league: 'Champions League', status: 'Upcoming', venue: 'Parc des Princes', source: 'psg-bayern-live' },
  { id: 'sched-soccer-007', time: '17:30 GMT', event: 'AC Milan vs Napoli', sport: 'Soccer', league: 'Serie A', status: 'Upcoming', venue: 'San Siro', source: 'milan-napoli-watch' },
  { id: 'sched-soccer-008', time: '18:15 GMT', event: 'Bayern Munich vs Borussia Dortmund', sport: 'Soccer', league: 'Bundesliga', status: 'Upcoming', venue: 'Allianz Arena', source: 'der-klasik-stream' },
  { id: 'sched-soccer-009', time: '19:00 GMT', event: 'PSG vs Marseille', sport: 'Soccer', league: 'Ligue 1', status: 'Upcoming', venue: 'Parc des Princes', source: 'psg-om-watch' },
  { id: 'sched-soccer-010', time: '20:15 GMT', event: 'Manchester City vs Arsenal', sport: 'Soccer', league: 'Premier League', status: 'Upcoming', venue: 'Etihad Stadium', source: 'mancity-arsenal' },
  { id: 'sched-esports-002', time: '21:00 GMT', event: 'CS:GO Major Finals', sport: 'Esports', league: 'Valve', status: 'Upcoming', venue: 'Berlin', source: 'csgo-major-live' },
  { id: 'sched-cricket-002', time: '22:30 GMT', event: 'England vs New Zealand', sport: 'Cricket', league: 'T20', status: 'Upcoming', venue: 'Lord\'s Cricket Ground', source: 'eng-nz-t20' },
  { id: 'sched-baseball-002', time: '23:45 GMT', event: 'Dodgers vs Giants', sport: 'Baseball', league: 'MLB', status: 'Upcoming', venue: 'Dodger Stadium', source: 'dodgers-giants-watch' },
  { id: 'sched-motorsports-002', time: '00:15 GMT', event: 'NASCAR Cup Series', sport: 'Motorsports', league: 'NASCAR', status: 'Upcoming', venue: 'Charlotte Motor Speedway', source: 'nascar-cup-stream' },
  { id: 'sched-rugby-002', time: '01:45 GMT', event: 'British and Irish Lions vs South Africa', sport: 'Rugby', league: 'Test Series', status: 'Upcoming', venue: 'Twickenham', source: 'lions-springboks' },
  { id: 'sched-wrestling-002', time: '02:30 GMT', event: 'AEW Dynamite', sport: 'Wrestling', league: 'AEW', status: 'Upcoming', venue: 'BMO Center', source: 'aew-dynamite' },
  { id: 'sched-boxing-002', time: '03:15 GMT', event: 'Tyson Fury vs Francis Ngannou', sport: 'Boxing', league: 'Heavyweight', status: 'Upcoming', venue: 'Wembley Stadium', source: 'fury-ngannou-watch' },
  { id: 'sched-hockey-002', time: '04:00 GMT', event: 'Rangers vs Blackhawks', sport: 'Hockey', league: 'NHL', status: 'Upcoming', venue: 'Madison Square Garden', source: 'nhl-rangers-blackhawks' },
  { id: 'sched-athletics-002', time: '05:30 GMT', event: 'Olympic Trials Finals', sport: 'Athletics', league: 'USATF', status: 'Upcoming', venue: 'Hayward Field', source: 'usatf-finals' },
  { id: 'sched-tennis-002', time: '06:45 GMT', event: 'US Open Semi-Finals', sport: 'Tennis', league: 'Grand Slam', status: 'Upcoming', venue: 'USTA Billie Jean King National Tennis Center', source: 'us-open-semis' },
  { id: 'sched-baseball-003', time: '07:30 GMT', event: 'Red Sox vs Blue Jays', sport: 'Baseball', league: 'MLB', status: 'Upcoming', venue: 'Fenway Park', source: 'redsox-bluejays' },
  { id: 'sched-soccer-011', time: '08:00 GMT', event: 'Napoli vs AC Milan', sport: 'Soccer', league: 'Serie A', status: 'Upcoming', venue: 'Diego Armando Maradona Stadium', source: 'napoli-milan' },
  { id: 'sched-boxing-003', time: '08:45 GMT', event: 'Katie Taylor vs Chantelle Cameron', sport: 'Boxing', league: 'Lightweight Championship', status: 'Upcoming', venue: '3Arena', source: 'taylor-cameron' },
  { id: 'sched-motorsports-003', time: '09:30 GMT', event: 'IndyCar Grand Prix', sport: 'Motorsports', league: 'IndyCar', status: 'Upcoming', venue: 'Indianapolis Motor Speedway', source: 'indycars-live' },
  { id: 'sched-cricket-003', time: '10:15 GMT', event: 'Pakistan vs South Africa', sport: 'Cricket', league: 'ODI', status: 'Upcoming', venue: 'National Stadium Karachi', source: 'pak-sa-odi' },
  { id: 'sched-volleyball-002', time: '11:00 GMT', event: 'Italy vs Brazil', sport: 'Volleyball', league: 'Nations League', status: 'Upcoming', venue: 'PalaLottomatica', source: 'italy-brazil-volley' },
  { id: 'sched-hockey-003', time: '11:45 GMT', event: 'Kings vs Avalanche', sport: 'Hockey', league: 'NHL', status: 'Upcoming', venue: 'Crypto.com Arena', source: 'kings-avalanche' },
  { id: 'sched-athletics-003', time: '12:30 GMT', event: 'European Championships Finals', sport: 'Athletics', league: 'European Athletics', status: 'Upcoming', venue: 'Olympic Stadium', source: 'europe-athletics' },
  { id: 'sched-rugby-003', time: '13:15 GMT', event: 'France vs England', sport: 'Rugby', league: 'Six Nations', status: 'Upcoming', venue: 'Stade de France', source: 'france-england-rugby' },
  { id: 'sched-esports-003', time: '14:00 GMT', event: 'Valorant Champions', sport: 'Esports', league: 'Riot Games', status: 'Upcoming', venue: 'Los Angeles Convention Center', source: 'valorant-champs' }
];

LIVEFORLIVE_DATA.streamSources = [
  { id: 's-01', title: 'Primary Soccer Channel', sport: 'Soccer', description: 'HD stream, multi-language commentary and match highlights.', url: 'https://example.com/stream/soccer/primary', rating: 4.9, latency: 'low' },
  { id: 's-02', title: 'UFC Main Event Window', sport: 'UFC', description: 'Live MMA feed with pre-fight analysis and fight card stats.', url: 'https://example.com/stream/ufc/main', rating: 4.8, latency: 'medium' },
  { id: 's-03', title: 'Basketball Courtside', sport: 'Basketball', description: 'Interactive NBA stream with score overlay and highlight reels.', url: 'https://example.com/stream/nba/courtside', rating: 4.7, latency: 'low' },
  { id: 's-04', title: 'NFL Prime Stream', sport: 'American Football', description: 'Live NFL feed with alternate audio and live stats widget.', url: 'https://example.com/stream/nfl/prime', rating: 4.8, latency: 'low' },
  { id: 's-05', title: 'F1 Pit Lane Feed', sport: 'Motorsports', description: 'Formula 1 live race stream with pit lane camera and telemetry.', url: 'https://example.com/stream/f1/pitlane', rating: 4.6, latency: 'low' },
  { id: 's-06', title: 'Tennis Center Court', sport: 'Tennis', description: 'Live Grand Slam court coverage with line review and player stats.', url: 'https://example.com/stream/tennis/center', rating: 4.5, latency: 'medium' },
  { id: 's-07', title: 'NHL Ice Tracker', sport: 'Hockey', description: 'Live hockey coverage with pace-of-play and goal camera views.', url: 'https://example.com/stream/nhl/ice', rating: 4.4, latency: 'medium' },
  { id: 's-08', title: 'Cricket Pavilion View', sport: 'Cricket', description: 'T20 live stream with expert commentary and real-time radar.', url: 'https://example.com/stream/cricket/pavilion', rating: 4.3, latency: 'medium' },
  { id: 's-09', title: 'Boxing Ringside', sport: 'Boxing', description: 'Live boxing feed with undercard and main event access.', url: 'https://example.com/stream/boxing/ringside', rating: 4.7, latency: 'low' },
  { id: 's-10', title: 'Esports Arena', sport: 'Esports', description: 'Live gaming tournament streaming with multiple caster views.', url: 'https://example.com/stream/esports/arena', rating: 4.9, latency: 'low' },
];

LIVEFORLIVE_DATA.trending = [
  { id: 'trend-01', title: 'Champions League Final', sport: 'Soccer', description: 'Top match preview and live watch guides for the final.', highlight: true },
  { id: 'trend-02', title: 'UFC Title Fight', sport: 'UFC', description: 'Fight night main card coverage and free streaming options.', highlight: true },
  { id: 'trend-03', title: 'NBA Playoffs', sport: 'Basketball', description: 'Playoff stream tracker with tip-offs and bracket updates.', highlight: false },
  { id: 'trend-04', title: 'F1 Season Finale', sport: 'Motorsports', description: 'Final race watch page and alternate telemetry stream.', highlight: false },
  { id: 'trend-05', title: 'Wimbledon Showdown', sport: 'Tennis', description: 'Grand Slam championship live coverage window.', highlight: false },
];

LIVEFORLIVE_DATA.notifications = [
  { id: 'notif-001', type: 'schedule', message: 'New soccer streams added for Champions League', timestamp: 'a few minutes ago' },
  { id: 'notif-002', type: 'watchlist', message: 'Your watchlist has 3 active live events', timestamp: '10 minutes ago' },
  { id: 'notif-003', type: 'update', message: 'Site now supports dark and light theme toggles', timestamp: '30 minutes ago' },
  { id: 'notif-004', type: 'news', message: 'Tennis Grand Slam coverage starts at 06:00 GMT', timestamp: '1 hour ago' },
];

LIVEFORLIVE_DATA.dailyHighlights = [
  { id: 'highlight-001', title: 'Soccer Frenzy', description: 'More than 20 live soccer windows currently available across Europe and South America.' },
  { id: 'highlight-002', title: 'Fight Night Features', description: 'UFC and Bellator preview guides with updated streaming sources.' },
  { id: 'highlight-003', title: 'Grand Slam Preview', description: 'Tennis coverage includes center-court sources, commentary channels, and replay feeds.' },
  { id: 'highlight-004', title: 'Race Day Alerts', description: 'Formula 1, NASCAR, and IndyCar watch windows are tracked for every session.' },
];

LIVEFORLIVE_DATA.sourceRankings = [
  { rank: 1, title: 'Primary Soccer Channel', sport: 'Soccer', rating: 4.9, availability: 'High' },
  { rank: 2, title: 'UFC Main Event Window', sport: 'UFC', rating: 4.8, availability: 'Medium' },
  { rank: 3, title: 'NBA Courtside', sport: 'Basketball', rating: 4.7, availability: 'High' },
  { rank: 4, title: 'F1 Timing Stream', sport: 'Motorsports', rating: 4.6, availability: 'Medium' },
];

LIVEFORLIVE_DATA.userGuides = [
  { id: 'guide-001', title: 'How to choose the best stream', summary: 'Learn to pick reliable sources with low latency and stable playback.' },
  { id: 'guide-002', title: 'How to save and revisit your watchlist', summary: 'Use the watchlist cards to store favorite events across sessions.' },
  { id: 'guide-003', title: 'Mobile viewing checklist', summary: 'Prepare for mobile streaming, data usage, and screen resolution optimization.' },
  { id: 'guide-004', title: 'Event prioritization tips', summary: 'Find high-profile matches, fight cards, and live channels with the best coverage.' },
];
