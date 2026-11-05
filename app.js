const languageNames = {
  en: "English",
  "zh-CN": "简体中文",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  ar: "العربية",
};

const levelLabels = {
  en: { a1: "Beginner", a2: "Elementary", b1: "Intermediate", b2: "Upper-intermediate", c1: "Advanced", c2: "Proficient" },
  vi: { a1: "Mới bắt đầu", a2: "Sơ cấp", b1: "Trung cấp", b2: "Trên trung cấp", c1: "Nâng cao", c2: "Thành thạo" },
  "zh-CN": { a1: "入门", a2: "初级", b1: "中级", b2: "中高级", c1: "高级", c2: "精通" },
  ja: { a1: "入門", a2: "初級", b1: "中級", b2: "中上級", c1: "上級", c2: "熟達" },
  ko: { a1: "입문", a2: "초급", b1: "중급", b2: "중상급", c1: "고급", c2: "숙달" },
  es: { a1: "Principiante", a2: "Elemental", b1: "Intermedio", b2: "Intermedio alto", c1: "Avanzado", c2: "Dominio" },
  ar: { a1: "مبتدئ", a2: "أساسي", b1: "متوسط", b2: "فوق المتوسط", c1: "متقدم", c2: "إتقان" },
};

const levelDescriptions = {
  en: { a1: "Start with everyday phrases and pronunciation.", a2: "Build confidence in familiar situations.", b1: "Discuss experiences and express opinions.", b2: "Read news and compare viewpoints.", c1: "Analyze complex topics and evidence.", c2: "Interpret nuance and develop precise arguments." },
  vi: { a1: "Bắt đầu với phát âm và câu giao tiếp hằng ngày.", a2: "Tự tin hơn trong những tình huống quen thuộc.", b1: "Kể trải nghiệm và trình bày ý kiến.", b2: "Đọc tin tức và so sánh nhiều góc nhìn.", c1: "Phân tích chủ đề phức tạp và bằng chứng.", c2: "Hiểu sắc thái và lập luận chính xác." },
  "zh-CN": { a1: "从发音和日常表达开始。", a2: "在熟悉的情境中建立信心。", b1: "讨论经历并表达观点。", b2: "阅读新闻并比较不同观点。", c1: "分析复杂主题与证据。", c2: "理解细微差别并准确论证。" },
  ja: { a1: "発音と日常表現から始めます。", a2: "身近な場面で自信をつけます。", b1: "経験を語り、意見を伝えます。", b2: "ニュースを読み、複数の視点を比べます。", c1: "複雑なテーマと根拠を分析します。", c2: "細かなニュアンスを理解し、正確に論じます。" },
  ko: { a1: "발음과 일상 표현부터 시작해요.", a2: "익숙한 상황에서 자신감을 키워요.", b1: "경험을 이야기하고 의견을 표현해요.", b2: "뉴스를 읽고 여러 관점을 비교해요.", c1: "복잡한 주제와 근거를 분석해요.", c2: "미묘한 차이를 이해하고 정확하게 논증해요." },
  es: { a1: "Empieza con pronunciación y frases cotidianas.", a2: "Gana confianza en situaciones conocidas.", b1: "Cuenta experiencias y expresa opiniones.", b2: "Lee noticias y compara perspectivas.", c1: "Analiza temas complejos y pruebas.", c2: "Interpreta matices y desarrolla argumentos precisos." },
  ar: { a1: "ابدأ بالنطق والعبارات اليومية.", a2: "عزز ثقتك في المواقف المألوفة.", b1: "ناقش التجارب وعبّر عن آرائك.", b2: "اقرأ الأخبار وقارن بين وجهات النظر.", c1: "حلل الموضوعات المعقدة والأدلة.", c2: "افهم الدلالات الدقيقة وقدم حججاً دقيقة." },
};

const recordingFolders = {
  a1: "https://drive.google.com/drive/folders/1F75xJ3BrkW24d0STkdiW_sQiflPEzYTT?usp=sharing",
  a2: "https://drive.google.com/drive/folders/1bdJiKPo5EcVc_wrh_vlr-PLqmxqQOgx0?usp=sharing",
  b1: "https://drive.google.com/drive/folders/1k7t8bO5bF8Ni7hTQVQSUnbbCgrZevo7U?usp=sharing",
  b2: "https://drive.google.com/drive/folders/1X4QD2xOu3RMIb69FD3hlIx1ea10GcFIv?usp=sharing",
  c1: "https://drive.google.com/drive/folders/1xUyOI6EBJbSS_97-H631DQaxHw-YnUPa?usp=sharing",
  c2: "https://drive.google.com/drive/folders/1lp1wV928fAai3RZBeqtXvWnDhxX5GTL_?usp=sharing",
};

const uiTranslations = {
  en: {
    home: "Home", lessons: "Lessons", review: "Review", vocabulary: "Vocabulary", practice: "Practice", about: "About Mimi",
    welcome: "Welcome!", goal: "Daily goal", today: "today", chooseLevel: "CHOOSE YOUR LEVEL", newLearner: "Beginner · learn your first everyday phrases",
    starter: "Begin speaking Vietnamese!", starterDescription: "Learn greetings, introductions and useful everyday situations.",
    advanced: "Say more, with confidence!", advancedDescription: "Practice talking about work, travel and everyday experiences.",
    start: "Start learning", continue: "Continue learning", course: "Vietnamese course", allLessons: "24 everyday topics",
    search: "Search words, phrases or English meanings...", words: "Vocabulary", phrases: "Phrases", noResults: "No matching content. Try another search.",
    reading: "Reading practice", readAndAnswer: "Read and answer", translate: "Translate this content", grammar: "KEY GRAMMAR",
    reviewTitle: "Review corner", selectLesson: "Choose a lesson to review", listening: "Listening", speaking: "Speaking", writing: "Writing",
    listenAnswer: "LISTEN AND ANSWER", speakAloud: "SPEAK ALOUD", writingPractice: "SENTENCE WRITING", chooseAnswer: "Choose the correct meaning below.",
    listenTwice: "Open the recording folder for", listenTwice2: "Listen twice without reading the passage, then answer in Vietnamese.",
    startRecording: "● Start recording", stopRecording: "■ Stop recording", downloadRecording: "Download your recording",
    submitAnswers: "Send answers to Mimi on WhatsApp", submitSpeaking: "Send your speaking practice on WhatsApp",
    freePractice: "Free practice", cultureKicker: "LEARN VIETNAMESE THROUGH CULTURE", cultureTitle: "Vietnamese culture corner", cultureBadge: "CULTURE · VOCABULARY · HISTORY", freeCorrection: "Send your exercises to Mimi on WhatsApp for free correction.",
    translateNote: "Translations are provided by Google Translate and may not be exact. Vietnamese remains the language of study.",
    aiNotice: "AI grading with ChatGPT/Gemini is not connected yet. You can send your work to Mimi for free correction on WhatsApp.",
    aboutTitle: "Meet Mimi", topic: "Topic", answerPlaceholder: "Write your answer...", translateLink: "Open translation ↗",
    pronunciationKicker: "OPTIONAL PRONUNCIATION RESOURCE",
    pronunciationTitle: "Extra Vietnamese pronunciation practice",
    pronunciationDescription: "Optional external practice. If the video does not open, you can continue learning A1 on this page.",
    pronunciationLink: "See pronunciation resource on YouTube",
    pronunciationVideoTitle: "Optional Vietnamese pronunciation resource",
    vocabularyOverline: "WORDS FOR EVERYDAY LIFE", lessonOverline: "24 LESSONS · READ MORE AT EACH LEVEL", recordingHeading: "Listen to Mimi's voice!",
    recordingInstruction: "Scan the QR code or open the folder to listen to the recordings.",
    readingSection: "READING PRACTICE", exerciseSection: "FREE EXERCISES", exerciseIntro: "Complete all 3 questions and send them to Mimi on WhatsApp for free correction.",
    writingDirections: "Use the model sentence and write 3 new sentences. Replace the words in brackets with your own ideas.",
    micNote: "Allow microphone access, speak for about 30–60 seconds and listen to your recording. Download it to attach to WhatsApp.",
    speakingPrompt: "Speak for 30–60 seconds about", usePattern: "Try to use this sentence:", lessonProgress: "lessons",
    openRecordings: "Open the recording folder", libraryIntro: "Explore vocabulary and phrases by topic.",
    student: "Learner", level: "LEVEL", lesson: "Lesson", studentBeginner: "Beginner level", studentElementary: "Elementary level",
    freeStudy: "FREE SELF-STUDY", quizCorrect: "Correct! Great job remembering the word ✨", quizWrong: "Not quite. The answer is",
    supportTitle: "Enjoying the free lessons?", supportCopy: "If you’d like, you can help Mimi maintain this page. Completely optional — learning materials remain free either way.", supportButton: "Support Mimi on PayPal",
  },
  "zh-CN": {
    home: "首页", lessons: "课程", review: "复习", vocabulary: "词汇", practice: "练习", about: "关于 Mimi",
    welcome: "欢迎！", goal: "每日目标", today: "今天", chooseLevel: "选择学习级别", newLearner: "初学者 · 学习日常表达",
    starter: "开始说越南语吧！", starterDescription: "学习问候、自我介绍和日常实用表达。",
    advanced: "自信表达更多！", advancedDescription: "练习谈论工作、旅行和日常经历。",
    start: "开始学习", continue: "继续学习", course: "越南语课程", allLessons: "24 个日常主题",
    search: "搜索词汇、句型或英文释义……", words: "词汇", phrases: "句型", noResults: "没有找到匹配内容，请尝试其他关键词。",
    reading: "阅读练习", readAndAnswer: "阅读并回答", translate: "翻译此内容", grammar: "重点语法",
    reviewTitle: "复习练习", selectLesson: "选择要复习的课程", listening: "听力", speaking: "口语", writing: "写作",
    listenAnswer: "听并回答", speakAloud: "大声说出来", writingPractice: "句子写作", chooseAnswer: "选择下面正确的意思。",
    listenTwice: "打开录音文件夹：", listenTwice2: "不要看阅读材料，听两遍后用越南语回答。",
    startRecording: "● 开始录音", stopRecording: "■ 停止录音", downloadRecording: "下载录音",
    submitAnswers: "通过 WhatsApp 将答案发送给 Mimi", submitSpeaking: "通过 WhatsApp 发送口语练习",
    freePractice: "免费练习", cultureKicker: "通过文化学习越南语", cultureTitle: "越南文化角", cultureBadge: "文化 · 词汇 · 历史", freeCorrection: "可通过 WhatsApp 免费发送练习给 Mimi 批改。",
    translateNote: "翻译由 Google 翻译提供，可能并非完全准确。越南语仍是学习语言。",
    aiNotice: "尚未连接 ChatGPT/Gemini 自动评分。你可以通过 WhatsApp 免费发送作业给 Mimi 批改。",
    aboutTitle: "认识 Mimi", topic: "主题", answerPlaceholder: "请填写答案……", translateLink: "打开翻译 ↗",
    pronunciationKicker: "从这里开始 · A1基础", pronunciationTitle: "越南语字母表：A1基础",
    pronunciationDescription: "开始第1课前，请先观看越南语字母表介绍。听字母名称并跟读，然后继续学习字母和声调课程。",
    pronunciationLink: "在 YouTube 打开视频", pronunciationVideoTitle: "越南语字母表 — OLM.VN",
    vocabularyOverline: "日常生活词汇", lessonOverline: "24节课程 · 阅读随级别加长", recordingHeading: "来听听 Mimi 的录音！",
    recordingInstruction: "扫描二维码或打开文件夹收听录音。",
    readingSection: "阅读练习", exerciseSection: "免费练习", exerciseIntro: "完成全部三题后通过 WhatsApp 发给 Mimi，她会免费批改。",
    writingDirections: "参考例句，然后写三个新句子。可以替换括号中的信息。",
    micNote: "允许浏览器使用麦克风，说约 30–60 秒后听录音。下载文件后可通过 WhatsApp 附件发送。",
    speakingPrompt: "请围绕以下主题说 30–60 秒：", usePattern: "尽量使用这个句型：", lessonProgress: "课",
    openRecordings: "打开录音文件夹", libraryIntro: "按主题学习词汇和句型。",
    student: "学员", level: "级别", lesson: "课程", studentBeginner: "初学者级别", studentElementary: "初级水平",
    freeStudy: "免费自学", quizCorrect: "答对了！你记得很好 ✨", quizWrong: "不太对，正确答案是",
    supportTitle: "喜欢这些免费课程吗？", supportCopy: "如果你愿意，可以帮助 Mimi 维护这个网页。完全自愿，无论是否支持，学习资料都会继续免费。", supportButton: "通过 PayPal 支持 Mimi",
  },
  ja: {
    home: "ホーム", lessons: "レッスン", review: "復習", vocabulary: "単語", practice: "練習", about: "Mimiについて",
    welcome: "ようこそ！", goal: "毎日の目標", today: "今日", chooseLevel: "レベルを選択", newLearner: "初心者 · 日常会話の第一歩",
    starter: "ベトナム語を話してみよう！", starterDescription: "あいさつ、自己紹介、日常で使える表現を学びます。",
    advanced: "もっと自信を持って話そう！", advancedDescription: "仕事、旅行、日常の経験について練習します。",
    start: "学習を始める", continue: "学習を続ける", course: "ベトナム語コース", allLessons: "日常会話の24テーマ",
    search: "単語、フレーズ、英語の意味を検索…", words: "単語", phrases: "フレーズ", noResults: "見つかりませんでした。別の言葉をお試しください。",
    reading: "読解練習", readAndAnswer: "読んで答えましょう", translate: "この内容を翻訳", grammar: "重要な文法",
    reviewTitle: "復習コーナー", selectLesson: "復習するレッスンを選択", listening: "リスニング", speaking: "スピーキング", writing: "ライティング",
    listenAnswer: "聞いて答える", speakAloud: "声に出して話す", writingPractice: "文を書く練習", chooseAnswer: "正しい意味を選んでください。",
    listenTwice: "録音フォルダーを開く：", listenTwice2: "本文を見ずに2回聞いて、ベトナム語で答えてください。",
    startRecording: "● 録音を開始", stopRecording: "■ 録音を停止", downloadRecording: "録音をダウンロード",
    submitAnswers: "WhatsAppでMimiに回答を送る", submitSpeaking: "WhatsAppでスピーキング練習を送る",
    freePractice: "無料練習", cultureKicker: "文化を通してベトナム語を学ぶ", cultureTitle: "ベトナム文化コーナー", cultureBadge: "文化 · 語彙 · 歴史", freeCorrection: "WhatsAppでMimiに無料で添削を依頼できます。",
    translateNote: "翻訳はGoogle翻訳によるもので、正確でない場合があります。学習言語はベトナム語です。",
    aiNotice: "ChatGPT/Geminiによる採点はまだ利用できません。WhatsAppでMimiに無料添削を依頼できます。",
    aboutTitle: "Mimiについて", topic: "テーマ", answerPlaceholder: "回答を入力してください…", translateLink: "翻訳を開く ↗",
    pronunciationKicker: "ここから始めよう · A1の基礎", pronunciationTitle: "ベトナム語のアルファベット：A1の基礎",
    pronunciationDescription: "第1課の前に、ベトナム語のアルファベットの紹介動画を見ましょう。文字の名前を聞いて声に出して練習したら、文字と声調の第1課に進みます。",
    pronunciationLink: "YouTubeで動画を開く", pronunciationVideoTitle: "ベトナム語のアルファベット — OLM.VN",
    vocabularyOverline: "日常生活の単語", lessonOverline: "全24レッスン · レベル別に長くなる読解", recordingHeading: "Mimiの声を聞いてみよう！",
    recordingInstruction: "QRコードをスキャンするか、フォルダーを開いて録音を聞いてください。",
    readingSection: "読解練習", exerciseSection: "無料練習", exerciseIntro: "3問すべてに答えてWhatsAppでMimiに送ると、無料で添削してもらえます。",
    writingDirections: "例文を参考にして、新しい文を3つ書きましょう。かっこの中は自分の内容に変えられます。",
    micNote: "マイクを許可し、30〜60秒ほど話して録音を聞きましょう。ファイルをダウンロードしてWhatsAppに添付できます。",
    speakingPrompt: "次のテーマについて30〜60秒話してください：", usePattern: "この文型を使ってみましょう：", lessonProgress: "レッスン",
    openRecordings: "録音フォルダーを開く", libraryIntro: "テーマ別に単語やフレーズを学びましょう。",
    student: "学習者", level: "レベル", lesson: "レッスン", studentBeginner: "初級レベル", studentElementary: "初級レベル",
    freeStudy: "無料の自主学習", quizCorrect: "正解です！よく覚えていますね ✨", quizWrong: "少し違います。正解は",
    supportTitle: "無料レッスンを気に入っていただけましたか？", supportCopy: "ご希望であれば、Mimiのサイト運営を応援できます。完全に任意です。応援の有無にかかわらず、教材は無料です。", supportButton: "PayPalでMimiを応援",
  },
  ko: {
    home: "홈", lessons: "수업", review: "복습", vocabulary: "어휘", practice: "연습", about: "Mimi 소개",
    welcome: "환영합니다!", goal: "일일 목표", today: "오늘", chooseLevel: "학습 단계 선택", newLearner: "초급 · 일상 표현부터 시작하기",
    starter: "베트남어로 말해 보세요!", starterDescription: "인사, 자기소개와 일상에서 유용한 표현을 배워요.",
    advanced: "더 자신 있게 표현해요!", advancedDescription: "직장, 여행, 일상 경험에 대해 연습해요.",
    start: "학습 시작", continue: "학습 계속하기", course: "베트남어 과정", allLessons: "일상 회화 24개 주제",
    search: "단어, 문장 또는 영어 뜻 검색...", words: "어휘", phrases: "문장", noResults: "검색 결과가 없습니다. 다른 검색어를 입력해 보세요.",
    reading: "읽기 연습", readAndAnswer: "읽고 답하기", translate: "이 내용 번역하기", grammar: "핵심 문법",
    reviewTitle: "복습 코너", selectLesson: "복습할 수업 선택", listening: "듣기", speaking: "말하기", writing: "쓰기",
    listenAnswer: "듣고 답하기", speakAloud: "소리 내어 말하기", writingPractice: "문장 쓰기", chooseAnswer: "아래에서 알맞은 뜻을 선택하세요.",
    listenTwice: "녹음 폴더 열기:", listenTwice2: "본문을 보지 말고 두 번 들은 뒤 베트남어로 답하세요.",
    startRecording: "● 녹음 시작", stopRecording: "■ 녹음 중지", downloadRecording: "녹음 다운로드",
    submitAnswers: "WhatsApp으로 Mimi에게 답변 보내기", submitSpeaking: "WhatsApp으로 말하기 연습 보내기",
    freePractice: "무료 연습", cultureKicker: "문화로 배우는 베트남어", cultureTitle: "베트남 문화 코너", cultureBadge: "문화 · 어휘 · 역사", freeCorrection: "WhatsApp으로 Mimi에게 무료 첨삭을 요청할 수 있어요.",
    translateNote: "번역은 Google 번역을 사용하며 정확하지 않을 수 있습니다. 학습 언어는 베트남어입니다.",
    aiNotice: "ChatGPT/Gemini 자동 채점은 아직 연결되지 않았습니다. WhatsApp으로 Mimi에게 무료 첨삭을 요청하세요.",
    aboutTitle: "Mimi 소개", topic: "주제", answerPlaceholder: "답변을 입력하세요...", translateLink: "번역 열기 ↗",
    pronunciationKicker: "여기서 시작 · A1 기초", pronunciationTitle: "베트남어 알파벳: A1 기초",
    pronunciationDescription: "1과를 시작하기 전에 베트남어 알파벳 소개 영상을 보세요. 글자 이름을 듣고 따라 말한 다음, 글자와 성조를 배우는 1과로 이어가세요.",
    pronunciationLink: "YouTube에서 영상 열기", pronunciationVideoTitle: "베트남어 알파벳 — OLM.VN",
    vocabularyOverline: "일상생활 어휘", lessonOverline: "24개 수업 · 레벨이 높아질수록 긴 읽기 자료", recordingHeading: "Mimi의 목소리를 들어 보세요!",
    recordingInstruction: "QR 코드를 스캔하거나 폴더를 열어 녹음을 들으세요.",
    readingSection: "읽기 연습", exerciseSection: "무료 연습", exerciseIntro: "세 문제를 모두 풀고 WhatsApp으로 Mimi에게 보내면 무료로 첨삭해 드려요.",
    writingDirections: "예문을 참고해 새 문장 세 개를 써 보세요. 괄호 안의 내용을 바꿔도 됩니다.",
    micNote: "마이크 사용을 허용하고 30~60초 정도 말한 뒤 녹음을 들어 보세요. 파일을 다운로드해 WhatsApp에 첨부할 수 있어요.",
    speakingPrompt: "다음 주제에 대해 30~60초 동안 말해 보세요:", usePattern: "이 문형을 사용해 보세요:", lessonProgress: "수업",
    openRecordings: "녹음 폴더 열기", libraryIntro: "주제별로 어휘와 문형을 학습하세요.",
    student: "학습자", level: "레벨", lesson: "수업", studentBeginner: "초급자 수준", studentElementary: "초급 수준",
    freeStudy: "무료 자율 학습", quizCorrect: "정답이에요! 잘 기억했어요 ✨", quizWrong: "아쉽네요. 정답은",
    supportTitle: "무료 수업이 마음에 드셨나요?", supportCopy: "원하시면 Mimi가 이 페이지를 유지하는 데 도움을 주실 수 있어요. 전적으로 선택 사항이며, 후원 여부와 관계없이 학습 자료는 계속 무료예요.", supportButton: "PayPal로 Mimi 응원하기",
  },
  es: {
    home: "Inicio", lessons: "Lecciones", review: "Repaso", vocabulary: "Vocabulario", practice: "Práctica", about: "Sobre Mimi",
    welcome: "¡Te damos la bienvenida!", goal: "Objetivo diario", today: "hoy", chooseLevel: "ELIGE TU NIVEL", newLearner: "Principiante · aprende tus primeras frases cotidianas",
    starter: "¡Empieza a hablar vietnamita!", starterDescription: "Aprende saludos, presentaciones y expresiones útiles para el día a día.",
    advanced: "¡Exprésate con más confianza!", advancedDescription: "Practica cómo hablar del trabajo, los viajes y las experiencias diarias.",
    start: "Empezar a aprender", continue: "Continuar aprendiendo", course: "Curso de vietnamita", allLessons: "24 temas cotidianos",
    search: "Busca palabras, frases o significados en inglés...", words: "Vocabulario", phrases: "Frases", noResults: "No se encontró contenido. Prueba con otra búsqueda.",
    reading: "Lectura de práctica", readAndAnswer: "Lee y responde", translate: "Traducir este contenido", grammar: "GRAMÁTICA CLAVE",
    reviewTitle: "Zona de repaso", selectLesson: "Elige una lección para repasar", listening: "Comprensión auditiva", speaking: "Expresión oral", writing: "Escritura",
    listenAnswer: "ESCUCHA Y RESPONDE", speakAloud: "HABLA EN VOZ ALTA", writingPractice: "ESCRITURA DE FRASES", chooseAnswer: "Elige el significado correcto.",
    listenTwice: "Abre la carpeta de grabaciones de", listenTwice2: "Escucha dos veces sin leer el texto y responde en vietnamita.",
    startRecording: "● Empezar a grabar", stopRecording: "■ Detener grabación", downloadRecording: "Descargar grabación",
    submitAnswers: "Enviar respuestas a Mimi por WhatsApp", submitSpeaking: "Enviar práctica oral por WhatsApp",
    freePractice: "Práctica gratis", cultureKicker: "APRENDE VIETNAMITA A TRAVÉS DE SU CULTURA", cultureTitle: "Rincón de la cultura vietnamita", cultureBadge: "CULTURA · VOCABULARIO · HISTORIA", freeCorrection: "Envía tus ejercicios a Mimi por WhatsApp para corregirlos gratis.",
    translateNote: "Las traducciones son de Google Translate y pueden no ser exactas. El vietnamita sigue siendo el idioma de aprendizaje.",
    aiNotice: "La corrección con ChatGPT/Gemini aún no está conectada. Puedes enviar tu trabajo a Mimi por WhatsApp para recibir correcciones gratis.",
    aboutTitle: "Conoce a Mimi", topic: "Tema", answerPlaceholder: "Escribe tu respuesta...", translateLink: "Abrir traducción ↗",
    pronunciationKicker: "EMPIEZA AQUÍ · BASE DE A1", pronunciationTitle: "Alfabeto vietnamita: base de A1",
    pronunciationDescription: "Antes de la lección 1, mira esta introducción al alfabeto vietnamita. Escucha los nombres de las letras y repítelos en voz alta; después, continúa con la lección 1 sobre letras y tonos.",
    pronunciationLink: "Abrir el video en YouTube", pronunciationVideoTitle: "Alfabeto vietnamita — OLM.VN",
    vocabularyOverline: "PALABRAS PARA LA VIDA DIARIA", lessonOverline: "24 LECCIONES · LECTURAS MÁS LARGAS POR NIVEL", recordingHeading: "¡Escucha la voz de Mimi!",
    recordingInstruction: "Escanea el código QR o abre la carpeta para escuchar las grabaciones.",
    readingSection: "LECTURA DE PRÁCTICA", exerciseSection: "EJERCICIOS GRATIS", exerciseIntro: "Completa las 3 preguntas y envíalas a Mimi por WhatsApp para recibir correcciones gratis.",
    writingDirections: "Usa el modelo y escribe 3 frases nuevas. Puedes cambiar la información entre corchetes.",
    micNote: "Permite el acceso al micrófono, habla durante 30–60 segundos y escucha tu grabación. Descárgala para adjuntarla en WhatsApp.",
    speakingPrompt: "Habla durante 30–60 segundos sobre:", usePattern: "Intenta usar esta estructura:", lessonProgress: "lecciones",
    openRecordings: "Abrir la carpeta de grabaciones", libraryIntro: "Aprende vocabulario y frases por tema.",
    student: "Estudiante", level: "NIVEL", lesson: "Lección", studentBeginner: "Nivel principiante", studentElementary: "Nivel elemental",
    freeStudy: "AUTOESTUDIO GRATIS", quizCorrect: "¡Correcto! Recuerdas muy bien la palabra ✨", quizWrong: "No exactamente. La respuesta es",
    supportTitle: "¿Te gustan las lecciones gratuitas?", supportCopy: "Si quieres, puedes ayudar a Mimi a mantener esta página. Es totalmente opcional; los materiales seguirán siendo gratuitos de cualquier forma.", supportButton: "Apoyar a Mimi en PayPal",
  },
  ar: {
    home: "الرئيسية", lessons: "الدروس", review: "المراجعة", vocabulary: "المفردات", practice: "التدريب", about: "عن ميمي",
    welcome: "أهلاً بك!", goal: "الهدف اليومي", today: "اليوم", chooseLevel: "اختر مستواك", newLearner: "مبتدئ · تعلّم عباراتك اليومية الأولى",
    starter: "ابدأ التحدث بالفيتنامية!", starterDescription: "تعلّم التحيات والتعريف بالنفس وعبارات الحياة اليومية.",
    advanced: "تحدث بثقة أكبر!", advancedDescription: "تدرّب على الحديث عن العمل والسفر والتجارب اليومية.",
    start: "ابدأ التعلم", continue: "تابع التعلم", course: "دورة اللغة الفيتنامية", allLessons: "24 موضوعاً يومياً",
    search: "ابحث عن كلمات أو عبارات أو معانٍ بالإنجليزية...", words: "المفردات", phrases: "العبارات", noResults: "لم يتم العثور على نتائج. جرّب عبارة أخرى.",
    reading: "تدريب القراءة", readAndAnswer: "اقرأ وأجب", translate: "ترجم هذا المحتوى", grammar: "القواعد الأساسية",
    reviewTitle: "ركن المراجعة", selectLesson: "اختر درساً للمراجعة", listening: "الاستماع", speaking: "التحدث", writing: "الكتابة",
    listenAnswer: "استمع وأجب", speakAloud: "تحدث بصوت عالٍ", writingPractice: "كتابة الجمل", chooseAnswer: "اختر المعنى الصحيح أدناه.",
    listenTwice: "افتح مجلد التسجيلات للمستوى", listenTwice2: "استمع مرتين دون قراءة النص، ثم أجب باللغة الفيتنامية.",
    startRecording: "● ابدأ التسجيل", stopRecording: "■ أوقف التسجيل", downloadRecording: "نزّل التسجيل",
    submitAnswers: "أرسل الإجابات إلى ميمي عبر واتساب", submitSpeaking: "أرسل تدريب التحدث عبر واتساب",
    freePractice: "تدريب مجاني", cultureKicker: "تعلّم الفيتنامية من خلال الثقافة", cultureTitle: "ركن الثقافة الفيتنامية", cultureBadge: "الثقافة · المفردات · التاريخ", freeCorrection: "أرسل تمارينك إلى ميمي عبر واتساب لتصحيحها مجاناً.",
    translateNote: "الترجمات من Google Translate وقد لا تكون دقيقة. تظل الفيتنامية لغة التعلم.",
    aiNotice: "لم يتم ربط التصحيح الآلي عبر ChatGPT/Gemini بعد. يمكنك إرسال عملك إلى ميمي عبر واتساب لتصحيحه مجاناً.",
    aboutTitle: "تعرف على ميمي", topic: "الموضوع", answerPlaceholder: "اكتب إجابتك...", translateLink: "افتح الترجمة ↗",
    pronunciationKicker: "ابدأ من هنا · أساسيات A1", pronunciationTitle: "الأبجدية الفيتنامية: أساسيات A1",
    pronunciationDescription: "شاهد هذا الفيديو التعريفي بالأحرف الفيتنامية قبل الدرس الأول. استمع إلى أسماء الأحرف وكررها بصوت عالٍ، ثم تابع الدرس الأول عن الأحرف والنغمات.",
    pronunciationLink: "افتح الفيديو على YouTube", pronunciationVideoTitle: "الأبجدية الفيتنامية — OLM.VN",
    vocabularyOverline: "كلمات للحياة اليومية", lessonOverline: "24 درساً · نصوص أطول في المستويات الأعلى", recordingHeading: "استمع إلى صوت ميمي!",
    recordingInstruction: "امسح رمز QR أو افتح المجلد للاستماع إلى التسجيلات.",
    readingSection: "تدريب القراءة", exerciseSection: "تمارين مجانية", exerciseIntro: "أجب عن الأسئلة الثلاثة وأرسلها إلى ميمي عبر واتساب لتصحيحها مجاناً.",
    writingDirections: "استخدم النموذج واكتب ثلاث جمل جديدة. يمكنك تغيير المعلومات بين القوسين.",
    micNote: "اسمح باستخدام الميكروفون، وتحدث لمدة 30–60 ثانية ثم استمع إلى التسجيل. نزّل الملف لإرفاقه في واتساب.",
    speakingPrompt: "تحدث لمدة 30–60 ثانية عن:", usePattern: "حاول استخدام هذا النمط:", lessonProgress: "دروس",
    openRecordings: "افتح مجلد التسجيلات", libraryIntro: "تعلم المفردات والعبارات حسب الموضوع.",
    student: "متعلم", level: "المستوى", lesson: "درس", studentBeginner: "مستوى المبتدئين", studentElementary: "المستوى الابتدائي",
    freeStudy: "تعلم ذاتي مجاني", quizCorrect: "صحيح! أحسنت تذكر الكلمة ✨", quizWrong: "ليس تماماً. الإجابة هي",
    supportTitle: "هل أعجبتك الدروس المجانية؟", supportCopy: "إذا رغبت، يمكنك مساعدة ميمي في صيانة هذه الصفحة. الدعم اختياري تماماً، وستظل المواد التعليمية مجانية في جميع الأحوال.", supportButton: "ادعم ميمي عبر PayPal",
  },
};

const additionalUiTranslations = {
  en: { linkedinProfile: "View Mimi's LinkedIn profile ↗", newsPracticeTitle: "Extra news articles", newsPracticeNote: "Find Vietnamese news on this topic for additional reading practice.", newsSearch: "Search Google News", vnexpressSearch: "Search VnExpress", tuoitreSearch: "Search Tuổi Trẻ", searchAudio: "Search for a Vietnamese listening video about", optionalPronunciation: "OPTIONAL PRONUNCIATION RESOURCE", pronunciationTitle: "Extra Vietnamese pronunciation practice", pronunciationDescription: "Optional external practice. If the video does not open, you can continue learning A1 on this page.", pronunciationLink: "See pronunciation resource on YouTube", holidayToday: "VIETNAMESE HOLIDAY · TODAY", holidayNext: "UP NEXT IN VIETNAM", holidayTodayTitle: "Today in Vietnam: ", holidayNextTitle: "Coming up: ", holidayDate: "Date", holidayFact: "Did you know?", holidayVocabulary: "Vietnamese words", holidayTranslate: "Translate this culture note" },
  "zh-CN": { linkedinProfile: "查看 Mimi 的 LinkedIn 个人资料 ↗", newsPracticeTitle: "新闻拓展阅读", newsPracticeNote: "查找相关越南语新闻，进行更多阅读练习。", newsSearch: "搜索 Google 新闻", vnexpressSearch: "搜索 VnExpress", tuoitreSearch: "搜索 Tuổi Trẻ", searchAudio: "搜索有关此主题的越南语听力视频：", optionalPronunciation: "可选发音资料", pronunciationTitle: "越南语发音拓展练习", pronunciationDescription: "这是可选的外部练习。如果视频无法打开，仍可继续在本页学习 A1。", pronunciationLink: "在 YouTube 查看发音资料", holidayToday: "越南节日 · 今天", holidayNext: "越南下一个节日", holidayTodayTitle: "今天的越南节日：", holidayNextTitle: "即将到来：", holidayDate: "日期", holidayFact: "你知道吗？", holidayVocabulary: "越南语词汇", holidayTranslate: "翻译这段文化介绍" },
  ja: { linkedinProfile: "Mimi の LinkedIn プロフィールを見る ↗", newsPracticeTitle: "ニュース記事で追加練習", newsPracticeNote: "同じテーマのベトナム語ニュースを探して、読解練習をしましょう。", newsSearch: "Google ニュースで検索", vnexpressSearch: "VnExpress で検索", tuoitreSearch: "Tuổi Trẻ で検索", searchAudio: "このテーマのベトナム語リスニング動画を検索：", optionalPronunciation: "任意の発音練習資料", pronunciationTitle: "ベトナム語の発音をさらに練習", pronunciationDescription: "任意の外部練習です。動画が開かなくても、このページでA1の学習を続けられます。", pronunciationLink: "YouTubeで発音資料を見る", holidayToday: "ベトナムの祝日 · 今日", holidayNext: "次のベトナムの祝日", holidayTodayTitle: "今日のベトナムの祝日：", holidayNextTitle: "まもなく：", holidayDate: "日付", holidayFact: "豆知識", holidayVocabulary: "ベトナム語の語彙", holidayTranslate: "文化紹介を翻訳" },
  ko: { linkedinProfile: "Mimi의 LinkedIn 프로필 보기 ↗", newsPracticeTitle: "뉴스 기사 추가 읽기", newsPracticeNote: "같은 주제의 베트남어 뉴스를 찾아 읽기 연습을 더 해 보세요.", newsSearch: "Google 뉴스 검색", vnexpressSearch: "VnExpress 검색", tuoitreSearch: "Tuổi Trẻ 검색", searchAudio: "이 주제의 베트남어 듣기 영상을 검색하세요:", optionalPronunciation: "선택 발음 학습 자료", pronunciationTitle: "베트남어 발음 추가 연습", pronunciationDescription: "선택 가능한 외부 학습 자료예요. 영상이 열리지 않아도 이 페이지에서 A1 학습을 계속할 수 있어요.", pronunciationLink: "YouTube에서 발음 자료 보기", holidayToday: "베트남 기념일 · 오늘", holidayNext: "다가오는 베트남 기념일", holidayTodayTitle: "오늘의 베트남 기념일: ", holidayNextTitle: "다가오는 날: ", holidayDate: "날짜", holidayFact: "알고 계셨나요?", holidayVocabulary: "베트남어 어휘", holidayTranslate: "문화 설명 번역하기" },
  es: { linkedinProfile: "Ver el perfil de LinkedIn de Mimi ↗", newsPracticeTitle: "Más práctica con artículos de noticias", newsPracticeNote: "Busca noticias en vietnamita sobre este tema para practicar la lectura.", newsSearch: "Buscar en Google News", vnexpressSearch: "Buscar en VnExpress", tuoitreSearch: "Buscar en Tuổi Trẻ", searchAudio: "Busca un video de comprensión auditiva en vietnamita sobre", optionalPronunciation: "RECURSO OPCIONAL DE PRONUNCIACIÓN", pronunciationTitle: "Más práctica de pronunciación vietnamita", pronunciationDescription: "Recurso externo opcional. Si el video no se abre, puedes seguir estudiando A1 en esta página.", pronunciationLink: "Ver recurso de pronunciación en YouTube", holidayToday: "FESTIVIDAD VIETNAMITA · HOY", holidayNext: "PRÓXIMA FESTIVIDAD EN VIETNAM", holidayTodayTitle: "Hoy en Vietnam: ", holidayNextTitle: "Próximamente: ", holidayDate: "Fecha", holidayFact: "¿Sabías que…?", holidayVocabulary: "Vocabulario vietnamita", holidayTranslate: "Traducir esta nota cultural" },
  ar: { linkedinProfile: "عرض ملف Mimi على LinkedIn ↗", newsPracticeTitle: "مقالات إخبارية إضافية", newsPracticeNote: "ابحث عن أخبار باللغة الفيتنامية حول هذا الموضوع لمزيد من تدريب القراءة.", newsSearch: "ابحث في Google News", vnexpressSearch: "ابحث في VnExpress", tuoitreSearch: "ابحث في Tuổi Trẻ", searchAudio: "ابحث عن فيديو للاستماع باللغة الفيتنامية حول", optionalPronunciation: "مورد اختياري للنطق", pronunciationTitle: "تدريب إضافي على نطق الفيتنامية", pronunciationDescription: "تدريب خارجي اختياري. إذا لم يفتح الفيديو، يمكنك متابعة تعلم A1 على هذه الصفحة.", pronunciationLink: "شاهد مورد النطق على YouTube", holidayToday: "مناسبة فيتنامية · اليوم", holidayNext: "المناسبة الفيتنامية القادمة", holidayTodayTitle: "اليوم في فيتنام: ", holidayNextTitle: "قريباً: ", holidayDate: "التاريخ", holidayFact: "هل تعلم؟", holidayVocabulary: "مفردات فيتنامية", holidayTranslate: "ترجم هذه المعلومة الثقافية" },
};
Object.entries(additionalUiTranslations).forEach(([language, translations]) => {
  Object.assign(uiTranslations[language], translations);
});

const featureUiTranslations = {
  en: {
    themeToDark: "Switch to dark mode", themeToLight: "Switch to light mode", cursorLabel: "Cursor style",
    cursorHeart: "💗 Pink heart", cursorFlag: "🇻🇳 Vietnam flag", cursorLotus: "🪷 Pink lotus",
    appearanceSettings: "Display preferences", appearanceNote: "Text size · background",
    readerFontLabel: "Text size across the page", surfaceLabel: "Page background",
    surfaceBlue: "Soft blue", surfacePink: "Soft pink", surfaceOrange: "Peach", surfaceBeige: "Warm beige",
    plannerKicker: "YOUR PERSONAL STUDY PLAN", plannerTitle: "What brings you to Vietnamese?",
    plannerGoal: "Learning goal", plannerLevel: "Current level", plannerDays: "Study sessions per week", plannerMinutes: "Minutes per session",
    goalTravel: "Travel and everyday conversation", goalFamily: "Talk with family or partner", goalWork: "Work or study", goalLiving: "Live in Vietnam", goalCulture: "Culture, films and personal interest", goalExam: "Prepare for a Vietnamese exam",
    sessions2: "2 sessions", sessions3: "3 sessions", sessions4: "4 sessions", sessions5: "5 sessions", sessions7: "Every day",
    minutes15: "15 minutes", minutes20: "20 minutes", minutes30: "30 minutes", minutes45: "45 minutes", minutes60: "60 minutes",
    plannerSubmit: "Create my study plan", planResult: "Your suggested path", planFocus: "Focus", planPath: "Study from {start} toward {target}: about {lessons} lessons ({hours} focused hours). At your pace, that is roughly {weeks} weeks, around {date}.",
    planDisclaimer: "This is a study estimate, not a guaranteed fluency date. Your pace may change as you learn.",
    aiPromptLabel: "Prompt to ask an AI for advice", aiCopy: "Copy prompt", aiCopied: "Prompt copied. Paste it into ChatGPT or Gemini.", aiCopyError: "Could not copy automatically. Select and copy the prompt above.",
    focusTravel: "greetings, directions, transport, ordering food and everyday conversation",
    focusFamily: "introductions, family, feelings, daily routines and warm conversation",
    focusWork: "professional communication, clear explanations, meetings, reading and presenting opinions",
    focusLiving: "daily services, housing, healthcare, shopping, community and practical conversation",
    focusCulture: "Vietnamese food, celebrations, customs, films, stories and cultural vocabulary",
    focusExam: "balanced reading, listening, speaking, writing, vocabulary and grammar practice",
    feedbackOverline: "YOU COMPLETED 100% OF THIS COURSE", feedbackTitle: "Share your feedback",
    feedbackIntro: "Congratulations on finishing the course! Tell Mimi what you liked and what could be improved.",
    feedbackName: "Your name", feedbackRating: "How would you rate this course?", feedbackChoose: "Choose a rating",
    feedbackExcellent: "Excellent", feedbackGood: "Good", feedbackOkay: "Okay", feedbackImprove: "Needs improvement", feedbackPoor: "Not for me",
    feedbackMessage: "Your feedback", feedbackPlaceholder: "What was helpful? What should we improve?",
    feedbackPrivacy: "Your feedback is saved only on this device. This page does not send your name or comments to anyone.",
    feedbackSubmit: "Save feedback", feedbackSaved: "Thank you, {name}! Your feedback has been saved on this device.",
  },
  "zh-CN": {
    themeToDark: "切换到深色模式", themeToLight: "切换到浅色模式", cursorLabel: "鼠标样式",
    cursorHeart: "💗 粉色爱心", cursorFlag: "🇻🇳 越南国旗", cursorLotus: "🪷 粉色莲花",
    appearanceSettings: "显示设置", appearanceNote: "字号 · 背景",
    readerFontLabel: "全页面文字大小", surfaceLabel: "页面背景",
    surfaceBlue: "柔和蓝", surfacePink: "柔和粉", surfaceOrange: "蜜桃色", surfaceBeige: "暖米色",
    plannerKicker: "为你定制的学习计划", plannerTitle: "你为什么学习越南语？",
    plannerGoal: "学习目标", plannerLevel: "当前水平", plannerDays: "每周学习次数", plannerMinutes: "每次学习分钟数",
    goalTravel: "旅行和日常交流", goalFamily: "与家人或伴侣交流", goalWork: "工作或学习", goalLiving: "在越南生活", goalCulture: "文化、电影和个人兴趣", goalExam: "准备越南语考试",
    sessions2: "每周2次", sessions3: "每周3次", sessions4: "每周4次", sessions5: "每周5次", sessions7: "每天",
    minutes15: "15分钟", minutes20: "20分钟", minutes30: "30分钟", minutes45: "45分钟", minutes60: "60分钟",
    plannerSubmit: "生成我的学习计划", planResult: "建议学习路径", planFocus: "重点", planPath: "从 {start} 学到 {target}：约 {lessons} 节课（{hours} 小时专注学习）。按当前安排约需 {weeks} 周，预计在 {date} 左右完成。",
    planDisclaimer: "这只是学习时间估算，并非保证达到流利的日期。学习进度可能会变化。",
    aiPromptLabel: "向 AI 咨询的提示词", aiCopy: "复制提示词", aiCopied: "提示词已复制，请粘贴到 ChatGPT 或 Gemini。", aiCopyError: "无法自动复制，请手动选择并复制上方提示词。",
    focusTravel: "问候、问路、交通、点餐和日常交流", focusFamily: "自我介绍、家庭、感受、日常生活和温馨交流",
    focusWork: "职场沟通、清晰表达、会议、阅读和观点陈述", focusLiving: "日常服务、住房、医疗、购物、社区和实用交流",
    focusCulture: "越南美食、节日、习俗、电影、故事和文化词汇", focusExam: "均衡练习阅读、听力、口语、写作、词汇和语法",
    feedbackOverline: "你已完成本课程的 100%", feedbackTitle: "分享你的反馈",
    feedbackIntro: "恭喜完成课程！告诉 Mimi 你喜欢什么，以及哪些内容可以改进。",
    feedbackName: "你的名字", feedbackRating: "你如何评价本课程？", feedbackChoose: "选择评分",
    feedbackExcellent: "非常好", feedbackGood: "很好", feedbackOkay: "一般", feedbackImprove: "需要改进", feedbackPoor: "不太适合我",
    feedbackMessage: "你的反馈", feedbackPlaceholder: "哪些内容有帮助？我们还可以改进什么？",
    feedbackPrivacy: "反馈仅保存在此设备上。本页面不会向他人发送你的姓名或评论。",
    feedbackSubmit: "保存反馈", feedbackSaved: "谢谢你，{name}！反馈已保存在此设备上。",
  },
  ja: {
    themeToDark: "ダークモードに切り替え", themeToLight: "ライトモードに切り替え", cursorLabel: "カーソルの種類",
    cursorHeart: "💗 ピンクのハート", cursorFlag: "🇻🇳 ベトナム国旗", cursorLotus: "🪷 ピンクの蓮",
    appearanceSettings: "表示設定", appearanceNote: "文字サイズ · 背景",
    readerFontLabel: "ページ全体の文字サイズ", surfaceLabel: "ページの背景色",
    surfaceBlue: "やさしい青", surfacePink: "やさしいピンク", surfaceOrange: "ピーチ", surfaceBeige: "あたたかいベージュ",
    plannerKicker: "あなたに合わせた学習プラン", plannerTitle: "ベトナム語を学ぶ目的は何ですか？",
    plannerGoal: "学習目標", plannerLevel: "現在のレベル", plannerDays: "週の学習回数", plannerMinutes: "1回の学習時間",
    goalTravel: "旅行・日常会話", goalFamily: "家族やパートナーとの会話", goalWork: "仕事・学業", goalLiving: "ベトナムでの生活", goalCulture: "文化・映画・趣味", goalExam: "ベトナム語試験の準備",
    sessions2: "週2回", sessions3: "週3回", sessions4: "週4回", sessions5: "週5回", sessions7: "毎日",
    minutes15: "15分", minutes20: "20分", minutes30: "30分", minutes45: "45分", minutes60: "60分",
    plannerSubmit: "学習プランを作成", planResult: "おすすめの学習ルート", planFocus: "重点", planPath: "{start}から{target}を目指します：約{lessons}レッスン（集中学習{hours}時間）。現在のペースでは約{weeks}週間、{date}ごろの予定です。",
    planDisclaimer: "これは学習時間の目安であり、流暢になる時期を保証するものではありません。進度は学習に応じて変わります。",
    aiPromptLabel: "AIに相談するためのプロンプト", aiCopy: "プロンプトをコピー", aiCopied: "コピーしました。ChatGPT または Gemini に貼り付けてください。", aiCopyError: "自動コピーできませんでした。上の文章を選択してコピーしてください。",
    focusTravel: "あいさつ、道案内、交通、注文、日常会話", focusFamily: "自己紹介、家族、気持ち、日課、親しい会話",
    focusWork: "仕事の会話、明確な説明、会議、読解、意見発表", focusLiving: "生活サービス、住居、医療、買い物、地域、実用会話",
    focusCulture: "ベトナム料理、祝日、習慣、映画、物語、文化語彙", focusExam: "読解、リスニング、会話、作文、語彙、文法を総合練習",
    feedbackOverline: "コースを100%修了しました", feedbackTitle: "感想を聞かせてください",
    feedbackIntro: "コース修了おめでとうございます！よかった点や改善してほしい点をMimiに教えてください。",
    feedbackName: "お名前", feedbackRating: "このコースを評価してください", feedbackChoose: "評価を選択",
    feedbackExcellent: "とても良い", feedbackGood: "良い", feedbackOkay: "普通", feedbackImprove: "改善が必要", feedbackPoor: "自分には合わない",
    feedbackMessage: "ご意見", feedbackPlaceholder: "役に立った点や、改善してほしい点を教えてください。",
    feedbackPrivacy: "感想はこの端末にのみ保存されます。名前やコメントが外部に送信されることはありません。",
    feedbackSubmit: "感想を保存", feedbackSaved: "{name}さん、ありがとうございます！感想をこの端末に保存しました。",
  },
  ko: {
    themeToDark: "다크 모드로 전환", themeToLight: "라이트 모드로 전환", cursorLabel: "커서 모양",
    cursorHeart: "💗 분홍 하트", cursorFlag: "🇻🇳 베트남 국기", cursorLotus: "🪷 분홍 연꽃",
    appearanceSettings: "화면 설정", appearanceNote: "글자 크기 · 배경",
    readerFontLabel: "페이지 전체 글자 크기", surfaceLabel: "페이지 배경",
    surfaceBlue: "부드러운 파랑", surfacePink: "부드러운 분홍", surfaceOrange: "피치", surfaceBeige: "따뜻한 베이지",
    plannerKicker: "나만의 학습 계획", plannerTitle: "베트남어를 배우는 목적이 무엇인가요?",
    plannerGoal: "학습 목표", plannerLevel: "현재 수준", plannerDays: "주당 학습 횟수", plannerMinutes: "한 번의 학습 시간",
    goalTravel: "여행과 일상 회화", goalFamily: "가족 또는 연인과 대화", goalWork: "업무 또는 학업", goalLiving: "베트남 거주", goalCulture: "문화, 영화와 취미", goalExam: "베트남어 시험 준비",
    sessions2: "주 2회", sessions3: "주 3회", sessions4: "주 4회", sessions5: "주 5회", sessions7: "매일",
    minutes15: "15분", minutes20: "20분", minutes30: "30분", minutes45: "45분", minutes60: "60분",
    plannerSubmit: "학습 계획 만들기", planResult: "추천 학습 경로", planFocus: "집중 분야", planPath: "{start}에서 {target}까지 학습해요. 약 {lessons}개 수업({hours}시간 집중 학습)이며, 현재 일정으로 약 {weeks}주, {date}경 완료할 수 있어요.",
    planDisclaimer: "학습 시간은 예상치이며 유창해지는 시기를 보장하지 않습니다. 학습 속도에 따라 달라질 수 있어요.",
    aiPromptLabel: "AI에게 조언을 구할 프롬프트", aiCopy: "프롬프트 복사", aiCopied: "복사했어요. ChatGPT 또는 Gemini에 붙여 넣으세요.", aiCopyError: "자동 복사에 실패했어요. 위 문구를 직접 선택해 복사하세요.",
    focusTravel: "인사, 길 묻기, 교통, 음식 주문과 일상 대화", focusFamily: "자기소개, 가족, 감정, 일상과 다정한 대화",
    focusWork: "직장 대화, 명확한 설명, 회의, 읽기와 의견 발표", focusLiving: "생활 서비스, 주거, 의료, 쇼핑, 지역사회와 실용 회화",
    focusCulture: "베트남 음식, 명절, 풍습, 영화, 이야기와 문화 어휘", focusExam: "읽기, 듣기, 말하기, 쓰기, 어휘와 문법을 균형 있게 연습",
    feedbackOverline: "강의를 100% 완료했어요", feedbackTitle: "수강 후기를 남겨 주세요",
    feedbackIntro: "강의 완료를 축하해요! 좋았던 점과 개선할 점을 Mimi에게 알려 주세요.",
    feedbackName: "이름", feedbackRating: "강의를 어떻게 평가하시나요?", feedbackChoose: "평점 선택",
    feedbackExcellent: "매우 좋음", feedbackGood: "좋음", feedbackOkay: "보통", feedbackImprove: "개선 필요", feedbackPoor: "나와 맞지 않음",
    feedbackMessage: "후기", feedbackPlaceholder: "도움이 된 점과 개선할 점을 적어 주세요.",
    feedbackPrivacy: "후기는 이 기기에만 저장됩니다. 이름과 의견은 외부로 전송되지 않습니다.",
    feedbackSubmit: "후기 저장", feedbackSaved: "고마워요, {name}님! 후기가 이 기기에 저장되었어요.",
  },
  es: {
    themeToDark: "Cambiar al modo oscuro", themeToLight: "Cambiar al modo claro", cursorLabel: "Estilo del cursor",
    cursorHeart: "💗 Corazón rosa", cursorFlag: "🇻🇳 Bandera de Vietnam", cursorLotus: "🪷 Loto rosa",
    appearanceSettings: "Preferencias de pantalla", appearanceNote: "Tamaño del texto · fondo",
    readerFontLabel: "Tamaño del texto de toda la página", surfaceLabel: "Fondo de la página",
    surfaceBlue: "Azul suave", surfacePink: "Rosa suave", surfaceOrange: "Melocotón", surfaceBeige: "Beige cálido",
    plannerKicker: "TU PLAN DE ESTUDIO PERSONAL", plannerTitle: "¿Para qué quieres aprender vietnamita?",
    plannerGoal: "Objetivo de aprendizaje", plannerLevel: "Nivel actual", plannerDays: "Sesiones por semana", plannerMinutes: "Minutos por sesión",
    goalTravel: "Viajes y conversación cotidiana", goalFamily: "Hablar con familiares o pareja", goalWork: "Trabajo o estudios", goalLiving: "Vivir en Vietnam", goalCulture: "Cultura, cine e intereses personales", goalExam: "Preparar un examen de vietnamita",
    sessions2: "2 sesiones", sessions3: "3 sesiones", sessions4: "4 sesiones", sessions5: "5 sesiones", sessions7: "Cada día",
    minutes15: "15 minutos", minutes20: "20 minutos", minutes30: "30 minutos", minutes45: "45 minutos", minutes60: "60 minutos",
    plannerSubmit: "Crear mi plan", planResult: "Ruta de estudio sugerida", planFocus: "Enfoque", planPath: "Estudia desde {start} hasta {target}: unas {lessons} lecciones ({hours} horas de estudio). A tu ritmo, serán aproximadamente {weeks} semanas, hasta {date}.",
    planDisclaimer: "Es una estimación, no una fecha garantizada para alcanzar la fluidez. El ritmo puede cambiar a medida que avances.",
    aiPromptLabel: "Instrucción para pedir consejos a una IA", aiCopy: "Copiar instrucción", aiCopied: "Instrucción copiada. Pégala en ChatGPT o Gemini.", aiCopyError: "No se pudo copiar. Selecciona y copia el texto de arriba.",
    focusTravel: "saludos, direcciones, transporte, pedir comida y conversación cotidiana", focusFamily: "presentaciones, familia, emociones, rutinas y conversaciones cercanas",
    focusWork: "comunicación profesional, explicaciones claras, reuniones, lectura y opiniones", focusLiving: "servicios, vivienda, salud, compras, comunidad y conversación práctica",
    focusCulture: "comida vietnamita, celebraciones, costumbres, películas, historias y vocabulario cultural", focusExam: "práctica equilibrada de lectura, comprensión auditiva, conversación, escritura, vocabulario y gramática",
    feedbackOverline: "HAS COMPLETADO EL 100% DEL CURSO", feedbackTitle: "Comparte tu opinión",
    feedbackIntro: "¡Felicidades por terminar el curso! Cuéntale a Mimi qué te gustó y qué se podría mejorar.",
    feedbackName: "Tu nombre", feedbackRating: "¿Cómo valorarías el curso?", feedbackChoose: "Elige una valoración",
    feedbackExcellent: "Excelente", feedbackGood: "Bueno", feedbackOkay: "Normal", feedbackImprove: "Necesita mejorar", feedbackPoor: "No es para mí",
    feedbackMessage: "Tu opinión", feedbackPlaceholder: "¿Qué te ayudó? ¿Qué deberíamos mejorar?",
    feedbackPrivacy: "La opinión solo se guarda en este dispositivo. La página no envía tu nombre ni tus comentarios a nadie.",
    feedbackSubmit: "Guardar opinión", feedbackSaved: "¡Gracias, {name}! Tu opinión se guardó en este dispositivo.",
  },
  ar: {
    themeToDark: "التبديل إلى الوضع الداكن", themeToLight: "التبديل إلى الوضع الفاتح", cursorLabel: "شكل المؤشر",
    cursorHeart: "💗 قلب وردي", cursorFlag: "🇻🇳 علم فيتنام", cursorLotus: "🪷 زهرة لوتس وردية",
    appearanceSettings: "إعدادات العرض", appearanceNote: "حجم النص · الخلفية",
    readerFontLabel: "حجم النص في الصفحة كاملة", surfaceLabel: "خلفية الصفحة",
    surfaceBlue: "أزرق هادئ", surfacePink: "وردي هادئ", surfaceOrange: "خوخي", surfaceBeige: "بيج دافئ",
    plannerKicker: "خطة التعلم الخاصة بك", plannerTitle: "لماذا تتعلم الفيتنامية؟",
    plannerGoal: "هدف التعلم", plannerLevel: "المستوى الحالي", plannerDays: "جلسات التعلم أسبوعياً", plannerMinutes: "دقائق لكل جلسة",
    goalTravel: "السفر والمحادثات اليومية", goalFamily: "التحدث مع العائلة أو الشريك", goalWork: "العمل أو الدراسة", goalLiving: "العيش في فيتنام", goalCulture: "الثقافة والأفلام والاهتمامات", goalExam: "الاستعداد لاختبار اللغة الفيتنامية",
    sessions2: "جلستان", sessions3: "3 جلسات", sessions4: "4 جلسات", sessions5: "5 جلسات", sessions7: "كل يوم",
    minutes15: "15 دقيقة", minutes20: "20 دقيقة", minutes30: "30 دقيقة", minutes45: "45 دقيقة", minutes60: "60 دقيقة",
    plannerSubmit: "أنشئ خطتي", planResult: "مسار التعلم المقترح", planFocus: "التركيز", planPath: "ادرس من {start} إلى {target}: نحو {lessons} درساً ({hours} ساعة دراسة مركزة). وفق جدولك، يستغرق ذلك نحو {weeks} أسبوعاً حتى {date}.",
    planDisclaimer: "هذا تقدير لوقت الدراسة وليس موعداً مضموناً للطلاقة. قد تتغير وتيرتك مع تقدم التعلم.",
    aiPromptLabel: "نص لطلب نصيحة من الذكاء الاصطناعي", aiCopy: "انسخ النص", aiCopied: "تم النسخ. الصقه في ChatGPT أو Gemini.", aiCopyError: "تعذر النسخ تلقائياً. حدد النص أعلاه وانسخه.",
    focusTravel: "التحيات، الاتجاهات، المواصلات، طلب الطعام والمحادثات اليومية", focusFamily: "التعريف بالنفس والعائلة والمشاعر والروتين والمحادثات الودية",
    focusWork: "التواصل المهني والشرح الواضح والاجتماعات والقراءة وعرض الآراء", focusLiving: "الخدمات والسكن والصحة والتسوق والمجتمع والمحادثات العملية",
    focusCulture: "الطعام الفيتنامي والاحتفالات والعادات والأفلام والقصص والمفردات الثقافية", focusExam: "تدريب متوازن على القراءة والاستماع والتحدث والكتابة والمفردات والقواعد",
    feedbackOverline: "أكملت 100٪ من هذه الدورة", feedbackTitle: "شاركنا رأيك",
    feedbackIntro: "تهانينا على إكمال الدورة! أخبر Mimi بما أعجبك وما الذي يمكن تحسينه.",
    feedbackName: "اسمك", feedbackRating: "كيف تقيّم هذه الدورة؟", feedbackChoose: "اختر التقييم",
    feedbackExcellent: "ممتاز", feedbackGood: "جيد", feedbackOkay: "مقبول", feedbackImprove: "يحتاج إلى تحسين", feedbackPoor: "لا يناسبني",
    feedbackMessage: "رأيك", feedbackPlaceholder: "ما الذي أفادك؟ وما الذي ينبغي تحسينه؟",
    feedbackPrivacy: "يُحفظ رأيك على هذا الجهاز فقط. لا ترسل الصفحة اسمك أو تعليقاتك إلى أي جهة.",
    feedbackSubmit: "حفظ الرأي", feedbackSaved: "شكراً لك يا {name}! تم حفظ رأيك على هذا الجهاز.",
  },
};
Object.entries(featureUiTranslations).forEach(([language, translations]) => {
  Object.assign(uiTranslations[language], translations);
});

const studyFeedbackTranslations = {
  en: {
    navFeedback: "Feedback",
    aiPromptTemplate: "Please create a realistic Vietnamese study plan using Learning Vietnamese with Mimi as my main resource. Website: {site}. Use its A1–C2 levels, lessons, vocabulary, reading, review, culture, and pronunciation guidance; tell me which parts of this site to study each week. My goal: {goal}. Current level: {current}; target: {target}. Time available: {days} sessions per week, {minutes} minutes per session. This site estimates about {lessons} remaining lessons, {hours} focused hours, or {weeks} weeks at this pace. Prioritize: {focus}. Give me a flexible weekly routine and milestones, use the website's lessons as the source, and do not guarantee fluency by a date.",
    siteUrlPending: "Public URL not available until the site is published; this page is currently opened as a local file.",
    feedbackWallKicker: "FEEDBACK · FICTIONAL PROFILES",
    feedbackWallTitle: "Learner feedback",
    feedbackWallBadge: "FICTIONAL PROFILES",
    feedbackWallIntro: "These two fictional learner profiles and comments are examples only, not reviews from real students.",
    demoProfileLabel: "Fictional profile · not a real student",
    demoRating: "5 out of 5 stars · fictional sample",
    demoFeedbackOne: "The short dialogues and pronunciation practice helped me feel more confident ordering food and asking for directions.",
    demoFeedbackTwo: "The longer readings and vocabulary reviews helped me connect ideas and explain my opinions more clearly.",
  },
  "zh-CN": {
    navFeedback: "学习反馈",
    aiPromptTemplate: "请以 Learning Vietnamese with Mimi 为主要学习资源，为我制定一份切实可行的越南语学习计划。网站：{site}。请根据网站提供的 A1–C2 级别、课程、词汇、阅读、复习、文化和发音内容，安排我每周具体学习哪些网页内容。我的目标：{goal}。当前水平：{current}；目标水平：{target}。可用时间：每周 {days} 次，每次 {minutes} 分钟。本网站估算按此进度还需约 {lessons} 节课、{hours} 小时专注学习或 {weeks} 周。重点：{focus}。请制定灵活的每周计划和阶段目标，以本网站的课程为依据，不要保证我会在某个日期达到流利水平。",
    siteUrlPending: "网站发布前暂无公开网址；当前页面是从本地文件打开的。",
    feedbackWallKicker: "学习反馈 · 虚构资料",
    feedbackWallTitle: "学习者反馈",
    feedbackWallBadge: "虚构资料",
    feedbackWallIntro: "以下两份学习者资料和评价均为虚构示例，并非真实学生的评价。",
    demoProfileLabel: "虚构资料 · 非真实学生",
    demoRating: "5 星 · 虚构示例",
    demoFeedbackOne: "简短对话和发音练习让我更有信心地点餐和问路。",
    demoFeedbackTwo: "较长的阅读材料和词汇复习帮助我联系不同观点，更清晰地表达意见。",
  },
  ja: {
    navFeedback: "学習者の声",
    aiPromptTemplate: "Learning Vietnamese with Mimi を主な教材として、現実的なベトナム語学習計画を作成してください。サイト：{site}。このサイトにあるA1～C2レベル、レッスン、語彙、読解、復習、文化、発音の内容を使い、毎週このサイトのどの内容を学ぶか具体的に提案してください。学習目的：{goal}。現在のレベル：{current}、目標レベル：{target}。学習時間：週{days}回、1回{minutes}分。このサイトの概算では、残り約{lessons}レッスン、集中学習{hours}時間、または現在のペースで約{weeks}週間です。重点：{focus}。サイト内の教材に沿った柔軟な週間予定と節目を提案し、特定の日までに流暢になると保証しないでください。",
    siteUrlPending: "サイト公開前のため公開URLはありません。現在はローカルファイルとして開いています。",
    feedbackWallKicker: "学習者の声 · 架空のプロフィール",
    feedbackWallTitle: "学習者からの感想",
    feedbackWallBadge: "架空プロフィール",
    feedbackWallIntro: "以下のプロフィールと感想は表示例として作成した架空の内容で、実際の受講生による評価ではありません。",
    demoProfileLabel: "架空のプロフィール · 実在の学習者ではありません",
    demoRating: "5つ星 · 架空のサンプル",
    demoFeedbackOne: "短い会話と発音練習のおかげで、食事を注文したり道を尋ねたりする自信がつきました。",
    demoFeedbackTwo: "長めの読解と語彙の復習で、考えを結びつけ、自分の意見をより明確に説明できるようになりました。",
  },
  ko: {
    navFeedback: "학습 후기",
    aiPromptTemplate: "Learning Vietnamese with Mimi를 주요 학습 자료로 삼아 현실적인 베트남어 학습 계획을 만들어 주세요. 웹사이트: {site}. 이 사이트의 A1–C2 레벨, 수업, 어휘, 읽기, 복습, 문화, 발음 자료를 활용해 매주 사이트에서 무엇을 공부할지 구체적으로 안내해 주세요. 학습 목표: {goal}. 현재 수준: {current}; 목표 수준: {target}. 학습 가능 시간: 주 {days}회, 회당 {minutes}분. 사이트의 추정치로는 현재 속도에서 약 {lessons}개 수업, 집중 학습 {hours}시간 또는 {weeks}주가 남았습니다. 중점 분야: {focus}. 사이트 수업을 기반으로 유연한 주간 계획과 점검 목표를 제안하고, 특정 날짜까지 유창해진다고 보장하지 마세요.",
    siteUrlPending: "사이트를 게시하기 전에는 공개 URL이 없습니다. 현재 페이지는 로컬 파일로 열려 있습니다.",
    feedbackWallKicker: "학습 후기 · 가상 프로필",
    feedbackWallTitle: "학습자 후기",
    feedbackWallBadge: "가상 프로필",
    feedbackWallIntro: "아래 두 프로필과 후기는 화면 예시를 위한 가상 내용이며 실제 학생의 후기가 아닙니다.",
    demoProfileLabel: "가상 프로필 · 실제 학생 아님",
    demoRating: "별점 5점 · 가상 예시",
    demoFeedbackOne: "짧은 대화와 발음 연습 덕분에 음식 주문과 길 묻기에 자신감이 생겼어요.",
    demoFeedbackTwo: "긴 읽기 자료와 어휘 복습을 통해 생각을 연결하고 의견을 더 명확하게 설명할 수 있었어요.",
  },
  es: {
    navFeedback: "Opiniones",
    aiPromptTemplate: "Crea un plan realista para estudiar vietnamita usando Learning Vietnamese with Mimi como recurso principal. Sitio web: {site}. Usa sus niveles A1–C2, lecciones, vocabulario, lecturas, repasos, cultura y orientación de pronunciación; indica qué partes de este sitio estudiar cada semana. Mi objetivo: {goal}. Nivel actual: {current}; nivel objetivo: {target}. Tiempo disponible: {days} sesiones por semana, {minutes} minutos por sesión. El sitio estima unas {lessons} lecciones pendientes, {hours} horas de estudio concentrado o {weeks} semanas a este ritmo. Prioriza: {focus}. Propón una rutina semanal flexible y metas intermedias basadas en las lecciones del sitio, sin garantizar fluidez para una fecha concreta.",
    siteUrlPending: "Aún no hay una URL pública porque el sitio no está publicado; esta página está abierta como archivo local.",
    feedbackWallKicker: "OPINIONES · PERFILES FICTICIOS",
    feedbackWallTitle: "Opiniones de estudiantes",
    feedbackWallBadge: "PERFILES FICTICIOS",
    feedbackWallIntro: "Estos dos perfiles y comentarios son ejemplos ficticios, no opiniones de estudiantes reales.",
    demoProfileLabel: "Perfil ficticio · no es un estudiante real",
    demoRating: "5 estrellas · ejemplo ficticio",
    demoFeedbackOne: "Los diálogos breves y la práctica de pronunciación me ayudaron a sentir más confianza al pedir comida y preguntar cómo llegar.",
    demoFeedbackTwo: "Las lecturas más largas y el repaso de vocabulario me ayudaron a relacionar ideas y explicar mis opiniones con más claridad.",
  },
  ar: {
    navFeedback: "آراء المتعلمين",
    aiPromptTemplate: "أنشئ خطة واقعية لتعلم الفيتنامية باستخدام Learning Vietnamese with Mimi كمصدر أساسي. الموقع: {site}. استخدم المستويات A1–C2 والدروس والمفردات والقراءة والمراجعة والثقافة وإرشادات النطق المتاحة فيه، وحدد ما ينبغي أن أدرسه من هذا الموقع كل أسبوع. هدفي: {goal}. مستواي الحالي: {current}؛ المستوى المستهدف: {target}. الوقت المتاح: {days} جلسات أسبوعياً، {minutes} دقيقة لكل جلسة. يقدّر الموقع أن المتبقي نحو {lessons} درساً أو {hours} ساعة دراسة مركزة أو {weeks} أسبوعاً بهذا الإيقاع. ركّز على: {focus}. اقترح جدولاً أسبوعياً مرناً ومراحل للتقدم بالاعتماد على دروس الموقع، ولا تضمن الطلاقة في تاريخ محدد.",
    siteUrlPending: "لا يوجد رابط عام قبل نشر الموقع؛ الصفحة مفتوحة حالياً كملف محلي.",
    feedbackWallKicker: "آراء المتعلمين · ملفات خيالية",
    feedbackWallTitle: "آراء المتعلمين",
    feedbackWallBadge: "ملفات افتراضية",
    feedbackWallIntro: "الملفان والتعليقان التاليان أمثلة خيالية لعرض التصميم وليسا آراء من طلاب حقيقيين.",
    demoProfileLabel: "ملف خيالي · ليس طالباً حقيقياً",
    demoRating: "5 نجوم · مثال خيالي",
    demoFeedbackOne: "ساعدتني الحوارات القصيرة وتدريبات النطق على الشعور بثقة أكبر عند طلب الطعام والسؤال عن الاتجاهات.",
    demoFeedbackTwo: "ساعدتني نصوص القراءة الأطول ومراجعة المفردات على ربط الأفكار وشرح آرائي بوضوح أكبر.",
  },
};
Object.entries(studyFeedbackTranslations).forEach(([language, translations]) => {
  Object.assign(uiTranslations[language], translations);
});

const translationTargets = { en: "en", "zh-CN": "zh-CN", ja: "ja", ko: "ko", es: "es", ar: "ar" };
let displayLanguage = "en";
try {
  const savedLanguage = localStorage.getItem("mimi-vietnamese-display-language");
  if (savedLanguage && uiTranslations[savedLanguage]) displayLanguage = savedLanguage;
} catch (error) {
  console.warn("Không thể đọc ngôn ngữ hiển thị đã lưu.", error);
}

let themeMode = "light";
let cursorStyle = "heart";
let surfaceMode = "beige";
let readerFontSize = 26;
try {
  const savedTheme = localStorage.getItem("mimi-vietnamese-theme");
  if (savedTheme === "light" || savedTheme === "dark") themeMode = savedTheme;
  const savedCursor = localStorage.getItem("mimi-vietnamese-cursor");
  if (["heart", "flag", "lotus"].includes(savedCursor)) cursorStyle = savedCursor;
  const savedSurface = localStorage.getItem("mimi-vietnamese-surface");
  if (["blue", "pink", "orange", "beige"].includes(savedSurface)) surfaceMode = savedSurface;
  const savedFontSize = Number(localStorage.getItem("mimi-vietnamese-font-size-v2"));
  if (Number.isFinite(savedFontSize) && savedFontSize >= 16 && savedFontSize <= 32) readerFontSize = savedFontSize;
} catch (error) {
  console.warn("Không thể đọc cài đặt giao diện đã lưu.", error);
}
document.documentElement.dataset.theme = themeMode;
document.documentElement.dataset.surface = surfaceMode;
document.documentElement.style.setProperty("--reader-font-size", `${readerFontSize}px`);
document.documentElement.style.setProperty("--page-font-scale", String(readerFontSize / 20));
let pageTextBaseSizes = new WeakMap();
const scaledPageTextElements = new Set();

function updatePageFontScale() {
  const scale = readerFontSize / 20;
  document.documentElement.style.setProperty("--reader-font-size", `${readerFontSize}px`);
  document.documentElement.style.setProperty("--page-font-scale", String(scale));
  const directlySizedText = [
    ".lesson-reading p", ".lesson-reading li", ".lesson-grammar p", ".lesson-grammar li",
    ".holiday-description", ".holiday-fact", ".holiday-vocabulary",
    ".review-panel > p:not(.review-skill-label)", ".about-copy p", ".about-copy li",
    ".feedback-intro", ".library-intro", ".study-plan-result p",
    ".vocabulary-card h3", ".vocabulary-card .vocabulary-translation",
    ".vocabulary-pattern", ".vocabulary-item strong", ".vocabulary-item span", ".vocabulary-item small",
  ].join(",");
  document.querySelectorAll("body *").forEach((element) => {
    if (element.closest("[aria-hidden='true'],svg,script,style")) return;
    const hasText = [...element.childNodes].some(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );
    if (!hasText && !element.matches("input,select,textarea")) return;
    if (element.matches(directlySizedText)) return;
    let baseSize = pageTextBaseSizes.get(element);
    if (baseSize === undefined) {
      const currentSize = Number.parseFloat(getComputedStyle(element).fontSize);
      const parent = element.parentElement;
      if (parent && getComputedStyle(element).fontSize === getComputedStyle(parent).fontSize) {
        let sizedAncestor = parent;
        while (sizedAncestor && !pageTextBaseSizes.has(sizedAncestor)) {
          sizedAncestor = sizedAncestor.parentElement;
        }
        baseSize = sizedAncestor
          ? pageTextBaseSizes.get(sizedAncestor)
          : currentSize;
      } else {
        baseSize = currentSize;
      }
      pageTextBaseSizes.set(element, baseSize);
    }
    element.style.setProperty("font-size", `${baseSize * scale}px`, "important");
    scaledPageTextElements.add(element);
  });
}

function refreshPageFontScaleForViewport() {
  scaledPageTextElements.forEach((element) => element.style.removeProperty("font-size"));
  scaledPageTextElements.clear();
  pageTextBaseSizes = new WeakMap();
  updatePageFontScale();
}

const cursorArtwork = {
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16 27S4 19.8 4 11.8C4 5.2 12.2 3.5 16 9c3.8-5.5 12-3.8 12 2.8C28 19.8 16 27 16 27Z" fill="#f47aa5" stroke="#c64d78" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  flag: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="3" y="6" width="26" height="20" rx="3" fill="#da251d"/><path d="m16 8.5 2.05 5.2h5.6l-4.5 3.25 1.7 5.25L16 19l-4.85 3.2 1.7-5.25-4.5-3.25h5.6z" fill="#ffdf00"/></svg>',
  lotus: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16 24C10.4 19.2 10.6 11.3 16 4c5.4 7.3 5.6 15.2 0 20Z" fill="#ffd9e7" stroke="#c96a91" stroke-width="1"/><path d="M15.5 23.5C8 21.3 5 15.5 6 9.8c6.2 1.2 10 5.8 10.6 12.3Z" fill="#f6a9c5" stroke="#c96a91" stroke-width="1"/><path d="M16.5 23.5C24 21.3 27 15.5 26 9.8c-6.2 1.2-10 5.8-10.6 12.3Z" fill="#f6a9c5" stroke="#c96a91" stroke-width="1"/><path d="M14.7 24C7 23.4 3.5 19.5 3 15.2c5.4-.2 10 2.7 12.3 8Z" fill="#ee8fb3" stroke="#c96a91" stroke-width=".8"/><path d="M17.3 24c7.7-.6 11.2-4.5 11.7-8.8-5.4-.2-10 2.7-12.3 8Z" fill="#ee8fb3" stroke="#c96a91" stroke-width=".8"/><path d="M5.5 23.2c3.1-2.3 6.8-2.5 10.5.1-3.5 3.5-7.4 3.7-10.5-.1ZM26.5 23.2c-3.1-2.3-6.8-2.5-10.5.1 3.5 3.5 7.4 3.7 10.5-.1Z" fill="#f8bfd2" stroke="#c96a91" stroke-width=".8"/><ellipse cx="16" cy="24" rx="2.1" ry="1.3" fill="#f4cf77"/></svg>',
};

function applyCursorStyle() {
  const artwork = encodeURIComponent(cursorArtwork[cursorStyle]);
  document.documentElement.style.setProperty(
    "--cursor-image",
    `url("data:image/svg+xml,${artwork}") 16 16, auto`,
  );
  document.querySelector("#cursor-style").value = cursorStyle;
}

function updateAppearanceControls() {
  const dark = themeMode === "dark";
  const toggle = document.querySelector("#appearance-toggle");
  toggle.setAttribute("aria-label", t(dark ? "themeToLight" : "themeToDark"));
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.title = t(dark ? "themeToLight" : "themeToDark");
  document.querySelector("#appearance-icon").textContent = dark ? "☀️" : "🌙";
  document.querySelector("#cursor-style").setAttribute("aria-label", t("cursorLabel"));
  document.querySelector('#cursor-style [value="heart"]').textContent = t("cursorHeart");
  document.querySelector('#cursor-style [value="flag"]').textContent = t("cursorFlag");
  document.querySelector('#cursor-style [value="lotus"]').textContent = t("cursorLotus");
}

function applyFeedbackTranslations() {
  document.querySelector("#course-feedback-overline").textContent = t("feedbackOverline");
  document.querySelector("#course-feedback-title").firstChild.textContent = t("feedbackTitle") + " ";
  document.querySelector("#feedback-intro").textContent = t("feedbackIntro");
  document.querySelector('label[for="feedback-name"] span').textContent = t("feedbackName");
  document.querySelector('label[for="feedback-rating"] span').textContent = t("feedbackRating");
  document.querySelector('label[for="feedback-message"] span').textContent = t("feedbackMessage");
  document.querySelector("#feedback-rating option[value='']").textContent = t("feedbackChoose");
  ["Excellent", "Good", "Okay", "Improve", "Poor"].forEach((ratingKey, index) => {
    const stars = ["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"][index];
    document.querySelector(`#feedback-rating option[value="${5 - index}"]`).textContent = `${stars} · ${t(`feedback${ratingKey}`)}`;
  });
  document.querySelector("#feedback-message").placeholder = t("feedbackPlaceholder");
  document.querySelector("#feedback-privacy").textContent = t("feedbackPrivacy");
  document.querySelector("#feedback-submit").textContent = t("feedbackSubmit");
  document.querySelector("#feedback-wall-overline").textContent = t("feedbackWallKicker");
  document.querySelector("#feedback-wall-title").textContent = t("feedbackWallTitle");
  document.querySelector("#feedback-demo-badge").textContent = t("feedbackWallBadge");
  document.querySelector("#feedback-wall-intro").textContent = t("feedbackWallIntro");
  document.querySelectorAll(".demo-profile-label").forEach((label) => {
    label.textContent = t("demoProfileLabel");
  });
  document.querySelector("#demo-feedback-one").textContent = t("demoFeedbackOne");
  document.querySelector("#demo-feedback-two").textContent = t("demoFeedbackTwo");
  document.querySelector("#demo-level-one").textContent = `A1 · 100%`;
  document.querySelector("#demo-level-two").textContent = `B1 · 100%`;
  document.querySelectorAll(".learner-feedback-rating").forEach((rating) => {
    rating.setAttribute("aria-label", t("demoRating"));
  });
  updateAppearanceControls();
}

function t(key) {
  return uiTranslations[displayLanguage]?.[key] || uiTranslations.en[key] || key;
}

function createStudyPlan() {
  const goal = document.querySelector("#study-goal").value;
  const startLevel = document.querySelector("#study-start-level").value;
  const daysPerWeek = Number(document.querySelector("#study-days").value);
  const minutesPerSession = Number(document.querySelector("#study-minutes").value);
  const levelOrder = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const goalTargets = { travel: "a2", family: "b1", work: "b2", living: "b1", culture: "b1", exam: "b2" };
  const startIndex = levelOrder.indexOf(startLevel);
  const targetIndex = Math.max(startIndex, levelOrder.indexOf(goalTargets[goal]));
  const levels = levelOrder.slice(startIndex, targetIndex + 1);
  const plannedLessons = levels.reduce((total, level) => {
    const completed = loadProgress(level).completed.length;
    return total + Math.max(0, 24 - completed);
  }, 0);
  const totalMinutes = plannedLessons * 20;
  const totalHours = Math.max(1, Math.round(totalMinutes / 60));
  const studyWeeks = Math.max(1, Math.ceil(totalMinutes / (daysPerWeek * minutesPerSession)));
  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + studyWeeks * 7);
  const dateLabel = new Intl.DateTimeFormat(displayLanguage, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(estimatedDate);
  const targetLevel = levelOrder[targetIndex];
  const goalLabel = t(`goal${goal[0].toUpperCase()}${goal.slice(1)}`);
  const planPath = t("planPath")
    .replace("{start}", `${startLevel.toUpperCase()} (${levelLabels[displayLanguage]?.[startLevel] || levelLabels.en[startLevel]})`)
    .replace("{target}", `${targetLevel.toUpperCase()} (${levelLabels[displayLanguage]?.[targetLevel] || levelLabels.en[targetLevel]})`)
    .replace("{lessons}", String(plannedLessons))
    .replace("{hours}", String(totalHours))
    .replace("{weeks}", String(studyWeeks))
    .replace("{date}", dateLabel);
  const focus = t(`focus${goal[0].toUpperCase()}${goal.slice(1)}`);
  document.querySelector("#study-plan-summary").textContent = planPath;
  document.querySelector("#study-plan-focus").textContent = `${t("planFocus")}: ${focus}.`;
  document.querySelector("#study-plan-disclaimer").textContent = t("planDisclaimer");
  const pageUrl = new URL(window.location.href);
  const isPublicUrl = /^https?:$/.test(pageUrl.protocol)
    && !["localhost", "127.0.0.1", "::1"].includes(pageUrl.hostname)
    && !pageUrl.hostname.endsWith(".local");
  const siteUrl = isPublicUrl ? new URL(".", pageUrl).href : t("siteUrlPending");
  const promptValues = {
    site: siteUrl,
    goal: goalLabel,
    current: `${startLevel.toUpperCase()} (${levelLabels[displayLanguage]?.[startLevel] || levelLabels.en[startLevel]})`,
    target: `${targetLevel.toUpperCase()} (${levelLabels[displayLanguage]?.[targetLevel] || levelLabels.en[targetLevel]})`,
    days: String(daysPerWeek),
    minutes: String(minutesPerSession),
    lessons: String(plannedLessons),
    hours: String(totalHours),
    weeks: String(studyWeeks),
    focus,
  };
  document.querySelector("#study-ai-prompt").value = t("aiPromptTemplate")
    .replace(/\{(\w+)\}/g, (placeholder, key) => promptValues[key] ?? placeholder);
  document.querySelector("#study-plan-result").hidden = false;
}

function translationUrl(text) {
  const target = translationTargets[displayLanguage] || "en";
  return `https://translate.google.com/?sl=vi&tl=${target}&text=${encodeURIComponent(text)}&op=translate`;
}

const holidayIllustrations = {
  "new-year": { icon: "🎆", label: "NĂM MỚI", background: "#fff2dd", accent: "#e7a14f" },
  "women-day": { icon: "🌷", label: "8 THÁNG 3", background: "#fff0f3", accent: "#d97f9b" },
  "reunification-day": { icon: "🇻🇳", label: "30 THÁNG 4", background: "#fff0ec", accent: "#cf6659" },
  "labour-day": { icon: "🛠️", label: "NGÀY LAO ĐỘNG", background: "#f4f1e7", accent: "#ae8e57" },
  "children-day": { icon: "🎈", label: "NGÀY THIẾU NHI", background: "#eff7f0", accent: "#6d9d7c" },
  "national-day": { icon: "🇻🇳", label: "QUỐC KHÁNH", background: "#fff0ec", accent: "#cf6659" },
  "vietnamese-women-day": { icon: "🌺", label: "20 THÁNG 10", background: "#fff0f3", accent: "#d97f9b" },
  "teachers-day": { icon: "📚", label: "20 THÁNG 11", background: "#f0f5eb", accent: "#78946e" },
  christmas: { icon: "🎄", label: "GIÁNG SINH", background: "#eef6ef", accent: "#68936f" },
  tet: { icon: "🧧", label: "TẾT NGUYÊN ĐÁN", background: "#fff1e5", accent: "#db8055" },
  "hung-kings": { icon: "🏛️", label: "GIỖ TỔ HÙNG VƯƠNG", background: "#f5f1e7", accent: "#a79362" },
  "mid-autumn": { icon: "🏮", label: "TẾT TRUNG THU", background: "#fff4df", accent: "#d09b4a" },
};

const vietnameseHolidays = [
  { id: "new-year", name: "Tết Dương lịch", solar: [1, 1], emoji: "🎆✨", description: "Ngày đầu tiên của năm dương lịch, thường là dịp mọi người nghỉ ngơi, gặp gỡ gia đình và chúc nhau một năm mới tốt lành.", fact: "Tết Dương lịch và Tết Nguyên đán là hai dịp năm mới khác nhau ở Việt Nam.", vocabulary: "năm mới — new year; lời chúc — greeting" },
  { id: "women-day", name: "Ngày Quốc tế Phụ nữ", solar: [3, 8], emoji: "🌷💐", description: "Ngày 8 tháng 3 được nhiều người ở Việt Nam kỷ niệm bằng lời chúc và hoạt động tôn vinh phụ nữ.", fact: "Đây là ngày kỷ niệm quốc tế; cách tổ chức có thể khác nhau giữa các gia đình và cộng đồng.", vocabulary: "phụ nữ — women; bình đẳng — equality" },
  { id: "reunification-day", name: "Ngày Giải phóng miền Nam, thống nhất đất nước", solar: [4, 30], emoji: "🇻🇳🎉", description: "Ngày 30 tháng 4 đánh dấu sự kiện năm 1975 và được tưởng niệm như một cột mốc thống nhất đất nước.", fact: "Tên gọi thường ngày là ngày 30 tháng 4; đây là một trong những ngày nghỉ lễ quốc gia tại Việt Nam.", vocabulary: "thống nhất — reunification; lịch sử — history" },
  { id: "labour-day", name: "Ngày Quốc tế Lao động", solar: [5, 1], emoji: "🌼🛠️", description: "Ngày 1 tháng 5 tôn vinh người lao động. Ngày này thường nằm liền sau dịp nghỉ lễ 30 tháng 4.", fact: "Lịch nghỉ thực tế có thể được điều chỉnh theo thông báo chính thức từng năm.", vocabulary: "người lao động — workers; quyền lợi — rights and benefits" },
  { id: "children-day", name: "Ngày Quốc tế Thiếu nhi", solar: [6, 1], emoji: "🎈🧸", description: "Ngày 1 tháng 6 thường có hoạt động dành cho trẻ em, như vui chơi, gặp gỡ và nhận quà.", fact: "Đây là dịp văn hóa được nhiều gia đình và tổ chức hưởng ứng, không phải ngày nghỉ lễ toàn quốc.", vocabulary: "thiếu nhi — children; vui chơi — to play" },
  { id: "national-day", name: "Quốc khánh Việt Nam", solar: [9, 2], emoji: "🇻🇳✨", description: "Ngày 2 tháng 9 là Quốc khánh Việt Nam, gắn với sự kiện Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Hà Nội năm 1945.", fact: "Tuyên ngôn Độc lập được công bố tại Quảng trường Ba Đình.", vocabulary: "Quốc khánh — National Day; độc lập — independence" },
  { id: "vietnamese-women-day", name: "Ngày Phụ nữ Việt Nam", solar: [10, 20], emoji: "🌺💌", description: "Ngày 20 tháng 10 là dịp tôn vinh phụ nữ Việt Nam và thường được kỷ niệm tại trường học, cơ quan và gia đình.", fact: "Ngày này gắn với sự ra đời của tổ chức Hội Liên hiệp Phụ nữ Việt Nam vào năm 1930.", vocabulary: "tôn vinh — to honour; phụ nữ Việt Nam — Vietnamese women" },
  { id: "teachers-day", name: "Ngày Nhà giáo Việt Nam", solar: [11, 20], emoji: "📚🌻", description: "Ngày 20 tháng 11 là dịp học sinh, sinh viên bày tỏ lòng biết ơn với thầy cô giáo.", fact: "Nhiều trường tổ chức hoạt động tri ân, biểu diễn văn nghệ hoặc gặp gỡ cựu giáo viên.", vocabulary: "thầy cô — teachers; biết ơn — grateful" },
  { id: "christmas", name: "Lễ Giáng sinh", solar: [12, 25], emoji: "🎄⭐", description: "Giáng sinh được các cộng đồng Kitô giáo mừng lễ và cũng được nhiều người khác tham gia các hoạt động trang trí, gặp gỡ.", fact: "Ở nhiều thành phố, không khí lễ hội có thể bắt đầu từ tối 24 tháng 12.", vocabulary: "Giáng sinh — Christmas; trang trí — to decorate" },
  { id: "tet", name: "Tết Nguyên đán", lunar: [1, 1], emoji: "🌸🧧", description: "Tết Nguyên đán là dịp năm mới theo âm lịch quan trọng nhất trong văn hóa Việt Nam. Gia đình thường sum họp, thăm hỏi và chúc nhau năm mới.", fact: "Hoa mai thường gắn với Tết ở miền Nam, còn hoa đào phổ biến ở miền Bắc; phong tục mỗi nhà có thể khác nhau.", vocabulary: "sum họp — reunion; lì xì — lucky money; chúc Tết — to give New Year wishes" },
  { id: "hung-kings", name: "Ngày Giỗ Tổ Hùng Vương", lunar: [3, 10], emoji: "🥁🏛️", description: "Ngày mùng 10 tháng 3 âm lịch tưởng nhớ các Vua Hùng, những nhân vật gắn với truyền thuyết về buổi đầu dựng nước.", fact: "Lễ hội chính được tổ chức tại Đền Hùng, tỉnh Phú Thọ; nhiều người cũng làm lễ tưởng niệm tại địa phương.", vocabulary: "giỗ Tổ — ancestral commemoration; tưởng nhớ — to remember" },
  { id: "mid-autumn", name: "Tết Trung thu", lunar: [8, 15], emoji: "🏮🌕", description: "Tết Trung thu diễn ra vào rằm tháng 8 âm lịch. Trẻ em thường rước đèn, xem múa lân và thưởng thức bánh trung thu.", fact: "Trung thu còn được gọi là Tết trông trăng và thường là dịp gia đình dành thời gian cho trẻ nhỏ.", vocabulary: "rằm — full-moon day; rước đèn — lantern procession; bánh trung thu — mooncake" },
];

function vietnameseJulianDay(day, month, year) {
  const adjustment = Math.floor((14 - month) / 12);
  const adjustedYear = year + 4800 - adjustment;
  const adjustedMonth = month + 12 * adjustment - 3;
  return day + Math.floor((153 * adjustedMonth + 2) / 5) + 365 * adjustedYear
    + Math.floor(adjustedYear / 4) - Math.floor(adjustedYear / 100)
    + Math.floor(adjustedYear / 400) - 32045;
}

function vietnameseNewMoonDay(k, timeZone = 7) {
  const t = k / 1236.85;
  const t2 = t * t;
  const t3 = t2 * t;
  const dr = Math.PI / 180;
  const jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * t2 - 0.000000155 * t3;
  const m = 359.2242 + 29.10535608 * k - 0.0000333 * t2 - 0.00000347 * t3;
  const mPrime = 306.0253 + 385.81691806 * k + 0.0107306 * t2 + 0.00001236 * t3;
  const f = 21.2964 + 390.67050646 * k - 0.0016528 * t2 - 0.00000239 * t3;
  let correction = (0.1734 - 0.000393 * t) * Math.sin(m * dr)
    + 0.0021 * Math.sin(2 * m * dr) - 0.4068 * Math.sin(mPrime * dr)
    + 0.0161 * Math.sin(2 * mPrime * dr) - 0.0004 * Math.sin(3 * mPrime * dr)
    + 0.0104 * Math.sin(2 * f * dr) - 0.0051 * Math.sin((m + mPrime) * dr)
    - 0.0074 * Math.sin((m - mPrime) * dr) + 0.0004 * Math.sin((2 * f + m) * dr)
    - 0.0004 * Math.sin((2 * f - m) * dr) - 0.0006 * Math.sin((2 * f + mPrime) * dr)
    + 0.0010 * Math.sin((2 * f - mPrime) * dr) + 0.0005 * Math.sin((2 * mPrime + m) * dr);
  const deltaT = t < -11
    ? 0.001 + 0.000839 * t + 0.0002261 * t2 - 0.00000845 * t3 - 0.000000081 * t * t3
    : -0.000278 + 0.000265 * t + 0.000262 * t2;
  return Math.floor(jd1 + correction - deltaT + 0.5 + timeZone / 24);
}

function vietnameseSunLongitude(dayNumber, timeZone = 7) {
  const t = (dayNumber - 2451545.0) / 36525;
  const t2 = t * t;
  const dr = Math.PI / 180;
  const meanAnomaly = 357.52910 + 35999.05030 * t - 0.0001559 * t2 - 0.00000048 * t * t2;
  const meanLongitude = 280.46645 + 36000.76983 * t + 0.0003032 * t2;
  const equation = (1.914600 - 0.004817 * t - 0.000014 * t2) * Math.sin(dr * meanAnomaly)
    + (0.019993 - 0.000101 * t) * Math.sin(2 * dr * meanAnomaly)
    + 0.000290 * Math.sin(3 * dr * meanAnomaly);
  let longitude = (meanLongitude + equation) * dr;
  longitude -= 2 * Math.PI * Math.floor(longitude / (2 * Math.PI));
  return longitude;
}

function vietnameseSunLongitudeSector(dayNumber, timeZone = 7) {
  return Math.floor(vietnameseSunLongitude(dayNumber - 0.5 - timeZone / 24, timeZone) / Math.PI * 6);
}

function vietnameseLunarMonthEleven(year, timeZone = 7) {
  const offset = vietnameseJulianDay(31, 12, year) - 2415021;
  let k = Math.floor(offset / 29.530588853);
  let newMoon = vietnameseNewMoonDay(k, timeZone);
  if (vietnameseSunLongitudeSector(newMoon, timeZone) >= 9) newMoon = vietnameseNewMoonDay(k - 1, timeZone);
  return newMoon;
}

function vietnameseLeapMonthOffset(monthEleven, timeZone = 7) {
  const k = Math.floor(0.5 + (monthEleven - 2415021.076998695) / 29.530588853);
  let lastSector = 0;
  let monthOffset = 1;
  let sector = vietnameseSunLongitudeSector(vietnameseNewMoonDay(k + monthOffset, timeZone), timeZone);
  while (sector !== lastSector && monthOffset < 14) {
    lastSector = sector;
    monthOffset += 1;
    sector = vietnameseSunLongitudeSector(vietnameseNewMoonDay(k + monthOffset, timeZone), timeZone);
  }
  return monthOffset - 1;
}

function vietnameseLunarDate(date) {
  const timeZone = 7;
  const dayNumber = vietnameseJulianDay(date.getDate(), date.getMonth() + 1, date.getFullYear());
  const k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = vietnameseNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) monthStart = vietnameseNewMoonDay(k, timeZone);
  let monthEleven = vietnameseLunarMonthEleven(date.getFullYear(), timeZone);
  let nextMonthEleven = monthEleven;
  let lunarYear;
  if (monthEleven >= monthStart) {
    lunarYear = date.getFullYear();
    monthEleven = vietnameseLunarMonthEleven(date.getFullYear() - 1, timeZone);
  } else {
    lunarYear = date.getFullYear() + 1;
    nextMonthEleven = vietnameseLunarMonthEleven(date.getFullYear() + 1, timeZone);
  }
  const lunarDay = dayNumber - monthStart + 1;
  const difference = Math.floor((monthStart - monthEleven) / 29);
  let lunarMonth = difference + 11;
  let leapMonth = false;
  if (nextMonthEleven - monthEleven > 365) {
    const leapMonthDifference = vietnameseLeapMonthOffset(monthEleven, timeZone);
    if (difference >= leapMonthDifference) {
      lunarMonth = difference + 10;
      if (difference === leapMonthDifference) leapMonth = true;
    }
  }
  if (lunarMonth > 12) lunarMonth -= 12;
  if (lunarMonth >= 11 && difference < 4) lunarYear -= 1;
  return { day: lunarDay, month: lunarMonth, year: lunarYear, leapMonth };
}

function vietnameseHolidaySchedule(year) {
  const holidays = vietnameseHolidays.filter((holiday) => holiday.solar).map((holiday) => ({
    ...holiday,
    date: new Date(year, holiday.solar[0] - 1, holiday.solar[1]),
  }));
  const lunarTargets = new Map(vietnameseHolidays.filter((holiday) => holiday.lunar).map((holiday) => [
    `${holiday.lunar[0]}-${holiday.lunar[1]}`, holiday,
  ]));
  for (let date = new Date(year, 0, 1); date.getFullYear() === year; date.setDate(date.getDate() + 1)) {
    const lunar = vietnameseLunarDate(date);
    const holiday = lunarTargets.get(`${lunar.month}-${lunar.day}`);
    if (holiday && !lunar.leapMonth) holidays.push({ ...holiday, date: new Date(date) });
  }
  return holidays.sort((first, second) => first.date - second.date);
}

function renderVietnamHoliday(currentDate = new Date()) {
  const vietnamDateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(currentDate);
  const vietnamDate = Object.fromEntries(vietnamDateParts.map((part) => [part.type, part.value]));
  const today = new Date(Number(vietnamDate.year), Number(vietnamDate.month) - 1, Number(vietnamDate.day));
  const schedule = vietnameseHolidaySchedule(today.getFullYear());
  const todaysHolidays = schedule.filter((holiday) => holiday.date.getTime() === today.getTime());
  const nextHoliday = todaysHolidays[0] || schedule.find((holiday) => holiday.date > today)
    || vietnameseHolidaySchedule(today.getFullYear() + 1)[0];
  const activeHolidays = todaysHolidays.length ? todaysHolidays : [nextHoliday];
  const isToday = todaysHolidays.length > 0;
  const names = activeHolidays.map((holiday) => holiday.name).join(" · ");
  const holidayDate = new Date(Date.UTC(nextHoliday.date.getFullYear(), nextHoliday.date.getMonth(), nextHoliday.date.getDate(), 12));
  const date = new Intl.DateTimeFormat(displayLanguage, {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(holidayDate);
  const description = activeHolidays.map((holiday) => holiday.description).join(" ");
  const facts = activeHolidays.map((holiday) => holiday.fact).join(" ");
  const vocabulary = activeHolidays.map((holiday) => holiday.vocabulary).join(" · ");
  const stage = document.querySelector("#holiday-stage");
  stage.classList.toggle("is-today", isToday);
  stage.dataset.holiday = nextHoliday.id;
  document.documentElement.dataset.vnHoliday = isToday ? nextHoliday.id : "none";
  document.querySelector("#holiday-kicker").textContent = t(isToday ? "holidayToday" : "holidayNext");
  document.querySelector("#holiday-title").textContent = `${t(isToday ? "holidayTodayTitle" : "holidayNextTitle")}${names}`;
  document.querySelector("#holiday-date").textContent = `${t("holidayDate")}: ${date}`;
  document.querySelector("#holiday-description").textContent = description;
  document.querySelector("#holiday-fact").textContent = `${t("holidayFact")} ${facts}`;
  document.querySelector("#holiday-vocabulary").textContent = `${t("holidayVocabulary")}: ${vocabulary}`;
  const translateLink = document.querySelector("#holiday-translate");
  translateLink.href = translationUrl(`${names}. ${description} ${facts} ${vocabulary}`);
  translateLink.textContent = t("holidayTranslate");
  const illustration = holidayIllustrations[nextHoliday.id] || holidayIllustrations["new-year"];
  document.querySelector(".holiday-decoration").innerHTML = `
    <svg class="holiday-illustration" viewBox="0 0 140 140" role="img" aria-label="${illustration.label}">
      <rect x="3" y="3" width="134" height="134" rx="24" fill="${illustration.background}" />
      <circle cx="70" cy="58" r="37" fill="#fff" opacity=".72" />
      <path d="m25 31 3 7 7 3-7 3-3 7-3-7-7-3 7-3zM112 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="${illustration.accent}" opacity=".72" />
      <text x="70" y="78" text-anchor="middle" font-size="49" font-family="Segoe UI Emoji, Noto Color Emoji, sans-serif">${illustration.icon}</text>
      <text x="70" y="116" text-anchor="middle" fill="${illustration.accent}" font-size="9" font-family="Arial, sans-serif" font-weight="700" letter-spacing=".35">${illustration.label}</text>
    </svg>`;
}

function renderTranslationLink(text, label = t("translateLink")) {
  return `<a class="translate-link" href="${translationUrl(text)}" data-translation-text="${escapeHtml(text)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
}

function applyDisplayLanguage() {
  const languageSelect = document.querySelector("#display-language");
  languageSelect.value = displayLanguage;
  document.documentElement.lang = displayLanguage;
  document.documentElement.dir = displayLanguage === "ar" ? "rtl" : "ltr";
  applyFeedbackTranslations();
  document.querySelectorAll(".level-option").forEach((button) => {
    const level = button.dataset.level;
    button.querySelector("small").textContent = levelLabels[displayLanguage]?.[level] || levelLabels.en[level];
  });
  document.querySelector("#reader-font-size").value = String(readerFontSize);
  document.querySelector("#reader-font-value").value = `${readerFontSize}px`;
  document.querySelectorAll(".surface-option").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.surface === surfaceMode));
  });
  document.querySelector("#appearance-settings-title").textContent = t("appearanceSettings");
  document.querySelector("#appearance-settings-note").textContent = t("appearanceNote");
  document.querySelector("#reader-font-label").textContent = t("readerFontLabel");
  document.querySelector("#surface-color-label").textContent = t("surfaceLabel");
  document.querySelector("#surface-blue-label").textContent = t("surfaceBlue");
  document.querySelector("#surface-pink-label").textContent = t("surfacePink");
  document.querySelector("#surface-orange-label").textContent = t("surfaceOrange");
  document.querySelector("#surface-beige-label").textContent = t("surfaceBeige");
  document.querySelector("#study-planner-kicker").textContent = t("plannerKicker");
  document.querySelector("#study-planner-title").textContent = t("plannerTitle");
  document.querySelector("#study-goal-label").textContent = t("plannerGoal");
  document.querySelector("#study-level-label").textContent = t("plannerLevel");
  document.querySelector("#study-days-label").textContent = t("plannerDays");
  document.querySelector("#study-minutes-label").textContent = t("plannerMinutes");
  document.querySelector("#study-plan-submit").textContent = t("plannerSubmit");
  document.querySelector("#study-plan-result-title").textContent = t("planResult");
  document.querySelector("#study-ai-prompt-label").textContent = t("aiPromptLabel");
  document.querySelector("#study-ai-copy").textContent = t("aiCopy");
  document.querySelector("#study-ai-chatgpt").textContent = "ChatGPT ↗";
  document.querySelector("#study-ai-gemini").textContent = "Gemini ↗";
  const studyGoalOptions = ["travel", "family", "work", "living", "culture", "exam"];
  document.querySelectorAll("#study-goal option").forEach((option, index) => {
    option.textContent = t(`goal${studyGoalOptions[index][0].toUpperCase()}${studyGoalOptions[index].slice(1)}`);
  });
  document.querySelectorAll("#study-start-level option").forEach((option) => {
    const level = option.value;
    option.textContent = `${level.toUpperCase()} · ${levelLabels[displayLanguage]?.[level] || levelLabels.en[level]}`;
  });
  [2, 3, 4, 5, 7].forEach((days) => {
    document.querySelector(`#study-days option[value="${days}"]`).textContent = t(`sessions${days}`);
  });
  [15, 20, 30, 45, 60].forEach((minutes) => {
    document.querySelector(`#study-minutes option[value="${minutes}"]`).textContent = t(`minutes${minutes}`);
  });
  if (!document.querySelector("#study-plan-result").hidden) createStudyPlan();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const label = link.querySelector("span");
    const key = { home: "home", lessons: "lessons", review: "review", vocabulary: "vocabulary", practice: "practice", about: "about", feedback: "navFeedback" }[link.dataset.nav];
    if (key) label.textContent = t(key);
  });
  document.querySelector(".welcome-row h1").firstChild.textContent = t("welcome") + " ";
  document.querySelector(".goal-copy strong").textContent = t("goal");
  document.querySelector(".goal-ring-inner span").textContent = t("today");
  document.querySelector(".level-switcher-copy > span").textContent = t("chooseLevel");
  document.querySelector("#level-switcher-description").textContent = levelDescriptions[displayLanguage]?.[activeLevel] || levelDescriptions.en[activeLevel];
  document.querySelector("#hero-title").textContent = activeLevel === "a1" ? t("starter") : t("advanced");
  document.querySelector("#hero-description").textContent = activeLevel === "a1"
    ? t("starterDescription")
    : activeLevel === "a2" ? t("advancedDescription") : levelDescriptions[displayLanguage]?.[activeLevel] || levelDescriptions.en[activeLevel];
  document.querySelector("#continue-learning").firstChild.textContent = progress.completed.length ? `${t("continue")} ` : `${t("start")} `;
  document.querySelector("#course-progress-title").textContent = `${t("course")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#lesson-overline").textContent = `${t("lessonOverline")} · ${activeLevel.toUpperCase()}`;
  document.querySelector("#lesson-heading").firstChild.textContent = `${t("lessons")} · ${activeLevel.toUpperCase()} `;
  document.querySelector("#vocabulary-heading").firstChild.textContent = `${t("vocabulary")} · ${activeLevel.toUpperCase()} `;
  document.querySelector("#vocabulary-overline").textContent = t("vocabularyOverline");
  document.querySelector("#vocab-search").placeholder = t("search");
  document.querySelector('[data-kind="words"]').textContent = t("words");
  document.querySelector('[data-kind="phrases"]').textContent = t("phrases");
  document.querySelector("#empty-vocabulary").textContent = t("noResults");
  document.querySelector("#hero-kicker-text").textContent = activeLevel === "a1"
    ? t("starter")
    : t("advanced");
  document.querySelector(".free-pill").textContent = t("freeStudy");
  document.querySelector("#exercise-heading").textContent = t("exerciseSection");
  document.querySelector("#exercise-heading").closest(".exercise-heading-row").querySelector(".section-overline").textContent = t("freePractice");
  document.querySelector("#breadcrumb-level").textContent = `${t("course")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#breadcrumb-current").textContent = t(location.hash.slice(1) || "home");
  document.querySelector("#dialog-intro").textContent = t("readAndAnswer");
  document.querySelector("#dialog-reading-heading").textContent = t("readAndAnswer");
  document.querySelector("#quiz-next").firstChild.textContent = `${t("continue")} `;
  document.querySelector(".practice-card > p").textContent = t("chooseAnswer");
  document.querySelector("#review-heading").firstChild.textContent = `${t("reviewTitle")} `;
  document.querySelector(".review-section .free-access-badge").textContent = t("freePractice");
  document.querySelector('label[for="review-lesson"]').textContent = t("selectLesson");
  document.querySelector("#review-tab-listening").textContent = `🎧 ${t("listening")}`;
  document.querySelector("#review-tab-speaking").textContent = `🗣️ ${t("speaking")}`;
  document.querySelector("#review-tab-writing").textContent = `✍️ ${t("writing")}`;
  document.querySelector("#review-listening .review-skill-label").textContent = t("listenAnswer");
  document.querySelector("#review-speaking .review-skill-label").textContent = t("speakAloud");
  document.querySelector("#review-writing .review-skill-label").textContent = t("writingPractice");
  document.querySelector("#record-speaking").textContent = speakingRecorder?.state === "recording" ? t("stopRecording") : t("startRecording");
  document.querySelector("#speaking-download").textContent = t("downloadRecording");
  document.querySelector("#speaking-whatsapp").textContent = t("submitSpeaking");
  document.querySelector(".ai-grading-note").textContent = t("aiNotice");
  document.querySelector(".translation-disclaimer").textContent = t("translateNote");
  document.querySelector("#lesson-dialog .lesson-reading .section-overline")?.replaceChildren(t("readingSection"));
  const grammarLabel = document.querySelector("#dialog-grammar > span");
  if (grammarLabel) grammarLabel.textContent = t("grammar");
  document.querySelectorAll(".recordings-copy h3").forEach((heading) => {
    heading.textContent = t("recordingHeading");
  });
  document.querySelectorAll(".recordings-copy > p:not(.section-overline)").forEach((paragraph) => {
    paragraph.textContent = t("recordingInstruction");
  });
  document.querySelector(".library-intro").textContent = t("libraryIntro");
  document.querySelector("#review-heading").closest(".section-heading").querySelector(".section-overline").textContent = "LISTENING · SPEAKING · WRITING";
  document.querySelector("#review-writing > p:not(.review-skill-label)").textContent = t("writingDirections");
  document.querySelector("#recorder-note").textContent = t("micNote");
  document.querySelector(".review-speaking-title").textContent = t("speakAloud");
  document.querySelector("#culture-kicker").textContent = t("cultureKicker");
  document.querySelector("#culture-heading-text").textContent = t("cultureTitle");
  document.querySelector("#culture-badge").textContent = t("cultureBadge");
  document.querySelector("#about-heading").firstChild.textContent = `${t("aboutTitle")} `;
  document.querySelector(".about-section .section-overline").textContent = "MEET YOUR VIETNAMESE TUTOR";
  document.querySelector(".booking-card .free-correction-note").textContent = t("freeCorrection");
  document.querySelector("#support-title").textContent = t("supportTitle");
  document.querySelector("#support-copy").textContent = t("supportCopy");
  document.querySelector("#support-link").textContent = t("supportButton");
  document.querySelector("#pronunciation-overline").textContent = t("optionalPronunciation");
  document.querySelector("#pronunciation-title").textContent = t("pronunciationTitle");
  document.querySelector("#pronunciation-description").textContent = t("pronunciationDescription");
  document.querySelector("#pronunciation-link").firstChild.textContent = `${t("pronunciationLink")} `;
  document.querySelector("#linkedin-profile-link").textContent = t("linkedinProfile");
  document.querySelector("#dialog-reading-resources-title").textContent = t("newsPracticeTitle");
  document.querySelector("#dialog-reading-resources-note").textContent = t("newsPracticeNote");
  document.querySelectorAll(".recordings-card").forEach((card) => {
    const levelKey = card.id.replace("-recordings", "");
    const level = levelKey.toUpperCase();
    card.querySelector(".section-overline").textContent = `TEACHER RECORDINGS · ${level}`;
    card.querySelector(".recordings-link").firstChild.textContent = `${t("openRecordings")} `;
    card.querySelector(".recordings-link").href = recordingFolders[levelKey];
    card.querySelector(".recordings-qr-link").href = recordingFolders[levelKey];
    card.querySelector(".recordings-qr").src =
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(recordingFolders[levelKey].split("?")[0])}`;
  });
  document.querySelector("#sidebar-level").textContent = `${t("course")} · ${activeLevel.toUpperCase()}`;
  document.querySelector("#student-level").firstChild.textContent = `${t("student")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#hero-level-pill").textContent = `${t("level")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#today-label").textContent = `${t("today")} · ${dateLabel}`;
  document.querySelector(".welcome-copy").textContent = activeLevel === "a1" ? t("starterDescription") : t("advancedDescription");
  document.querySelector(".about-section .section-heading h2").firstChild.textContent = `${t("aboutTitle")} `;
  document.querySelector(".free-correction-note").textContent = t("freeCorrection");
  document.querySelectorAll(".lesson-start").forEach((button) => {
    const completed = button.closest(".lesson-card").classList.contains("completed");
    button.firstChild.textContent = `${completed ? t("review") : t("start")} `;
  });
  document.querySelectorAll(".translate-link[data-translation-text]").forEach((link) => {
    link.href = translationUrl(link.dataset.translationText);
    link.textContent = t("translateLink");
  });
  if (activeLessonId !== null) updateLessonTranslationLinks();
  renderVietnamHoliday();
  renderLessons();
  renderVocabulary();
  renderQuestion();
  updateCourseFeedback();
  renderReview();
  updateProgress();
  document.querySelector("#continue-learning").firstChild.textContent = progress.completed.length ? `${t("continue")} ` : `${t("start")} `;
}

const lessons = [
  { id: 1, title: "Chữ cái và thanh điệu", category: "PHÁT ÂM", duration: "8 phút", icon: "🔤", tone: "peach", grammar: "Trật tự câu cơ bản: Chủ ngữ + động từ; tiếng Việt không chia động từ theo ngôi.", pattern: "Tôi + [động từ] + [từ/câu tiếng Việt]." },
  { id: 2, title: "Chào hỏi và giới thiệu", category: "GIAO TIẾP", duration: "7 phút", icon: "👋", tone: "yellow", grammar: "Câu khẳng định với “là”: Chủ ngữ + là + danh từ; câu hỏi với “gì”.", pattern: "Mình tên là + [tên]. Bạn tên là gì?" },
  { id: 3, title: "Quốc gia và ngôn ngữ", category: "THÔNG TIN CÁ NHÂN", duration: "7 phút", icon: "🌏", tone: "green", grammar: "Nói nguồn gốc: Chủ ngữ + đến từ + địa điểm; nói quốc tịch: Chủ ngữ + là + quốc tịch.", pattern: "Mình đến từ + [quốc gia]. Mình là + [quốc tịch]." },
  { id: 4, title: "Số đếm và tuổi", category: "CON SỐ", duration: "6 phút", icon: "🔢", tone: "blue", grammar: "Hỏi tuổi với “bao nhiêu”; tuổi được diễn đạt bằng số + “tuổi”.", pattern: "Mình + [số] + tuổi. Bạn bao nhiêu tuổi?" },
  { id: 5, title: "Gia đình và bạn bè", category: "GIA ĐÌNH", duration: "7 phút", icon: "🏡", tone: "lilac", grammar: "Sở hữu với “của”: danh từ + của + người sở hữu; giới thiệu bằng “đây là”.", pattern: "Đây là + [người/vật]. Nhà mình có + [số] người." },
  { id: 6, title: "Đồ ăn và gọi món", category: "ẨM THỰC", duration: "8 phút", icon: "🍜", tone: "rose", grammar: "Nói mong muốn với “muốn”; lượng từ đứng giữa số từ và danh từ: một tô phở.", pattern: "Mình muốn + [động từ/món ăn]. Cho mình + [số lượng] + [món]." },
  { id: 7, title: "Thời gian mỗi ngày", category: "SINH HOẠT", duration: "8 phút", icon: "🌤️", tone: "peach", grammar: "Từ chỉ thời gian thường đứng đầu câu; “lúc” đứng trước giờ cụ thể.", pattern: "Mỗi ngày mình + [hoạt động] + lúc + [giờ]." },
  { id: 8, title: "Địa điểm và chỉ đường", category: "ĐỊA ĐIỂM", duration: "8 phút", icon: "📍", tone: "yellow", grammar: "Hỏi vị trí với “ở đâu”; nói vị trí với “ở” + phương vị.", pattern: "[Địa điểm] ở đâu? Rẽ trái/phải ở + [nơi chốn]." },
];

const a2Lessons = [
  { id: 1, title: "Thói quen và lịch sinh hoạt", category: "SINH HOẠT", duration: "8 phút", icon: "⏰", tone: "peach", grammar: "Tần suất: thường, thỉnh thoảng, luôn luôn; diễn đạt khoảng thời gian với “được … rồi”." },
  { id: 2, title: "Công việc và học tập", category: "CÔNG VIỆC", duration: "8 phút", icon: "💻", tone: "yellow", grammar: "Nhờ vả lịch sự: “có thể … không?”; diễn đạt khả năng với “có thể”." },
  { id: 3, title: "Du lịch và phương tiện", category: "DU LỊCH", duration: "8 phút", icon: "🚌", tone: "green", grammar: "Kể việc đã xảy ra với “đã”; nói dự định với “định” hoặc “sẽ”." },
  { id: 4, title: "Mua sắm và giá cả", category: "MUA SẮM", duration: "7 phút", icon: "🛍️", tone: "blue", grammar: "So sánh hơn với “hơn”; mức độ nhẹ với “hơi”; hỏi giá với “bao nhiêu”." },
  { id: 5, title: "Sức khỏe và cảm xúc", category: "SỨC KHỎE", duration: "8 phút", icon: "🌿", tone: "lilac", grammar: "Đưa lời khuyên với “nên/không nên”; nêu nguyên nhân và kết quả với “vì … nên …”." },
  { id: 6, title: "Ăn uống và nấu ăn", category: "ẨM THỰC", duration: "8 phút", icon: "🍲", tone: "rose", grammar: "So sánh sở thích với “thích … hơn”; chỉ cách thức/nguyên liệu với “bằng”." },
  { id: 7, title: "Thời tiết và kế hoạch", category: "THỜI TIẾT", duration: "7 phút", icon: "🌦️", tone: "peach", grammar: "Điều kiện có thể xảy ra: “nếu … thì …”; nói dự đoán với “sẽ”." },
  { id: 8, title: "Sở thích và trải nghiệm", category: "SỞ THÍCH", duration: "8 phút", icon: "🎨", tone: "yellow", grammar: "Hỏi trải nghiệm với “đã … bao giờ chưa”; nêu lý do với “vì”." },
];

const a2VocabularyTopics = [
  "Sinh hoạt",
  "Công việc",
  "Du lịch",
  "Mua sắm",
  "Sức khỏe",
  "Ẩm thực",
  "Thời tiết",
  "Sở thích",
];

const a2VocabularyWords = [
  { vi: "thường xuyên", en: "often; regularly", topic: "Sinh hoạt" },
  { vi: "thỉnh thoảng", en: "sometimes", topic: "Sinh hoạt" },
  { vi: "cuối tuần", en: "weekend", topic: "Sinh hoạt" },
  { vi: "dậy muộn", en: "to wake up late", topic: "Sinh hoạt" },
  { vi: "tập thể dục", en: "to exercise", topic: "Sinh hoạt" },
  { vi: "bận rộn", en: "busy", topic: "Sinh hoạt" },
  { vi: "đồng nghiệp", en: "colleague", topic: "Công việc" },
  { vi: "cuộc họp", en: "meeting", topic: "Công việc" },
  { vi: "kinh nghiệm", en: "experience", topic: "Công việc" },
  { vi: "hẹn", en: "appointment; to make an appointment", topic: "Công việc" },
  { vi: "dự án", en: "project", topic: "Công việc" },
  { vi: "hoàn thành", en: "to finish; complete", topic: "Công việc" },
  { vi: "vé khứ hồi", en: "round-trip ticket", topic: "Du lịch" },
  { vi: "ga tàu", en: "train station", topic: "Du lịch" },
  { vi: "hành lý", en: "luggage", topic: "Du lịch" },
  { vi: "đặt phòng", en: "to book a room", topic: "Du lịch" },
  { vi: "trễ chuyến", en: "to miss/delay a trip", topic: "Du lịch" },
  { vi: "tham quan", en: "to visit; sightseeing", topic: "Du lịch" },
  { vi: "giảm giá", en: "discount", topic: "Mua sắm" },
  { vi: "vừa vặn", en: "to fit well", topic: "Mua sắm" },
  { vi: "thử", en: "to try; to try on", topic: "Mua sắm" },
  { vi: "đắt", en: "expensive", topic: "Mua sắm" },
  { vi: "rẻ", en: "cheap", topic: "Mua sắm" },
  { vi: "hóa đơn", en: "bill; receipt", topic: "Mua sắm" },
  { vi: "đau đầu", en: "headache", topic: "Sức khỏe" },
  { vi: "đau bụng", en: "stomachache", topic: "Sức khỏe" },
  { vi: "sốt", en: "fever", topic: "Sức khỏe" },
  { vi: "khám bệnh", en: "to see a doctor", topic: "Sức khỏe" },
  { vi: "thuốc", en: "medicine", topic: "Sức khỏe" },
  { vi: "khỏe hơn", en: "to feel better", topic: "Sức khỏe" },
  { vi: "nguyên liệu", en: "ingredient", topic: "Ẩm thực" },
  { vi: "công thức", en: "recipe", topic: "Ẩm thực" },
  { vi: "chiên", en: "to fry", topic: "Ẩm thực" },
  { vi: "luộc", en: "to boil", topic: "Ẩm thực" },
  { vi: "mặn", en: "salty", topic: "Ẩm thực" },
  { vi: "chay", en: "vegetarian", topic: "Ẩm thực" },
  { vi: "nắng", en: "sunny; sunshine", topic: "Thời tiết" },
  { vi: "mưa phùn", en: "drizzle", topic: "Thời tiết" },
  { vi: "nhiệt độ", en: "temperature", topic: "Thời tiết" },
  { vi: "dự báo", en: "forecast", topic: "Thời tiết" },
  { vi: "mát mẻ", en: "cool; pleasant", topic: "Thời tiết" },
  { vi: "bão", en: "storm", topic: "Thời tiết" },
  { vi: "sưu tầm", en: "to collect", topic: "Sở thích" },
  { vi: "nhiếp ảnh", en: "photography", topic: "Sở thích" },
  { vi: "buổi biểu diễn", en: "performance; show", topic: "Sở thích" },
  { vi: "trải nghiệm", en: "experience", topic: "Sở thích" },
  { vi: "thử sức", en: "to give something a try", topic: "Sở thích" },
  { vi: "thư giãn", en: "to relax", topic: "Sở thích" },
];

const a2PhrasePatterns = [
  { vi: "Mình thường dậy lúc sáu giờ, nhưng cuối tuần mình dậy muộn hơn.", en: "I usually get up at six, but I get up later on weekends.", topic: "Sinh hoạt", pattern: "Mình thường + [hoạt động], nhưng + [điều khác]." },
  { vi: "Thỉnh thoảng mình đi bộ đến chỗ làm.", en: "Sometimes I walk to work.", topic: "Sinh hoạt", pattern: "Thỉnh thoảng mình + [hoạt động]." },
  { vi: "Bạn đã tập thể dục bao giờ chưa?", en: "Have you ever exercised?", topic: "Sinh hoạt", pattern: "Bạn đã + [động từ] + bao giờ chưa?" },
  { vi: "Hôm qua mình bận nên không gọi cho bạn được.", en: "I was busy yesterday, so I couldn't call you.", topic: "Sinh hoạt", pattern: "[Lý do] nên mình không + [động từ] + được." },
  { vi: "Ngày mai mình sẽ họp với đồng nghiệp.", en: "Tomorrow I will have a meeting with my colleague.", topic: "Công việc", pattern: "Ngày mai mình sẽ + [động từ]." },
  { vi: "Mình làm ở đây được hai năm rồi.", en: "I have worked here for two years.", topic: "Công việc", pattern: "Mình + [động từ] + được + [thời gian] + rồi." },
  { vi: "Bạn có thể gửi tài liệu trước cuộc họp không?", en: "Could you send the document before the meeting?", topic: "Công việc", pattern: "Bạn có thể + [động từ] + không?" },
  { vi: "Dự án này khó hơn dự án trước.", en: "This project is more difficult than the previous one.", topic: "Công việc", pattern: "[A] + tính từ + hơn + [B]." },
  { vi: "Tôi muốn đặt một phòng gần ga tàu.", en: "I would like to book a room near the train station.", topic: "Du lịch", pattern: "Tôi muốn + [động từ] + [danh từ]." },
  { vi: "Chuyến tàu bị trễ khoảng ba mươi phút.", en: "The train is about thirty minutes late.", topic: "Du lịch", pattern: "[Phương tiện] bị trễ + [thời gian]." },
  { vi: "Chúng mình đã tham quan bảo tàng hôm qua.", en: "We visited the museum yesterday.", topic: "Du lịch", pattern: "Chủ ngữ + đã + [động từ] + [thời gian]." },
  { vi: "Bạn có thể chỉ cho tôi đường đến khách sạn không?", en: "Could you show me the way to the hotel?", topic: "Du lịch", pattern: "Bạn có thể chỉ cho tôi đường đến + [địa điểm] không?" },
  { vi: "Áo này vừa vặn, nhưng hơi đắt.", en: "This shirt fits well, but it is a little expensive.", topic: "Mua sắm", pattern: "[Vật] vừa vặn, nhưng hơi + [tính từ]." },
  { vi: "Cửa hàng có giảm giá vào cuối tuần không?", en: "Does the shop have discounts on weekends?", topic: "Mua sắm", pattern: "[Nơi chốn] có + [hoạt động] + không?" },
  { vi: "Tôi có thể thử chiếc áo này không?", en: "Can I try on this shirt?", topic: "Mua sắm", pattern: "Tôi có thể + [động từ] + [vật] không?" },
  { vi: "Mình bị đau đầu từ sáng nay.", en: "I've had a headache since this morning.", topic: "Sức khỏe", pattern: "Mình bị + [triệu chứng] + từ + [thời điểm]." },
  { vi: "Bạn nên nghỉ ngơi và uống nhiều nước.", en: "You should rest and drink plenty of water.", topic: "Sức khỏe", pattern: "Bạn nên + [lời khuyên]." },
  { vi: "Nếu ngày mai không khỏe hơn, mình sẽ đi khám.", en: "If I don't feel better tomorrow, I will see a doctor.", topic: "Sức khỏe", pattern: "Nếu + [điều kiện], mình sẽ + [kết quả]." },
  { vi: "Món này được nấu bằng những nguyên liệu nào?", en: "What ingredients is this dish made with?", topic: "Ẩm thực", pattern: "[Món ăn] được nấu bằng + [nguyên liệu] nào?" },
  { vi: "Mình thích món luộc hơn món chiên.", en: "I prefer boiled dishes to fried dishes.", topic: "Ẩm thực", pattern: "Mình thích [A] hơn [B]." },
  { vi: "Bạn có thể gửi cho mình công thức món này không?", en: "Could you send me the recipe for this dish?", topic: "Ẩm thực", pattern: "Bạn có thể gửi cho mình + [danh từ] không?" },
  { vi: "Theo dự báo, chiều nay trời sẽ mưa.", en: "According to the forecast, it will rain this afternoon.", topic: "Thời tiết", pattern: "Theo dự báo, + [thời gian] + [thời tiết]." },
  { vi: "Trời mát nên mình muốn đi dạo.", en: "It's cool, so I want to go for a walk.", topic: "Thời tiết", pattern: "Trời + [tính từ] nên mình muốn + [hoạt động]." },
  { vi: "Nếu trời mưa, chúng ta sẽ ở nhà.", en: "If it rains, we will stay home.", topic: "Thời tiết", pattern: "Nếu + [thời tiết], chúng ta sẽ + [kế hoạch]." },
  { vi: "Mình bắt đầu học nhiếp ảnh từ năm ngoái.", en: "I started learning photography last year.", topic: "Sở thích", pattern: "Mình bắt đầu + [hoạt động] + từ + [thời điểm]." },
  { vi: "Mình thích nghe nhạc vì nó giúp mình thư giãn.", en: "I like listening to music because it helps me relax.", topic: "Sở thích", pattern: "Mình thích + [hoạt động] + vì + [lý do]." },
  { vi: "Bạn đã xem buổi biểu diễn này chưa?", en: "Have you seen this show?", topic: "Sở thích", pattern: "Bạn đã + [động từ] + chưa?" },
];

const a2LessonContent = {
  1: [
    { vi: "thường xuyên · thỉnh thoảng", en: "often · sometimes", note: "Trạng từ chỉ tần suất." },
    { vi: "Mình thường dậy lúc sáu giờ.", en: "I usually get up at six.", note: "“Thường” đứng trước động từ." },
    { vi: "Cuối tuần mình dậy muộn hơn.", en: "I get up later on weekends.", note: "“Hơn” dùng trong câu so sánh." },
  ],
  2: [
    { vi: "đồng nghiệp · cuộc họp", en: "colleague · meeting", note: "Từ vựng trong môi trường làm việc." },
    { vi: "Mình làm ở đây được hai năm rồi.", en: "I have worked here for two years.", note: "Mẫu nói về khoảng thời gian đã làm việc." },
    { vi: "Bạn có thể gửi tài liệu không?", en: "Could you send the document?", note: "Cách nhờ giúp lịch sự." },
  ],
  3: [
    { vi: "vé khứ hồi · hành lý", en: "round-trip ticket · luggage", note: "Từ vựng cần thiết khi đi du lịch." },
    { vi: "Tôi muốn đặt một phòng.", en: "I would like to book a room.", note: "Dùng “muốn” để nói yêu cầu." },
    { vi: "Chuyến tàu bị trễ.", en: "The train is delayed.", note: "Dùng “bị” để nói về sự việc không mong muốn." },
  ],
  4: [
    { vi: "giảm giá · hóa đơn", en: "discount · receipt", note: "Từ vựng khi mua sắm." },
    { vi: "Áo này vừa vặn.", en: "This shirt fits well.", note: "“Này” đứng sau danh từ để chỉ vật gần." },
    { vi: "Tôi có thể thử không?", en: "Can I try it on?", note: "Mẫu câu xin phép." },
  ],
  5: [
    { vi: "đau đầu · đau bụng", en: "headache · stomachache", note: "Từ vựng mô tả triệu chứng." },
    { vi: "Mình bị sốt từ tối qua.", en: "I've had a fever since last night.", note: "“Từ” chỉ thời điểm bắt đầu." },
    { vi: "Bạn nên nghỉ ngơi.", en: "You should rest.", note: "Dùng “nên” để đưa ra lời khuyên." },
  ],
  6: [
    { vi: "nguyên liệu · công thức", en: "ingredient · recipe", note: "Từ vựng về nấu ăn." },
    { vi: "Mình thích món luộc hơn.", en: "I prefer boiled dishes.", note: "So sánh sở thích với “hơn”." },
    { vi: "Món này được nấu bằng rau.", en: "This dish is made with vegetables.", note: "“Được nấu bằng” chỉ nguyên liệu." },
  ],
  7: [
    { vi: "dự báo · nhiệt độ", en: "forecast · temperature", note: "Từ vựng để nói về thời tiết." },
    { vi: "Chiều nay trời sẽ mưa.", en: "It will rain this afternoon.", note: "“Sẽ” nói về dự định hoặc tương lai." },
    { vi: "Nếu trời mưa, mình sẽ ở nhà.", en: "If it rains, I will stay home.", note: "Mẫu câu điều kiện cơ bản." },
  ],
  8: [
    { vi: "nhiếp ảnh · thư giãn", en: "photography · relax", note: "Từ vựng về sở thích." },
    { vi: "Mình thích nghe nhạc vì nó thư giãn.", en: "I like listening to music because it is relaxing.", note: "“Vì” nối hoạt động với lý do." },
    { vi: "Bạn đã xem chương trình này chưa?", en: "Have you seen this show?", note: "Câu hỏi về trải nghiệm." },
  ],
};

const a2AdditionalUnits = [
  { title: "Nhà ở và khu phố", topic: "Nhà ở & khu phố", category: "NƠI Ở", icon: "🏘️", tone: "peach", grammar: "Diễn tả vị trí với “gần/xa”; so sánh nơi chốn bằng “yên tĩnh hơn/đông hơn”.", words: [["khu phố", "neighborhood"], ["hàng xóm", "neighbor"], ["yên tĩnh", "quiet"]], phrase: { vi: "Khu phố này yên tĩnh hơn khu phố cũ.", en: "This neighborhood is quieter than the old one.", pattern: "[A] + tính từ + hơn + [B]." } },
  { title: "Dịch vụ và việc vặt", topic: "Dịch vụ & việc vặt", category: "DỊCH VỤ", icon: "📮", tone: "blue", grammar: "Nói mục đích với “để + động từ”; yêu cầu dịch vụ với “tôi muốn …”.", words: [["bưu điện", "post office"], ["gửi bưu phẩm", "to mail a package"], ["hiệu thuốc", "pharmacy"]], phrase: { vi: "Tôi đến bưu điện để gửi bưu phẩm.", en: "I went to the post office to mail a package.", pattern: "[Chủ ngữ] + đến + [địa điểm] + để + [mục đích]." } },
  { title: "Thành phố và chỉ đường", topic: "Thành phố & chỉ đường", category: "ĐỊA ĐIỂM", icon: "🗺️", tone: "green", grammar: "Chỉ đường theo trình tự với “đi thẳng”, “rẽ trái/phải”, “sau đó”; hỏi đường bằng “đi đến … thế nào?”.", words: [["ngã tư", "intersection"], ["đi thẳng", "go straight"], ["rẽ phải", "turn right"]], phrase: { vi: "Đi thẳng, sau đó rẽ phải ở ngã tư.", en: "Go straight, then turn right at the intersection.", pattern: "[Chỉ dẫn 1], sau đó + [chỉ dẫn 2]." } },
  { title: "Mời và giao tiếp xã hội", topic: "Mời & giao tiếp xã hội", category: "GIAO TIẾP", icon: "☕", tone: "rose", grammar: "Mời ai làm gì với “mời + người + động từ”; nhận lời hoặc từ chối lịch sự bằng “được, cảm ơn” / “tiếc quá”.", words: [["mời", "to invite"], ["rảnh", "free; available"], ["tiếc quá", "what a pity"]], phrase: { vi: "Tối thứ Bảy bạn có rảnh không? Mình mời bạn đi ăn nhé.", en: "Are you free Saturday evening? Let me invite you to dinner.", pattern: "[Thời gian] + bạn có rảnh không? Mình mời bạn + [hoạt động] nhé." } },
  { title: "Kể về cuối tuần đã qua", topic: "Cuối tuần đã qua", category: "TRẢI NGHIỆM", icon: "📷", tone: "yellow", grammar: "Kể việc đã xảy ra bằng mốc thời gian quá khứ và “đã”; phủ định quá khứ dùng “chưa/không”.", words: [["cuối tuần trước", "last weekend"], ["đã đi", "went"], ["gặp gỡ", "to meet"]], phrase: { vi: "Cuối tuần trước mình đã đi Đà Lạt với gia đình.", en: "Last weekend I went to Da Lat with my family.", pattern: "[Mốc quá khứ] + [chủ ngữ] + đã + [động từ]." } },
  { title: "Kỷ niệm tuổi thơ", topic: "Kỷ niệm tuổi thơ", category: "KỂ CHUYỆN", icon: "🪁", tone: "lilac", grammar: "Miêu tả thói quen trong quá khứ với “hồi nhỏ thường …”; đối chiếu quá khứ và hiện tại bằng “bây giờ”.", words: [["hồi nhỏ", "when I was little"], ["kỷ niệm", "memory"], ["quê", "hometown; countryside"]], phrase: { vi: "Hồi nhỏ, mình thường về quê thăm ông bà.", en: "When I was little, I often visited my grandparents in the countryside.", pattern: "Hồi nhỏ, [chủ ngữ] thường + [hoạt động]." } },
  { title: "Ý kiến và lý do", topic: "Ý kiến & lý do", category: "DIỄN ĐẠT", icon: "💭", tone: "peach", grammar: "Nêu ý kiến bằng “theo tôi/mình nghĩ”; giải thích bằng “vì … nên …”.", words: [["ý kiến", "opinion"], ["theo tôi", "in my opinion"], ["lý do", "reason"]], phrase: { vi: "Theo mình, học theo nhóm hiệu quả vì mọi người có thể giúp nhau.", en: "In my opinion, studying in a group is effective because people can help each other.", pattern: "Theo [người nói], [ý kiến] vì + [lý do]." } },
  { title: "So sánh và lựa chọn", topic: "So sánh & lựa chọn", category: "SO SÁNH", icon: "⚖️", tone: "blue", grammar: "So sánh hơn: tính từ + “hơn”; so sánh nhất cơ bản: “nhất”; lựa chọn với “thích … hơn”.", words: [["thoải mái", "comfortable"], ["tiện lợi", "convenient"], ["lựa chọn", "choice"]], phrase: { vi: "Đi tàu thoải mái hơn đi xe khách.", en: "Traveling by train is more comfortable than by coach.", pattern: "[A] + tính từ + hơn + [B]." } },
  { title: "Quy tắc và lời khuyên", topic: "Quy tắc & lời khuyên", category: "LỜI KHUYÊN", icon: "📋", tone: "green", grammar: "Đưa lời khuyên với “nên/không nên”; diễn đạt bắt buộc với “phải”.", words: [["quy định", "rule; regulation"], ["nên", "should"], ["phải", "must; have to"]], phrase: { vi: "Bạn nên đội mũ bảo hiểm và phải đi đúng làn đường.", en: "You should wear a helmet and must stay in the correct lane.", pattern: "[Chủ ngữ] + nên/phải + [động từ]." } },
  { title: "Học ngoại ngữ", topic: "Học ngoại ngữ", category: "HỌC TẬP", icon: "📚", tone: "rose", grammar: "Nói mục đích với “để”; diễn tả tiến bộ bằng “giỏi hơn/dễ hơn”.", words: [["từ mới", "new vocabulary"], ["luyện tập", "to practice"], ["tiến bộ", "to improve"]], phrase: { vi: "Mình nghe podcast mỗi ngày để luyện nghe tiếng Việt.", en: "I listen to a podcast every day to practice listening to Vietnamese.", pattern: "[Hoạt động] + để + [mục đích]." } },
  { title: "Công nghệ và liên lạc", topic: "Công nghệ & liên lạc", category: "CÔNG NGHỆ", icon: "📱", tone: "yellow", grammar: "Nói khả năng với “có thể”; yêu cầu người khác làm việc gì với “nhờ … giúp”.", words: [["tin nhắn", "text message"], ["cuộc gọi video", "video call"], ["kết nối", "to connect"]], phrase: { vi: "Bạn nhắn địa chỉ cho mình để mình có thể tìm đường nhé.", en: "Text me the address so I can find the way.", pattern: "Bạn + [động từ] + cho mình để mình có thể + [động từ]." } },
  { title: "Lễ hội và phong tục", topic: "Lễ hội & phong tục", category: "VĂN HÓA", icon: "🏮", tone: "lilac", grammar: "Nói hoạt động thường diễn ra bằng “vào dịp …”; diễn đạt trình tự với “trước khi/sau khi”.", words: [["lễ hội", "festival"], ["phong tục", "custom"], ["sum họp", "to gather"]], phrase: { vi: "Vào dịp Tết, gia đình mình thường sum họp.", en: "During Tet, my family usually gets together.", pattern: "Vào dịp + [lễ], [chủ ngữ] thường + [hoạt động]." } },
  { title: "Thiên nhiên và môi trường", topic: "Thiên nhiên & môi trường", category: "MÔI TRƯỜNG", icon: "🌳", tone: "green", grammar: "Nêu nguyên nhân và kết quả với “vì … nên …”; khuyến khích hành động với “hãy”.", words: [["rác thải", "waste"], ["trồng cây", "to plant trees"], ["môi trường", "environment"]], phrase: { vi: "Chúng ta nên trồng thêm cây vì cây giúp không khí trong lành hơn.", en: "We should plant more trees because they help make the air cleaner.", pattern: "[Ý kiến] vì + [lý do]." } },
  { title: "Vấn đề và cách giải quyết", topic: "Vấn đề & giải pháp", category: "GIẢI QUYẾT VẤN ĐỀ", icon: "🧩", tone: "peach", grammar: "Mô tả vấn đề bằng “bị”; đề xuất cách xử lý với “có thể … hoặc …”.", words: [["trục trặc", "problem; malfunction"], ["sửa chữa", "to repair"], ["giải pháp", "solution"]], phrase: { vi: "Máy tính bị trục trặc, mình có thể sửa hoặc mang đi bảo hành.", en: "The computer has a problem; I can fix it or take it in for warranty service.", pattern: "[Vấn đề], [chủ ngữ] có thể + [giải pháp 1] hoặc + [giải pháp 2]." } },
  { title: "Mục tiêu tương lai", topic: "Mục tiêu tương lai", category: "KẾ HOẠCH", icon: "🎯", tone: "blue", grammar: "Nói dự định với “dự định/sẽ”; diễn đạt mong muốn bằng “muốn … để …”.", words: [["mục tiêu", "goal"], ["dự định", "to plan; intention"], ["tương lai", "future"]], phrase: { vi: "Năm sau mình dự định học tiếng Việt để làm việc ở Việt Nam.", en: "Next year I plan to study Vietnamese to work in Vietnam.", pattern: "[Thời gian] + [chủ ngữ] + dự định + [hoạt động] để + [mục đích]." } },
  { title: "Tiểu sử và cột mốc cuộc đời", topic: "Tiểu sử & cột mốc", category: "KỂ VỀ BẢN THÂN", icon: "🧭", tone: "rose", grammar: "Kể các sự kiện theo trình tự thời gian; dùng “sau đó”, “khi …”, “từ năm … đến năm …”.", words: [["tốt nghiệp", "to graduate"], ["chuyển đến", "to move to"], ["cột mốc", "milestone"]], phrase: { vi: "Sau khi tốt nghiệp, mình chuyển đến Hà Nội và bắt đầu đi làm.", en: "After graduating, I moved to Hanoi and started working.", pattern: "Sau khi + [sự kiện], [chủ ngữ] + [sự kiện tiếp theo]." } },
];

registerCourseUnits(a2AdditionalUnits, a2Lessons, a2LessonContent, a2VocabularyTopics, a2VocabularyWords, a2PhrasePatterns);

const a2QuizQuestions = [
  { word: "thỉnh thoảng", hint: "trạng từ", answers: ["sometimes", "always", "never", "quickly"], correct: 0 },
  { word: "Bạn có thể gửi tài liệu không?", hint: "câu nhờ giúp", answers: ["Can you send the document?", "Where is the document?", "I lost the document.", "I read the document."], correct: 0 },
  { word: "giảm giá", hint: "danh từ", answers: ["receipt", "discount", "size", "price tag"], correct: 1 },
  { word: "Bạn nên nghỉ ngơi.", hint: "lời khuyên", answers: ["You should rest.", "You are resting.", "You rested yesterday.", "You can run."], correct: 0 },
];

const vocabularyTopics = [
  "Chào hỏi",
  "Thông tin cá nhân",
  "Số đếm & thời gian",
  "Gia đình",
  "Học tập",
  "Đồ ăn",
  "Địa điểm",
  "Sinh hoạt",
];

const vocabularyWords = [
  { vi: "xin chào", en: "hello", topic: "Chào hỏi" },
  { vi: "chào buổi sáng", en: "good morning", topic: "Chào hỏi" },
  { vi: "tạm biệt", en: "goodbye", topic: "Chào hỏi" },
  { vi: "cảm ơn", en: "thank you", topic: "Chào hỏi" },
  { vi: "xin lỗi", en: "sorry; excuse me", topic: "Chào hỏi" },
  { vi: "làm ơn", en: "please", topic: "Chào hỏi" },
  { vi: "tên", en: "name", topic: "Thông tin cá nhân" },
  { vi: "tuổi", en: "age; years old", topic: "Thông tin cá nhân" },
  { vi: "quốc gia", en: "country", topic: "Thông tin cá nhân" },
  { vi: "ngôn ngữ", en: "language", topic: "Thông tin cá nhân" },
  { vi: "tiếng Việt", en: "Vietnamese language", topic: "Thông tin cá nhân" },
  { vi: "địa chỉ", en: "address", topic: "Thông tin cá nhân" },
  { vi: "số", en: "number", topic: "Số đếm & thời gian" },
  { vi: "một", en: "one", topic: "Số đếm & thời gian" },
  { vi: "hai", en: "two", topic: "Số đếm & thời gian" },
  { vi: "ba", en: "three", topic: "Số đếm & thời gian" },
  { vi: "hôm nay", en: "today", topic: "Số đếm & thời gian" },
  { vi: "ngày mai", en: "tomorrow", topic: "Số đếm & thời gian" },
  { vi: "giờ", en: "hour; o'clock", topic: "Số đếm & thời gian" },
  { vi: "gia đình", en: "family", topic: "Gia đình" },
  { vi: "bố", en: "father; dad", topic: "Gia đình" },
  { vi: "mẹ", en: "mother; mom", topic: "Gia đình" },
  { vi: "anh trai", en: "older brother", topic: "Gia đình" },
  { vi: "chị gái", en: "older sister", topic: "Gia đình" },
  { vi: "em", en: "younger sibling", topic: "Gia đình" },
  { vi: "bạn", en: "friend; you", topic: "Gia đình" },
  { vi: "trường học", en: "school", topic: "Học tập" },
  { vi: "giáo viên", en: "teacher", topic: "Học tập" },
  { vi: "học sinh", en: "student; pupil", topic: "Học tập" },
  { vi: "sách", en: "book", topic: "Học tập" },
  { vi: "bút", en: "pen", topic: "Học tập" },
  { vi: "bài tập", en: "exercise; homework", topic: "Học tập" },
  { vi: "đồ ăn", en: "food", topic: "Đồ ăn" },
  { vi: "cơm", en: "rice; meal", topic: "Đồ ăn" },
  { vi: "phở", en: "pho noodle soup", topic: "Đồ ăn" },
  { vi: "nước", en: "water; drink", topic: "Đồ ăn" },
  { vi: "cà phê", en: "coffee", topic: "Đồ ăn" },
  { vi: "ngon", en: "delicious", topic: "Đồ ăn" },
  { vi: "nhà", en: "house; home", topic: "Địa điểm" },
  { vi: "nhà hàng", en: "restaurant", topic: "Địa điểm" },
  { vi: "chợ", en: "market", topic: "Địa điểm" },
  { vi: "bệnh viện", en: "hospital", topic: "Địa điểm" },
  { vi: "nhà vệ sinh", en: "restroom; toilet", topic: "Địa điểm" },
  { vi: "ở đâu", en: "where", topic: "Địa điểm" },
  { vi: "ăn", en: "to eat", topic: "Sinh hoạt" },
  { vi: "uống", en: "to drink", topic: "Sinh hoạt" },
  { vi: "đi", en: "to go", topic: "Sinh hoạt" },
  { vi: "làm việc", en: "to work", topic: "Sinh hoạt" },
  { vi: "thích", en: "to like", topic: "Sinh hoạt" },
  { vi: "mệt", en: "tired", topic: "Sinh hoạt" },
];

const phrasePatterns = [
  { vi: "Xin chào! Bạn khỏe không?", en: "Hello! How are you?", topic: "Chào hỏi", pattern: "Xin chào! Bạn khỏe không?" },
  { vi: "Mình khỏe, cảm ơn bạn.", en: "I'm fine, thank you.", topic: "Chào hỏi", pattern: "Mình khỏe, cảm ơn bạn." },
  { vi: "Tạm biệt. Hẹn gặp lại!", en: "Goodbye. See you again!", topic: "Chào hỏi", pattern: "Tạm biệt. Hẹn gặp lại!" },
  { vi: "Mình tên là An.", en: "My name is An.", topic: "Thông tin cá nhân", pattern: "Mình tên là + [tên]." },
  { vi: "Bạn tên là gì?", en: "What is your name?", topic: "Thông tin cá nhân", pattern: "Bạn tên là gì?" },
  { vi: "Mình đến từ Việt Nam.", en: "I come from Vietnam.", topic: "Thông tin cá nhân", pattern: "Mình đến từ + [quốc gia]." },
  { vi: "Bạn bao nhiêu tuổi?", en: "How old are you?", topic: "Thông tin cá nhân", pattern: "Bạn bao nhiêu tuổi?" },
  { vi: "Mình hai mươi tuổi.", en: "I am twenty years old.", topic: "Thông tin cá nhân", pattern: "Mình + [số] + tuổi." },
  { vi: "Bây giờ là ba giờ.", en: "It is three o'clock.", topic: "Số đếm & thời gian", pattern: "Bây giờ là + [giờ] + giờ." },
  { vi: "Hôm nay là thứ Hai.", en: "Today is Monday.", topic: "Số đếm & thời gian", pattern: "Hôm nay là + [thứ/ngày]." },
  { vi: "Ngày mai mình đi học.", en: "Tomorrow I go to school.", topic: "Số đếm & thời gian", pattern: "Ngày mai mình + [động từ]." },
  { vi: "Đây là gia đình mình.", en: "This is my family.", topic: "Gia đình", pattern: "Đây là + [người/vật]." },
  { vi: "Nhà mình có bốn người.", en: "There are four people in my family.", topic: "Gia đình", pattern: "Nhà mình có + [số] + người." },
  { vi: "Mẹ mình là giáo viên.", en: "My mother is a teacher.", topic: "Gia đình", pattern: "[Người thân] mình là + [nghề nghiệp]." },
  { vi: "Mình là học sinh.", en: "I am a student.", topic: "Học tập", pattern: "Mình là + [nghề nghiệp/vai trò]." },
  { vi: "Đây là quyển sách của mình.", en: "This is my book.", topic: "Học tập", pattern: "Đây là + [đồ vật] + của mình." },
  { vi: "Mình học tiếng Việt ở trường.", en: "I study Vietnamese at school.", topic: "Học tập", pattern: "Mình học + [môn học] + ở [địa điểm]." },
  { vi: "Mình muốn ăn phở.", en: "I want to eat pho.", topic: "Đồ ăn", pattern: "Mình muốn + [động từ/món ăn]." },
  { vi: "Cho mình một cốc nước.", en: "A glass of water, please.", topic: "Đồ ăn", pattern: "Cho mình + [số lượng] + [món/đồ uống]." },
  { vi: "Món này ngon quá!", en: "This dish is so delicious!", topic: "Đồ ăn", pattern: "[Món ăn] này ngon quá!" },
  { vi: "Nhà vệ sinh ở đâu?", en: "Where is the restroom?", topic: "Địa điểm", pattern: "[Địa điểm] ở đâu?" },
  { vi: "Nhà hàng ở bên trái.", en: "The restaurant is on the left.", topic: "Địa điểm", pattern: "[Địa điểm] ở bên trái/phải." },
  { vi: "Mình đi chợ bằng xe buýt.", en: "I go to the market by bus.", topic: "Địa điểm", pattern: "Mình đi + [địa điểm] + bằng [phương tiện]." },
  { vi: "Mỗi ngày mình uống cà phê.", en: "I drink coffee every day.", topic: "Sinh hoạt", pattern: "Mỗi ngày mình + [động từ] + [đồ vật]." },
  { vi: "Bạn có thích đọc sách không?", en: "Do you like reading books?", topic: "Sinh hoạt", pattern: "Bạn có thích + [động từ] + không?" },
  { vi: "Buổi tối mình ở nhà.", en: "I am at home in the evening.", topic: "Sinh hoạt", pattern: "Buổi [sáng/trưa/tối] mình + [hoạt động]." },
];

const lessonContent = {
  1: [
    { vi: "a · ă · â", en: "Vietnamese vowel sounds", note: "Nghe và lặp lại từng âm." },
    { vi: "ma · mà · má", en: "ma · ghost · cheek", note: "Dấu thanh làm thay đổi nghĩa của từ." },
    { vi: "mả · mã · mạ", en: "grave · horse · rice seedling", note: "Luyện nghe các thanh còn lại." },
  ],
  2: [
    { vi: "Xin chào!", en: "Hello!", note: "Lời chào thân thiện, dùng được trong nhiều tình huống." },
    { vi: "Mình tên là An.", en: "My name is An.", note: "Thay “An” bằng tên của bạn." },
    { vi: "Bạn tên là gì?", en: "What is your name?", note: "Câu hỏi để hỏi tên một người." },
  ],
  3: [
    { vi: "Mình là người Việt Nam.", en: "I am Vietnamese.", note: "“Mình là…” dùng để giới thiệu thông tin về bản thân." },
    { vi: "Mình đến từ Việt Nam.", en: "I come from Vietnam.", note: "Thay “Việt Nam” bằng tên quốc gia của bạn." },
    { vi: "Bạn nói tiếng gì?", en: "What language do you speak?", note: "“Tiếng Việt” nghĩa là Vietnamese." },
  ],
  4: [
    { vi: "một · hai · ba", en: "one · two · three", note: "Đếm từ một đến ba." },
    { vi: "Mình hai mươi tuổi.", en: "I am twenty years old.", note: "Tuổi đi với “tuổi”; trong tiếng Việt không cần “to be”." },
    { vi: "Số điện thoại", en: "Telephone number", note: "“Số” nghĩa là number." },
  ],
  5: [
    { vi: "gia đình", en: "family", note: "Danh từ chỉ những người trong gia đình." },
    { vi: "mẹ · bố", en: "mother · father", note: "Từ gọi cha mẹ thông dụng." },
    { vi: "Đây là chị gái mình.", en: "This is my older sister.", note: "“Đây là…” dùng để giới thiệu người hoặc vật." },
  ],
  6: [
    { vi: "món ăn", en: "dish / food", note: "Từ chung để nói về các món ăn." },
    { vi: "Cho mình một tô phở.", en: "One bowl of phở, please.", note: "Mẫu câu gọi món đơn giản." },
    { vi: "Tính tiền giúp mình.", en: "The bill, please.", note: "Câu lịch sự để xin thanh toán." },
  ],
  7: [
    { vi: "hôm nay", en: "today", note: "Từ chỉ ngày hiện tại." },
    { vi: "Mấy giờ rồi?", en: "What time is it?", note: "Câu hỏi để hỏi giờ." },
    { vi: "Mình đi học lúc bảy giờ.", en: "I go to school at seven.", note: "“Lúc” dùng trước thời gian." },
  ],
  8: [
    { vi: "trường học", en: "school", note: "Một địa điểm học tập." },
    { vi: "Nhà vệ sinh ở đâu?", en: "Where is the restroom?", note: "“Ở đâu?” dùng để hỏi vị trí." },
    { vi: "Rẽ trái · rẽ phải", en: "Turn left · turn right", note: "Hai chỉ dẫn đường cơ bản." },
  ],
};

function registerCourseUnits(units, lessonList, contentMap, topicList, wordList, phraseList) {
  units.forEach((unit) => {
    const id = lessonList.length + 1;
    lessonList.push({
      id,
      title: unit.title,
      category: unit.category,
      duration: "8 phút",
      icon: unit.icon,
      tone: unit.tone,
      grammar: unit.grammar,
    });
    topicList.push(unit.topic);
    wordList.push(...unit.words.map(([vi, en]) => ({ vi, en, topic: unit.topic })));
    phraseList.push({ ...unit.phrase, topic: unit.topic });
    contentMap[id] = [
      ...unit.words.map(([vi, en]) => ({ vi, en, note: `Từ vựng chủ đề ${unit.topic}.` })),
      { ...unit.phrase, note: "Luyện dùng mẫu câu trong tình huống thực tế." },
    ];
  });
}

const a1AdditionalUnits = [
  { title: "Đại từ xưng hô", topic: "Đại từ xưng hô", category: "GIAO TIẾP", icon: "🗣️", tone: "green", grammar: "Chọn đại từ theo tuổi tác và quan hệ: tôi, bạn, anh, chị, em. Đại từ có thể thay đổi theo người đang nói chuyện.", words: [["tôi", "I; formal"], ["anh", "older brother; you"], ["chị", "older sister; you"]], phrase: { vi: "Chị tên là gì ạ?", en: "What is your name? (polite)", pattern: "[Đại từ] + tên là gì ạ?" } },
  { title: "Đồ vật trong lớp học", topic: "Đồ vật lớp học", category: "HỌC TẬP", icon: "✏️", tone: "blue", grammar: "Câu chỉ định: “Đây là …” (gần người nói), “Đó là …” (xa người nói). Lượng từ thường đi với danh từ: một quyển sách.", words: [["bảng", "board"], ["quyển vở", "notebook"], ["cây bút", "pen"]], phrase: { vi: "Đây là quyển vở của tôi.", en: "This is my notebook.", pattern: "Đây/Đó là + [lượng từ] + [danh từ] + của + [người]." } },
  { title: "Nghề nghiệp", topic: "Nghề nghiệp", category: "CÔNG VIỆC", icon: "👩‍⚕️", tone: "lilac", grammar: "Nói nghề nghiệp với “là”: Chủ ngữ + là + nghề nghiệp. Hỏi nghề bằng “Bạn làm nghề gì?”.", words: [["bác sĩ", "doctor"], ["đầu bếp", "cook; chef"], ["nhân viên", "staff member"]], phrase: { vi: "Mẹ tôi là bác sĩ.", en: "My mother is a doctor.", pattern: "[Người] + là + [nghề nghiệp]." } },
  { title: "Màu sắc và miêu tả", topic: "Màu sắc & miêu tả", category: "MIÊU TẢ", icon: "🎨", tone: "rose", grammar: "Tính từ thường đứng sau danh từ trong cụm miêu tả: áo màu xanh, nhà đẹp. Dùng “rất” trước tính từ để nhấn mạnh.", words: [["màu đỏ", "red"], ["màu xanh", "blue; green"], ["đẹp", "beautiful"]], phrase: { vi: "Tôi thích chiếc túi màu đỏ.", en: "I like the red bag.", pattern: "[Danh từ] + [màu sắc]; rất + [tính từ]." } },
  { title: "Nhà cửa và phòng ốc", topic: "Nhà cửa & phòng ốc", category: "NƠI Ở", icon: "🏠", tone: "peach", grammar: "Nói có/không có với “có/không có”; vị trí đồ vật với “trên, dưới, trong, ngoài”.", words: [["phòng khách", "living room"], ["phòng ngủ", "bedroom"], ["nhà bếp", "kitchen"]], phrase: { vi: "Trong nhà có hai phòng ngủ.", en: "There are two bedrooms in the house.", pattern: "[Nơi chốn] + có + [số lượng] + [danh từ]." } },
  { title: "Quần áo", topic: "Quần áo", category: "TRANG PHỤC", icon: "👕", tone: "yellow", grammar: "Cụm danh từ cơ bản: lượng từ + danh từ + màu sắc. Dùng “mặc” trước tên quần áo.", words: [["áo sơ mi", "shirt"], ["quần dài", "trousers"], ["đôi giày", "pair of shoes"]], phrase: { vi: "Hôm nay tôi mặc áo sơ mi trắng.", en: "Today I am wearing a white shirt.", pattern: "Hôm nay + [chủ ngữ] + mặc + [quần áo] + [màu sắc]." } },
  { title: "Mua sắm và giá cả", topic: "Mua sắm & giá cả", category: "MUA SẮM", icon: "🛍️", tone: "blue", grammar: "Hỏi giá bằng “bao nhiêu tiền”; so sánh đơn giản với “đắt/rẻ”.", words: [["bao nhiêu tiền", "how much"], ["đắt", "expensive"], ["rẻ", "cheap"]], phrase: { vi: "Cái này bao nhiêu tiền?", en: "How much is this?", pattern: "[Vật] + bao nhiêu tiền?" } },
  { title: "Sở thích", topic: "Sở thích", category: "HOẠT ĐỘNG", icon: "🎸", tone: "lilac", grammar: "Nói sở thích với “thích + động từ/danh từ”; hỏi người khác bằng “Bạn có thích … không?”.", words: [["đọc sách", "to read books"], ["nghe nhạc", "to listen to music"], ["đá bóng", "to play football"]], phrase: { vi: "Tôi thích nghe nhạc.", en: "I like listening to music.", pattern: "[Chủ ngữ] + thích + [hoạt động]." } },
  { title: "Thời tiết và mùa", topic: "Thời tiết & mùa", category: "THỜI TIẾT", icon: "🌦️", tone: "green", grammar: "Miêu tả thời tiết bằng “trời + tính từ”; hỏi với “thời tiết thế nào?”.", words: [["nắng", "sunny"], ["mưa", "rain"], ["mùa hè", "summer"]], phrase: { vi: "Hôm nay trời nắng.", en: "It is sunny today.", pattern: "Hôm nay + trời + [tính từ thời tiết]." } },
  { title: "Phương tiện đi lại", topic: "Phương tiện", category: "DI CHUYỂN", icon: "🚲", tone: "rose", grammar: "Nói cách di chuyển với “đi + địa điểm + bằng + phương tiện”.", words: [["xe buýt", "bus"], ["xe máy", "motorbike"], ["xe đạp", "bicycle"]], phrase: { vi: "Tôi đi học bằng xe buýt.", en: "I go to school by bus.", pattern: "[Chủ ngữ] + đi + [địa điểm] + bằng + [phương tiện]." } },
  { title: "Hoạt động hằng ngày", topic: "Hoạt động hằng ngày", category: "SINH HOẠT", icon: "🪥", tone: "peach", grammar: "Dùng “mỗi ngày” để nói thói quen; động từ không đổi theo chủ ngữ.", words: [["thức dậy", "to wake up"], ["ăn sáng", "to have breakfast"], ["đi ngủ", "to go to bed"]], phrase: { vi: "Mỗi ngày tôi ăn sáng lúc bảy giờ.", en: "I have breakfast at seven every day.", pattern: "Mỗi ngày + [chủ ngữ] + [động từ] + lúc + [giờ]." } },
  { title: "Cơ thể và sức khỏe", topic: "Cơ thể & sức khỏe", category: "SỨC KHỎE", icon: "🩺", tone: "yellow", grammar: "Nói triệu chứng với “bị/đau + bộ phận”; hỏi sức khỏe bằng “Bạn có khỏe không?”.", words: [["đầu", "head"], ["bụng", "stomach"], ["đau", "to hurt; pain"]], phrase: { vi: "Tôi bị đau đầu.", en: "I have a headache.", pattern: "[Chủ ngữ] + bị đau + [bộ phận]." } },
  { title: "Ngày tháng và sinh nhật", topic: "Ngày tháng & sinh nhật", category: "NGÀY ĐẶC BIỆT", icon: "🎂", tone: "blue", grammar: "Nói ngày tháng theo thứ tự ngày + tháng + năm; dùng “vào ngày” trước ngày cụ thể.", words: [["ngày sinh", "birthday; date of birth"], ["tháng", "month"], ["năm", "year"]], phrase: { vi: "Sinh nhật tôi vào ngày mười tháng Năm.", en: "My birthday is on May 10.", pattern: "[Sự kiện] + vào ngày + [ngày] + tháng + [tháng]." } },
  { title: "Khả năng và ngôn ngữ", topic: "Khả năng & ngôn ngữ", category: "KỸ NĂNG", icon: "💬", tone: "lilac", grammar: "Nói khả năng với “biết/có thể + động từ”; phủ định bằng “không” trước động từ.", words: [["biết nói", "to know how to speak"], ["đọc", "to read"], ["viết", "to write"]], phrase: { vi: "Tôi biết nói một chút tiếng Việt.", en: "I can speak a little Vietnamese.", pattern: "[Chủ ngữ] + biết + [động từ] + một chút." } },
  { title: "Yêu cầu và xin phép", topic: "Yêu cầu & xin phép", category: "GIAO TIẾP", icon: "🙏", tone: "rose", grammar: "Yêu cầu lịch sự với “làm ơn/giúp”; xin phép bằng “Tôi có thể … không?”.", words: [["làm ơn", "please"], ["giúp", "to help"], ["mở", "to open"]], phrase: { vi: "Bạn mở cửa giúp tôi được không?", en: "Could you open the door for me?", pattern: "[Người nghe] + [động từ] + giúp + [người nói] + được không?" } },
  { title: "Kế hoạch cuối tuần", topic: "Kế hoạch cuối tuần", category: "KẾ HOẠCH", icon: "🗓️", tone: "green", grammar: "Nói dự định với “sẽ + động từ”; từ chỉ thời gian có thể đứng đầu câu.", words: [["cuối tuần", "weekend"], ["ngày mai", "tomorrow"], ["đi chơi", "to go out"]], phrase: { vi: "Cuối tuần này tôi sẽ đi chơi.", en: "I will go out this weekend.", pattern: "[Thời gian] + [chủ ngữ] + sẽ + [động từ]." } },
];

registerCourseUnits(a1AdditionalUnits, lessons, lessonContent, vocabularyTopics, vocabularyWords, phrasePatterns);

const advancedBlueprints = [
  { category: "CÔNG VIỆC", icon: "💼", tone: "peach", titles: ["Cân bằng công việc và cuộc sống", "Năng suất và văn hóa làm việc", "Tái định hình quan niệm về công việc", "Lao động, thời gian và phẩm giá"], grammars: ["Mặc dù … nhưng … để diễn đạt sự tương phản.", "Không chỉ … mà còn … để bổ sung luận điểm.", "Cần phân biệt giữa … và … khi phân tích khái niệm.", "Việc quy giản … thành … bỏ qua những điều kiện lịch sử và xã hội."], seed: "Sau một thời gian làm thêm giờ, một nhóm nhân viên đề nghị công ty thử tuần làm việc linh hoạt. Họ vẫn hoàn thành nhiệm vụ, nhưng chủ động sắp xếp thời gian để chăm sóc gia đình và nghỉ ngơi. Câu chuyện khiến mọi người bàn luận về năng suất và chất lượng sống.", terms: [["làm thêm giờ", "to work overtime"], ["năng suất", "productivity"]] },
  { category: "CÔNG NGHỆ", icon: "💻", tone: "blue", titles: ["Công nghệ trong đời sống hằng ngày", "Dịch vụ số và khoảng cách tiếp cận", "Hạ tầng số trong xã hội hiện đại", "Công nghệ như một thiết chế xã hội"], grammars: ["Dùng “vì … nên …” để nối nguyên nhân và kết quả.", "Dùng “trong khi … thì …” để đối chiếu hai nhóm.", "Dùng “không phải … mà là …” để hiệu chỉnh cách hiểu.", "Cần đặt mệnh đề … trong tương quan với … thay vì xem nó như yếu tố độc lập."], seed: "Ở một khu phố, người dân có thể đặt lịch khám và thanh toán hóa đơn bằng điện thoại. Người trẻ thích sự nhanh chóng, còn một số người lớn tuổi vẫn cần nhân viên hướng dẫn. Tiện ích mới vì thế cũng đặt ra câu hỏi về khả năng tiếp cận.", terms: [["dịch vụ số", "digital service"], ["khả năng tiếp cận", "accessibility"]] },
  { category: "ĐÔ THỊ", icon: "🚆", tone: "green", titles: ["Đi lại trong thành phố", "Giao thông công cộng và lựa chọn cá nhân", "Quy hoạch đô thị lấy con người làm trung tâm", "Không gian đô thị và quyền được di chuyển"], grammars: ["Dùng “nếu … thì …” cho một điều kiện có thể xảy ra.", "Dùng “dù … vẫn …” để nêu kết quả trái dự đoán.", "Dùng “điều này dẫn đến …” để trình bày hệ quả.", "Mối liên hệ giữa … và … không thể được giải thích chỉ bằng …"], seed: "Khi tuyến xe buýt mới đi qua khu dân cư, một số người bắt đầu để xe máy ở nhà. Tuy vậy, người làm ca đêm cho biết chuyến cuối vẫn quá sớm. Thành phố đang lấy ý kiến để điều chỉnh giờ chạy và vị trí các điểm dừng.", terms: [["tuyến xe buýt", "bus route"], ["điểm dừng", "stop; station"]] },
  { category: "SỨC KHỎE", icon: "🌿", tone: "lilac", titles: ["Thói quen chăm sóc sức khỏe", "Phòng bệnh và trách nhiệm cộng đồng", "Truyền thông sức khỏe trong thời đại thông tin", "Rủi ro, tri thức và quyết định y tế"], grammars: ["Dùng “nên/không nên” để đưa lời khuyên.", "Dùng “vừa … vừa …” để mô tả hai đặc điểm đồng thời.", "Dùng “theo …” để quy chiếu quan điểm hoặc nguồn tin.", "Phân biệt điều đã được xác lập với điều vẫn còn bất định."], seed: "Một phòng khám tổ chức buổi tư vấn miễn phí về giấc ngủ và vận động. Người tham gia nhận ra rằng thay đổi nhỏ, như đi bộ sau bữa tối, dễ duy trì hơn kế hoạch quá tham vọng. Bác sĩ cũng nhắc mọi người kiểm tra thông tin sức khỏe từ nguồn đáng tin cậy.", terms: [["phòng bệnh", "prevention"], ["nguồn đáng tin cậy", "reliable source"]] },
  { category: "VĂN HÓA", icon: "🏛️", tone: "rose", titles: ["Di sản trong cộng đồng", "Bảo tồn di sản và phát triển du lịch", "Di sản sống giữa biến đổi xã hội", "Ai có quyền định nghĩa tính xác thực của di sản?"], grammars: ["Dùng “được …” trong câu bị động đơn giản.", "Dùng “thay vì …” để nêu lựa chọn khác.", "Dùng “vừa … vừa …” để diễn đạt hai chức năng song hành.", "Khái niệm … cần được xem xét từ vị thế của những cộng đồng liên quan."], seed: "Người dân trong một làng nghề mở cửa xưởng cho khách tham quan, đồng thời tiếp tục làm sản phẩm theo đơn đặt hàng. Một số nghệ nhân lo rằng hoạt động biểu diễn ngắn sẽ thay thế việc truyền nghề lâu dài. Cộng đồng đang tìm cách giữ cả sinh kế lẫn tri thức nghề.", terms: [["làng nghề", "craft village"], ["truyền nghề", "pass on a craft"]] },
  { category: "MÔI TRƯỜNG", icon: "🌱", tone: "green", titles: ["Giảm rác thải trong khu phố", "Từ thói quen xanh đến chính sách môi trường", "Chuyển đổi khí hậu và trách nhiệm liên đới", "Công bằng khí hậu và giới hạn của giải pháp"], grammars: ["Dùng “để” để nêu mục đích của hành động.", "Dùng “không những … mà còn …” để mở rộng tác động.", "Dùng “trong bối cảnh …” để đặt vấn đề vào điều kiện rộng hơn.", "Cần cân nhắc cả hệ quả trực tiếp lẫn hệ quả phân bổ của chính sách."], seed: "Một chợ dân sinh thử nghiệm quầy không dùng túi nhựa. Tiểu thương được phát túi giấy nhưng phản ánh chi phí cao hơn, còn khách mua hàng cần thời gian để mang túi cá nhân. Ban quản lý đang khảo sát để chọn phương án thuận tiện và ít rác hơn.", terms: [["rác thải nhựa", "plastic waste"], ["túi cá nhân", "reusable bag"]] },
  { category: "DU LỊCH", icon: "🧭", tone: "yellow", titles: ["Một chuyến đi có trách nhiệm", "Du lịch địa phương và lợi ích cộng đồng", "Giới hạn tăng trưởng của điểm đến", "Du lịch, quyền sở hữu và phân phối lợi ích"], grammars: ["Dùng “trước khi/sau khi” để sắp xếp trình tự.", "Dùng “nhờ …” để nêu nguyên nhân tích cực.", "Dùng “tuy nhiên” để chuyển sang góc nhìn đối lập.", "Không thể đánh giá … nếu chỉ dựa trên số lượng …"], seed: "Một nhóm du khách chọn ở nhà dân và thuê hướng dẫn viên địa phương. Họ được nghe câu chuyện về vùng đất từ người sống ở đó, nhưng cũng nhận thấy giá thuê nhà tăng trong mùa cao điểm. Người tổ chức muốn trao đổi với cư dân trước khi mở rộng tour.", terms: [["hướng dẫn viên địa phương", "local guide"], ["mùa cao điểm", "peak season"]] },
  { category: "GIÁO DỤC", icon: "📚", tone: "blue", titles: ["Học tập suốt đời", "Đánh giá năng lực thay vì chỉ ghi nhớ", "Cơ hội học tập trong xã hội biến động", "Tri thức, chuẩn hóa và quyền tự chủ trong giáo dục"], grammars: ["Dùng “bởi vì” để giải thích lý do.", "Dùng “không chỉ … mà còn …” để bổ sung luận điểm.", "Dùng “được cho là” để nêu quan điểm chưa xác minh.", "Việc đồng nhất … với … che khuất sự khác biệt giữa …"], seed: "Một thư viện cộng đồng mở lớp kỹ năng số vào buổi tối. Người tham gia gồm học sinh, người đi làm và người lớn tuổi. Giáo viên nhận thấy học viên tiến bộ nhanh hơn khi bài tập gắn với việc họ cần làm hằng ngày, thay vì chỉ học theo ví dụ trong sách.", terms: [["kỹ năng số", "digital skills"], ["học tập suốt đời", "lifelong learning"]] },
  { category: "ẨM THỰC", icon: "🍲", tone: "peach", titles: ["Ẩm thực và ký ức gia đình", "Nguồn gốc thực phẩm và lựa chọn tiêu dùng", "Hệ thống thực phẩm trước sức ép khí hậu", "Ẩm thực, bản sắc và kinh tế chính trị"], grammars: ["Dùng “mỗi khi” để nói về sự việc lặp lại.", "Dùng “mặc dù … nhưng …” để cân nhắc hai mặt.", "Dùng “xét về …” để phân chia tiêu chí đánh giá.", "Cách diễn giải … phụ thuộc vào việc ta đặt trọng tâm ở …"], seed: "Một quán ăn gia đình ghi lại công thức của bà chủ trước khi bà nghỉ bán. Món ăn vẫn giữ hương vị quen thuộc, nhưng nguyên liệu được mua từ những hộ nông dân gần đó. Thực khách thích câu chuyện phía sau món ăn, còn người nấu lo chi phí sẽ tăng.", terms: [["công thức gia đình", "family recipe"], ["nguyên liệu địa phương", "local ingredients"]] },
  { category: "DI CƯ", icon: "🧳", tone: "lilac", titles: ["Bắt đầu cuộc sống ở nơi mới", "Di cư và khả năng hòa nhập", "Di động dân cư và cấu trúc đô thị", "Thuộc về, quốc tịch và kinh nghiệm di cư"], grammars: ["Dùng “khi … thì …” để kể hai việc liên quan.", "Dùng “càng … càng …” để diễn đạt mức độ thay đổi.", "Dùng “trong khi đó” để đặt các trải nghiệm cạnh nhau.", "Không nên coi … là một kinh nghiệm đồng nhất, bởi …"], seed: "Sau khi chuyển đến thành phố, chị Hoa mất vài tháng mới quen đường đi và tìm được nhóm bạn. Chị vẫn gọi điện về quê mỗi tuần và gửi tiền phụ giúp gia đình. Câu chuyện của chị cho thấy việc chuyển nơi ở liên quan đến cả cơ hội lẫn trách nhiệm.", terms: [["hòa nhập", "integration"], ["quê nhà", "hometown"]] },
  { category: "NHÀ Ở", icon: "🏘️", tone: "rose", titles: ["Tìm một nơi ở phù hợp", "Nhà ở vừa túi tiền tại đô thị", "Nhà ở như một hạ tầng xã hội", "Thị trường nhà ở và quan niệm về quyền sở hữu"], grammars: ["Dùng “vì … nên …” để nêu quan hệ nguyên nhân.", "Dùng “trong khi … thì …” để so sánh tình huống.", "Dùng “đặt ra câu hỏi về …” để mở rộng vấn đề.", "Cần phân biệt quyền tiếp cận nhà ở với khả năng sở hữu tài sản."], seed: "Một khu nhà trọ gần trường đại học vừa sửa lại hệ thống điện và thêm chỗ sinh hoạt chung. Người thuê đánh giá cao không gian sạch sẽ, nhưng tiền thuê mới vượt quá ngân sách của một số sinh viên. Chủ nhà đang cân nhắc cách giữ phòng có mức giá thấp.", terms: [["tiền thuê", "rent"], ["nhà ở vừa túi tiền", "affordable housing"]] },
  { category: "TRÍ TUỆ NHÂN TẠO", icon: "🤖", tone: "blue", titles: ["Trợ lý AI trong việc học", "Tự động hóa và tương lai việc làm", "Quản trị trí tuệ nhân tạo có trách nhiệm", "Giới hạn nhận thức của hệ thống trí tuệ nhân tạo"], grammars: ["Dùng “có thể” để nói về khả năng.", "Dùng “nếu … thì …” để phân tích hệ quả.", "Dùng “điều kiện tiên quyết” để trình bày yêu cầu.", "Cần tách biệt năng lực dự đoán của mô hình với hiểu biết về ngữ cảnh."], seed: "Một lớp học cho phép học viên dùng công cụ AI để gợi ý dàn ý, nhưng yêu cầu ghi rõ phần nào do mình tự viết. Giáo viên nhận thấy bài làm trôi chảy hơn, song việc kiểm tra nguồn và sửa nội dung sai vẫn cần kỹ năng của người học.", terms: [["tự động hóa", "automation"], ["ngữ cảnh", "context"]] },
  { category: "TRUYỀN THÔNG", icon: "📰", tone: "yellow", titles: ["Kiểm tra tin trước khi chia sẻ", "Tin giả và niềm tin công chúng", "Báo chí dữ liệu và trách nhiệm giải trình", "Thẩm quyền tri thức trong môi trường truyền thông"], grammars: ["Dùng “trước khi” để nhắc về trình tự cần thiết.", "Dùng “không phải … mà …” để đính chính.", "Dùng “dựa trên …” để xác định cơ sở lập luận.", "Việc một thông tin được lan truyền rộng rãi không đồng nghĩa với việc nó đã được kiểm chứng."], seed: "Một bức ảnh cũ được chia sẻ lại với chú thích nói rằng sự kiện vừa xảy ra. Một nhóm học sinh tìm ảnh gốc và so sánh thời điểm đăng. Họ phát hiện nội dung đã bị đổi ngữ cảnh, rồi viết hướng dẫn ngắn để bạn bè kiểm tra trước khi chia sẻ.", terms: [["kiểm chứng", "verification"], ["ngữ cảnh", "context"]] },
  { category: "CỘNG ĐỒNG", icon: "🤝", tone: "green", titles: ["Tình nguyện trong khu phố", "Sự tham gia của người dân vào quyết định địa phương", "Tham vấn cộng đồng và chất lượng chính sách", "Tham gia, đại diện và tính chính danh"], grammars: ["Dùng “cùng nhau” để nhấn mạnh hành động chung.", "Dùng “để … có thể …” để nói về điều kiện hỗ trợ.", "Dùng “mức độ … phụ thuộc vào …” để nêu quan hệ.", "Cần xem xét ai được mời tham gia, ai vắng mặt và ý kiến được xử lý ra sao."], seed: "Khi phường dự định cải tạo sân chơi, cư dân đề nghị tổ chức buổi góp ý vào cuối tuần thay vì giờ hành chính. Bản thiết kế được sửa sau khi trẻ em và người khuyết tật nêu nhu cầu riêng. Nhóm điều phối đang tìm cách duy trì đối thoại sau buổi họp.", terms: [["góp ý", "feedback"], ["tham vấn cộng đồng", "community consultation"]] },
  { category: "NGÔN NGỮ", icon: "🗣️", tone: "lilac", titles: ["Học ngôn ngữ qua giao tiếp", "Phương ngữ và cơ hội trong giáo dục", "Biến đổi ngôn ngữ giữa các thế hệ", "Chuẩn ngôn ngữ, quyền lực và căn tính"], grammars: ["Dùng “càng … càng …” để nói về tiến bộ.", "Dùng “thay vì …” để nêu cách tiếp cận khác.", "Dùng “không thể tách rời khỏi …” để bàn về mối liên hệ.", "Việc xem một biến thể là chuẩn mực luôn gắn với bối cảnh xã hội cụ thể."], seed: "Trong gia đình, bà nói giọng địa phương còn cháu dùng nhiều từ trên mạng. Hai thế hệ đôi khi hiểu khác nhau, nhưng họ bắt đầu ghi âm câu chuyện của bà để cùng tìm nghĩa. Việc học tiếng Việt vì vậy trở thành dịp để chia sẻ kinh nghiệm.", terms: [["phương ngữ", "regional dialect"], ["biến thể ngôn ngữ", "language variety"]] },
  { category: "BẤT BÌNH ĐẲNG", icon: "⚖️", tone: "rose", titles: ["Cơ hội tiếp cận dịch vụ công", "Khoảng cách cơ hội giữa các nhóm", "Bất bình đẳng và cách đo lường xã hội", "Công bằng, phân phối và khác biệt về nhu cầu"], grammars: ["Dùng “không phải ai cũng …” để nêu sự khác biệt.", "Dùng “đặc biệt là” để nhấn mạnh nhóm liên quan.", "Dùng “xét theo …” để xác định thước đo.", "Một chỉ số tổng hợp có thể che khuất những chênh lệch đáng kể giữa các nhóm."], seed: "Một điểm tư vấn lưu động đến các xã xa trung tâm để hỗ trợ người dân làm thủ tục trực tuyến. Số hồ sơ hoàn tất tăng, nhưng người không có điện thoại thông minh vẫn cần được giúp riêng. Nhóm tổ chức đang theo dõi cả kết quả lẫn những trường hợp chưa tiếp cận được.", terms: [["dịch vụ công", "public service"], ["chênh lệch", "disparity"]] },
  { category: "BÌNH ĐẲNG", icon: "🌍", tone: "peach", titles: ["Chia sẻ việc nhà trong gia đình", "Bình đẳng giới trong môi trường làm việc", "Chăm sóc không lương và chính sách xã hội", "Công nhận, phân phối và quan hệ quyền lực"], grammars: ["Dùng “cần phải” để nói về sự cần thiết.", "Dùng “mặc dù … nhưng …” để chỉ ra khoảng cách.", "Dùng “bên cạnh … còn …” để bổ sung góc nhìn.", "Phân tích bình đẳng cần xét đồng thời việc phân phối nguồn lực và sự công nhận."], seed: "Một công ty thử lịch làm việc linh hoạt cho cha mẹ có con nhỏ. Nhân viên hài lòng hơn, nhưng nhiều người vẫn ngại xin nghỉ vì sợ bị đánh giá thiếu cam kết. Nhóm quản lý đang xem lại tiêu chí đánh giá và phân chia trách nhiệm chăm sóc.", terms: [["việc chăm sóc", "care work"], ["linh hoạt", "flexibility"]] },
  { category: "MẠNG XÃ HỘI", icon: "📱", tone: "blue", titles: ["Mạng xã hội và thời gian cá nhân", "Thuật toán gợi ý và lựa chọn nội dung", "Thiết kế nền tảng và hành vi công chúng", "Kinh tế chú ý và quyền tự chủ của người dùng"], grammars: ["Dùng “dù … nhưng …” để nêu hai mặt.", "Dùng “càng … càng …” để mô tả xu hướng.", "Dùng “không chỉ … mà còn …” để phân tích tác động.", "Tác động của thuật toán cần được phân biệt khỏi cách người dùng diễn giải và phản hồi."], seed: "Một sinh viên nhận thấy mình thường xem video lâu hơn dự định vì ứng dụng tự phát nội dung tiếp theo. Bạn ấy thử tắt thông báo và đặt giới hạn thời gian. Thay đổi này giúp tập trung hơn, dù thói quen mở ứng dụng vẫn chưa biến mất.", terms: [["thông báo", "notification"], ["thuật toán gợi ý", "recommendation algorithm"]] },
  { category: "NĂNG LƯỢNG", icon: "⚡", tone: "yellow", titles: ["Tiết kiệm điện tại nơi làm việc", "Năng lượng tái tạo và chuyển dịch nghề nghiệp", "Chuyển dịch năng lượng trong bối cảnh địa phương", "Chuyển đổi năng lượng và nghĩa vụ chuyển tiếp công bằng"], grammars: ["Dùng “bằng cách” để giới thiệu phương thức.", "Dùng “cùng với …” để nêu yếu tố đồng hành.", "Dùng “đòi hỏi phải …” để nêu yêu cầu.", "Tính khả thi của chuyển đổi phụ thuộc vào cách chi phí và lợi ích được phân bổ."], seed: "Một nhà máy lắp hệ thống điện mặt trời trên mái và giảm điện dùng vào giờ cao điểm. Công nhân được hướng dẫn vận hành thiết bị mới, nhưng một số vị trí cũ cần đào tạo lại. Ban quản lý đang lên kế hoạch chuyển đổi theo từng giai đoạn.", terms: [["điện mặt trời", "solar power"], ["đào tạo lại", "retraining"]] },
  { category: "DÂN SỐ", icon: "👵", tone: "lilac", titles: ["Kết nối các thế hệ trong gia đình", "Xã hội già hóa và dịch vụ chăm sóc", "Biến đổi dân số và hạ tầng chăm sóc", "Lão hóa, phụ thuộc và quan niệm về tự chủ"], grammars: ["Dùng “vừa … vừa …” để miêu tả hai khía cạnh.", "Dùng “trong khi … thì …” để so sánh nhóm.", "Dùng “kéo theo …” để nêu hệ quả.", "Không nên đồng nhất tuổi cao với sự phụ thuộc nếu chưa xét điều kiện sống."], seed: "Ở một khu dân cư, câu lạc bộ người cao tuổi mở buổi hướng dẫn dùng ứng dụng y tế. Con cháu hỗ trợ đăng ký, còn các thành viên lớn tuổi chia sẻ kinh nghiệm chăm sóc sức khỏe. Hoạt động giúp họ tự tin hơn và tạo thêm kết nối giữa các thế hệ.", terms: [["người cao tuổi", "older adults"], ["chăm sóc", "care"]] },
  { category: "KHÔNG GIAN CÔNG CỘNG", icon: "🌳", tone: "green", titles: ["Công viên gần nơi ở", "Không gian công cộng và quyền tiếp cận", "Không gian xanh trong cấu trúc đô thị", "Không gian chung, sở hữu và quyền hiện diện"], grammars: ["Dùng “nơi mà” để bổ nghĩa cho địa điểm.", "Dùng “không chỉ … mà còn …” để nói về nhiều chức năng.", "Dùng “có nguy cơ … nếu …” để phân tích rủi ro.", "Việc thiết kế không gian chung hàm ý lựa chọn về ai được chào đón và sử dụng."], seed: "Một bãi đất trống được cải tạo thành công viên nhỏ với đường dốc, ghế nghỉ và khu vui chơi. Người dân nhiều lứa tuổi cùng sử dụng, nhưng lịch mở cửa chưa phù hợp với công nhân về muộn. Ban quản lý đang lấy ý kiến về thời gian hoạt động.", terms: [["không gian công cộng", "public space"], ["đường dốc", "ramp"]] },
  { category: "KHOA HỌC", icon: "🔬", tone: "blue", titles: ["Tìm hiểu một kết quả nghiên cứu", "Khoa học, bằng chứng và truyền thông", "Tính toàn vẹn trong nghiên cứu khoa học", "Bằng chứng, bất định và giới hạn của tri thức"], grammars: ["Dùng “theo nghiên cứu” để dẫn nguồn thông tin.", "Dùng “không đồng nghĩa với” để phân biệt khái niệm.", "Dùng “trong phạm vi …” để giới hạn kết luận.", "Một kết quả có ý nghĩa thống kê không tự động chứng minh ý nghĩa nhân quả."], seed: "Một bản tin nói rằng uống một loại trà giúp cải thiện trí nhớ. Khi đọc kỹ, nhóm sinh viên thấy nghiên cứu chỉ khảo sát số người nhỏ trong thời gian ngắn. Họ tìm thêm nguồn khác và học cách phân biệt kết quả ban đầu với kết luận chắc chắn.", terms: [["bằng chứng", "evidence"], ["nhân quả", "causality"]] },
  { category: "KINH TẾ ĐỊA PHƯƠNG", icon: "🏪", tone: "peach", titles: ["Ủng hộ cửa hàng địa phương", "Kinh tế địa phương trong chuỗi cung ứng", "Doanh nghiệp nhỏ và khả năng chống chịu", "Tăng trưởng địa phương và quan hệ phụ thuộc"], grammars: ["Dùng “nếu … thì …” để nêu điều kiện.", "Dùng “nhờ … mà …” để nêu nguyên nhân tích cực.", "Dùng “mặt khác” để chuyển sang phương diện khác.", "Cần phân biệt năng lực thích ứng trước mắt với khả năng chống chịu dài hạn."], seed: "Sau khi một con đường được sửa, cửa hàng gia đình trong khu phố có thêm khách. Chủ tiệm kết nối với người trồng rau gần đó để bán sản phẩm theo mùa. Tuy nhiên, chi phí vận chuyển vẫn cao, nên họ đang chia sẻ xe giao hàng với các hộ kinh doanh khác.", terms: [["chuỗi cung ứng", "supply chain"], ["khả năng chống chịu", "resilience"]] },
  { category: "BẢN SẮC", icon: "🎭", tone: "rose", titles: ["Lễ hội và bản sắc địa phương", "Bản sắc vùng miền trong xã hội di động", "Ký ức đô thị và những câu chuyện bị lãng quên", "Bản sắc tập thể như một quá trình thương lượng"], grammars: ["Dùng “đối với” để nêu quan hệ với một nhóm.", "Dùng “không chỉ … mà còn …” để bổ sung ý nghĩa.", "Dùng “được hình thành qua …” để mô tả quá trình.", "Cần xem bản sắc là một quá trình được thương lượng, không phải thuộc tính bất biến."], seed: "Một nhóm bạn trẻ lập bản đồ những địa điểm gắn với ký ức của cư dân lâu năm. Có nơi đã thay đổi công năng, nhưng câu chuyện về khu chợ cũ vẫn được truyền lại. Nhóm mời nhiều thế hệ cùng bổ sung tư liệu để tránh chỉ giữ một góc nhìn.", terms: [["ký ức tập thể", "collective memory"], ["bản sắc địa phương", "local identity"]] },
  { category: "KHÍ HẬU", icon: "🌦️", tone: "green", titles: ["Chuẩn bị trước mùa mưa", "Thích ứng khí hậu tại cộng đồng", "Rủi ro thiên tai và năng lực thích ứng", "Rủi ro khí hậu, trách nhiệm và công bằng liên thế hệ"], grammars: ["Dùng “trong trường hợp …” để nói về tình huống.", "Dùng “để … tránh …” để nêu mục đích và rủi ro.", "Dùng “mức độ tổn thương” để diễn đạt khái niệm chuyên môn.", "Đánh giá rủi ro cần tính đến cả phơi nhiễm, mức độ dễ tổn thương và năng lực ứng phó."], seed: "Trước mùa mưa, người dân ven kênh cùng kiểm tra lối thoát nước và lập danh sách người cần hỗ trợ khi sơ tán. Kế hoạch mới bổ sung bản đồ các điểm ngập từng bị bỏ qua. Tổ dân phố sẽ diễn tập để mọi người biết nơi tập trung.", terms: [["sơ tán", "evacuation"], ["mức độ dễ tổn thương", "vulnerability"]] },
  { category: "CHÍNH SÁCH", icon: "🏛️", tone: "lilac", titles: ["Góp ý cho một thay đổi ở địa phương", "Từ ý kiến người dân đến chính sách", "Thiết kế chính sách dựa trên dữ liệu", "Tri thức chuyên môn và tính chính danh của chính sách"], grammars: ["Dùng “theo ý kiến của” để nêu quan điểm.", "Dùng “trước khi … cần …” để đề xuất trình tự.", "Dùng “không thể chỉ dựa vào …” để giới hạn phương pháp.", "Tính hợp thức về thủ tục không thay thế cho việc giải trình về hệ quả."], seed: "Một dự thảo thay đổi giờ hoạt động của chợ được đăng trực tuyến để người dân góp ý. Tiểu thương đề nghị thêm thời gian chuyển tiếp, còn cư dân gần đó lo tiếng ồn buổi tối. Cơ quan phụ trách đang tổng hợp ý kiến trước khi công bố quyết định.", terms: [["dự thảo", "draft proposal"], ["giải trình", "accountability"]] },
  { category: "LỐI SỐNG", icon: "🧘", tone: "yellow", titles: ["Thói quen sống lành mạnh", "Tiêu dùng có trách nhiệm", "Đo lường chất lượng sống ngoài thu nhập", "Phúc lợi, tự do lựa chọn và giới hạn của chỉ số"], grammars: ["Dùng “thay vì” để nêu lựa chọn thay thế.", "Dùng “điều quan trọng là …” để nhấn mạnh.", "Dùng “không nhất thiết phản ánh …” để hạn chế suy luận.", "Một thước đo hữu ích vẫn có thể bỏ sót những giá trị khó lượng hóa."], seed: "Một nhóm cư dân lập câu lạc bộ đi bộ buổi sáng thay vì chỉ đặt mục tiêu tập luyện riêng. Thành viên cùng chọn cung đường an toàn và ghi lại cảm nhận về giấc ngủ. Họ nhận ra sức khỏe còn chịu ảnh hưởng từ thời gian rảnh và điều kiện khu phố.", terms: [["chất lượng sống", "quality of life"], ["tiêu dùng có trách nhiệm", "responsible consumption"]] },
  { category: "TƯƠNG LAI", icon: "🔭", tone: "blue", titles: ["Mục tiêu học tập trong năm tới", "Kỹ năng cần thiết cho công việc tương lai", "Tương lai việc làm và lựa chọn chính sách", "Tương lai không tất định: dự báo và trách nhiệm"], grammars: ["Dùng “dự định/sẽ” để diễn đạt kế hoạch.", "Dùng “có khả năng” để nói về dự đoán.", "Dùng “nếu … thì …” để xây dựng kịch bản.", "Dự báo nên được hiểu như kịch bản có điều kiện, không phải lời khẳng định về tương lai."], seed: "Một trung tâm nghề nghiệp mời người lao động dự đoán kỹ năng họ sẽ cần trong vài năm tới. Có người chọn học phân tích dữ liệu, người khác ưu tiên kỹ năng giao tiếp. Trung tâm đang tổ chức các khóa ngắn để người học có thể thử trước khi đổi nghề.", terms: [["dự báo", "forecast"], ["kịch bản", "scenario"]] },
];

const readingPassages = {
  a1: [
    { text: "Mimi học tiếng Việt mỗi ngày. Cô đọc từng chữ thật chậm: a, ă, â. Sau đó, cô luyện các tiếng ma, mà, má. Cô nghe kỹ dấu thanh rồi đọc lại một lần nữa.", questions: ["Mimi học tiếng gì?", "Cô luyện những tiếng nào?"] },
    { text: "An gặp Lan ở lớp tiếng Việt. An nói: “Xin chào! Mình tên là An. Bạn tên là gì?” Lan vui vẻ trả lời: “Mình tên là Lan. Rất vui được gặp bạn!”", questions: ["An gặp Lan ở đâu?", "Lan tên là gì?"] },
    { text: "Tôi tên là David. Tôi đến từ Canada và nói tiếng Anh. Bây giờ tôi sống ở Thành phố Hồ Chí Minh. Tôi đang học tiếng Việt để nói chuyện với bạn bè.", questions: ["David đến từ đâu?", "David học tiếng Việt để làm gì?"] },
    { text: "Mai năm nay hai mươi tuổi. Em trai Mai mười tám tuổi. Hôm nay, hai chị em điền thông tin và ghi số điện thoại của gia đình.", questions: ["Mai bao nhiêu tuổi?", "Em trai Mai bao nhiêu tuổi?"] },
    { text: "Đây là gia đình của Bình. Nhà Bình có bốn người: bố, mẹ, chị gái và Bình. Cuối tuần, cả nhà thường ăn cơm và trò chuyện cùng nhau.", questions: ["Gia đình Bình có mấy người?", "Cuối tuần gia đình Bình thường làm gì?"] },
    { text: "Buổi trưa, Hoa đến một quán ăn gần trường. Hoa gọi một tô phở và một cốc nước. Món phở nóng và ngon. Ăn xong, Hoa cảm ơn cô phục vụ.", questions: ["Hoa gọi món gì?", "Quán ăn ở đâu?"] },
    { text: "Mỗi ngày Nam thức dậy lúc sáu giờ. Nam ăn sáng lúc sáu giờ rưỡi và đi học lúc bảy giờ. Buổi tối, Nam học bài rồi đi ngủ lúc mười giờ.", questions: ["Nam thức dậy lúc mấy giờ?", "Buổi tối Nam làm gì trước khi đi ngủ?"] },
    { text: "Linh muốn đến nhà thuốc nhưng không biết đường. Linh hỏi một chú bảo vệ. Chú nói: “Đi thẳng, rồi rẽ trái. Nhà thuốc ở bên phải, đối diện ngân hàng.”", questions: ["Linh muốn đi đâu?", "Nhà thuốc ở bên nào của đường?"] },
    { text: "Tôi gặp cô giáo ở lớp. Tôi xưng là “em” và gọi cô là “cô”. Khi nói chuyện với người lớn tuổi, tôi dùng cách xưng hô lịch sự. Cô hỏi tên tôi, rồi chào tôi bằng nụ cười.", questions: ["Người học gọi giáo viên là gì?", "Vì sao người học dùng cách xưng hô lịch sự?"] },
    { text: "Trên bàn có một quyển sách, một quyển vở và hai cây bút. Quyển vở màu xanh là của tôi. Cây bút màu đỏ là của bạn Minh. Đây là đồ dùng của chúng tôi trong lớp.", questions: ["Trên bàn có những đồ vật nào?", "Quyển vở màu xanh là của ai?"] },
    { text: "Mẹ tôi là bác sĩ, còn bố tôi là đầu bếp. Mẹ làm việc ở bệnh viện gần nhà. Bố nấu nhiều món ăn ngon. Tôi là sinh viên và rất yêu gia đình mình.", questions: ["Mẹ của người kể làm nghề gì?", "Bố làm việc gì?"] },
    { text: "Hôm nay tôi mặc áo sơ mi trắng và quần dài màu đen. Em gái tôi mặc váy màu xanh. Chúng tôi chuẩn bị đi dự sinh nhật bạn. Trời hôm nay rất đẹp.", questions: ["Người kể mặc áo màu gì?", "Hai chị em chuẩn bị đi đâu?"] },
    { text: "Chiều nay, Mai đi chợ mua trái cây. Cô hỏi giá một ký cam và chọn những quả tươi. Cam không đắt, nên Mai mua hai ký để cả nhà cùng ăn.", questions: ["Mai mua trái cây gì?", "Vì sao Mai mua hai ký cam?"] },
    { text: "Cuối tuần, tôi thích nghe nhạc và đọc sách ở nhà. Anh trai tôi thích đá bóng với bạn. Buổi tối, cả hai cùng xem một bộ phim hài và cười rất vui.", questions: ["Người kể thích làm gì?", "Anh trai thích hoạt động nào?"] },
    { text: "Mùa hè ở thành phố thường có nắng. Buổi chiều đôi khi trời mưa. Hôm nay trời mát, vì vậy chúng tôi đi dạo trong công viên sau giờ học.", questions: ["Thời tiết mùa hè thường thế nào?", "Hôm nay họ đi đâu?"] },
    { text: "Sáng nay, tôi đi học bằng xe buýt. Trạm xe buýt ở gần nhà. Tôi lên xe lúc bảy giờ và xuống xe trước trường. Bạn tôi đi học bằng xe đạp.", questions: ["Người kể đi học bằng phương tiện gì?", "Trạm xe buýt ở đâu?"] },
    { text: "Mỗi ngày, Thu thức dậy lúc sáu giờ. Thu đánh răng, ăn sáng rồi đi làm. Buổi tối, Thu nấu cơm và gọi điện cho mẹ. Thu thường đi ngủ lúc mười một giờ.", questions: ["Thu thức dậy lúc mấy giờ?", "Buổi tối Thu gọi điện cho ai?"] },
    { text: "Hôm nay, Tuấn bị đau đầu và hơi mệt. Tuấn uống nước rồi nghỉ ngơi ở nhà. Mẹ nói Tuấn nên ngủ sớm. Nếu ngày mai vẫn đau, Tuấn sẽ đi khám bác sĩ.", questions: ["Tuấn bị làm sao?", "Mẹ khuyên Tuấn nên làm gì?"] },
    { text: "Sinh nhật của Lan vào ngày mười tháng Năm. Năm nay, gia đình tổ chức tiệc nhỏ ở nhà. Lan mời ba người bạn đến ăn bánh và chụp ảnh cùng nhau.", questions: ["Sinh nhật Lan vào ngày nào?", "Lan mời mấy người bạn?"] },
    { text: "Tôi biết đọc và viết tiếng Việt một chút. Mỗi ngày, tôi học thêm từ mới ở lớp. Tôi chưa nói nhanh, nhưng tôi có thể giới thiệu tên và hỏi đường.", questions: ["Người kể biết làm gì bằng tiếng Việt?", "Người kể có thể hỏi điều gì?"] },
    { text: "Trong quán cà phê, tôi muốn ngồi gần cửa sổ. Tôi hỏi nhân viên: “Bạn cho mình ngồi ở đây được không?” Nhân viên mỉm cười và giúp tôi kéo ghế.", questions: ["Người kể muốn ngồi ở đâu?", "Nhân viên đã giúp gì?"] },
    { text: "Cuối tuần này, Hoa sẽ đi chơi với bạn. Hai người định đến công viên vào sáng thứ Bảy. Nếu trời mưa, họ sẽ ở nhà xem phim và nấu ăn.", questions: ["Hoa định đi đâu vào cuối tuần?", "Nếu trời mưa, hai người sẽ làm gì?"] },
    { text: "Minh sống trong một căn hộ nhỏ. Nhà có phòng khách, phòng ngủ và nhà bếp. Trong phòng khách có một chiếc bàn. Căn hộ sạch sẽ và gần trường học.", questions: ["Nhà Minh có những phòng nào?", "Căn hộ ở gần đâu?"] },
    { text: "Tôi thích học tiếng Việt vì tôi có nhiều bạn Việt Nam. Mỗi tuần, tôi học từ mới, đọc một đoạn ngắn và luyện nói với bạn. Tôi muốn nói chuyện tự nhiên hơn.", questions: ["Vì sao người kể học tiếng Việt?", "Mỗi tuần người kể luyện tập những gì?"] },
  ],
  a2: [
    { text: "Ngày thường, tôi thường thức dậy lúc sáu giờ và tập thể dục trước khi đi làm. Cuối tuần tôi dậy muộn hơn. Thỉnh thoảng, tôi đi bộ đến quán cà phê để đọc sách.", questions: ["Ngày thường người kể thức dậy lúc mấy giờ?", "Cuối tuần người kể thường đi đâu?"] },
    { text: "Lan làm việc trong một công ty nhỏ và đang học thêm tiếng Việt vào buổi tối. Tuần này cô có một cuộc họp quan trọng. Cô nhờ đồng nghiệp gửi tài liệu trước để chuẩn bị.", questions: ["Lan học tiếng Việt khi nào?", "Lan nhờ đồng nghiệp làm gì?"] },
    { text: "Tháng trước, gia đình tôi đi Huế bằng tàu hỏa. Chúng tôi đặt vé khứ hồi và mang ít hành lý. Tàu bị trễ nửa giờ, nhưng chuyến đi vẫn vui. Năm sau, chúng tôi sẽ đi Đà Nẵng.", questions: ["Gia đình đi Huế bằng phương tiện gì?", "Tàu bị trễ bao lâu?"] },
    { text: "Hôm qua, tôi đi mua áo khoác ở trung tâm thương mại. Chiếc áo màu xanh vừa vặn nhưng hơi đắt. Nhân viên nói cửa hàng đang giảm giá, vì vậy tôi quyết định mua.", questions: ["Chiếc áo vừa vặn như thế nào?", "Vì sao người kể quyết định mua áo?"] },
    { text: "Mấy ngày nay, Nam bị đau họng và hơi sốt. Nam nghỉ ở nhà vì muốn khỏe nhanh hơn. Bạn Nam khuyên cậu uống nước ấm và nên đi khám nếu ngày mai vẫn mệt.", questions: ["Nam bị triệu chứng gì?", "Bạn Nam khuyên Nam làm gì?"] },
    { text: "Cuối tuần, cả nhà cùng nấu bữa tối. Bố thái rau, mẹ nấu canh, còn tôi chiên cá. Món ăn hơi mặn nên lần sau mẹ sẽ cho ít muối hơn. Em gái tôi thích món luộc nhất.", questions: ["Gia đình nấu món gì?", "Em gái thích món nào nhất?"] },
    { text: "Theo dự báo, ngày mai trời sẽ mưa to ở thành phố. Vì vậy, Mai sẽ mang ô khi đi làm. Nếu mưa quá lớn, cô ấy sẽ đi xe buýt thay vì đi bộ.", questions: ["Ngày mai thời tiết thế nào?", "Nếu mưa lớn, Mai sẽ đi làm bằng gì?"] },
    { text: "Tôi thích chụp ảnh và nghe nhạc vào thời gian rảnh. Tuần trước, tôi đã xem một buổi biểu diễn ở nhà hát. Tôi chưa từng học nhiếp ảnh, nhưng muốn thử sức trong năm nay.", questions: ["Tuần trước người kể đã làm gì?", "Người kể muốn thử hoạt động nào?"] },
    { text: "Gia đình Hương vừa chuyển đến một khu phố mới. Nhà mới gần công viên và yên tĩnh hơn nhà cũ. Hàng xóm thân thiện, nên Hương cảm thấy thoải mái và nhanh chóng làm quen với mọi người.", questions: ["Nhà mới gần địa điểm nào?", "Vì sao Hương cảm thấy thoải mái?"] },
    { text: "Sáng nay, tôi đến bưu điện để gửi một bưu phẩm cho gia đình. Sau đó, tôi ghé hiệu thuốc mua thuốc cảm. Các cửa hàng đều gần nhau nên tôi làm xong việc trước buổi trưa.", questions: ["Người kể đến bưu điện để làm gì?", "Người kể mua gì ở hiệu thuốc?"] },
    { text: "Du khách hỏi đường đến bảo tàng. Một người dân chỉ: “Đi thẳng đến ngã tư, sau đó rẽ phải. Bảo tàng nằm cạnh bưu điện.” Du khách cảm ơn và tiếp tục đi bộ.", questions: ["Du khách muốn đến đâu?", "Bảo tàng nằm cạnh địa điểm nào?"] },
    { text: "Thứ Sáu, tôi mời đồng nghiệp đi ăn tối. Bạn ấy rảnh nên vui vẻ nhận lời. Chúng tôi chọn một quán gần công ty và hẹn gặp nhau lúc sáu giờ rưỡi.", questions: ["Người kể mời đồng nghiệp làm gì?", "Hai người hẹn gặp lúc mấy giờ?"] },
    { text: "Cuối tuần trước, tôi đã đến Đà Lạt với hai người bạn. Chúng tôi tham quan vườn hoa, uống cà phê và chụp nhiều ảnh. Trời lạnh nhưng chuyến đi rất thú vị.", questions: ["Người kể đã đi đâu?", "Thời tiết ở đó thế nào?"] },
    { text: "Hồi nhỏ, tôi thường về quê thăm ông bà vào mỗi mùa hè. Tôi chơi với các anh chị em họ và giúp bà tưới cây. Bây giờ, tôi sống ở thành phố nhưng vẫn nhớ những ngày ấy.", questions: ["Hồi nhỏ người kể thường làm gì ở quê?", "Bây giờ người kể sống ở đâu?"] },
    { text: "Theo tôi, học ngoại ngữ theo nhóm rất vui. Mỗi người có thể chia sẻ từ mới và giúp nhau sửa lỗi. Vì vậy, chúng tôi thường học cùng nhau vào chiều thứ Bảy.", questions: ["Người kể nghĩ gì về việc học theo nhóm?", "Nhóm thường học vào lúc nào?"] },
    { text: "Tôi thường đi làm bằng tàu điện vì nhanh và tiện lợi. Đi xe buýt rẻ hơn nhưng mất nhiều thời gian. Nếu trời đẹp, đôi khi tôi đi bộ để tập thể dục.", questions: ["Vì sao người kể đi làm bằng tàu điện?", "Khi nào người kể đi bộ?"] },
    { text: "Khi sang đường, chúng ta nên đi đúng vạch dành cho người đi bộ. Người đi xe máy phải đội mũ bảo hiểm. Bạn không nên nhìn điện thoại khi đang đi trên đường.", questions: ["Người đi xe máy phải làm gì?", "Người đi đường không nên làm gì?"] },
    { text: "Mỗi tối, tôi nghe một đoạn podcast tiếng Việt để luyện nghe. Tôi ghi lại từ mới vào sổ rồi đặt câu với những từ đó. Nhờ luyện tập đều đặn, tôi hiểu bài tốt hơn.", questions: ["Người kể nghe podcast để làm gì?", "Người kể làm gì với từ mới?"] },
    { text: "Hôm qua, điện thoại của tôi hết pin nên tôi không gọi được cho bạn. Tôi mượn sạc của đồng nghiệp và nhắn địa chỉ quán cà phê. Sau đó, chúng tôi gọi video để trao đổi kế hoạch.", questions: ["Vì sao người kể không gọi được cho bạn?", "Hai người gọi video để làm gì?"] },
    { text: "Vào dịp Tết, gia đình tôi thường về quê thăm ông bà. Mọi người cùng chuẩn bị món ăn và dọn dẹp nhà cửa. Sau khi ăn tối, cả nhà kể chuyện và chúc nhau một năm mới vui vẻ.", questions: ["Vào dịp Tết gia đình thường làm gì?", "Sau bữa tối, mọi người làm gì?"] },
    { text: "Cuối tuần, nhóm tôi đến bãi biển và thấy có nhiều rác trên cát. Chúng tôi cùng nhau nhặt rác rồi bỏ vào thùng. Mọi người nghĩ rằng giữ môi trường sạch sẽ là việc ai cũng nên làm.", questions: ["Nhóm thấy gì trên bãi biển?", "Mọi người đã làm gì để giúp môi trường?"] },
    { text: "Máy tính của tôi bị trục trặc trước buổi họp. Tôi khởi động lại nhưng máy vẫn không hoạt động. Đồng nghiệp đề nghị kiểm tra dây điện, còn tôi sẽ mang máy đi sửa nếu vẫn chưa được.", questions: ["Máy tính bị làm sao?", "Người kể sẽ làm gì nếu máy vẫn không hoạt động?"] },
    { text: "Năm sau, tôi dự định học tiếng Việt nâng cao và tìm một công việc ở Việt Nam. Tôi sẽ luyện nói mỗi ngày để tự tin hơn khi phỏng vấn. Đây là mục tiêu quan trọng của tôi.", questions: ["Người kể dự định làm gì năm sau?", "Vì sao người kể sẽ luyện nói mỗi ngày?"] },
    { text: "Sau khi tốt nghiệp đại học, Mai chuyển đến Thành phố Hồ Chí Minh để làm việc. Ban đầu cô chưa quen cuộc sống mới, nhưng dần dần cô kết bạn và tìm được căn hộ gần công ty.", questions: ["Mai chuyển đến thành phố nào sau khi tốt nghiệp?", "Sau đó Mai đã tìm được gì gần công ty?"] },
  ],
};

lessons.forEach((lesson, index) => { lesson.reading = readingPassages.a1[index]; });
a2Lessons.forEach((lesson, index) => { lesson.reading = readingPassages.a2[index]; });

const advancedLevelNames = ["b1", "b2", "c1", "c2"];
const advancedLevelDurations = { b1: "15 phút", b2: "20 phút", c1: "25 phút", c2: "30 phút" };
const advancedReadingCases = [
  {
    story: "Một nhóm nhân viên tại Thành phố Hồ Chí Minh thử đổi lịch làm việc để có thêm thời gian chăm sóc gia đình. Họ ghi lại giờ làm, số việc hoàn thành và mức độ mệt mỏi trong tám tuần.",
    balance: "Kết quả không giống nhau ở mọi bộ phận: nhóm cần gặp khách trực tiếp khó đổi ca hơn nhóm làm việc với tài liệu số. Vì vậy, công ty phải cân nhắc tính linh hoạt cùng sự công bằng giữa các vị trí.",
    evidence: "Bảng theo dõi nội bộ cho thấy số giờ có mặt giảm, nhưng chất lượng công việc và mức độ hài lòng vẫn cần được đo riêng. Một chỉ số duy nhất không thể đại diện cho toàn bộ hiệu quả.",
    implication: "Nếu áp dụng rộng hơn, doanh nghiệp nên công bố tiêu chí đánh giá, cho nhân viên góp ý và xem xét lại sau từng giai đoạn. Một thử nghiệm có giới hạn sẽ an toàn hơn lời hứa rằng một lịch làm việc phù hợp với tất cả.",
  },
  {
    story: "Một phường mở dịch vụ đặt lịch khám trực tuyến, nhưng nhiều người cao tuổi vẫn muốn gọi điện hoặc hỏi trực tiếp tại quầy. Nhóm thiết kế bổ sung hướng dẫn bằng hình ảnh và một bàn hỗ trợ vào buổi sáng.",
    balance: "Ứng dụng rút ngắn thời gian chờ với người sử dụng thành thạo, song không tự động giải quyết vấn đề tiếp cận. Thiết bị, kết nối mạng và khả năng đọc hướng dẫn đều ảnh hưởng đến trải nghiệm.",
    evidence: "Khi đánh giá dịch vụ, phường cần so sánh tỷ lệ hoàn tất lịch hẹn giữa các nhóm tuổi và ghi nhận cả những người bỏ dở thao tác. Chỉ đếm lượt tải ứng dụng sẽ tạo ra bức tranh thiếu hụt.",
    implication: "Một dịch vụ số có trách nhiệm nên duy trì lựa chọn ngoại tuyến và kiểm tra khả năng sử dụng với nhiều nhóm người. Dữ liệu cá nhân cũng cần được bảo vệ, bởi tiện lợi không thể là lý do bỏ qua quyền riêng tư.",
  },
  {
    story: "Một tuyến xe buýt mới kết nối khu dân cư với bệnh viện và trường đại học. Sau tháng đầu, hành khách đề nghị thêm chuyến sớm, trong khi người bán hàng quanh điểm dừng muốn có mái che và lối qua đường an toàn.",
    balance: "Số lượt khách tăng vào giờ cao điểm nhưng giảm rõ rệt sau tám giờ tối. Điều này cho thấy chất lượng giao thông không chỉ nằm ở số tuyến mà còn ở lịch chạy, độ an toàn và khoảng cách đi bộ.",
    evidence: "Nhật ký hành trình, khảo sát hành khách và dữ liệu đúng giờ có thể giúp xác định đoạn tuyến cần điều chỉnh. Mỗi nguồn đều có giới hạn: người trả lời khảo sát không nhất thiết đại diện cho người chưa từng đi xe.",
    implication: "Trước khi mở rộng, đơn vị vận hành có thể thử lịch mới trong một khu vực và công khai cách đo kết quả. Việc mời cư dân tham gia giúp phát hiện nhu cầu mà bản đồ giao thông khó thể hiện.",
  },
  {
    story: "Một phòng khám cộng đồng tổ chức buổi tư vấn về giấc ngủ và dinh dưỡng. Bác sĩ hướng dẫn người tham gia ghi lại giờ nghỉ ngơi, còn tình nguyện viên giúp họ phân biệt lời khuyên chuyên môn với quảng cáo sản phẩm.",
    balance: "Thay đổi nhỏ thường dễ duy trì hơn một kế hoạch quá nghiêm ngặt, nhưng điều kiện sống khiến mỗi người có lựa chọn khác nhau. Người làm ca đêm chẳng hạn không thể áp dụng nguyên lịch sinh hoạt của người làm giờ hành chính.",
    evidence: "Sổ theo dõi cá nhân hữu ích để bắt đầu trao đổi, nhưng không thay thế chẩn đoán y khoa. Thông tin sức khỏe cần nêu rõ nguồn, đối tượng áp dụng và những điều chưa được xác nhận.",
    implication: "Truyền thông sức khỏe nên tránh hứa hẹn kết quả chắc chắn hoặc quy trách nhiệm cho từng cá nhân. Một chương trình tốt kết hợp tư vấn đáng tin cậy với điều kiện để người dân thực sự làm theo.",
  },
  {
    story: "Tại một làng gốm, nghệ nhân mở xưởng cho khách xem cách tạo hình và nung sản phẩm. Một số gia đình muốn bán thêm đồ lưu niệm, còn người truyền nghề lo các buổi trình diễn ngắn sẽ lấn át thời gian học nghề.",
    balance: "Du lịch có thể tạo thu nhập và đưa sản phẩm đến khách hàng mới, nhưng tri thức nghề không thể truyền tải chỉ qua một buổi chụp ảnh. Cư dân cũng cần được tham gia quyết định câu chuyện nào được giới thiệu.",
    evidence: "Số lượt khách chưa cho biết thu nhập được chia ra sao hay có bao nhiêu người trẻ tiếp tục học nghề. Những thông tin này cần được hỏi trực tiếp từ nghệ nhân và hộ sản xuất.",
    implication: "Bảo tồn không có nghĩa là giữ mọi thứ bất động. Cộng đồng có thể thử nhiều hình thức giới thiệu, đồng thời dành thời gian và kinh phí cho việc truyền nghề do chính nghệ nhân hướng dẫn.",
  },
  {
    story: "Một khu chợ ở Đà Nẵng thử giảm túi nhựa bằng cách đặt quầy mượn giỏ và khuyến khích khách mang túi cá nhân. Tiểu thương được hỏi ý kiến về chi phí bao bì và cách giữ thực phẩm sạch.",
    balance: "Thay đổi thói quen cần thuận tiện; nếu giỏ mượn khó tìm hoặc phải trả lại xa, khách sẽ ít sử dụng. Bao bì thay thế cũng cần được đánh giá theo độ bền và cách xử lý sau khi dùng.",
    evidence: "Ban quản lý cân số túi phát ra, tỷ lệ giỏ được trả và chi phí của từng quầy trước khi kết luận chương trình có hiệu quả. Một tuần thử nghiệm chưa đủ để phản ánh mùa cao điểm.",
    implication: "Chính sách môi trường sẽ công bằng hơn nếu hỗ trợ những tiểu thương ít vốn và công khai dữ liệu. Trách nhiệm giảm rác nên được chia sẻ giữa người bán, người mua và đơn vị quản lý.",
  },
  {
    story: "Một nhóm khách đến Hội An chọn thuê hướng dẫn viên địa phương và ăn tại những quán do cư dân giới thiệu. Họ nhận ra lượng khách đông cũng gây áp lực lên đường phố, nhà ở và sinh hoạt thường ngày.",
    balance: "Chi tiêu của du khách có thể hỗ trợ dịch vụ địa phương, nhưng lợi ích không tự động đến với mọi hộ dân. Mùa cao điểm còn làm tăng giá thuê và khiến không gian chung trở nên quá tải.",
    evidence: "Để hiểu tác động, nhóm tổ chức cần nghe cả hộ kinh doanh, người lao động và cư dân không làm du lịch. Số lượt khách chỉ đo quy mô, không cho biết cộng đồng nhận được bao nhiêu giá trị.",
    implication: "Một kế hoạch tham quan có trách nhiệm nên đặt sức chứa, quyền lợi cư dân và bảo tồn di sản vào cùng cuộc thảo luận. Tăng trưởng bền vững có thể đòi hỏi giới hạn thay vì quảng bá thêm.",
  },
  {
    story: "Một thư viện ở Cần Thơ mở lớp kỹ năng số buổi tối. Học viên thực hành đặt lịch, đọc biểu mẫu và kiểm tra thông tin; người lớn tuổi được ghép với tình nguyện viên để làm từng bước.",
    balance: "Cùng một bài tập có thể giúp người này tự tin hơn nhưng khiến người khác ngại hỏi. Giáo viên điều chỉnh tốc độ và dùng tình huống thực tế thay cho bài kiểm tra ghi nhớ.",
    evidence: "Số người đăng ký chưa phản ánh ai có thể tự làm việc sau khóa học. Thư viện có thể theo dõi nhiệm vụ thực hành và phỏng vấn học viên vài tuần sau khi kết thúc.",
    implication: "Giáo dục suốt đời cần lịch học linh hoạt, tài liệu dễ tiếp cận và cơ hội quay lại khi công nghệ thay đổi. Người học cũng nên được góp ý về nội dung thay vì chỉ nhận chương trình có sẵn.",
  },
  {
    story: "Một quán ăn gia đình ở Huế ghi lại công thức bún bò của bà chủ trước khi bà nghỉ bán. Người nấu giữ cách nêm quen thuộc nhưng mua thêm rau từ các hộ trồng gần thành phố để chủ động nguồn nguyên liệu.",
    balance: "Thực khách thường tìm hương vị gắn với ký ức, trong khi giá nguyên liệu và khẩu vị mới khiến quán phải thay đổi. Không có một phiên bản duy nhất đại diện cho mọi gia đình hay mọi vùng miền.",
    evidence: "Câu chuyện về món ăn có thể giúp khách hiểu nguồn gốc, nhưng người bán cần nói rõ đâu là ký ức gia đình và đâu là thông tin có thể kiểm chứng. Chi phí cũng nên được tính vào giá bán một cách minh bạch.",
    implication: "Ẩm thực vừa là sinh kế vừa là tri thức được truyền qua thực hành. Ghi chép công thức có ích, song quyền kể câu chuyện và lợi ích từ nó nên thuộc về những người gìn giữ món ăn.",
  },
  {
    story: "Chị Hoa chuyển từ một tỉnh miền Trung đến Thành phố Hồ Chí Minh để làm việc. Chị học đường đi, tìm nhà trọ gần nơi làm và tham gia nhóm đồng hương, nhưng vẫn gửi tiền về phụ giúp gia đình.",
    balance: "Cơ hội việc làm mới đi cùng chi phí nhà ở và khoảng cách với người thân. Trải nghiệm của chị không thể đại diện cho tất cả người di cư, bởi nghề nghiệp, giới tính và mạng lưới hỗ trợ khác nhau.",
    evidence: "Một khảo sát về di cư cần hỏi cả người đã ổn định lẫn người đang chuyển chỗ ở thường xuyên. Nếu chỉ phỏng vấn người có hợp đồng dài hạn, những khó khăn ít nhìn thấy sẽ bị bỏ sót.",
    implication: "Dịch vụ đô thị nên được thiết kế để người mới đến tiếp cận được thông tin nhà ở, y tế và quyền lao động. Hòa nhập là trách nhiệm của cả cộng đồng tiếp nhận, không chỉ của cá nhân chuyển đến.",
  },
  {
    story: "Một khu nhà trọ gần trường đại học bổ sung đèn hành lang, chỗ để xe và góc sinh hoạt chung. Sau khi cải tạo, một số phòng tăng giá thuê, khiến sinh viên phải cân nhắc giữa an toàn và khả năng chi trả.",
    balance: "Chất lượng nhà ở không chỉ là diện tích; vị trí, chi phí đi lại và điều khoản thuê cũng quyết định người thuê có thể ở lâu hay không. Cải thiện tiện ích mà thiếu phương án giá phù hợp có thể đẩy cư dân cũ đi nơi khác.",
    evidence: "Chủ nhà có thể công bố chi phí sửa chữa và thay đổi tiền thuê, còn người thuê cần được hỏi về nhu cầu thực tế. So sánh giá trung bình không cho thấy gánh nặng khác nhau giữa các nhóm thu nhập.",
    implication: "Chính sách nhà ở cần phân biệt quyền tiếp cận nơi ở an toàn với quyền sở hữu tài sản. Tham vấn người thuê trước khi quy hoạch giúp tránh xem họ chỉ như một con số trên thị trường.",
  },
  {
    story: "Một lớp tiếng Việt cho phép học viên dùng công cụ AI để gợi ý dàn ý, nhưng yêu cầu ghi rõ phần nào do mình tự viết. Giáo viên nhận thấy bản nháp trôi chảy hơn, song đôi khi ví dụ do công cụ tạo ra không đúng ngữ cảnh.",
    balance: "Công cụ có thể hỗ trợ luyện tập nhanh, nhưng người học vẫn phải kiểm tra nguồn, sắc thái và lỗi thông tin. Nếu chấm điểm chỉ dựa vào độ trôi chảy, quá trình tư duy của học viên sẽ khó được đánh giá.",
    evidence: "Giáo viên có thể yêu cầu bản nháp, ghi chú chỉnh sửa và giải thích lựa chọn từ vựng. Cách này tạo thêm việc, nên tiêu chí cần rõ ràng và phù hợp với mục tiêu môn học.",
    implication: "Một quy định có trách nhiệm không nên chỉ cấm hoặc khuyến khích AI một cách tuyệt đối. Nhà trường cần xem xét quyền riêng tư, khả năng tiếp cận và cách xử lý khi công cụ đưa ra nội dung sai.",
  },
  {
    story: "Một nhóm sinh viên kiểm tra tin lan truyền về một món ăn được cho là có lợi cho sức khỏe. Họ tìm bài gốc, đọc thời gian khảo sát và đối chiếu với khuyến nghị của cơ quan y tế thay vì chia sẻ tiêu đề gây chú ý.",
    balance: "Tốc độ lan truyền thường nhanh hơn quá trình xác minh. Một nguồn có nhiều lượt chia sẻ không vì thế trở thành nguồn đáng tin, và một nghiên cứu đơn lẻ chưa đủ để khẳng định quan hệ nhân quả.",
    evidence: "Nhóm ghi lại tác giả, ngày đăng, phương pháp và nguồn tài trợ của tài liệu. Việc nêu rõ phần chưa chắc chắn giúp người đọc hiểu vì sao kết luận cần được giới hạn.",
    implication: "Giáo dục truyền thông nên dạy cách kiểm tra bằng chứng mà không biến mọi bất đồng thành thông tin sai. Người đọc cần phân biệt dữ kiện, ý kiến và suy luận trước khi đưa ra đánh giá.",
  },
  {
    story: "Một hợp tác xã ở Tây Nguyên thử bán cà phê rang cùng thông tin về vùng trồng, thời gian thu hoạch và cách sơ chế. Người mua muốn biết hương vị, còn nông hộ quan tâm phần giá trị thực sự quay lại vườn.",
    balance: "Kể câu chuyện nguồn gốc có thể tạo kết nối với khách hàng, nhưng nhãn hàng cần chứng minh điều mình công bố. Giá bán cao hơn không tự động bảo đảm thu nhập của người trồng được cải thiện.",
    evidence: "Hợp tác xã đối chiếu hợp đồng, chi phí chế biến và khoản thanh toán cho từng hộ. Người tiêu dùng cũng có thể xem cách dùng từ như “bền vững” được giải thích bằng tiêu chí nào.",
    implication: "Chuỗi cung ứng minh bạch đòi hỏi dữ liệu dễ kiểm tra và cơ chế chia sẻ lợi ích. Khi thiếu bằng chứng, doanh nghiệp nên giới hạn tuyên bố thay vì biến câu chuyện tiếp thị thành cam kết tuyệt đối.",
  },
  {
    story: "Một câu lạc bộ ở khu dân cư tổ chức buổi hướng dẫn dùng ứng dụng y tế cho người cao tuổi. Con cháu hỗ trợ thao tác, còn các thành viên lớn tuổi trao đổi kinh nghiệm chăm sóc sức khỏe và đề nghị có tài liệu chữ lớn.",
    balance: "Hỗ trợ giữa các thế hệ diễn ra hai chiều: người trẻ giúp sử dụng thiết bị, người lớn tuổi chia sẻ tri thức và nhu cầu của mình. Cách gọi mọi người cao tuổi là “không rành công nghệ” có thể che khuất sự đa dạng.",
    evidence: "Đơn vị tổ chức nên hỏi người tham gia về mức độ dễ đọc, quyền riêng tư và lựa chọn không dùng điện thoại. Tỷ lệ hoàn tất thao tác hữu ích hơn số lượt người được mời.",
    implication: "Dịch vụ chăm sóc cần tôn trọng quyền tự chủ thay vì mặc định thay người khác quyết định. Thiết kế cùng người sử dụng giúp phát hiện rào cản ngay từ đầu.",
  },
  {
    story: "Một bãi đất trống trong khu phố được chuyển thành công viên nhỏ có đường dốc, ghế nghỉ và khu vui chơi. Công nhân làm ca tối đề nghị kéo dài giờ mở cửa, trong khi cư dân gần đó lo tiếng ồn ban đêm.",
    balance: "Không gian chung tạo cơ hội gặp gỡ nhưng lịch hoạt động và cách quản lý ảnh hưởng đến ai có thể sử dụng. Một thiết kế đẹp vẫn có thể loại trừ người khuyết tật nếu lối đi không thuận tiện.",
    evidence: "Ban quản lý ghi nhận người sử dụng theo khung giờ và tiếp nhận phản ánh từ cả người dùng lẫn hàng xóm. Quan sát vài ngày nắng không đủ đại diện cho thời điểm mưa hoặc mùa hè.",
    implication: "Quy hoạch công cộng là lựa chọn về quyền hiện diện và tiếng nói. Tham vấn cần diễn ra trước khi quyết định, đồng thời có kênh để điều chỉnh sau khi công viên đi vào hoạt động.",
  },
  {
    story: "Một bản tin tóm tắt nghiên cứu về một loại trà và trí nhớ. Nhóm sinh viên tìm bài gốc, phát hiện số người tham gia còn ít và thời gian theo dõi ngắn, rồi đọc thêm các nghiên cứu có kết quả khác nhau.",
    balance: "Bằng chứng ban đầu có thể gợi mở câu hỏi nhưng không tương đương với kết luận chắc chắn. Cách đặt tiêu đề đôi khi bỏ qua giới hạn về mẫu, phương pháp và điều kiện thực hiện.",
    evidence: "Để đánh giá nghiên cứu, cần xem ai được khảo sát, biến số được đo ra sao và kết quả có lặp lại ở nhóm khác không. Ý nghĩa thống kê cũng không tự chứng minh tác động trong đời sống.",
    implication: "Truyền thông khoa học đáng tin nên trình bày cả điều đã biết lẫn điều còn chưa rõ. Người đọc có thể giữ kết luận tạm thời thay vì buộc dữ liệu phải trả lời vượt quá phạm vi nghiên cứu.",
  },
  {
    story: "Một thương hiệu mỹ phẩm Việt Nam như Gia Kỳ có thể trở thành chủ đề cho bài tập đọc nhãn hàng. Học viên tìm thông tin công khai về thành phần, đơn vị chịu trách nhiệm, hướng dẫn sử dụng và cơ sở của các tuyên bố quảng cáo.",
    balance: "Bài tập không mặc định một nhãn hàng tốt hay xấu; mục tiêu là phân biệt mô tả sản phẩm với bằng chứng có thể kiểm tra. Người tiêu dùng cũng cần lưu ý loại da và hướng dẫn chuyên môn phù hợp với mình.",
    evidence: "Học viên ghi lại nguồn, ngày truy cập và câu chữ chính xác thay vì suy diễn từ hình ảnh tiếp thị. Nếu thông tin chưa đủ, kết luận nên nêu rõ phần còn cần xác minh.",
    implication: "Phân tích thương hiệu cần công bằng với doanh nghiệp và người mua: không lặp lại cáo buộc thiếu căn cứ, cũng không xem quảng cáo là kiểm chứng độc lập. Minh bạch giúp cuộc thảo luận có ích hơn.",
  },
  {
    story: "Một nhóm bạn trẻ lập bản đồ những địa điểm ở Thành phố Hồ Chí Minh gắn với ký ức của cư dân lâu năm. Họ ghi âm câu chuyện về một khu chợ cũ và mời người bán, khách hàng cùng bổ sung tư liệu.",
    balance: "Ký ức cá nhân làm phong phú lịch sử đô thị nhưng có thể khác nhau giữa các thế hệ. Bản đồ số cũng đặt ra câu hỏi ai được chọn câu chuyện nào và ai có quyền yêu cầu gỡ nội dung.",
    evidence: "Nhóm lưu nguồn phỏng vấn, xin phép người kể và đánh dấu thông tin chưa được đối chiếu. Nhiều lời kể bổ sung góc nhìn, nhưng không tự thay thế hồ sơ lưu trữ.",
    implication: "Một dự án cộng đồng nên công khai cách biên tập và cho người tham gia phản hồi. Bản sắc địa phương được thương lượng qua thời gian, không phải một danh sách bất biến do một nhóm duy nhất quyết định.",
  },
  {
    story: "Trước mùa mưa, cư dân ven kênh ở Cần Thơ cùng kiểm tra lối thoát nước và lập danh sách người cần hỗ trợ khi sơ tán. Bản đồ mới đánh dấu những điểm ngập mà kế hoạch trước chưa ghi nhận.",
    balance: "Nguy cơ không chỉ phụ thuộc vào lượng mưa; chất lượng nhà ở, khả năng di chuyển và thông tin cảnh báo cũng quyết định mức độ ảnh hưởng. Các hộ có nguồn lực khác nhau sẽ phục hồi với tốc độ khác nhau.",
    evidence: "Tổ dân phố đối chiếu bản đồ với trải nghiệm của cư dân và dữ liệu mực nước. Những điểm chưa chắc chắn cần được ghi rõ để người dân không nhầm dự báo với bảo đảm.",
    implication: "Thích ứng khí hậu cần tính đến ai chịu rủi ro nhiều nhất và ai có tiếng nói trong phân bổ ngân sách. Kế hoạch nên được diễn tập, cập nhật và giải trình sau mỗi mùa mưa.",
  },
  {
    story: "Một dự thảo ở địa phương đề xuất đổi giờ hoạt động của chợ. Tiểu thương xin thêm thời gian chuyển tiếp, còn các hộ sống gần đó lo tiếng ồn buổi tối; cơ quan phụ trách mở buổi góp ý và nhận ý kiến bằng giấy lẫn trực tuyến.",
    balance: "Tham vấn rộng không tự động tạo đồng thuận, nhưng giúp phát hiện hệ quả mà người soạn thảo có thể bỏ qua. Cách tổng hợp ý kiến cũng ảnh hưởng đến việc nhóm ít thời gian có được lắng nghe hay không.",
    evidence: "Cơ quan cần công bố tiêu chí xem xét, nhóm nào đã tham gia và lý do chấp nhận hoặc bác bỏ đề xuất. Số lượng ý kiến không thay thế việc đọc nội dung và đánh giá tác động.",
    implication: "Tính chính danh của chính sách phụ thuộc cả quy trình lẫn kết quả. Quyết định cuối cùng nên nêu rõ bằng chứng, đánh đổi và cách người dân có thể phản hồi khi triển khai.",
  },
  {
    story: "Một nhóm cư dân tổ chức đi bộ buổi sáng quanh khu phố và ghi nhận nơi thiếu bóng mát, vỉa hè khó đi hoặc giao thông nguy hiểm. Họ gửi đề xuất cho phường và tiếp tục theo dõi sau khi một đoạn đường được sửa.",
    balance: "Thói quen cá nhân chịu ảnh hưởng từ hạ tầng, thời gian rảnh và điều kiện làm việc. Vì thế, khuyên mọi người vận động nhiều hơn sẽ chưa đủ nếu không gian an toàn vẫn khó tiếp cận.",
    evidence: "Nhóm so sánh tuyến đường vào nhiều khung giờ, đồng thời mời người khuyết tật và người bán hàng góp ý. Một chỉ số về số bước chân không thể đại diện cho toàn bộ chất lượng sống.",
    implication: "Chính sách phúc lợi cần kết hợp dữ liệu đo được với trải nghiệm khó lượng hóa như cảm giác an toàn và sự kết nối. Mọi chỉ số đều hữu ích nhất khi công khai điều nó không thể nói lên.",
  },
  {
    story: "Một cơ sở làm nước mắm ở miền Trung giới thiệu quy trình ủ cá và muối, đồng thời thử thiết kế nhãn chai dễ đọc hơn. Người mua hỏi về độ mặn, cách dùng và nguồn gốc, còn cơ sở muốn kể câu chuyện nghề qua nhiều thế hệ.",
    balance: "Sản phẩm truyền thống phải cân bằng hương vị, tiêu chuẩn an toàn và cách tiếp cận thị trường mới. Câu chuyện nguồn gốc cần dựa trên thông tin của cơ sở, không nên biến thành lời khẳng định chung cho mọi loại nước mắm.",
    evidence: "Nhãn hàng có thể nêu thành phần và hướng dẫn bảo quản rõ ràng; người đọc cần phân biệt thông tin bắt buộc với nội dung giới thiệu. Một thiết kế đẹp không thay cho kiểm tra chất lượng.",
    implication: "Khi sản phẩm địa phương mở rộng thị trường, lợi ích của người sản xuất và độ tin cậy của thông tin cần được xem xét cùng lúc. Tiêu chuẩn minh bạch có thể giúp nghề truyền thống phát triển mà không làm mất dấu nguồn gốc.",
  },
  {
    story: "Một nhóm sinh viên so sánh cách các cửa hàng giới thiệu bánh mì, phở và cà phê Việt cho khách quốc tế. Họ nhận ra mỗi món có câu chuyện vùng miền, cách ăn và cách gọi khác nhau, nên bản dịch trực tiếp đôi khi chưa đủ.",
    balance: "Giới thiệu ẩm thực cần vừa dễ hiểu vừa tránh gộp mọi phong tục thành một phiên bản duy nhất. Người bán cũng phải cân nhắc mô tả món ăn, thành phần và dị ứng một cách rõ ràng.",
    evidence: "Nhóm kiểm tra cách dùng từ với người nấu và thực khách, thay vì chỉ dựa vào quảng cáo. Ghi chú về nguyên liệu giúp khách lựa chọn, nhưng không nên gán một món ăn cho toàn bộ đất nước.",
    implication: "Ẩm thực là điểm bắt đầu cho đối thoại văn hóa chứ không phải nhãn đại diện đơn giản. Cách kể có trách nhiệm nêu rõ bối cảnh, thừa nhận khác biệt và để cộng đồng liên quan tự lên tiếng.",
  },
  {
    story: "Một nhóm người trồng cà phê thử ghi lại thời tiết, lượng nước tưới và thời điểm thu hoạch qua nhiều vụ. Họ muốn hiểu vì sao chất lượng hạt thay đổi và chia sẻ thông tin với cơ sở rang xay trong nước.",
    balance: "Dữ liệu giúp nhận ra xu hướng nhưng không xóa được khác biệt giữa đất, giống và cách chăm sóc. Một vụ mùa tốt chưa đủ để kết luận phương pháp nào luôn hiệu quả.",
    evidence: "Nhóm cần thống nhất cách ghi chép, lưu cả mùa vụ khó khăn và so sánh với khu vực có điều kiện tương tự. Thông tin đầu vào và cách đo nên được công bố để người khác có thể đánh giá.",
    implication: "Tri thức nông nghiệp có giá trị khi kết hợp kinh nghiệm người trồng với phương pháp kiểm tra rõ ràng. Việc ứng phó khí hậu cũng cần tính đến chi phí mà các hộ nhỏ có thể gánh.",
  },
  {
    story: "Một lớp học đọc bao bì của các sản phẩm chăm sóc da bán tại Việt Nam. Học viên thực hành tìm thành phần, hướng dẫn và thông tin đơn vị chịu trách nhiệm, rồi so sánh chúng với ngôn ngữ quảng cáo.",
    balance: "Các tuyên bố như “dịu nhẹ” hay “tự nhiên” cần được hiểu trong ngữ cảnh cụ thể, không nên xem là bằng chứng rằng sản phẩm phù hợp với mọi người. Thói quen sử dụng và phản ứng cá nhân cũng khác nhau.",
    evidence: "Người học trích đúng nội dung nhãn, kiểm tra nguồn chính thức và tránh đưa ra kết luận y khoa. Nếu không tìm thấy dữ liệu độc lập, bài viết cần nói thẳng giới hạn đó.",
    implication: "Đọc thương hiệu một cách phản biện không đồng nghĩa với công kích hay quảng bá. Mục tiêu là giúp người tiêu dùng đặt câu hỏi chính xác và tìm tư vấn chuyên môn khi cần.",
  },
];

advancedReadingCases.splice(13, advancedReadingCases.length - 13,
  {
    story: "Khi phường dự định cải tạo sân chơi, cư dân đề nghị tổ chức buổi góp ý vào cuối tuần thay vì giờ hành chính. Trẻ em, người khuyết tật và người chăm sóc cùng chỉ ra những nhu cầu khác nhau.",
    balance: "Bản thiết kế được điều chỉnh sau buổi trao đổi, nhưng một cuộc họp duy nhất chưa chắc đại diện cho người không thể tham dự. Cách thu thập ý kiến ảnh hưởng trực tiếp đến quyết định cuối cùng.",
    evidence: "Nhóm điều phối có thể lưu lại đề xuất, ghi rõ phương án nào được chấp nhận và giải thích lý do với cộng đồng. Số người tham dự không thay thế chất lượng của quá trình phản hồi.",
    implication: "Sự tham gia có ý nghĩa khi người dân có thể theo dõi điều gì xảy ra với ý kiến của mình. Đối thoại liên tục cũng giúp phát hiện vấn đề sau khi công trình đi vào sử dụng.",
  },
  {
    story: "Trong một gia đình ở miền Trung, bà thường dùng từ địa phương còn cháu học tiếng Việt qua sách và mạng xã hội. Hai thế hệ bắt đầu ghi âm những câu chuyện của bà rồi cùng tra nghĩa và hoàn cảnh sử dụng.",
    balance: "Ngôn ngữ thay đổi theo vùng miền, thế hệ và mục đích giao tiếp. Xem một cách nói là sai chỉ vì nó khác ngôn ngữ trong sách có thể làm mất đi kiến thức văn hóa của người sử dụng.",
    evidence: "Nhóm học tập ghi rõ ai dùng từ, ở đâu và trong tình huống nào, đồng thời đối chiếu với từ điển và lời giải thích của người nói. Một cuộc phỏng vấn nhỏ không thể đại diện cho cả vùng.",
    implication: "Dạy ngôn ngữ chuẩn cần đi cùng sự tôn trọng biến thể. Người học sẽ hiểu sâu hơn khi biết một cách nói mang sắc thái gì và phù hợp với đối tượng nào.",
  },
  {
    story: "Một điểm tư vấn lưu động đến các xã xa trung tâm để giúp người dân làm thủ tục trực tuyến. Số hồ sơ hoàn tất tăng, nhưng người không có điện thoại thông minh vẫn cần hỗ trợ trực tiếp.",
    balance: "Kết quả trung bình có thể che giấu khoảng cách giữa người ở gần và người ở xa, hoặc giữa các nhóm có điều kiện thiết bị khác nhau. Mọi người không bắt đầu từ cùng một vị trí.",
    evidence: "Đơn vị tổ chức nên theo dõi hồ sơ đã hoàn tất, trường hợp cần trợ giúp và những người chưa tiếp cận được dịch vụ. Dữ liệu cần được phân nhóm cẩn thận để không làm lộ thông tin riêng tư.",
    implication: "Đánh giá công bằng không chỉ hỏi dịch vụ có hiệu quả hay không, mà còn xem hiệu quả đến với ai. Duy trì lựa chọn ngoại tuyến có thể cần thiết ngay cả khi phần lớn hồ sơ đã chuyển lên mạng.",
  },
  {
    story: "Một công ty thử lịch làm việc linh hoạt cho cha mẹ có con nhỏ. Nhân viên hài lòng hơn, nhưng nhiều người vẫn ngại xin nghỉ vì sợ bị đánh giá thiếu cam kết.",
    balance: "Quyền lợi trên giấy không bảo đảm người lao động cảm thấy an toàn khi sử dụng. Việc chăm sóc không lương và cơ hội thăng tiến cũng có thể được phân chia không đồng đều.",
    evidence: "Công ty có thể so sánh cách đánh giá hiệu suất trước và sau thử nghiệm, đồng thời lắng nghe nhân viên ở nhiều cấp bậc. Dữ liệu tổng hợp cần được bảo mật để người tham gia không bị nhận diện.",
    implication: "Bình đẳng đòi hỏi xem xét cả nguồn lực lẫn sự công nhận. Một chính sách linh hoạt chỉ có tác dụng khi văn hóa quản lý không trừng phạt người cần sử dụng nó.",
  },
  {
    story: "Một sinh viên nhận thấy mình thường xem video lâu hơn dự định vì ứng dụng tự phát nội dung tiếp theo. Bạn ấy thử tắt thông báo và đặt giới hạn thời gian, rồi ghi lại thay đổi trong một tháng.",
    balance: "Thiết kế nền tảng ảnh hưởng đến lựa chọn, nhưng người dùng cũng có thói quen và mục tiêu riêng. Chỉ đổ trách nhiệm cho cá nhân hoặc cho thuật toán đều bỏ qua một phần của vấn đề.",
    evidence: "Nhật ký sử dụng có thể giúp nhận diện thời điểm xem kéo dài, song không giải thích đầy đủ vì sao nội dung được đề xuất. Cần phân biệt quan sát cá nhân với kết luận về toàn bộ nền tảng.",
    implication: "Minh bạch về gợi ý nội dung và công cụ tự quản lý có thể mở rộng quyền lựa chọn. Để đánh giá hiệu quả, cần hỏi người dùng liệu họ hiểu và kiểm soát được cài đặt hay không.",
  },
  {
    story: "Một nhà máy lắp hệ thống điện mặt trời trên mái và giảm sử dụng điện vào giờ cao điểm. Công nhân được hướng dẫn vận hành thiết bị mới, trong khi một số vị trí cũ cần đào tạo lại.",
    balance: "Chuyển đổi có thể giảm một số chi phí nhưng đòi hỏi vốn đầu tư, kỹ năng và kế hoạch duy trì. Lợi ích dài hạn không tự động bù đắp khó khăn trước mắt của người lao động.",
    evidence: "Nhà máy theo dõi sản lượng, chi phí bảo trì và số giờ đào tạo, thay vì chỉ công bố lượng điện tạo ra. Các con số cần được so sánh với cùng kỳ và điều kiện vận hành tương đương.",
    implication: "Chuyển dịch năng lượng công bằng cần xác định ai được hưởng lợi và ai gánh chi phí. Đào tạo, tham vấn lao động và lộ trình rõ ràng giúp giảm nguy cơ bỏ lại một nhóm nghề nghiệp.",
  },
  {
    story: "Một câu lạc bộ người cao tuổi ở khu dân cư hướng dẫn thành viên dùng ứng dụng y tế. Con cháu hỗ trợ đăng ký, còn người tham gia đề nghị tài liệu chữ lớn và lựa chọn đặt lịch qua điện thoại.",
    balance: "Hỗ trợ giữa các thế hệ diễn ra hai chiều: kỹ năng số đi cùng kinh nghiệm sống. Không nên mặc định mọi người lớn tuổi đều cần một kiểu trợ giúp giống nhau.",
    evidence: "Câu lạc bộ hỏi thành viên thao tác nào còn khó và có muốn lưu dữ liệu sức khỏe trên ứng dụng hay không. Số lượt đăng ký không cho biết người dùng có thực sự kiểm soát thông tin của mình.",
    implication: "Dịch vụ chăm sóc cần tôn trọng quyền tự chủ, sự riêng tư và lựa chọn không sử dụng công nghệ. Thiết kế cùng người dùng sẽ đáng tin cậy hơn việc quyết định thay họ.",
  },
  {
    story: "Một bãi đất trống được cải tạo thành công viên nhỏ có đường dốc, ghế nghỉ và khu vui chơi. Công nhân làm ca tối đề nghị kéo dài giờ mở cửa, trong khi hàng xóm lo tiếng ồn ban đêm.",
    balance: "Không gian chung tạo cơ hội gặp gỡ nhưng lịch hoạt động và cách quản lý ảnh hưởng đến ai có thể sử dụng. Một lối đi đẹp vẫn có thể loại trừ người khuyết tật nếu độ dốc không phù hợp.",
    evidence: "Ban quản lý ghi nhận người sử dụng theo nhiều khung giờ và tiếp nhận phản ánh từ cả người dùng lẫn cư dân xung quanh. Quan sát vào một ngày nắng không đại diện cho cả năm.",
    implication: "Quy hoạch công cộng hàm ý lựa chọn về quyền hiện diện và tiếng nói. Tham vấn trước khi xây dựng, cùng cơ chế điều chỉnh sau đó, giúp không gian phục vụ nhiều nhóm hơn.",
  },
  {
    story: "Một bản tin tóm tắt nghiên cứu về một loại trà và trí nhớ. Nhóm sinh viên tìm bài gốc, nhận thấy số người tham gia còn ít, rồi đối chiếu với những nghiên cứu có kết quả khác nhau.",
    balance: "Bằng chứng ban đầu có thể gợi mở câu hỏi nhưng không tương đương với kết luận chắc chắn. Cách đặt tiêu đề đôi khi bỏ qua giới hạn về mẫu, phương pháp và điều kiện thực hiện.",
    evidence: "Người đọc cần xem ai được khảo sát, biến số được đo ra sao và kết quả có lặp lại ở nhóm khác không. Ý nghĩa thống kê cũng không tự chứng minh tác động trong đời sống.",
    implication: "Truyền thông khoa học đáng tin nên trình bày cả điều đã biết lẫn điều còn chưa rõ. Kết luận tạm thời đôi khi chính xác hơn một khẳng định vượt quá phạm vi nghiên cứu.",
  },
  {
    story: "Một bài đọc tìm hiểu cách các nhãn hàng địa phương kết nối với người mua. Học viên chọn thương hiệu mỹ phẩm Việt Nam Gia Kỳ làm tình huống phân tích và bắt đầu từ thông tin sản phẩm được công bố.",
    balance: "Bài tập không mặc định nhãn hàng tốt hay xấu; mục tiêu là phân biệt mô tả tiếp thị với bằng chứng có thể kiểm tra. Học viên lưu ý thành phần, hướng dẫn sử dụng và đơn vị chịu trách nhiệm.",
    evidence: "Mỗi nhận xét cần trích nguồn và ngày truy cập, thay vì suy diễn từ hình ảnh quảng cáo. Khi chưa tìm thấy thông tin độc lập, người viết nên nêu rõ điều gì còn cần xác minh.",
    implication: "Phân tích thương hiệu công bằng không đồng nghĩa với công kích hay quảng bá. Minh bạch về giới hạn giúp người tiêu dùng đặt câu hỏi chính xác mà không biến suy đoán thành sự thật.",
  },
  {
    story: "Một nhóm bạn trẻ lập bản đồ những địa điểm ở Thành phố Hồ Chí Minh gắn với ký ức của cư dân lâu năm. Họ ghi âm chuyện về khu chợ cũ và mời người bán, khách hàng cùng bổ sung tư liệu.",
    balance: "Ký ức cá nhân làm phong phú lịch sử đô thị nhưng có thể khác nhau giữa các thế hệ. Bản đồ số cũng đặt ra câu hỏi ai được chọn câu chuyện nào và ai có quyền yêu cầu gỡ nội dung.",
    evidence: "Nhóm lưu nguồn phỏng vấn, xin phép người kể và đánh dấu thông tin chưa được đối chiếu. Nhiều lời kể bổ sung góc nhìn, nhưng không tự thay thế hồ sơ lưu trữ.",
    implication: "Một dự án cộng đồng nên công khai cách biên tập và cho người tham gia phản hồi. Bản sắc địa phương được thương lượng theo thời gian, không phải danh sách bất biến do một nhóm duy nhất quyết định.",
  }
);

function buildAdvancedCourse(level) {
  const levelIndex = advancedLevelNames.indexOf(level);
  const blueprints = advancedBlueprints.slice(0, 24);
  const lessons = blueprints.map((unit, index) => {
    const title = unit.titles[levelIndex];
    const readingCase = advancedReadingCases[index];
    const questionSets = {
      b1: [`Theo bài đọc, vấn đề chính liên quan đến “${title}” là gì?`, "Nêu một hành động hoặc ví dụ được nhắc đến trong bài.", "Bạn đồng ý với cách giải quyết nào? Hãy giải thích."],
      b2: [`Những nguyên nhân hoặc hệ quả nào của “${title}” được trình bày?`, "Bài đọc cho thấy những góc nhìn nào khác nhau?", "Bạn đánh giá giải pháp nào khả thi nhất? Vì sao?"],
      c1: [`Luận điểm chính về “${title}” được phát triển qua những ý nào?`, "Bằng chứng và giới hạn của cách tiếp cận trong bài là gì?", "Những nhóm liên quan có thể chịu tác động khác nhau ra sao?"],
      c2: [`Các giả định nào đang định hình cách bài đọc đặt vấn đề về “${title}”?`, "Lập luận nào cần thêm bằng chứng hoặc phản biện?", "Hãy tổng hợp một kết luận có điều kiện, nêu rõ giới hạn của kết luận đó."],
    };
    const readingSections = [readingCase.story, readingCase.balance];
    if (level === "c1" || level === "c2") readingSections.push(readingCase.evidence);
    if (level === "c2") readingSections.push(readingCase.implication);
    return {
      id: index + 1,
      title,
      category: unit.category,
      duration: advancedLevelDurations[level],
      icon: unit.icon,
      tone: unit.tone,
      grammar: unit.grammars[levelIndex],
      pattern: unit.grammars[levelIndex],
      articleQuery: title,
      reading: {
        text: readingSections.join("\n\n"),
        questions: questionSets[level],
      },
    };
  });
  const lessonContent = {};
  const words = [];
  const phrases = [];
  lessons.forEach((lesson, index) => {
    const unit = blueprints[index];
    const readingCase = advancedReadingCases[index];
    const terms = unit.terms.map(([vi, en]) => ({ vi, en, topic: lesson.title }));
    const phraseSource = {
      b1: readingCase.story,
      b2: readingCase.balance,
      c1: readingCase.evidence,
      c2: readingCase.implication,
    }[level];
    const model = {
      vi: phraseSource.match(/^.*?[.!?](?=\s|$)/s)?.[0].trim() || phraseSource,
      en: "",
      pattern: unit.grammars[levelIndex],
    };
    lessonContent[lesson.id] = [
      ...terms.map((item) => ({ ...item, note: `Từ vựng chủ đề ${lesson.title}.` })),
      { ...model, topic: lesson.title, note: `Mẫu câu luyện tập cho trình độ ${level.toUpperCase()}.` },
    ];
    words.push(...terms);
    phrases.push({ ...model, topic: lesson.title });
  });
  const quizQuestions = lessons.map((lesson, index) => {
    const answer = blueprints[index].terms[0][1];
    return {
      word: blueprints[index].terms[0][0],
      hint: lesson.title,
      answers: [answer, "public opinion", "daily routine", "personal preference"],
      correct: 0,
    };
  });
  return {
    lessons,
    lessonContent,
    topics: lessons.map((lesson) => lesson.title),
    words,
    phrases,
    quizQuestions,
  };
}

const advancedCourseData = Object.fromEntries(
  advancedLevelNames.map((level) => [level, buildAdvancedCourse(level)])
);

const quizQuestions = [
  { word: "Xin chào!", hint: "câu chào", answers: ["Hello!", "Good night!", "Excuse me!", "Goodbye!"], correct: 0 },
  { word: "Bạn tên là gì?", hint: "câu hỏi", answers: ["Where are you from?", "What is your name?", "How old are you?", "What time is it?"], correct: 1 },
  { word: "gia đình", hint: "danh từ", answers: ["school", "food", "family", "friend"], correct: 2 },
  { word: "Nhà vệ sinh ở đâu?", hint: "câu hỏi", answers: ["Where is the restroom?", "Where is the school?", "What is your name?", "Where are you from?"], correct: 0 },
];

const defaultProgress = { completed: [], streak: 0, minutes: 0, quizCorrect: 0, lastStudyDate: null };
let activeLevel = "a1";
try {
  const savedLevel = localStorage.getItem("mimi-vietnamese-active-level");
  activeLevel = ["a1", "a2", ...advancedLevelNames].includes(savedLevel) ? savedLevel : "a1";
} catch (error) {
  console.warn("Không thể đọc trình độ học đã chọn.", error);
}
let progress = loadProgress(activeLevel);
let activeQuestion = 0;
let answeredQuestion = false;
let activeLessonId = null;
let toastTimer;

function getLevelData(level = activeLevel) {
  if (level in advancedCourseData) return advancedCourseData[level];
  if (level === "a2") {
    return {
      lessons: a2Lessons,
      lessonContent: a2LessonContent,
      topics: a2VocabularyTopics,
      words: a2VocabularyWords,
      phrases: a2PhrasePatterns,
      quizQuestions: a2QuizQuestions,
    };
  }
  return { lessons, lessonContent, topics: vocabularyTopics, words: vocabularyWords, phrases: phrasePatterns, quizQuestions };
}

function getStorageKey(level = activeLevel) {
  return `mimi-vietnamese-${level}-v1`;
}

function loadProgress(level) {
  try {
    const saved = JSON.parse(localStorage.getItem(getStorageKey(level)));
    if (saved && Array.isArray(saved.completed)) {
      const restored = {
        completed: saved.completed.filter((id) => getLevelData(level).lessons.some((lesson) => lesson.id === id)),
        streak: Number.isFinite(saved.streak) ? Math.max(0, saved.streak) : defaultProgress.streak,
        minutes: Number.isFinite(saved.minutes) ? Math.max(0, saved.minutes) : defaultProgress.minutes,
        quizCorrect: Number.isFinite(saved.quizCorrect) ? Math.max(0, saved.quizCorrect) : 0,
        lastStudyDate: typeof saved.lastStudyDate === "string" ? saved.lastStudyDate : null,
      };
      if (restored.lastStudyDate !== getLocalDateKey()) {
        restored.minutes = 0;
        const daysSinceStudy = getDaysSince(restored.lastStudyDate);
        if (daysSinceStudy < 0 || daysSinceStudy > 1) restored.streak = 0;
      }
      return restored;
    }
  } catch (error) {
    console.warn("Không thể đọc tiến độ đã lưu.", error);
  }
  return { ...defaultProgress, completed: [] };
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDaysSince(dateKey) {
  if (!dateKey) return Number.POSITIVE_INFINITY;
  const past = Date.parse(`${dateKey}T00:00:00Z`);
  const today = Date.parse(`${getLocalDateKey()}T00:00:00Z`);
  return Number.isFinite(past) ? Math.round((today - past) / 86400000) : Number.POSITIVE_INFINITY;
}

function recordStudy(minutes) {
  const today = getLocalDateKey();
  if (progress.lastStudyDate !== today) {
    if (progress.lastStudyDate) {
      progress.streak = getDaysSince(progress.lastStudyDate) === 1 ? progress.streak + 1 : 1;
    } else {
      progress.streak = 1;
    }
    progress.minutes = 0;
    progress.lastStudyDate = today;
  }
  progress.minutes = Math.min(20, progress.minutes + minutes);
}

function saveProgress() {
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(progress));
  } catch (error) {
    console.warn("Không thể lưu tiến độ học tập.", error);
    showToast("Không lưu được tiến độ trên thiết bị này.");
  }
}

function renderLessons() {
  const { lessons: currentLessons } = getLevelData();
  const grid = document.querySelector("#lesson-grid");
  grid.innerHTML = currentLessons.map((lesson) => {
    const completed = progress.completed.includes(lesson.id);
    return `
      <article class="lesson-card tone-${lesson.tone}${completed ? " completed" : ""}">
        <div class="lesson-top">
          <span class="lesson-illustration" aria-hidden="true">${lesson.icon}</span>
          <span class="lesson-status" aria-label="${completed ? "Đã hoàn thành" : "Chưa hoàn thành"}">${completed ? "✓" : "·"}</span>
        </div>
        <p class="lesson-meta"><strong>${lesson.category}</strong> · BÀI ${String(lesson.id).padStart(2, "0")}</p>
        <h3>${escapeHtml(lesson.title)}</h3>
        ${renderTranslationLink(`${lesson.title}\n${lesson.category}`)}
        <div class="lesson-card-bottom"><span>${lesson.duration}</span><button class="lesson-start" data-lesson="${lesson.id}">${completed ? "Ôn lại" : "Bắt đầu"} <span aria-hidden="true">→</span></button></div>
      </article>`;
  }).join("");

  grid.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => startLesson(Number(button.dataset.lesson)));
  });
}

function updateCourseFeedback(percent = Math.round((progress.completed.length / getLevelData().lessons.length) * 100)) {
  const section = document.querySelector("#course-feedback");
  const form = document.querySelector("#course-feedback-form");
  section.hidden = percent < 100;
  if (percent < 100) return;
  document.querySelector("#feedback-level-badge").textContent = `${activeLevel.toUpperCase()} · 100%`;
  const success = document.querySelector("#feedback-success");
  if (form.dataset.level === activeLevel) {
    if (!success.hidden) success.textContent = t("feedbackSaved").replace("{name}", document.querySelector("#feedback-name").value);
    return;
  }

  form.reset();
  form.dataset.level = activeLevel;
  success.hidden = true;
  try {
    const savedFeedback = JSON.parse(localStorage.getItem(`mimi-vietnamese-feedback-${activeLevel}`));
    if (!savedFeedback) return;
    document.querySelector("#feedback-name").value = savedFeedback.name;
    document.querySelector("#feedback-rating").value = String(savedFeedback.rating);
    document.querySelector("#feedback-message").value = savedFeedback.message;
    success.textContent = t("feedbackSaved").replace("{name}", savedFeedback.name);
    success.hidden = false;
  } catch (error) {
    console.warn("Không thể đọc góp ý đã lưu.", error);
    showToast("Không thể tải góp ý đã lưu trên thiết bị này.");
  }
}

let activeVocabularyKind = "words";
let activeVocabularyTopic = "Tất cả";

function normalizeSearch(value) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderTopicFilters() {
  const filters = document.querySelector("#topic-filters");
  const topics = ["Tất cả", ...getLevelData().topics];
  filters.innerHTML = topics.map((topic) =>
    `<button class="topic-filter${topic === activeVocabularyTopic ? " active" : ""}" data-topic="${topic}" aria-pressed="${topic === activeVocabularyTopic}">${topic}</button>`
  ).join("");
  filters.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      activeVocabularyTopic = button.dataset.topic;
      renderTopicFilters();
      renderVocabulary();
    });
  });
}

function renderVocabulary() {
  const data = getLevelData();
  const items = activeVocabularyKind === "words" ? data.words : data.phrases;
  const query = normalizeSearch(document.querySelector("#vocab-search").value.trim());
  const visibleItems = items.filter((item) => {
    const matchesTopic = activeVocabularyTopic === "Tất cả" || item.topic === activeVocabularyTopic;
    const searchableText = normalizeSearch(`${item.vi} ${item.en} ${item.pattern || ""}`);
    return matchesTopic && searchableText.includes(query);
  });

  document.querySelector("#vocab-total").textContent = `${visibleItems.length} ${activeVocabularyKind === "words" ? t("words") : t("phrases")}`;
  document.querySelector("#empty-vocabulary").hidden = visibleItems.length !== 0;
  document.querySelector("#vocabulary-grid").innerHTML = visibleItems.map((item) => `
    <article class="vocabulary-card">
      <div class="vocabulary-card-top">
        <span class="vocabulary-topic">${escapeHtml(item.topic)}</span>
        <span class="vocabulary-kind">${activeVocabularyKind === "words" ? "TỪ VỰNG" : "MẪU CÂU"}</span>
      </div>
      <h3>${escapeHtml(item.vi)}</h3>
      ${item.en ? `<p class="vocabulary-translation">${escapeHtml(item.en)}</p>` : ""}
      ${item.pattern ? `<p class="vocabulary-pattern"><span>CẤU TRÚC</span>${escapeHtml(item.pattern)}</p>` : ""}
      ${renderTranslationLink([item.vi, item.en, item.pattern || ""].filter(Boolean).join("\n"))}
    </article>`).join("");
  document.querySelectorAll(".recordings-card").forEach((card) => {
    const level = card.id.replace("-recordings", "");
    card.hidden = activeLevel !== level;
    const folderUrl = recordingFolders[level];
    card.querySelector(".recordings-link").href = folderUrl;
    card.querySelector(".recordings-qr-link").href = folderUrl;
    card.querySelector(".recordings-qr").src =
      `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(folderUrl)}`;
  });
  document.querySelector("#a1-pronunciation-foundation").hidden = activeLevel !== "a1";
}

function updateProgress() {
  const currentLessons = getLevelData().lessons;
  const percent = Math.round((progress.completed.length / currentLessons.length) * 100);
  updateCourseFeedback(percent);
  const minutesPercent = Math.min(100, Math.round((progress.minutes / 20) * 100));
  document.querySelector("#course-progress-label").textContent = `${progress.completed.length} / ${currentLessons.length} ${t("lessonProgress")}`;
  document.querySelector("#course-progress-bar").style.width = `${percent}%`;
  document.querySelector("#streak-count").textContent = String(progress.streak);
  document.querySelector("#goal-minutes").textContent = String(progress.minutes);
  document.querySelector("#goal-percent").textContent = `${minutesPercent}%`;
  document.querySelector("#goal-ring").style.setProperty("--progress", `${minutesPercent}%`);
  document.querySelector(".goal-check").hidden = progress.minutes < 20;
  document.querySelector("#continue-learning").firstChild.textContent = progress.completed.length ? `${t("continue")} ` : `${t("start")} `;
  document.querySelector(".nav-count").textContent = String(currentLessons.length).padStart(2, "0");
  document.querySelector("#sidebar-level").textContent = `${t("course")} · ${activeLevel.toUpperCase()}`;
  document.querySelector("#student-level").firstChild.textContent = `${t("student")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#breadcrumb-level").textContent = `${t("course")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#hero-level-pill").textContent = `${t("level")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#course-progress-title").textContent = `${t("course")} ${activeLevel.toUpperCase()}`;
  document.querySelector("#lesson-heading").firstChild.textContent = `${t("lessons")} · ${activeLevel.toUpperCase()} `;
  document.querySelector("#vocabulary-heading").firstChild.textContent = `${t("vocabulary")} · ${activeLevel.toUpperCase()} `;
  document.querySelector("#today-label").textContent = `${t("today")} · ${dateLabel}`;
  document.querySelector("#lesson-overline").textContent = `${t("lessonOverline")} · ${activeLevel.toUpperCase()}`;

  const isA1 = activeLevel === "a1";
  const levelDescription = levelDescriptions[displayLanguage]?.[activeLevel] || levelDescriptions.en[activeLevel];
  document.querySelector("#hero-kicker-text").textContent = isA1 ? t("starter") : t("advanced");
  document.querySelector("#hero-title").textContent = isA1 ? t("starter") : t("advanced");
  document.querySelector("#hero-description").textContent = isA1
    ? t("starterDescription")
    : activeLevel === "a2" ? t("advancedDescription") : levelDescription;
  document.querySelector("#level-switcher-description").textContent = levelDescription;
  document.querySelector("#student-level-description").textContent = isA1
    ? t("studentBeginner")
    : levelLabels[displayLanguage]?.[activeLevel] || levelLabels.en[activeLevel];
  document.querySelector(".welcome-copy").textContent = isA1 ? t("starterDescription") : activeLevel === "a2" ? t("advancedDescription") : levelDescription;
  document.title = `Lớp tiếng Việt ${activeLevel.toUpperCase()} — Học cùng Mimi`;
  document.querySelectorAll(".level-option").forEach((button) => {
    const active = button.dataset.level === activeLevel;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function changeLevel(level) {
  if (!["a1", "a2", ...advancedLevelNames].includes(level)) return;
  if (level === activeLevel) return;
  const dialog = document.querySelector("#lesson-dialog");
  if (dialog.open) dialog.close();
  activeLessonId = null;
  activeLevel = level;
  activeQuestion = 0;
  answeredQuestion = false;
  activeVocabularyTopic = "Tất cả";
  document.querySelector("#vocab-search").value = "";
  try {
    localStorage.setItem("mimi-vietnamese-active-level", activeLevel);
  } catch (error) {
    console.warn("Không thể lưu trình độ học đã chọn.", error);
    showToast("Không lưu được lớp học đã chọn trên thiết bị này.");
  }
  progress = loadProgress(activeLevel);
  renderLessons();
  renderTopicFilters();
  renderVocabulary();
  renderQuestion();
  renderReview();
  updateProgress();
  applyDisplayLanguage();
  showToast(`Đã chuyển sang lớp ${activeLevel.toUpperCase()}.`);
}

function startLesson(id) {
  const data = getLevelData();
  const lesson = data.lessons.find((item) => item.id === id);
  if (!lesson) return;
  activeLessonId = id;
  document.querySelector("#dialog-category").textContent = `BÀI ${String(lesson.id).padStart(2, "0")} · ${lesson.category}`;
  document.querySelector("#dialog-title").textContent = lesson.title;
  document.querySelector("#dialog-duration").textContent = `Khoảng ${lesson.duration}`;
  document.querySelector("#dialog-reading").textContent = lesson.reading.text;
  document.querySelector("#dialog-reading-questions").innerHTML = lesson.reading.questions
    .map((question) => `<li>${escapeHtml(question)}</li>`)
    .join("");
  document.querySelector("#dialog-grammar").innerHTML = `<span>NGỮ PHÁP TRỌNG TÂM</span><p>${escapeHtml(lesson.grammar)}</p>`;
  document.querySelector("#dialog-vocabulary").innerHTML = data.lessonContent[id].map((item) => `
    <article class="vocabulary-item">
      <div><strong>${escapeHtml(item.vi)}</strong><span>${escapeHtml(item.en)}</span><small>${escapeHtml(item.note)}</small>
        ${renderTranslationLink([item.vi, item.en, item.note].filter(Boolean).join("\n"))}</div>
    </article>`).join("");
  updateLessonTranslationLinks();
  renderLessonExercises(lesson, data.lessonContent[id]);
  document.querySelector("#lesson-dialog").showModal();
}

function updateLessonTranslationLinks() {
  const lesson = getLevelData().lessons.find((item) => item.id === activeLessonId);
  if (!lesson) return;
  const content = [
    lesson.reading.text,
    ...lesson.reading.questions,
    lesson.grammar,
  ].join("\n\n");
  const link = document.querySelector("#dialog-reading-translate");
  link.href = translationUrl(content);
  link.textContent = `${t("translate")} ↗`;
  document.querySelector("#dialog-grammar > span").textContent = t("grammar");
  const resources = document.querySelector("#dialog-reading-resources");
  resources.hidden = !advancedLevelNames.includes(activeLevel);
  if (!resources.hidden) {
    const query = lesson.articleQuery || lesson.title;
    const encodedQuery = encodeURIComponent(query);
    const googleNewsUrl = `https://news.google.com/search?q=${encodeURIComponent(`${query} tiếng Việt`)}&hl=vi&gl=VN&ceid=VN%3Avi`;
    const links = [
      [googleNewsUrl, t("newsSearch")],
      [`https://vnexpress.net/tim-kiem?q=${encodedQuery}`, t("vnexpressSearch")],
      [`https://tuoitre.vn/tim-kiem.htm?keywords=${encodedQuery}`, t("tuoitreSearch")],
    ];
    document.querySelector("#dialog-reading-news-links").innerHTML = links
      .map(([url, label]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`)
      .join("");
  }
}

function renderLessonExercises(lesson, content) {
  const firstItem = content[0];
  const lastItem = content[content.length - 1];
  const exercisePrompts = [
    `Viết nghĩa tiếng Anh của từ/cụm từ: “${firstItem.vi}”.`,
    `Dịch câu sau sang tiếng Việt: “${lastItem.en}”.`,
    `Tự viết một câu tiếng Việt áp dụng ngữ pháp “${lesson.grammar}”.`,
  ];
  const exercises = document.querySelector("#dialog-exercises");
  exercises.innerHTML = `
    <form class="lesson-exercises-form" id="lesson-exercises-form">
      ${exercisePrompts.map((prompt, index) => `
        <label class="exercise-field" for="exercise-answer-${index + 1}">
          <span><strong>${index + 1}.</strong> ${escapeHtml(prompt)}</span>
          <textarea id="exercise-answer-${index + 1}" name="answer${index + 1}" rows="2" maxlength="300" required placeholder="${escapeHtml(t("answerPlaceholder"))}"></textarea>
        </label>`).join("")}
      ${renderTranslationLink(exercisePrompts.join("\n"))}
      <button class="exercise-submit" type="submit">${escapeHtml(t("submitAnswers"))} <span aria-hidden="true">↗</span></button>
      <a class="exercise-whatsapp-fallback" id="exercise-whatsapp-fallback" href="https://wa.me/84911891345" target="_blank" rel="noopener noreferrer" hidden>Nếu WhatsApp chưa mở, bấm vào đây để gửi bài.</a>
      <p class="exercise-submit-note">WhatsApp sẽ mở tin nhắn nháp. Hãy kiểm tra rồi nhấn gửi nhé — hoàn toàn miễn phí.</p>
    </form>`;

  document.querySelector("#lesson-exercises-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const answers = [...form.querySelectorAll("textarea")].map((field) => field.value.trim());
    if (answers.some((answer) => !answer)) {
      showToast("Em hãy trả lời đủ 3 câu trước khi gửi nhé.");
      return;
    }

    const message = [
      `Xin chào cô Mimi! Em gửi bài tập tiếng Việt ${activeLevel.toUpperCase()}, bài ${lesson.id}: ${lesson.title}.`,
      "",
      ...answers.flatMap((answer, index) => [`Câu ${index + 1}: ${answer}`, ""]),
      "Nhờ cô chữa bài giúp em với ạ. Em cảm ơn cô!",
    ].join("\n");
    const whatsappUrl = `https://wa.me/84911891345?text=${encodeURIComponent(message)}`;
    const fallbackLink = document.querySelector("#exercise-whatsapp-fallback");
    fallbackLink.href = whatsappUrl;
    fallbackLink.hidden = false;
    fallbackLink.click();
    showToast("Đã mở tin nhắn bài tập trong WhatsApp. Nhấn gửi để cô nhận bài nhé!");
  });
}

function renderReviewAnswerForm(form, questions, level, lesson, skill) {
  form.innerHTML = `
    ${questions.map((question, index) => `
      <label class="exercise-field" for="${skill}-answer-${index + 1}">
        <span><strong>${index + 1}.</strong> ${escapeHtml(question)}</span>
        <textarea id="${skill}-answer-${index + 1}" name="answer${index + 1}" rows="2" maxlength="400" required placeholder="${escapeHtml(t("answerPlaceholder"))}"></textarea>
      </label>`).join("")}
    ${renderTranslationLink(questions.join("\n"))}
    <button class="exercise-submit" type="submit">${escapeHtml(t("submitAnswers"))} <span aria-hidden="true">↗</span></button>
    <a class="exercise-whatsapp-fallback" href="https://wa.me/84911891345" target="_blank" rel="noopener noreferrer" hidden>Nếu WhatsApp chưa mở, bấm vào đây để gửi bài.</a>`;

  form.onsubmit = (event) => {
    event.preventDefault();
    const answers = [...form.querySelectorAll("textarea")].map((field) => field.value.trim());
    if (answers.some((answer) => !answer)) {
      showToast("Em hãy trả lời đủ các câu trước khi gửi nhé.");
      return;
    }
    const message = [
      `Xin chào cô Mimi! Em gửi bài ôn ${skill} tiếng Việt ${level.toUpperCase()}, bài ${lesson.id}: ${lesson.title}.`,
      "",
      ...answers.flatMap((answer, index) => [`Câu ${index + 1}: ${answer}`, ""]),
      "Nhờ cô chữa bài giúp em với ạ. Em cảm ơn cô!",
    ].join("\n");
    const link = form.querySelector(".exercise-whatsapp-fallback");
    link.href = `https://wa.me/84911891345?text=${encodeURIComponent(message)}`;
    link.hidden = false;
    link.click();
    showToast("Đã mở tin nhắn trong WhatsApp. Nhấn gửi để cô nhận bài nhé!");
  };
}

function renderReview() {
  const data = getLevelData();
  const select = document.querySelector("#review-lesson");
  const selectedLessonId = Number(select.value) || 1;
  select.innerHTML = data.lessons.map((lesson) =>
    `<option value="${lesson.id}">${escapeHtml(t("lesson"))} ${String(lesson.id).padStart(2, "0")} · ${escapeHtml(lesson.title)}</option>`
  ).join("");
  select.value = String(data.lessons.some((lesson) => lesson.id === selectedLessonId) ? selectedLessonId : 1);
  const lesson = data.lessons.find((item) => item.id === Number(select.value));
  if (!lesson) return;

  document.querySelector("#listening-title").textContent = `${t("lesson")} ${lesson.id}: ${lesson.title}`;
  document.querySelector("#listening-instructions").textContent = advancedLevelNames.includes(activeLevel)
    ? `${t("searchAudio")} ${lesson.title}. ${t("listenTwice2")}`
    : `${t("listenTwice")} ${activeLevel.toUpperCase()}, ${t("listenTwice2")}`;
  const recordingLink = document.querySelector("#listening-recording-link");
  recordingLink.href = recordingFolders[activeLevel];
  recordingLink.textContent = `${t("openRecordings")} ${activeLevel.toUpperCase()} ↗`;
  renderReviewAnswerForm(
    document.querySelector("#listening-answer-form"),
    lesson.reading.questions,
    activeLevel,
    lesson,
    "Listening",
  );

  const lessonItems = data.lessonContent[lesson.id];
  const sample = lessonItems.find((item) => item.pattern) || lessonItems[lessonItems.length - 1];
  document.querySelector("#speaking-prompt").innerHTML =
    `${escapeHtml(t("speakingPrompt"))} “${escapeHtml(lesson.title)}”. ${escapeHtml(t("usePattern"))} ${escapeHtml(sample.vi)} ${renderTranslationLink(`${lesson.title}\n${sample.vi}`)}`;
  document.querySelector("#writing-title").textContent = `${t("writingPractice")} · ${t("lesson")} ${lesson.id}: ${lesson.title}`;
  document.querySelector("#writing-model").innerHTML = `
    <span>${escapeHtml(t("writingPractice"))}</span>
    <strong>${escapeHtml(sample.pattern || lesson.pattern || sample.vi)}</strong>
    <small>${escapeHtml(t("grammar"))}: ${escapeHtml(lesson.grammar)}</small>
    ${renderTranslationLink(`${sample.pattern || lesson.pattern || sample.vi}\n${lesson.grammar}`)}`;
  renderReviewAnswerForm(
    document.querySelector("#writing-answer-form"),
    [
      "Viết một câu đúng theo mẫu tham khảo.",
      "Viết lại câu trên với một từ vựng khác của bài.",
      "Viết một câu hỏi phù hợp với chủ đề này.",
    ],
    activeLevel,
    lesson,
    "Writing",
  );
  document.querySelector("#speaking-whatsapp").href =
    `https://wa.me/84911891345?text=${encodeURIComponent(`Xin chào cô Mimi! Em gửi bài nói tiếng Việt ${activeLevel.toUpperCase()}, bài ${lesson.id}: ${lesson.title}. Em sẽ đính kèm file ghi âm trong WhatsApp. Nhờ cô góp ý giúp em với ạ.`)}`;
}

let speakingRecorder = null;
let speakingStream = null;
let speakingChunks = [];
let speakingObjectUrl = null;

async function toggleSpeakingRecording() {
  const button = document.querySelector("#record-speaking");
  const note = document.querySelector("#recorder-note");
  if (speakingRecorder?.state === "recording") {
    speakingRecorder.stop();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    note.textContent = "Trình duyệt này chưa hỗ trợ ghi âm. Hãy thử mở trang bằng Chrome hoặc Edge và kiểm tra quyền dùng micro.";
    return;
  }
  try {
    speakingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    speakingChunks = [];
    speakingRecorder = new MediaRecorder(speakingStream);
    speakingRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) speakingChunks.push(event.data);
    });
    speakingRecorder.addEventListener("stop", () => {
      const recording = new Blob(speakingChunks, { type: speakingRecorder.mimeType || "audio/webm" });
      if (speakingObjectUrl) URL.revokeObjectURL(speakingObjectUrl);
      speakingObjectUrl = URL.createObjectURL(recording);
      const playback = document.querySelector("#speaking-playback");
      playback.src = speakingObjectUrl;
      playback.hidden = false;
      const download = document.querySelector("#speaking-download");
      download.href = speakingObjectUrl;
      download.download = `mimi-${activeLevel}-speaking-${document.querySelector("#review-lesson").value}.webm`;
      download.hidden = false;
      note.textContent = "Đã ghi âm xong. Hãy nghe lại, tải file xuống rồi đính kèm vào tin nhắn WhatsApp nếu muốn cô góp ý.";
      button.textContent = "● Ghi âm lại";
      speakingStream?.getTracks().forEach((track) => track.stop());
      speakingStream = null;
      speakingRecorder = null;
    }, { once: true });
    speakingRecorder.start();
    button.textContent = "■ Dừng ghi âm";
    note.textContent = "Đang ghi âm. Nhấn “Dừng ghi âm” khi em nói xong.";
  } catch (error) {
    console.warn("Không thể bắt đầu ghi âm bài nói.", error);
    note.textContent = "Không truy cập được micro. Hãy cho phép quyền dùng micro trong trình duyệt rồi thử lại.";
    speakingStream?.getTracks().forEach((track) => track.stop());
    speakingStream = null;
  }
}

function completeLesson() {
  if (activeLessonId === null) return;
  const lesson = getLevelData().lessons.find((item) => item.id === activeLessonId);
  if (!lesson) return;
  if (!progress.completed.includes(activeLessonId)) {
    progress.completed.push(activeLessonId);
    recordStudy(3);
    saveProgress();
    renderLessons();
    updateProgress();
    showToast(`Giỏi quá! Bạn đã hoàn thành "${lesson.title}".`);
  } else {
    showToast(`Ôn tập thật tốt! Bạn đã xem lại "${lesson.title}".`);
  }
  document.querySelector("#lesson-dialog").close();
  activeLessonId = null;
}

function renderQuestion() {
  const question = getLevelData().quizQuestions[activeQuestion];
  answeredQuestion = false;
  document.querySelector("#quiz-question").innerHTML = `${escapeHtml(question.word)}<small>(${escapeHtml(question.hint)})</small>${renderTranslationLink([question.word, question.hint, ...question.answers].join("\n"))}`;
  document.querySelector("#quiz-feedback").textContent = "";
  document.querySelector("#quiz-feedback").classList.remove("error");
  document.querySelector("#quiz-next").hidden = true;
  const answers = document.querySelector("#quiz-answers");
  answers.innerHTML = question.answers.map((answer, index) =>
    `<button class="quiz-answer" data-answer="${index}">${String.fromCharCode(65 + index)}. ${answer}</button>`
  ).join("");
  answers.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(Number(button.dataset.answer)));
  });
}

function checkAnswer(selected) {
  if (answeredQuestion) return;
  answeredQuestion = true;
  const question = getLevelData().quizQuestions[activeQuestion];
  const feedback = document.querySelector("#quiz-feedback");
  const answerButtons = [...document.querySelectorAll(".quiz-answer")];
  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
    if (index === selected && selected !== question.correct) button.classList.add("incorrect");
  });
  if (selected === question.correct) {
    feedback.textContent = t("quizCorrect");
    progress.quizCorrect += 1;
    recordStudy(1);
    saveProgress();
    updateProgress();
  } else {
    feedback.textContent = `${t("quizWrong")} “${question.answers[question.correct]}”.`;
    feedback.classList.add("error");
  }
  document.querySelector("#quiz-next").hidden = false;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}

document.querySelector("#quiz-next").addEventListener("click", () => {
  activeQuestion = (activeQuestion + 1) % getLevelData().quizQuestions.length;
  renderQuestion();
});

document.querySelector("#dialog-close").addEventListener("click", () => {
  document.querySelector("#lesson-dialog").close();
  activeLessonId = null;
});

document.querySelector("#dialog-complete").addEventListener("click", completeLesson);

document.querySelector("#appearance-toggle").addEventListener("click", () => {
  themeMode = themeMode === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = themeMode;
  updateAppearanceControls();
  try {
    localStorage.setItem("mimi-vietnamese-theme", themeMode);
  } catch (error) {
    console.warn("Không thể lưu chế độ giao diện đã chọn.", error);
    showToast("Không lưu được chế độ giao diện trên thiết bị này.");
  }
});

document.querySelector("#cursor-style").addEventListener("change", (event) => {
  const selectedStyle = event.currentTarget.value;
  if (!Object.prototype.hasOwnProperty.call(cursorArtwork, selectedStyle)) return;
  cursorStyle = selectedStyle;
  applyCursorStyle();
  try {
    localStorage.setItem("mimi-vietnamese-cursor", cursorStyle);
  } catch (error) {
    console.warn("Không thể lưu kiểu con trỏ đã chọn.", error);
    showToast("Không lưu được kiểu con trỏ trên thiết bị này.");
  }
});

document.querySelector("#reader-font-size").addEventListener("input", (event) => {
  readerFontSize = Number(event.currentTarget.value);
  updatePageFontScale();
  document.querySelector("#reader-font-value").value = `${readerFontSize}px`;
  try {
    localStorage.setItem("mimi-vietnamese-font-size-v2", String(readerFontSize));
  } catch (error) {
    console.warn("Không thể lưu cỡ chữ đã chọn.", error);
    showToast("Không lưu được cỡ chữ trên thiết bị này.");
  }
});

document.querySelectorAll(".surface-option").forEach((button) => {
  button.addEventListener("click", () => {
    surfaceMode = button.dataset.surface;
    document.documentElement.dataset.surface = surfaceMode;
    document.querySelectorAll(".surface-option").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    try {
      localStorage.setItem("mimi-vietnamese-surface", surfaceMode);
    } catch (error) {
      console.warn("Không thể lưu màu nền đã chọn.", error);
      showToast("Không lưu được màu nền trên thiết bị này.");
    }
  });
});

document.querySelector("#study-planner-form").addEventListener("submit", (event) => {
  event.preventDefault();
  createStudyPlan();
  try {
    localStorage.setItem("mimi-vietnamese-study-plan", JSON.stringify({
      goal: document.querySelector("#study-goal").value,
      level: document.querySelector("#study-start-level").value,
      days: document.querySelector("#study-days").value,
      minutes: document.querySelector("#study-minutes").value,
    }));
  } catch (error) {
    console.warn("Không thể lưu lộ trình học đã chọn.", error);
    showToast("Đã tạo lộ trình nhưng không lưu được lựa chọn trên thiết bị này.");
  }
});

document.querySelector("#study-ai-copy").addEventListener("click", async () => {
  const prompt = document.querySelector("#study-ai-prompt");
  try {
    await navigator.clipboard.writeText(prompt.value);
    showToast(t("aiCopied"));
  } catch (error) {
    console.warn("Không thể sao chép prompt AI tự động.", error);
    prompt.focus();
    prompt.select();
    showToast(t("aiCopyError"));
  }
});

document.querySelector("#course-feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#feedback-name").value.trim();
  const rating = Number(document.querySelector("#feedback-rating").value);
  const message = document.querySelector("#feedback-message").value.trim();
  if (!name || !message || rating < 1 || rating > 5) {
    event.currentTarget.reportValidity();
    return;
  }
  try {
    localStorage.setItem(`mimi-vietnamese-feedback-${activeLevel}`, JSON.stringify({
      name,
      rating,
      message,
      submittedAt: new Date().toISOString(),
    }));
  } catch (error) {
    console.warn("Không thể lưu góp ý của học viên.", error);
    showToast("Không lưu được góp ý trên thiết bị này.");
    return;
  }
  const success = document.querySelector("#feedback-success");
  success.textContent = t("feedbackSaved").replace("{name}", name);
  success.hidden = false;
});

document.querySelector("#vocab-search").addEventListener("input", renderVocabulary);
document.querySelector("#review-lesson").addEventListener("change", renderReview);
document.querySelector("#record-speaking").addEventListener("click", toggleSpeakingRecording);
document.querySelector("#display-language").addEventListener("change", (event) => {
  const selectedLanguage = event.currentTarget.value;
  if (!uiTranslations[selectedLanguage]) return;
  displayLanguage = selectedLanguage;
  try {
    localStorage.setItem("mimi-vietnamese-display-language", displayLanguage);
  } catch (error) {
    console.warn("Không thể lưu ngôn ngữ hiển thị đã chọn.", error);
    showToast("Language preference could not be saved on this device.");
  }
  applyDisplayLanguage();
});

document.querySelectorAll(".review-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".review-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".review-panel").forEach((panel) => {
      panel.hidden = panel.id !== button.getAttribute("aria-controls");
    });
  });
});

document.querySelectorAll(".library-tab").forEach((button) => {
  button.addEventListener("click", () => {
    activeVocabularyKind = button.dataset.kind;
    activeVocabularyTopic = "Tất cả";
    document.querySelectorAll(".library-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    renderTopicFilters();
    document.querySelector("#topic-filters").scrollLeft = 0;
    renderVocabulary();
  });
});

document.querySelectorAll("[data-nav]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll("[data-nav]").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    document.querySelector("#breadcrumb-current").textContent = link.querySelector("span").textContent;
  });
});

document.querySelector(".more-button").addEventListener("click", () => {
  showToast(`Tiến độ học ${activeLevel.toUpperCase()} được lưu riêng trên trình duyệt này.`);
});

const dateLabel = new Intl.DateTimeFormat("vi-VN", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
document.querySelectorAll(".level-option").forEach((button) => {
  button.addEventListener("click", () => changeLevel(button.dataset.level));
});

document.querySelector("#reader-font-size").value = String(readerFontSize);
document.querySelector("#reader-font-value").value = `${readerFontSize}px`;
document.querySelectorAll(".surface-option").forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.surface === surfaceMode));
});
try {
  const savedStudyPlan = JSON.parse(localStorage.getItem("mimi-vietnamese-study-plan"));
  const validStudyPlan = savedStudyPlan
    && ["travel", "family", "work", "living", "culture", "exam"].includes(savedStudyPlan.goal)
    && ["a1", "a2", "b1", "b2", "c1", "c2"].includes(savedStudyPlan.level)
    && ["2", "3", "4", "5", "7"].includes(savedStudyPlan.days)
    && ["15", "20", "30", "45", "60"].includes(savedStudyPlan.minutes);
  if (validStudyPlan) {
    document.querySelector("#study-goal").value = savedStudyPlan.goal;
    document.querySelector("#study-start-level").value = savedStudyPlan.level;
    document.querySelector("#study-days").value = savedStudyPlan.days;
    document.querySelector("#study-minutes").value = savedStudyPlan.minutes;
    createStudyPlan();
  }
} catch (error) {
  console.warn("Không thể đọc lộ trình học đã lưu.", error);
}

renderLessons();
renderQuestion();
renderTopicFilters();
renderVocabulary();
renderReview();
updateProgress();
applyDisplayLanguage();
applyCursorStyle();
updatePageFontScale();
new MutationObserver(updatePageFontScale).observe(document.body, {
  childList: true,
  characterData: true,
  subtree: true,
});
let pageFontResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(pageFontResizeTimer);
  pageFontResizeTimer = window.setTimeout(refreshPageFontScaleForViewport, 120);
});
