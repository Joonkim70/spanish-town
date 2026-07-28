let appState = loadState();
let currentLanguage = appState.language; // null이면 아직 언어 선택 전
let journalReturnScreen = "screen-title";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function applyLanguageBranding() {
  const conf = LANGUAGES[currentLanguage];
  document.getElementById("title-flag-name").textContent = `${conf.flag} ${conf.villageName}`;
  document.getElementById("map-flag").textContent = conf.flag;
}

function refreshTitleStats() {
  document.getElementById("stat-streak").textContent = appState.streak;
  document.getElementById("stat-energy").textContent = appState.energyToday;
}

function selectLanguage(lang) {
  currentLanguage = lang;
  appState.language = lang;
  saveState(appState);
  playerPos = { ...PLAYER_START };
  applyLanguageBranding();
  refreshTitleStats();
  showScreen("screen-title");
}

document.querySelectorAll(".lang-choice-btn").forEach(btn => {
  btn.addEventListener("click", () => selectLanguage(btn.dataset.lang));
});

document.getElementById("btn-change-language").addEventListener("click", () => {
  showScreen("screen-language-select");
});

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

// 초기 화면: 언어를 선택한 적이 없으면 언어 선택부터
if (currentLanguage && LANGUAGES[currentLanguage]) {
  applyLanguageBranding();
  refreshTitleStats();
  showScreen("screen-title");
} else {
  showScreen("screen-language-select");
}
