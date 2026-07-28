const DIALOGUES_ES = {
  "rosa": {
    "topics": [
      {
        "topicLabel": "일상 인사와 안부",
        "start": "n1",
        "endMessage": "도냐 로사와 즐거운 수다를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "¡Hola! ¿Cómo estás?",
            "text_ko": "안녕! 어떻게 지내?",
            "options": [
              {
                "text_es": "Estoy muy bien, gracias. ¿Y tú?",
                "text_ko_hint": "저는 아주 잘 지내요, 고마워요. 당신은요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Soy muy bien, gracias.",
                "text_ko_hint": "나는 매우 좋다, 고마워요.",
                "correct": false,
                "correctionKo": "안부를 말할 때는 'estar' 동사를 써요. 'ser'는 정체성이나 변하지 않는 성격을 말할 때 쓰고, 'estar'는 지금 기분이나 상태를 말할 때 써요. 그래서 'Soy bien'이 아니라 'Estoy bien'이 자연스러워요.",
                "correctEs": "Estoy muy bien, gracias.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Qué bonito día, ¿verdad? Hace mucho sol hoy.",
            "text_ko": "오늘 정말 날씨 좋지? 해가 쨍쨍하네.",
            "options": [
              {
                "text_es": "Sí, hace mucho calor. Me encanta el sol.",
                "text_ko_hint": "네, 정말 덥네요. 저는 햇살이 정말 좋아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, tengo mucho calor.",
                "text_ko_hint": "네, 저는 [몸이] 덥네요.",
                "correct": false,
                "correctionKo": "날씨 자체를 말할 때는 'hacer' 동사를 써서 'hace calor/frío/sol'이라고 해요. 'tengo calor'는 '내 몸이 덥게 느껴진다'는 뜻이라 날씨 이야기에는 조금 어색해요.",
                "correctEs": "Sí, hace mucho calor.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Bueno, tengo que ir al mercado. ¡Fue lindo hablar contigo!",
            "text_ko": "자, 나는 이제 시장에 가야겠다. 얘기 나눠서 즐거웠어!",
            "options": [
              {
                "text_es": "Igualmente, ¡que tengas un buen día!",
                "text_ko_hint": "저도요, 좋은 하루 보내세요!",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Igualmente, ¡que tengas una buena día!",
                "text_ko_hint": "저도요, 좋은 하루 보내세요!",
                "correct": false,
                "correctionKo": "'día'(하루)는 -a로 끝나지만 사실 남성 명사예요. 그래서 'un día', 'buen día'처럼 남성형 관사/형용사를 써야 하고, 'una', 'buena'는 틀려요.",
                "correctEs": "Igualmente, ¡que tengas un buen día!",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "가족 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 가족 이야기를 나누며 정을 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Cuéntame, ¿tienes hermanos? Yo tengo tres.",
            "text_ko": "말해봐, 형제자매 있어? 나는 셋 있어.",
            "options": [
              {
                "text_es": "Sí, tengo dos hermanos. Mi hermano mayor vive en Guadalajara.",
                "text_ko_hint": "응, 오빠가 둘 있어요. 제 큰오빠는 과달라하라에 살아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, tengo dos hermanos. Su hermano mayor vive en Guadalajara.",
                "text_ko_hint": "응, 오빠가 둘 있어요. 제 큰오빠는 과달라하라에 살아요.",
                "correct": false,
                "correctionKo": "자기 자신의 오빠를 말할 때는 'mi'(나의)를 써야 해요. 'su'는 '그의/그녀의/당신의'라는 뜻이라 다른 사람 얘기를 하는 것처럼 들려요.",
                "correctEs": "Sí, tengo dos hermanos. Mi hermano mayor vive en Guadalajara.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Qué bonito. Mi hija vive aquí cerca, en la casa azul. ¿Y tus papás viven cerca de ti?",
            "text_ko": "예쁘네. 우리 딸은 이 근처, 파란 집에 살아. 그럼 너희 부모님은 근처에 사셔?",
            "options": [
              {
                "text_es": "Sí, mis papás viven a dos cuadras de mi casa.",
                "text_ko_hint": "네, 저희 부모님은 저희 집에서 두 블록 거리에 사세요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, mi papás viven a dos cuadras de mi casa.",
                "text_ko_hint": "네, 저희 부모님은 저희 집에서 두 블록 거리에 사세요.",
                "correct": false,
                "correctionKo": "'papás'(부모님)는 복수 명사라서 소유격도 복수형인 'mis'를 써야 해요. 'mi'는 단수 명사 앞에만 써요.",
                "correctEs": "Sí, mis papás viven a dos cuadras de mi casa.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Qué bueno que su familia esté tan unida. Bueno, ya me voy a preparar la comida.",
            "text_ko": "가족이 그렇게 화목하다니 참 좋다. 자, 나는 이제 밥 준비하러 가야겠어.",
            "options": [
              {
                "text_es": "Que le vaya bien, Rosa. Salúdeme... digo, ¡saluda a tu hija de mi parte!",
                "text_ko_hint": "잘 다녀오세요, 로사. 따님께 제 안부 전해주세요!",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Que te vaya bien. Saluda a su hija de mi parte.",
                "text_ko_hint": "잘 다녀오세요. 따님께 제 안부 전해주세요.",
                "correct": false,
                "correctionKo": "로사가 방금 자기 딸을 'mi hija'라고 했으니, 그 딸 얘기를 다시 할 때도 'tu hija'(너의 딸)라고 해야 자연스러워요. 'su hija'는 제3의 다른 사람을 가리키는 것처럼 들려요.",
                "correctEs": "Que te vaya bien. Saluda a tu hija de mi parte.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "요리 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 요리 이야기를 나누니 배가 고파졌어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Estoy haciendo sopa de fideo. ¿Tienes hambre?",
            "text_ko": "국수 수프를 만들고 있어. 배고파?",
            "options": [
              {
                "text_es": "Sí, tengo mucha hambre. Huele delicioso.",
                "text_ko_hint": "네, 저 배 많이 고파요. 냄새가 정말 맛있어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, soy muy hambre. Huele delicioso.",
                "text_ko_hint": "네, 저 배 많이 고파요. 냄새가 정말 맛있어요.",
                "correct": false,
                "correctionKo": "'배고프다'는 스페인어로 'tener hambre'라고 표현해요. 'hambre'는 명사라서 'ser'가 아니라 'tener'와 함께 써야 해요.",
                "correctEs": "Sí, tengo mucha hambre. Huele delicioso.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Después de comer, siempre tengo sed. Voy a preparar agua de jamaica.",
            "text_ko": "먹고 나면 항상 목이 말라. 히비스커스 물을 만들어야겠어.",
            "options": [
              {
                "text_es": "Buena idea, yo también tengo sed ahora.",
                "text_ko_hint": "좋은 생각이에요, 저도 지금 목이 말라요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Buena idea, yo también tengo sed frío.",
                "text_ko_hint": "좋은 생각이에요, 저도 지금 목이 말라요.",
                "correct": false,
                "correctionKo": "'tener sed'만으로 '목이 마르다'는 뜻이 완성돼요. 'frío'(추위)를 뒤에 붙이면 뜻이 이상해져요. 'tener frío'는 완전히 다른 표현(춥다)이에요.",
                "correctEs": "Buena idea, yo también tengo sed ahora.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Ven mañana y te doy un plato de sopa. ¡Cocino para todo el barrio!",
            "text_ko": "내일 와, 수프 한 그릇 줄게. 나는 동네 사람 다 먹을 만큼 요리하거든!",
            "options": [
              {
                "text_es": "¡Muchas gracias! Ahí estaré sin falta.",
                "text_ko_hint": "정말 감사해요! 꼭 갈게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Muchas gracias! Tengo ganas de comer, tengo mucha hambre ahora mismo.",
                "text_ko_hint": "정말 감사해요! 꼭 갈게요.",
                "correct": false,
                "correctionKo": "뜻 자체는 틀리지 않지만 '내일 갈게요'라는 약속의 의미가 빠졌어요. 초대에 답할 때는 'ahí estaré'(거기 갈게요) 같은 표현으로 약속을 분명히 하는 게 자연스러워요.",
                "correctEs": "¡Muchas gracias! Ahí estaré sin falta.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "동네 시장 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 함께 동네 시장 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "¿Ya fuiste al mercado hoy? Hay frutas muy frescas.",
            "text_ko": "오늘 시장에 벌써 갔어? 신선한 과일이 있더라.",
            "options": [
              {
                "text_es": "No, todavía no. ¿Hay mangos también?",
                "text_ko_hint": "아니요, 아직요. 망고도 있어요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "No, todavía no. ¿Está mangos también?",
                "text_ko_hint": "아니요, 아직요. 망고도 있어요?",
                "correct": false,
                "correctionKo": "무언가가 '있다/존재한다'고 말할 때는 'hay'를 써요. 'estar'는 이미 알고 있는 특정한 것의 '위치'를 말할 때 쓰는 동사예요.",
                "correctEs": "No, todavía no. ¿Hay mangos también?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Sí, hay muchos. Y el puesto de doña Lupe está justo en la esquina.",
            "text_ko": "응, 많이 있어. 루페 아주머니 가게는 바로 모퉁이에 있어.",
            "options": [
              {
                "text_es": "Perfecto, sé dónde está ese puesto.",
                "text_ko_hint": "완벽해요, 그 가게가 어디 있는지 알아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Perfecto, hay dónde está ese puesto.",
                "text_ko_hint": "완벽해요, 그 가게가 어디 있는지 알아요.",
                "correct": false,
                "correctionKo": "특정 가게의 '위치'를 말할 때는 'estar'를 써요. 'hay'는 존재 여부(있다/없다)를 말할 때만 쓰고, 이미 정해진 것의 위치에는 쓰지 않아요.",
                "correctEs": "Perfecto, sé dónde está ese puesto.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Anda, ve antes de que se acaben los mangos. ¡Nos vemos!",
            "text_ko": "어서 가, 망고 떨어지기 전에. 또 보자!",
            "options": [
              {
                "text_es": "¡Voy corriendo! Gracias por el dato, Rosa.",
                "text_ko_hint": "빨리 갈게요! 정보 고마워요, 로사.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Voy corriendo! Hay muchas gracias, Rosa.",
                "text_ko_hint": "빨리 갈게요! 정보 고마워요, 로사.",
                "correct": false,
                "correctionKo": "감사 인사는 그냥 'gracias'라고만 해요. 'hay'는 존재를 나타내는 동사라서 인사말 앞에 붙이면 어색해요.",
                "correctEs": "¡Voy corriendo! Gracias por el dato, Rosa.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "오늘 기분이 어때",
        "start": "n1",
        "endMessage": "도냐 로사가 오늘 컨디션을 다정하게 물어봐 줬어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Te ves cansada. ¿Tienes sueño?",
            "text_ko": "너 피곤해 보인다. 졸려?",
            "options": [
              {
                "text_es": "Sí, tengo mucho sueño. Dormí poco anoche.",
                "text_ko_hint": "네, 정말 졸려요. 어젯밤에 잠을 조금밖에 못 잤어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, estoy mucho sueño. Dormí poco anoche.",
                "text_ko_hint": "네, 정말 졸려요. 어젯밤에 잠을 조금밖에 못 잤어요.",
                "correct": false,
                "correctionKo": "'졸리다'는 'tener sueño'라고 해요. 'sueño'는 명사라서 'estar'가 아니라 'tener'와 짝을 이뤄야 해요.",
                "correctEs": "Sí, tengo mucho sueño. Dormí poco anoche.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Ay, pobrecita. ¿Y no tienes frío con esta brisa?",
            "text_ko": "아이고 불쌍해라. 이 바람에 안 춥니?",
            "options": [
              {
                "text_es": "Un poco, sí. Voy a traer un suéter.",
                "text_ko_hint": "네, 조금요. 스웨터 가지고 올게요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Un poco, sí. Tengo frío mucho.",
                "text_ko_hint": "네, 조금요. 좀 추워요.",
                "correct": false,
                "correctionKo": "정도를 나타내는 부사 'mucho'는 보통 동사나 명사구 뒤가 아니라 앞쪽, 혹은 'mucho frío'처럼 명사 바로 앞에 와요. 'tener mucho frío'라고 순서를 지켜줘야 자연스러워요.",
                "correctEs": "Un poco, sí. Tengo mucho frío.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Cuídate mucho, mija. La salud es lo primero.",
            "text_ko": "몸조리 잘해, 얘야. 건강이 최고야.",
            "options": [
              {
                "text_es": "Gracias, Rosa. Voy a descansar bien esta noche.",
                "text_ko_hint": "고마워요, 로사. 오늘 밤은 푹 쉴게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, Rosa. Tengo que descansando esta noche.",
                "text_ko_hint": "고마워요, 로사. 오늘 밤은 푹 쉴게요.",
                "correct": false,
                "correctionKo": "'tener que' 뒤에는 동사원형이 와야 해요. '-ando/-iendo' 형태(현재분사)가 아니라 'descansar' 같은 원형을 써야 맞아요.",
                "correctEs": "Gracias, Rosa. Tengo que descansar esta noche.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "반려동물 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 반려동물 이야기를 나누며 웃음이 끊이지 않았어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Mi gato Michi duerme todo el día. Me encanta ese gato.",
            "text_ko": "우리 고양이 미치는 하루 종일 잠만 자. 그 고양이가 너무 좋아.",
            "options": [
              {
                "text_es": "Qué lindo. A mí me encantan los perros.",
                "text_ko_hint": "정말 귀엽다. 저는 강아지들을 정말 좋아해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué lindo. A mí me encanta los perros.",
                "text_ko_hint": "정말 귀엽다. 저는 강아지들을 정말 좋아해요.",
                "correct": false,
                "correctionKo": "'los perros'(강아지들)는 복수라서 'encantar'도 복수형인 'encantan'을 써야 해요. 'encanta'는 단수 대상 앞에만 써요.",
                "correctEs": "Qué lindo. A mí me encantan los perros.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "¿Tienes un perro en casa?",
            "text_ko": "집에 강아지 키워?",
            "options": [
              {
                "text_es": "Sí, tengo uno. Se llama Toby y es muy juguetón.",
                "text_ko_hint": "네, 한 마리 있어요. 토비라고 부르고 정말 장난꾸러기예요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, tengo uno. Le llama Toby y es muy juguetón.",
                "text_ko_hint": "네, 한 마리 있어요. 토비라고 부르고 정말 장난꾸러기예요.",
                "correct": false,
                "correctionKo": "'~라고 불린다'는 재귀동사 'llamarse'를 써서 'se llama'라고 해야 해요. 'le llama'는 '그에게 부른다'는 다른 뜻이 돼서 어색해요.",
                "correctEs": "Sí, tengo uno. Se llama Toby y es muy juguetón.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Algún día tráelo a visitar a Michi, aunque creo que se van a pelear.",
            "text_ko": "언젠가 미치 보러 데리고 와, 근데 아마 싸울 것 같긴 하다.",
            "options": [
              {
                "text_es": "Jaja, puede ser. Aun así, lo voy a traer.",
                "text_ko_hint": "하하, 그럴 수도 있겠네요. 그래도 데려올게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Jaja, puede ser. Aun así, voy a traer lo.",
                "text_ko_hint": "하하, 그럴 수도 있겠네요. 그래도 데려올게요.",
                "correct": false,
                "correctionKo": "직접목적격 대명사 'lo'는 활용된 동사 앞에 와야 해요. 'voy a traer' 처럼 동사가 두 개일 때는 'lo voy a traer' 또는 'voy a traerlo' 둘 다 되지만, 동사 사이에 따로 떼어 놓으면 안 돼요.",
                "correctEs": "Jaja, puede ser. Aun así, lo voy a traer.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "아침 일과 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 아침 습관 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Yo me levanto muy temprano, a las cinco. ¿Y tú a qué hora te levantas?",
            "text_ko": "나는 아주 일찍 일어나, 다섯 시에. 너는 몇 시에 일어나?",
            "options": [
              {
                "text_es": "Yo me levanto a las siete, más tarde que tú.",
                "text_ko_hint": "저는 일곱 시에 일어나요, 당신보다 늦게요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Yo levanto a las siete, más tarde que tú.",
                "text_ko_hint": "저는 일곱 시에 일어나요, 당신보다 늦게요.",
                "correct": false,
                "correctionKo": "'일어나다'는 재귀동사 'levantarse'예요. 그래서 'me levanto'처럼 재귀대명사 'me'를 꼭 붙여야 해요. 'levanto'만 쓰면 '내가 (무언가를) 들어올린다'는 뜻이 돼요.",
                "correctEs": "Yo me levanto a las siete, más tarde que tú.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Después de levantarme, siempre me baño con agua bien fría. ¡Despierta al cuerpo!",
            "text_ko": "일어나고 나면 항상 아주 차가운 물로 씻어. 몸이 확 깨거든!",
            "options": [
              {
                "text_es": "Uy, yo prefiero bañarme con agua caliente.",
                "text_ko_hint": "이런, 저는 따뜻한 물로 씻는 걸 더 좋아해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Uy, yo prefiero bañar con agua caliente.",
                "text_ko_hint": "이런, 저는 따뜻한 물로 씻는 걸 더 좋아해요.",
                "correct": false,
                "correctionKo": "'(스스로) 씻다'는 재귀동사 'bañarse'예요. 다른 사람이나 물건을 씻길 때만 'bañar'를 그대로 쓰고, 자기 자신을 씻을 때는 'bañarme/bañarte' 처럼 재귀형을 써야 해요.",
                "correctEs": "Uy, yo prefiero bañarme con agua caliente.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Cada quien con su costumbre. Bueno, me voy a desayunar. ¡Que tengas linda mañana!",
            "text_ko": "사람마다 각자 습관이 있는 거지. 자, 나는 아침 먹으러 가야겠다. 좋은 아침 보내!",
            "options": [
              {
                "text_es": "Igualmente, Rosa. Yo también me voy a desayunar.",
                "text_ko_hint": "당신도요, 로사. 저도 아침 먹으러 갈게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Igualmente, Rosa. Yo también voy a desayunarme.",
                "text_ko_hint": "당신도요, 로사. 저도 아침 먹으러 갈게요.",
                "correct": false,
                "correctionKo": "'desayunar'(아침을 먹다)는 재귀동사가 아니에요. 재귀대명사 'me'를 붙이지 않고 그냥 'voy a desayunar'라고 해야 자연스러워요.",
                "correctEs": "Igualmente, Rosa. Yo también voy a desayunar.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "계절과 옷차림",
        "start": "n1",
        "endMessage": "도냐 로사와 계절별 옷차림 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Ya viene el invierno. ¿Vas a comprar un abrigo nuevo?",
            "text_ko": "이제 곧 겨울이야. 새 외투 살 거야?",
            "options": [
              {
                "text_es": "Sí, voy a comprar uno esta semana.",
                "text_ko_hint": "네, 이번 주에 하나 살 거예요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, voy comprar uno esta semana.",
                "text_ko_hint": "네, 이번 주에 하나 살 거예요.",
                "correct": false,
                "correctionKo": "가까운 미래를 말할 때는 'ir a + 동사원형' 구조를 써요. 'voy'와 동사원형 사이에 반드시 'a'를 넣어야 해요.",
                "correctEs": "Sí, voy a comprar uno esta semana.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Yo voy a sacar mis suéteres del clóset. Cada año hace más frío, ¿no crees?",
            "text_ko": "나는 옷장에서 스웨터들을 꺼낼 거야. 매년 점점 더 추워지는 거 같지 않니?",
            "options": [
              {
                "text_es": "Sí, y también voy a guardar mi ropa de verano.",
                "text_ko_hint": "네, 그리고 저도 여름옷을 정리해 둘 거예요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, y también voy guardar mi ropa de verano.",
                "text_ko_hint": "네, 그리고 저도 여름옷을 정리해 둘 거예요.",
                "correct": false,
                "correctionKo": "여기서도 'ir a + 동사원형' 구조가 필요해요. 'voy'만 쓰고 바로 동사원형을 붙이면 안 되고, 꼭 'a'를 넣어야 해요.",
                "correctEs": "Sí, y también voy a guardar mi ropa de verano.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Bueno, vamos a estar bien abrigaditos este invierno. ¡Cuídate del frío!",
            "text_ko": "그래, 이번 겨울엔 따뜻하게 잘 챙겨 입자. 추위 조심해!",
            "options": [
              {
                "text_es": "Tú también, Rosa. Nos vamos a abrigar bien.",
                "text_ko_hint": "당신도요, 로사. 저희 따뜻하게 챙겨 입을게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Tú también, Rosa. Nos va a abrigar bien.",
                "text_ko_hint": "당신도요, 로사. 저희 따뜻하게 챙겨 입을게요.",
                "correct": false,
                "correctionKo": "주어가 'nosotros'(우리)일 때는 'ir' 동사도 그 인칭에 맞춰 'vamos'로 써야 해요. 'va'는 그/그녀/당신에 해당하는 형태예요.",
                "correctEs": "Tú también, Rosa. Nos vamos a abrigar bien.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "동네 날씨 잡담",
        "start": "n1",
        "endMessage": "도냐 로사와 날씨 잡담을 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Hoy hace muy buen clima, ni frío ni calor.",
            "text_ko": "오늘 날씨 정말 좋다, 춥지도 덥지도 않고.",
            "options": [
              {
                "text_es": "Sí, es un día muy agradable.",
                "text_ko_hint": "네, 정말 기분 좋은 날씨네요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, es un día mucho agradable.",
                "text_ko_hint": "네, 정말 기분 좋은 날씨네요.",
                "correct": false,
                "correctionKo": "형용사(agradable)를 강조할 때는 'muy'를 써요. 'mucho'는 명사를 꾸미거나 동사를 강조할 때 쓰고, 형용사 앞에는 어울리지 않아요.",
                "correctEs": "Sí, es un día muy agradable.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "A veces en la tarde hace mucho viento por aquí.",
            "text_ko": "가끔 오후에는 이 동네에 바람이 아주 많이 불어.",
            "options": [
              {
                "text_es": "Sí, es cierto. Ayer había mucho viento también.",
                "text_ko_hint": "네, 맞아요. 어제도 바람이 많이 불었어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, es cierto. Ayer había muy viento también.",
                "text_ko_hint": "네, 맞아요. 어제도 바람이 많이 불었어요.",
                "correct": false,
                "correctionKo": "'viento'(바람)는 명사라서 앞에는 'mucho'를 써야 해요. 'muy'는 명사가 아니라 형용사나 부사를 꾸밀 때 써요.",
                "correctEs": "Sí, es cierto. Ayer había mucho viento también.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "En fin, hay que disfrutar los días buenos. ¡Nos vemos pronto!",
            "text_ko": "아무튼, 좋은 날은 즐겨야지. 곧 또 보자!",
            "options": [
              {
                "text_es": "Así es. ¡Que tengas una tarde muy tranquila!",
                "text_ko_hint": "맞아요. 아주 평온한 오후 보내세요!",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Así es. ¡Que tengas una tarde mucho tranquila!",
                "text_ko_hint": "맞아요. 아주 평온한 오후 보내세요!",
                "correct": false,
                "correctionKo": "형용사 'tranquila' 앞에는 'muy'를 써야 해요. 'mucho'는 여기서 쓰이면 문법적으로 어색해요.",
                "correctEs": "Así es. ¡Que tengas una tarde muy tranquila!",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "명절 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 명절 추억 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "El año pasado celebré el Día de Muertos con toda mi familia.",
            "text_ko": "작년에 나는 가족 모두와 함께 죽은 자의 날을 기념했어.",
            "options": [
              {
                "text_es": "Qué bonito. Yo también celebré con mis amigos.",
                "text_ko_hint": "정말 좋네요. 저도 친구들과 함께 기념했어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bonito. Yo también celebro con mis amigos el año pasado.",
                "text_ko_hint": "정말 좋네요. 저도 작년에 친구들과 함께 기념했어요.",
                "correct": false,
                "correctionKo": "'작년에'처럼 완료된 과거 시점을 말할 때는 단순과거(pretérito)를 써야 해요. 'celebro'는 현재형이라 어울리지 않고, 'celebré'라고 해야 맞아요.",
                "correctEs": "Qué bonito. Yo también celebré con mis amigos el año pasado.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Preparé un altar muy bonito con flores de cempasúchil. ¿Y tú qué preparaste?",
            "text_ko": "메리골드 꽃으로 정말 예쁜 제단을 준비했어. 너는 뭘 준비했어?",
            "options": [
              {
                "text_es": "Preparé pan de muerto y fotos de mi abuela.",
                "text_ko_hint": "죽은 자의 빵이랑 할머니 사진을 준비했어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Preparo pan de muerto y fotos de mi abuela.",
                "text_ko_hint": "죽은 자의 빵이랑 할머니 사진을 준비했어요.",
                "correct": false,
                "correctionKo": "이미 끝난 지난 명절 이야기를 하고 있으니 단순과거 'preparé'를 써야 해요. 'preparo'는 현재형이라 지금 하고 있다는 뜻이 돼요.",
                "correctEs": "Preparé pan de muerto y fotos de mi abuela.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Qué lindo recuerdo. Ojalá este año también podamos celebrar juntas.",
            "text_ko": "정말 좋은 추억이네. 올해도 함께 기념할 수 있으면 좋겠다.",
            "options": [
              {
                "text_es": "Claro que sí, Rosa. Va a ser muy especial.",
                "text_ko_hint": "물론이죠, 로사. 정말 특별할 거예요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Claro que sí, Rosa. Fue muy especial.",
                "text_ko_hint": "물론이죠, 로사. 정말 특별할 거예요.",
                "correct": false,
                "correctionKo": "로사가 방금 '올해도'라고 앞으로 있을 일을 말했으니, 대답도 미래를 가리켜야 해요. 'fue'는 과거형이라 시제가 맞지 않아요.",
                "correctEs": "Claro que sí, Rosa. Va a ser muy especial.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "손주 이야기",
        "start": "n1",
        "endMessage": "도냐 로사가 손주들 자랑을 잔뜩 늘어놨어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Tengo cinco nietos. Mis nietos son mi alegría.",
            "text_ko": "나는 손주가 다섯 명이야. 내 손주들은 내 기쁨이지.",
            "options": [
              {
                "text_es": "Qué bonito. ¿Y cuántos años tienen tus nietos?",
                "text_ko_hint": "정말 예쁘네요. 손주분들은 몇 살이에요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bonito. ¿Y cuántos años tienen sus nietos?",
                "text_ko_hint": "정말 예쁘네요. 손주분들은 몇 살이에요?",
                "correct": false,
                "correctionKo": "로사에게 직접 반말로 'tú'를 쓰며 얘기하고 있으니, '너의 손주들'은 'tus nietos'라고 해야 해요. 'sus'는 '그의/그녀의/당신들의'처럼 다른 대상을 가리켜서 어색해요.",
                "correctEs": "Qué bonito. ¿Y cuántos años tienen tus nietos?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "El mayor tiene quince años y la menor tiene tres años.",
            "text_ko": "제일 큰 애는 열다섯 살이고 막내는 세 살이야.",
            "options": [
              {
                "text_es": "Qué diferencia de edad. Deben quererla mucho.",
                "text_ko_hint": "나이 차이가 크네요. 다들 그 아이를 정말 예뻐하시겠어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué diferencia de edad. Deben quiere mucho.",
                "text_ko_hint": "나이 차이가 크네요. 다들 그 아이를 정말 예뻐하시겠어요.",
                "correct": false,
                "correctionKo": "'deber' 뒤에는 동사원형이 와야 해요. 'quiere'는 활용된 형태라서 안 되고, 원형인 'querer'를 써야 맞아요.",
                "correctEs": "Qué diferencia de edad. Deben quererla mucho.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Sí, mis hijos y yo los consentimos mucho. Bueno, voy a llamarles ahora.",
            "text_ko": "응, 나랑 우리 애들이 다들 예뻐해 죽지. 자, 이제 애들한테 전화해야겠다.",
            "options": [
              {
                "text_es": "Ve, no te preocupes. Salúdalos de mi parte.",
                "text_ko_hint": "가세요, 걱정 마요. 제 안부 전해주세요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Ve, no te preocupes. Salúdales de mi parte.",
                "text_ko_hint": "가세요, 걱정 마요. 제 안부 전해주세요.",
                "correct": false,
                "correctionKo": "사람을 직접목적어로 받을 때 라틴아메리카에서는 보통 'los saludas'처럼 'los/las'를 써요. 'les'는 간접목적어라서 이 문맥에서는 조금 어색해요.",
                "correctEs": "Ve, no te preocupes. Salúdalos de mi parte.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "음악 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 신나게 음악 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Me encanta la música ranchera. Me recuerda a mi juventud.",
            "text_ko": "나는 란체라 음악을 정말 좋아해. 내 젊은 시절이 생각나거든.",
            "options": [
              {
                "text_es": "A mí también me interesa mucho esa música.",
                "text_ko_hint": "저도 그 음악에 정말 관심이 많아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "A mí también me interesan mucho esa música.",
                "text_ko_hint": "저도 그 음악에 정말 관심이 많아요.",
                "correct": false,
                "correctionKo": "'esa música'(그 음악)는 단수 명사라서 'interesar'도 단수형인 'interesa'를 써야 해요. 'interesan'은 복수 대상 앞에 쓰는 형태예요.",
                "correctEs": "A mí también me interesa mucho esa música.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Lo que sí me molestan son las canciones muy ruidosas de ahora.",
            "text_ko": "요즘 너무 시끄러운 노래들은 좀 거슬려.",
            "options": [
              {
                "text_es": "Jaja, entiendo. A mí también me molestan un poco.",
                "text_ko_hint": "하하, 이해해요. 저도 조금 거슬려요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Jaja, entiendo. A mí también me molesta un poco.",
                "text_ko_hint": "하하, 이해해요. 저도 조금 거슬려요.",
                "correct": false,
                "correctionKo": "'las canciones'(노래들)는 복수라서 'molestar'도 복수형인 'molestan'을 써야 해요. 'molesta'는 단수 대상에 쓰는 형태예요.",
                "correctEs": "Jaja, entiendo. A mí también me molestan un poco.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Algún día te voy a poner mis discos viejos de vinil.",
            "text_ko": "언젠가 내 오래된 LP판들 들려줄게.",
            "options": [
              {
                "text_es": "Me encantaría escucharlos, Rosa.",
                "text_ko_hint": "정말 듣고 싶어요, 로사.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Me encantaría escuchar los, Rosa.",
                "text_ko_hint": "정말 듣고 싶어요, 로사.",
                "correct": false,
                "correctionKo": "직접목적격 대명사 'los'는 동사원형 뒤에 붙여서 한 단어로 써요. 따로 띄어 쓰면 틀린 표현이 돼요.",
                "correctEs": "Me encantaría escucharlos, Rosa.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "동네 산책 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 함께 동네를 산책하며 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Mira, este parque es donde jugaba de niña.",
            "text_ko": "봐봐, 이 공원이 내가 어릴 때 놀던 곳이야.",
            "options": [
              {
                "text_es": "Qué bonito. Y esa banca de allá se ve muy vieja.",
                "text_ko_hint": "정말 예쁘네요. 저기 저 벤치는 정말 오래돼 보여요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bonito. Y este banca de allá se ve muy vieja.",
                "text_ko_hint": "정말 예쁘네요. 저기 저 벤치는 정말 오래돼 보여요.",
                "correct": false,
                "correctionKo": "'banca'(벤치)는 여성 명사라서 지시형용사도 여성형인 'esa'를 써야 해요. 게다가 멀리 있는 것을 가리킬 땐 'este'(이것)보다 'esa/esta'가 더 알맞아요.",
                "correctEs": "Qué bonito. Y esa banca de allá se ve muy vieja.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Sí, tiene como cuarenta años esa banca. Y eso de allá es la vieja fuente.",
            "text_ko": "응, 저 벤치 아마 사십 년은 됐을 거야. 그리고 저기 저건 오래된 분수야.",
            "options": [
              {
                "text_es": "Qué padre. Esta fuente debe tener muchas historias.",
                "text_ko_hint": "정말 멋지네요. 이 분수는 사연이 많을 것 같아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué padre. Eso fuente debe tener muchas historias.",
                "text_ko_hint": "정말 멋지네요. 이 분수는 사연이 많을 것 같아요.",
                "correct": false,
                "correctionKo": "'eso'는 중성 지시대명사라서 이름이 정해진 명사(fuente) 앞에는 쓰지 않아요. 'fuente'는 여성 명사니까 'esta/esa fuente'처럼 써야 맞아요.",
                "correctEs": "Qué padre. Esta fuente debe tener muchas historias.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Este barrio ha cambiado mucho, pero sigue siendo bonito. Vámonos, ya se hace tarde.",
            "text_ko": "이 동네가 많이 변했지만 여전히 예뻐. 가자, 벌써 늦었네.",
            "options": [
              {
                "text_es": "Tienes razón. Gracias por el paseo, Rosa.",
                "text_ko_hint": "맞아요. 산책 시켜주셔서 감사해요, 로사.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Tienes razón. Gracias por eso paseo, Rosa.",
                "text_ko_hint": "맞아요. 산책 시켜주셔서 감사해요, 로사.",
                "correct": false,
                "correctionKo": "'paseo'(산책)는 남성 명사라서 지시형용사도 남성형인 'ese'를 써야 해요. 'eso'는 성별이 없는 중성 대명사라서 명사 바로 앞에는 쓰지 않아요.",
                "correctEs": "Tienes razón. Gracias por ese paseo, Rosa.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "저녁 초대",
        "start": "n1",
        "endMessage": "도냐 로사의 저녁 초대에 마음이 따뜻해졌어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "¿Puedes venir a cenar a mi casa el viernes?",
            "text_ko": "금요일에 우리 집에 저녁 먹으러 올 수 있어?",
            "options": [
              {
                "text_es": "Sí, puedo ir el viernes sin problema.",
                "text_ko_hint": "네, 금요일에 문제없이 갈 수 있어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, puedo ir el viernes sin problemo.",
                "text_ko_hint": "네, 금요일에 문제없이 갈 수 있어요.",
                "correct": false,
                "correctionKo": "'문제'는 스페인어로 'problema'예요. '-a'로 끝나지만 그리스어에서 온 남성 명사라서 'el problema'라고 쓰고, 'problemo'라는 단어는 없어요.",
                "correctEs": "Sí, puedo ir el viernes sin problema.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Perfecto. ¿Puedes traer algo de tomar?",
            "text_ko": "완벽해. 마실 것 좀 가져올 수 있어?",
            "options": [
              {
                "text_es": "Claro, puedo traer una botella de refresco.",
                "text_ko_hint": "그럼요, 음료수 한 병 가져올 수 있어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Claro, puedo traigo una botella de refresco.",
                "text_ko_hint": "그럼요, 음료수 한 병 가져올 수 있어요.",
                "correct": false,
                "correctionKo": "'poder' 뒤에는 동사원형이 와야 해요. 'traigo'는 활용된 형태(나는 가져온다)라서 원형인 'traer'를 써야 맞아요.",
                "correctEs": "Claro, puedo traer una botella de refresco.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Perfecto, te espero el viernes a las siete.",
            "text_ko": "좋아, 금요일 일곱 시에 기다릴게.",
            "options": [
              {
                "text_es": "Ahí estaré. ¡Gracias por invitarme!",
                "text_ko_hint": "그때 갈게요. 초대해줘서 고마워요!",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Ahí estaré. ¡Gracias por invitar!",
                "text_ko_hint": "초대해줘서 고마워요! 그때 갈게요.",
                "correct": false,
                "correctionKo": "'나를 초대해줘서'라고 말할 때는 목적어 'me'를 동사원형 뒤에 붙여야 해요. 그냥 'invitar'만 쓰면 누구를 초대했는지가 빠지게 돼요.",
                "correctEs": "Ahí estaré. ¡Gracias por invitarme!",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "라디오 듣기",
        "start": "n1",
        "endMessage": "도냐 로사와 라디오 이야기를 나누며 함께 웃었어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Estoy escuchando mi programa favorito de radio. ¿Tú escuchas radio también?",
            "text_ko": "나 지금 내가 제일 좋아하는 라디오 프로그램 듣고 있어. 너도 라디오 들어?",
            "options": [
              {
                "text_es": "Sí, ahora mismo estoy escuchando música en el radio.",
                "text_ko_hint": "네, 지금 저도 라디오로 음악 듣고 있어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, ahora mismo estoy escuchar música en el radio.",
                "text_ko_hint": "네, 지금 저도 라디오로 음악 듣고 있어요.",
                "correct": false,
                "correctionKo": "진행형(estar + gerundio)에서는 'estar' 다음에 '-ando/-iendo' 형태가 와야 해요. 'escuchar'는 동사원형이라 여기서는 'escuchando'로 바꿔야 맞아요.",
                "correctEs": "Sí, ahora mismo estoy escuchando música en el radio.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Qué bien. Mi vecina también está oyendo las noticias en su cocina.",
            "text_ko": "좋네. 우리 이웃 아주머니도 부엌에서 뉴스를 듣고 있어.",
            "options": [
              {
                "text_es": "Ah, sí. Yo la vi cocinando mientras escuchaba.",
                "text_ko_hint": "아, 네. 저는 그분이 들으면서 요리하는 걸 봤어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Ah, sí. Yo la vi cocina mientras escuchaba.",
                "text_ko_hint": "아, 네. 저는 그분이 들으면서 요리하는 걸 봤어요.",
                "correct": false,
                "correctionKo": "누군가 어떤 행동을 '하고 있는 것을' 봤다고 할 때는 현재분사(-ando/-iendo)를 써요. 'cocina'는 활용형이라 여기 문맥에는 안 맞고, 'cocinando'가 맞아요.",
                "correctEs": "Ah, sí. Yo la vi cocinando mientras escuchaba.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Así es la vida en el barrio, siempre algo sonando por todos lados.",
            "text_ko": "동네 사는 게 다 그렇지, 항상 어디선가 뭔가 울리고 있고.",
            "options": [
              {
                "text_es": "Jaja, es verdad. Me encanta que siempre esté sonando algo.",
                "text_ko_hint": "하하, 맞아요. 항상 뭔가 울리고 있는 게 저는 참 좋아요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Jaja, es verdad. Me encanta que siempre esté sonar algo.",
                "text_ko_hint": "하하, 맞아요. 항상 뭔가 울리고 있는 게 저는 참 좋아요.",
                "correct": false,
                "correctionKo": "'estar' 다음에는 동사원형이 아니라 현재분사(-ando/-iendo)가 와야 해요. 'sonar'는 원형이라 여기서는 'sonando'로 바꿔야 자연스러워요.",
                "correctEs": "Jaja, es verdad. Me encanta que siempre esté sonando algo.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "옛날 추억 이야기",
        "start": "n1",
        "endMessage": "도냐 로사가 옛날 이야기를 들려줘서 정말 즐거웠어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Cuando era joven, fui bailarina por dos años.",
            "text_ko": "젊었을 때, 나는 이 년 동안 무용수였어.",
            "options": [
              {
                "text_es": "¡Qué increíble! ¿Y dónde bailabas?",
                "text_ko_hint": "정말 대단해요! 어디서 춤을 췄어요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Qué increíble! ¿Y dónde baila?",
                "text_ko_hint": "정말 대단해요! 어디서 춤을 췄어요?",
                "correct": false,
                "correctionKo": "옛날 일을 물어보는 질문이니 과거형을 써야 해요. 'baila'는 현재형이라서 어울리지 않고, 반복되던 습관을 물을 때는 불완료과거 'bailabas'가 자연스러워요.",
                "correctEs": "¡Qué increíble! ¿Y dónde bailabas?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Bailaba en un teatro del centro. Un día, hasta tuve la oportunidad de bailar para el alcalde.",
            "text_ko": "시내에 있는 극장에서 췄어. 어느 날은, 시장님 앞에서 춤출 기회까지 있었지.",
            "options": [
              {
                "text_es": "¡No lo puedo creer! ¿Y qué hiciste después de eso?",
                "text_ko_hint": "믿을 수가 없어요! 그 후에 뭘 했어요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "¡No lo puedo creer! ¿Y qué haces después de eso?",
                "text_ko_hint": "믿을 수가 없어요! 그 후에 뭘 했어요?",
                "correct": false,
                "correctionKo": "옛날에 일어난 완결된 사건을 물어볼 때는 단순과거를 써야 해요. 'haces'는 현재형이라서 시제가 맞지 않고, 'hiciste'(hacer의 불규칙 과거형)가 맞아요.",
                "correctEs": "¡No lo puedo creer! ¿Y qué hiciste después de eso?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Después me casé y dejé de bailar, pero fue una época muy feliz.",
            "text_ko": "그 다음엔 결혼하고 춤을 그만뒀지만, 정말 행복한 시절이었어.",
            "options": [
              {
                "text_es": "Fue una historia hermosa, Rosa. Gracias por contármela.",
                "text_ko_hint": "정말 아름다운 이야기예요, 로사. 들려주셔서 감사해요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Fue una historia hermosa, Rosa. Gracias por contarme la.",
                "text_ko_hint": "정말 아름다운 이야기예요, 로사. 들려주셔서 감사해요.",
                "correct": false,
                "correctionKo": "직접목적격 대명사 'la'는 동사원형 뒤에 붙여서 한 단어로 써야 해요. 띄어 쓰면 안 되고, 'me'와 'la'가 함께 붙어 'contármela'가 돼요.",
                "correctEs": "Fue una historia hermosa, Rosa. Gracias por contármela.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 계절",
        "start": "n1",
        "endMessage": "도냐 로사와 좋아하는 계절 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Mi estación favorita es la primavera. ¿Cuál es la tuya?",
            "text_ko": "내가 제일 좋아하는 계절은 봄이야. 너는 어떤 계절을 제일 좋아해?",
            "options": [
              {
                "text_es": "A mí me gusta más el otoño que la primavera.",
                "text_ko_hint": "저는 봄보다 가을이 더 좋아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "A mí me gusta más el otoño de la primavera.",
                "text_ko_hint": "저는 봄보다 가을이 더 좋아요.",
                "correct": false,
                "correctionKo": "'~보다 더'라는 비교 표현은 'más ... que'예요. 'de'가 아니라 'que'를 써야 비교문이 완성돼요.",
                "correctEs": "A mí me gusta más el otoño que la primavera.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "¿En serio? Yo creo que el otoño es tan bonito como la primavera, pero hace más frío.",
            "text_ko": "정말? 나는 가을도 봄만큼 예쁘다고 생각하는데, 대신 더 춥지.",
            "options": [
              {
                "text_es": "Sí, pero a mí no me gusta tanto el frío como a ti.",
                "text_ko_hint": "네, 근데 저는 당신만큼 추위를 좋아하진 않아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, pero a mí no me gusta tan el frío como a ti.",
                "text_ko_hint": "네, 근데 저는 당신만큼 추위를 좋아하진 않아요.",
                "correct": false,
                "correctionKo": "명사(el frío) 앞에서 '만큼'을 나타낼 때는 'tanto ... como'를 써요. 'tan ... como'는 형용사나 부사를 비교할 때 쓰고, 명사 앞에는 'tanto'가 맞아요.",
                "correctEs": "Sí, pero a mí no me gusta tanto el frío como a ti.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Jaja, cada quien con su gusto. Bueno, disfruta tu otoño favorito.",
            "text_ko": "하하, 사람마다 취향이 다른 거지. 자, 네가 좋아하는 가을 잘 즐겨.",
            "options": [
              {
                "text_es": "Gracias, Rosa. Tú disfruta tu primavera también.",
                "text_ko_hint": "고마워요, 로사. 당신도 좋아하는 봄 잘 즐기세요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, Rosa. Tú disfruta tu primavera tanto.",
                "text_ko_hint": "고마워요, 로사. 당신도 좋아하는 봄 잘 즐기세요.",
                "correct": false,
                "correctionKo": "'tanto'는 혼자서 '~만큼'이라는 비교문에 쓰이는 말이라, 이 문장처럼 비교 대상이 없을 때는 그냥 'también'(~도)을 쓰는 게 자연스러워요.",
                "correctEs": "Gracias, Rosa. Tú disfruta tu primavera también.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "집안일 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 집안일 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Hoy tengo que lavar toda la ropa. Hay mucho que hacer.",
            "text_ko": "오늘은 빨래를 다 해야 해. 할 일이 정말 많네.",
            "options": [
              {
                "text_es": "Yo también tengo que limpiar mi cuarto hoy.",
                "text_ko_hint": "저도 오늘 제 방을 청소해야 해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Yo también tengo limpiar mi cuarto hoy.",
                "text_ko_hint": "저도 오늘 제 방을 청소해야 해요.",
                "correct": false,
                "correctionKo": "'~해야 한다'는 'tener que + 동사원형'이에요. 'que'를 빼먹으면 문법적으로 틀린 문장이 돼요.",
                "correctEs": "Yo también tengo que limpiar mi cuarto hoy.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Después de lavar, tengo que barrer el patio también.",
            "text_ko": "빨래하고 나면, 마당도 쓸어야 해.",
            "options": [
              {
                "text_es": "Uy, tienes mucho que hacer hoy.",
                "text_ko_hint": "이런, 오늘 할 일이 정말 많으시네요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Uy, tienes que mucho hacer hoy.",
                "text_ko_hint": "이런, 오늘 할 일이 정말 많으시네요.",
                "correct": false,
                "correctionKo": "'할 일이 많다'는 'tener mucho que hacer'라고 순서대로 써야 해요. 'que'가 'mucho'보다 앞에 오면 어순이 뒤바뀌어 어색해져요.",
                "correctEs": "Uy, tienes mucho que hacer hoy.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Así es la vida de casa. Bueno, me pongo a trabajar. ¡Hasta luego!",
            "text_ko": "집안일이 다 그렇지 뭐. 자, 나는 일해야겠다. 다음에 봐!",
            "options": [
              {
                "text_es": "Hasta luego, Rosa. No trabajes demasiado.",
                "text_ko_hint": "다음에 봬요, 로사. 너무 무리하지 마세요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Hasta luego, Rosa. No trabaja demasiado.",
                "text_ko_hint": "다음에 봬요, 로사. 너무 무리하지 마세요.",
                "correct": false,
                "correctionKo": "'너'에게 부정 명령을 할 때는 'no' 뒤에 접속법 현재형을 써서 'no trabajes'라고 해야 해요. 'trabaja'는 긍정 명령형이라 부정문에는 맞지 않아요.",
                "correctEs": "Hasta luego, Rosa. No trabajes demasiado.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "병원 방문 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 건강 관리 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Mañana tengo cita con el doctor para un chequeo.",
            "text_ko": "내일 검진받으러 병원 예약이 있어.",
            "options": [
              {
                "text_es": "Qué bien que vayas. Deberías cuidarte más.",
                "text_ko_hint": "가시는 게 잘하시는 거예요. 몸을 좀 더 챙기셔야 해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bien que vayas. Debes de cuidarte más.",
                "text_ko_hint": "가시는 게 잘하시는 거예요. 몸을 좀 더 챙기셔야 해요.",
                "correct": false,
                "correctionKo": "'deber + 동사원형'은 강한 의무나 조언(~해야 한다)을 나타내요. 'deber de + 동사원형'은 추측(~인 것 같다)을 나타내는 표현이라 뜻이 달라져요.",
                "correctEs": "Qué bien que vayas. Deberías cuidarte más.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Tienes razón. También debo caminar más, dice el doctor.",
            "text_ko": "맞아. 의사 선생님이 걷기도 더 많이 해야 한다고 하시더라.",
            "options": [
              {
                "text_es": "Sí, deberías caminar todos los días un poco.",
                "text_ko_hint": "네, 매일 조금씩 걸으셔야 해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, deberías caminando todos los días un poco.",
                "text_ko_hint": "네, 매일 조금씩 걸으셔야 해요.",
                "correct": false,
                "correctionKo": "'deber' 뒤에는 동사원형이 와야 해요. 'caminando'는 현재분사 형태라서 여기서는 원형인 'caminar'를 써야 맞아요.",
                "correctEs": "Sí, deberías caminar todos los días un poco.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Voy a intentarlo. Gracias por preocuparte por mí, mija.",
            "text_ko": "한번 해볼게. 나 걱정해줘서 고마워, 얘야.",
            "options": [
              {
                "text_es": "Claro que sí. Cuéntame cómo te fue en la cita.",
                "text_ko_hint": "당연하죠. 진료 어땠는지 나중에 얘기해주세요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Claro que sí. Cuéntame cómo te va en la cita.",
                "text_ko_hint": "당연하죠. 진료 어땠는지 나중에 얘기해주세요.",
                "correct": false,
                "correctionKo": "내일 있을 예약이 어떻게 '되었는지' 나중에 결과를 물어보는 거라 완료된 과거를 써야 해요. 'va'는 현재형이라 시제가 맞지 않고, 'fue'가 자연스러워요.",
                "correctEs": "Claro que sí. Cuéntame cómo te fue en la cita.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 TV 프로그램",
        "start": "n1",
        "endMessage": "도냐 로사와 좋아하는 드라마 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Todas las noches veo mi telenovela favorita. ¿La conoces?",
            "text_ko": "매일 밤 내가 제일 좋아하는 드라마를 봐. 너 그거 알아?",
            "options": [
              {
                "text_es": "Sí, la conozco. Mi mamá también la ve.",
                "text_ko_hint": "네, 그거 알아요. 저희 엄마도 그거 보세요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, lo conozco. Mi mamá también la ve.",
                "text_ko_hint": "네, 그거 알아요. 저희 엄마도 그거 보세요.",
                "correct": false,
                "correctionKo": "'telenovela'(드라마)는 여성 명사라서 대명사도 여성형인 'la'를 써야 해요. 'lo'는 남성 명사를 대신할 때 쓰는 대명사예요.",
                "correctEs": "Sí, la conozco. Mi mamá también la ve.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "El protagonista es guapísimo. ¿Ya viste el capítulo de ayer?",
            "text_ko": "남자 주인공이 정말 잘생겼어. 어제 회차 벌써 봤어?",
            "options": [
              {
                "text_es": "No, todavía no lo veo. Lo voy a ver hoy en la noche.",
                "text_ko_hint": "아니요, 아직 안 봤어요. 오늘 밤에 볼 거예요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "No, todavía no lo veo. Voy ver lo hoy en la noche.",
                "text_ko_hint": "아니요, 아직 안 봤어요. 오늘 밤에 볼 거예요.",
                "correct": false,
                "correctionKo": "미래 표현 'ir a'에서는 'a'를 빼먹으면 안 돼요. 또한 목적격 대명사 'lo'는 동사원형 뒤에 붙이거나 활용동사 앞에 와야 하는데, 여기선 'a'도 빠지고 위치도 어긋났어요.",
                "correctEs": "No, todavía no lo veo. Lo voy a ver hoy en la noche.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Ay, no te cuento nada entonces, para no arruinarte la sorpresa.",
            "text_ko": "아, 그럼 아무것도 말 안 해줄게, 놀라움을 망치지 않게.",
            "options": [
              {
                "text_es": "Gracias, Rosa. Mañana te cuento qué me pareció.",
                "text_ko_hint": "고마워요, 로사. 내일 어땠는지 말씀드릴게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, Rosa. Mañana te cuento qué me parecen.",
                "text_ko_hint": "고마워요, 로사. 내일 어땠는지 말씀드릴게요.",
                "correct": false,
                "correctionKo": "여기서는 드라마 한 회차(하나의 경험)에 대한 감상을 말하는 거라 단수형 'parece'류가 맞아요. 'parecen'은 복수 대상을 가리킬 때 쓰는 형태라 안 어울려요.",
                "correctEs": "Gracias, Rosa. Mañana te cuento qué me pareció.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "커피냐 차냐",
        "start": "n1",
        "endMessage": "도냐 로사와 커피와 차 취향에 대해 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Yo cada mañana tomo un cafecito. ¿Tú prefieres café o té?",
            "text_ko": "나는 매일 아침 커피 한 잔을 마셔. 너는 커피랑 차 중에 뭐가 더 좋아?",
            "options": [
              {
                "text_es": "Prefiero el té, sobre todo en las noches.",
                "text_ko_hint": "저는 차를 더 좋아해요, 특히 밤에요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Prefiero el té que el café, sobre todo en las noches.",
                "text_ko_hint": "저는 커피보다 차를 더 좋아해요, 특히 밤에요.",
                "correct": false,
                "correctionKo": "'preferir'는 그 자체로 '더 좋아하다'라는 뜻이 있어서 뒤에 바로 'que'를 붙이지 않아요. 비교할 대상까지 말하고 싶으면 'me gusta más ... que ...'를 쓰는 게 자연스러워요.",
                "correctEs": "Prefiero el té al café, sobre todo en las noches.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "A mí el té me cae pesado. Me gusta más el café bien cargado.",
            "text_ko": "나는 차 마시면 속이 좀 안 좋아. 나는 진한 커피가 더 좋아.",
            "options": [
              {
                "text_es": "Entiendo. A cada quien le gusta algo distinto.",
                "text_ko_hint": "이해해요. 사람마다 좋아하는 게 다르죠.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Entiendo. A cada quien gusta algo distinto.",
                "text_ko_hint": "이해해요. 사람마다 좋아하는 게 다르죠.",
                "correct": false,
                "correctionKo": "'gustar' 동사는 항상 간접목적격 대명사(me, te, le, nos, les)와 함께 써야 해요. 'a cada quien'이 있어도 'le'를 빼면 문장이 불완전해져요.",
                "correctEs": "Entiendo. A cada quien le gusta algo distinto.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "La próxima vez te preparo un té bien rico, a ver si te gusta más.",
            "text_ko": "다음엔 진짜 맛있는 차를 준비해줄게, 그게 더 마음에 드는지 보자.",
            "options": [
              {
                "text_es": "Me encantaría probarlo, Rosa.",
                "text_ko_hint": "정말 맛보고 싶어요, 로사.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Me encantaría probar eso té, Rosa.",
                "text_ko_hint": "정말 맛보고 싶어요, 로사.",
                "correct": false,
                "correctionKo": "'té'(차)는 남성 명사라서 지시형용사도 남성형인 'ese'를 써야 해요. 'eso'는 성별이 없는 중성 대명사라 명사 앞에는 쓰지 않아요.",
                "correctEs": "Me encantaría probar ese té, Rosa.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "요즘 날씨 변화",
        "start": "n1",
        "endMessage": "도냐 로사와 요즘 날씨 변화 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Compré este paraguas por si llueve más tarde.",
            "text_ko": "나중에 비 올까 봐 이 우산을 샀어.",
            "options": [
              {
                "text_es": "Buena idea. Yo salí para el mercado sin paraguas.",
                "text_ko_hint": "좋은 생각이에요. 저는 우산 없이 시장에 나왔어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Buena idea. Yo salí por el mercado sin paraguas.",
                "text_ko_hint": "좋은 생각이에요. 저는 시장에 가려고 우산 없이 나왔어요.",
                "correct": false,
                "correctionKo": "목적지나 목표(~하러, ~을 향해)를 말할 때는 'para'를 써요. 'por'은 이유나 경로(~을 통해, ~때문에)를 나타낼 때 쓰는 말이라 여기서는 어울리지 않아요.",
                "correctEs": "Buena idea. Yo salí para el mercado sin paraguas.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Con este clima loco, es mejor estar preparados. Ayer llovió mucho por la tarde.",
            "text_ko": "요즘 날씨가 워낙 종잡을 수 없어서, 준비하는 게 나아. 어제도 오후에 비가 많이 왔어.",
            "options": [
              {
                "text_es": "Sí, y por eso no pude salir a caminar.",
                "text_ko_hint": "맞아요, 그래서 산책하러 못 나갔어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, y para eso no pude salir a caminar.",
                "text_ko_hint": "맞아요, 그래서 산책하러 못 나갔어요.",
                "correct": false,
                "correctionKo": "결과의 원인/이유(그래서, ~때문에)를 말할 때는 'por eso'를 써요. 'para eso'는 '그것을 위해서'라는 목적을 나타내서 뜻이 달라져요.",
                "correctEs": "Sí, y por eso no pude salir a caminar.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Ojalá mañana salga el sol otra vez. Bueno, cuídate en el camino.",
            "text_ko": "내일은 해가 다시 나오면 좋겠다. 자, 가는 길 조심해.",
            "options": [
              {
                "text_es": "Gracias, Rosa. Voy para mi casa antes de que llueva.",
                "text_ko_hint": "고마워요, 로사. 비 오기 전에 집으로 갈게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, Rosa. Voy por mi casa antes de que llueva.",
                "text_ko_hint": "고마워요, 로사. 비 오기 전에 집으로 갈게요.",
                "correct": false,
                "correctionKo": "목적지(~쪽으로, ~을 향해)를 말할 때는 'para'가 맞아요. 'por'을 쓰면 '집 근처를 지나서/통해서'라는 다른 의미가 돼요.",
                "correctEs": "Gracias, Rosa. Voy para mi casa antes de que llueva.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 색깔",
        "start": "n1",
        "endMessage": "도냐 로사와 좋아하는 색깔 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Mira mi rebozo nuevo, es de color rosa. Mi color favorito.",
            "text_ko": "내 새 숄 좀 봐, 분홍색이야. 내가 제일 좋아하는 색이지.",
            "options": [
              {
                "text_es": "Qué bonito. A mí me gusta más el azul.",
                "text_ko_hint": "정말 예쁘네요. 저는 파란색이 더 좋아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bonita. A mí me gusta más el azul.",
                "text_ko_hint": "정말 예쁘네요. 저는 파란색이 더 좋아요.",
                "correct": false,
                "correctionKo": "여기서 'qué bonito'는 앞서 언급된 'rebozo'(남성 명사)를 가리키니까 남성형 'bonito'를 써야 해요. 'bonita'는 여성 명사를 꾸밀 때 쓰는 형태예요.",
                "correctEs": "Qué bonito. A mí me gusta más el azul.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "El azul es lindo también. Combina con casi toda la ropa.",
            "text_ko": "파란색도 예쁘지. 옷이랑 거의 다 잘 어울려.",
            "options": [
              {
                "text_es": "Sí, tengo varias camisas azules.",
                "text_ko_hint": "네, 저 파란 셔츠가 여러 벌 있어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, tengo varias camisas azul.",
                "text_ko_hint": "네, 저 파란 셔츠가 여러 벌 있어요.",
                "correct": false,
                "correctionKo": "색깔 형용사도 명사의 수에 맞춰 복수형이 돼야 해요. 'camisas'(셔츠들)가 복수이니 'azules'처럼 '-es'를 붙여 복수형으로 써야 맞아요.",
                "correctEs": "Sí, tengo varias camisas azules.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Qué bien. Los colores alegres siempre me ponen de buen humor.",
            "text_ko": "좋네. 밝은 색깔들은 항상 내 기분을 좋게 만들어줘.",
            "options": [
              {
                "text_es": "A mí también. Me gustan los colores brillantes.",
                "text_ko_hint": "저도요. 저는 밝은 색깔들을 좋아해요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "A mí también. Me gustan los colores brillante.",
                "text_ko_hint": "저도요. 저는 밝은 색깔들을 좋아해요.",
                "correct": false,
                "correctionKo": "'colores'(색깔들)가 복수 명사이니 형용사도 복수형인 'brillantes'로 맞춰야 해요. '-e'로 끝나는 형용사는 복수형에서 '-es'가 붙어요.",
                "correctEs": "A mí también. Me gustan los colores brillantes.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "전화 통화 이야기",
        "start": "n1",
        "endMessage": "도냐 로사와 전화 통화에 대한 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Ayer hablé por teléfono con mi hija dos horas enteras.",
            "text_ko": "어제 딸이랑 전화로 두 시간 내내 통화했어.",
            "options": [
              {
                "text_es": "Qué bien. ¿Conoces bien a tu yerno también?",
                "text_ko_hint": "좋네요. 사위분도 잘 아세요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bien. ¿Sabes bien a tu yerno también?",
                "text_ko_hint": "좋네요. 사위분도 잘 아세요?",
                "correct": false,
                "correctionKo": "사람을 안다고 할 때는 'conocer'를 써요. 'saber'는 정보나 방법(어떻게 하는지)을 안다고 할 때 쓰는 동사라서 사람 앞에는 어울리지 않아요.",
                "correctEs": "Qué bien. ¿Conoces bien a tu yerno también?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Sí, lo conozco muy bien. Es un buen muchacho, y sabe cocinar muy rico.",
            "text_ko": "응, 잘 알지. 정말 좋은 청년이고, 요리도 정말 잘해.",
            "options": [
              {
                "text_es": "Qué suerte. Yo no sé cocinar tan bien.",
                "text_ko_hint": "운이 좋으시네요. 저는 요리를 그렇게 잘 못해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué suerte. Yo no conozco cocinar tan bien.",
                "text_ko_hint": "운이 좋으시네요. 저는 요리를 그렇게 잘 못해요.",
                "correct": false,
                "correctionKo": "'~할 줄 안다'처럼 기술이나 방법을 안다고 할 때는 'saber + 동사원형'을 써요. 'conocer'는 사람이나 장소에 익숙하다는 뜻이라 여기서는 안 어울려요.",
                "correctEs": "Qué suerte. Yo no sé cocinar tan bien.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "No te preocupes, yo te puedo enseñar algunas recetas por teléfono.",
            "text_ko": "걱정 마, 내가 전화로 레시피 몇 개 가르쳐줄 수 있어.",
            "options": [
              {
                "text_es": "¡Me encantaría! Así conozco tus recetas también.",
                "text_ko_hint": "정말 좋겠어요! 그럼 로사의 레시피도 알게 되겠네요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Me encantaría! Así sé tus recetas también.",
                "text_ko_hint": "정말 좋겠어요! 그럼 로사의 레시피도 알게 되겠네요.",
                "correct": false,
                "correctionKo": "누군가의 레시피(구체적인 것)를 알게 된다는 의미라 'conocer'가 자연스러워요. 'saber'는 방법이나 사실을 안다고 할 때 쓰고, 구체적인 대상을 안다고 할 때는 'conocer'를 써요.",
                "correctEs": "¡Me encantaría! Así conozco tus recetas también.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "생일 이야기",
        "start": "n1",
        "endMessage": "도냐 로사의 생일 이야기를 들으며 정겨운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "La próxima semana cumplo setenta años.",
            "text_ko": "다음 주에 나 일흔 살이 돼.",
            "options": [
              {
                "text_es": "¡Wow! No pareces tener setenta años.",
                "text_ko_hint": "와! 일흔 살처럼 안 보이세요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Wow! No pareces ser setenta años.",
                "text_ko_hint": "와! 일흔 살처럼 안 보이세요.",
                "correct": false,
                "correctionKo": "나이를 말할 때는 'ser'가 아니라 'tener + 숫자 + años'를 써요. 그래서 '일흔 살이다'는 'ser setenta años'가 아니라 'tener setenta años'예요.",
                "correctEs": "¡Wow! No pareces tener setenta años.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Jaja, gracias. Mi nieta también cumple años este mes, tiene ocho.",
            "text_ko": "하하, 고마워. 우리 손녀도 이번 달에 생일인데, 여덟 살이 돼.",
            "options": [
              {
                "text_es": "Qué lindo, las dos cumplen años el mismo mes.",
                "text_ko_hint": "정말 예쁘네요, 두 분 다 같은 달에 생일이시네요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué lindo, las dos tienen años el mismo mes.",
                "text_ko_hint": "정말 예쁘네요, 두 분 다 같은 달에 생일이시네요.",
                "correct": false,
                "correctionKo": "'생일을 맞다/나이를 먹다'라는 표현은 'cumplir años'예요. 'tener años'는 이미 그 나이인 상태를 말할 때 쓰고, '생일이 되다'라는 동작에는 'cumplir'를 써야 해요.",
                "correctEs": "Qué lindo, las dos cumplen años el mismo mes.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Voy a hacer un pastel grande para las dos. ¿Vienes a la fiesta?",
            "text_ko": "둘을 위해서 큰 케이크를 만들 거야. 파티에 올래?",
            "options": [
              {
                "text_es": "Claro que sí, no me la pierdo por nada.",
                "text_ko_hint": "당연하죠, 무슨 일이 있어도 안 빠질게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Claro que sí, tengo muchos años de venir.",
                "text_ko_hint": "당연하죠, 무슨 일이 있어도 안 빠질게요.",
                "correct": false,
                "correctionKo": "이 표현은 뜻이 통하지 않아요. 초대에 확실히 참석하겠다고 할 때는 'no me lo/la pierdo'(놓치지 않을게요) 같은 자연스러운 표현을 쓰는 게 좋아요.",
                "correctEs": "Claro que sí, no me la pierdo por nada.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "편지 쓰기",
        "start": "n1",
        "endMessage": "도냐 로사와 편지 쓰기에 대한 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Le estoy escribiendo una carta a mi hermana que vive lejos.",
            "text_ko": "멀리 사는 언니한테 편지를 쓰고 있어.",
            "options": [
              {
                "text_es": "Qué lindo. ¿Dónde vive ella exactamente?",
                "text_ko_hint": "정말 좋네요. 그분은 정확히 어디에 사세요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué lindo. ¿Qué vive ella exactamente?",
                "text_ko_hint": "정말 좋네요. 그분은 정확히 어디에 사세요?",
                "correct": false,
                "correctionKo": "장소를 물어볼 때는 의문사 'dónde'(어디)를 써야 해요. 'qué'는 '무엇'이라는 뜻이라 장소를 묻는 질문에는 맞지 않아요.",
                "correctEs": "Qué lindo. ¿Dónde vive ella exactamente?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Vive en Monterrey. Escribo cartas porque no sabe usar bien el celular.",
            "text_ko": "몬테레이에 살아. 편지를 쓰는 이유는 언니가 휴대폰을 잘 못 다뤄서야.",
            "options": [
              {
                "text_es": "Qué tierno. ¿Cuándo le vas a mandar la carta?",
                "text_ko_hint": "정말 다정하시네요. 편지는 언제 보내실 거예요?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué tierno. ¿Cuál le vas a mandar la carta?",
                "text_ko_hint": "정말 다정하시네요. 편지는 언제 보내실 거예요?",
                "correct": false,
                "correctionKo": "시점을 물어볼 때는 'cuándo'(언제)를 써야 해요. 'cuál'은 '어느 것'이라는 뜻이라 여러 선택지 중 하나를 고를 때 쓰는 말이에요.",
                "correctEs": "Qué tierno. ¿Cuándo le vas a mandar la carta?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Mañana mismo la mando. Le va a dar mucho gusto recibirla.",
            "text_ko": "내일 바로 보낼 거야. 편지 받으면 언니가 정말 좋아할 거야.",
            "options": [
              {
                "text_es": "Seguro que sí. ¿Por qué no la llamas también?",
                "text_ko_hint": "분명 그럴 거예요. 근데 왜 전화는 안 하세요?",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Seguro que sí. ¿Por qué no le llamas también?",
                "text_ko_hint": "분명 그럴 거예요. 근데 왜 전화는 안 하세요?",
                "correct": false,
                "correctionKo": "라틴아메리카 스페인어에서는 사람을 직접목적어로 받을 때 보통 'la/lo'를 써요. 'llamar a alguien'(누군가에게 전화하다)에서 그 사람을 대명사로 받으면 'la llamas'가 더 자연스러워요.",
                "correctEs": "Seguro que sí. ¿Por qué no la llamas también?",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "정원 가꾸기",
        "start": "n1",
        "endMessage": "도냐 로사와 정원 가꾸기 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Mis rosas no han florecido nada este mes. Estoy un poco triste.",
            "text_ko": "내 장미들이 이번 달엔 하나도 안 피었어. 좀 슬프네.",
            "options": [
              {
                "text_es": "No te preocupes, seguro pronto florecen.",
                "text_ko_hint": "걱정 마세요, 분명 곧 필 거예요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "No te preocupes, seguro pronto no florecen nunca.",
                "text_ko_hint": "걱정 마세요, 분명 곧 필 거예요.",
                "correct": false,
                "correctionKo": "이 문장은 이중부정처럼 쓰였지만 결국 '절대 안 필 거예요'라는 정반대의 뜻이 돼버려요. 긍정적으로 격려하려면 부정어 없이 'seguro pronto florecen'이라고 해야 의도한 뜻이 돼요.",
                "correctEs": "No te preocupes, seguro pronto florecen.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Ojalá. Yo nunca dejo de regarlas, pero no sé qué les pasa.",
            "text_ko": "그러면 좋겠다. 나는 절대 물 주는 걸 거르지 않는데, 뭐가 문제인지 모르겠어.",
            "options": [
              {
                "text_es": "A lo mejor no reciben suficiente sol tampoco.",
                "text_ko_hint": "아마 햇빛도 충분히 못 받는 걸 수도 있어요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "A lo mejor no reciben suficiente sol también.",
                "text_ko_hint": "아마 햇빛도 충분히 못 받는 걸 수도 있어요.",
                "correct": false,
                "correctionKo": "부정문에서 '~도 (아니다)'라는 의미를 더할 때는 'también'이 아니라 'tampoco'를 써야 해요. 'también'은 긍정문에서만 쓰는 표현이에요.",
                "correctEs": "A lo mejor no reciben suficiente sol tampoco.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Tienes razón, quizás necesito moverlas de lugar. Gracias por el consejo.",
            "text_ko": "맞아, 아마 자리를 옮겨야 할 것 같다. 조언 고마워.",
            "options": [
              {
                "text_es": "De nada. Nunca es tarde para intentarlo.",
                "text_ko_hint": "천만에요. 시도해보기에 늦은 때는 없어요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "De nada. No nunca es tarde para intentarlo.",
                "text_ko_hint": "천만에요. 시도해보기에 늦은 때는 없어요.",
                "correct": false,
                "correctionKo": "'nunca'가 동사 앞에 올 때는 'no'를 함께 쓰지 않아요. 'no'는 부정어가 동사 뒤에 올 때만 필요해서, 'nunca es tarde'처럼 'no' 없이 써야 맞아요.",
                "correctEs": "De nada. Nunca es tarde para intentarlo.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "시장에서 흥정하기",
        "start": "n1",
        "endMessage": "도냐 로사와 함께 시장에서 흥정하는 법을 배웠어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "En el mercado, esos tomates cuestan quince pesos el kilo.",
            "text_ko": "시장에서 저 토마토들은 킬로에 십오 페소야.",
            "options": [
              {
                "text_es": "Qué barato. Voy a comprar dos kilos.",
                "text_ko_hint": "정말 싸네요. 두 킬로 살게요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué barato. Voy a comprar dos kilo.",
                "text_ko_hint": "정말 싸네요. 두 킬로 살게요.",
                "correct": false,
                "correctionKo": "숫자가 둘 이상일 때는 명사도 복수형으로 써야 해요. '두 킬로'는 'dos kilo'가 아니라 'dos kilos'라고 해야 맞아요.",
                "correctEs": "Qué barato. Voy a comprar dos kilos.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "Si compras tres kilos, te lo dejan en cuarenta pesos.",
            "text_ko": "세 킬로 사면, 사십 페소에 줄 거야.",
            "options": [
              {
                "text_es": "Entonces voy a llevar tres kilos, gracias por el dato.",
                "text_ko_hint": "그럼 세 킬로 가져갈게요, 정보 고마워요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Entonces voy a llevar tres kilo, gracias por el dato.",
                "text_ko_hint": "그럼 세 킬로 가져갈게요, 정보 고마워요.",
                "correct": false,
                "correctionKo": "숫자 'tres'(셋) 뒤에는 반드시 복수 명사가 와야 해요. 'kilo'를 'kilos'로 바꿔야 자연스러운 문장이 돼요.",
                "correctEs": "Entonces voy a llevar tres kilos, gracias por el dato.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Así se hace, siempre hay que preguntar el precio antes de comprar.",
            "text_ko": "그렇게 하는 거야, 사기 전엔 항상 가격을 물어봐야 해.",
            "options": [
              {
                "text_es": "Aprendí mucho hoy. Gracias por enseñarme a regatear.",
                "text_ko_hint": "오늘 정말 많이 배웠어요. 흥정하는 법 가르쳐주셔서 고마워요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Aprendí mucho hoy. Gracias por enseñarme a regatear cuarenta pesos.",
                "text_ko_hint": "오늘 정말 많이 배웠어요. 흥정하는 법 가르쳐주셔서 고마워요.",
                "correct": false,
                "correctionKo": "이 문장은 뜻이 어색해져요. '흥정하는 법'을 가르쳐줬다는 뜻을 말할 땐 구체적인 가격 없이 그냥 'enseñarme a regatear'라고 마무리하는 게 자연스러워요.",
                "correctEs": "Aprendí mucho hoy. Gracias por enseñarme a regatear.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "감사 인사 나누기",
        "start": "n1",
        "endMessage": "도냐 로사와 따뜻한 감사 인사를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "El otro día me ayudaste a cargar mis bolsas. Todavía te lo agradezco.",
            "text_ko": "저번에 내 짐 나르는 거 도와줬잖아. 아직도 정말 고마워.",
            "options": [
              {
                "text_es": "No hay de qué, Rosa. Para eso estamos.",
                "text_ko_hint": "별말씀을요, 로사. 그러라고 있는 거잖아요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "No hay que, Rosa. Para eso estamos.",
                "text_ko_hint": "별말씀을요, 로사. 그러라고 있는 거잖아요.",
                "correct": false,
                "correctionKo": "'천만에요'라는 관용 표현은 'no hay de qué'예요. 전치사 'de'를 빼먹으면 표현이 완성되지 않아요.",
                "correctEs": "No hay de qué, Rosa. Para eso estamos.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "¿Te puedes quedar a tomar un café conmigo, para agradecerte bien?",
            "text_ko": "제대로 고마움을 표현하고 싶은데, 나랑 커피 한잔하고 갈 수 있어?",
            "options": [
              {
                "text_es": "Claro, me quedo un ratito más.",
                "text_ko_hint": "그럼요, 조금 더 있다 갈게요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Claro, quedo un ratito más.",
                "text_ko_hint": "그럼요, 조금 더 있다 갈게요.",
                "correct": false,
                "correctionKo": "'머무르다'라는 뜻일 때는 재귀동사 'quedarse'를 써야 해요. 재귀대명사 'me'를 빼면 'quedar'는 '약속을 잡다' 등 다른 뜻이 될 수 있어서 어색해요.",
                "correctEs": "Claro, me quedo un ratito más.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Qué gusto. Gracias de nuevo por ser tan buena vecina.",
            "text_ko": "정말 좋다. 이렇게 좋은 이웃이 되어줘서 다시 한번 고마워.",
            "options": [
              {
                "text_es": "El gusto es mío, Rosa. Nos quedamos platicando un rato.",
                "text_ko_hint": "제가 더 좋죠, 로사. 잠깐 더 얘기하다 가요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "El gusto es mío, Rosa. Nos quedan platicando un rato.",
                "text_ko_hint": "제가 더 좋죠, 로사. 잠깐 더 얘기하다 가요.",
                "correct": false,
                "correctionKo": "주어가 'nosotros'(우리)일 때 재귀동사도 그 인칭에 맞춰 'quedamos'로 활용해야 해요. 'quedan'은 '그들/당신들'에 해당하는 형태라서 맞지 않아요.",
                "correctEs": "El gusto es mío, Rosa. Nos quedamos platicando un rato.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "다양한 작별 인사",
        "start": "n1",
        "endMessage": "도냐 로사와 정겨운 작별 인사를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "rosa",
            "text_es": "Ya me tengo que ir, pero antes te doy un cafecito para el camino.",
            "text_ko": "이제 가야 하는데, 가기 전에 가는 길에 마실 작은 커피 한 잔 줄게.",
            "options": [
              {
                "text_es": "Ay, qué detallita eres, Rosa. Muchas gracias.",
                "text_ko_hint": "아, 정말 세심하시네요, 로사. 정말 감사해요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Ay, qué detalle grande eres, Rosa. Muchas gracias.",
                "text_ko_hint": "아, 정말 세심하시네요, 로사. 정말 감사해요.",
                "correct": false,
                "correctionKo": "스페인어에서는 다정하고 작은 배려를 표현할 때 '-ito/-ita'를 붙인 축소사를 자주 써요. 'detalle grande'보다 'detallita'처럼 애정을 담은 축소형이 훨씬 더 로사다운 다정한 말투가 돼요.",
                "correctEs": "Ay, qué detallita eres, Rosa. Muchas gracias.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "rosa",
            "text_es": "De nada, mijita. Aquí siempre hay un cafecito para ti.",
            "text_ko": "천만에, 얘야. 여긴 언제나 널 위한 작은 커피 한 잔이 있어.",
            "options": [
              {
                "text_es": "Gracias, Rosa. Nos vemos prontito, entonces.",
                "text_ko_hint": "고마워요, 로사. 그럼 조만간 또 봐요.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Gracias, Rosa. Nos vemos pronto mucho, entonces.",
                "text_ko_hint": "고마워요, 로사. 그럼 조만간 또 봐요.",
                "correct": false,
                "correctionKo": "'pronto'(곧)는 이미 부사라서 뒤에 'mucho'를 또 붙이면 어색해요. 다정하게 강조하고 싶을 때는 축소형인 'prontito'를 쓰는 게 로사의 말투와도 더 잘 어울려요.",
                "correctEs": "Gracias, Rosa. Nos vemos prontito, entonces.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "rosa",
            "text_es": "Así es. Cuídate mucho, y dale un abracito a tu familia de mi parte.",
            "text_ko": "그래. 몸조심하고, 가족들한테 내 대신 작은 포옹 한번 전해줘.",
            "options": [
              {
                "text_es": "Así lo haré, Rosa. Hasta prontito.",
                "text_ko_hint": "그렇게 할게요, 로사. 곧 또 봬요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Así lo haré, Rosa. Hasta pronto grande.",
                "text_ko_hint": "그렇게 할게요, 로사. 곧 또 봬요.",
                "correct": false,
                "correctionKo": "'grande'는 크기를 나타내는 형용사라서 'pronto'(곧) 같은 시간 부사와는 어울리지 않아요. 다정한 작별 인사에는 축소형 'prontito'가 훨씬 자연스럽고 로사의 따뜻한 말투와도 잘 맞아요.",
                "correctEs": "Así lo haré, Rosa. Hasta prontito.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      }
    ]
  },
  "mateo": {
    "topics": [
      {
        "topicLabel": "영화 이야기",
        "start": "n1",
        "endMessage": "마테오와 영화 이야기를 신나게 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¡Hola! ¿Viste alguna película buena últimamente?",
            "text_ko": "안녕! 요즘 재밌는 영화 본 거 있어?",
            "options": [
              {
                "text_es": "Sí, vi una película de Almodóvar. Me gustó mucho.",
                "text_ko_hint": "응, 알모도바르 영화를 봤어. 정말 좋았어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, vi dos películas. Me gustó mucho.",
                "text_ko_hint": "응, 영화 두 편을 봤어. 정말 좋았어.",
                "correct": false,
                "correctionKo": "'gustar' 동사는 좋아하는 '대상'의 수에 맞춰 변해요. 영화가 한 편이면 'me gustó', 여러 편이면 'me gustaron'이에요. 두 편을 봤다고 했으니 'me gustaron'이 맞아요.",
                "correctEs": "Sí, vi dos películas. Me gustaron mucho.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Qué tipo de películas te gustan? A mí me encantan las de misterio.",
            "text_ko": "어떤 종류의 영화를 좋아해? 나는 미스터리 영화를 정말 좋아해.",
            "options": [
              {
                "text_es": "Me gustan las películas dramáticas.",
                "text_ko_hint": "나는 드라마 영화를 좋아해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Me gusta las películas dramáticas.",
                "text_ko_hint": "나는 드라마 영화를 좋아해.",
                "correct": false,
                "correctionKo": "'películas'(영화들)는 복수형이니까 gustar도 복수형인 'gustan'을 써야 해요. 'me gusta'는 단수 대상 앞에만 써요.",
                "correctEs": "Me gustan las películas dramáticas.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "¡Genial! Deberíamos ver una película juntos algún día.",
            "text_ko": "좋다! 언젠가 같이 영화 한 편 봐야겠다.",
            "options": [
              {
                "text_es": "¡Claro! Me encantaría.",
                "text_ko_hint": "물론이지! 정말 좋을 것 같아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Claro! Me gusta mucho contigo.",
                "text_ko_hint": "물론이지! 정말 좋을 것 같아.",
                "correct": false,
                "correctionKo": "'gustar'는 사람과 함께 쓰면 어색해요. 같이 뭔가 하고 싶은 마음은 'me encantaría' 처럼 표현하는 게 자연스러워요.",
                "correctEs": "¡Claro! Me encantaría.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "주말 계획",
        "start": "n1",
        "endMessage": "마테오와 신나는 주말 계획을 세웠어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¿Qué vas a hacer este fin de semana?",
            "text_ko": "이번 주말에 뭐 할 거야?",
            "options": [
              {
                "text_es": "Voy a ver una película con mis amigos.",
                "text_ko_hint": "친구들이랑 영화를 볼 거야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Voy ver una película con mis amigos.",
                "text_ko_hint": "친구들이랑 영화를 볼 거야.",
                "correct": false,
                "correctionKo": "'ir a + 동사원형'은 가까운 미래의 계획을 말할 때 쓰는 표현이에요. 'ir'와 동사원형 사이에 꼭 'a'를 넣어야 해요. 'a'를 빼먹으면 틀린 문장이 돼요.",
                "correctEs": "Voy a ver una película con mis amigos.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¡Qué bien! Yo voy a salir a caminar por el parque. ¿Tienes otros planes?",
            "text_ko": "좋다! 나는 공원에서 산책하러 나갈 거야. 다른 계획도 있어?",
            "options": [
              {
                "text_es": "También voy a estudiar un poco para el lunes.",
                "text_ko_hint": "월요일을 위해서 공부도 좀 할 거야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "También voy estudiar un poco para el lunes.",
                "text_ko_hint": "월요일을 위해서 공부도 좀 할 거야.",
                "correct": false,
                "correctionKo": "잊지 마! 'ir a + 동사원형' 사이에는 항상 'a'가 들어가야 해요. 'voy estudiar'가 아니라 'voy a estudiar'예요.",
                "correctEs": "También voy a estudiar un poco para el lunes.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "¿Vamos a ver una película juntos el próximo fin de semana?",
            "text_ko": "다음 주말에 같이 영화 보러 갈까?",
            "options": [
              {
                "text_es": "¡Sí! Vamos a ir al cine el sábado.",
                "text_ko_hint": "좋아! 토요일에 영화관에 가자.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Sí! Vamos ir al cine el sábado.",
                "text_ko_hint": "좋아! 토요일에 영화관에 가자.",
                "correct": false,
                "correctionKo": "'vamos a ir'처럼 'ir a + 동사원형'에서는 'a'를 빼면 안 돼요. 두 동사 사이에 항상 'a'가 필요해요.",
                "correctEs": "¡Sí! Vamos a ir al cine el sábado.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "콘서트 티켓",
        "start": "n1",
        "endMessage": "마테오와 콘서트 이야기로 신났어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¡Fui a un concierto increíble el fin de semana pasado! ¿Tú has ido a algún concierto?",
            "text_ko": "지난 주말에 진짜 멋진 콘서트에 갔었어! 너도 콘서트 가본 적 있어?",
            "options": [
              {
                "text_es": "Sí, fui a un concierto de rock el año pasado.",
                "text_ko_hint": "응, 작년에 록 콘서트에 갔었어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, fue a un concierto de rock el año pasado.",
                "text_ko_hint": "응, 작년에 록 콘서트에 갔었어.",
                "correct": false,
                "correctionKo": "'ir' 동사의 단순과거에서 '나는 갔다'는 'fui'예요. 'fue'는 '그/그녀가 갔다'라는 뜻이라서 주어가 달라져요.",
                "correctEs": "Sí, fui a un concierto de rock el año pasado.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Y cómo pagaste las entradas? Yo pagué con tarjeta.",
            "text_ko": "표는 어떻게 결제했어? 나는 카드로 결제했어.",
            "options": [
              {
                "text_es": "Yo pagué en efectivo, fue más barato.",
                "text_ko_hint": "나는 현금으로 냈어, 더 저렴했거든.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Yo pagé en efectivo, fue más barato.",
                "text_ko_hint": "나는 현금으로 냈어, 더 저렴했거든.",
                "correct": false,
                "correctionKo": "'pagar'의 1인칭 단순과거는 'pagué'예요. g 뒤에 e가 오면 발음이 바뀌기 때문에 u를 넣어서 'gué'로 써야 해요. 'pagé'는 잘못된 철자예요.",
                "correctEs": "Yo pagué en efectivo, fue más barato.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "La próxima vez deberíamos ir juntos a un concierto.",
            "text_ko": "다음엔 우리 같이 콘서트에 가면 좋겠다.",
            "options": [
              {
                "text_es": "¡Sí! Yo ya compré boletos para el festival de agosto.",
                "text_ko_hint": "좋아! 나는 이미 8월 페스티벌 티켓을 샀어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Sí! Yo ya comprí boletos para el festival de agosto.",
                "text_ko_hint": "좋아! 나는 이미 8월 페스티벌 티켓을 샀어.",
                "correct": false,
                "correctionKo": "-ar로 끝나는 동사의 1인칭 단순과거 어미는 '-é'예요. 'comprar'의 과거형은 'compré'이고, 'comprí'는 -ir 동사 어미를 잘못 붙인 형태예요.",
                "correctEs": "¡Sí! Yo ya compré boletos para el festival de agosto.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "비디오게임",
        "start": "n1",
        "endMessage": "마테오와 게임 이야기를 실컷 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Anoche jugué un videojuego nuevo por tres horas. ¿Tú juegas videojuegos?",
            "text_ko": "어젯밤에 새로운 비디오게임을 세 시간 동안 했어. 너도 비디오게임 해?",
            "options": [
              {
                "text_es": "Sí, ayer hice un torneo en línea con mis amigos.",
                "text_ko_hint": "응, 어제 친구들이랑 온라인 토너먼트를 했어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, ayer hací un torneo en línea con mis amigos.",
                "text_ko_hint": "응, 어제 친구들이랑 온라인 토너먼트를 했어.",
                "correct": false,
                "correctionKo": "'hacer' 동사의 단순과거 1인칭형은 불규칙 형태인 'hice'예요. 규칙 동사처럼 '-í'를 붙이면 안 돼요.",
                "correctEs": "Sí, ayer hice un torneo en línea con mis amigos.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Ganaste o perdiste el torneo?",
            "text_ko": "토너먼트에서 이겼어 아니면 졌어?",
            "options": [
              {
                "text_es": "Gané las primeras rondas, pero perdí la final.",
                "text_ko_hint": "처음 라운드들은 이겼는데, 결승에서는 졌어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Gané las primeras rondas, pero perdo la final.",
                "text_ko_hint": "처음 라운드들은 이겼는데, 결승에서는 졌어.",
                "correct": false,
                "correctionKo": "'perder'의 1인칭 단순과거는 'perdí'예요. -er 동사는 단순과거에서 '-í' 어미를 붙여요. 'perdo'는 존재하지 않는 형태예요.",
                "correctEs": "Gané las primeras rondas, pero perdí la final.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Deberíamos jugar juntos algún día.",
            "text_ko": "언젠가 같이 게임 하면 좋겠다.",
            "options": [
              {
                "text_es": "¡Claro! La semana pasada vi un torneo profesional en internet, fue increíble.",
                "text_ko_hint": "물론이지! 지난주에 인터넷에서 프로 토너먼트를 봤는데, 정말 대단했어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Claro! La semana pasada vide un torneo profesional en internet, fue increíble.",
                "text_ko_hint": "물론이지! 지난주에 인터넷에서 프로 토너먼트를 봤는데, 정말 대단했어.",
                "correct": false,
                "correctionKo": "'ver' 동사의 단순과거 1인칭형은 짧은 불규칙 형태인 'vi'예요. 'vide'는 존재하지 않는 형태니 조심하세요.",
                "correctEs": "¡Claro! La semana pasada vi un torneo profesional en internet, fue increíble.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "드라마 정주행",
        "start": "n1",
        "endMessage": "마테오와 드라마 정주행 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "El fin de semana me quedé en casa viendo una serie nueva todo el día.",
            "text_ko": "주말에 집에 있으면서 하루 종일 새 드라마를 봤어.",
            "options": [
              {
                "text_es": "Yo también me quedé en casa viendo series.",
                "text_ko_hint": "나도 집에 있으면서 드라마를 봤어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Yo también quedé en casa viendo series.",
                "text_ko_hint": "나도 집에 있으면서 드라마를 봤어.",
                "correct": false,
                "correctionKo": "'quedarse'는 재귀동사라서 주어에 맞는 재귀대명사가 꼭 필요해요. '나는'이면 'me quedé'라고 해야 하고, 'me'를 빼면 틀린 문장이 돼요.",
                "correctEs": "Yo también me quedé en casa viendo series.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Te divertiste con la serie o te aburriste?",
            "text_ko": "드라마 보면서 재밌었어 아니면 지루했어?",
            "options": [
              {
                "text_es": "Me divertí mucho, ¡no podía dejar de verla!",
                "text_ko_hint": "정말 재밌었어, 멈출 수가 없었어!",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Divertí mucho, ¡no podía dejar de verla!",
                "text_ko_hint": "정말 재밌었어, 멈출 수가 없었어!",
                "correct": false,
                "correctionKo": "'divertirse'(즐기다)도 재귀동사예요. '나는 즐거웠다'는 'me divertí'라고 해야 하고, 'me'를 빼먹으면 안 돼요.",
                "correctEs": "Me divertí mucho, ¡no podía dejar de verla!",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "La última temporada se estrena pronto, ¡no puedo esperar!",
            "text_ko": "마지막 시즌이 곧 나온대, 너무 기대돼!",
            "options": [
              {
                "text_es": "¡Yo tampoco! Me voy a emocionar mucho viéndola.",
                "text_ko_hint": "나도! 보면서 엄청 신날 것 같아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Yo tampoco! Voy a emocionar mucho viéndola.",
                "text_ko_hint": "나도! 보면서 엄청 신날 것 같아.",
                "correct": false,
                "correctionKo": "'emocionarse'(신나다)도 재귀동사라서 'me voy a emocionar'처럼 재귀대명사가 필요해요. 'me' 없이 쓰면 어색한 문장이 돼요.",
                "correctEs": "¡Yo tampoco! Me voy a emocionar mucho viéndola.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "축구 경기",
        "start": "n1",
        "endMessage": "마테오와 축구 얘기로 들떴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¿Puedes ir al partido de fútbol conmigo este sábado?",
            "text_ko": "이번 토요일에 나랑 같이 축구 경기 보러 갈 수 있어?",
            "options": [
              {
                "text_es": "Sí, puedo ir contigo, ¡me encanta el fútbol!",
                "text_ko_hint": "응, 같이 갈 수 있어, 나 축구 완전 좋아해!",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, puedo a ir contigo, ¡me encanta el fútbol!",
                "text_ko_hint": "응, 같이 갈 수 있어, 나 축구 완전 좋아해!",
                "correct": false,
                "correctionKo": "'poder' 뒤에는 전치사 없이 바로 동사원형이 와요. 'ir a'와 헷갈려서 'a'를 넣는 실수를 자주 하는데, 'poder + 동사원형'에는 'a'가 필요 없어요.",
                "correctEs": "Sí, puedo ir contigo, ¡me encanta el fútbol!",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿A qué hora puedes llegar al estadio?",
            "text_ko": "경기장에는 몇 시에 도착할 수 있어?",
            "options": [
              {
                "text_es": "Puedo llegar a las tres de la tarde.",
                "text_ko_hint": "오후 세 시에 도착할 수 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Puedo a llegar a las tres de la tarde.",
                "text_ko_hint": "오후 세 시에 도착할 수 있어.",
                "correct": false,
                "correctionKo": "다시 한번 기억하자: 'poder' 다음에는 'a' 없이 바로 동사원형이 와야 해요. 'puedo llegar'가 맞는 형태예요.",
                "correctEs": "Puedo llegar a las tres de la tarde.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Genial, después del partido podemos comer tacos.",
            "text_ko": "좋아, 경기 끝나고 우리 타코 먹으러 갈 수 있어.",
            "options": [
              {
                "text_es": "¡Perfecto! No puedo esperar para verte.",
                "text_ko_hint": "완벽해! 너 만나는 게 너무 기대돼.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Perfecto! No puedo a esperar para verte.",
                "text_ko_hint": "완벽해! 너 만나는 게 너무 기대돼.",
                "correct": false,
                "correctionKo": "'poder + 동사원형' 규칙, 기억하지? 'no puedo esperar'처럼 'a' 없이 바로 이어줘야 자연스러워요.",
                "correctEs": "¡Perfecto! No puedo esperar para verte.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "새로운 노래",
        "start": "n1",
        "endMessage": "마테오와 새 노래 취향에 대해 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Descubrí una canción nueva que me encanta. ¿Tienes alguna canción favorita ahora?",
            "text_ko": "요즘 완전 좋아하는 노래를 발견했어. 지금 좋아하는 노래 있어?",
            "options": [
              {
                "text_es": "Sí, me encanta una canción de reguetón.",
                "text_ko_hint": "응, 레게톤 노래 하나를 정말 좋아해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, me encantan una canción de reguetón.",
                "text_ko_hint": "응, 레게톤 노래 하나를 정말 좋아해.",
                "correct": false,
                "correctionKo": "'encantar'도 'gustar'처럼 좋아하는 대상의 수에 맞춰 변해요. 'una canción'은 단수니까 'me encanta'라고 해야 하고, 'me encantan'은 복수 대상 앞에 써요.",
                "correctEs": "Sí, me encanta una canción de reguetón.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "A mí me fascinan las canciones con guitarra. ¿Qué tipo de música te fascina?",
            "text_ko": "나는 기타 소리 나는 노래들에 푹 빠져 있어. 어떤 음악에 푹 빠져 있어?",
            "options": [
              {
                "text_es": "Me fascinan las canciones de pop latino.",
                "text_ko_hint": "나는 라틴 팝 노래들에 푹 빠져 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Me fascina las canciones de pop latino.",
                "text_ko_hint": "나는 라틴 팝 노래들에 푹 빠져 있어.",
                "correct": false,
                "correctionKo": "'las canciones'는 복수니까 'fascinar'도 복수형인 'fascinan'을 써야 해요. 'fascina'는 단수 대상 앞에만 써요.",
                "correctEs": "Me fascinan las canciones de pop latino.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Deberíamos hacer una lista de reproducción juntos.",
            "text_ko": "우리 같이 플레이리스트 만들면 좋겠다.",
            "options": [
              {
                "text_es": "¡Sí! Me encantan las buenas ideas como esa.",
                "text_ko_hint": "좋아! 그런 좋은 생각 정말 좋아해.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Sí! Me encanta las buenas ideas como esa.",
                "text_ko_hint": "좋아! 그런 좋은 생각 정말 좋아해.",
                "correct": false,
                "correctionKo": "'las buenas ideas'는 복수라서 'encantar'도 'encantan'으로 맞춰야 해요. 'encanta'는 단수 명사 앞에서만 써요.",
                "correctEs": "¡Sí! Me encantan las buenas ideas como esa.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "대학 수업",
        "start": "n1",
        "endMessage": "마테오와 수업 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Tengo mucha tarea esta semana. Debo estudiar para mi clase de historia.",
            "text_ko": "이번 주에 숙제가 많아. 역사 수업 공부를 해야 해.",
            "options": [
              {
                "text_es": "Yo también debo estudiar para un examen de matemáticas.",
                "text_ko_hint": "나도 수학 시험 공부를 해야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Yo también debo a estudiar para un examen de matemáticas.",
                "text_ko_hint": "나도 수학 시험 공부를 해야 해.",
                "correct": false,
                "correctionKo": "'deber' 뒤에도 'poder'처럼 전치사 없이 바로 동사원형이 와요. 'debo a estudiar'가 아니라 'debo estudiar'가 맞아요.",
                "correctEs": "Yo también debo estudiar para un examen de matemáticas.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿A qué hora debes ir a clase mañana?",
            "text_ko": "내일 몇 시에 수업에 가야 해?",
            "options": [
              {
                "text_es": "Debo llegar a la universidad a las ocho.",
                "text_ko_hint": "여덟 시에 학교에 도착해야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Debo a llegar a la universidad a las ocho.",
                "text_ko_hint": "여덟 시에 학교에 도착해야 해.",
                "correct": false,
                "correctionKo": "기억하자! 'deber + 동사원형'에는 'a'가 필요 없어요. 'debo llegar'가 맞는 형태예요.",
                "correctEs": "Debo llegar a la universidad a las ocho.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Después de clase deberíamos estudiar juntos en la biblioteca.",
            "text_ko": "수업 끝나고 우리 도서관에서 같이 공부하면 좋겠다.",
            "options": [
              {
                "text_es": "¡Buena idea! Debo terminar un proyecto importante.",
                "text_ko_hint": "좋은 생각이야! 나는 중요한 프로젝트를 끝내야 해.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Buena idea! Debo a terminar un proyecto importante.",
                "text_ko_hint": "좋은 생각이야! 나는 중요한 프로젝트를 끝내야 해.",
                "correct": false,
                "correctionKo": "다시 한번: 'deber' 다음에는 'a' 없이 바로 동사원형이 와야 해요. 'debo terminar'가 자연스러운 표현이에요.",
                "correctEs": "¡Buena idea! Debo terminar un proyecto importante.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "시험",
        "start": "n1",
        "endMessage": "마테오와 시험 스트레스를 나누며 응원했어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Tengo un examen difícil mañana. Tengo que estudiar toda la noche.",
            "text_ko": "내일 어려운 시험이 있어. 밤새 공부해야 해.",
            "options": [
              {
                "text_es": "Uy, yo también tengo que estudiar mucho esta semana.",
                "text_ko_hint": "어이구, 나도 이번 주에 공부 많이 해야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Uy, yo también hay que estudiar mucho esta semana.",
                "text_ko_hint": "어이구, 나도 이번 주에 공부 많이 해야 해.",
                "correct": false,
                "correctionKo": "'hay que'는 특정 주어 없이 '누구나 ~해야 한다'는 일반적인 의무를 말할 때 써요. 나 개인의 의무를 말할 때는 'tener que'를 써서 'tengo que'라고 해야 해요.",
                "correctEs": "Uy, yo también tengo que estudiar mucho esta semana.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Para sacar buenas notas, hay que practicar todos los días, ¿no crees?",
            "text_ko": "좋은 성적을 받으려면 매일 연습해야 하는 것 같아, 안 그래?",
            "options": [
              {
                "text_es": "Sí, hay que practicar mucho para aprender bien.",
                "text_ko_hint": "응, 잘 배우려면 많이 연습해야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, hay practicar mucho para aprender bien.",
                "text_ko_hint": "응, 잘 배우려면 많이 연습해야 해.",
                "correct": false,
                "correctionKo": "'~해야 한다'는 일반적인 의무는 'hay que + 동사원형'이라는 고정 표현이에요. 'que'를 빼먹으면 안 되는 필수 표현이에요.",
                "correctEs": "Sí, hay que practicar mucho para aprender bien.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "¡Buena suerte en tu examen! Tienes que confiar en ti mismo.",
            "text_ko": "시험 잘 봐! 너 자신을 믿어야 해.",
            "options": [
              {
                "text_es": "Gracias, tengo que relajarme un poco antes de estudiar.",
                "text_ko_hint": "고마워, 공부하기 전에 좀 쉬어야겠어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, hay que relajarme un poco antes de estudiar.",
                "text_ko_hint": "고마워, 공부하기 전에 좀 쉬어야겠어.",
                "correct": false,
                "correctionKo": "'relajarme'처럼 특정한 사람(나)에게 해당하는 의무는 'tengo que'로 말해야 해요. 'hay que'는 특정 주어가 없는 일반적인 의무에만 써요.",
                "correctEs": "Gracias, tengo que relajarme un poco antes de estudiar.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "로드트립",
        "start": "n1",
        "endMessage": "마테오와 로드트립 계획을 신나게 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Cuando haces un viaje largo, ¿a qué hora sales normalmente?",
            "text_ko": "장거리 여행 갈 때 보통 몇 시에 출발해?",
            "options": [
              {
                "text_es": "Salgo a las seis de la mañana para evitar el tráfico.",
                "text_ko_hint": "교통 체증을 피하려고 아침 여섯 시에 출발해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Salgo a las seis a la mañana para evitar el tráfico.",
                "text_ko_hint": "교통 체증을 피하려고 아침 여섯 시에 출발해.",
                "correct": false,
                "correctionKo": "시간 뒤에 오전/오후를 말할 때는 전치사 'de'를 써요. 'a las seis de la mañana'처럼요. 'a la mañana'는 틀린 표현이에요.",
                "correctEs": "Salgo a las seis de la mañana para evitar el tráfico.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Cuánto tiempo dura el viaje hasta la playa?",
            "text_ko": "해변까지 가는 여행은 얼마나 걸려?",
            "options": [
              {
                "text_es": "El viaje dura tres horas más o menos.",
                "text_ko_hint": "여행은 대략 세 시간 걸려.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "El viaje dura para tres horas más o menos.",
                "text_ko_hint": "여행은 대략 세 시간 걸려.",
                "correct": false,
                "correctionKo": "'durar'(지속되다) 동사는 바로 뒤에 시간 표현이 와요. 'para' 같은 전치사를 넣을 필요가 없어요. 'dura tres horas'가 맞는 표현이에요.",
                "correctEs": "El viaje dura tres horas más o menos.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Vamos a llegar a la playa dentro de dos semanas, ¡qué emoción!",
            "text_ko": "2주 후에 해변에 도착할 거야, 완전 신난다!",
            "options": [
              {
                "text_es": "¡Qué padre! Dentro de un mes yo también voy de viaje.",
                "text_ko_hint": "완전 좋다! 나도 한 달 후에 여행 가.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué padre! Dentro un mes yo también voy de viaje.",
                "text_ko_hint": "완전 좋다! 나도 한 달 후에 여행 가.",
                "correct": false,
                "correctionKo": "'~후에'라는 뜻의 표현은 'dentro de'예요. 'dentro' 다음에 꼭 'de'를 붙여야 해요. 'dentro un mes'는 틀린 표현이에요.",
                "correctEs": "¡Qué padre! Dentro de un mes yo también voy de viaje.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 감독",
        "start": "n1",
        "endMessage": "마테오와 좋아하는 감독 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¿Conoces al director Guillermo del Toro? Es mexicano y hace películas increíbles.",
            "text_ko": "기예르모 델 토로 감독 알아? 멕시코 사람인데 영화를 진짜 잘 만들어.",
            "options": [
              {
                "text_es": "Sí, lo conozco, ¡me encantan sus películas!",
                "text_ko_hint": "응, 알아, 그 사람 영화 정말 좋아해!",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, lo sé, ¡me encantan sus películas!",
                "text_ko_hint": "응, 알아, 그 사람 영화 정말 좋아해!",
                "correct": false,
                "correctionKo": "사람을 안다고 할 때는 'conocer'를 써요. 'saber'는 정보나 방법을 안다고 할 때 쓰는 동사라서 사람에게는 어울리지 않아요.",
                "correctEs": "Sí, lo conozco, ¡me encantan sus películas!",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Sabes en qué año ganó el Óscar?",
            "text_ko": "그 감독이 몇 년도에 오스카를 받았는지 알아?",
            "options": [
              {
                "text_es": "No, no sé exactamente, pero creo que fue hace unos años.",
                "text_ko_hint": "아니, 정확히는 모르겠는데, 몇 년 전이었던 것 같아.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "No, no conozco exactamente, pero creo que fue hace unos años.",
                "text_ko_hint": "아니, 정확히는 모르겠는데, 몇 년 전이었던 것 같아.",
                "correct": false,
                "correctionKo": "구체적인 정보나 사실을 안다고 할 때는 'saber'를 써요. 'conocer'는 사람이나 장소를 안다고 할 때 쓰는 동사예요.",
                "correctEs": "No, no sé exactamente, pero creo que fue hace unos años.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Sus películas se grabaron en varios lugares de México.",
            "text_ko": "그 감독 영화들은 멕시코 여러 곳에서 촬영됐어.",
            "options": [
              {
                "text_es": "¡Qué interesante! Quiero conocer México algún día.",
                "text_ko_hint": "완전 흥미롭다! 언젠가 멕시코를 가보고 싶어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué interesante! Quiero saber México algún día.",
                "text_ko_hint": "완전 흥미롭다! 언젠가 멕시코를 가보고 싶어.",
                "correct": false,
                "correctionKo": "장소를 가보다, 알게 되다라는 의미로는 'conocer'를 써요. 'saber'는 장소가 아니라 정보나 지식을 안다고 할 때 써요.",
                "correctEs": "¡Qué interesante! Quiero conocer México algún día.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "만화책과 애니",
        "start": "n1",
        "endMessage": "마테오와 만화책과 애니 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Estoy leyendo un cómic buenísimo. ¿Tú lees cómics o animes?",
            "text_ko": "나 완전 재밌는 만화책 읽고 있어. 너도 만화책이나 애니 봐?",
            "options": [
              {
                "text_es": "Sí, veo animes. Los veo casi todos los días.",
                "text_ko_hint": "응, 애니 봐. 거의 매일 봐.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, veo animes. Veo los casi todos los días.",
                "text_ko_hint": "응, 애니 봐. 거의 매일 봐.",
                "correct": false,
                "correctionKo": "직접목적격 대명사(lo/la/los/las)는 활용된 동사 앞에 와요. 'los veo'가 맞고, 'veo los'처럼 동사 뒤에 두면 틀려요.",
                "correctEs": "Sí, veo animes. Los veo casi todos los días.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Ya viste la nueva película de Spider-Man?",
            "text_ko": "새로 나온 스파이더맨 영화 벌써 봤어?",
            "options": [
              {
                "text_es": "No, todavía no la vi, pero quiero verla pronto.",
                "text_ko_hint": "아니, 아직 안 봤는데, 곧 보고 싶어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "No, todavía no vi la, pero quiero verla pronto.",
                "text_ko_hint": "아니, 아직 안 봤는데, 곧 보고 싶어.",
                "correct": false,
                "correctionKo": "'la'(그것을, 여성형)는 활용된 동사 앞에 놓아야 해요. 'no la vi'가 맞고, 'no vi la'는 순서가 틀렸어요.",
                "correctEs": "No, todavía no la vi, pero quiero verla pronto.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Yo ya compré los cómics nuevos de esta semana.",
            "text_ko": "난 이번 주 새 만화책들 벌써 샀어.",
            "options": [
              {
                "text_es": "¡Qué bien! Yo los voy a comprar este fin de semana.",
                "text_ko_hint": "좋다! 나는 이번 주말에 살 거야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué bien! Yo voy a comprarlos los este fin de semana.",
                "text_ko_hint": "좋다! 나는 이번 주말에 살 거야.",
                "correct": false,
                "correctionKo": "직접목적격 대명사는 동사원형 뒤에 붙이거나('comprarlos') 활용된 동사 앞에 두거나('los voy a comprar') 둘 중 하나만 써야 해요. 두 가지를 동시에 쓰면 중복이에요.",
                "correctEs": "¡Qué bien! Yo los voy a comprar este fin de semana.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "파티 초대",
        "start": "n1",
        "endMessage": "마테오의 파티 초대에 신나게 답했어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Voy a hacer una fiesta el viernes. ¿Quieres venir?",
            "text_ko": "금요일에 파티 열 건데, 올래?",
            "options": [
              {
                "text_es": "¡Sí! Quiero ir, va a ser divertido.",
                "text_ko_hint": "응! 갈래, 재밌을 것 같아.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Sí! Quiero a ir, va a ser divertido.",
                "text_ko_hint": "응! 갈래, 재밌을 것 같아.",
                "correct": false,
                "correctionKo": "'querer' 뒤에도 전치사 없이 바로 동사원형이 와요. 'quiero a ir'가 아니라 'quiero ir'가 맞아요.",
                "correctEs": "¡Sí! Quiero ir, va a ser divertido.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Quieres traer algo de comer o de tomar?",
            "text_ko": "먹을 거나 마실 거 뭔가 가져오고 싶어?",
            "options": [
              {
                "text_es": "Quiero traer unos refrescos y botanas.",
                "text_ko_hint": "음료수랑 간식 좀 가져오고 싶어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Quiero a traer unos refrescos y botanas.",
                "text_ko_hint": "음료수랑 간식 좀 가져오고 싶어.",
                "correct": false,
                "correctionKo": "다시 한번: 'querer + 동사원형'에는 'a'가 필요 없어요. 'quiero traer'가 맞는 형태예요.",
                "correctEs": "Quiero traer unos refrescos y botanas.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Perfecto, va a estar increíble la fiesta.",
            "text_ko": "완벽해, 파티 진짜 대단할 거야.",
            "options": [
              {
                "text_es": "¡No puedo esperar! Quiero conocer a tus otros amigos también.",
                "text_ko_hint": "너무 기대돼! 네 다른 친구들도 만나고 싶어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡No puedo esperar! Quiero a conocer a tus otros amigos también.",
                "text_ko_hint": "너무 기대돼! 네 다른 친구들도 만나고 싶어.",
                "correct": false,
                "correctionKo": "'querer' 다음에는 항상 'a' 없이 동사원형이 바로 와야 해요. 'quiero conocer'가 자연스러운 표현이에요.",
                "correctEs": "¡No puedo esperar! Quiero conocer a tus otros amigos también.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "카페에서",
        "start": "n1",
        "endMessage": "마테오와 카페에서 즐거운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¡Hola! Estoy tomando un café aquí. ¿Qué estás haciendo?",
            "text_ko": "안녕! 나 여기서 커피 마시고 있어. 뭐 하고 있어?",
            "options": [
              {
                "text_es": "Estoy escribiendo un mensaje a mi mamá.",
                "text_ko_hint": "엄마한테 메시지 쓰고 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Estoy escribendo un mensaje a mi mamá.",
                "text_ko_hint": "엄마한테 메시지 쓰고 있어.",
                "correct": false,
                "correctionKo": "-ir로 끝나는 동사 'escribir'의 현재분사(gerundio)는 'escribiendo'예요. 'escribendo'는 잘못된 철자예요.",
                "correctEs": "Estoy escribiendo un mensaje a mi mamá.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Mira, el mesero está leyendo nuestra orden en voz alta.",
            "text_ko": "봐봐, 종업원이 우리 주문을 소리 내서 읽고 있어.",
            "options": [
              {
                "text_es": "Sí, y esa señora está pidiendo un café también.",
                "text_ko_hint": "응, 저기 저 아주머니도 커피를 주문하고 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, y esa señora está pidendo un café también.",
                "text_ko_hint": "응, 저기 저 아주머니도 커피를 주문하고 있어.",
                "correct": false,
                "correctionKo": "'pedir'는 어간이 e에서 i로 바뀌는 동사라서 현재분사는 'pidiendo'예요. 'pidendo'는 어간 변화를 빠뜨린 잘못된 형태예요.",
                "correctEs": "Sí, y esa señora está pidiendo un café también.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Bueno, ya me tengo que ir. Mi amigo me está esperando afuera.",
            "text_ko": "이제 가야 해. 친구가 밖에서 나 기다리고 있어.",
            "options": [
              {
                "text_es": "¡Ok! Nos estamos divirtiendo mucho hoy, ¿verdad?",
                "text_ko_hint": "알겠어! 우리 오늘 진짜 재밌었지, 그렇지?",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Ok! Nos estamos divertiendo mucho hoy, ¿verdad?",
                "text_ko_hint": "알겠어! 우리 오늘 진짜 재밌었지, 그렇지?",
                "correct": false,
                "correctionKo": "'divertirse'는 현재분사에서 어간이 e에서 i로 바뀌어 'divirtiendo'가 돼요. 'divertiendo'는 어간 변화를 놓친 흔한 실수예요.",
                "correctEs": "¡Ok! Nos estamos divirtiendo mucho hoy, ¿verdad?",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "비 오는 날 계획",
        "start": "n1",
        "endMessage": "마테오와 비 오는 날 계획을 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Está lloviendo mucho. Voy a quedarme en mi casa viendo pelis.",
            "text_ko": "비가 많이 온다. 나는 집에서 영화 보면서 있을 거야.",
            "options": [
              {
                "text_es": "Yo también voy a quedarme en mi casa hoy.",
                "text_ko_hint": "나도 오늘 우리 집에 있을 거야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Yo también voy a quedarme en su casa hoy.",
                "text_ko_hint": "나도 오늘 우리 집에 있을 거야.",
                "correct": false,
                "correctionKo": "'나의'라는 뜻의 소유격은 'mi'예요. 'su'는 '그/그녀/당신의'라는 뜻이라 지금 문맥(내 집)에는 맞지 않아요.",
                "correctEs": "Yo también voy a quedarme en mi casa hoy.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Mi hermana y yo vamos a ver nuestra serie favorita.",
            "text_ko": "내 여동생이랑 우리가 제일 좋아하는 드라마를 볼 거야.",
            "options": [
              {
                "text_es": "Qué lindo, ¿cómo se llama su serie favorita?",
                "text_ko_hint": "좋다, 너희가 제일 좋아하는 드라마 이름이 뭐야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué lindo, ¿cómo se llama tu serie favorita?",
                "text_ko_hint": "좋다, 너희가 제일 좋아하는 드라마 이름이 뭐야?",
                "correct": false,
                "correctionKo": "마테오가 여동생과 함께 'nuestra'(우리의)라고 했으니, 두 사람의 것을 가리킬 때는 'su'(그들의)를 써야 해요. 'tu'는 상대방 한 사람만 가리켜서 이 상황엔 맞지 않아요.",
                "correctEs": "Qué lindo, ¿cómo se llama su serie favorita?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Nuestros papás también ven series con nosotros a veces.",
            "text_ko": "우리 부모님도 가끔 우리랑 같이 드라마를 보셔.",
            "options": [
              {
                "text_es": "¡Qué divertido! Mis papás también hacen eso.",
                "text_ko_hint": "재밌겠다! 우리 부모님도 그렇게 하셔.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué divertido! Mi papás también hacen eso.",
                "text_ko_hint": "재밌겠다! 우리 부모님도 그렇게 하셔.",
                "correct": false,
                "correctionKo": "'papás'(부모님)는 복수 명사라서 소유격도 복수형인 'mis'를 써야 해요. 'mi'는 단수 명사 앞에만 써요.",
                "correctEs": "¡Qué divertido! Mis papás también hacen eso.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "새로운 식당",
        "start": "n1",
        "endMessage": "마테오와 새로운 식당 이야기로 군침이 돌았어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Fui a un restaurante nuevo. Es más rico que el otro que conocíamos.",
            "text_ko": "새로운 식당에 가봤어. 우리가 알던 곳보다 더 맛있어.",
            "options": [
              {
                "text_es": "¡Qué bien! Quiero probarlo, se ve más grande que el de la esquina.",
                "text_ko_hint": "좋다! 가보고 싶어, 모퉁이에 있는 곳보다 더 커 보이네.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Qué bien! Quiero probarlo, se ve más grande de el de la esquina.",
                "text_ko_hint": "좋다! 가보고 싶어, 모퉁이에 있는 곳보다 더 커 보이네.",
                "correct": false,
                "correctionKo": "비교급 '~보다 더'는 스페인어로 'más + 형용사 + que'예요. 'de'가 아니라 'que'를 써야 해요.",
                "correctEs": "¡Qué bien! Quiero probarlo, se ve más grande que el de la esquina.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Y los tacos son buenísimos, son los mejores de la ciudad.",
            "text_ko": "그리고 타코가 진짜 맛있어, 도시에서 최고야.",
            "options": [
              {
                "text_es": "¡Wow! Entonces es el mejor restaurante de tacos.",
                "text_ko_hint": "와! 그럼 최고의 타코 식당이네.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "¡Wow! Entonces es el más bueno restaurante de tacos.",
                "text_ko_hint": "와! 그럼 최고의 타코 식당이네.",
                "correct": false,
                "correctionKo": "'bueno'(좋은)의 비교급/최상급은 불규칙 형태인 'mejor'예요. 'más bueno'라고 하지 않아요.",
                "correctEs": "¡Wow! Entonces es el mejor restaurante de tacos.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Deberíamos ir juntos la próxima semana.",
            "text_ko": "다음 주에 우리 같이 가면 좋겠다.",
            "options": [
              {
                "text_es": "¡Sí! Va a ser la mejor comida de mi semana.",
                "text_ko_hint": "좋아! 이번 주 최고의 식사가 될 거야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Sí! Va a ser la más buena comida de mi semana.",
                "text_ko_hint": "좋아! 이번 주 최고의 식사가 될 거야.",
                "correct": false,
                "correctionKo": "'bueno'의 최상급도 불규칙이라서 'la mejor'라고 해야 해요. 'la más buena'는 틀린 표현이에요.",
                "correctEs": "¡Sí! Va a ser la mejor comida de mi semana.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "소셜미디어",
        "start": "n1",
        "endMessage": "마테오와 소셜미디어 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Acabo de subir una foto nueva a mis redes sociales.",
            "text_ko": "방금 소셜미디어에 새 사진을 올렸어.",
            "options": [
              {
                "text_es": "Qué bien, yo acabo de ver un video muy chistoso.",
                "text_ko_hint": "좋다, 나는 방금 진짜 웃긴 영상을 봤어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bien, yo acabo ver un video muy chistoso.",
                "text_ko_hint": "좋다, 나는 방금 진짜 웃긴 영상을 봤어.",
                "correct": false,
                "correctionKo": "'방금 ~했다'는 'acabar de + 동사원형'으로 표현해요. 'acabar'와 동사원형 사이에 꼭 'de'를 넣어야 해요.",
                "correctEs": "Qué bien, yo acabo de ver un video muy chistoso.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Mi amigo acaba de comentar en mi foto.",
            "text_ko": "내 친구가 방금 내 사진에 댓글을 달았어.",
            "options": [
              {
                "text_es": "Qué bien, mis amigas acaban de compartir la foto también.",
                "text_ko_hint": "좋다, 내 친구들도 방금 그 사진을 공유했어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bien, mis amigas acaban compartir la foto también.",
                "text_ko_hint": "좋다, 내 친구들도 방금 그 사진을 공유했어.",
                "correct": false,
                "correctionKo": "잊지 말자! 'acabar de + 동사원형'에서 'de'는 필수예요. 'acaban compartir'가 아니라 'acaban de compartir'예요.",
                "correctEs": "Qué bien, mis amigas acaban de compartir la foto también.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Deberías publicar más seguido, tienes buen contenido.",
            "text_ko": "너도 더 자주 올려야 해, 콘텐츠가 좋아.",
            "options": [
              {
                "text_es": "Gracias, de hecho acabo de grabar un video nuevo.",
                "text_ko_hint": "고마워, 사실 방금 새 영상을 찍었어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, de hecho acabo grabar un video nuevo.",
                "text_ko_hint": "고마워, 사실 방금 새 영상을 찍었어.",
                "correct": false,
                "correctionKo": "다시 기억하자: 'acabar de + 동사원형'에서 'de'를 빼먹으면 안 돼요. 'acabo de grabar'가 맞는 표현이에요.",
                "correctEs": "Gracias, de hecho acabo de grabar un video nuevo.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "셀카와 사진",
        "start": "n1",
        "endMessage": "마테오와 사진들을 보며 즐거운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Mira estas fotos que tomé en mi viaje.",
            "text_ko": "내가 여행 가서 찍은 이 사진들 봐봐.",
            "options": [
              {
                "text_es": "¡Qué bonitas! Esta foto del atardecer es mi favorita.",
                "text_ko_hint": "완전 예쁘다! 이 노을 사진이 제일 마음에 들어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Qué bonitas! Este foto del atardecer es mi favorita.",
                "text_ko_hint": "완전 예쁘다! 이 노을 사진이 제일 마음에 들어.",
                "correct": false,
                "correctionKo": "'foto'는 -o로 끝나지만 여성 명사예요('fotografía'의 줄임말이라서요). 그래서 지시형용사도 여성형인 'esta'를 써야 해요. 'este'는 남성 명사 앞에 써요.",
                "correctEs": "¡Qué bonitas! Esta foto del atardecer es mi favorita.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Y esos videos de allá son de un concierto.",
            "text_ko": "그리고 저기 저 영상들은 콘서트에서 찍은 거야.",
            "options": [
              {
                "text_es": "¡Se ven geniales! ¿Y esas personas de la primera foto son tus amigos?",
                "text_ko_hint": "완전 멋지다! 첫 사진에 있는 저 사람들은 네 친구들이야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "¡Se ven geniales! ¿Y esos personas de la primera foto son tus amigos?",
                "text_ko_hint": "완전 멋지다! 첫 사진에 있는 저 사람들은 네 친구들이야?",
                "correct": false,
                "correctionKo": "'personas'(사람들)는 여성 명사라서 지시형용사도 여성형인 'esas'를 써야 해요. 'esos'는 남성 명사 앞에 써요.",
                "correctEs": "¡Se ven geniales! ¿Y esas personas de la primera foto son tus amigos?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Sí, y aquel chico con lentes es mi mejor amigo.",
            "text_ko": "응, 그리고 저 안경 쓴 애가 내 제일 친한 친구야.",
            "options": [
              {
                "text_es": "¡Qué padre! Deberíamos tomarnos una foto como esta también.",
                "text_ko_hint": "완전 좋다! 우리도 이런 사진 한 장 찍어야겠다.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué padre! Deberíamos tomarnos una foto como este también.",
                "text_ko_hint": "완전 좋다! 우리도 이런 사진 한 장 찍어야겠다.",
                "correct": false,
                "correctionKo": "다시 한번, 'foto'는 여성 명사니까 지시대명사도 'esta'를 써야 해요. 'este'는 남성 명사 앞에만 써요.",
                "correctEs": "¡Qué padre! Deberíamos tomarnos una foto como esta también.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "원작 소설과 영화",
        "start": "n1",
        "endMessage": "마테오와 원작 소설 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Estoy leyendo el libro en el que se basó mi película favorita.",
            "text_ko": "내가 제일 좋아하는 영화의 원작 소설을 읽고 있어.",
            "options": [
              {
                "text_es": "Qué interesante, ¿lo compraste para leerlo en el viaje?",
                "text_ko_hint": "재밌겠다, 여행 가서 읽으려고 산 거야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué interesante, ¿lo compraste por leerlo en el viaje?",
                "text_ko_hint": "재밌겠다, 여행 가서 읽으려고 산 거야?",
                "correct": false,
                "correctionKo": "목적('~하기 위해서')을 말할 때는 'para'를 써요. 'por'는 이유나 원인을 말할 때 주로 쓰는 전치사라서 이 문맥에는 맞지 않아요.",
                "correctEs": "Qué interesante, ¿lo compraste para leerlo en el viaje?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Sí, y también lo compré por una recomendación de mi profesora.",
            "text_ko": "응, 그리고 우리 교수님 추천 때문에 사기도 했어.",
            "options": [
              {
                "text_es": "Ah, entonces lo leíste por ella, ¡qué buena razón!",
                "text_ko_hint": "아, 그럼 그분 때문에 읽는 거네, 좋은 이유다!",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Ah, entonces lo leíste para ella, ¡qué buena razón!",
                "text_ko_hint": "아, 그럼 그분 때문에 읽는 거네, 좋은 이유다!",
                "correct": false,
                "correctionKo": "이유나 원인('~때문에')을 말할 때는 'por'를 써요. 'para'는 목적을 말할 때 쓰는 전치사라서 이 문맥에는 어울리지 않아요.",
                "correctEs": "Ah, entonces lo leíste por ella, ¡qué buena razón!",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "La película sale para el verano, ¡no puedo esperar!",
            "text_ko": "그 영화는 여름에 개봉해, 너무 기대돼!",
            "options": [
              {
                "text_es": "¡Yo tampoco! Voy a terminar el libro para esa fecha.",
                "text_ko_hint": "나도! 그때까지 책을 다 읽을 거야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Yo tampoco! Voy a terminar el libro por esa fecha.",
                "text_ko_hint": "나도! 그때까지 책을 다 읽을 거야.",
                "correct": false,
                "correctionKo": "마감이나 기한('~까지')을 말할 때는 'para'를 써요. 'por'는 대략적인 시간이나 이유를 말할 때 쓰는 전치사라서 여기엔 'para'가 맞아요.",
                "correctEs": "¡Yo tampoco! Voy a terminar el libro para esa fecha.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "할로윈 파티",
        "start": "n1",
        "endMessage": "마테오와 할로윈 파티 계획을 세웠어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Voy a ir a una fiesta de disfraces. Quiero un disfraz divertido.",
            "text_ko": "할로윈 파티에 갈 건데, 재밌는 코스튬을 입고 싶어.",
            "options": [
              {
                "text_es": "¡Qué padre! Yo quiero un disfraz aterrador este año.",
                "text_ko_hint": "완전 좋다! 나는 올해 무서운 코스튬을 입고 싶어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Qué padre! Yo quiero un disfraz aterradora este año.",
                "text_ko_hint": "완전 좋다! 나는 올해 무서운 코스튬을 입고 싶어.",
                "correct": false,
                "correctionKo": "'disfraz'(의상)는 남성 명사라서 형용사도 남성형인 'aterrador'를 써야 해요. 'aterradora'는 여성 명사 앞에 쓰는 형태예요.",
                "correctEs": "¡Qué padre! Yo quiero un disfraz aterrador este año.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Mi amiga va a llevar una máscara rara.",
            "text_ko": "내 친구는 이상한 가면을 쓸 거야.",
            "options": [
              {
                "text_es": "Jaja, y mis amigos van a llevar capas negras.",
                "text_ko_hint": "하하, 내 친구들은 검은 망토를 걸칠 거야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Jaja, y mis amigos van a llevar capas negros.",
                "text_ko_hint": "하하, 내 친구들은 검은 망토를 걸칠 거야.",
                "correct": false,
                "correctionKo": "'capas'(망토들)는 여성 복수 명사라서 형용사도 여성 복수형인 'negras'를 써야 해요. 'negros'는 남성 명사 앞에 쓰는 형태예요.",
                "correctEs": "Jaja, y mis amigos van a llevar capas negras.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Va a ser una noche muy divertida.",
            "text_ko": "정말 재밌는 밤이 될 거야.",
            "options": [
              {
                "text_es": "¡Sí! Los dulces de esa fiesta siempre están riquísimos.",
                "text_ko_hint": "응! 그 파티 사탕은 항상 정말 맛있어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Sí! Los dulces de esa fiesta siempre están riquísimas.",
                "text_ko_hint": "응! 그 파티 사탕은 항상 정말 맛있어.",
                "correct": false,
                "correctionKo": "'dulces'(사탕들)는 남성 복수 명사라서 형용사도 남성 복수형인 'riquísimos'를 써야 해요. 'riquísimas'는 여성 명사 앞에 쓰는 형태예요.",
                "correctEs": "¡Sí! Los dulces de esa fiesta siempre están riquísimos.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "기타 배우기",
        "start": "n1",
        "endMessage": "마테오와 악기 배우는 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Llevo dos años tocando la guitarra. ¿Tú tocas algún instrumento?",
            "text_ko": "나 기타 친 지 2년 됐어. 너도 악기 다뤄?",
            "options": [
              {
                "text_es": "Sí, llevo un año aprendiendo a tocar el piano.",
                "text_ko_hint": "응, 피아노 배운 지 1년 됐어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, tengo un año aprendiendo a tocar el piano.",
                "text_ko_hint": "응, 피아노 배운 지 1년 됐어.",
                "correct": false,
                "correctionKo": "'~한 지 얼마나 됐다'는 지속 기간은 'llevar + 시간 + 현재분사'로 표현해요. 이 표현에는 'tener'를 쓰지 않아요.",
                "correctEs": "Sí, llevo un año aprendiendo a tocar el piano.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¡Qué bien! Mi hermano lleva seis meses tomando clases de batería.",
            "text_ko": "좋다! 내 남동생은 드럼 수업 들은 지 6개월 됐어.",
            "options": [
              {
                "text_es": "Wow, yo llevo poco tiempo practicando, apenas un mes.",
                "text_ko_hint": "와, 나는 연습한 지 얼마 안 됐어, 겨우 한 달이야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Wow, yo tengo poco tiempo practicando, apenas un mes.",
                "text_ko_hint": "와, 나는 연습한 지 얼마 안 됐어, 겨우 한 달이야.",
                "correct": false,
                "correctionKo": "다시 한번: 지속 기간은 'llevar + 시간 + 현재분사'로 표현해요. 'tengo poco tiempo'가 아니라 'llevo poco tiempo'가 맞아요.",
                "correctEs": "Wow, yo llevo poco tiempo practicando, apenas un mes.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Deberíamos tocar algo juntos algún día.",
            "text_ko": "언젠가 같이 연주하면 좋겠다.",
            "options": [
              {
                "text_es": "¡Me encantaría! Llevo tiempo queriendo tocar con alguien.",
                "text_ko_hint": "정말 좋겠다! 누구랑 같이 연주하고 싶었던 지 오래됐어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Me encantaría! Tengo tiempo queriendo tocar con alguien.",
                "text_ko_hint": "정말 좋겠다! 누구랑 같이 연주하고 싶었던 지 오래됐어.",
                "correct": false,
                "correctionKo": "'~한 지 오래됐다'는 'llevar + 시간 + 현재분사'로 말해요. 'tengo tiempo'가 아니라 'llevo tiempo'가 자연스러운 표현이에요.",
                "correctEs": "¡Me encantaría! Llevo tiempo queriendo tocar con alguien.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "헬스장 루틴",
        "start": "n1",
        "endMessage": "마테오와 헬스장 루틴 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Empecé a ir al gimnasio. Le pedí consejos al entrenador.",
            "text_ko": "헬스장 다니기 시작했어. 트레이너한테 조언을 부탁했어.",
            "options": [
              {
                "text_es": "Qué bien, yo también le pedí una rutina nueva.",
                "text_ko_hint": "좋다, 나도 새로운 루틴을 부탁했어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bien, yo también le pregunté una rutina nueva.",
                "text_ko_hint": "좋다, 나도 새로운 루틴을 부탁했어.",
                "correct": false,
                "correctionKo": "무언가를 '요청하다, 부탁하다'라고 할 때는 'pedir'를 써요. 'preguntar'는 정보를 물어볼 때 쓰는 동사라서 물건이나 도움을 요청할 때는 어울리지 않아요.",
                "correctEs": "Qué bien, yo también le pedí una rutina nueva.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Le pregunté cuántas veces debo ir por semana.",
            "text_ko": "일주일에 몇 번 가야 하는지 물어봤어.",
            "options": [
              {
                "text_es": "Buena pregunta, yo le pregunté lo mismo.",
                "text_ko_hint": "좋은 질문이네, 나도 똑같이 물어봤어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Buena pregunta, yo le pedí lo mismo.",
                "text_ko_hint": "좋은 질문이네, 나도 똑같이 물어봤어.",
                "correct": false,
                "correctionKo": "정보를 물어볼 때는 'preguntar'를 써요. 'pedir'는 무언가를 요청/부탁할 때 쓰는 동사라서 질문하는 상황에는 맞지 않아요.",
                "correctEs": "Buena pregunta, yo le pregunté lo mismo.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Voy a pedirle otra rutina la próxima semana.",
            "text_ko": "다음 주에 또 다른 루틴을 부탁할 거야.",
            "options": [
              {
                "text_es": "Buena idea, yo voy a pedir consejos sobre la dieta también.",
                "text_ko_hint": "좋은 생각이야, 나도 식단 조언을 부탁할 거야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Buena idea, yo voy a preguntar consejos sobre la dieta también.",
                "text_ko_hint": "좋은 생각이야, 나도 식단 조언을 부탁할 거야.",
                "correct": false,
                "correctionKo": "조언을 '요청하다'라고 할 때도 'pedir'를 써요. 'preguntar'는 질문할 때 쓰는 동사니까 여기선 'pedir'가 맞아요.",
                "correctEs": "Buena idea, yo voy a pedir consejos sobre la dieta también.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "아르바이트",
        "start": "n1",
        "endMessage": "마테오와 아르바이트 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Empecé un trabajo de medio tiempo en una cafetería. Gano cien pesos por hora.",
            "text_ko": "카페에서 아르바이트 시작했어. 시간당 100페소를 벌어.",
            "options": [
              {
                "text_es": "¡Qué bien! Yo gano ochenta pesos por hora en mi trabajo.",
                "text_ko_hint": "좋다! 나는 시간당 80페소를 벌어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Qué bien! Yo gano ochenta peso por hora en mi trabajo.",
                "text_ko_hint": "좋다! 나는 시간당 80페소를 벌어.",
                "correct": false,
                "correctionKo": "숫자가 1보다 크면 명사도 복수형을 써야 해요. 'ochenta pesos'처럼 's'를 붙여야 하고, 'peso'라고 단수로 쓰면 틀려요.",
                "correctEs": "¡Qué bien! Yo gano ochenta pesos por hora en mi trabajo.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Ayer vendimos veintiún cafés en una hora, ¡un récord!",
            "text_ko": "어제 한 시간 만에 커피 21잔을 팔았어, 기록이야!",
            "options": [
              {
                "text_es": "¡Wow! En mi trabajo vendimos treinta y un sándwiches ese día.",
                "text_ko_hint": "와! 우리 가게에서는 그날 샌드위치 31개를 팔았어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "¡Wow! En mi trabajo vendimos treinta y uno sándwiches ese día.",
                "text_ko_hint": "와! 우리 가게에서는 그날 샌드위치 31개를 팔았어.",
                "correct": false,
                "correctionKo": "'uno'가 남성 명사 바로 앞에 오면 'un'으로 줄여야 해요. 'treinta y uno sándwiches'가 아니라 'treinta y un sándwiches'가 맞아요.",
                "correctEs": "¡Wow! En mi trabajo vendimos treinta y un sándwiches ese día.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Con lo que gano, voy a ahorrar para comprar una laptop nueva.",
            "text_ko": "번 돈으로 새 노트북 사려고 저축할 거야.",
            "options": [
              {
                "text_es": "¡Qué buena meta! Yo quiero ahorrar mil pesos este mes.",
                "text_ko_hint": "좋은 목표다! 나는 이번 달에 천 페소를 모으고 싶어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué buena meta! Yo quiero ahorrar mil peso este mes.",
                "text_ko_hint": "좋은 목표다! 나는 이번 달에 천 페소를 모으고 싶어.",
                "correct": false,
                "correctionKo": "'mil'(천) 뒤에 오는 명사도 복수형이어야 해요. 'mil pesos'가 맞고, 'peso'라고 단수로 쓰면 틀려요.",
                "correctEs": "¡Qué buena meta! Yo quiero ahorrar mil pesos este mes.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "휴대폰 교체",
        "start": "n1",
        "endMessage": "마테오와 새 휴대폰 고르는 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Mi celular ya no funciona bien, se congela mucho.",
            "text_ko": "내 휴대폰이 이제 잘 안 돼, 자꾸 멈춰.",
            "options": [
              {
                "text_es": "Qué mal, ¿cuál es el modelo que tienes?",
                "text_ko_hint": "안됐다, 네가 가진 게 어떤 모델이야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué mal, ¿qué es el modelo que tienes?",
                "text_ko_hint": "안됐다, 네가 가진 게 어떤 모델이야?",
                "correct": false,
                "correctionKo": "여러 선택지 중 하나를 고르거나 구체적인 것을 물을 때는 'cuál'을 써요. 'qué'는 정의나 설명을 물을 때 쓰는 의문사라서 이 문맥엔 'cuál'이 맞아요.",
                "correctEs": "Qué mal, ¿cuál es el modelo que tienes?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Hay varios celulares nuevos en la tienda.",
            "text_ko": "가게에 새 휴대폰이 여러 개 있어.",
            "options": [
              {
                "text_es": "¿Cuál es el más barato de todos?",
                "text_ko_hint": "그중에서 제일 저렴한 게 뭐야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "¿Qué es el más barato de todos?",
                "text_ko_hint": "그중에서 제일 저렴한 게 뭐야?",
                "correct": false,
                "correctionKo": "여러 개 중에서 하나를 고를 때는 'cuál'을 써요. 'qué'는 '무엇'이라는 뜻으로 정의를 물을 때 쓰기 때문에 이 문맥에는 맞지 않아요.",
                "correctEs": "¿Cuál es el más barato de todos?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "El azul es el más barato, cuesta dos mil pesos.",
            "text_ko": "파란색이 제일 싸, 2000페소야.",
            "options": [
              {
                "text_es": "¡Perfecto! ¿Qué opinas, debería comprarlo?",
                "text_ko_hint": "완벽해! 네 생각은 어때, 그거 사야 할까?",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Perfecto! ¿Cuál opinas, debería comprarlo?",
                "text_ko_hint": "완벽해! 네 생각은 어때, 그거 사야 할까?",
                "correct": false,
                "correctionKo": "의견이나 생각을 물을 때는 'qué opinas'라고 해요. 'cuál'은 선택지 중 하나를 고를 때 쓰는 의문사라서 이 문맥엔 어울리지 않아요.",
                "correctEs": "¡Perfecto! ¿Qué opinas, debería comprarlo?",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "채식 식당",
        "start": "n1",
        "endMessage": "마테오와 음식 취향 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¿Comes carne? Yo no como carne, soy vegetariano.",
            "text_ko": "고기 먹어? 나는 고기 안 먹어, 채식주의자야.",
            "options": [
              {
                "text_es": "Yo tampoco como carne, prefiero las verduras.",
                "text_ko_hint": "나도 고기 안 먹어, 채소를 더 좋아해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Yo también no como carne, prefiero las verduras.",
                "text_ko_hint": "나도 고기 안 먹어, 채소를 더 좋아해.",
                "correct": false,
                "correctionKo": "부정문에 동의할 때는 'también'이 아니라 'tampoco'를 써요. 'también no'는 스페인어에서 쓰지 않는 표현이에요.",
                "correctEs": "Yo tampoco como carne, prefiero las verduras.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Nunca he comido insectos, ¿tú sí?",
            "text_ko": "나는 곤충 먹어본 적이 한 번도 없어, 너는?",
            "options": [
              {
                "text_es": "No, nunca he comido insectos tampoco.",
                "text_ko_hint": "아니, 나도 곤충은 한 번도 안 먹어봤어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "No, he comido insectos nunca tampoco.",
                "text_ko_hint": "아니, 나도 곤충은 한 번도 안 먹어봤어.",
                "correct": false,
                "correctionKo": "'nunca'(절대 ~않다)는 보통 동사 앞에 놓아요. 동사 뒤에 두려면 그 앞에 'no'가 있어야 해요. 아무 부정어 없이 동사 뒤에만 두면 어색한 문장이 돼요.",
                "correctEs": "No, nunca he comido insectos tampoco.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Hay un restaurante vegetariano nuevo. ¿Quieres ir?",
            "text_ko": "새로 생긴 채식 식당이 있어. 갈래?",
            "options": [
              {
                "text_es": "¡Claro! No conozco ningún restaurante vegetariano por aquí.",
                "text_ko_hint": "물론이지! 이 근처에 채식 식당을 하나도 몰라.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Claro! No conozco algún restaurante vegetariano por aquí.",
                "text_ko_hint": "물론이지! 이 근처에 채식 식당을 하나도 몰라.",
                "correct": false,
                "correctionKo": "부정문에서는 'algún'(어떤) 대신 'ningún'(아무~도 없는)을 써야 해요. 'no conozco algún'이 아니라 'no conozco ningún'이 맞아요.",
                "correctEs": "¡Claro! No conozco ningún restaurante vegetariano por aquí.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "가족과 영상통화",
        "start": "n1",
        "endMessage": "마테오와 가족 영상통화 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Voy a llamar a mi familia por video. Son las nueve de la noche allá.",
            "text_ko": "가족이랑 영상통화 할 거야. 거기는 지금 밤 9시야.",
            "options": [
              {
                "text_es": "Qué bien, yo llamo a mi familia a las diez de la noche siempre.",
                "text_ko_hint": "좋다, 나는 항상 밤 10시에 가족한테 전화해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bien, yo llamo a mi familia son las diez de la noche siempre.",
                "text_ko_hint": "좋다, 나는 항상 밤 10시에 가족한테 전화해.",
                "correct": false,
                "correctionKo": "'몇 시에 ~하다'라고 할 때는 'a las + 시간'을 써요. 'son las'는 '지금 몇 시다'라고 현재 시각을 말할 때만 쓰는 표현이에요.",
                "correctEs": "Qué bien, yo llamo a mi familia a las diez de la noche siempre.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Qué hora es ahora donde tú vives?",
            "text_ko": "지금 네가 사는 곳은 몇 시야?",
            "options": [
              {
                "text_es": "Son las tres de la tarde aquí.",
                "text_ko_hint": "여기는 오후 3시야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Es las tres de la tarde aquí.",
                "text_ko_hint": "여기는 오후 3시야.",
                "correct": false,
                "correctionKo": "시각이 2시 이상일 때는 'son las'를 써요. 'es la'는 1시일 때만 쓰는 표현이에요.",
                "correctEs": "Son las tres de la tarde aquí.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Entonces hay seis horas de diferencia entre nosotros.",
            "text_ko": "그럼 우리 사이엔 6시간 차이가 있네.",
            "options": [
              {
                "text_es": "Sí, por eso te llamo a las ocho de la mañana mi hora.",
                "text_ko_hint": "응, 그래서 내 시간으로 아침 8시에 너한테 전화해.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Sí, por eso te llamo son las ocho de la mañana mi hora.",
                "text_ko_hint": "응, 그래서 내 시간으로 아침 8시에 너한테 전화해.",
                "correct": false,
                "correctionKo": "특정 시각에 무언가를 한다고 할 때는 'a las + 시간'을 써야 해요. 'son las'는 현재 시각을 말할 때만 쓰는 표현이라 이 문맥엔 맞지 않아요.",
                "correctEs": "Sí, por eso te llamo a las ocho de la mañana mi hora.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "분실물",
        "start": "n1",
        "endMessage": "마테오와 함께 잃어버린 물건을 찾았어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "No encuentro mi mochila, creo que la perdí en el cine.",
            "text_ko": "가방을 못 찾겠어, 영화관에서 잃어버린 것 같아.",
            "options": [
              {
                "text_es": "Uy, ¿dónde está el cine exactamente?",
                "text_ko_hint": "어이구, 영화관이 정확히 어디에 있어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Uy, ¿dónde es el cine exactamente?",
                "text_ko_hint": "어이구, 영화관이 정확히 어디에 있어?",
                "correct": false,
                "correctionKo": "위치를 물을 때는 'estar'를 써요. 'ser'는 정체성이나 특징을 말할 때 쓰는 동사라서 장소를 물을 때는 어울리지 않아요.",
                "correctEs": "Uy, ¿dónde está el cine exactamente?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Mi mochila es negra con rayas rojas.",
            "text_ko": "내 가방은 검은색에 빨간 줄무늬가 있어.",
            "options": [
              {
                "text_es": "Ok, voy a buscar una mochila así, ¿está cerca de aquí el cine?",
                "text_ko_hint": "알겠어, 그런 가방을 찾아볼게, 영화관이 여기서 가까워?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Ok, voy a buscar una mochila así, ¿es cerca de aquí el cine?",
                "text_ko_hint": "알겠어, 그런 가방을 찾아볼게, 영화관이 여기서 가까워?",
                "correct": false,
                "correctionKo": "다시 한번: 위치나 거리를 말할 때는 'estar'를 써요. 'es cerca'가 아니라 'está cerca'가 맞아요.",
                "correctEs": "Ok, voy a buscar una mochila así, ¿está cerca de aquí el cine?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "¡La encontré! Estaba debajo de un asiento.",
            "text_ko": "찾았어! 좌석 밑에 있었어.",
            "options": [
              {
                "text_es": "¡Qué alivio! Debes estar muy contento.",
                "text_ko_hint": "정말 다행이다! 완전 기쁘겠다.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Qué alivio! Debes ser muy contento.",
                "text_ko_hint": "정말 다행이다! 완전 기쁘겠다.",
                "correct": false,
                "correctionKo": "기분이나 일시적인 상태를 말할 때는 'estar'를 써요. 'contento'(기쁜)는 일시적인 감정이라 'ser'가 아니라 'estar'와 함께 써야 해요.",
                "correctEs": "¡Qué alivio! Debes estar muy contento.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "물건 빌리기",
        "start": "n1",
        "endMessage": "마테오에게 물건을 빌려주며 도와줬어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "¿Me prestas tu cargador? El mío no funciona.",
            "text_ko": "충전기 좀 빌려줄 수 있어? 내 게 안 돼.",
            "options": [
              {
                "text_es": "Claro, te lo presto, pero lo necesito muy pronto.",
                "text_ko_hint": "물론이지, 빌려줄게, 근데 아주 곧 필요해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Claro, te lo presto, pero lo necesito mucho pronto.",
                "text_ko_hint": "물론이지, 빌려줄게, 근데 아주 곧 필요해.",
                "correct": false,
                "correctionKo": "형용사나 부사를 꾸밀 때는 'muy'를 써요. 'mucho'는 동사를 꾸미거나 양을 말할 때 쓰는 말이라서, 부사 'pronto' 앞에는 'muy'가 맞아요.",
                "correctEs": "Claro, te lo presto, pero lo necesito muy pronto.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "Gracias, te lo agradezco mucho.",
            "text_ko": "고마워, 정말 고맙게 생각해.",
            "options": [
              {
                "text_es": "De nada, estoy muy feliz de ayudarte.",
                "text_ko_hint": "천만에, 도와줄 수 있어서 정말 기뻐.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "De nada, estoy mucho feliz de ayudarte.",
                "text_ko_hint": "천만에, 도와줄 수 있어서 정말 기뻐.",
                "correct": false,
                "correctionKo": "형용사(feliz) 앞에는 'muy'를 써야 해요. 'mucho'는 형용사를 꾸밀 수 없는 말이에요.",
                "correctEs": "De nada, estoy muy feliz de ayudarte.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Te lo devuelvo mañana sin falta.",
            "text_ko": "내일 꼭 돌려줄게.",
            "options": [
              {
                "text_es": "No te preocupes, no tengo mucha prisa.",
                "text_ko_hint": "걱정하지 마, 나 별로 급하지 않아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "No te preocupes, no tengo muy prisa.",
                "text_ko_hint": "걱정하지 마, 나 별로 급하지 않아.",
                "correct": false,
                "correctionKo": "'prisa'(서두름)는 명사라서 그 앞에는 'muy'가 아니라 'mucho/mucha'를 써야 해요. 'prisa'는 여성 명사니까 'mucha prisa'가 맞아요.",
                "correctEs": "No te preocupes, no tengo mucha prisa.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "여행 계획",
        "start": "n1",
        "endMessage": "마테오와 신나는 여행 계획을 세웠어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Estoy planeando un viaje a la playa. Hay un hotel muy bueno cerca del mar.",
            "text_ko": "해변 여행을 계획하고 있어. 바다 근처에 진짜 좋은 호텔이 있어.",
            "options": [
              {
                "text_es": "Qué bien, ¿y el hotel está lejos del centro?",
                "text_ko_hint": "좋다, 그 호텔은 시내에서 멀어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bien, ¿y el hotel hay lejos del centro?",
                "text_ko_hint": "좋다, 그 호텔은 시내에서 멀어?",
                "correct": false,
                "correctionKo": "이미 언급된 특정한 것의 위치를 물을 때는 'estar'를 써요. 'hay'는 '무언가가 존재한다'는 뜻으로 처음 소개할 때 쓰고, 정해진 대상의 위치에는 쓰지 않아요.",
                "correctEs": "Qué bien, ¿y el hotel está lejos del centro?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "No, está muy cerca. Y hay muchos restaurantes buenos por ahí.",
            "text_ko": "아니, 엄청 가까워. 그리고 거기 좋은 식당도 많아.",
            "options": [
              {
                "text_es": "Perfecto, entonces hay muchas opciones para comer.",
                "text_ko_hint": "완벽해, 그럼 먹을 만한 곳이 많네.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Perfecto, entonces están muchas opciones para comer.",
                "text_ko_hint": "완벽해, 그럼 먹을 만한 곳이 많네.",
                "correct": false,
                "correctionKo": "정해지지 않은 것들이 '있다, 존재한다'고 말할 때는 'hay'를 써요. 'estar'는 이미 정해진 특정한 것의 위치를 말할 때 쓰기 때문에 이 문맥엔 맞지 않아요.",
                "correctEs": "Perfecto, entonces hay muchas opciones para comer.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "El hotel está justo en la playa.",
            "text_ko": "그 호텔은 바로 해변에 있어.",
            "options": [
              {
                "text_es": "¡Genial! Entonces no hay necesidad de caminar mucho.",
                "text_ko_hint": "완전 좋다! 그럼 많이 걸을 필요가 없겠다.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Genial! Entonces no está necesidad de caminar mucho.",
                "text_ko_hint": "완전 좋다! 그럼 많이 걸을 필요가 없겠다.",
                "correct": false,
                "correctionKo": "'필요가 있다/없다'처럼 존재를 말할 때는 'hay'를 써요. 'estar'는 위치를 말할 때 쓰는 동사라서 이 문맥엔 어울리지 않아요.",
                "correctEs": "¡Genial! Entonces no hay necesidad de caminar mucho.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "친구에게 문자하기",
        "start": "n1",
        "endMessage": "마테오와 메시지 보내는 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "mateo",
            "text_es": "Le voy a escribir un mensaje al profesor sobre la tarea.",
            "text_ko": "숙제에 대해서 교수님한테 문자를 보낼 거야.",
            "options": [
              {
                "text_es": "Buena idea, yo también le voy a escribir al entrenador.",
                "text_ko_hint": "좋은 생각이야, 나도 코치한테 문자를 보낼 거야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Buena idea, yo también le voy a escribir a el entrenador.",
                "text_ko_hint": "좋은 생각이야, 나도 코치한테 문자를 보낼 거야.",
                "correct": false,
                "correctionKo": "전치사 'a'와 남성 정관사 'el'이 만나면 반드시 'al'로 합쳐야 해요. 'a el entrenador'가 아니라 'al entrenador'라고 써야 해요.",
                "correctEs": "Buena idea, yo también le voy a escribir al entrenador.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "mateo",
            "text_es": "¿Ya le mandaste el mensaje del grupo?",
            "text_ko": "단체 채팅방 메시지는 벌써 보냈어?",
            "options": [
              {
                "text_es": "Sí, y también le escribí al chico del club de cine.",
                "text_ko_hint": "응, 그리고 영화 동아리 친구한테도 문자 보냈어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, y también le escribí al chico de el club de cine.",
                "text_ko_hint": "응, 그리고 영화 동아리 친구한테도 문자 보냈어.",
                "correct": false,
                "correctionKo": "전치사 'de'와 남성 정관사 'el'이 만나면 'del'로 합쳐야 해요. 'de el club'이 아니라 'del club'이라고 써야 해요.",
                "correctEs": "Sí, y también le escribí al chico del club de cine.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "mateo",
            "text_es": "Espero que te respondan pronto.",
            "text_ko": "빨리 답장 오면 좋겠다.",
            "options": [
              {
                "text_es": "Ojalá, voy a estar pendiente del celular toda la tarde.",
                "text_ko_hint": "그러길 바라, 오후 내내 휴대폰을 계속 확인할 거야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Ojalá, voy a estar pendiente de el celular toda la tarde.",
                "text_ko_hint": "그러길 바라, 오후 내내 휴대폰을 계속 확인할 거야.",
                "correct": false,
                "correctionKo": "다시 한번: 'de' + 'el'은 항상 'del'로 줄여 써야 해요. 'de el celular'가 아니라 'del celular'가 맞아요.",
                "correctEs": "Ojalá, voy a estar pendiente del celular toda la tarde.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      }
    ]
  },
  "andres": {
    "topics": [
      {
        "topicLabel": "책 이야기",
        "start": "n1",
        "endMessage": "돈 안드레스와 책 이야기를 나누며 좋은 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Bienvenida a mi librería. ¿Qué tipo de libros te gustan?",
            "text_ko": "내 책방에 온 걸 환영해. 어떤 책을 좋아해?",
            "options": [
              {
                "text_es": "Me gustan las novelas clásicas.",
                "text_ko_hint": "나는 고전 소설을 좋아해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Me gusta un novela clásica.",
                "text_ko_hint": "나는 고전 소설 한 편을 좋아해.",
                "correct": false,
                "correctionKo": "'novela'(소설)는 여성 명사라서 관사도 여성형인 'una'를 써야 해요. 'un'은 남성 명사 앞에 쓰는 관사예요.",
                "correctEs": "Me gusta una novela clásica.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "A mí me fascina la literatura latinoamericana. ¿Has leído algún libro de García Márquez?",
            "text_ko": "나는 라틴아메리카 문학에 푹 빠져 있어. 가르시아 마르케스 책 읽어본 적 있어?",
            "options": [
              {
                "text_es": "Sí, leí un libro suyo. Es un escritor increíble.",
                "text_ko_hint": "응, 그의 책 한 권을 읽었어. 정말 대단한 작가야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, leí una libro suyo.",
                "text_ko_hint": "응, 그의 책 한 권을 읽었어.",
                "correct": false,
                "correctionKo": "'libro'(책)는 남성 명사라서 'un libro'라고 해야 해요. 'una'는 여성 명사 앞에만 써요. 이번엔 반대로 헷갈린 경우네요!",
                "correctEs": "Sí, leí un libro suyo.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Vuelve cuando quieras a la librería. Aquí siempre hay una historia esperándote.",
            "text_ko": "언제든 책방에 다시 와. 여긴 항상 너를 기다리는 이야기가 있어.",
            "options": [
              {
                "text_es": "Gracias, Don Andrés. Volveré pronto.",
                "text_ko_hint": "감사해요, 안드레스 아저씨. 곧 다시 올게요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias. Me encantó la cuento sobre el mar.",
                "text_ko_hint": "감사해요. 바다에 관한 이야기가 정말 좋았어요.",
                "correct": false,
                "correctionKo": "'cuento'(이야기/단편)는 남성 명사예요. 그래서 'el cuento'라고 해야 하고, 'la'는 틀려요.",
                "correctEs": "Gracias. Me encantó el cuento sobre el mar.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 시인",
        "start": "n1",
        "endMessage": "돈 안드레스와 좋아하는 시인 이야기를 나누며 따뜻한 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Cuando era joven, leía poemas de Pablo Neruda todas las noches. ¿Tienes un poeta favorito?",
            "text_ko": "젊었을 때 나는 매일 밤 파블로 네루다의 시를 읽곤 했어. 너는 좋아하는 시인이 있어?",
            "options": [
              {
                "text_es": "Sí, de niña leía mucha poesía de Gabriela Mistral.",
                "text_ko_hint": "응, 어릴 때 나는 가브리엘라 미스트랄의 시를 많이 읽곤 했어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, de niña leí mucha poesía de Gabriela Mistral.",
                "text_ko_hint": "응, 어릴 때 나는 가브리엘라 미스트랄의 시를 많이 읽곤 했어.",
                "correct": false,
                "correctionKo": "어릴 때 반복적으로 하던 습관을 말할 때는 불완료과거 'leía'를 써요. 'leí'는 한 번 끝난 행동을 나타내는 단순과거라서 '~하곤 했다'는 습관에는 어울리지 않아요.",
                "correctEs": "Sí, de niña leía mucha poesía de Gabriela Mistral.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Ayer leí un poema nuevo de un autor joven. Fue muy hermoso.",
            "text_ko": "어제 나는 젊은 작가의 새로운 시 한 편을 읽었어. 정말 아름다웠어.",
            "options": [
              {
                "text_es": "Yo también leí algo interesante ayer.",
                "text_ko_hint": "나도 어제 흥미로운 걸 읽었어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Yo también leía algo interesante ayer.",
                "text_ko_hint": "나도 어제 흥미로운 걸 읽었어.",
                "correct": false,
                "correctionKo": "'ayer'(어제)처럼 특정 시점을 가리키는 말이 있으면 완료된 행동이니 단순과거 'leí'를 써야 해요. 'leía'는 습관이나 배경 상황을 묘사할 때 써요.",
                "correctEs": "Yo también leí algo interesante ayer.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Me encantaría prestarte un libro de poemas algún día.",
            "text_ko": "언젠가 너에게 시집 한 권을 빌려주고 싶어.",
            "options": [
              {
                "text_es": "¡Me encantaría! Antes leía poco, pero ahora quiero leer más.",
                "text_ko_hint": "좋아요! 예전엔 별로 안 읽었는데, 이제는 더 읽고 싶어요.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "¡Me encantaría! Antes leí poco, pero ahora quiero leer más.",
                "text_ko_hint": "좋아요! 예전엔 별로 안 읽었는데, 이제는 더 읽고 싶어요.",
                "correct": false,
                "correctionKo": "'antes'(예전에)로 과거의 지속적인 상태나 습관을 말할 때는 불완료과거 'leía'를 써요. 'leí'는 완료된 사건 하나를 가리켜서 여기엔 어색해요.",
                "correctEs": "¡Me encantaría! Antes leía poco, pero ahora quiero leer más.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "시 낭송회",
        "start": "n1",
        "endMessage": "돈 안드레스와 함께 시 낭송회 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "El viernes hay un recital de poesía en la librería. ¿Quieres venir?",
            "text_ko": "금요일에 책방에서 시 낭송회가 있어. 올래?",
            "options": [
              {
                "text_es": "¡Sí! ¿Hay muchos poetas invitados?",
                "text_ko_hint": "응! 초대된 시인이 많이 있어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Sí! ¿Está muchos poetas invitados?",
                "text_ko_hint": "응! 초대된 시인이 많이 있어?",
                "correct": false,
                "correctionKo": "여러 사람이나 사물이 '있다'는 존재를 말할 때는 'hay'를 써요. 'está'는 이미 정해진 대상의 위치를 말할 때 쓰는 동사라서 여기엔 맞지 않아요.",
                "correctEs": "¡Sí! ¿Hay muchos poetas invitados?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Sí, y también hay café gratis para los invitados.",
            "text_ko": "응, 그리고 손님들을 위한 무료 커피도 있어.",
            "options": [
              {
                "text_es": "Qué bien, ¿dónde hay sillas para sentarnos?",
                "text_ko_hint": "좋다, 앉을 의자는 어디에 있어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bien, ¿dónde están sillas para sentarnos?",
                "text_ko_hint": "좋다, 앉을 의자는 어디에 있어?",
                "correct": false,
                "correctionKo": "특정하지 않은 '어떤 의자들'이 있는지 물을 때는 'hay'를 써요. 'están'은 이미 알고 있는 특정한 대상의 위치를 물을 때 쓰기 때문에 'las sillas están'처럼 관사가 있어야 해요.",
                "correctEs": "Qué bien, ¿dónde hay sillas para sentarnos?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Va a ser una noche especial. Espero que puedas venir.",
            "text_ko": "특별한 밤이 될 거야. 네가 올 수 있으면 좋겠다.",
            "options": [
              {
                "text_es": "Ahí estaré, no hay problema.",
                "text_ko_hint": "거기 있을게, 문제없어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Ahí estaré, no está problema.",
                "text_ko_hint": "거기 있을게, 문제없어.",
                "correct": false,
                "correctionKo": "'문제가 없다'처럼 존재 여부를 말할 때는 'no hay problema'라고 해요. 'estar'는 위치나 상태를 말할 때 쓰는 동사라 이 표현에는 어울리지 않아요.",
                "correctEs": "Ahí estaré, no hay problema.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "글쓰기 워크숍",
        "start": "n1",
        "endMessage": "돈 안드레스와 글쓰기 워크숍에 대해 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Este sábado doy un pequeño taller de escritura aquí. El tema es muy interesante.",
            "text_ko": "이번 토요일에 여기서 작은 글쓰기 워크숍을 열어. 주제가 정말 흥미로워.",
            "options": [
              {
                "text_es": "Qué interesante, ¿el taller es largo?",
                "text_ko_hint": "흥미롭다, 워크숍이 길어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué interesante, ¿el taller está largo?",
                "text_ko_hint": "흥미롭다, 워크숍이 길어?",
                "correct": false,
                "correctionKo": "어떤 것의 길이처럼 원래 성질이나 특징을 말할 때는 'ser'를 써요. 'estar'는 일시적인 상태나 위치를 말할 때 쓰는 동사라서 여기엔 맞지 않아요.",
                "correctEs": "Qué interesante, ¿el taller es largo?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "No, es corto. Y hoy el salón está muy ordenado para los estudiantes.",
            "text_ko": "아니, 짧아. 그리고 오늘 학생들을 위해 방이 아주 정리되어 있어.",
            "options": [
              {
                "text_es": "Qué bien, el salón está muy limpio hoy.",
                "text_ko_hint": "좋다, 오늘 방이 아주 깨끗하네.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bien, el salón es muy limpio hoy.",
                "text_ko_hint": "좋다, 오늘 방이 아주 깨끗하네.",
                "correct": false,
                "correctionKo": "'오늘'처럼 일시적인 상태(방금 청소해서 깨끗함)를 말할 때는 'estar'를 써요. 'ser'는 원래부터 가진 변하지 않는 성질을 말할 때 써서 여기엔 어색해요.",
                "correctEs": "Qué bien, el salón está muy limpio hoy.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "¿Te gustaría participar en el taller conmigo?",
            "text_ko": "나랑 같이 워크숍에 참여하고 싶어?",
            "options": [
              {
                "text_es": "Sí, me encantaría. Estoy un poco nerviosa, pero será divertido.",
                "text_ko_hint": "응, 정말 좋아. 조금 긴장되지만 재미있을 거야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Sí, me encantaría. Soy un poco nerviosa, pero será divertido.",
                "text_ko_hint": "응, 정말 좋아. 조금 긴장되지만 재미있을 거야.",
                "correct": false,
                "correctionKo": "지금 이 순간 느끼는 감정 상태(긴장됨)를 말할 때는 'estar'를 써요. 'ser nervioso/a'는 '원래 긴장을 잘 타는 성격'이라는 뜻이 되어서, 지금 느끼는 감정을 말하려는 이 상황에는 어울리지 않아요.",
                "correctEs": "Sí, me encantaría. Estoy un poco nerviosa, pero será divertido.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "오래된 희귀본",
        "start": "n1",
        "endMessage": "돈 안드레스와 오래된 희귀본 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Ayer un cliente vino y me trajo un libro muy antiguo. ¡Fue una sorpresa increíble!",
            "text_ko": "어제 한 손님이 와서 아주 오래된 책 한 권을 가져다줬어. 정말 놀라운 일이었어!",
            "options": [
              {
                "text_es": "¡Qué emoción! ¿Y qué dijo el cliente sobre el libro?",
                "text_ko_hint": "정말 신난다! 그런데 그 손님이 책에 대해 뭐라고 했어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Qué emoción! ¿Y qué deció el cliente sobre el libro?",
                "text_ko_hint": "정말 신난다! 그런데 그 손님이 책에 대해 뭐라고 했어?",
                "correct": false,
                "correctionKo": "'decir'(말하다)의 단순과거는 불규칙 동사라서 'decir → dije, dijiste, dijo...'로 변해요. 'deció'라는 형태는 존재하지 않아요.",
                "correctEs": "¡Qué emoción! ¿Y qué dijo el cliente sobre el libro?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Dijo que fue de su abuela y que tuvo el libro por muchos años.",
            "text_ko": "그의 할머니 책이었고, 그가 그 책을 오랫동안 가지고 있었다고 했어.",
            "options": [
              {
                "text_es": "Qué historia tan bonita. ¿Tuviste tiempo de leerlo?",
                "text_ko_hint": "정말 아름다운 이야기다. 그거 읽어볼 시간이 있었어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué historia tan bonita. ¿Tenistes tiempo de leerlo?",
                "text_ko_hint": "정말 아름다운 이야기다. 그거 읽어볼 시간이 있었어?",
                "correct": false,
                "correctionKo": "'tener'의 2인칭 단순과거는 'tuviste'예요. 'tenistes'는 규칙 동사처럼 잘못 만든 형태라서 틀려요. 'tener'는 'tuve, tuviste, tuvo...'로 불규칙하게 변해요.",
                "correctEs": "Qué historia tan bonita. ¿Tuviste tiempo de leerlo?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Sí, lo leí anoche. Fue una historia muy conmovedora.",
            "text_ko": "응, 어젯밤에 읽었어. 정말 감동적인 이야기였어.",
            "options": [
              {
                "text_es": "Qué bueno que vino ese cliente. Fue un regalo especial para ti.",
                "text_ko_hint": "그 손님이 와줘서 정말 다행이다. 너에게 특별한 선물이었네.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Qué bueno que venió ese cliente. Fue un regalo especial para ti.",
                "text_ko_hint": "그 손님이 와줘서 정말 다행이다. 너에게 특별한 선물이었네.",
                "correct": false,
                "correctionKo": "'venir'(오다)의 단순과거 3인칭 단수는 'vino'예요. 'venió'는 잘못된 형태이니 조심해야 해요.",
                "correctEs": "Qué bueno que vino ese cliente. Fue un regalo especial para ti.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "손님에게 책 추천하기",
        "start": "n1",
        "endMessage": "돈 안드레스와 함께 손님에게 책을 추천해봤어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Una clienta busca una novela romántica. ¿Tienes alguna recomendación?",
            "text_ko": "한 손님이 로맨스 소설을 찾고 있어. 추천할 만한 게 있어?",
            "options": [
              {
                "text_es": "Sí, tengo una. La recomiendo mucho.",
                "text_ko_hint": "응, 하나 있어. 그거 정말 추천해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, tengo una. La recomiendo mucho a ella.",
                "text_ko_hint": "응, 하나 있어. 그거 정말 추천해.",
                "correct": false,
                "correctionKo": "직접목적어 대명사 'la'(그것을)를 이미 썼기 때문에 'a ella'까지 다시 쓰면 같은 의미가 중복돼서 어색해요. 대명사만으로 충분해요.",
                "correctEs": "Sí, tengo una. La recomiendo mucho.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "¿Dónde está ese libro? No lo veo en el estante.",
            "text_ko": "그 책이 어디 있어? 책장에서 안 보이네.",
            "options": [
              {
                "text_es": "Lo tengo aquí, en el escritorio.",
                "text_ko_hint": "그거 여기 책상 위에 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Tengo aquí, en el escritorio.",
                "text_ko_hint": "그거 여기 책상 위에 있어.",
                "correct": false,
                "correctionKo": "'그것을 가지고 있다'라고 할 때는 직접목적어 대명사 'lo'를 꼭 넣어야 해요. 'lo' 없이 'Tengo aquí'라고 하면 무엇을 가지고 있는지 빠져서 문장이 어색해져요.",
                "correctEs": "Lo tengo aquí, en el escritorio.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Perfecto, se lo voy a mostrar a la clienta ahora mismo.",
            "text_ko": "완벽해, 지금 바로 손님에게 그걸 보여줄게.",
            "options": [
              {
                "text_es": "Muy bien, espero que le guste.",
                "text_ko_hint": "좋아, 마음에 들었으면 좋겠다.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Muy bien, espero que la guste.",
                "text_ko_hint": "좋아, 마음에 들었으면 좋겠다.",
                "correct": false,
                "correctionKo": "'gustar' 앞에는 간접목적어 대명사(me, te, le, nos, les)를 써요. 여기서는 손님(그녀)에게 마음에 드는 거니까 'le'를 써야 해요. 'la'는 직접목적어라서 이 자리에는 맞지 않아요.",
                "correctEs": "Muy bien, espero que le guste.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "독서 모임",
        "start": "n1",
        "endMessage": "돈 안드레스와 독서 모임 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "El club de lectura se reúne cada mes. ¿Quieres unirte al grupo?",
            "text_ko": "독서 모임은 매달 모여. 그룹에 함께할래?",
            "options": [
              {
                "text_es": "Sí, me interesa mucho. ¿Les prestas libros a los miembros?",
                "text_ko_hint": "응, 정말 관심 있어. 회원들에게 책을 빌려줘?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, me interesa mucho. ¿Los prestas libros a los miembros?",
                "text_ko_hint": "응, 정말 관심 있어. 회원들에게 책을 빌려줘?",
                "correct": false,
                "correctionKo": "'prestar'(빌려주다)처럼 '누구에게' 무언가를 주는 동사는 간접목적어 대명사 'les'(그들에게)를 써요. 'los'는 직접목적어(그들을)라서 여기엔 맞지 않아요.",
                "correctEs": "Sí, me interesa mucho. ¿Les prestas libros a los miembros?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Claro, siempre les doy una copia antes de la reunión.",
            "text_ko": "물론이지, 모임 전에 항상 그들에게 한 권씩 줘.",
            "options": [
              {
                "text_es": "Qué generoso. ¿Me puedes dar una copia a mí también?",
                "text_ko_hint": "정말 너그럽다. 나한테도 한 권 줄 수 있어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué generoso. ¿Te puedo dar una copia a mí también?",
                "text_ko_hint": "정말 너그럽다. 나한테도 한 권 줄 수 있어?",
                "correct": false,
                "correctionKo": "여기서는 '나에게 줄 수 있는지'를 묻는 거니까 간접목적어는 'me'(나에게)가 되어야 해요. 'te'(너에게)를 쓰면 반대로 안드레스에게 준다는 뜻이 되어서 의미가 틀려져요.",
                "correctEs": "Qué generoso. ¿Me puedes dar una copia a mí también?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Por supuesto. Te la doy mañana sin falta.",
            "text_ko": "물론이지. 내일 꼭 그거 줄게.",
            "options": [
              {
                "text_es": "Gracias, te lo agradezco mucho.",
                "text_ko_hint": "고마워, 정말 고맙게 생각해.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, le agradezco mucho.",
                "text_ko_hint": "고마워, 정말 고맙게 생각해.",
                "correct": false,
                "correctionKo": "여기서는 안드레스 본인(너)에게 고마움을 전하는 거니까 'te'(너에게)를 써야 해요. 'le'는 '그/그녀에게'라서 대화 상대가 아닌 제3자를 가리키게 되어 어색해요.",
                "correctEs": "Gracias, te lo agradezco mucho.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "영화로 만들어진 소설",
        "start": "n1",
        "endMessage": "돈 안드레스와 소설의 영화화에 대해 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Hicieron una película de esta novela. Dicen que es la más famosa del director.",
            "text_ko": "이 소설로 영화를 만들었어. 그 감독의 작품 중 가장 유명하다고 하더라.",
            "options": [
              {
                "text_es": "¿En serio? Debe ser mejor que el libro, entonces.",
                "text_ko_hint": "정말? 그럼 책보다 더 나은가 보다.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¿En serio? Debe ser más bueno que el libro, entonces.",
                "text_ko_hint": "정말? 그럼 책보다 더 나은가 보다.",
                "correct": false,
                "correctionKo": "'bueno'(좋은)의 비교급은 불규칙이라서 'más bueno'가 아니라 'mejor'라고 해요. 영어의 good-better처럼 스페인어도 특별한 형태를 써요.",
                "correctEs": "¿En serio? Debe ser mejor que el libro, entonces.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "No sé, para mí el libro siempre es mejor que la película.",
            "text_ko": "글쎄, 나한테는 늘 책이 영화보다 더 나아.",
            "options": [
              {
                "text_es": "Estoy de acuerdo. El libro es más profundo que la película.",
                "text_ko_hint": "동의해. 책이 영화보다 더 깊이 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Estoy de acuerdo. El libro es más profundo que a película.",
                "text_ko_hint": "동의해. 책이 영화보다 더 깊이 있어.",
                "correct": false,
                "correctionKo": "비교할 때는 '~보다'라는 뜻으로 'que'를 써야 해요. 'a'는 방향이나 대상을 나타내는 전치사라서 비교 표현에는 맞지 않아요.",
                "correctEs": "Estoy de acuerdo. El libro es más profundo que la película.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Esta novela es, para mí, la mejor de todo el siglo veinte.",
            "text_ko": "이 소설은 나한테는 20세기 최고의 작품이야.",
            "options": [
              {
                "text_es": "Wow, es una gran recomendación entonces.",
                "text_ko_hint": "와, 그럼 정말 대단한 추천이네.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Wow, es una más grande recomendación entonces.",
                "text_ko_hint": "와, 그럼 정말 대단한 추천이네.",
                "correct": false,
                "correctionKo": "'grande'(큰/대단한)가 명사 앞에 올 때는 'gran'으로 줄여 쓰고, 'más'는 필요 없어요. 'una gran recomendación'처럼 그냥 'gran'만 쓰면 충분해요.",
                "correctEs": "Wow, es una gran recomendación entonces.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 작가의 전기",
        "start": "n1",
        "endMessage": "돈 안드레스와 작가의 삶에 대해 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Estoy leyendo la biografía de mi escritor favorito. ¿Conoces a Isabel Allende?",
            "text_ko": "내가 가장 좋아하는 작가의 전기를 읽고 있어. 이사벨 아옌데를 알아?",
            "options": [
              {
                "text_es": "Sí, la conozco. He leído dos novelas suyas.",
                "text_ko_hint": "응, 알아. 그녀의 소설 두 편을 읽어봤어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, la sé. He leído dos novelas suyas.",
                "text_ko_hint": "응, 알아. 그녀의 소설 두 편을 읽어봤어.",
                "correct": false,
                "correctionKo": "사람을 '안다/알고 있다'라고 할 때는 'conocer'를 써요. 'saber'는 정보나 사실을 안다는 뜻이라서 사람 앞에는 쓰지 않아요.",
                "correctEs": "Sí, la conozco. He leído dos novelas suyas.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "¿Sabes que ella empezó a escribir muy tarde en su vida?",
            "text_ko": "그녀가 인생에서 아주 늦게 글쓰기를 시작했다는 거 알아?",
            "options": [
              {
                "text_es": "No, no lo sabía. Qué interesante.",
                "text_ko_hint": "아니, 그건 몰랐어. 정말 흥미롭다.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "No, no lo conocía. Qué interesante.",
                "text_ko_hint": "아니, 그건 몰랐어. 정말 흥미롭다.",
                "correct": false,
                "correctionKo": "어떤 사실이나 정보를 몰랐다고 할 때는 'saber'를 써요. 'conocer'는 사람이나 장소에 익숙하다는 뜻이라서 이런 사실 정보에는 어울리지 않아요.",
                "correctEs": "No, no lo sabía. Qué interesante.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Deberías leer esta biografía. Vas a conocerla mucho mejor.",
            "text_ko": "이 전기를 꼭 읽어봐. 그녀에 대해 훨씬 더 잘 알게 될 거야.",
            "options": [
              {
                "text_es": "Claro, quiero conocer más su historia.",
                "text_ko_hint": "그럼, 그녀의 이야기를 더 알고 싶어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Claro, quiero saber más su historia.",
                "text_ko_hint": "그럼, 그녀의 이야기를 더 알고 싶어.",
                "correct": false,
                "correctionKo": "어떤 사람의 삶이나 이야기에 '더 친숙해지고 싶다'는 뜻일 때는 'conocer'가 자연스러워요. 'saber'는 구체적인 사실이나 정보를 안다고 할 때 쓰는데, 여기서는 그 사람의 이야기 전체와 친해지고 싶다는 뜻이라 'conocer'가 맞아요.",
                "correctEs": "Claro, quiero conocer más su historia.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "신문 칼럼",
        "start": "n1",
        "endMessage": "돈 안드레스와 신문 칼럼 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Leí una columna esta mañana que hablaba sobre el futuro de los libros.",
            "text_ko": "오늘 아침에 책의 미래에 대해 이야기하는 칼럼을 읽었어.",
            "options": [
              {
                "text_es": "Qué interesante. ¿Es un tema que te preocupa?",
                "text_ko_hint": "흥미롭다. 그게 네가 걱정하는 주제야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué interesante. ¿Es un tema qué te preocupa?",
                "text_ko_hint": "흥미롭다. 그게 네가 걱정하는 주제야?",
                "correct": false,
                "correctionKo": "관계대명사로 '~하는'이라는 뜻으로 문장을 연결할 때는 강세 없는 'que'를 써요. 강세가 있는 'qué'는 의문문에서 '무엇'이라는 뜻으로만 써요.",
                "correctEs": "Qué interesante. ¿Es un tema que te preocupa?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Un poco. Pero el periodista que escribió la columna es muy optimista.",
            "text_ko": "조금은. 하지만 그 칼럼을 쓴 기자는 아주 낙관적이더라.",
            "options": [
              {
                "text_es": "Qué bueno. Es un punto de vista que me gusta.",
                "text_ko_hint": "잘됐다. 내가 좋아하는 관점이네.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bueno. Es un punto de vista quien me gusta.",
                "text_ko_hint": "잘됐다. 내가 좋아하는 관점이네.",
                "correct": false,
                "correctionKo": "사물(관점)을 가리킬 때는 관계대명사 'que'를 써요. 'quien'은 사람을 가리킬 때만 쓰는 관계대명사라서 여기엔 맞지 않아요.",
                "correctEs": "Qué bueno. Es un punto de vista que me gusta.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Te voy a guardar el periódico. El periodista, quien es amigo mío, escribe muy bien.",
            "text_ko": "그 신문 남겨둘게. 그 기자는, 내 친구인데, 글을 정말 잘 써.",
            "options": [
              {
                "text_es": "Gracias, me encantaría leer a alguien que escribe tan bien.",
                "text_ko_hint": "고마워, 그렇게 글을 잘 쓰는 사람의 글을 읽고 싶어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Gracias, me encantaría leer a alguien quien escribe tan bien.",
                "text_ko_hint": "고마워, 그렇게 글을 잘 쓰는 사람의 글을 읽고 싶어.",
                "correct": false,
                "correctionKo": "일상 대화에서는 사람을 가리킬 때도 'que'를 훨씬 더 많이 써요. 'quien'은 콤마로 구분된 삽입절이나 좀 더 격식 있는 문장에서 주로 쓰여서, 이 문장에는 'que'가 더 자연스러워요.",
                "correctEs": "Gracias, me encantaría leer a alguien que escribe tan bien.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "쓰고 있는 단편 소설",
        "start": "n1",
        "endMessage": "돈 안드레스와 그가 쓰고 있는 단편 소설 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Acabo de terminar el primer capítulo de mi cuento. Estoy muy contento.",
            "text_ko": "방금 내 단편 소설 첫 장을 끝냈어. 정말 기분이 좋아.",
            "options": [
              {
                "text_es": "¡Felicidades! ¿De qué trata el cuento?",
                "text_ko_hint": "축하해! 그 소설은 무엇에 관한 거야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¡Felicidades! ¿De qué trata de el cuento?",
                "text_ko_hint": "축하해! 그 소설은 무엇에 관한 거야?",
                "correct": false,
                "correctionKo": "'tratar de'(~에 관한 것이다)는 이미 'de'를 포함하고 있어서 'trata de qué'처럼 물을 때는 'de'를 한 번만 써요. 'trata de el cuento'처럼 두 번 쓰면 어색해요. 여기서는 의문사 다음 바로 동사가 오면 돼요.",
                "correctEs": "¡Felicidades! ¿De qué trata el cuento?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Trata de un viejo librero que encuentra una carta misteriosa.",
            "text_ko": "신비한 편지를 발견한 늙은 책방 주인에 관한 이야기야.",
            "options": [
              {
                "text_es": "Qué intrigante. Acabo de leer algo parecido la semana pasada.",
                "text_ko_hint": "정말 흥미진진하다. 지난주에 비슷한 걸 막 읽었어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué intrigante. Acabo leer algo parecido la semana pasada.",
                "text_ko_hint": "정말 흥미진진하다. 지난주에 비슷한 걸 막 읽었어.",
                "correct": false,
                "correctionKo": "'방금 ~했다'라는 표현은 'acabar de + 동사원형'이에요. 'de'를 빼면 문법적으로 틀린 문장이 되니 꼭 넣어야 해요.",
                "correctEs": "Qué intrigante. Acabo de leer algo parecido la semana pasada.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Acabo de decidir el título. Se va a llamar 'La carta del librero'.",
            "text_ko": "방금 제목도 정했어. '책방 주인의 편지'라고 부를 거야.",
            "options": [
              {
                "text_es": "Me encanta el título. Acabas de crear algo hermoso.",
                "text_ko_hint": "제목이 정말 마음에 들어. 방금 아름다운 걸 만들었네.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Me encanta el título. Acabas crear algo hermoso.",
                "text_ko_hint": "제목이 정말 마음에 들어. 방금 아름다운 걸 만들었네.",
                "correct": false,
                "correctionKo": "'막 ~을 했다'는 'acabar de + 동사원형' 구조를 항상 지켜야 해요. 'acabas crear'처럼 'de'를 빠뜨리면 틀린 문장이 돼요.",
                "correctEs": "Me encanta el título. Acabas de crear algo hermoso.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "어린 시절의 독서 추억",
        "start": "n1",
        "endMessage": "돈 안드레스와 어린 시절의 독서 추억을 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "De niño, leía debajo de un árbol grande cerca de mi casa.",
            "text_ko": "어렸을 때, 나는 집 근처 큰 나무 아래에서 책을 읽곤 했어.",
            "options": [
              {
                "text_es": "Qué lindo recuerdo. Yo leía en la cama con una lámpara pequeña.",
                "text_ko_hint": "정말 예쁜 추억이다. 나는 작은 램프를 켜고 침대에서 책을 읽곤 했어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué lindo recuerdo. Yo leí en la cama con una lámpara pequeña.",
                "text_ko_hint": "정말 예쁜 추억이다. 나는 작은 램프를 켜고 침대에서 책을 읽곤 했어.",
                "correct": false,
                "correctionKo": "어릴 적 반복되던 습관을 말할 때는 불완료과거 'leía'를 써요. 'leí'는 한 번의 완료된 행동을 나타내서 '~하곤 했다'는 뜻에는 어울리지 않아요.",
                "correctEs": "Qué lindo recuerdo. Yo leía en la cama con una lámpara pequeña.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "¿Tenías un libro favorito de pequeña?",
            "text_ko": "어릴 때 좋아하던 책이 있었어?",
            "options": [
              {
                "text_es": "Sí, tenía un libro de cuentos que leía todas las semanas.",
                "text_ko_hint": "응, 매주 읽던 동화책이 하나 있었어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, tuve un libro de cuentos que leía todas las semanas.",
                "text_ko_hint": "응, 매주 읽던 동화책이 하나 있었어.",
                "correct": false,
                "correctionKo": "예전에 오랫동안 '가지고 있었던' 상태를 말할 때는 불완료과거 'tenía'가 자연스러워요. 'tuve'는 짧고 완료된 순간을 가리켜서 '가지고 있었다'는 지속적인 상태에는 어울리지 않아요.",
                "correctEs": "Sí, tenía un libro de cuentos que leía todas las semanas.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Esos recuerdos son un tesoro. La lectura marcó mi vida para siempre.",
            "text_ko": "그런 추억은 보물이야. 독서가 내 인생을 영원히 바꿔놨어.",
            "options": [
              {
                "text_es": "Totalmente de acuerdo. Leer de niño cambia cómo ves el mundo.",
                "text_ko_hint": "완전히 동감이야. 어릴 때 책을 읽는 건 세상을 보는 방식을 바꿔놔.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Totalmente de acuerdo. Leía de niño cambia cómo ves el mundo.",
                "text_ko_hint": "완전히 동감이야. 어릴 때 책을 읽는 건 세상을 보는 방식을 바꿔놔.",
                "correct": false,
                "correctionKo": "일반적인 진리나 지금도 유효한 생각을 말할 때는 동사원형 'leer'를 명사처럼 문장의 주어로 써요. 'leía'는 과거 시제라서 이렇게 일반적인 이야기를 할 때는 어울리지 않아요.",
                "correctEs": "Totalmente de acuerdo. Leer de niño cambia cómo ves el mundo.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "도서관 방문",
        "start": "n1",
        "endMessage": "돈 안드레스와 도서관 방문 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Ayer caminé por el centro para ir a la biblioteca.",
            "text_ko": "어제 도서관에 가려고 시내를 걸어갔어.",
            "options": [
              {
                "text_es": "¿Fuiste por la calle principal o por el parque?",
                "text_ko_hint": "큰길로 갔어, 아니면 공원 쪽으로 갔어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "¿Fuiste para la calle principal o para el parque?",
                "text_ko_hint": "큰길로 갔어, 아니면 공원 쪽으로 갔어?",
                "correct": false,
                "correctionKo": "어떤 경로나 장소를 '통해서/지나서' 이동한다고 할 때는 'por'를 써요. 'para'는 목적지나 목적을 말할 때 쓰기 때문에 여기엔 맞지 않아요.",
                "correctEs": "¿Fuiste por la calle principal o por el parque?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Fui por el parque. Fui a la biblioteca para buscar un libro raro.",
            "text_ko": "공원 쪽으로 갔어. 희귀한 책을 찾으려고 도서관에 갔어.",
            "options": [
              {
                "text_es": "¿Y lo encontraste? Debiste caminar mucho para llegar.",
                "text_ko_hint": "그래서 찾았어? 도착하려고 많이 걸었겠다.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "¿Y lo encontraste? Debiste caminar mucho por llegar.",
                "text_ko_hint": "그래서 찾았어? 도착하려고 많이 걸었겠다.",
                "correct": false,
                "correctionKo": "'~하기 위해서'라는 목적을 말할 때는 'para + 동사원형'을 써요. 'por'는 이유나 경로를 말할 때 쓰기 때문에 '도착하기 위해서'라는 목적에는 'para'가 맞아요.",
                "correctEs": "¿Y lo encontraste? Debiste caminar mucho para llegar.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Sí, lo encontré. Pagué muy poco por él, solo por suerte.",
            "text_ko": "응, 찾았어. 운이 좋아서 아주 싸게 샀어.",
            "options": [
              {
                "text_es": "Qué suerte. Ese libro es perfecto para tu colección.",
                "text_ko_hint": "운이 좋았네. 그 책은 네 소장품으로 딱이야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Qué suerte. Ese libro es perfecto por tu colección.",
                "text_ko_hint": "운이 좋았네. 그 책은 네 소장품으로 딱이야.",
                "correct": false,
                "correctionKo": "'~을 위해, ~에게 알맞은'이라는 목적이나 용도를 말할 때는 'para'를 써요. 'por'는 원인이나 대가를 나타낼 때 쓰기 때문에 여기엔 어울리지 않아요.",
                "correctEs": "Qué suerte. Ese libro es perfecto para tu colección.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "도서 박람회",
        "start": "n1",
        "endMessage": "돈 안드레스와 도서 박람회 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "El mes que viene hay una feria del libro. Tengo un puesto pequeño ahí.",
            "text_ko": "다음 달에 도서 박람회가 있어. 거기 작은 부스가 하나 있어.",
            "options": [
              {
                "text_es": "Qué emocionante. ¿Cuánto cuesta la entrada?",
                "text_ko_hint": "정말 신난다. 입장료가 얼마야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué emocionante. ¿Cuánto cuestan la entrada?",
                "text_ko_hint": "정말 신난다. 입장료가 얼마야?",
                "correct": false,
                "correctionKo": "'la entrada'(입장권)는 단수 명사라서 동사도 단수형인 'cuesta'를 써야 해요. 'cuestan'은 복수 명사에 쓰는 형태예요.",
                "correctEs": "Qué emocionante. ¿Cuánto cuesta la entrada?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "La entrada cuesta cincuenta pesos, pero los libros son muy baratos ahí.",
            "text_ko": "입장료는 50페소인데, 거기 책들은 아주 저렴해.",
            "options": [
              {
                "text_es": "Qué bien. ¿Los libros de tapa dura cuestan más?",
                "text_ko_hint": "잘됐다. 양장본 책들은 더 비싸?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bien. ¿Los libros de tapa dura cuesta más?",
                "text_ko_hint": "잘됐다. 양장본 책들은 더 비싸?",
                "correct": false,
                "correctionKo": "'los libros'(책들)는 복수 명사라서 동사도 복수형인 'cuestan'을 써야 해요. 'cuesta'는 단수 명사에 쓰는 형태예요.",
                "correctEs": "Qué bien. ¿Los libros de tapa dura cuestan más?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Un poco más, unos cien pesos cada uno. Pero valen la pena.",
            "text_ko": "조금 더 비싸, 한 권에 100페소 정도. 하지만 그만한 가치가 있어.",
            "options": [
              {
                "text_es": "Cien pesos no es mucho por un buen libro.",
                "text_ko_hint": "좋은 책 한 권에 100페소는 그렇게 비싸지 않네.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Cien pesos no son mucho por un buen libro.",
                "text_ko_hint": "좋은 책 한 권에 100페소는 그렇게 비싸지 않네.",
                "correct": false,
                "correctionKo": "돈의 액수를 하나의 총액으로 말할 때는 단수 동사 'es'를 써요. 개별 동전이 아니라 '100페소라는 금액'을 하나로 보기 때문이에요.",
                "correctEs": "Cien pesos no es mucho por un buen libro.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "번역된 책",
        "start": "n1",
        "endMessage": "돈 안드레스와 번역된 책 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Este libro se tradujo del japonés. La traducción es excelente.",
            "text_ko": "이 책은 일본어에서 번역됐어. 번역이 정말 훌륭해.",
            "options": [
              {
                "text_es": "Qué interesante. ¿Se venden muchos libros traducidos aquí?",
                "text_ko_hint": "흥미롭다. 여기서 번역서가 많이 팔려?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué interesante. ¿Se vende muchos libros traducidos aquí?",
                "text_ko_hint": "흥미롭다. 여기서 번역서가 많이 팔려?",
                "correct": false,
                "correctionKo": "'se'를 이용한 수동 표현에서는 뒤에 오는 명사의 수에 동사를 맞춰요. 'muchos libros'(많은 책들)는 복수라서 'se venden'처럼 복수 동사를 써야 해요.",
                "correctEs": "Qué interesante. ¿Se venden muchos libros traducidos aquí?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Sí, cada año se publican más novelas traducidas al español.",
            "text_ko": "응, 매년 스페인어로 번역된 소설이 더 많이 출간돼.",
            "options": [
              {
                "text_es": "Qué bueno. Así se conocen autores de todo el mundo.",
                "text_ko_hint": "좋다. 그렇게 전 세계 작가들이 알려지는구나.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bueno. Así se conoce autores de todo el mundo.",
                "text_ko_hint": "좋다. 그렇게 전 세계 작가들이 알려지는구나.",
                "correct": false,
                "correctionKo": "'se'를 쓴 수동/무인칭 표현에서는 뒤에 오는 명사 'autores'(작가들, 복수)에 동사를 맞춰야 해요. 그래서 'se conocen'처럼 복수형이 맞아요.",
                "correctEs": "Qué bueno. Así se conocen autores de todo el mundo.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Por eso me encanta este trabajo. Aquí se descubren mundos nuevos cada día.",
            "text_ko": "그래서 이 일이 정말 좋아. 여기선 매일 새로운 세계가 발견되거든.",
            "options": [
              {
                "text_es": "Es hermoso. Aquí se aprenden tantas cosas sobre otras culturas.",
                "text_ko_hint": "정말 아름답다. 여기선 다른 문화에 대해 정말 많은 걸 배우게 되네.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Es hermoso. Aquí se aprende tantas cosas sobre otras culturas.",
                "text_ko_hint": "정말 아름답다. 여기선 다른 문화에 대해 정말 많은 걸 배우게 되네.",
                "correct": false,
                "correctionKo": "'tantas cosas'(그렇게 많은 것들)가 복수 명사라서 무인칭 'se' 표현도 복수 동사 'se aprenden'을 써야 자연스러워요.",
                "correctEs": "Es hermoso. Aquí se aprenden tantas cosas sobre otras culturas.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "추리 소설",
        "start": "n1",
        "endMessage": "돈 안드레스와 추리 소설 이야기를 나누며 즐거운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Estoy leyendo una novela de misterio buenísima. Me encantan los libros con secretos oscuros.",
            "text_ko": "정말 훌륭한 추리 소설을 읽고 있어. 어두운 비밀이 담긴 책들이 정말 좋아.",
            "options": [
              {
                "text_es": "A mí también me encantan las novelas de misterio.",
                "text_ko_hint": "나도 추리 소설이 정말 좋아.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "A mí también me encanta las novelas de misterio.",
                "text_ko_hint": "나도 추리 소설이 정말 좋아.",
                "correct": false,
                "correctionKo": "'encantar' 같은 동사는 좋아하는 대상(뒤에 오는 명사)의 수에 동사를 맞춰요. 'las novelas'가 복수이므로 'encantan'을 써야 해요.",
                "correctEs": "A mí también me encantan las novelas de misterio.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "El detective de esta historia es muy listo. Le fascinan los casos complicados.",
            "text_ko": "이 이야기 속 탐정은 아주 똑똑해. 그는 복잡한 사건들에 매료돼.",
            "options": [
              {
                "text_es": "Qué interesante. A mí me interesan mucho los detectives inteligentes.",
                "text_ko_hint": "흥미롭다. 나는 똑똑한 탐정들에게 정말 관심이 많아.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué interesante. A mí me interesa mucho los detectives inteligentes.",
                "text_ko_hint": "흥미롭다. 나는 똑똑한 탐정들에게 정말 관심이 많아.",
                "correct": false,
                "correctionKo": "'interesar'도 뒤에 오는 명사의 수에 동사를 맞춰야 해요. 'los detectives'가 복수라서 'interesan'이 맞아요.",
                "correctEs": "Qué interesante. A mí me interesan mucho los detectives inteligentes.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Bueno, tengo que volver a leer. El final me tiene muy intrigado.",
            "text_ko": "자, 나는 다시 읽어야겠어. 결말이 나를 정말 궁금하게 만들어.",
            "options": [
              {
                "text_es": "Ojalá me prestes esa novela. Me encanta un buen misterio.",
                "text_ko_hint": "그 소설 좀 빌려주면 좋겠다. 좋은 추리물이 정말 좋아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Ojalá me prestes esa novela. Me encantan un buen misterio.",
                "text_ko_hint": "그 소설 좀 빌려주면 좋겠다. 좋은 추리물이 정말 좋아.",
                "correct": false,
                "correctionKo": "여기서는 'un buen misterio'가 단수이므로 동사도 단수형 'encanta'를 써야 해요. 복수형 'encantan'은 틀려요.",
                "correctEs": "Ojalá me prestes esa novela. Me encanta un buen misterio.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "역사책",
        "start": "n1",
        "endMessage": "돈 안드레스와 역사책 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Estoy leyendo un libro de historia sobre la independencia de México. Hay que entender el pasado para vivir el presente.",
            "text_ko": "멕시코 독립에 관한 역사책을 읽고 있어. 현재를 살려면 과거를 이해해야 해.",
            "options": [
              {
                "text_es": "Tienes razón. Yo también tengo que aprender más historia.",
                "text_ko_hint": "네 말이 맞아. 나도 역사를 더 배워야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Tienes razón. Yo también hay que aprender más historia.",
                "text_ko_hint": "네 말이 맞아. 나도 역사를 더 배워야 해.",
                "correct": false,
                "correctionKo": "'hay que'는 특정 주어 없이 일반적인 의무를 말할 때 써요. 나처럼 특정한 사람의 의무를 말할 때는 'tener que'를 써야 해서 'tengo que'가 맞아요.",
                "correctEs": "Tienes razón. Yo también tengo que aprender más historia.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Para entender bien este libro, hay que conocer las fechas importantes.",
            "text_ko": "이 책을 잘 이해하려면 중요한 날짜들을 알아야 해.",
            "options": [
              {
                "text_es": "Sí, hay que memorizar muchas fechas para entender la historia.",
                "text_ko_hint": "맞아, 역사를 이해하려면 많은 날짜를 외워야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, tiene que memorizar muchas fechas para entender la historia.",
                "text_ko_hint": "맞아, 역사를 이해하려면 많은 날짜를 외워야 해.",
                "correct": false,
                "correctionKo": "누구에게나 해당하는 일반적인 의무는 특정 인칭이 없는 'hay que'로 말해요. 'tiene que'는 특정한 사람(그/그녀/당신)의 의무를 가리켜서 여기엔 맞지 않아요.",
                "correctEs": "Sí, hay que memorizar muchas fechas para entender la historia.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Cuando termines este libro, tienes que contarme qué aprendiste.",
            "text_ko": "이 책 다 읽으면, 뭘 배웠는지 나한테 얘기해줘야 해.",
            "options": [
              {
                "text_es": "Claro, tengo que terminarlo primero, pero te cuento todo.",
                "text_ko_hint": "그래, 먼저 다 읽어야 하지만 다 얘기해줄게.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Claro, hay que terminarlo primero, pero te cuento todo.",
                "text_ko_hint": "그래, 먼저 다 읽어야 하지만 다 얘기해줄게.",
                "correct": false,
                "correctionKo": "이건 화자 자신이 해야 하는 구체적인 일이라서 'tengo que'를 써야 해요. 'hay que'는 특정한 사람 없이 일반적인 의무에만 써요.",
                "correctEs": "Claro, tengo que terminarlo primero, pero te cuento todo.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "요리책",
        "start": "n1",
        "endMessage": "돈 안드레스와 요리책 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Este libro de cocina es muy fácil de seguir. Escucha, aquí dice: 'Corta las cebollas finamente.'",
            "text_ko": "이 요리책은 따라 하기 아주 쉬워. 들어봐, 여기 '양파를 얇게 썰어라'라고 써 있어.",
            "options": [
              {
                "text_es": "Qué práctico. Lee otra receta, por favor.",
                "text_ko_hint": "실용적이다. 다른 레시피 읽어줘, 부탁해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué práctico. Leer otra receta, por favor.",
                "text_ko_hint": "실용적이다. 다른 레시피 읽어줘, 부탁해.",
                "correct": false,
                "correctionKo": "누군가에게 직접 부탁하거나 명령할 때는 명령형(tú 형태)을 써야 해요. 규칙 동사 'leer'의 tú 명령형은 'lee'예요. 동사원형 'leer'는 명령문으로 쓸 수 없어요.",
                "correctEs": "Qué práctico. Lee otra receta, por favor.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Ahora, agrega un poco de sal y pimienta.",
            "text_ko": "이제 소금과 후추를 조금 넣어.",
            "options": [
              {
                "text_es": "Bien, dime el siguiente paso, por favor.",
                "text_ko_hint": "좋아, 다음 단계 말해줘, 부탁해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Bien, dice el siguiente paso, por favor.",
                "text_ko_hint": "좋아, 다음 단계 말해줘, 부탁해.",
                "correct": false,
                "correctionKo": "'decir'의 tú 명령형은 불규칙하게 'di'로 변해요. 'dice'는 그/그녀가 주어일 때 쓰는 현재형이라서 명령문에는 쓸 수 없어요.",
                "correctEs": "Bien, dime el siguiente paso, por favor.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Perfecto. Prueba la sopa antes de servir, siempre es el secreto.",
            "text_ko": "완벽해. 항상 그게 비결이니까 서빙하기 전에 수프를 맛봐.",
            "options": [
              {
                "text_es": "Buen consejo, gracias. Pon esta receta en tu próximo libro.",
                "text_ko_hint": "좋은 조언이야, 고마워. 이 레시피를 다음 책에 넣어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Buen consejo, gracias. Poner esta receta en tu próximo libro.",
                "text_ko_hint": "좋은 조언이야, 고마워. 이 레시피를 다음 책에 넣어.",
                "correct": false,
                "correctionKo": "'poner'의 tú 명령형은 불규칙하게 'pon'으로 변해요. 동사원형 'poner'는 명령으로 쓰이지 않아요.",
                "correctEs": "Buen consejo, gracias. Pon esta receta en tu próximo libro.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "철학책",
        "start": "n1",
        "endMessage": "돈 안드레스와 철학책 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Estoy leyendo un libro de filosofía muy profundo. Sócrates es tan interesante como Platón, ¿no crees?",
            "text_ko": "아주 심오한 철학책을 읽고 있어. 소크라테스는 플라톤만큼 흥미롭지, 그렇지 않아?",
            "options": [
              {
                "text_es": "Sí, para mí Sócrates es tan sabio como Platón.",
                "text_ko_hint": "응, 나한테는 소크라테스가 플라톤만큼 지혜로워.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, para mí Sócrates es tan sabio que Platón.",
                "text_ko_hint": "응, 나한테는 소크라테스가 플라톤만큼 지혜로워.",
                "correct": false,
                "correctionKo": "'~만큼 ~하다'라는 동등 비교는 'tan + 형용사 + como'로 표현해요. 'tan...que'는 '너무 ~해서 ~하다'라는 결과를 나타내는 다른 구조라서 여기엔 맞지 않아요.",
                "correctEs": "Sí, para mí Sócrates es tan sabio como Platón.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "A mí me parece que este libro es tan difícil como aquel de matemáticas.",
            "text_ko": "나한테는 이 책이 저 수학책만큼 어려운 것 같아.",
            "options": [
              {
                "text_es": "Uy, entonces no es tan fácil como pensaba.",
                "text_ko_hint": "어, 그럼 내가 생각했던 것만큼 쉽지 않네.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Uy, entonces no es tan fácil que pensaba.",
                "text_ko_hint": "어, 그럼 내가 생각했던 것만큼 쉽지 않네.",
                "correct": false,
                "correctionKo": "동등 비교 표현은 항상 'tan...como'예요. 'que'를 쓰면 틀린 문장이 되니 조심해야 해요.",
                "correctEs": "Uy, entonces no es tan fácil como pensaba.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Bueno, la filosofía nos enseña a pensar. Eso vale tanto como cualquier otra materia.",
            "text_ko": "철학은 우리에게 생각하는 법을 가르쳐줘. 그건 다른 어떤 과목만큼이나 가치 있어.",
            "options": [
              {
                "text_es": "Totalmente de acuerdo. Pensar es tan importante como leer.",
                "text_ko_hint": "완전히 동의해. 생각하는 건 읽는 것만큼 중요해.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Totalmente de acuerdo. Pensar es tan importante que leer.",
                "text_ko_hint": "완전히 동의해. 생각하는 건 읽는 것만큼 중요해.",
                "correct": false,
                "correctionKo": "동등 비교에는 'tan...como'를 써야 해요. 'leer'와 비교하는 문장이니 'como leer'가 맞고 'que leer'는 틀려요.",
                "correctEs": "Totalmente de acuerdo. Pensar es tan importante como leer.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "가게 고양이",
        "start": "n1",
        "endMessage": "돈 안드레스와 서점 고양이 이야기를 나누며 훈훈한 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Mi gato se llama Quijote. Todas las mañanas se despierta encima de los libros.",
            "text_ko": "내 고양이 이름은 키호테야. 매일 아침 책들 위에서 잠에서 깨.",
            "options": [
              {
                "text_es": "Qué lindo nombre. Mi perro también se despierta muy temprano.",
                "text_ko_hint": "정말 예쁜 이름이다. 우리 개도 아주 일찍 잠에서 깨.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué lindo nombre. Mi perro también despierta muy temprano.",
                "text_ko_hint": "정말 예쁜 이름이다. 우리 개도 아주 일찍 잠에서 깨.",
                "correct": false,
                "correctionKo": "'잠에서 깨다'라는 뜻일 때는 재귀동사 'despertarse'를 써서 'se despierta'라고 해야 해요. 'se' 없이 'despierta'만 쓰면 '누군가를 깨운다'는 뜻이 되어 의미가 달라져요.",
                "correctEs": "Qué lindo nombre. Mi perro también se despierta muy temprano.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Después, Quijote se sienta en la ventana y mira a la gente pasar.",
            "text_ko": "그다음에 키호테는 창가에 앉아서 지나가는 사람들을 봐.",
            "options": [
              {
                "text_es": "Qué tierno. Mi gata también se sienta a mirar por la ventana.",
                "text_ko_hint": "정말 귀엽다. 우리 고양이도 창밖을 보려고 앉아.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué tierno. Mi gata también sienta a mirar por la ventana.",
                "text_ko_hint": "정말 귀엽다. 우리 고양이도 창밖을 보려고 앉아.",
                "correct": false,
                "correctionKo": "'앉다'라는 뜻일 때는 재귀동사 'sentarse'를 써야 해서 'se sienta'가 맞아요. 'se'를 빼면 '누군가를 앉힌다'는 다른 뜻이 돼요.",
                "correctEs": "Qué tierno. Mi gata también se sienta a mirar por la ventana.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Por la noche, Quijote se duerme entre las novelas viejas. Es su lugar favorito.",
            "text_ko": "밤이 되면 키호테는 오래된 소설들 사이에서 잠들어. 거기가 걔가 제일 좋아하는 자리야.",
            "options": [
              {
                "text_es": "Qué bonita vida tiene. Yo también me duermo mejor rodeado de libros.",
                "text_ko_hint": "정말 좋은 삶을 살고 있네. 나도 책에 둘러싸이면 더 잘 잠들어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Qué bonita vida tiene. Yo también duermo mejor rodeado de libros.",
                "text_ko_hint": "정말 좋은 삶을 살고 있네. 나도 책에 둘러싸이면 더 잘 잠들어.",
                "correct": false,
                "correctionKo": "'잠들다'라는 뜻은 재귀동사 'dormirse'를 써서 'me duermo'라고 해요. 'dormir'만 쓰면 '잠을 잔다'는 조금 다른 뜻이 돼서, 여기서는 'me duermo'가 더 자연스러워요.",
                "correctEs": "Qué bonita vida tiene. Yo también me duermo mejor rodeado de libros.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "책장 정리",
        "start": "n1",
        "endMessage": "돈 안드레스와 함께 책장을 정리하며 즐거운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Estoy ordenando los libros por autor. ¿Me puedes ayudar a organizarlos?",
            "text_ko": "작가별로 책을 정리하고 있어. 정리하는 거 도와줄 수 있어?",
            "options": [
              {
                "text_es": "Claro, te ayudo a organizarlos ahora mismo.",
                "text_ko_hint": "그럼, 지금 바로 정리하는 거 도와줄게.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Claro, te ayudo a los organizar ahora mismo.",
                "text_ko_hint": "그럼, 지금 바로 정리하는 거 도와줄게.",
                "correct": false,
                "correctionKo": "목적어 대명사는 동사원형(organizar) 뒤에 붙여서 한 단어로 써요('organizarlos'). 'los organizar'처럼 대명사를 동사원형 앞에 따로 떼어놓으면 틀린 문장이 돼요.",
                "correctEs": "Claro, te ayudo a organizarlos ahora mismo.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Estos libros de poesía, los estoy poniendo aquí, en el estante de arriba.",
            "text_ko": "이 시집들은, 위쪽 책장에 놓고 있어.",
            "options": [
              {
                "text_es": "Buena idea. Yo los estoy separando por tamaño también.",
                "text_ko_hint": "좋은 생각이다. 나도 크기별로 나누고 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Buena idea. Yo estoy los separando por tamaño también.",
                "text_ko_hint": "좋은 생각이다. 나도 크기별로 나누고 있어.",
                "correct": false,
                "correctionKo": "진행형(estoy + -ando/-iendo)에서 목적어 대명사는 'estoy' 앞에 두거나('los estoy separando'), 현재분사 끝에 붙여요('separándolos'). 'estoy los separando'처럼 중간에 넣으면 틀려요.",
                "correctEs": "Buena idea. Yo los estoy separando por tamaño también.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Gracias por tu ayuda. Cuando termine, voy a invitarte a tomar un café.",
            "text_ko": "도와줘서 고마워. 끝나면 커피 마시자고 초대할게.",
            "options": [
              {
                "text_es": "Con gusto. Podemos terminarlo juntos en una hora.",
                "text_ko_hint": "좋아. 우리 한 시간 안에 같이 끝낼 수 있어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Con gusto. Podemos lo terminar juntos en una hora.",
                "text_ko_hint": "좋아. 우리 한 시간 안에 같이 끝낼 수 있어.",
                "correct": false,
                "correctionKo": "동사원형과 함께 쓸 때 목적어 대명사는 동사원형 끝에 붙여야 해요('terminarlo'). 'lo terminar'처럼 따로 쓰면 안 돼요.",
                "correctEs": "Con gusto. Podemos terminarlo juntos en una hora.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "손님과 가격 흥정",
        "start": "n1",
        "endMessage": "돈 안드레스와 손님 가격 흥정 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Una clienta quiere pagar menos por este libro usado. Dice que debe costar menos porque tiene manchas.",
            "text_ko": "한 손님이 이 중고책을 더 싸게 사고 싶어해. 얼룩이 있어서 더 싸야 한다고 하네.",
            "options": [
              {
                "text_es": "Tiene razón, ese libro debe costar un poco menos por las manchas.",
                "text_ko_hint": "맞는 말이야, 그 책은 얼룩 때문에 좀 더 싸야 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Tiene razón, ese libro debe de costar un poco menos por las manchas.",
                "text_ko_hint": "맞는 말이야, 그 책은 얼룩 때문에 좀 더 싸야 해.",
                "correct": false,
                "correctionKo": "'~해야 한다'는 의무나 권고를 말할 때는 'deber + 동사원형'을 쓰고 'de'를 넣지 않아요. 'deber de'는 '아마 ~일 것이다'라는 추측을 나타낼 때 써서 여기 의미와는 달라요.",
                "correctEs": "Tiene razón, ese libro debe costar un poco menos por las manchas.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Bueno, no sé el precio exacto de este libro tan viejo. Debe de tener más de cincuenta años.",
            "text_ko": "음, 이렇게 오래된 책의 정확한 가격은 모르겠어. 아마 50년은 넘었을 거야.",
            "options": [
              {
                "text_es": "Sí, debe de ser una edición muy antigua.",
                "text_ko_hint": "응, 아마 아주 오래된 판본일 거야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Sí, debe ser una edición muy antigua.",
                "text_ko_hint": "응, 아마 아주 오래된 판본일 거야.",
                "correct": false,
                "correctionKo": "'아마 ~일 것이다'라는 추측을 말할 때는 'deber de + 동사원형'을 써요. 'de'를 빼면 '~해야 한다'는 의무의 뜻이 되어서 추측하는 이 상황에는 어울리지 않아요.",
                "correctEs": "Sí, debe de ser una edición muy antigua.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Al final, le voy a dar un buen descuento a la clienta. Debemos ser justos con nuestros clientes.",
            "text_ko": "결국 손님에게 좋은 할인을 줄게. 우리는 손님들에게 공정해야 해.",
            "options": [
              {
                "text_es": "Me parece muy bien. Un buen librero debe cuidar a sus clientes.",
                "text_ko_hint": "아주 좋은 생각이야. 좋은 서점 주인은 손님들을 잘 챙겨야 해.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Me parece muy bien. Un buen librero debe de cuidar a sus clientes.",
                "text_ko_hint": "아주 좋은 생각이야. 좋은 서점 주인은 손님들을 잘 챙겨야 해.",
                "correct": false,
                "correctionKo": "여기서는 '~해야 한다'는 권고이니 'deber'만 쓰고 'de'는 넣지 않아요. 'deber de'는 추측을 나타낼 때만 써요.",
                "correctEs": "Me parece muy bien. Un buen librero debe cuidar a sus clientes.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "비 오는 오후의 독서",
        "start": "n1",
        "endMessage": "돈 안드레스와 비 오는 오후의 독서 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Afuera está lloviendo mucho. ¿Ya empezaste tu nueva novela?",
            "text_ko": "밖에 비가 많이 와. 벌써 새 소설 시작했어?",
            "options": [
              {
                "text_es": "Sí, ya empecé. Es perfecta para una tarde de lluvia.",
                "text_ko_hint": "응, 벌써 시작했어. 비 오는 오후에 딱이야.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Sí, todavía empecé. Es perfecta para una tarde de lluvia.",
                "text_ko_hint": "응, 벌써 시작했어. 비 오는 오후에 딱이야.",
                "correct": false,
                "correctionKo": "'이미/벌써' 어떤 일을 끝냈다고 할 때는 'ya'를 써요. 'todavía'는 보통 부정문과 함께 '아직 ~않다'는 뜻으로 쓰여서 여기엔 맞지 않아요.",
                "correctEs": "Sí, ya empecé. Es perfecta para una tarde de lluvia.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Yo todavía no termino el libro que empecé la semana pasada.",
            "text_ko": "나는 지난주에 시작한 책을 아직 다 못 끝냈어.",
            "options": [
              {
                "text_es": "No te preocupes, yo todavía no termino los míos tampoco.",
                "text_ko_hint": "걱정 마, 나도 아직 내 책들 못 끝냈어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "No te preocupes, yo ya no termino los míos tampoco.",
                "text_ko_hint": "걱정 마, 나도 아직 내 책들 못 끝냈어.",
                "correct": false,
                "correctionKo": "'아직 ~하지 않았다'는 'todavía no'로 표현해요. 'ya no'는 '더 이상 ~하지 않는다'라는 다른 뜻이라서, '아직 못 끝냈다'는 이 문맥에는 맞지 않아요.",
                "correctEs": "No te preocupes, yo todavía no termino los míos tampoco.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Bueno, con esta lluvia, ya no quiero salir de la librería.",
            "text_ko": "음, 이 비 때문에 이제 서점에서 나가고 싶지 않아.",
            "options": [
              {
                "text_es": "Yo tampoco. Ya no importa el clima cuando tienes un buen libro.",
                "text_ko_hint": "나도 그래. 좋은 책이 있으면 날씨는 더 이상 중요하지 않아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Yo tampoco. Todavía no importa el clima cuando tienes un buen libro.",
                "text_ko_hint": "나도 그래. 좋은 책이 있으면 날씨는 더 이상 중요하지 않아.",
                "correct": false,
                "correctionKo": "'더 이상 ~하지 않다'는 'ya no'로 표현해요. 'todavía no'는 '아직 ~하지 않다'는 뜻이라 여기서 말하려는 '더 이상 중요하지 않다'와는 뜻이 달라요.",
                "correctEs": "Yo tampoco. Ya no importa el clima cuando tienes un buen libro.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "옛 친구의 편지",
        "start": "n1",
        "endMessage": "돈 안드레스와 옛 친구의 편지 이야기를 나누며 뭉클한 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Hoy recibí una carta de un viejo amigo. Hace veinte años que no lo veo.",
            "text_ko": "오늘 오랜 친구한테서 편지를 받았어. 그를 못 본 지 20년이 됐어.",
            "options": [
              {
                "text_es": "Qué emoción. Hace diez años que no veo a un amigo mío.",
                "text_ko_hint": "정말 반갑겠다. 나도 10년 동안 못 본 친구가 있어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué emoción. Hace diez años no veo a un amigo mío.",
                "text_ko_hint": "정말 반갑겠다. 나도 10년 동안 못 본 친구가 있어.",
                "correct": false,
                "correctionKo": "'~한 지 얼마나 됐다'라는 표현은 'Hace + 시간 + que + 문장' 구조를 써요. 'que'를 빠뜨리면 문법적으로 어색한 문장이 돼요.",
                "correctEs": "Qué emoción. Hace diez años que no veo a un amigo mío.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Empezamos a escribirnos cartas hace mucho tiempo, cuando éramos jóvenes.",
            "text_ko": "우리는 아주 오래전, 젊었을 때부터 편지를 주고받기 시작했어.",
            "options": [
              {
                "text_es": "Qué bonito. Hace años que mi abuela me escribe cartas también.",
                "text_ko_hint": "정말 예쁘다. 우리 할머니도 몇 년째 나한테 편지를 쓰셔.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué bonito. Años hace que mi abuela me escribe cartas también.",
                "text_ko_hint": "정말 예쁘다. 우리 할머니도 몇 년째 나한테 편지를 쓰셔.",
                "correct": false,
                "correctionKo": "'~한 지 얼마나 됐다'는 항상 'Hace + 시간 + que' 순서로 써야 해요. 'años hace que'처럼 순서를 바꾸면 어색한 문장이 돼요.",
                "correctEs": "Qué bonito. Hace años que mi abuela me escribe cartas también.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Voy a contestarle la carta hoy mismo. Hace mucho que quiero verlo de nuevo.",
            "text_ko": "오늘 바로 답장을 쓸 거야. 그를 다시 보고 싶어한 지 오래됐어.",
            "options": [
              {
                "text_es": "Ojalá se vean pronto. Hace tiempo que no tienes tan buenas noticias.",
                "text_ko_hint": "곧 만날 수 있으면 좋겠다. 이렇게 좋은 소식을 들은 지 오래됐잖아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Ojalá se vean pronto. Hace tiempo no tienes tan buenas noticias que.",
                "text_ko_hint": "곧 만날 수 있으면 좋겠다. 이렇게 좋은 소식을 들은 지 오래됐잖아.",
                "correct": false,
                "correctionKo": "'Hace + 시간 + que + 문장' 순서를 지켜야 해요. 'que'를 문장 끝으로 옮기면 문법적으로 틀려요.",
                "correctEs": "Ojalá se vean pronto. Hace tiempo que no tienes tan buenas noticias.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "좋아하는 명언",
        "start": "n1",
        "endMessage": "돈 안드레스와 좋아하는 명언에 대해 이야기했어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Tengo una frase favorita de Cervantes en la pared de mi librería.",
            "text_ko": "내 서점 벽에 세르반테스의 좋아하는 문구가 있어.",
            "options": [
              {
                "text_es": "No sé todavía. ¿Cuál es la frase de Cervantes que tienes en la pared?",
                "text_ko_hint": "아직 모르겠어. 벽에 있는 세르반테스 문구가 뭐야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "No sé todavía. ¿Qué es la frase de Cervantes que tienes en la pared?",
                "text_ko_hint": "아직 모르겠어. 벽에 있는 세르반테스 문구가 뭐야?",
                "correct": false,
                "correctionKo": "여러 개 중에서 '어떤 것'인지 물을 때는 'ser' 동사 앞에서 보통 'cuál'을 써요. 'qué'는 정의를 물을 때 주로 쓰는데, 여기서는 하나를 고르는 질문이라 'cuál'이 자연스러워요.",
                "correctEs": "No sé todavía. ¿Cuál es la frase de Cervantes que tienes en la pared?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Es esta: 'El que lee mucho y anda mucho, ve mucho y sabe mucho.'",
            "text_ko": "이거야: '많이 읽고 많이 다니는 사람은 많이 보고 많이 안다.'",
            "options": [
              {
                "text_es": "Qué hermosa frase. ¿Qué significa para ti?",
                "text_ko_hint": "정말 아름다운 문구다. 너한테는 무슨 의미야?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué hermosa frase. ¿Cuál significa para ti?",
                "text_ko_hint": "정말 아름다운 문구다. 너한테는 무슨 의미야?",
                "correct": false,
                "correctionKo": "'무엇을 의미하다'처럼 뜻을 물을 때는 'qué'를 써요. 'cuál'은 여러 개 중에서 하나를 고를 때 쓰는 말이라서 '의미가 뭐야?'라는 질문에는 맞지 않아요.",
                "correctEs": "Qué hermosa frase. ¿Qué significa para ti?",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Ha sido una linda conversación. Ojalá sigamos hablando de libros pronto.",
            "text_ko": "정말 좋은 대화였어. 곧 다시 책 얘기를 계속하면 좋겠다.",
            "options": [
              {
                "text_es": "Sí, y la próxima vez, cuéntame cuál es tu libro más querido.",
                "text_ko_hint": "응, 다음엔 네가 가장 아끼는 책이 뭔지 말해줘.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Sí, y la próxima vez, cuéntame qué es tu libro más querido.",
                "text_ko_hint": "응, 다음엔 네가 가장 아끼는 책이 뭔지 말해줘.",
                "correct": false,
                "correctionKo": "여러 개 중에서 '어떤 것'인지 고르는 질문에는 'cuál'을 써요. 'qué'는 정의를 물을 때 주로 쓰기 때문에, '가장 아끼는 책이 어떤 거야?'라고 물을 때는 'cuál'이 자연스러워요.",
                "correctEs": "Sí, y la próxima vez, cuéntame cuál es tu libro más querido.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "생일 선물로 받은 책",
        "start": "n1",
        "endMessage": "돈 안드레스와 선물로 받은 책 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Mira, este libro que tengo en las manos me lo regaló mi esposa hace años.",
            "text_ko": "봐봐, 지금 내 손에 있는 이 책은 오래전에 아내가 나한테 선물한 거야.",
            "options": [
              {
                "text_es": "Qué bonito regalo. ¿Y ese libro de allá, el azul, también es especial?",
                "text_ko_hint": "정말 예쁜 선물이다. 그리고 저쪽에 있는 저 파란 책도 특별해?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bonito regalo. ¿Y este libro de allá, el azul, también es especial?",
                "text_ko_hint": "정말 예쁜 선물이다. 그리고 저쪽에 있는 저 파란 책도 특별해?",
                "correct": false,
                "correctionKo": "말하는 사람에게서 멀리 있는 것을 가리킬 때는 'este'(이것) 대신 'ese'나 'aquel'(저것)을 써야 해요. 'de allá'(저쪽에 있는)라고 했으니 'este'는 어울리지 않아요.",
                "correctEs": "Qué bonito regalo. ¿Y ese libro de allá, el azul, también es especial?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Ese libro azul me lo dio un cliente. Y aquel de allá, en la esquina, es una primera edición muy rara.",
            "text_ko": "그 파란 책은 손님이 준 거야. 그리고 저쪽 구석에 있는 저건 아주 희귀한 초판이야.",
            "options": [
              {
                "text_es": "Wow, aquel libro debe valer mucho dinero.",
                "text_ko_hint": "와, 저 책은 돈이 꽤 나가겠다.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Wow, ese libro debe valer mucho dinero.",
                "text_ko_hint": "와, 저 책은 돈이 꽤 나가겠다.",
                "correct": false,
                "correctionKo": "화자와 청자 모두에게서 멀리 떨어진 것을 가리킬 때는 'aquel'을 써요. 'ese'는 듣는 사람과 가까운 것을 가리킬 때 쓰는 말이라서, 저 멀리 있는 책에는 'aquel'이 더 자연스러워요.",
                "correctEs": "Wow, aquel libro debe valer mucho dinero.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Algún día, quiero regalarte un libro especial también, como este que tengo aquí.",
            "text_ko": "언젠가 나도 너한테 특별한 책을 선물하고 싶어, 지금 여기 있는 이 책처럼.",
            "options": [
              {
                "text_es": "Me encantaría. Este momento contigo es un regalo también.",
                "text_ko_hint": "정말 좋겠다. 너랑 함께하는 지금 이 순간도 선물이야.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Me encantaría. Aquel momento contigo es un regalo también.",
                "text_ko_hint": "정말 좋겠다. 너랑 함께하는 지금 이 순간도 선물이야.",
                "correct": false,
                "correctionKo": "지금 이 순간처럼 화자와 가까운 시간이나 장소를 가리킬 때는 'este'를 써요. 'aquel'은 멀리 떨어진 것이나 오래전 일을 가리킬 때 쓰는 말이라 지금 순간에는 어울리지 않아요.",
                "correctEs": "Me encantaría. Este momento contigo es un regalo también.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "크로스워드 퍼즐",
        "start": "n1",
        "endMessage": "돈 안드레스와 크로스워드 퍼즐을 풀며 즐거운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Todos los domingos hago un crucigrama en el periódico. Hoy no entiendo nada.",
            "text_ko": "매주 일요일마다 신문에서 크로스워드 퍼즐을 풀어. 오늘은 아무것도 이해가 안 돼.",
            "options": [
              {
                "text_es": "No te preocupes, a veces yo tampoco entiendo nada de los crucigramas.",
                "text_ko_hint": "걱정 마, 나도 가끔 크로스워드 퍼즐을 하나도 이해 못 해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "No te preocupes, a veces yo tampoco entiendo algo de los crucigramas.",
                "text_ko_hint": "걱정 마, 나도 가끔 크로스워드 퍼즐을 하나도 이해 못 해.",
                "correct": false,
                "correctionKo": "스페인어는 부정문에서 이중 부정을 써요. 'no entiendo'(이해 못 한다) 뒤에는 'algo'(무언가)가 아니라 'nada'(아무것도)를 써야 '아무것도 이해 못 한다'는 뜻이 완성돼요.",
                "correctEs": "No te preocupes, a veces yo tampoco entiendo nada de los crucigramas.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Esta palabra de diez letras es un misterio. Nadie en mi familia la sabe.",
            "text_ko": "열 글자짜리 이 단어는 미스터리야. 우리 가족 중 아무도 몰라.",
            "options": [
              {
                "text_es": "Qué difícil. Yo tampoco conozco a nadie que sepa esa palabra.",
                "text_ko_hint": "정말 어렵다. 나도 그 단어를 아는 사람이 아무도 없어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué difícil. Yo tampoco conozco a alguien que sepa esa palabra.",
                "text_ko_hint": "정말 어렵다. 나도 그 단어를 아는 사람이 아무도 없어.",
                "correct": false,
                "correctionKo": "부정문에서 '아무도 없다'는 뜻을 나타낼 때는 'alguien'(누군가)이 아니라 'nadie'(아무도)를 써야 해요. 스페인어는 부정어를 두 번 써서 부정을 강조해요.",
                "correctEs": "Qué difícil. Yo tampoco conozco a nadie que sepa esa palabra.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "A veces siento que nunca voy a resolver nada solo.",
            "text_ko": "가끔 나 혼자서는 절대 아무것도 못 풀 것 같은 기분이 들어.",
            "options": [
              {
                "text_es": "Yo tampoco resuelvo nada sin ayuda a veces.",
                "text_ko_hint": "나도 가끔 도움 없이는 아무것도 못 풀어.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Yo tampoco resuelvo algo sin ayuda a veces.",
                "text_ko_hint": "나도 가끔 도움 없이는 아무것도 못 풀어.",
                "correct": false,
                "correctionKo": "부정문에서는 'algo'(무언가) 대신 'nada'(아무것도)를 써야 이중 부정이 완성돼서 '아무것도 못 푼다'는 뜻이 자연스러워져요.",
                "correctEs": "Yo tampoco resuelvo nada sin ayuda a veces.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "새로운 단어 배우기",
        "start": "n1",
        "endMessage": "돈 안드레스와 새 단어를 배우며 즐거운 시간을 보냈어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Aprendí una palabra nueva hoy: 'efímero'. Significa algo que dura muy poco tiempo.",
            "text_ko": "오늘 새 단어를 배웠어: '에피메로'. 아주 짧은 시간 지속되는 것을 의미해.",
            "options": [
              {
                "text_es": "Qué interesante. Me gusta mucho aprender palabras nuevas.",
                "text_ko_hint": "흥미롭다. 나는 새 단어 배우는 걸 정말 좋아해.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué interesante. Me gusta muy aprender palabras nuevas.",
                "text_ko_hint": "흥미롭다. 나는 새 단어 배우는 걸 정말 좋아해.",
                "correct": false,
                "correctionKo": "동사를 꾸며서 '많이/정말'이라는 뜻을 나타낼 때는 'mucho'를 써요. 'muy'는 형용사나 부사만 꾸밀 수 있어서 동사 'gusta' 앞에는 쓸 수 없어요.",
                "correctEs": "Qué interesante. Me gusta mucho aprender palabras nuevas.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Esta palabra es muy útil, pero muy difícil de recordar.",
            "text_ko": "이 단어는 아주 유용하지만, 기억하기 아주 어려워.",
            "options": [
              {
                "text_es": "Tienes mucha razón, hay muchas palabras difíciles en español.",
                "text_ko_hint": "정말 맞는 말이야, 스페인어에는 어려운 단어들이 많아.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Tienes muy razón, hay muy palabras difíciles en español.",
                "text_ko_hint": "정말 맞는 말이야, 스페인어에는 어려운 단어들이 많아.",
                "correct": false,
                "correctionKo": "'muy'는 명사를 꾸밀 수 없어요. 명사 앞에서 '많은'이라는 뜻을 나타낼 때는 명사의 성과 수에 맞춰 'mucho/mucha/muchos/muchas'를 써야 해요.",
                "correctEs": "Tienes mucha razón, hay muchas palabras difíciles en español.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Bueno, voy a anotar esta palabra en mi cuaderno. Tengo muchas ya.",
            "text_ko": "자, 이 단어를 내 공책에 적어야겠다. 이미 많이 적어놨어.",
            "options": [
              {
                "text_es": "Qué bien. Estudias mucho el español, se nota.",
                "text_ko_hint": "좋다. 스페인어를 정말 많이 공부하는구나, 티가 나.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Qué bien. Estudias muy el español, se nota.",
                "text_ko_hint": "좋다. 스페인어를 정말 많이 공부하는구나, 티가 나.",
                "correct": false,
                "correctionKo": "동사(estudias)를 꾸밀 때는 'mucho'를 써야 해요. 'muy'는 동사를 꾸밀 수 없어서 'estudias muy'는 틀린 문장이에요.",
                "correctEs": "Qué bien. Estudias mucho el español, se nota.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "작가의 서점 방문",
        "start": "n1",
        "endMessage": "돈 안드레스와 작가의 서점 방문 이야기를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Un escritor famoso va a visitar la librería mañana. Llevo dos semanas preparando todo.",
            "text_ko": "유명한 작가가 내일 서점을 방문할 거야. 2주째 모든 걸 준비하고 있어.",
            "options": [
              {
                "text_es": "Qué emoción. ¿Llevas mucho tiempo siendo su fan?",
                "text_ko_hint": "정말 신난다. 그의 팬 된 지 오래됐어?",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué emoción. ¿Llevas mucho tiempo eres su fan?",
                "text_ko_hint": "정말 신난다. 그의 팬 된 지 오래됐어?",
                "correct": false,
                "correctionKo": "'얼마 동안 계속 ~해오고 있다'라는 뜻은 'llevar + 시간 + 현재분사(-ando/-iendo)' 구조로 표현해요. 활용형(eres) 대신 현재분사(siendo)를 써야 해요.",
                "correctEs": "Qué emoción. ¿Llevas mucho tiempo siendo su fan?",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Sí, llevo diez años leyendo sus novelas. Es un honor conocerlo.",
            "text_ko": "응, 10년째 그의 소설들을 읽고 있어. 그를 만나는 건 영광이야.",
            "options": [
              {
                "text_es": "Qué genial. Yo llevo poco tiempo descubriendo su trabajo.",
                "text_ko_hint": "멋지다. 나는 그의 작품을 알게 된 지 얼마 안 됐어.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Qué genial. Yo llevo poco tiempo descubrir su trabajo.",
                "text_ko_hint": "멋지다. 나는 그의 작품을 알게 된 지 얼마 안 됐어.",
                "correct": false,
                "correctionKo": "'llevar + 시간' 뒤에는 반드시 현재분사(-iendo)가 와야 해요. 동사원형 'descubrir'이 아니라 'descubriendo'를 써야 맞아요.",
                "correctEs": "Qué genial. Yo llevo poco tiempo descubriendo su trabajo.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Bueno, ya casi es hora. Llevo horas nervioso esperando este momento.",
            "text_ko": "자, 이제 거의 시간이 됐어. 이 순간을 기다리며 몇 시간째 긴장하고 있어.",
            "options": [
              {
                "text_es": "Todo va a salir bien. Llevas años trabajando duro para esto.",
                "text_ko_hint": "다 잘 될 거야. 너는 이걸 위해 몇 년째 열심히 일해왔잖아.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Todo va a salir bien. Llevas años trabajar duro para esto.",
                "text_ko_hint": "다 잘 될 거야. 너는 이걸 위해 몇 년째 열심히 일해왔잖아.",
                "correct": false,
                "correctionKo": "'llevar + 시간 + 현재분사' 구조에서는 동사원형(trabajar)이 아니라 현재분사(trabajando)를 써야 해요.",
                "correctEs": "Todo va a salir bien. Llevas años trabajando duro para esto.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      },
      {
        "topicLabel": "밤에 가게 문 닫기",
        "start": "n1",
        "endMessage": "돈 안드레스와 함께 밤에 서점 문을 닫으며 조용한 대화를 나눴어요!",
        "nodes": {
          "n1": {
            "npcId": "andres",
            "text_es": "Ya es de noche. Voy a cerrar la librería con mi viejo amigo el gato, que siempre me acompaña.",
            "text_ko": "벌써 밤이 됐어. 항상 나와 함께해주는 오랜 친구인 고양이와 함께 서점 문을 닫을 거야.",
            "options": [
              {
                "text_es": "Qué bonito tener un viejo amigo así, aunque sea un gato.",
                "text_ko_hint": "그런 오랜 친구가 있다니 정말 좋다, 비록 고양이지만.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n2"
              },
              {
                "text_es": "Qué bonito tener un amigo viejo así, aunque sea un gato.",
                "text_ko_hint": "그런 오랜 친구가 있다니 정말 좋다, 비록 고양이지만.",
                "correct": false,
                "correctionKo": "'viejo'가 명사 앞에 오면 '오래된, 오랜'이라는 뜻이 되고, 명사 뒤에 오면 '나이가 많은'이라는 뜻이 돼요. '오랜 친구'라는 뜻을 말하려면 'viejo amigo'처럼 명사 앞에 와야 해요.",
                "correctEs": "Qué bonito tener un viejo amigo así, aunque sea un gato.",
                "affinityDelta": 0,
                "next": "n2"
              }
            ]
          },
          "n2": {
            "npcId": "andres",
            "text_es": "Este es un negocio pequeño, pero para mí es una gran librería.",
            "text_ko": "이건 작은 가게지만, 나한테는 정말 대단한 서점이야.",
            "options": [
              {
                "text_es": "Se nota que es un gran lugar para ti, no solo un lugar grande.",
                "text_ko_hint": "너한테 정말 대단한 곳이라는 게 느껴져, 단순히 큰 곳이 아니라.",
                "correct": true,
                "affinityDelta": 2,
                "next": "n3"
              },
              {
                "text_es": "Se nota que es un lugar grande para ti, no solo un gran lugar.",
                "text_ko_hint": "너한테 정말 대단한 곳이라는 게 느껴져, 단순히 큰 곳이 아니라.",
                "correct": false,
                "correctionKo": "'grande'가 명사 앞에서 'gran'으로 줄어들면 '대단한, 훌륭한'이라는 뜻이 되고, 명사 뒤에 그대로 'grande'로 오면 '크기가 큰'이라는 뜻이 돼요. 여기서는 '특별하고 대단한 곳'이라는 뜻을 말하려는 거라서 'gran lugar'가 맞아요.",
                "correctEs": "Se nota que es un gran lugar para ti, no solo un lugar grande.",
                "affinityDelta": 0,
                "next": "n3"
              }
            ]
          },
          "n3": {
            "npcId": "andres",
            "text_es": "Bueno, cierro la puerta ya. Fue un día tranquilo, pero un buen día al final.",
            "text_ko": "자, 이제 문을 닫을게. 조용한 하루였지만, 결국 좋은 하루였어.",
            "options": [
              {
                "text_es": "Que descanses, viejo amigo. Nos vemos mañana en tu misma librería de siempre.",
                "text_ko_hint": "잘 쉬어, 오랜 친구. 내일 항상 그 서점에서 봐.",
                "correct": true,
                "affinityDelta": 3,
                "next": "end"
              },
              {
                "text_es": "Que descanses, viejo amigo. Nos vemos mañana en tu librería misma de siempre.",
                "text_ko_hint": "잘 쉬어, 오랜 친구. 내일 항상 그 서점에서 봐.",
                "correct": false,
                "correctionKo": "'mismo/misma'가 명사 앞에 오면 '같은'이라는 뜻이 되고, 명사 뒤에 오면 '바로 그것 자체'라는 뜻이 돼요. '항상 그 같은 서점'이라는 뜻을 말하려면 명사 앞에 'misma librería'처럼 와야 해요.",
                "correctEs": "Que descanses, viejo amigo. Nos vemos mañana en tu misma librería de siempre.",
                "affinityDelta": 0,
                "next": "end"
              }
            ]
          }
        }
      }
    ]
  }
};
