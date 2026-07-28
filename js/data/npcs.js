// 마을 그리드: 7열 x 9행 (x: 0~6, y: 0~8) - 모든 언어가 같은 마을 배치를 공유
const GRID_COLS = 7;
const GRID_ROWS = 9;
const PLAYER_START = { x: 3, y: 8 };

const NPCS_BY_LANG = {
  es: [
    {
      id: "rosa",
      name: "Doña Rosa",
      emoji: "👵🏽",
      x: 1,
      y: 6,
      topic: "일상 인사 & 안부"
    },
    {
      id: "mateo",
      name: "Mateo",
      emoji: "🧑🏽",
      x: 5,
      y: 4,
      topic: "영화 이야기"
    },
    {
      id: "andres",
      name: "Don Andrés",
      emoji: "👨🏻‍🦳",
      x: 3,
      y: 1,
      topic: "좋아하는 책"
    }
  ],

  ja: [
    {
      id: "tanaka",
      name: "たなかさん",
      emoji: "👵🏻",
      x: 1,
      y: 6,
      topic: "인사 & 안부"
    },
    {
      id: "yuto",
      name: "ゆうと",
      emoji: "🧑🏻",
      x: 5,
      y: 4,
      topic: "영화 이야기"
    },
    {
      id: "suzuki",
      name: "すずきさん",
      emoji: "👨🏻‍🦳",
      x: 3,
      y: 1,
      topic: "책 이야기"
    }
  ],

  zh: [
    {
      id: "wangayi",
      name: "王阿姨",
      emoji: "👵🏻",
      x: 1,
      y: 6,
      topic: "인사 & 안부"
    },
    {
      id: "xiaoming",
      name: "小明",
      emoji: "🧑🏻",
      x: 5,
      y: 4,
      topic: "영화 이야기"
    },
    {
      id: "chen",
      name: "陈先生",
      emoji: "👨🏻‍🦳",
      x: 3,
      y: 1,
      topic: "책 이야기"
    }
  ]
};
