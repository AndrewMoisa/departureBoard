import { fetchDepartures } from "./data/fetchDepartures.js";

function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/index.html":
      fetchDepartures();
      setInterval(fetchDepartures, 60000);
      break;
  }
}

router();
