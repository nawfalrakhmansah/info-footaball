const clubs = {
  mu: {
    name: "Manchester United",
    next: "Man United vs Arsenal – 12 Feb 2026",
    last: "Chelsea 1 - 2 Man United"
  },
  madrid: {
    name: "Real Madrid",
    next: "Real Madrid vs Barcelona – 14 Feb 2026",
    last: "Sevilla 0 - 3 Real Madrid"
  }
};

const params = new URLSearchParams(window.location.search);
const clubKey = params.get("club");

if (clubs[clubKey]) {
  document.getElementById("club-name").innerText = clubs[clubKey].name;
  document.getElementById("next-match").innerText = clubs[clubKey].next;
  document.getElementById("last-match").innerText = clubs[clubKey].last;
}
