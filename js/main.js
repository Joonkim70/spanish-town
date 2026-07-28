let appState = loadState();
let journalReturnScreen = "screen-title";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function refreshTitleStats() {
  document.getElementById("stat-streak").textContent = appState.streak;
  document.getElementById("stat-energy").textContent = appState.energyToday;
}

document.getElementById("btn-enter-town").addEventListener("click", () => {
  showScreen("screen-map");
  renderVillage(appState);
  refreshMapStats(appState);
});

document.getElementById("btn-back-title").addEventListener("click", () => {
  refreshTitleStats();
  showScreen("screen-title");
});

document.getElementById("btn-open-journal").addEventListener("click", () => {
  journalReturnScreen = "screen-map";
  renderJournal(appState);
  showScreen("screen-journal");
});

document.getElementById("btn-open-journal-title").addEventListener("click", () => {
  journalReturnScreen = "screen-title";
  renderJournal(appState);
  showScreen("screen-journal");
});

document.getElementById("btn-back-from-journal").addEventListener("click", () => {
  if (journalReturnScreen === "screen-map") {
    showScreen("screen-map");
    renderVillage(appState);
    refreshMapStats(appState);
  } else {
    refreshTitleStats();
    showScreen("screen-title");
  }
});

refreshTitleStats();
