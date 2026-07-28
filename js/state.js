const STORAGE_KEY = "spanishTownSave";
const DAILY_ENERGY_MAX = 3;

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function defaultSave() {
  return {
    streak: 0,
    lastPlayedDate: null,
    energyToday: DAILY_ENERGY_MAX,
    affinity: {},
    journal: []
  };
}

function loadState() {
  let save;
  try {
    save = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultSave();
  } catch (e) {
    save = defaultSave();
  }

  const today = todayStr();
  if (save.lastPlayedDate !== today) {
    save.energyToday = DAILY_ENERGY_MAX;
  }
  return save;
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// 하루의 첫 대화를 시작할 때 스트릭을 갱신
function registerDailyVisitIfNeeded(state) {
  const today = todayStr();
  if (state.lastPlayedDate === today) return state;

  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = `${y.getFullYear()}-${y.getMonth() + 1}-${y.getDate()}`;

  state.streak = state.lastPlayedDate === yesterday ? state.streak + 1 : 1;
  state.lastPlayedDate = today;
  state.energyToday = DAILY_ENERGY_MAX;
  saveState(state);
  return state;
}

function spendEnergy(state) {
  state.energyToday = Math.max(0, state.energyToday - 1);
  saveState(state);
}

function changeAffinity(state, npcId, delta) {
  state.affinity[npcId] = (state.affinity[npcId] || 0) + delta;
  saveState(state);
}

function getAffinity(state, npcId) {
  return state.affinity[npcId] || 0;
}

function addJournalEntry(state, entry) {
  const dup = state.journal.some(j => j.es === entry.es && j.npcId === entry.npcId);
  if (dup) return;
  state.journal.push({ ...entry, date: todayStr() });
  saveState(state);
}
