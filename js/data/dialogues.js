// 대화 트리 데이터
// 각 NPC: { start: 시작 노드 id, endMessage: 대화 종료 시 한국어 멘트, nodes: { [nodeId]: DialogueNode } }
// DialogueNode: { npcId, text_es, text_ko, options: [ { text_es, text_ko_hint, correct, correctionKo?, correctEs?, affinityDelta, next } ] }

const DIALOGUES = {
  rosa: {
    start: "r1",
    endMessage: "도냐 로사와 즐거운 수다를 나눴어요!",
    nodes: {
      r1: {
        npcId: "rosa",
        text_es: "¡Hola! ¿Cómo estás?",
        text_ko: "안녕! 어떻게 지내?",
        options: [
          {
            text_es: "Estoy muy bien, gracias. ¿Y tú?",
            text_ko_hint: "저는 아주 잘 지내요, 고마워요. 당신은요?",
            correct: true,
            affinityDelta: 2,
            next: "r2"
          },
          {
            text_es: "Soy muy bien, gracias.",
            text_ko_hint: "나는 매우 좋다, 고마워요.",
            correct: false,
            correctionKo: "안부를 말할 때는 'estar' 동사를 써요. 'ser'는 정체성이나 변하지 않는 성격을 말할 때 쓰고, 'estar'는 지금 기분이나 상태를 말할 때 써요. 그래서 'Soy bien'이 아니라 'Estoy bien'이 자연스러워요.",
            correctEs: "Estoy muy bien, gracias.",
            affinityDelta: 0,
            next: "r2"
          }
        ]
      },
      r2: {
        npcId: "rosa",
        text_es: "Qué bonito día, ¿verdad? Hace mucho sol hoy.",
        text_ko: "오늘 정말 날씨 좋지? 해가 쨍쨍하네.",
        options: [
          {
            text_es: "Sí, hace mucho calor. Me encanta el sol.",
            text_ko_hint: "네, 정말 덥네요. 저는 햇살이 정말 좋아요.",
            correct: true,
            affinityDelta: 2,
            next: "r3"
          },
          {
            text_es: "Sí, tengo mucho calor.",
            text_ko_hint: "네, 저는 [몸이] 덥네요.",
            correct: false,
            correctionKo: "날씨 자체를 말할 때는 'hacer' 동사를 써서 'hace calor/frío/sol'이라고 해요. 'tengo calor'는 '내 몸이 덥게 느껴진다'는 뜻이라 날씨 이야기에는 조금 어색해요.",
            correctEs: "Sí, hace mucho calor.",
            affinityDelta: 0,
            next: "r3"
          }
        ]
      },
      r3: {
        npcId: "rosa",
        text_es: "Bueno, tengo que ir al mercado. ¡Fue lindo hablar contigo!",
        text_ko: "자, 나는 이제 시장에 가야겠다. 얘기 나눠서 즐거웠어!",
        options: [
          {
            text_es: "Igualmente, ¡que tengas un buen día!",
            text_ko_hint: "저도요, 좋은 하루 보내세요!",
            correct: true,
            affinityDelta: 3,
            next: "end"
          },
          {
            text_es: "Igualmente, ¡que tengas una buena día!",
            text_ko_hint: "저도요, 좋은 하루 보내세요!",
            correct: false,
            correctionKo: "'día'(하루)는 -a로 끝나지만 사실 남성 명사예요. 그래서 'un día', 'buen día'처럼 남성형 관사/형용사를 써야 하고, 'una', 'buena'는 틀려요.",
            correctEs: "Igualmente, ¡que tengas un buen día!",
            affinityDelta: 0,
            next: "end"
          }
        ]
      }
    }
  },

  mateo: {
    start: "m1",
    endMessage: "마테오와 영화 이야기를 신나게 나눴어요!",
    nodes: {
      m1: {
        npcId: "mateo",
        text_es: "¡Hola! ¿Viste alguna película buena últimamente?",
        text_ko: "안녕! 요즘 재밌는 영화 본 거 있어?",
        options: [
          {
            text_es: "Sí, vi una película de Almodóvar. Me gustó mucho.",
            text_ko_hint: "응, 알모도바르 영화를 봤어. 정말 좋았어.",
            correct: true,
            affinityDelta: 2,
            next: "m2"
          },
          {
            text_es: "Sí, vi dos películas. Me gustó mucho.",
            text_ko_hint: "응, 영화 두 편을 봤어. 정말 좋았어.",
            correct: false,
            correctionKo: "'gustar' 동사는 좋아하는 '대상'의 수에 맞춰 변해요. 영화가 한 편이면 'me gustó', 여러 편이면 'me gustaron'이에요. 두 편을 봤다고 했으니 'me gustaron'이 맞아요.",
            correctEs: "Sí, vi dos películas. Me gustaron mucho.",
            affinityDelta: 0,
            next: "m2"
          }
        ]
      },
      m2: {
        npcId: "mateo",
        text_es: "¿Qué tipo de películas te gustan? A mí me encantan las de misterio.",
        text_ko: "어떤 종류의 영화를 좋아해? 나는 미스터리 영화를 정말 좋아해.",
        options: [
          {
            text_es: "Me gustan las películas dramáticas.",
            text_ko_hint: "나는 드라마 영화를 좋아해.",
            correct: true,
            affinityDelta: 2,
            next: "m3"
          },
          {
            text_es: "Me gusta las películas dramáticas.",
            text_ko_hint: "나는 드라마 영화를 좋아해.",
            correct: false,
            correctionKo: "'películas'(영화들)는 복수형이니까 gustar도 복수형인 'gustan'을 써야 해요. 'me gusta'는 단수 대상 앞에만 써요.",
            correctEs: "Me gustan las películas dramáticas.",
            affinityDelta: 0,
            next: "m3"
          }
        ]
      },
      m3: {
        npcId: "mateo",
        text_es: "¡Genial! Deberíamos ver una película juntos algún día.",
        text_ko: "좋다! 언젠가 같이 영화 한 편 봐야겠다.",
        options: [
          {
            text_es: "¡Claro! Me encantaría.",
            text_ko_hint: "물론이지! 정말 좋을 것 같아.",
            correct: true,
            affinityDelta: 3,
            next: "end"
          },
          {
            text_es: "¡Claro! Me gusta mucho contigo.",
            text_ko_hint: "물론이지! 정말 좋을 것 같아.",
            correct: false,
            correctionKo: "'gustar'는 사람과 함께 쓰면 어색해요. 같이 뭔가 하고 싶은 마음은 'me encantaría' 처럼 표현하는 게 자연스러워요.",
            correctEs: "¡Claro! Me encantaría.",
            affinityDelta: 0,
            next: "end"
          }
        ]
      }
    }
  },

  andres: {
    start: "a1",
    endMessage: "돈 안드레스와 책 이야기를 나누며 좋은 시간을 보냈어요!",
    nodes: {
      a1: {
        npcId: "andres",
        text_es: "Bienvenida a mi librería. ¿Qué tipo de libros te gustan?",
        text_ko: "내 책방에 온 걸 환영해. 어떤 책을 좋아해?",
        options: [
          {
            text_es: "Me gustan las novelas clásicas.",
            text_ko_hint: "나는 고전 소설을 좋아해.",
            correct: true,
            affinityDelta: 2,
            next: "a2"
          },
          {
            text_es: "Me gusta un novela clásica.",
            text_ko_hint: "나는 고전 소설 한 편을 좋아해.",
            correct: false,
            correctionKo: "'novela'(소설)는 여성 명사라서 관사도 여성형인 'una'를 써야 해요. 'un'은 남성 명사 앞에 쓰는 관사예요.",
            correctEs: "Me gusta una novela clásica.",
            affinityDelta: 0,
            next: "a2"
          }
        ]
      },
      a2: {
        npcId: "andres",
        text_es: "A mí me fascina la literatura latinoamericana. ¿Has leído algún libro de García Márquez?",
        text_ko: "나는 라틴아메리카 문학에 푹 빠져 있어. 가르시아 마르케스 책 읽어본 적 있어?",
        options: [
          {
            text_es: "Sí, leí un libro suyo. Es un escritor increíble.",
            text_ko_hint: "응, 그의 책 한 권을 읽었어. 정말 대단한 작가야.",
            correct: true,
            affinityDelta: 2,
            next: "a3"
          },
          {
            text_es: "Sí, leí una libro suyo.",
            text_ko_hint: "응, 그의 책 한 권을 읽었어.",
            correct: false,
            correctionKo: "'libro'(책)는 남성 명사라서 'un libro'라고 해야 해요. 'una'는 여성 명사 앞에만 써요. 이번엔 반대로 헷갈린 경우네요!",
            correctEs: "Sí, leí un libro suyo.",
            affinityDelta: 0,
            next: "a3"
          }
        ]
      },
      a3: {
        npcId: "andres",
        text_es: "Vuelve cuando quieras a la librería. Aquí siempre hay una historia esperándote.",
        text_ko: "언제든 책방에 다시 와. 여긴 항상 너를 기다리는 이야기가 있어.",
        options: [
          {
            text_es: "Gracias, Don Andrés. Volveré pronto.",
            text_ko_hint: "감사해요, 안드레스 아저씨. 곧 다시 올게요.",
            correct: true,
            affinityDelta: 3,
            next: "end"
          },
          {
            text_es: "Gracias. Me encantó la cuento sobre el mar.",
            text_ko_hint: "감사해요. 바다에 관한 이야기가 정말 좋았어요.",
            correct: false,
            correctionKo: "'cuento'(이야기/단편)는 남성 명사예요. 그래서 'el cuento'라고 해야 하고, 'la'는 틀려요.",
            correctEs: "Gracias. Me encantó el cuento sobre el mar.",
            affinityDelta: 0,
            next: "end"
          }
        ]
      }
    }
  }
};
