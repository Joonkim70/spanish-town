const STORAGE_KEY = "spanishTownSave";
const DAILY_ENERGY_MAX = 3;

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

// 자정 기준 날짜가 바뀔 때마다 1씩 증가하는 정수 (매일 다른 주제를 로테이션하는 데 사용)
function dayIndex() {
  const d = new Date();
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor(local.getTime() / 86400000);
}

function emptyLangBucket() {
  return { affinity: {}, journal: [] };
}

function defaultSave() {
  return {
    language: null, // 아직 선택 안 함
    streak: 0,
    lastPlayedDate: null,
    energyToday: DAILY_ENERGY_MAX,
    perLang: {
      es: emptyLangBucket(),
      ja: emptyLangBucket(),
      zh: emptyLangBucket()
    }
  };
}

// 언어 선택 기능 추가 전(구버전) 저장 데이터를 새 구조로 옮김
function migrateSaveIfNeeded(save) {
  if (!save.perLang) {
    save.perLang = {
      es: { affinity: save.affinity || {}, journal: (save.journal || []).map(j => ({ ...j, text: j.text || j.es })) },
      ja: emptyLangBucket(),
      zh: emptyLangBucket()
    };
    save.language = save.language || (save.journal && save.journal.length ? "es" : null);
    delete save.affinity;
    delete save.journal;
  }
  LANGUAGE_ORDER.forEach(lang => {
    if (!save.perLang[lang]) save.perLang[lang] = emptyLangBucket();
  });
  return save;
}

function loadState() {
  let save;
  try {
    save = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultSave();
  } catch (e) {
    save = defaultSave();
  }

  save = migrateSaveIfNeeded(save);

  const today = todayStr();
  if (save.lastPlayedDate !== today) {
    save.energyToday = DAILY_ENERGY_MAX;
  }
  return save;
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// 하루의 첫 대화를 시작할 때 스트릭을 갱신 (모든 언어가 공유하는 하루 한 번의 스트릭/에너지)
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

function changeAffinity(state, lang, npcId, delta) {
  const bucket = state.perLang[lang];
  bucket.affinity[npcId] = (bucket.affinity[npcId] || 0) + delta;
  saveState(state);
}

function getAffinity(state, lang, npcId) {
  return state.perLang[lang].affinity[npcId] || 0;
}

function addJournalEntry(state, lang, entry) {
  const bucket = state.perLang[lang];
  const dup = bucket.journal.some(j => j.text === entry.text && j.npcId === entry.npcId);
  if (dup) return;
  bucket.journal.push({ ...entry, date: todayStr() });
  saveState(state);
}
