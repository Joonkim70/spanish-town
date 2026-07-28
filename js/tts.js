// 스페인어 음성 합성 (Web Speech API) — 네트워크/API 키 불필요, iOS Safari 내장 지원
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

function pickSpanishVoice() {
  if (!ttsVoices.length) loadTtsVoices();

  // 중남미 스페인어를 우선으로 찾음 (스페인 본토 억양 제외)
  const preferredLangs = ["es-MX", "es-US", "es-419", "es-AR", "es-CO", "es-CL"];
  for (const lang of preferredLangs) {
    const v = ttsVoices.find(v => v.lang === lang);
    if (v) return v;
  }

  const nonSpain = ttsVoices.find(v => v.lang.startsWith("es") && v.lang !== "es-ES");
  if (nonSpain) return nonSpain;

  return ttsVoices.find(v => v.lang.startsWith("es")) || null;
}

function speakSpanish(text) {
  if (!window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  const voice = pickSpanishVoice();
  if (voice) {
    utter.voice = voice;
    utter.lang = voice.lang;
  } else {
    utter.lang = "es-MX";
  }
  utter.rate = 0.92;
  window.speechSynthesis.speak(utter);
}
