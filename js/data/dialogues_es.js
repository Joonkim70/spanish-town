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
      }
    ]
  }
};
