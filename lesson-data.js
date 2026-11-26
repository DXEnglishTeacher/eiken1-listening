// Lesson 01: Tim Urban - Inside the mind of a master procrastinator (TED Talk)
// Lesson 02: Kelly McGonigal - How to make stress your friend (TED Talk)

const LESSONS = [
{
  id: "lesson-01",
  lessonNumber: "LESSON 01",
  shortTitle: "先延ばし魔の頭の中",
  title: "先延ばし魔の頭の中を覗いてみよう",
  originalTitle: "Inside the mind of a master procrastinator",
  speaker: "Tim Urban (Wait But Why ブロガー)",
  youtubeId: "arj7oStGLkU",
  audioUrl: "https://download.ted.com/talks/TimUrban_2016.mp3",
  audioOffset: 11.8,
  sourceUrl: "https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator",
  credit: "Audio: Tim Urban / TED (CC BY-NC-ND)",
  level: "英検1級 Part 2 & Part 4 対策",
  estimatedMinutes: 20,
  summary:
    "世界中で再生された伝説のTEDトーク。「締め切りギリギリまで動けない脳の仕組み」をユーモアたっぷりに語りつつ、後半は人生の本質に迫る名スピーチです。広告ゼロのTED公式音声で、ネイティブ特有のスピード・皮肉・音声変化と英検1級レベルの抽象語彙をマスターしましょう。",
  clips: [
    {
      id: "clip-1",
      number: 1,
      title: "理想のスケジュールと現実",
      subtitle: "ネイティブの自然なつなぎ言葉とユーモア表現",
      start: 24.4,
      end: 69.6,
      durationLabel: "0:24 – 1:10",
      eikenPoint: "Part 4（リアルな語り）に頻出するフィラーや口語表現の聞き流し力を鍛える",
      transcript: [
        {
          start: 24.4,
          en: "So in college, I was a government major, which means I had to write a lot of papers.",
          ja: "大学時代、僕は政治学専攻でした。つまり、レポートを山ほど書かなきゃいけなかったんです。"
        },
        {
          start: 31.2,
          en: "Now, when a normal student writes a paper, they might spread the work out a little like this.",
          ja: "さて、普通の学生がレポートを書くときは、こんなふうに作業を少しずつ分散させますよね。"
        },
        {
          start: 35.7,
          en: "So, you know — you get started maybe a little slowly, but you get enough done in the first week that, with some heavier days later on, everything gets done, things stay civil.",
          ja: "ほら、最初はちょっとスロースタートかもしれないけど、最初の1週間である程度終わらせておけば、後半に少し忙しい日があっても全部終わって、平和に（修羅場にならずに）済むんです。"
        },
        {
          start: 47.7,
          en: "And I would want to do that like that. That would be the plan. I would have it all ready to go, but then, actually, the paper would come along, and then I would kind of do this.",
          ja: "僕もそうやりたいんですよ。それが計画なんです。準備万端にしておくのに、いざレポートの時期が来ると、まあこんな感じになっちゃうんです（直前までゼロで最後に爆上げ）。"
        },
        {
          start: 60.6,
          en: "And that would happen every single paper. But then came my 90-page senior thesis, a paper you're supposed to spend a year on.",
          ja: "それが毎回すべてのレポートで起きるんです。そしてついにやってきたのが90ページの卒業論文。1年かけて書くべき大作です。"
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
        prompt: "音声を聞いて、空欄に入る単語を選びましょう（右上で手打ち入力にも切替可）。",
        distractors: ["severe", "theory", "expected", "simple"],
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
      start: 315.3,
      end: 337.6,
      durationLabel: "5:15 – 5:38",
      eikenPoint: "Part 2（講義形式）で頻出する比喩表現・口語的な定義づけを正確にキャッチする",
      transcript: [
        {
          start: 315.3,
          en: "The Instant Gratification Monkey does not seem like a guy you want behind the wheel.",
          ja: "この『即効快楽モンキー』は、どう見てもハンドルを握らせたいタイプには見えませんよね。"
        },
        {
          start: 319.3,
          en: "He lives entirely in the present moment. He has no memory of the past, no knowledge of the future, and he only cares about two things: easy and fun.",
          ja: "彼は完全に『今この瞬間』だけを生きています。過去の記憶もなければ、未来の知識もない。気にするのはたった2つ、『楽ちん』と『楽しい』だけです。"
        },
        {
          start: 328.1,
          en: "Now, in the animal world, that works fine. If you're a dog and you spend your whole life doing nothing other than easy and fun things, you're a huge success!",
          ja: "さて、動物の世界ならそれでうまくいきます。もしあなたが犬で、一生『楽ちんで楽しいこと』だけして過ごしたなら、大成功ですからね！"
        }
      ],
      nativeNotes: [
        {
          phrase: "behind the wheel",
          heardAs: "ビハインド ザ ウィール",
          type: "ネイティブの定番比喩",
          explanation:
            "wheel は車のハンドル（steering wheel）のこと。\"behind the wheel\" で「運転席に座っている＝意思決定や物事の舵取りを握っている」というネイティブが大好きなイディオムです。"
        },
        {
          phrase: "lives entirely in the present moment",
          heardAs: "リヴズ エンタイアリー イン ザ プレゼン モウメント",
          type: "英検1級重要表現＆脱落",
          explanation:
            "entirely（完全に）を強調しつつ、present moment は t の音が落ちて「プレゼン・モウメント」のように繋がります。"
        },
        {
          phrase: "no memory of the past, no knowledge of the future",
          heardAs: "ノウ メモリアヴ ザ パスト、ノウ ナレッジャヴ ザ フューチャー",
          type: "音声変化（連結）＆対比リズム",
          explanation:
            "memory of や knowledge of の最後の音と of がくっつき「メモリアヴ」「ナレッジャヴ」と滑らかに繋がります。\"no A, no B\" の対比リズムを掴むと一瞬で内容が頭に入ります。"
        },
        {
          phrase: "nothing other than easy and fun things",
          heardAs: "ナッシング アザーザン イージー アン ファン スィングズ",
          type: "ネイティブの頻出フレーズ",
          explanation:
            "other than ~ は「〜以外に」。\"nothing other than ...\" で「〜以外は何ひとつない（〜ばっかり）」。easy and fun の and も「アン」と短く弱まります。"
        }
      ],
      dictation: {
        prompt: "即効快楽モンキーの性質を表す重要語を聞き取りましょう。",
        distractors: ["Qualification", "initially", "memory", "average"],
        segments: [
          { text: "The Instant " },
          { blank: "Gratification", hint: "満足・快楽（13文字）" },
          { text: " Monkey does not seem like a guy you want behind the wheel. He lives " },
          { blank: "entirely", hint: "完全に（8文字）" },
          { text: " in the present moment. He has no memory of the past, no " },
          { blank: "knowledge", hint: "知識（9文字）" },
          { text: " of the future." }
        ]
      }
    },
    {
      id: "clip-3",
      number: 3,
      title: "ダーク・プレイグラウンド",
      subtitle: "罪悪感まみれの遊び時間と英語特有の「皮肉」",
      start: 415.7,
      end: 438.4,
      durationLabel: "6:56 – 7:18",
      eikenPoint: "話者の皮肉（irony / sarcasm）や感情のニュアンスを正しく読み取る力",
      transcript: [
        {
          start: 415.7,
          en: "Now, the Dark Playground is a place that all of you procrastinators out there know very well.",
          ja: "さて、『ダーク・プレイグラウンド（暗黒の遊び場）』は、会場の先延ばし魔の皆さんなら誰もがよ〜く知っている場所です。"
        },
        {
          start: 422.7,
          en: "It's where leisure activities happen at times when leisure activities are not supposed to be happening.",
          ja: "それは、本来なら遊んでいるはずではない時間帯に、娯楽が繰り広げられる場所のことです。"
        },
        {
          start: 428.2,
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
        distractors: ["unheard", "thread", "apathy", "envy"],
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
      start: 466.2,
      end: 484.0,
      durationLabel: "7:46 – 8:04",
      eikenPoint: "英検1級の超頻出語 dormant を文脈と音で完全に定着させる",
      transcript: [
        {
          start: 466.2,
          en: "Now, the Panic Monster is dormant most of the time, but he suddenly wakes up anytime a deadline gets too close or there's danger of public embarrassment, a career disaster, or some other scary consequence.",
          ja: "さて、『パニック・モンスター』は普段ほとんど休眠状態なのですが、締め切りが迫りすぎたり、人前で恥をかく危険やキャリア上の大惨事、その他恐ろしい結末の危機が迫ると、突如として目を覚ますのです。"
        },
        {
          start: 479.6,
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
        distractors: ["dominant", "harassment", "consensus", "compromise"],
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
      start: 729.8,
      end: 768.5,
      durationLabel: "12:10 – 12:49",
      eikenPoint: "スピーチの転調（ユーモア → 深刻な主張）と、話者の本質的なメッセージ（Main Idea）を掴む",
      transcript: [
        {
          start: 729.8,
          en: "And it's this long-term kind of procrastination that's much less visible and much less talked about than the funnier, short-term deadline-based kind.",
          ja: "そして、面白おかしく語られる短期的な締め切り型の先延ばしよりも、ずっと目に見えにくく、語られることも少ないのが、この『長期的な先延ばし』なのです。"
        },
        {
          start: 738.5,
          en: "It's usually suffered quietly and privately. And it can be the source of a huge amount of long-term unhappiness, and regrets.",
          ja: "それはたいてい、静かに、誰にも知られずに苦しまれるものです。そして、膨大な長期的不幸と後悔の源になり得るのです。"
        },
        {
          start: 748.4,
          en: "And I thought, that's why those people are emailing, and that's why they're in such a bad place. It's not that they're cramming for some project.",
          ja: "そこで気づいたんです。だからこそ読者たちはメールをくれたし、あんなにもつらい状況にいるんだと。何かのプロジェクトのために一夜漬けしているからじゃないんです。"
        },
        {
          start: 756.6,
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
        distractors: ["climbing", "inspector", "fascination", "hesitation"],
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
},
{
  id: "lesson-02",
  lessonNumber: "LESSON 02",
  shortTitle: "ストレスを味方にする",
  title: "ストレスと友達になる方法",
  originalTitle: "How to make stress your friend",
  speaker: "Kelly McGonigal (スタンフォード大学 健康心理学者)",
  youtubeId: "RcGyVTAoXEU",
  audioUrl: "https://download.ted.com/talks/KellyMcGonigal_2013G.mp3",
  audioOffset: 10.5,
  sourceUrl: "https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend",
  credit: "Audio: Kelly McGonigal / TED (CC BY-NC-ND)",
  level: "英検1級 Part 2 科学・心理学 対策",
  estimatedMinutes: 20,
  summary:
    "「ストレスは健康の敵」という常識を覆すスタンフォード大学・健康心理学者の名TEDトーク。3万人を8年追跡した大規模研究、血管と心臓の生理学、愛情ホルモン「オキシトシン」とレジリエンスまで、英検1級 Part 2・Part 4 頻出の科学・心理学語彙を広告ゼロのTED公式音声でマスターしましょう。",
  clips: [
    {
      id: "clip-1",
      number: 1,
      title: "心理学者の「告白」— ストレスは敵か？",
      subtitle: "常識を覆す導入と医療・健康分野の重要語彙",
      start: 53.3,
      end: 90.9,
      durationLabel: "0:53 – 1:31",
      eikenPoint: "Part 4（講演の導入）で話者の立場転換（I have changed my mind）を聞き取る力",
      transcript: [
        {
          start: 53.3,
          en: "My confession is this: I am a health psychologist, and my mission is to help people be happier and healthier.",
          ja: "私の告白はこうです。私は健康心理学者で、人々のより幸せで健康な暮らしを助けることが使命です。"
        },
        {
          start: 62.1,
          en: "But I fear that something I've been teaching for the last 10 years is doing more harm than good, and it has to do with stress.",
          ja: "しかし、私がこの10年間教えてきたことが、利益よりも害をもたらしているのではないかと恐れています。それはストレスに関することです。"
        },
        {
          start: 72.1,
          en: "For years I've been telling people, stress makes you sick. It increases the risk of everything from the common cold to cardiovascular disease. Basically, I've turned stress into the enemy.",
          ja: "何年もの間、私は「ストレスは病気を招く」と言い続けてきました。風邪から心血管疾患まであらゆるリスクを高めると。要するに、ストレスを敵に仕立て上げていたのです。"
        },
        {
          start: 84.8,
          en: "But I have changed my mind about stress, and today, I want to change yours.",
          ja: "しかし私はストレスに対する考えを変えました。そして今日、皆さんの考えも変えたいのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "more harm than good",
          heardAs: "モア ハーム ザン グッド",
          type: "英検1級定番イディオム",
          explanation:
            "do more harm than good は「益よりも害をなす（かえって逆効果になる）」。英検1級のリスニング・長文・英作文すべてで使える超重要表現です。"
        },
        {
          phrase: "has to do with stress",
          heardAs: "ハズ トゥ ドゥー ウィズ ストレス",
          type: "音声変化（連結）",
          explanation:
            "have to do with ~ は「〜と関係がある」。会話では has to が「ハストゥ」のように無声音化して速く繋がります。"
        },
        {
          phrase: "from the common cold to cardiovascular disease",
          heardAs: "フロム ザ カモン コールド トゥ カーディオヴァスキュラー ディズィーズ",
          type: "専門語彙＋対比",
          explanation:
            "cardiovascular（心臓血管の）は Part 2 の医学系パッセージで頻出。「風邪」という身近な例から「心血管疾患」という重い病気まで幅を示す from A to B 構文です。"
        }
      ],
      dictation: {
        prompt: "心理学者の告白と医療系語彙を聞き取りましょう。",
        distractors: ["concession", "alarm", "muscular", "ordinary"],
        segments: [
          { text: "My " },
          { blank: "confession", hint: "告白（10文字）" },
          { text: " is this: I am a health psychologist... But I fear that something I've been teaching for the last 10 years is doing more " },
          { blank: "harm", hint: "害・損害（4文字）" },
          { text: " than good... It increases the risk of everything from the common cold to " },
          { blank: "cardiovascular", hint: "心臓血管の（14文字）" },
          { text: " disease." }
        ]
      }
    },
    {
      id: "clip-2",
      number: 2,
      title: "3万人を8年追跡した衝撃のデータ",
      subtitle: "統計データの比較と「思い込み」の恐ろしさ",
      start: 121.4,
      end: 167.5,
      durationLabel: "2:01 – 2:48",
      eikenPoint: "Part 2（研究報告）で数値・比較対象・逆説の But を正確に捉える",
      transcript: [
        {
          start: 121.4,
          en: "Some bad news first. People who experienced a lot of stress in the previous year had a 43 percent increased risk of dying.",
          ja: "まずは悪いニュースから。過去1年間に多くのストレスを経験した人々は、死亡リスクが43％高まっていました。"
        },
        {
          start: 130.9,
          en: "But that was only true for the people who also believed that stress is harmful for your health.",
          ja: "しかし、それは「ストレスは健康に有害だ」と信じていた人々にのみ当てはまることでした。"
        },
        {
          start: 141.1,
          en: "People who experienced a lot of stress but did not view stress as harmful were no more likely to die. In fact, they had the lowest risk of dying of anyone in the study, including people who had relatively little stress.",
          ja: "多くのストレスを経験しても「有害だ」と見なさなかった人々は、死亡率が高まりませんでした。それどころか、比較的ストレスが少ない人々を含め、調査対象の中で最も死亡リスクが低かったのです。"
        },
        {
          start: 155.3,
          en: "Now the researchers estimated that over the eight years they were tracking deaths, 182,000 Americans died prematurely, not from stress, but from the belief that stress is bad for you.",
          ja: "研究者らの推計では、死亡追跡を行った8年間で18万2,000人のアメリカ人が早逝しました。ストレスのせいではなく、「ストレスは体に悪い」という思い込みによってです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "no more likely to die",
          heardAs: "ノウ モア ライクリー トゥ ダイ",
          type: "比較構文の聴き取り",
          explanation:
            "not / no more likely to ~ で「〜する可能性が高くはなかった」。直後の In fact, they had the lowest risk（それどころか最も低かった）への伏線です。"
        },
        {
          phrase: "died prematurely",
          heardAs: "ダイド プリマチュアリー",
          type: "英検1級重要副詞",
          explanation:
            "prematurely は「時期尚早に、早まって（早逝して）」。pre-（前に）+ mature（成熟した）から成り、社会・人口・医療トピックで頻出です。"
        },
        {
          phrase: "not from stress, but from the belief",
          heardAs: "ノット フロム ストレス、バット フロム ザ ビリーフ",
          type: "対比強調（Not A, but B）",
          explanation:
            "話者が最も伝えたい結論を Not A, but B で明確に対比しています。リスニング設問の正答根拠になりやすい箇所です。"
        }
      ],
      dictation: {
        prompt: "研究結果の数値と核心となる単語を聞き取りましょう。",
        distractors: ["precious", "hesitated", "permanently", "relatively"],
        segments: [
          { text: "People who experienced a lot of stress in the " },
          { blank: "previous", hint: "前の・過去の（8文字）" },
          { text: " year had a 43 percent increased risk of dying. ... Now the researchers " },
          { blank: "estimated", hint: "推計した・見積もった（9文字）" },
          { text: " that over the eight years they were tracking deaths, 182,000 Americans died " },
          { blank: "prematurely", hint: "早まって・時期尚早に（11文字）" },
          { text: ", not from stress, but from the belief that stress is bad for you." }
        ]
      }
    },
    {
      id: "clip-3",
      number: 3,
      title: "ストレス観が血管と心臓を変える",
      subtitle: "ハーバード大学実験が示した生体反応の違い",
      start: 366.2,
      end: 416.2,
      durationLabel: "6:06 – 6:56",
      eikenPoint: "因果関係（chronic stress → cardiovascular disease）と対照実験の結果を整理する",
      transcript: [
        {
          start: 366.2,
          en: "Now, in a typical stress response, your heart rate goes up, and your blood vessels constrict like this.",
          ja: "さて、典型的なストレス反応では、心拍数が上がり、血管はこのように収縮します。"
        },
        {
          start: 374.8,
          en: "And this is one of the reasons that chronic stress is sometimes associated with cardiovascular disease. It's not really healthy to be in this state all the time.",
          ja: "これが、慢性的なストレスが時に心血管疾患と結びつけられる理由の一つです。常にこの状態にあるのは健康的とは言えません。"
        },
        {
          start: 383.9,
          en: "But in the study, when participants viewed their stress response as helpful, their blood vessels stayed relaxed like this. Their heart was still pounding, but this is a much healthier cardiovascular profile. It actually looks a lot like what happens in moments of joy and courage.",
          ja: "しかし実験では、参加者がストレス反応を「役立つもの」と捉えると、血管はこのようにリラックスしたままでした。心臓はドキドキしていても、はるかに健康的な心血管状態であり、喜びや勇気を感じる瞬間に起きる反応によく似ています。"
        },
        {
          start: 403.7,
          en: "Over a lifetime of stressful experiences, this one biological change could be the difference between a stress-induced heart attack at age 50 and living well into your 90s.",
          ja: "生涯にわたるストレス経験の中で、このたった一つの生物学的な変化が、50歳でストレス誘発性の心臓発作を起こすか、90代まで元気に生きるかの分かれ目になり得るのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "blood vessels constrict",
          heardAs: "ブラッド ヴェスルズ コンストリクト",
          type: "科学・医学系重要語",
          explanation:
            "blood vessel は「血管」、constrict は「（血管などが）収縮する、締めつける」。反対の stayed relaxed（リラックスしたまま）との対比がポイントです。"
        },
        {
          phrase: "chronic stress is sometimes associated with",
          heardAs: "クロニック ストレス イズ サムタイムズ アソウシエイテッド ウィズ",
          type: "英検1級超頻出フレーズ",
          explanation:
            "chronic（慢性の）↔ acute（急性の）。be associated with ~（〜と関連している）は科学系パッセージの定番表現です。"
        },
        {
          phrase: "a stress-induced heart attack",
          heardAs: "ア ストレス インデュースト ハート アタック",
          type: "複合形容詞＋連結",
          explanation:
            "-induced は「〜によって引き起こされた」。stress-induced（ストレス誘発性の）のようにハイフンで繋がる語は Part 2 で頻出します。"
        }
      ],
      dictation: {
        prompt: "身体のストレス反応を表す科学語彙を聞き取りましょう。",
        distractors: ["construct", "clinic", "logical", "typical"],
        segments: [
          { text: "Your heart rate goes up, and your blood vessels " },
          { blank: "constrict", hint: "収縮する（9文字）" },
          { text: " like this. And this is one of the reasons that " },
          { blank: "chronic", hint: "慢性の（7文字）" },
          { text: " stress is sometimes associated with cardiovascular disease. ... Over a lifetime of stressful experiences, this one " },
          { blank: "biological", hint: "生物学的な（10文字）" },
          { text: " change could be the difference..." }
        ]
      }
    },
    {
      id: "clip-4",
      number: 4,
      title: "オキシトシンが心臓を守り、回復力を生む",
      subtitle: "ストレスが人とのつながりを促すメカニズム",
      start: 609.9,
      end: 659.6,
      durationLabel: "10:10 – 11:00",
      eikenPoint: "専門用語（receptors, regenerate, resilience）を文脈から理解する",
      transcript: [
        {
          start: 609.9,
          en: "Your heart has receptors for this hormone, and oxytocin helps heart cells regenerate and heal from any stress-induced damage. This stress hormone strengthens your heart.",
          ja: "心臓にはこのホルモンの受容体があり、オキシトシンは心筋細胞が再生し、ストレスによるダメージから回復するのを助けます。このストレスホルモンは心臓を強くするのです。"
        },
        {
          start: 625.9,
          en: "And the cool thing is that all of these physical benefits of oxytocin are enhanced by social contact and social support.",
          ja: "さらに素晴らしいことに、オキシトシンのこうした身体的メリットはすべて、人との触れ合いや周囲のサポートによって高められます。"
        },
        {
          start: 634.3,
          en: "So when you reach out to others under stress, either to seek support or to help someone else, you release more of this hormone, your stress response becomes healthier, and you actually recover faster from stress.",
          ja: "ですからストレス下で他者に手を伸ばせば—支えを求めるのであれ、誰かを助けるのであれ—このホルモンがより多く分泌され、ストレス反応はより健康的になり、実際にストレスからの回復も早くなるのです。"
        },
        {
          start: 648.0,
          en: "I find this amazing, that your stress response has a built-in mechanism for stress resilience, and that mechanism is human connection.",
          ja: "私たちのストレス反応には、ストレスへの回復力（レジリエンス）を生み出す仕組みが最初から組み込まれており、その仕組みこそが「人とのつながり」だということに、私は驚嘆せずにはいられません。"
        }
      ],
      nativeNotes: [
        {
          phrase: "regenerate and heal",
          heardAs: "リジェネレイト アン ヒール",
          type: "英検1級重要動詞",
          explanation:
            "regenerate は「再生する、蘇生する」。re-（再び）+ generate（生み出す）の語源から意味を推測できます。"
        },
        {
          phrase: "are enhanced by social contact",
          heardAs: "アー エンハンスト バイ ソウシャル コンタクト",
          type: "受動態＋頻出動詞",
          explanation:
            "enhance（〜を高める、強化する）の受動態。enhanced by の d と b が滑らかに繋がって発音されます。"
        },
        {
          phrase: "built-in mechanism for stress resilience",
          heardAs: "ビルトイン メカニズム フォー ストレス リズィリエンス",
          type: "最重要キーワード",
          explanation:
            "resilience は「回復力、弾力性、逆境に負けない力」。近年の英検1級・大学入試で最頻出の超重要単語です。"
        }
      ],
      dictation: {
        prompt: "オキシトシンの働きを表す重要語を聞き取りましょう。",
        distractors: ["degrade", "enforced", "resistance", "reliance"],
        segments: [
          { text: "Oxytocin helps heart cells " },
          { blank: "regenerate", hint: "再生する（10文字）" },
          { text: " and heal from any stress-induced damage. ... All of these physical benefits of oxytocin are " },
          { blank: "enhanced", hint: "高められる・強化される（8文字）" },
          { text: " by social contact and social support. ... Your stress response has a built-in mechanism for stress " },
          { blank: "resilience", hint: "回復力・レジリエンス（10文字）" },
          { text: "." }
        ]
      }
    },
    {
      id: "clip-5",
      number: 5,
      title: "思いやりがもたらすレジリエンス",
      subtitle: "スピーチの結論：思考と行動がストレスを変える",
      start: 717.3,
      end: 758.7,
      durationLabel: "11:57 – 12:39",
      eikenPoint: "話者の最終メッセージ（not inevitable / biology of courage / resilience）を掴む",
      transcript: [
        {
          start: 717.3,
          en: "People who spent time caring for others showed absolutely no stress-related increase in dying. Zero. Caring created resilience.",
          ja: "他者を気遣いケアする時間を過ごした人々には、ストレスによる死亡率の上昇が一切見られませんでした。ゼロです。思いやりがレジリエンスを生んだのです。"
        },
        {
          start: 730.6,
          en: "And so we see once again that the harmful effects of stress on your health are not inevitable.",
          ja: "こうして私たちは再び目にするのです。ストレスが健康に与える悪影響は、決して避けられないものではないということを。"
        },
        {
          start: 736.9,
          en: "How you think and how you act can transform your experience of stress.",
          ja: "どう考え、どう行動するかによって、あなたのストレス体験そのものを変えることができるのです。"
        },
        {
          start: 743.3,
          en: "When you choose to view your stress response as helpful, you create the biology of courage. And when you choose to connect with others under stress, you can create resilience.",
          ja: "自分のストレス反応を「味方」と見なすことを選べば、勇気の生物学が生まれます。そしてストレス下で他者とつながることを選べば、レジリエンスを生み出すことができるのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "are not inevitable",
          heardAs: "アー ノット イネヴィタブル",
          type: "英検1級必須形容詞",
          explanation:
            "inevitable は「避けられない、必然的な」。not inevitable で「決して避けられない（＝変えられる）ものではない」という力強い主張になります。"
        },
        {
          phrase: "transform your experience",
          heardAs: "トランスフォーム ユア エクスピアリアンス",
          type: "強調動詞",
          explanation:
            "change よりも「質や形を根本から劇的に変える」という力強い動詞 transform を使っています。"
        },
        {
          phrase: "the biology of courage",
          heardAs: "ザ バイオロジー アヴ カレッジ",
          type: "話者の決め台詞",
          explanation:
            "「勇気の生物学」。前半の血管反応（喜びや勇気の瞬間と似ている）と後半のつながりを1フレーズに集約した名表現です。"
        }
      ],
      dictation: {
        prompt: "スピーチの結論を締めくくる重要語を聞き取りましょう。",
        distractors: ["invisible", "transfer", "coverage", "reliable"],
        segments: [
          { text: "The harmful effects of stress on your health are not " },
          { blank: "inevitable", hint: "避けられない（10文字）" },
          { text: ". How you think and how you act can " },
          { blank: "transform", hint: "一変させる・変容させる（9文字）" },
          { text: " your experience of stress. When you choose to view your stress response as helpful, you create the biology of " },
          { blank: "courage", hint: "勇気（7文字）" },
          { text: "." }
        ]
      }
    }
  ],
  vocab: [
    {
      word: "confession",
      phonetic: "/kənˈfeʃən/",
      pos: "名詞",
      meaning: "告白、打ち明け話、自白",
      eikenTag: "英検1級 頻出",
      note: "動詞 confess（告白する・認める）とセットで覚える。I have a confession to make.（打ち明けたいことがあります）は定番表現。",
      example: "The researcher began his lecture with a surprising confession about his earlier work."
    },
    {
      word: "cardiovascular",
      phonetic: "/ˌkɑːrdioʊˈvæskjələr/",
      pos: "形容詞",
      meaning: "心臓血管の、循環器系の",
      eikenTag: "Part 2 医学頻出",
      note: "cardio-（心臓）+ vascular（血管の）。cardiovascular disease（心血管疾患）は医学・健康パッセージの常連。",
      example: "Regular aerobic exercise significantly reduces the risk of cardiovascular disease."
    },
    {
      word: "prematurely",
      phonetic: "/ˌpriːməˈtʃʊrli/",
      pos: "副詞",
      meaning: "時期尚早に、早まって、早逝して",
      eikenTag: "英検1級 頻出",
      note: "形容詞 premature（時期尚早の・早すぎる）。pre-（前）+ mature（成熟）。",
      example: "Many experts warned against ending the public health measures prematurely."
    },
    {
      word: "constrict",
      phonetic: "/kənˈstrɪkt/",
      pos: "動詞",
      meaning: "収縮する、締めつける、制限する",
      eikenTag: "英検1級 科学語彙",
      note: "con-（共に）+ strict（引き締める）。restrict（制限する）や strict（厳しい）と同じ語根。",
      example: "Cold temperatures cause blood vessels near the skin to constrict."
    },
    {
      word: "chronic",
      phonetic: "/ˈkrɑːnɪk/",
      pos: "形容詞",
      meaning: "慢性の、長引く、常習的な",
      eikenTag: "英検1級 超頻出",
      note: "語根 chron（時間）。chronic illness（慢性疾患）、chronic shortage（慢性的な不足）。対義語は acute（急性の）。",
      example: "Chronic sleep deprivation can impair memory and weaken the immune system."
    },
    {
      word: "stress-induced",
      phonetic: "/ˈstres ɪnˌduːst/",
      pos: "形容詞",
      meaning: "ストレスによって引き起こされた、ストレス誘発性の",
      eikenTag: "Part 2 複合語",
      note: "induce（引き起こす、誘発する）の過去分詞を用いた複合形容詞。drug-induced（薬物誘発性の）なども同様。",
      example: "The therapy is designed to repair stress-induced damage to the body."
    },
    {
      word: "receptor",
      phonetic: "/rɪˈseptər/",
      pos: "名詞",
      meaning: "受容体、レセプター、感覚器官",
      eikenTag: "Part 2 生物学",
      note: "receive（受け取る）と同語源。細胞が特定のホルモンや神経伝達物質を受け取る「鍵穴」のこと。",
      example: "Hormones bind to specific receptors on the surface of target cells."
    },
    {
      word: "regenerate",
      phonetic: "/rɪˈdʒenəreɪt/",
      pos: "動詞",
      meaning: "再生する、蘇生する、刷新する",
      eikenTag: "英検1級 頻出",
      note: "名詞形は regeneration（再生）。生物学だけでなく都市再生（urban regeneration）でもよく使われる。",
      example: "Certain amphibians are able to regenerate lost limbs."
    },
    {
      word: "resilience",
      phonetic: "/rɪˈzɪliəns/",
      pos: "名詞",
      meaning: "回復力、弾力性、逆境から立ち直る力",
      eikenTag: "英検1級 超頻出",
      note: "形容詞 resilient（回復力のある・打たれ強い）。心理学・環境問題・経済トピックすべてで頻出の重要語。",
      example: "Strong community ties play a vital role in building psychological resilience."
    },
    {
      word: "inevitable",
      phonetic: "/ɪnˈevɪtəbl/",
      pos: "形容詞",
      meaning: "避けられない、必然的な",
      eikenTag: "英検1級 必須",
      note: "in-（否定）+ evitable（避けられる）。副詞 inevitably（必然的に）も超頻出。",
      example: "While aging is inevitable, many age-related health problems can be prevented."
    }
  ],
  quiz: [
    {
      id: "q1",
      part: "英検1級 Part 2 形式（研究結果の把握）",
      question:
        "According to the eight-year study of 30,000 U.S. adults, which group had the lowest risk of dying?",
      options: [
        "People who experienced very little stress in the previous year.",
        "People who experienced high stress and believed it was harmful.",
        "People who experienced high stress but did not view it as harmful.",
        "People who avoided stressful jobs and social situations."
      ],
      correctIndex: 2,
      explanation:
        "Clip 2 で \"People who experienced a lot of stress but did not view stress as harmful... had the lowest risk of dying of anyone in the study, including people who had relatively little stress.\" と述べられています。ストレスが少なかった人よりもさらにリスクが低かった点がポイントです。"
    },
    {
      id: "q2",
      part: "英検1級 Part 2 形式（実験結果の比較）",
      question:
        "In the Harvard study, what happened when participants viewed their stress response as helpful?",
      options: [
        "Their heart rate stopped increasing during the social stress test.",
        "Their blood vessels stayed relaxed even though their heart was pounding.",
        "Their blood vessels constricted more tightly to protect the heart.",
        "They felt no physical symptoms of stress at all."
      ],
      correctIndex: 1,
      explanation:
        "Clip 3 で \"their blood vessels stayed relaxed like this. Their heart was still pounding, but this is a much healthier cardiovascular profile.\" と説明されています。心拍数は上がっても血管が収縮しない点が健康的であるとされています。"
    },
    {
      id: "q3",
      part: "英検1級 Part 2 形式（詳細理解）",
      question:
        "How does the hormone oxytocin physically protect the heart during stress?",
      options: [
        "It prevents the pituitary gland from releasing adrenaline.",
        "It helps heart cells regenerate and heal from stress-induced damage.",
        "It lowers heart rate immediately to normal resting levels.",
        "It eliminates the need for social contact or support."
      ],
      correctIndex: 1,
      explanation:
        "Clip 4 で \"Your heart has receptors for this hormone, and oxytocin helps heart cells regenerate and heal from any stress-induced damage.\" と明確に述べられています。"
    },
    {
      id: "q4",
      part: "英検1級 Part 4 形式（話者の主張・核心）",
      question:
        "What is the speaker's central message about the harmful effects of stress?",
      options: [
        "They are inevitable unless people completely eliminate stress from their lives.",
        "They can only be prevented by taking hormone supplements.",
        "They are not inevitable; how you think about stress and connect with others can transform them.",
        "They affect only people who care too much about friends and neighbors."
      ],
      correctIndex: 2,
      explanation:
        "Clip 5 で \"the harmful effects of stress on your health are not inevitable. How you think and how you act can transform your experience of stress.\" と結論づけています。"
    }
  ]
}
];

const LESSON_DATA = LESSONS[0];
