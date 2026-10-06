(function applyWeekdayTheme() {
  const weekdayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  function setThemeFromLocalWeekday() {
    const theme = weekdayKeys[new Date().getDay()] || 'mon';
    document.documentElement.setAttribute('data-theme', theme);
  }

  function scheduleMidnightRefresh() {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    const delay = Math.max(0, nextMidnight.getTime() - now.getTime());

    setTimeout(function onMidnight() {
      setThemeFromLocalWeekday();
      // Local days can be 23 or 25 hours when daylight saving changes.
      scheduleMidnightRefresh();
    }, delay);
  }

  setThemeFromLocalWeekday();
  scheduleMidnightRefresh();
})();
