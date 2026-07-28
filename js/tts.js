// 음성 합성 (Web Speech API) — 네트워크/API 키 불필요, iOS Safari 내장 지원
let ttsVoices = [];

function loadTtsVoices() {
  if (window.speechSynthesis) {
    ttsVoices = window.speechSynthesis.getVoices();
  }
}

if (window.speechSynthesis) {
  loadTtsVoices();
  window.speechSynthesis.onvoiceschanged = loadTtsVoices;
}

function pickVoiceForLang(lang) {
  if (!ttsVoices.length) loadTtsVoices();

  const prefs = LANGUAGES[lang].ttsPrefs;
  for (const pref of prefs) {
    const v = ttsVoices.find(v => v.lang === pref);
    if (v) return v;
  }

  const prefix = prefs[0].split("-")[0];
  return ttsVoices.find(v => v.lang.startsWith(prefix)) || null;
}

function speakPhrase(text, lang) {
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  const voice = pickVoiceForLang(lang);
  if (voice) {
    utter.voice = voice;
    utter.lang = voice.lang;
  } else {
    utter.lang = LANGUAGES[lang].ttsPrefs[0];
  }
  utter.rate = 0.92;
  window.speechSynthesis.speak(utter);
}
