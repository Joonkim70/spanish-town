// 중국어 대화 데이터 (HSK1 수준)
// DialogueNode 필드: npcId, text_zh, reading(병음), text_ko, options
// option 필드: text_zh, reading, text_ko_hint, correct, correctionKo?, correctZh?, correctReading?, affinityDelta, next

const DIALOGUES_ZH = {
  wangayi: {
    topics: [
      {
        topicLabel: "인사와 안부",
        start: "n1",
        endMessage: "和王阿姨聊天聊得很开心！",
        nodes: {
          n1: {
            npcId: "wangayi",
            text_zh: "你好！你今天怎么样？",
            reading: "Nǐ hǎo! Nǐ jīntiān zěnmeyàng?",
            text_ko: "안녕! 오늘 어때?",
            options: [
              {
                text_zh: "我很好，谢谢。",
                reading: "Wǒ hěn hǎo, xièxie.",
                text_ko_hint: "저는 잘 지내요, 감사해요.",
                correct: true,
                affinityDelta: 2,
                next: "n2"
              },
              {
                text_zh: "我是好，谢谢。",
                reading: "Wǒ shì hǎo, xièxie.",
                text_ko_hint: "저는 잘 지내요, 감사해요.",
                correct: false,
                correctionKo: "중국어에서 형용사는 그 자체로 서술어 역할을 해서 '是'가 필요 없어요. 보통 '很'(매우)과 함께 '我很好'라고 하지, '我是好'라고 하면 어색해요.",
                correctZh: "我很好，谢谢。",
                correctReading: "Wǒ hěn hǎo, xièxie.",
                affinityDelta: 0,
                next: "n2"
              }
            ]
          },
          n2: {
            npcId: "wangayi",
            text_zh: "你今天忙不忙？",
            reading: "Nǐ jīntiān máng bu máng?",
            text_ko: "오늘 바빠?",
            options: [
              {
                text_zh: "不忙，我在家休息。",
                reading: "Bù máng, wǒ zài jiā xiūxi.",
                text_ko_hint: "안 바빠, 나 집에서 쉬고 있어.",
                correct: true,
                affinityDelta: 2,
                next: "n3"
              },
              {
                text_zh: "不忙，我是家休息。",
                reading: "Bù máng, wǒ shì jiā xiūxi.",
                text_ko_hint: "안 바빠, 나 집에서 쉬고 있어.",
                correct: false,
                correctionKo: "장소에서 무엇을 하고 있다고 말할 때는 '在'(~에서)를 써요. '是'는 '~이다'라는 뜻이라 장소 표현에는 어울리지 않아요.",
                correctZh: "不忙，我在家休息。",
                correctReading: "Bù máng, wǒ zài jiā xiūxi.",
                affinityDelta: 0,
                next: "n3"
              }
            ]
          },
          n3: {
            npcId: "wangayi",
            text_zh: "好，那我先走了，再见！",
            reading: "Hǎo, nà wǒ xiān zǒu le, zàijiàn!",
            text_ko: "그래, 그럼 나 먼저 갈게, 안녕!",
            options: [
              {
                text_zh: "好的，再见！",
                reading: "Hǎo de, zàijiàn!",
                text_ko_hint: "네, 안녕히 가세요!",
                correct: true,
                affinityDelta: 3,
                next: "end"
              },
              {
                text_zh: "好的吗，再见！",
                reading: "Hǎo de ma, zàijiàn!",
                text_ko_hint: "네, 안녕히 가세요!",
                correct: false,
                correctionKo: "'吗'는 질문을 만들 때 쓰는 조사예요. 그냥 동의하는 대답을 할 때는 '吗'를 붙이지 않고 '好的'라고만 하면 돼요.",
                correctZh: "好的，再见！",
                correctReading: "Hǎo de, zàijiàn!",
                affinityDelta: 0,
                next: "end"
              }
            ]
          }
        }
      }
    ]
  },

  xiaoming: {
    topics: [
      {
        topicLabel: "영화 이야기",
        start: "n1",
        endMessage: "和小明聊电影聊得很开心！",
        nodes: {
          n1: {
            npcId: "xiaoming",
            text_zh: "你最近看电影了吗？",
            reading: "Nǐ zuìjìn kàn diànyǐng le ma?",
            text_ko: "너 요즘 영화 봤어?",
            options: [
              {
                text_zh: "看了，很有意思。",
                reading: "Kàn le, hěn yǒuyìsi.",
                text_ko_hint: "봤어, 되게 재밌었어.",
                correct: true,
                affinityDelta: 2,
                next: "n2"
              },
              {
                text_zh: "看，很有意思。",
                reading: "Kàn, hěn yǒuyìsi.",
                text_ko_hint: "봤어, 되게 재밌었어.",
                correct: false,
                correctionKo: "이미 일어난 일(봤다)을 말할 때는 동사 뒤에 완료를 나타내는 '了'를 붙여야 해요. '看'만 쓰면 아직 안 본 것처럼 들려요.",
                correctZh: "看了，很有意思。",
                correctReading: "Kàn le, hěn yǒuyìsi.",
                affinityDelta: 0,
                next: "n2"
              }
            ]
          },
          n2: {
            npcId: "xiaoming",
            text_zh: "你喜欢什么样的电影？",
            reading: "Nǐ xǐhuan shénmeyàng de diànyǐng?",
            text_ko: "너 어떤 영화 좋아해?",
            options: [
              {
                text_zh: "我也喜欢喜剧电影。",
                reading: "Wǒ yě xǐhuan xǐjù diànyǐng.",
                text_ko_hint: "나는 코미디 영화도 좋아해.",
                correct: true,
                affinityDelta: 2,
                next: "n3"
              },
              {
                text_zh: "我喜欢也喜剧电影。",
                reading: "Wǒ xǐhuan yě xǐjù diànyǐng.",
                text_ko_hint: "나는 코미디 영화도 좋아해.",
                correct: false,
                correctionKo: "'也'(~도)는 동사 앞에 와야 해요. '喜欢' 뒤가 아니라 앞에 놓아서 '我也喜欢'처럼 써야 자연스러워요.",
                correctZh: "我也喜欢喜剧电影。",
                correctReading: "Wǒ yě xǐhuan xǐjù diànyǐng.",
                affinityDelta: 0,
                next: "n3"
              }
            ]
          },
          n3: {
            npcId: "xiaoming",
            text_zh: "下次一起去看电影吧！",
            reading: "Xiàcì yìqǐ qù kàn diànyǐng ba!",
            text_ko: "다음에 같이 영화 보러 가자!",
            options: [
              {
                text_zh: "好啊，没问题！",
                reading: "Hǎo a, méi wèntí!",
                text_ko_hint: "좋아, 문제없어!",
                correct: true,
                affinityDelta: 3,
                next: "end"
              },
              {
                text_zh: "好啊，不问题！",
                reading: "Hǎo a, bù wèntí!",
                text_ko_hint: "좋아, 문제없어!",
                correct: false,
                correctionKo: "'没'는 '없다/안 했다'는 뜻으로 명사를 부정할 때 쓰고, '不'는 주로 동사·형용사를 부정할 때 써요. '문제없다'는 '没问题'라고 해야지 '不问题'라고 하면 어색해요.",
                correctZh: "好啊，没问题！",
                correctReading: "Hǎo a, méi wèntí!",
                affinityDelta: 0,
                next: "end"
              }
            ]
          }
        }
      }
    ]
  },

  chen: {
    topics: [
      {
        topicLabel: "책 이야기",
        start: "n1",
        endMessage: "和陈先生聊书聊得很愉快！",
        nodes: {
          n1: {
            npcId: "chen",
            text_zh: "欢迎光临。你喜欢看什么书？",
            reading: "Huānyíng guānglín. Nǐ xǐhuan kàn shénme shū?",
            text_ko: "어서 오세요. 어떤 책 좋아하세요?",
            options: [
              {
                text_zh: "我喜欢看小说。",
                reading: "Wǒ xǐhuan kàn xiǎoshuō.",
                text_ko_hint: "저는 소설 읽는 거 좋아해요.",
                correct: true,
                affinityDelta: 2,
                next: "n2"
              },
              {
                text_zh: "我是喜欢小说。",
                reading: "Wǒ shì xǐhuan xiǎoshuō.",
                text_ko_hint: "저는 소설 읽는 거 좋아해요.",
                correct: false,
                correctionKo: "'喜欢'(좋아하다)은 그 자체로 동사라서 앞에 '是'를 붙이지 않아요. '是'는 '~이다'라는 뜻이라 이 문장에는 필요 없어요.",
                correctZh: "我喜欢看小说。",
                correctReading: "Wǒ xǐhuan kàn xiǎoshuō.",
                affinityDelta: 0,
                next: "n2"
              }
            ]
          },
          n2: {
            npcId: "chen",
            text_zh: "这本书很有名，你要不要买一本？",
            reading: "Zhè běn shū hěn yǒumíng, nǐ yào bu yào mǎi yì běn?",
            text_ko: "이 책 되게 유명해요, 한 권 사실래요?",
            options: [
              {
                text_zh: "好，我买一本。",
                reading: "Hǎo, wǒ mǎi yì běn.",
                text_ko_hint: "네, 한 권 살게요.",
                correct: true,
                affinityDelta: 2,
                next: "n3"
              },
              {
                text_zh: "好，我买一书。",
                reading: "Hǎo, wǒ mǎi yì shū.",
                text_ko_hint: "네, 한 권 살게요.",
                correct: false,
                correctionKo: "중국어에서 숫자와 명사 사이에는 항상 양사(단위명사)가 필요해요. 책을 셀 때는 '本'을 써서 '一本书'라고 해야지, '一书'라고 하면 틀려요.",
                correctZh: "好，我买一本。",
                correctReading: "Hǎo, wǒ mǎi yì běn.",
                affinityDelta: 0,
                next: "n3"
              }
            ]
          },
          n3: {
            npcId: "chen",
            text_zh: "谢谢你，欢迎下次再来。",
            reading: "Xièxie nǐ, huānyíng xiàcì zài lái.",
            text_ko: "감사합니다, 다음에 또 오세요.",
            options: [
              {
                text_zh: "好的，下次见！",
                reading: "Hǎo de, xiàcì jiàn!",
                text_ko_hint: "네, 다음에 봐요!",
                correct: true,
                affinityDelta: 3,
                next: "end"
              },
              {
                text_zh: "好的，见下次！",
                reading: "Hǎo de, jiàn xiàcì!",
                text_ko_hint: "네, 다음에 봐요!",
                correct: false,
                correctionKo: "시간을 나타내는 말(下次, 다음에)은 보통 동사 앞에 와요. '见下次'가 아니라 '下次见'이라고 해야 자연스러운 중국어예요.",
                correctZh: "好的，下次见！",
                correctReading: "Hǎo de, xiàcì jiàn!",
                affinityDelta: 0,
                next: "end"
              }
            ]
          }
        }
      }
    ]
  }
};
