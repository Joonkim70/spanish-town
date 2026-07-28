let dlgState = null; // { npc, nodeId, appState, pendingCorrection }

function startDialogueWithNpc(npc, appState) {
  registerDailyVisitIfNeeded(appState);
  const tree = DIALOGUES[npc.id];
  dlgState = { npc, nodeId: tree.start, appState };
  showScreen("screen-dialogue");
  renderDialogueNode();
}

function renderDialogueNode() {
  const { npc, nodeId, appState } = dlgState;
  const tree = DIALOGUES[npc.id];

  if (nodeId === "end") {
    finishDialogue(tree.endMessage);
    return;
  }

  const node = tree.nodes[nodeId];

  document.getElementById("dlg-npc-emoji").textContent = npc.emoji;
  document.getElementById("dlg-npc-name").textContent = npc.name;
  document.getElementById("dlg-npc-es").textContent = node.text_es;
  document.getElementById("dlg-npc-ko").textContent = node.text_ko;
  document.getElementById("dlg-npc-ko").classList.add("hidden");
  document.getElementById("btn-toggle-meaning").textContent = "뜻 보기";
  speakSpanish(node.text_es);

  addJournalEntry(appState, { es: node.text_es, ko: node.text_ko, npcId: npc.id });

  const optionsWrap = document.getElementById("dlg-options");
  optionsWrap.innerHTML = "";
  node.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-es">${opt.text_es}</span><span class="opt-ko">${opt.text_ko_hint}</span>`;
    btn.addEventListener("click", () => chooseOption(opt));
    optionsWrap.appendChild(btn);
  });

  document.getElementById("voice-input").value = "";
  document.getElementById("voice-feedback").classList.add("hidden");
}

function submitVoiceAnswer() {
  if (!dlgState || dlgState.nodeId === "end") return;

  const { npc, nodeId } = dlgState;
  const node = DIALOGUES[npc.id].nodes[nodeId];
  const input = document.getElementById("voice-input");
  const feedback = document.getElementById("voice-feedback");
  const spoken = input.value.trim();

  if (!spoken) {
    feedback.textContent = "먼저 마이크로 말하거나 입력해보세요.";
    feedback.classList.remove("hidden");
    return;
  }

  const { option, score } = matchSpokenToOption(spoken, node.options);

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

  changeAffinity(appState, dlgState.npc.id, opt.affinityDelta);
  addJournalEntry(appState, {
    es: opt.correct ? opt.text_es : opt.correctEs,
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
  document.getElementById("correction-explain").textContent = opt.correctionKo;
  document.getElementById("correction-correct-es").textContent = opt.correctEs;
  const overlay = document.getElementById("correction-overlay");
  overlay.classList.remove("hidden");
  speakSpanish(opt.correctEs);

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
    `${endMessage}\n호감도 +${getAffinity(appState, npc.id)} (누적)`;

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
  speakSpanish(document.getElementById("dlg-npc-es").textContent);
});

document.getElementById("btn-speak-correction").addEventListener("click", () => {
  speakSpanish(document.getElementById("correction-correct-es").textContent);
});

document.getElementById("btn-voice-submit").addEventListener("click", submitVoiceAnswer);

document.getElementById("voice-input").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    submitVoiceAnswer();
  }
});
