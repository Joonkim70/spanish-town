let dlgState = null; // { npc, topic, nodeId, appState }

// 날짜(dayIndex)를 기준으로 그날의 주제를 정함 - 모두 같은 날엔 같은 주제를 봄
function getTodaysTopic(lang, npcId) {
  const topics = DIALOGUES_BY_LANG[lang][npcId].topics;
  const idx = dayIndex() % topics.length;
  return topics[idx];
}

function startDialogueWithNpc(npc, appState) {
  registerDailyVisitIfNeeded(appState);
  const topic = getTodaysTopic(currentLanguage, npc.id);
  dlgState = { npc, topic, nodeId: topic.start, appState };
  showScreen("screen-dialogue");
  renderDialogueNode();
}

function renderDialogueNode() {
  const { npc, topic, nodeId, appState } = dlgState;
  const langConf = LANGUAGES[currentLanguage];

  if (nodeId === "end") {
    finishDialogue(topic.endMessage);
    return;
  }

  const node = topic.nodes[nodeId];
  const nativeText = node[langConf.textField];

  document.getElementById("dlg-npc-emoji").textContent = npc.emoji;
  document.getElementById("dlg-npc-name").textContent = npc.name;
  document.getElementById("dlg-npc-es").textContent = nativeText;
  document.getElementById("dlg-npc-ko").textContent = node.text_ko;
  document.getElementById("dlg-npc-ko").classList.add("hidden");
  document.getElementById("btn-toggle-meaning").textContent = "뜻 보기";

  const readingEl = document.getElementById("dlg-npc-reading");
  if (langConf.hasReading && node.reading) {
    readingEl.textContent = node.reading;
    readingEl.classList.remove("hidden");
  } else {
    readingEl.classList.add("hidden");
  }

  speakPhrase(nativeText, currentLanguage);

  addJournalEntry(appState, currentLanguage, { text: nativeText, ko: node.text_ko, npcId: npc.id });

  const optionsWrap = document.getElementById("dlg-options");
  optionsWrap.innerHTML = "";
  node.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    const readingHtml = langConf.hasReading && opt.reading
      ? `<span class="opt-reading">${opt.reading}</span>`
      : "";
    btn.innerHTML = `<span class="opt-es">${opt[langConf.textField]}</span>${readingHtml}<span class="opt-ko">${opt.text_ko_hint}</span>`;
    btn.addEventListener("click", () => chooseOption(opt));
    optionsWrap.appendChild(btn);
  });

  document.getElementById("voice-input").value = "";
  document.getElementById("voice-feedback").classList.add("hidden");
}

function submitVoiceAnswer() {
  if (!dlgState || dlgState.nodeId === "end") return;

  const { topic, nodeId } = dlgState;
  const langConf = LANGUAGES[currentLanguage];
  const node = topic.nodes[nodeId];
  const input = document.getElementById("voice-input");
  const feedback = document.getElementById("voice-feedback");
  const spoken = input.value.trim();

  if (!spoken) {
    feedback.textContent = "먼저 마이크로 말하거나 입력해보세요.";
    feedback.classList.remove("hidden");
    return;
  }

  const { option, score } = matchSpokenToOption(spoken, node.options, langConf.textField, currentLanguage);

  if (score < 0.35) {
    feedback.textContent = "음... 잘 못 알아들었어요. 다시 말해보거나 아래 선택지를 눌러보세요.";
    feedback.classList.remove("hidden");
    return;
  }

  feedback.classList.add("hidden");
  input.value = "";
  chooseOption(option);
}

function chooseOption(opt) {
  const { appState } = dlgState;
  const langConf = LANGUAGES[currentLanguage];

  changeAffinity(appState, currentLanguage, dlgState.npc.id, opt.affinityDelta);
  addJournalEntry(appState, currentLanguage, {
    text: opt.correct ? opt[langConf.textField] : opt[langConf.correctField],
    ko: opt.text_ko_hint,
    npcId: dlgState.npc.id
  });

  if (!opt.correct) {
    showCorrection(opt, () => {
      dlgState.nodeId = opt.next;
      renderDialogueNode();
    });
  } else {
    dlgState.nodeId = opt.next;
    renderDialogueNode();
  }
}

function showCorrection(opt, onDismiss) {
  const langConf = LANGUAGES[currentLanguage];
  const correctText = opt[langConf.correctField];

  document.getElementById("correction-explain").textContent = opt.correctionKo;
  document.getElementById("correction-correct-es").textContent = correctText;

  const readingEl = document.getElementById("correction-correct-reading");
  if (langConf.hasReading && opt.correctReading) {
    readingEl.textContent = opt.correctReading;
    readingEl.classList.remove("hidden");
  } else {
    readingEl.classList.add("hidden");
  }

  const overlay = document.getElementById("correction-overlay");
  overlay.classList.remove("hidden");
  speakPhrase(correctText, currentLanguage);

  const btn = document.getElementById("btn-correction-ok");
  const handler = () => {
    overlay.classList.add("hidden");
    btn.removeEventListener("click", handler);
    onDismiss();
  };
  btn.addEventListener("click", handler);
}

function finishDialogue(endMessage) {
  const { npc, appState } = dlgState;
  spendEnergy(appState);

  document.getElementById("end-emoji").textContent = "💚";
  document.getElementById("end-message").textContent =
    `${endMessage}\n호감도 +${getAffinity(appState, currentLanguage, npc.id)} (누적)`;

  const overlay = document.getElementById("end-overlay");
  overlay.classList.remove("hidden");

  const btn = document.getElementById("btn-end-ok");
  const handler = () => {
    overlay.classList.add("hidden");
    btn.removeEventListener("click", handler);
    dlgState = null;
    showScreen("screen-map");
    renderVillage(appState);
    refreshMapStats(appState);
  };
  btn.addEventListener("click", handler);
}

document.getElementById("btn-toggle-meaning").addEventListener("click", () => {
  const ko = document.getElementById("dlg-npc-ko");
  const btn = document.getElementById("btn-toggle-meaning");
  ko.classList.toggle("hidden");
  btn.textContent = ko.classList.contains("hidden") ? "뜻 보기" : "뜻 숨기기";
});

document.getElementById("btn-speak-npc").addEventListener("click", () => {
  speakPhrase(document.getElementById("dlg-npc-es").textContent, currentLanguage);
});

document.getElementById("btn-speak-correction").addEventListener("click", () => {
  speakPhrase(document.getElementById("correction-correct-es").textContent, currentLanguage);
});

document.getElementById("btn-voice-submit").addEventListener("click", submitVoiceAnswer);

document.getElementById("voice-input").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    submitVoiceAnswer();
  }
});
