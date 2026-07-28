// 일본어 대화 데이터 (JLPT N5 수준)
// DialogueNode 필드: npcId, text_ja, reading(로마자), text_ko, options
// option 필드: text_ja, reading, text_ko_hint, correct, correctionKo?, correctJa?, correctReading?, affinityDelta, next

const DIALOGUES_JA = {
  tanaka: {
    topics: [
      {
        topicLabel: "인사와 안부",
        start: "n1",
        endMessage: "たなかさんと楽しくおしゃべりしました！",
        nodes: {
          n1: {
            npcId: "tanaka",
            text_ja: "今日は元気ですか。",
            reading: "Kyou wa genki desu ka.",
            text_ko: "오늘 잘 지내요?",
            options: [
              {
                text_ja: "はい、元気です。ありがとうございます。",
                reading: "Hai, genki desu. Arigatou gozaimasu.",
                text_ko_hint: "네, 잘 지내요. 감사합니다.",
                correct: true,
                affinityDelta: 2,
                next: "n2"
              },
              {
                text_ja: "はい、元気いです。",
                reading: "Hai, genki i desu.",
                text_ko_hint: "네, 잘 지내요.",
                correct: false,
                correctionKo: "'元気'(겐키)는 な형용사예요. い형용사와 달리 뒤에 'い'를 붙이지 않고 바로 'です'를 붙여야 해요. 그래서 '元気いです'가 아니라 '元気です'가 맞아요.",
                correctJa: "はい、元気です。",
                correctReading: "Hai, genki desu.",
                affinityDelta: 0,
                next: "n2"
              }
            ]
          },
          n2: {
            npcId: "tanaka",
            text_ja: "週末は何をしますか。",
            reading: "Shuumatsu wa nani wo shimasu ka.",
            text_ko: "주말에 뭐 하세요?",
            options: [
              {
                text_ja: "本を読みます。",
                reading: "Hon wo yomimasu.",
                text_ko_hint: "책을 읽어요.",
                correct: true,
                affinityDelta: 2,
                next: "n3"
              },
              {
                text_ja: "本は読みます。",
                reading: "Hon wa yomimasu.",
                text_ko_hint: "책을 읽어요.",
                correct: false,
                correctionKo: "책처럼 동작의 대상(목적어)을 나타낼 때는 조사 'を'를 써요. 'は'는 문장의 주제를 나타낼 때 쓰는 조사라서, 이 문장에는 'を'가 자연스러워요.",
                correctJa: "本を読みます。",
                correctReading: "Hon wo yomimasu.",
                affinityDelta: 0,
                next: "n3"
              }
            ]
          },
          n3: {
            npcId: "tanaka",
            text_ja: "そろそろ帰りますね。また会いましょう。",
            reading: "Sorosoro kaerimasu ne. Mata aimashou.",
            text_ko: "이제 슬슬 가볼게요. 또 만나요!",
            options: [
              {
                text_ja: "はい、また来ますね。",
                reading: "Hai, mata kimasu ne.",
                text_ko_hint: "네, 또 올게요.",
                correct: true,
                affinityDelta: 3,
                next: "end"
              },
              {
                text_ja: "はい、また来るですね。",
                reading: "Hai, mata kuru desu ne.",
                text_ko_hint: "네, 또 올게요.",
                correct: false,
                correctionKo: "동사의 사전형(보통형)에 바로 'です'를 붙이면 문법적으로 어색해요. 공손하게 말하려면 동사를 'ます'형으로 바꿔서 '来ます'라고 해야 해요.",
                correctJa: "はい、また来ますね。",
                correctReading: "Hai, mata kimasu ne.",
                affinityDelta: 0,
                next: "end"
              }
            ]
          }
        }
      }
    ]
  },

  yuto: {
    topics: [
      {
        topicLabel: "영화 이야기",
        start: "n1",
        endMessage: "ゆうとと映画の話で盛り上がりました！",
        nodes: {
          n1: {
            npcId: "yuto",
            text_ja: "ねえ、最近映画見た？",
            reading: "Nee, saikin eiga mita?",
            text_ko: "야, 요즘 영화 봤어?",
            options: [
              {
                text_ja: "うん、面白い映画を見たよ。",
                reading: "Un, omoshiroi eiga wo mita yo.",
                text_ko_hint: "응, 재밌는 영화 봤어.",
                correct: true,
                affinityDelta: 2,
                next: "n2"
              },
              {
                text_ja: "うん、面白い映画が見たよ。",
                reading: "Un, omoshiroi eiga ga mita yo.",
                text_ko_hint: "응, 재밌는 영화 봤어.",
                correct: false,
                correctionKo: "'見る'(보다)처럼 동작을 나타내는 동사는 목적어에 조사 'を'를 써요. 'が'는 '好きだ, わかる'처럼 상태를 나타내는 표현에 주로 쓰여서, 이 문장에는 'を'가 자연스러워요.",
                correctJa: "うん、面白い映画を見たよ。",
                correctReading: "Un, omoshiroi eiga wo mita yo.",
                affinityDelta: 0,
                next: "n2"
              }
            ]
          },
          n2: {
            npcId: "yuto",
            text_ja: "今度、一緒に映画を見に行かない？",
            reading: "Kondo, issho ni eiga wo mi ni ikanai?",
            text_ko: "다음에 같이 영화 보러 안 갈래?",
            options: [
              {
                text_ja: "うん、いいね！行こう。",
                reading: "Un, ii ne! Ikou.",
                text_ko_hint: "응 좋아! 가자.",
                correct: true,
                affinityDelta: 2,
                next: "n3"
              },
              {
                text_ja: "うん、いいね！行きましょう。",
                reading: "Un, ii ne! Ikimashou.",
                text_ko_hint: "응 좋아! 가자.",
                correct: false,
                correctionKo: "'行きましょう'는 공손한 표현이라 친한 친구 사이의 편한 대화에는 안 어울려요. 친구끼리는 반말체인 '行こう'(가자)가 더 자연스러워요.",
                correctJa: "うん、いいね！行こう。",
                correctReading: "Un, ii ne! Ikou.",
                affinityDelta: 0,
                next: "n3"
              }
            ]
          },
          n3: {
            npcId: "yuto",
            text_ja: "じゃあ、また連絡するね！",
            reading: "Jaa, mata renraku suru ne!",
            text_ko: "그럼 또 연락할게!",
            options: [
              {
                text_ja: "うん、楽しみにしてるよ！",
                reading: "Un, tanoshimi ni shiteru yo!",
                text_ko_hint: "응, 기대하고 있을게!",
                correct: true,
                affinityDelta: 3,
                next: "end"
              },
              {
                text_ja: "うん、楽しみしてるよ！",
                reading: "Un, tanoshimi shiteru yo!",
                text_ko_hint: "응, 기대하고 있을게!",
                correct: false,
                correctionKo: "'楽しみにする'(기대하다)라는 표현은 '楽しみ' 뒤에 조사 'に'가 꼭 필요해요. 'に'가 빠지면 어색한 문장이 돼요.",
                correctJa: "うん、楽しみにしてるよ！",
                correctReading: "Un, tanoshimi ni shiteru yo!",
                affinityDelta: 0,
                next: "end"
              }
            ]
          }
        }
      }
    ]
  },

  suzuki: {
    topics: [
      {
        topicLabel: "책 이야기",
        start: "n1",
        endMessage: "鈴木さんと本の話をしてとても楽しかったです！",
        nodes: {
          n1: {
            npcId: "suzuki",
            text_ja: "いらっしゃいませ。どんな本がお好きですか。",
            reading: "Irasshaimase. Donna hon ga osuki desu ka.",
            text_ko: "어서 오세요. 어떤 책을 좋아하세요?",
            options: [
              {
                text_ja: "小説が好きです。",
                reading: "Shousetsu ga suki desu.",
                text_ko_hint: "소설을 좋아해요.",
                correct: true,
                affinityDelta: 2,
                next: "n2"
              },
              {
                text_ja: "小説を好きです。",
                reading: "Shousetsu wo suki desu.",
                text_ko_hint: "소설을 좋아해요.",
                correct: false,
                correctionKo: "'好きだ'(좋아하다)는 상태를 나타내는 표현이라 대상에 조사 'が'를 써요. 동작동사와 달리 'を'를 쓰지 않아요.",
                correctJa: "小説が好きです。",
                correctReading: "Shousetsu ga suki desu.",
                affinityDelta: 0,
                next: "n2"
              }
            ]
          },
          n2: {
            npcId: "suzuki",
            text_ja: "この本は面白いですよ。読んでみますか。",
            reading: "Kono hon wa omoshiroi desu yo. Yonde mimasu ka.",
            text_ko: "이 책 재밌어요. 읽어보실래요?",
            options: [
              {
                text_ja: "はい、読んでみます。",
                reading: "Hai, yonde mimasu.",
                text_ko_hint: "네, 읽어볼게요.",
                correct: true,
                affinityDelta: 2,
                next: "n3"
              },
              {
                text_ja: "はい、読むみます。",
                reading: "Hai, yomu mimasu.",
                text_ko_hint: "네, 읽어볼게요.",
                correct: false,
                correctionKo: "'~てみる'(~해보다)는 동사를 て형으로 바꾼 뒤에 붙여야 해요. '読む'의 て형은 '読んで'라서, '読むみます'가 아니라 '読んでみます'가 맞아요.",
                correctJa: "はい、読んでみます。",
                correctReading: "Hai, yonde mimasu.",
                affinityDelta: 0,
                next: "n3"
              }
            ]
          },
          n3: {
            npcId: "suzuki",
            text_ja: "また本を選びに来てくださいね。",
            reading: "Mata hon wo erabi ni kite kudasai ne.",
            text_ko: "또 책 고르러 오세요.",
            options: [
              {
                text_ja: "はい、必ず来ます。ありがとうございます。",
                reading: "Hai, kanarazu kimasu. Arigatou gozaimasu.",
                text_ko_hint: "네, 꼭 올게요. 감사합니다.",
                correct: true,
                affinityDelta: 3,
                next: "end"
              },
              {
                text_ja: "はい、必ず行きます。",
                reading: "Hai, kanarazu ikimasu.",
                text_ko_hint: "네, 꼭 올게요.",
                correct: false,
                correctionKo: "상대방이 있는 곳으로 '온다'고 말할 때는 '来る'(오다)를 써야 해요. '行く'(가다)는 화자 기준으로 다른 곳으로 이동할 때 쓰는 말이라, 이 상황에는 '来ます'가 자연스러워요.",
                correctJa: "はい、必ず来ます。",
                correctReading: "Hai, kanarazu kimasu.",
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
