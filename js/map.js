let playerPos = { ...PLAYER_START };
let isMoving = false;

function npcAt(x, y) {
  return NPCS_BY_LANG[currentLanguage].find(n => n.x === x && n.y === y);
}

function isAdjacent(a, b) {
  const dx = Math.abs(a.x - b.x);
  const dy = Math.abs(a.y - b.y);
  return dx + dy === 1;
}

function renderVillage(state) {
  const grid = document.getElementById("village-grid");
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${GRID_COLS}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${GRID_ROWS}, 1fr)`;

  for (let y = 0; y < GRID_ROWS; y++) {
    for (let x = 0; x < GRID_COLS; x++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.dataset.x = x;
      tile.dataset.y = y;

      // 오솔길 느낌: 가운데 세로줄 + NPC 주변
      if (x === 3) tile.classList.add("path");

      const npc = npcAt(x, y);
      if (npc) {
        tile.classList.add("npc");
        tile.textContent = npc.emoji;
        const heart = document.createElement("div");
        heart.className = "heart-badge";
        heart.textContent = `💚${getAffinity(state, currentLanguage, npc.id)}`;
        tile.appendChild(heart);
      }

      if (playerPos.x === x && playerPos.y === y) {
        const p = document.createElement("div");
        p.className = "player";
        p.textContent = "🚶";
        tile.appendChild(p);
      }

      tile.addEventListener("click", () => onTileTap(x, y, state));
      grid.appendChild(tile);
    }
  }
}

function onTileTap(x, y, state) {
  if (isMoving) return;
  const npc = npcAt(x, y);

  if (npc && isAdjacent(playerPos, { x, y })) {
    startDialogueWithNpc(npc, state);
    return;
  }
  if (npc) return; // NPC 타일 자체로는 이동 불가, 인접 타일까지만

  movePlayerTo(x, y, state);
}

function movePlayerTo(targetX, targetY, state) {
  isMoving = true;
  const stepDelay = 90;

  function step() {
    const dx = targetX - playerPos.x;
    const dy = targetY - playerPos.y;

    if (dx === 0 && dy === 0) {
      isMoving = false;
      return;
    }

    if (dx !== 0) {
      playerPos.x += dx > 0 ? 1 : -1;
    } else if (dy !== 0) {
      playerPos.y += dy > 0 ? 1 : -1;
    }

    renderVillage(state);
    setTimeout(step, stepDelay);
  }

  step();
}

function refreshMapStats(state) {
  document.getElementById("map-streak").textContent = state.streak;
  document.getElementById("map-energy").textContent = state.energyToday;
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-energy").textContent = state.energyToday;
}
