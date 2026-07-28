// 지원 언어 설정
const LANGUAGES = {
  es: {
    id: "es",
    label: "스페인어",
    flag: "🇲🇽",
    villageName: "스페인어 마을",
    textField: "text_es",
    correctField: "correctEs",
    hasReading: false,
    ttsPrefs: ["es-MX", "es-US", "es-419", "es-AR", "es-CO", "es-CL"]
  },
  ja: {
    id: "ja",
    label: "일본어",
    flag: "🇯🇵",
    villageName: "일본어 마을",
    textField: "text_ja",
    correctField: "correctJa",
    hasReading: true,
    ttsPrefs: ["ja-JP"]
  },
  zh: {
    id: "zh",
    label: "중국어",
    flag: "🇨🇳",
    villageName: "중국어 마을",
    textField: "text_zh",
    correctField: "correctZh",
    hasReading: true,
    ttsPrefs: ["zh-CN", "zh-Hans-CN", "zh-SG"]
  }
};

const LANGUAGE_ORDER = ["es", "ja", "zh"];
