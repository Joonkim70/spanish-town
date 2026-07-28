// 마을 그리드: 7열 x 9행 (x: 0~6, y: 0~8)
const GRID_COLS = 7;
const GRID_ROWS = 9;

const NPCS = [
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
];

const PLAYER_START = { x: 3, y: 8 };
