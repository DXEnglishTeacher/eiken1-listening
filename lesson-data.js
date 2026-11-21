// Lesson 01: Tim Urban - Inside the mind of a master procrastinator (TED Talk)
// YouTube Video ID: arj7oStGLkU

const LESSON_DATA = {
  id: "lesson-01",
  lessonNumber: "LESSON 01",
  title: "先延ばし魔の頭の中を覗いてみよう",
  originalTitle: "Inside the mind of a master procrastinator",
  speaker: "Tim Urban (Wait But Why ブロガー)",
  youtubeId: "arj7oStGLkU",
  level: "英検1級 Part 2 & Part 4 対策",
  estimatedMinutes: 20,
  summary:
    "世界中で6,000万回以上再生された伝説のTEDトーク。「締め切りギリギリまで動けない脳の仕組み」をユーモアたっぷりに語りつつ、後半は人生の本質に迫る名スピーチです。ネイティブ特有の自然なスピード・皮肉（sarcasm）・音声変化と、英検1級レベルの抽象語彙を同時にマスターしましょう。",
  clips: [
    {
      id: "clip-1",
      number: 1,
      title: "理想のスケジュールと現実",
      subtitle: "ネイティブの自然なつなぎ言葉とユーモア表現",
      start: 0,
      end: 48,
      durationLabel: "0:00 – 0:48",
      eikenPoint: "Part 4（リアルな語り）に頻出するフィラーや口語表現の聞き流し力を鍛える",
      transcript: [
        {
          en: "So in college, I was a government major, which means I had to write a lot of papers.",
          ja: "大学時代、僕は政治学専攻でした。つまり、レポートを山ほど書かなきゃいけなかったんです。"
        },
        {
          en: "Now, when a normal student writes a paper, they might spread the work out a little like this.",
          ja: "さて、普通の学生がレポートを書くときは、こんなふうに作業を少しずつ分散させますよね。"
        },
        {
          en: "So, you know — you get started maybe a little slowly, but you get enough done in the first week that, with some heavier days later on, everything gets done, things stay civil.",
          ja: "ほら、最初はちょっとスロースタートかもしれないけど、最初の1週間である程度終わらせておけば、後半に少し忙しい日があっても全部終わって、平和に（修羅場にならずに）済むんです。"
        },
        {
          en: "And I would want to do that like that. That would be the plan. I would have it all ready to go, but then, actually, the paper would come along, and then I would kind of do this.",
          ja: "僕もそうやりたいんですよ。それが計画なんです。準備万端にしておくのに、いざレポートの時期が来ると、まあこんな感じになっちゃうんです（直前までゼロで最後に爆上げ）。"
        },
        {
          en: "And that would happen every single paper. But then came my 90-page senior thesis, a paper you're supposed to spend a year on...",
          ja: "それが毎回すべてのレポートで起きるんです。そしてついにやってきたのが90ページの卒業論文。1年かけて書くべき大作です…"
        }
      ],
      nativeNotes: [
        {
          phrase: "a lot of papers",
          heardAs: "アラダ ペイパーズ",
          type: "音声変化（フラッピング＆弱形）",
          explanation:
            "アメリカ英語では母音に挟まれた t が日本語のラ行に近い音（フラッピング）になり、of の f が落ちて「ア・ラ・ダ」のように1語のように繋がります。"
        },
        {
          phrase: "things stay civil",
          heardAs: "スィングズ ステイ スィヴル",
          type: "ネイティブのリアル表現",
          explanation:
            "civil は本来「市民の／礼儀正しい」ですが、ここでは「（締め切り前の地獄のようなパニックにならず）穏便に・人間らしく済む」という絶妙なユーモアを込めたネイティブらしい比喩です。会場が笑っているポイント！"
        },
        {
          phrase: "I would kind of do this",
          heardAs: "アイド カイナ ドゥー ディス",
          type: "音声変化（リダクション）",
          explanation:
            "kind of は会話ではほぼ100%「カイナ（kinda）」に短縮されます。さらに直前の I would も弱く短く発音されるため、文字を想像していないと聞き落としやすい箇所です。"
        },
        {
          phrase: "you're supposed to spend a year on",
          heardAs: "ユア スポウストゥ スペンダ イヤー オン",
          type: "音声変化（同化＆連結）",
          explanation:
            "supposed の語尾の d が次の to に飲み込まれて「スポウストゥ」に。さらに spend + a が繋がって「スペンダ」と聞こえます。"
        }
      ],
      dictation: {
        prompt: "音声を聞いて、空欄に入る単語を英語で入力しましょう（小文字OK）。",
        segments: [
          { text: "You get enough done in the first week that, with some heavier days later on, everything gets done, things stay " },
          { blank: "civil", hint: "穏便な・礼儀正しい（5文字）" },
          { text: ". ... But then came my 90-page senior " },
          { blank: "thesis", hint: "卒業論文（6文字）" },
          { text: ", a paper you're " },
          { blank: "supposed", hint: "〜することになっている（8文字）" },
          { text: " to spend a year on." }
        ]
      }
    },
    {
      id: "clip-2",
      number: 2,
      title: "即効快楽モンキーの正体",
      subtitle: "英検1級レベルの抽象語彙が連続するコアパート",
      start: 275,
      end: 325,
      durationLabel: "4:35 – 5:25",
      eikenPoint: "Part 2（講義形式）で頻出する心理学・行動経済学系の抽象表現をキャッチする",
      transcript: [
        {
          en: "The fact is, the Instant Gratification Monkey is the last creature who should be in charge of decisions.",
          ja: "実のところ、この『即効快楽モンキー』は、意思決定の舵取りを任せて最もいけない生き物なんです。"
        },
        {
          en: "He lives entirely in the present moment. He has no memory of the past, no knowledge of the future, and he only cares about two things: easy and fun.",
          ja: "彼は完全に『今この瞬間』だけを生きています。過去の記憶もなければ、未来の知識もない。気にするのはたった2つ、『楽ちん』と『楽しい』だけです。"
        },
        {
          en: "And disregarding the future altogether, he concerns himself entirely with maximizing the ease and pleasure of the current moment.",
          ja: "未来のことなど一切無視して、今この瞬間の気楽さと快楽を最大化することだけに没頭するのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "the last creature who should be...",
          heardAs: "ザ ラスト クリーチャー フー シュッビー",
          type: "ネイティブの強調構文",
          explanation:
            "「the last person/thing to ...」で「最も〜しそうにない／最も〜すべきでない」という意味の超定番表現！直訳の「最後の」ではなく、強い否定ニュアンスで一瞬で反応できるようにしましょう。"
        },
        {
          phrase: "in charge of decisions",
          heardAs: "イン チャージャヴ ディスィジョンズ",
          type: "音声変化（連結）",
          explanation:
            "charge の語尾の音と of がくっつき「チャージャヴ」のように滑らかに繋がります。"
        },
        {
          phrase: "disregarding the future altogether",
          heardAs: "ディスィガーディング ザ フューチャー オールトゥゲザー",
          type: "英検1級重要表現",
          explanation:
            "disregard（〜を完全に無視する）＋ altogether（完全に・まったく）。英検1級のリスニングでは、話者の態度や主張を言い換える正解選択肢の根拠になりやすい重要セットです。"
        },
        {
          phrase: "concerns himself entirely with",
          heardAs: "コンサーンズ ヒムセルフ エンタイアリー ウィズ",
          type: "語彙のニュアンス",
          explanation:
            "concern oneself with ~ は「〜に関心を持つ／〜に没頭する」という少しかしこまった表現。ふざけた「サル」の話をあえてアカデミックな硬い単語で語ることで笑いを作っています。"
        }
      ],
      dictation: {
        prompt: "即効快楽モンキーの性質を表す重要語を聞き取りましょう。",
        segments: [
          { text: "The Instant " },
          { blank: "Gratification", hint: "満足・快楽（13文字）" },
          { text: " Monkey is the last creature who should be in charge of decisions. He lives " },
          { blank: "entirely", hint: "完全に（8文字）" },
          { text: " in the present moment, " },
          { blank: "disregarding", hint: "〜を無視して（12文字）" },
          { text: " the future altogether." }
        ]
      }
    },
    {
      id: "clip-3",
      number: 3,
      title: "ダーク・プレイグラウンド",
      subtitle: "罪悪感まみれの遊び時間と英語特有の「皮肉」",
      start: 399,
      end: 446,
      durationLabel: "6:39 – 7:26",
      eikenPoint: "話者の皮肉（irony / sarcasm）や感情のニュアンスを正しく読み取る力",
      transcript: [
        {
          en: "Now, the Dark Playground is a place that all of you procrastinators out there know very well.",
          ja: "さて、『ダーク・プレイグラウンド（暗黒の遊び場）』は、会場の先延ばし魔の皆さんなら誰もがよ〜く知っている場所です。"
        },
        {
          en: "It's where leisure activities happen at times when leisure activities are not supposed to be happening.",
          ja: "それは、本来なら遊んでいるはずではない時間帯に、娯楽が繰り広げられる場所のことです。"
        },
        {
          en: "The fun you have in the Dark Playground isn't actually fun, because it's completely unearned, and the air is filled with guilt, dread, anxiety, self-hatred — all of those good procrastinator feelings.",
          ja: "ダーク・プレイグラウンドでの楽しみは、実はちっとも楽しくありません。だって全く『自分で勝ち取った（やるべきことを終えた後の）』楽しみじゃないから。空気は罪悪感、恐怖、不安、自己嫌悪で満たされています――そう、先延ばし魔におなじみの『素敵な』感情ばかりですね。"
        }
      ],
      nativeNotes: [
        {
          phrase: "all of you procrastinators out there",
          heardAs: "オーラヴユー プロクラスティネイターズ アウトゼア",
          type: "ネイティブの呼びかけ表現",
          explanation:
            "out there は「そこにいる（客席の／画面の向こうの）皆さん」というライブ感のある呼びかけ。ポッドキャストやTEDトークで超頻出です。"
        },
        {
          phrase: "completely unearned",
          heardAs: "コンプリートリー アンアーンド",
          type: "英検1級レベルの語彙感",
          explanation:
            "unearned は「努力で勝ち取ったものではない、不当な」。努力して仕事を終えた後の「ご褒美の遊び」と対比させることで、なぜ罪悪感が生まれるのかを一語でズバリ表現しています。"
        },
        {
          phrase: "all of those good procrastinator feelings",
          heardAs: "オーラヴゾウズ グッド プロクラスティネイター フィーリングズ",
          type: "ネイティブ特有の皮肉（Sarcasm）",
          explanation:
            "直前に guilt（罪悪感）、dread（強い恐怖）、anxiety（不安）、self-hatred（自己嫌悪）と最悪の感情を並べておきながら、あえて \"good\" と言う英語特有の皮肉！英検1級でも、文字通りの意味ではなく「皮肉・ユーモア」を見抜く問題がよく出ます。"
        }
      ],
      dictation: {
        prompt: "ダーク・プレイグラウンドの空気を満たす単語を聞き取りましょう。",
        segments: [
          { text: "The fun you have in the Dark Playground isn't actually fun, because it's completely " },
          { blank: "unearned", hint: "努力で得ていない（8文字）" },
          { text: ", and the air is filled with guilt, " },
          { blank: "dread", hint: "強い恐怖・不安（5文字）" },
          { text: ", " },
          { blank: "anxiety", hint: "心配・不安（7文字）" },
          { text: ", self-hatred." }
        ]
      }
    },
    {
      id: "clip-4",
      number: 4,
      title: "パニック・モンスター覚醒！",
      subtitle: "締め切り直前に奇跡を起こす脳の守護神",
      start: 446,
      end: 485,
      durationLabel: "7:26 – 8:05",
      eikenPoint: "英検1級の超頻出語 dormant を文脈と音で完全に定着させる",
      transcript: [
        {
          en: "The Panic Monster is dormant most of the time, but he suddenly wakes up anytime a deadline gets too close or there's danger of public embarrassment, a career disaster, or some other scary consequence.",
          ja: "『パニック・モンスター』は普段ほとんど休眠状態なのですが、締め切りが迫りすぎたり、人前で恥をかく危険やキャリア上の大惨事、その他恐ろしい結末の危機が迫ると、突如として目を覚ますのです。"
        },
        {
          en: "And importantly, he's the only thing the Monkey is terrified of.",
          ja: "そして重要なことに、彼はあのモンキーが唯一心底怯える存在なのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "is dormant most of the time",
          heardAs: "イズ ドーマント モウスタヴ ザ タイム",
          type: "英検1級ど真ん中単語＋連結",
          explanation:
            "dormant は「休眠中の・活動を休止している」（火山や植物、生物の休眠などで英検1級に超頻出！）。most of the time は t と of が繋がって「モウスタヴ ザ タイム」と1塊で発音されます。"
        },
        {
          phrase: "public embarrassment, a career disaster",
          heardAs: "パブリック エンバラスメント、ア キャリア ディザスター",
          type: "リズムと強勢（ストレス）",
          explanation:
            "列挙する場面では、ネイティブは重要な名詞（embarrassment, disaster, consequence）に強いアクセントを置き、間の冠詞 a や or は極端に弱く速く発音します。"
        },
        {
          phrase: "the only thing the Monkey is terrified of",
          heardAs: "ジ オウンリー スィング ザ モンキーズ テリファイドヴ",
          type: "関係代名詞の省略＋音声変化",
          explanation:
            "関係代名詞 that が省略され、さらに Monkey is が「モンキーズ」、terrified of が「テリファイドヴ」と一気に繋がります。構造を頭で瞬時に補う練習に最適です。"
        }
      ],
      dictation: {
        prompt: "パニック・モンスターが目を覚ます条件を聞き取りましょう。",
        segments: [
          { text: "The Panic Monster is " },
          { blank: "dormant", hint: "休眠状態の（7文字）" },
          { text: " most of the time, but he suddenly wakes up anytime a deadline gets too close or there's danger of public " },
          { blank: "embarrassment", hint: "恥・きまり悪さ（13文字）" },
          { text: ", a career disaster, or some other scary " },
          { blank: "consequence", hint: "結果・結末（11文字）" },
          { text: "." }
        ]
      }
    },
    {
      id: "clip-5",
      number: 5,
      title: "自分の人生の『観客』になってない？",
      subtitle: "笑いのあとに胸を打つ、長期的な先延ばしの真実",
      start: 660,
      end: 725,
      durationLabel: "11:00 – 12:05",
      eikenPoint: "スピーチの転調（ユーモア → 深刻な主張）と、話者の本質的なメッセージ（Main Idea）を掴む",
      transcript: [
        {
          en: "And it's this long-term kind of procrastination that's much less visible and much less talked about than the funnier, short-term deadline-based kind.",
          ja: "そして、面白おかしく語られる短期的な締め切り型の先延ばしよりも、ずっと目に見えにくく、語られることも少ないのが、この『長期的な先延ばし』なのです。"
        },
        {
          en: "It's usually suffered quietly and privately. And it can be the source of a huge amount of long-term unhappiness and regrets.",
          ja: "それはたいてい、静かに、誰にも知られずに苦しまれるものです。そして、膨大な長期的不幸と後悔の源になり得るのです。"
        },
        {
          en: "And I thought, that's why those people are emailing, and that's why they're in such a bad place. It's not that they're cramming for some project.",
          ja: "そこで気づいたんです。だからこそ読者たちはメールをくれたし、あんなにもつらい状況にいるんだと。何かのプロジェクトのために一夜漬けしているからじゃないんです。"
        },
        {
          en: "It's that long-term procrastination has made them feel like a spectator, at times, in their own lives. The frustration is not that they couldn't achieve their dreams; it's that they weren't even able to start chasing them.",
          ja: "長期的な先延ばしのせいで、時に『自分の人生の観客』のように感じてしまっているからなのです。彼らの苛立ちは、夢を叶えられなかったことではありません。夢を追いかけ始めることすらできなかったことにあるのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "in such a bad place",
          heardAs: "イン サッチャ バッド プレイス",
          type: "ネイティブのリアル口語表現",
          explanation:
            "be in a bad place は物理的な場所ではなく「精神的に追い詰められている・人生のどん底にいる」というネイティブの定番表現！such + a が連結して「サッチャ」と聞こえます。"
        },
        {
          phrase: "cramming for some project",
          heardAs: "クラミング フォー サム プロジェクト",
          type: "英検1級＆日常頻出動詞",
          explanation:
            "cram は「（試験や締切前に）詰め込み勉強する・一夜漬けで仕上げる」。学生・社会人の会話でも英検リスニングでもよく出る超実用動詞です。"
        },
        {
          phrase: "a spectator, at times, in their own lives",
          heardAs: "ア スペクテイター、アッタイムズ、イン ゼア オウン ライヴズ",
          type: "強調の挿入句＆比喩",
          explanation:
            "at times（時々）を途中に挟んでポーズを置くことで、spectator（観客・傍観者）という言葉の重みを際立たせています。Not A; it's B の対比構造も英検1級の長文リスニングで絶対に聞き逃してはいけないサインです。"
        }
      ],
      dictation: {
        prompt: "スピーチの核心となる名フレーズを聞き取りましょう。",
        segments: [
          { text: "It's not that they're " },
          { blank: "cramming", hint: "一夜漬けする（8文字）" },
          { text: " for some project. It's that long-term procrastination has made them feel like a " },
          { blank: "spectator", hint: "観客・傍観者（9文字）" },
          { text: ", at times, in their own lives. The " },
          { blank: "frustration", hint: "苛立ち・フラストレーション（11文字）" },
          { text: " is not that they couldn't achieve their dreams; it's that they weren't even able to start chasing them." }
        ]
      }
    }
  ],
  vocab: [
    {
      word: "procrastinator",
      phonetic: "/prəˈkræstɪneɪtər/",
      pos: "名詞",
      meaning: "先延ばしにする人、グズグズ引き延ばす人",
      eikenTag: "英検1級 頻出",
      note: "動詞 procrastinate（先延ばしにする）とセットで必須。語源は pro（前へ）+ crastinus（明日の）。",
      example: "Chronic procrastinators often struggle most with tasks that lack strict deadlines."
    },
    {
      word: "instant gratification",
      phonetic: "/ˈɪnstənt ˌɡrætɪfɪˈkeɪʃən/",
      pos: "名詞句",
      meaning: "即座の満足、目先の快楽",
      eikenTag: "Part 2 心理学テーマ",
      note: "反対語は delayed gratification（満足の遅延：将来の大きな報酬のために今我慢する力）。英検1級の定番トピック！",
      example: "Social media algorithms are designed to exploit our desire for instant gratification."
    },
    {
      word: "civil",
      phonetic: "/ˈsɪvəl/",
      pos: "形容詞",
      meaning: "礼儀正しい、穏便な、市民の",
      eikenTag: "多義語注意",
      note: "ここでは「修羅場にならず穏便に済む」という口語的ニュアンス。civil rights（公民権）や civil engineering（土木工学）も要チェック。",
      example: "Despite their strong disagreement, the debate remained surprisingly civil."
    },
    {
      word: "disregard",
      phonetic: "/ˌdɪsrɪˈɡɑːrd/",
      pos: "動詞",
      meaning: "〜を完全に無視する、軽視する",
      eikenTag: "英検1級 頻出",
      note: "ignore よりも「意図的に・考慮に入れず無視する」という硬めの語感。リスニングの言い換え問題でよく使われる。",
      example: "He disregarded the doctor's advice and continued working late every night."
    },
    {
      word: "unearned",
      phonetic: "/ˌʌnˈɜːrnd/",
      pos: "形容詞",
      meaning: "努力して得たのではない、不当な",
      eikenTag: "文脈理解のカギ",
      note: "earn（努力して勝ち取る）の否定形。unearned income（不労所得）という経済用語でも頻出。",
      example: "Leisure feels hollow when it is completely unearned."
    },
    {
      word: "dread",
      phonetic: "/dred/",
      pos: "名詞 / 動詞",
      meaning: "強い恐怖、恐れおののくこと / 〜をひどく恐れる",
      eikenTag: "英検1級 頻出",
      note: "単なる fear よりも「これから起きる嫌なことを想像してゾッとする」感覚。",
      example: "She looked at the approaching deadline with a growing sense of dread."
    },
    {
      word: "dormant",
      phonetic: "/ˈdɔːrmənt/",
      pos: "形容詞",
      meaning: "休眠状態の、活動を休止している",
      eikenTag: "英検1級 超頻出",
      note: "dormant volcano（休火山）、dormant seeds（休眠状態の種子）など科学・自然系パッセージの常連！",
      example: "The virus can remain dormant in the body for years before symptoms appear."
    },
    {
      word: "consequence",
      phonetic: "/ˈkɑːnsɪkwəns/",
      pos: "名詞",
      meaning: "（特に好ましくない）結果、結末",
      eikenTag: "必須語彙",
      note: "result よりも「行動のツケとして生じる重大な結果」という文脈でよく使われる。",
      example: "Ignoring climate change will have irreversible consequences for future generations."
    },
    {
      word: "cram",
      phonetic: "/kræm/",
      pos: "動詞",
      meaning: "詰め込み勉強をする、一夜漬けする、ぎゅうぎゅうに詰める",
      eikenTag: "Part 1 / 4 頻出",
      note: "cram for an exam（試験のために一夜漬けする）。名詞 cram school は「塾」。",
      example: "Cramming all night before an exam rarely leads to long-term retention."
    },
    {
      word: "spectator",
      phonetic: "/ˈspekteɪtər/",
      pos: "名詞",
      meaning: "観客、傍観者",
      eikenTag: "英検1級 頻出",
      note: "語根 spect（見る）を含む単語（inspect, prospect, perspective）とまとめて覚えると強い。",
      example: "He refused to remain a passive spectator while his community faced a crisis."
    }
  ],
  quiz: [
    {
      id: "q1",
      part: "英検1級 Part 2 形式（内容詳細）",
      question:
        "According to the speaker, why isn't the fun experienced in the 'Dark Playground' genuinely enjoyable?",
      options: [
        "Because the activities available there are usually boring and repetitive.",
        "Because it occurs when the person should be working, causing guilt and anxiety.",
        "Because the Panic Monster constantly interrupts the leisure activities.",
        "Because non-procrastinators criticize those who spend time there."
      ],
      correctIndex: 1,
      explanation:
        "Clip 3で Tim は \"because it's completely unearned, and the air is filled with guilt, dread, anxiety, self-hatred\" と述べています。やるべきことを終えずに遊んでいるため罪悪感や不安がつきまとうのが理由です。なお、Panic Monster が割り込むのは締め切り直前であり、常に邪魔しているわけではありません（選択肢3の罠）。"
    },
    {
      id: "q2",
      part: "英検1級 Part 2 形式（特徴の把握）",
      question:
        "What is the primary role of the 'Panic Monster' in a procrastinator's brain?",
      options: [
        "To help the Rational Decision-Maker plan long-term career goals.",
        "To keep the procrastinator calm during public embarrassment.",
        "To frighten away the Instant Gratification Monkey when a deadline approaches.",
        "To prevent the procrastinator from starting any difficult project."
      ],
      correctIndex: 2,
      explanation:
        "Clip 4で \"he suddenly wakes up anytime a deadline gets too close ... he's the only thing the Monkey is terrified of\" と語られています。締め切りが迫ったときに目覚め、快楽モンキーを追い払うのがパニック・モンスターの役割です。"
    },
    {
      id: "q3",
      part: "英検1級 Part 4 形式（話者の主張・核心）",
      question:
        "Why does the speaker consider procrastination without deadlines to be more dangerous than deadline-based procrastination?",
      options: [
        "Because it leads to poor academic performance on major papers like a senior thesis.",
        "Because the Panic Monster never wakes up, allowing procrastination to continue indefinitely.",
        "Because people talk about it too much, which increases public embarrassment.",
        "Because it forces people to cram for projects at the very last minute."
      ],
      correctIndex: 1,
      explanation:
        "Clip 5の核心部分です。締め切りがない長期的な目標（起業、健康、家族、夢など）ではパニック・モンスターが発動しないため、先延ばしが際限なく続き、静かな不幸や後悔につながると指摘しています。"
    },
    {
      id: "q4",
      part: "英検1級 Part 4 形式（話者の意図・ニュアンス）",
      question:
        "What does the speaker mean when he says long-term procrastinators feel like 'a spectator in their own lives'?",
      options: [
        "They enjoy watching other people succeed more than pursuing their own goals.",
        "They are frustrated because they tried hard to achieve their dreams but failed.",
        "They feel disconnected from their own potential because they never even begin chasing their dreams.",
        "They prefer observing life calmly rather than rushing to meet strict deadlines."
      ],
      correctIndex: 2,
      explanation:
        "Clip 5の最後で \"The frustration is not that they couldn't achieve their dreams; it's that they weren't even able to start chasing them.\" と明確に対比しています。選択肢2はまさに \"not that they couldn't achieve...\" をひっくり返した英検1級定番のひっかけ選択肢です！"
    }
  ]
};
