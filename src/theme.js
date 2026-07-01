(function applyWeekdayTheme() {
  const weekdayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const oneDayMs = 24 * 60 * 60 * 1000;

  function setThemeFromLocalWeekday() {
    const theme = weekdayKeys[new Date().getDay()] || 'mon';
    document.documentElement.setAttribute('data-theme', theme);
  }

  function scheduleMidnightRefresh() {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    const initialDelay = Math.max(0, nextMidnight.getTime() - now.getTime());

    setTimeout(function onFirstMidnight() {
      setThemeFromLocalWeekday();
      setInterval(setThemeFromLocalWeekday, oneDayMs);
    }, initialDelay);
  }

  setThemeFromLocalWeekday();
  scheduleMidnightRefresh();
})();
