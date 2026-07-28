let journalFilter = "all";

function renderJournal(appState) {
  renderJournalFilters(appState);
  renderJournalList(appState);
}

function renderJournalFilters(appState) {
  const wrap = document.getElementById("journal-filters");
  wrap.innerHTML = "";

  const npcs = NPCS_BY_LANG[currentLanguage];
  const chips = [{ id: "all", name: "전체" }, ...npcs.map(n => ({ id: n.id, name: n.name }))];
  chips.forEach(chip => {
    const btn = document.createElement("button");
    btn.className = "filter-chip" + (journalFilter === chip.id ? " active" : "");
    btn.textContent = chip.name;
    btn.addEventListener("click", () => {
      journalFilter = chip.id;
      renderJournal(appState);
    });
    wrap.appendChild(btn);
  });
}

function renderJournalList(appState) {
  const list = document.getElementById("journal-list");
  list.innerHTML = "";

  const npcs = NPCS_BY_LANG[currentLanguage];
  const journal = appState.perLang[currentLanguage].journal;
  const entries = journal
    .filter(j => journalFilter === "all" || j.npcId === journalFilter)
    .slice()
    .reverse();

  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "journal-empty";
    empty.textContent = "아직 배운 표현이 없어요. 마을에서 이웃과 대화해보세요!";
    list.appendChild(empty);
    return;
  }

  entries.forEach(entry => {
    const npc = npcs.find(n => n.id === entry.npcId);
    const card = document.createElement("div");
    card.className = "journal-item";
    card.innerHTML = `
      <p class="j-es">${entry.text}</p>
      <p class="j-ko">${entry.ko}</p>
      <p class="j-meta">${npc ? npc.emoji + " " + npc.name : ""} · ${entry.date}</p>
    `;
    list.appendChild(card);
  });
}
