// 받아쓰기(dictation)로 입력된 텍스트를 선택지와 비교하는 퍼지 매칭 (언어별 정규화 지원)
function normalizeText(str, lang) {
  let s = str.toLowerCase();

  if (lang === "es") {
    s = s
      .normalize("NFD")
      .split("")
      .filter(ch => {
        const code = ch.codePointAt(0);
        return !(code >= 0x0300 && code <= 0x036f); // 강세 제거 (á→a 등)
      })
      .join("");
  }

  // 공통 문장부호 제거 (스페인어 ¿¡ + 한/중/일 전각 문장부호)
  s = s.replace(/[¿¡.,!?。、！？「」『』]/g, "");
  s = s.replace(/['"]/g, "");

  if (lang === "ja" || lang === "zh") {
    s = s.replace(/\s+/g, ""); // 한자/가나는 띄어쓰기가 의미 있는 경계가 아니므로 전부 제거
  } else {
    s = s.replace(/\s+/g, " ").trim();
  }

  return s;
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

function similarity(a, b, lang) {
  const na = normalizeText(a, lang);
  const nb = normalizeText(b, lang);
  if (!na.length && !nb.length) return 1;
  const dist = levenshtein(na, nb);
  return 1 - dist / Math.max(na.length, nb.length, 1);
}

// spokenText와 가장 비슷한 옵션을 찾아 반환 (options의 각 항목에서 textField 값을 비교)
function matchSpokenToOption(spokenText, options, textField, lang) {
  let best = null;
  let bestScore = -1;
  options.forEach(opt => {
    const score = similarity(spokenText, opt[textField], lang);
    if (score > bestScore) {
      bestScore = score;
      best = opt;
    }
  });
  return { option: best, score: bestScore };
}
