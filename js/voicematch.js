// 받아쓰기(dictation)로 입력된 텍스트를 선택지와 비교하는 퍼지 매칭
function normalizeEs(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .split("")
    .filter(ch => {
      const code = ch.codePointAt(0);
      return !(code >= 0x0300 && code <= 0x036f);
    })
    .join("")
    .replace(/[¿¡.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) dp.push([i, ...new Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

function similarity(a, b) {
  const na = normalizeEs(a);
  const nb = normalizeEs(b);
  if (!na.length && !nb.length) return 1;
  const dist = levenshtein(na, nb);
  return 1 - dist / Math.max(na.length, nb.length, 1);
}

// spokenText와 가장 비슷한 옵션을 찾아 반환
function matchSpokenToOption(spokenText, options) {
  let best = null;
  let bestScore = -1;
  options.forEach(opt => {
    const score = similarity(spokenText, opt.text_es);
    if (score > bestScore) {
      bestScore = score;
      best = opt;
    }
  });
  return { option: best, score: bestScore };
}
