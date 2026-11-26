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
},
{
  id: "lesson-03",
  lessonNumber: "LESSON 03",
  shortTitle: "優れたリーダーの法則",
  title: "優れたリーダーはどうやって行動を促すか",
  originalTitle: "How great leaders inspire action",
  speaker: "Simon Sinek (リーダーシップ専門家・著者)",
  youtubeId: "qp0HIF3SfI4",
  audioUrl: "https://download.ted.com/talks/SimonSinek_2009X.mp3",
  audioOffset: 1.4,
  sourceUrl: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action",
  credit: "Audio: Simon Sinek / TED (CC BY-NC-ND)",
  level: "英検1級 Part 2 ビジネス・リーダーシップ 対策",
  estimatedMinutes: 20,
  summary:
    "「人は『何（What）』ではなく『なぜ（Why）』に動かされる」というゴールデン・サークルの法則を提唱した歴史的TEDトーク。Apple・ライト兄弟・キング牧師の例と脳科学（大脳新皮質と大脳辺縁系）を通じて、英検1級頻出の論理・ビジネス・科学語彙を広告ゼロの公式音声でマスターしましょう。",
  clips: [
    {
      id: "clip-1",
      number: 1,
      title: "ゴールデン・サークル：なぜ（WHY）から始める",
      subtitle: "目的・信念・存在意義を定義するコア理論",
      start: 132.8,
      end: 179.2,
      durationLabel: "2:13 – 2:59",
      eikenPoint: "Part 2・Part 4 で頻出する抽象概念の定義（By 'why,' I mean...）を正確に捉える",
      transcript: [
        {
          start: 132.8,
          en: "Why? How? What? This little idea explains why some organizations and some leaders are able to inspire where others aren't.",
          ja: "なぜ（Why）？どうやって（How）？何を（What）？このシンプルな考え方が、ある組織やリーダーが人々を鼓舞でき、他の者ができない理由を説明します。"
        },
        {
          start: 141.3,
          en: "Let me define the terms really quickly. Every single person, every single organization on the planet knows what they do, 100 percent.",
          ja: "言葉を手短に定義しましょう。地球上のすべての人、すべての組織は、自分たちが「何を」しているかを100％知っています。"
        },
        {
          start: 150.4,
          en: "Some know how they do it, whether you call it your differentiated value proposition or your proprietary process or your USP. But very, very few people or organizations know why they do what they do.",
          ja: "「どうやって」それをしているか—差別化された価値提案であれ、独自のプロセスであれ、USPであれ—を知っている人もいます。しかし、「なぜ」それをするのかを知っている人や組織はごくわずかです。"
        },
        {
          start: 162.3,
          en: "And by \"why\" I don't mean \"to make a profit.\" That's a result. It's always a result. By \"why,\" I mean: What's your purpose? What's your cause? What's your belief? Why does your organization exist? Why do you get out of bed in the morning? And why should anyone care?",
          ja: "そして「なぜ」とは「利益を出すため」という意味ではありません。それは結果であり、常に結果にすぎないのです。私が言う「なぜ」とは、あなたの目的は何か、大義は何か、信念は何か、なぜその組織は存在するのか、なぜ朝起きるのか、そしてなぜ他人がそれを気にかけるべきなのか、ということです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "where others aren't",
          heardAs: "ウェア アザーズ アーント",
          type: "省略表現",
          explanation:
            "where others aren't (able to inspire) の省略。直前の述語を丸ごと省略して対比を作る英語特有の簡潔な表現です。"
        },
        {
          phrase: "proprietary process",
          heardAs: "プロプライエタリー プロセス",
          type: "英検1級ビジネス語彙",
          explanation:
            "proprietary は「独自の、独占的な、特許権のある」。IT・ビジネス系パッセージで非常に頻出する語です。"
        },
        {
          phrase: "What's your purpose? What's your cause?",
          heardAs: "ワッツ ユア パーパス、ワッツ ユア コーズ",
          type: "強調の反復リズム",
          explanation:
            "purpose（目的）、cause（大義・理念）、belief（信念）と類語を畳みかけて「Why」の意味を聴衆に印象づけています。"
        }
      ],
      dictation: {
        prompt: "ゴールデン・サークルの定義を表す重要語を聞き取りましょう。",
        distractors: ["perspire", "temporary", "proposal", "promise"],
        segments: [
          { text: "This little idea explains why some organizations and some leaders are able to " },
          { blank: "inspire", hint: "鼓舞する・刺激する（7文字）" },
          { text: " where others aren't. ... whether you call it your differentiated value proposition or your " },
          { blank: "proprietary", hint: "独自の・独占的な（11文字）" },
          { text: " process... By \"why,\" I mean: What's your " },
          { blank: "purpose", hint: "目的（7文字）" },
          { text: "? What's your cause?" }
        ]
      }
    },
    {
      id: "clip-2",
      number: 2,
      title: "Apple が人を引きつける本当の理由",
      subtitle: "「何をするか」ではなく「なぜするか」から語る例",
      start: 245.8,
      end: 281.7,
      durationLabel: "4:06 – 4:42",
      eikenPoint: "具体例（Apple）と結論（people buy why you do it）のつながりを把握する",
      transcript: [
        {
          start: 245.8,
          en: "Here's how Apple actually communicates.",
          ja: "こちらが Apple の実際の伝え方です。"
        },
        {
          start: 249.6,
          en: "Everything we do, we believe in challenging the status quo. We believe in thinking differently.",
          ja: "「私たちのすることすべてにおいて、現状に挑戦することを信じています。異なる考え方をすることを信じています。"
        },
        {
          start: 258.2,
          en: "The way we challenge the status quo is by making our products beautifully designed, simple to use and user friendly. We just happen to make great computers. Want to buy one?\"",
          ja: "現状に挑戦する方法は、美しくデザインされ、使いやすく、ユーザーフレンドリーな製品を作ることです。私たちはたまたま素晴らしいコンピュータを作っているだけ。1台いかがですか？」"
        },
        {
          start: 269.5,
          en: "Totally different, right? You're ready to buy a computer from me. I just reversed the order of the information. What it proves to us is that people don't buy what you do; people buy why you do it.",
          ja: "まったく違いますよね？今すぐ私からコンピュータを買いたくなったはずです。私は情報の順番を逆にしただけです。このことが証明しているのは、人は「あなたが何をするか」を買うのではなく、「なぜそれをするのか」を買うということです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "challenging the status quo",
          heardAs: "チャレンジング ザ ステイタス クウォウ",
          type: "英検1級超重要表現",
          explanation:
            "status quo はラテン語由来の「現状」。challenge the status quo（現状に挑戦する・打破する）は英検1級の英作文・リスニングで定番です。"
        },
        {
          phrase: "We just happen to make",
          heardAs: "ウィ ジャスト ハプン トゥ メイク",
          type: "控えめな強調表現",
          explanation:
            "happen to ~ は「たまたま〜する」。製品自体ではなく理念が主役であることを際立たせる粋な表現です。"
        },
        {
          phrase: "reversed the order",
          heardAs: "リヴァースト ジ オーダー",
          type: "音声変化（連結）",
          explanation:
            "reversed の語尾の t 音と次の the が繋がり、order の前では the が「ジ」と発音されます。"
        }
      ],
      dictation: {
        prompt: "Apple のメッセージと核心のフレーズを聞き取りましょう。",
        distractors: ["statue", "reserved", "approves", "improves"],
        segments: [
          { text: "Everything we do, we believe in challenging the " },
          { blank: "status", hint: "現状（status ___）（6文字）" },
          { text: " quo. ... I just " },
          { blank: "reversed", hint: "逆にした（8文字）" },
          { text: " the order of the information. What it " },
          { blank: "proves", hint: "証明する（6文字）" },
          { text: " to us is that people don't buy what you do; people buy why you do it." }
        ]
      }
    },
    {
      id: "clip-3",
      number: 3,
      title: "脳科学が裏づける直感と意思決定",
      subtitle: "大脳新皮質（What）と大脳辺縁系（Why）の役割",
      start: 352.4,
      end: 400.2,
      durationLabel: "5:52 – 6:40",
      eikenPoint: "脳の部位と機能の対応関係（neocortex ↔ What / limbic brain ↔ Why）を整理する",
      transcript: [
        {
          start: 352.4,
          en: "Here's the best part: None of what I'm telling you is my opinion. It's all grounded in the tenets of biology. Not psychology, biology.",
          ja: "ここからが一番面白いところです。私がお話ししていることは、私の意見ではありません。すべて生物学の基本原則に基づいています。心理学ではなく、生物学です。"
        },
        {
          start: 361.8,
          en: "If you look at a cross-section of the human brain, from the top down, the human brain is actually broken into three major components that correlate perfectly with the golden circle.",
          ja: "人間の脳の断面を上から下へ見てみると、脳は実際に3つの主要な構成要素に分かれており、それがゴールデン・サークルと見事に相関しているのです。"
        },
        {
          start: 371.8,
          en: "Our newest brain, our Homo sapien brain, our neocortex, corresponds with the \"what\" level. The neocortex is responsible for all of our rational and analytical thought and language.",
          ja: "最も新しい脳、ホモ・サピエンスの脳である大脳新皮質は「What」のレベルに対応します。大脳新皮質は合理的・分析的な思考や言語のすべてを司っています。"
        },
        {
          start: 384.3,
          en: "The middle two sections make up our limbic brains, and our limbic brains are responsible for all of our feelings, like trust and loyalty. It's also responsible for all human behavior, all decision-making, and it has no capacity for language.",
          ja: "中央の2つの領域は大脳辺縁系を構成しており、信頼や忠誠心といったあらゆる感情を司っています。また、人間のあらゆる行動や意思決定も担っていますが、言語を扱う能力はありません。"
        }
      ],
      nativeNotes: [
        {
          phrase: "grounded in the tenets of biology",
          heardAs: "グラウンディッド イン ザ テネッツ アヴ バイオロジー",
          type: "英検1級抽象語彙",
          explanation:
            "be grounded in ~（〜に基づいている）、tenet（主義、原則、教義）。学術的な講演で非常に好まれる硬い語彙です。"
        },
        {
          phrase: "correlate perfectly with",
          heardAs: "コラレイト パーフェクトリー ウィズ",
          type: "科学系頻出動詞",
          explanation:
            "correlate with ~（〜と相関する）。直後の correspond with ~（〜に対応する）と言い換えて繰り返されています。"
        },
        {
          phrase: "rational and analytical thought",
          heardAs: "ラショナル アン アナリティカル ソウト",
          type: "音声変化（and の弱形）",
          explanation:
            "and が「アン」と短く弱まり、rational と analytical が滑らかに繋がります。"
        }
      ],
      dictation: {
        prompt: "脳科学とゴールデン・サークルの対応を表す語を聞き取りましょう。",
        distractors: ["collaborate", "artificial", "royalty", "equality"],
        segments: [
          { text: "the human brain is actually broken into three major components that " },
          { blank: "correlate", hint: "相関する（9文字）" },
          { text: " perfectly with the golden circle. ... The neocortex is responsible for all of our rational and " },
          { blank: "analytical", hint: "分析的な（10文字）" },
          { text: " thought and language. ... responsible for all of our feelings, like trust and " },
          { blank: "loyalty", hint: "忠誠心（7文字）" },
          { text: "." }
        ]
      }
    },
    {
      id: "clip-4",
      number: 4,
      title: "ライト兄弟が資金力のある競合に勝てたわけ",
      subtitle: "「信念」のライト兄弟 vs 「結果・名声」のラングレー",
      start: 560.9,
      end: 605.3,
      durationLabel: "9:21 – 10:05",
      eikenPoint: "2つの対象（Wright brothers vs Langley）の対比構造を正確に追う",
      transcript: [
        {
          start: 560.9,
          en: "A few hundred miles away in Dayton, Ohio, Orville and Wilbur Wright, they had none of what we consider to be the recipe for success.",
          ja: "数百マイル離れたオハイオ州デイトンでは、オーヴィルとウィルバーのライト兄弟が、私たちが「成功の秘訣」と考えるものを何一つ持っていませんでした。"
        },
        {
          start: 569.5,
          en: "They had no money; they paid for their dream with the proceeds from their bicycle shop. Not a single person on the Wright brothers' team had a college education, not even Orville or Wilbur. And The New York Times followed them around nowhere.",
          ja: "お金もなく、自転車店の収益で夢の資金を賄いました。チームに大学教育を受けた者は一人もおらず、兄弟自身もそうでした。ニューヨーク・タイムズが取材に追いかけることも一切ありませんでした。"
        },
        {
          start: 583.9,
          en: "The difference was, Orville and Wilbur were driven by a cause, by a purpose, by a belief. They believed that if they could figure out this flying machine, it'll change the course of the world.",
          ja: "違いは、オーヴィルとウィルバーが大義、目的、信念に突き動かされていたことでした。もしこの飛行機械を完成させられれば、世界の歴史を変えられると信じていたのです。"
        },
        {
          start: 596.8,
          en: "Samuel Pierpont Langley was different. He wanted to be rich, and he wanted to be famous. He was in pursuit of the result. He was in pursuit of the riches.",
          ja: "サミュエル・ピアポント・ラングレーは違いました。彼は金持ちになりたくて、有名になりたかったのです。結果を追い求め、富を追い求めていました。"
        }
      ],
      nativeNotes: [
        {
          phrase: "with the proceeds from their bicycle shop",
          heardAs: "ウィズ ザ プロウシーズ フロム ゼア バイシクル ショップ",
          type: "名詞の proceeds に注意",
          explanation:
            "動詞の proceed（進む）ではなく、複数形名詞の proceeds は「（事業・販売などの）収益、売上金」という意味になります。"
        },
        {
          phrase: "driven by a cause",
          heardAs: "ドリヴン バイ ア コーズ",
          type: "頻出受動態フレーズ",
          explanation:
            "be driven by ~（〜に突き動かされている）。動機づけを語る文脈の定番表現です。"
        },
        {
          phrase: "in pursuit of the riches",
          heardAs: "イン パースート アヴ ザ リッチェズ",
          type: "重要イディオム",
          explanation:
            "in pursuit of ~（〜を追い求めて）。in pursuit of happiness（幸福の追求）でもおなじみです。"
        }
      ],
      dictation: {
        prompt: "ライト兄弟とラングレーの対比を表す重要語を聞き取りましょう。",
        distractors: ["processes", "deprived", "persuade", "procedure"],
        segments: [
          { text: "they paid for their dream with the " },
          { blank: "proceeds", hint: "収益・売上（8文字）" },
          { text: " from their bicycle shop. ... The difference was, Orville and Wilbur were " },
          { blank: "driven", hint: "突き動かされた（6文字）" },
          { text: " by a cause, by a purpose, by a belief. ... He was in " },
          { blank: "pursuit", hint: "追求（7文字）" },
          { text: " of the result." }
        ]
      }
    },
    {
      id: "clip-5",
      number: 5,
      title: "「リーダー」と「人々を導く者」の違い",
      subtitle: "義務ではなく「自分自身のために」人はついていく",
      start: 1036.7,
      end: 1076.8,
      durationLabel: "17:17 – 17:57",
      eikenPoint: "スピーチの結論における定義の対比（leaders vs those who lead）を掴む",
      transcript: [
        {
          start: 1036.7,
          en: "Listen to politicians now, with their comprehensive 12-point plans. They're not inspiring anybody.",
          ja: "今の政治家たちの話を聞いてみてください。包括的な12項目の計画を掲げていますが、誰の心も動かしていません。"
        },
        {
          start: 1041.4,
          en: "Because there are leaders and there are those who lead. Leaders hold a position of power or authority, but those who lead inspire us.",
          ja: "なぜなら、「リーダー（指導者の地位にある人）」と「人々を導く者」がいるからです。リーダーは権力や権威の地位を保持していますが、人々を導く者は私たちを鼓舞するのです。"
        },
        {
          start: 1053.1,
          en: "Whether they're individuals or organizations, we follow those who lead, not because we have to, but because we want to. We follow those who lead, not for them, but for ourselves.",
          ja: "個人であれ組織であれ、私たちが導く者についていくのは、そうしなければならないからではなく、そうしたいからです。彼らのためではなく、私たち自身のためについていくのです。"
        },
        {
          start: 1066.9,
          en: "And it's those who start with \"why\" that have the ability to inspire those around them or find others who inspire them.",
          ja: "そして、「Why（なぜ）」から始める者こそが、周囲の人々を鼓舞したり、自分を鼓舞してくれる仲間を見つけたりする力を持っているのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "comprehensive 12-point plans",
          heardAs: "コンプリヘンシヴ トゥエルヴポイント プランズ",
          type: "英検1級必須形容詞",
          explanation:
            "comprehensive は「包括的な、広範囲にわたる」。政策・報告書・計画などを形容する英検1級最頻出単語の一つです。"
        },
        {
          phrase: "not because we have to, but because we want to",
          heardAs: "ノット ビコーズ ウィ ハフトゥ、バット ビコーズ ウィ ウォントゥ",
          type: "音声変化＋対比",
          explanation:
            "have to は「ハフトゥ」、want to は「ウォントゥ」と短縮され、not A, but B のリズムで強調されます。"
        },
        {
          phrase: "it's those who start with \"why\" that...",
          heardAs: "イッツ ゾウズ フー スタート ウィズ ワイ ザット",
          type: "強調構文（It is ... that）",
          explanation:
            "文末の決め台詞で強調構文を使い、「Why から始める人たちこそが」という主語を際立たせています。"
        }
      ],
      dictation: {
        prompt: "スピーチの締めくくりとなる重要語を聞き取りましょう。",
        distractors: ["apprehensive", "authenticity", "agility", "liability"],
        segments: [
          { text: "Listen to politicians now, with their " },
          { blank: "comprehensive", hint: "包括的な（13文字）" },
          { text: " 12-point plans. ... Leaders hold a position of power or " },
          { blank: "authority", hint: "権威・権限（9文字）" },
          { text: ", but those who lead inspire us. ... And it's those who start with \"why\" that have the " },
          { blank: "ability", hint: "能力（7文字）" },
          { text: " to inspire those around them." }
        ]
      }
    }
  ],
  vocab: [
    {
      word: "proprietary",
      phonetic: "/prəˈpraɪətəri/",
      pos: "形容詞",
      meaning: "独自の、独占的な、所有権のある",
      eikenTag: "英検1級 頻出",
      note: "proprietary software（独自ソフトウェア）、proprietary process（独自工程）。ビジネス・IT分野の定番。",
      example: "The company relies on a proprietary algorithm to personalize recommendations."
    },
    {
      word: "status quo",
      phonetic: "/ˌsteɪtəs ˈkwoʊ/",
      pos: "名詞",
      meaning: "現状、そのままの状態",
      eikenTag: "英検1級 超頻出",
      note: "maintain the status quo（現状を維持する）、challenge the status quo（現状に挑戦する）。",
      example: "Reformers argued that maintaining the status quo would only deepen the crisis."
    },
    {
      word: "tenet",
      phonetic: "/ˈtenɪt/",
      pos: "名詞",
      meaning: "原則、主義、教義",
      eikenTag: "英検1級 頻出",
      note: "core tenets（中核原則）。宗教・哲学・科学・経済の基本原理を述べる際に使われる硬い語。",
      example: "Freedom of expression is one of the fundamental tenets of a democratic society."
    },
    {
      word: "correlate",
      phonetic: "/ˈkɔːrəleɪt/",
      pos: "動詞",
      meaning: "相関する、相互に関連づける",
      eikenTag: "Part 2 科学頻出",
      note: "correlate with ~（〜と相関する）。名詞は correlation（相関関係）。因果関係（causation）との対比も頻出。",
      example: "Higher levels of education tend to correlate with better health outcomes."
    },
    {
      word: "neocortex",
      phonetic: "/ˌniːoʊˈkɔːrteks/",
      pos: "名詞",
      meaning: "大脳新皮質",
      eikenTag: "Part 2 脳科学",
      note: "neo-（新しい）+ cortex（皮質）。論理的思考や言語を司る進化的に新しい脳の部位。",
      example: "The human neocortex is responsible for complex reasoning and language processing."
    },
    {
      word: "analytical",
      phonetic: "/ˌænəˈlɪtɪkəl/",
      pos: "形容詞",
      meaning: "分析的な、論理的な",
      eikenTag: "必須語彙",
      note: "動詞 analyze（分析する）、名詞 analysis（分析）とセットで定着させる。",
      example: "The job requires strong analytical skills and attention to detail."
    },
    {
      word: "limbic",
      phonetic: "/ˈlɪmbɪk/",
      pos: "形容詞",
      meaning: "大脳辺縁系の",
      eikenTag: "Part 2 脳科学",
      note: "the limbic system（大脳辺縁系）。感情・記憶・本能的行動を司る脳の領域。",
      example: "Emotional responses are largely processed in the limbic system of the brain."
    },
    {
      word: "proceeds",
      phonetic: "/ˈproʊsiːdz/",
      pos: "名詞（複数形）",
      meaning: "収益、売上金、上がり",
      eikenTag: "英検1級 頻出",
      note: "必ず複数形で使い、動詞 proceed（進む）とはアクセント位置も異なる（名詞は前、動詞は後ろ）。",
      example: "All proceeds from the charity concert will go to disaster relief."
    },
    {
      word: "pursuit",
      phonetic: "/pərˈsuːt/",
      pos: "名詞",
      meaning: "追求、追跡、研究・活動",
      eikenTag: "英検1級 必須",
      note: "動詞 pursue（追求する）の名詞形。in pursuit of ~（〜を追い求めて）。",
      example: "Many innovators took great risks in pursuit of their long-term vision."
    },
    {
      word: "comprehensive",
      phonetic: "/ˌkɑːmprɪˈhensɪv/",
      pos: "形容詞",
      meaning: "包括的な、総合的な、広範囲にわたる",
      eikenTag: "英検1級 超頻出",
      note: "comprehend（理解する・包含する）から。comprehensive study / plan / reform の形でよく出る。",
      example: "The committee published a comprehensive report on urban air pollution."
    }
  ],
  quiz: [
    {
      id: "q1",
      part: "英検1級 Part 2 形式（概念の理解）",
      question:
        "In the speaker's 'Golden Circle' framework, what does the 'Why' represent?",
      options: [
        "The financial profit an organization aims to achieve each year.",
        "The specific features and quality of a company's products.",
        "The underlying purpose, cause, or belief that explains why an organization exists.",
        "The marketing strategy used to reverse the order of advertisements."
      ],
      correctIndex: 2,
      explanation:
        "Clip 1 で \"By 'why' I don't mean 'to make a profit.' That's a result... By 'why,' I mean: What's your purpose? What's your cause? What's your belief?\" と明確に定義しています。"
    },
    {
      id: "q2",
      part: "英検1級 Part 2 形式（科学的根拠）",
      question:
        "According to the speaker, why does communicating from the 'inside out' drive human behavior?",
      options: [
        "Because the neocortex processes feelings of trust and loyalty before language.",
        "Because the limbic brain controls decision-making and feelings, even though it has no capacity for language.",
        "Because people prefer analyzing facts and figures before making gut decisions.",
        "Because the newest part of the brain ignores rational and analytical thought."
      ],
      correctIndex: 1,
      explanation:
        "Clip 3 で、大脳新皮質（neocortex）が言語や分析を司るのに対し、大脳辺縁系（limbic brain）が感情・信頼・すべての意思決定を司り、言語能力を持たないため「Why」から語ることで行動を促せると説明しています。"
    },
    {
      id: "q3",
      part: "英検1級 Part 2 形式（事例の対比）",
      question:
        "Why did the Wright brothers succeed in achieving powered flight while Samuel Pierpont Langley failed?",
      options: [
        "The Wright brothers received larger government grants and media attention.",
        "Langley's team lacked college-educated engineers and proper funding.",
        "The Wright brothers were driven by a cause and belief, whereas Langley was motivated by fame and riches.",
        "Langley was more interested in improving upon the Wright brothers' technology than being first."
      ],
      correctIndex: 2,
      explanation:
        "Clip 4 で、ライト兄弟は資金も学歴もなかったが「信念・目的（cause, purpose, belief）」に突き動かされていたのに対し、ラングレーは「富と名声（result / riches）」を追い求めていたと対比しています。"
    },
    {
      id: "q4",
      part: "英検1級 Part 4 形式（話者の主張・核心）",
      question:
        "How does the speaker distinguish between 'leaders' and 'those who lead'?",
      options: [
        "'Leaders' hold positions of power or authority, whereas 'those who lead' inspire people to follow voluntarily.",
        "'Leaders' focus on comprehensive 12-point plans, whereas 'those who lead' avoid making any plans.",
        "'Leaders' rely on biology, whereas 'those who lead' rely strictly on psychology.",
        "'Leaders' inspire people for their own sake, whereas 'those who lead' force people to obey."
      ],
      correctIndex: 0,
      explanation:
        "Clip 5 で \"Leaders hold a position of power or authority, but those who lead inspire us... we follow those who lead, not because we have to, but because we want to.\" と述べています。"
    }
  ]
},
{
  id: "lesson-04",
  lessonNumber: "LESSON 04",
  shortTitle: "ハーバード75年幸福研究",
  title: "人生を幸せにするものは何か？（ハーバード75年研究）",
  originalTitle: "What makes a good life? Lessons from the longest study on happiness",
  speaker: "Robert Waldinger (ハーバード大学 精神科医・研究責任者)",
  youtubeId: "8KkKuTCFvzI",
  audioUrl: "https://download.ted.com/talks/RobertWaldinger_2015X.mp3",
  audioOffset: 3.7,
  sourceUrl: "https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness",
  credit: "Audio: Robert Waldinger / TED (CC BY-NC-ND)",
  level: "英検1級 Part 2 社会学・長期追跡調査 対策",
  estimatedMinutes: 20,
  summary:
    "724人の男性を75年間追跡したハーバード大学成人発達研究が明かした「幸福と健康の真実」。富や名声ではなく、良好な人間関係がいかに体と脳と記憶を守るのか、英検1級 Part 2 の社会学・医学・統計調査パッセージに直結する語彙とともに学びましょう。",
  clips: [
    {
      id: "clip-1",
      number: 1,
      title: "ハーバード75年追跡調査の始まり",
      subtitle: "長期追跡研究（longitudinal study）が極めて希少な理由",
      start: 121.2,
      end: 177.6,
      durationLabel: "2:01 – 2:58",
      eikenPoint: "Part 2 の研究紹介で「調査規模・期間・継続が難しい理由」を正確に聞き取る",
      transcript: [
        {
          start: 121.2,
          en: "The Harvard Study of Adult Development may be the longest study of adult life that's ever been done.",
          ja: "「ハーバード成人発達研究」は、これまでに行われた中で最も長い成人期の追跡調査かもしれません。"
        },
        {
          start: 129.3,
          en: "For 75 years, we've tracked the lives of 724 men, year after year, asking about their work, their home lives, their health, and of course asking all along the way without knowing how their life stories were going to turn out.",
          ja: "75年間、私たちは724人の男性の人生を毎年追跡し、仕事や家庭生活、健康について尋ねてきました。もちろん、彼らの人生の物語がどう展開するか分からないまま、ずっと問い続けてきたのです。"
        },
        {
          start: 148.9,
          en: "Studies like this are exceedingly rare. Almost all projects of this kind fall apart within a decade because too many people drop out of the study, or funding for the research dries up, or the researchers get distracted, or they die, and nobody moves the ball further down the field.",
          ja: "このような研究は極めて稀です。この種のプロジェクトのほとんどは10年以内に頓挫してしまいます。あまりに多くの対象者が脱落したり、研究資金が枯渇したり、研究者が別のことに気を取られたり、亡くなってバトンを継ぐ人がいなくなったりするからです。"
        },
        {
          start: 169.9,
          en: "But through a combination of luck and the persistence of several generations of researchers, this study has survived.",
          ja: "しかし幸運と、何世代にもわたる研究者たちの粘り強さが組み合わさったことで、この研究は生き残ってきたのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "exceedingly rare",
          heardAs: "イクスィーディングリー レア",
          type: "英検1級重要副詞",
          explanation:
            "exceedingly は「極めて、非常に」（extremely の硬い言い換え）。academic な講演で頻出です。"
        },
        {
          phrase: "fall apart / drop out / dries up",
          heardAs: "フォール アパート / ドロップ アウト / ドライズ アップ",
          type: "重要句動詞3連発",
          explanation:
            "fall apart（崩壊する・頓挫する）、drop out（脱落する）、dry up（枯渇する）。研究が失敗する理由を簡潔な句動詞で並べています。"
        },
        {
          phrase: "persistence of several generations",
          heardAs: "パースィステンス アヴ セヴラル ジェネレイションズ",
          type: "英検1級必須名詞",
          explanation:
            "persistence は「粘り強さ、持続性」。動詞 persist（粘り強く続ける）とセットで覚えましょう。"
        }
      ],
      dictation: {
        prompt: "長期研究の希少性と継続の理由を表す語を聞き取りましょう。",
        distractors: ["excessively", "extracted", "resistance", "insistence"],
        segments: [
          { text: "Studies like this are " },
          { blank: "exceedingly", hint: "極めて（11文字）" },
          { text: " rare. ... or the researchers get " },
          { blank: "distracted", hint: "気を取られる（10文字）" },
          { text: ", or they die... But through a combination of luck and the " },
          { blank: "persistence", hint: "粘り強さ（11文字）" },
          { text: " of several generations of researchers, this study has survived." }
        ]
      }
    },
    {
      id: "clip-2",
      number: 2,
      title: "孤独は「毒」になる（第1の教訓）",
      subtitle: "社会的つながりの有無が寿命と脳機能に与える影響",
      start: 386.6,
      end: 432.8,
      durationLabel: "6:27 – 7:13",
      eikenPoint: "3つの教訓の1つ目（loneliness kills / toxic）の具体的影響を把握する",
      transcript: [
        {
          start: 386.6,
          en: "We've learned three big lessons about relationships. The first is that social connections are really good for us, and that loneliness kills.",
          ja: "私たちは人間関係について3つの大きな教訓を学びました。第1に、社会的なつながりは私たちにとって本当に良く、孤独は命を奪うということです。"
        },
        {
          start: 397.1,
          en: "It turns out that people who are more socially connected to family, to friends, to community, are happier, they're physically healthier, and they live longer than people who are less well connected.",
          ja: "家族や友人、地域社会とより強くつながっている人々は、つながりが弱い人々よりも幸福度が高く、身体的にも健康で、長生きすることが分かっています。"
        },
        {
          start: 412.0,
          en: "And the experience of loneliness turns out to be toxic.",
          ja: "そして孤独という経験は、まさに「毒」になることが判明したのです。"
        },
        {
          start: 415.4,
          en: "People who are more isolated than they want to be from others find that they are less happy, their health declines earlier in midlife, their brain functioning declines sooner and they live shorter lives than people who are not lonely.",
          ja: "自分が望む以上に他者から孤立している人々は、幸福度が低く、中年期の早い段階から健康が衰え、脳機能も早く低下し、孤独でない人々よりも短命であることが分かります。"
        }
      ],
      nativeNotes: [
        {
          phrase: "It turns out that...",
          heardAs: "イット ターンズ アウト ザット",
          type: "研究報告の定番フレーズ",
          explanation:
            "「〜ということが明らかになった・判明した」。事実や調査結果を示すときに最もよく使われる表現です。"
        },
        {
          phrase: "turns out to be toxic",
          heardAs: "ターンズ アウト トゥ ビ トクスィック",
          type: "英検1級重要形容詞",
          explanation:
            "toxic は「有毒な、有害な」。物質だけでなく、人間関係や孤独など比喩的な悪影響にも頻出します。"
        },
        {
          phrase: "more isolated than they want to be",
          heardAs: "モア アイソレイテッド ザン ゼイ ウォントゥ ビ",
          type: "比較＋関係節の聴き取り",
          explanation:
            "isolated（孤立した）。「一人でいること」自体ではなく「望む以上に孤立していること」が問題である点に注目です。"
        }
      ],
      dictation: {
        prompt: "孤独が健康に与える悪影響を表す重要語を聞き取りましょう。",
        distractors: ["topic", "insulted", "defines", "inclines"],
        segments: [
          { text: "And the experience of loneliness turns out to be " },
          { blank: "toxic", hint: "有毒な（5文字）" },
          { text: ". People who are more " },
          { blank: "isolated", hint: "孤立した（8文字）" },
          { text: " than they want to be from others find that they are less happy, their health " },
          { blank: "declines", hint: "衰える・低下する（8文字）" },
          { text: " earlier in midlife..." }
        ]
      }
    },
    {
      id: "clip-3",
      number: 3,
      title: "50歳の満足度が80歳の健康を決める（第2の教訓）",
      subtitle: "数ではなく「関係の質」とコレステロール値との比較",
      start: 462.1,
      end: 518.1,
      durationLabel: "7:42 – 8:38",
      eikenPoint: "意外な対比（cholesterol levels vs relationship satisfaction）を聞き逃さない",
      transcript: [
        {
          start: 462.1,
          en: "It turns out that living in the midst of conflict is really bad for our health. High-conflict marriages, for example, without much affection, turn out to be very bad for our health, perhaps worse than getting divorced.",
          ja: "対立のまっただ中で生きることは、健康に非常に悪いことが分かっています。例えば、愛情の乏しい対立の激しい結婚生活は、おそらく離婚するよりも健康に悪影響を与えます。"
        },
        {
          start: 476.7,
          en: "And living in the midst of good, warm relationships is protective. Once we had followed our men all the way into their 80s, we wanted to look back at them at midlife and to see if we could predict who was going to grow into a happy, healthy octogenarian and who wasn't.",
          ja: "一方で、温かく良好な人間関係の中で生きることは健康を守ってくれます。対象者を80代まで追跡したあと、中年期を振り返って、誰が幸せで健康な80代になり、誰がそうならないかを予測できるか調べてみました。"
        },
        {
          start: 495.2,
          en: "And when we gathered together everything we knew about them at age 50, it wasn't their middle age cholesterol levels that predicted how they were going to grow old. It was how satisfied they were in their relationships.",
          ja: "そして50歳時点で分かっていたあらゆるデータを集約したところ、老後の健康を予測したのは中年期のコレステロール値ではありませんでした。人間関係にどれだけ満足しているかだったのです。"
        },
        {
          start: 510.7,
          en: "The people who were the most satisfied in their relationships at age 50 were the healthiest at age 80.",
          ja: "50歳の時点で人間関係に最も満足していた人々が、80歳時点で最も健康だったのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "without much affection",
          heardAs: "ウィザウト マッチ アフェクション",
          type: "英検1級重要名詞",
          explanation:
            "affection は「愛情、愛着」。in the midst of conflict（対立の渦中）との対比で使われています。"
        },
        {
          phrase: "a happy, healthy octogenarian",
          heardAs: "ア ハッピー、ヘルスィー オクトジェネリアン",
          type: "英検1級上級語彙",
          explanation:
            "octogenarian は「80代の人」（octo- = 8）。70代は septuagenarian、90代は nonagenarian と言います。"
        },
        {
          phrase: "it wasn't their middle age cholesterol levels that...",
          heardAs: "イット ワズント ゼア ミドルエイジ コレステロール レヴルズ ザット",
          type: "否定の強調構文",
          explanation:
            "「AではなくBだった」を It wasn't A that... It was B. で明快に対比しています。"
        }
      ],
      dictation: {
        prompt: "人間関係の質と80代の健康を表す重要語を聞き取りましょう。",
        distractors: ["infection", "veterinarian", "colossal", "affliction"],
        segments: [
          { text: "High-conflict marriages, for example, without much " },
          { blank: "affection", hint: "愛情（9文字）" },
          { text: ", turn out to be very bad for our health... who was going to grow into a happy, healthy " },
          { blank: "octogenarian", hint: "80代の人（12文字）" },
          { text: " and who wasn't. ... it wasn't their middle age " },
          { blank: "cholesterol", hint: "コレステロール（11文字）" },
          { text: " levels that predicted how they were going to grow old." }
        ]
      }
    },
    {
      id: "clip-4",
      number: 4,
      title: "良い人間関係は脳と記憶も守る（第3の教訓）",
      subtitle: "「いざという時に頼れる安心感」と記憶力の関係",
      start: 547.9,
      end: 603.7,
      durationLabel: "9:08 – 10:04",
      eikenPoint: "口喧嘩（bicker）と信頼感（count on）の区別を正確に読み取る",
      transcript: [
        {
          start: 547.9,
          en: "And the third big lesson that we learned about relationships and our health is that good relationships don't just protect our bodies, they protect our brains.",
          ja: "そして人間関係と健康について学んだ3つ目の大きな教訓は、良い人間関係は体だけでなく「脳」も守ってくれるということです。"
        },
        {
          start: 558.0,
          en: "It turns out that being in a securely attached relationship to another person in your 80s is protective, that the people who are in relationships where they really feel they can count on the other person in times of need, those people's memories stay sharper longer.",
          ja: "80代になっても誰かと安定した愛着関係にあることは脳を守ります。困ったときに相手を本当に頼りにできると感じられる関係にいる人は、記憶力がより長く冴え続けるのです。"
        },
        {
          start: 576.5,
          en: "And the people in relationships where they feel they really can't count on the other one, those are the people who experience earlier memory decline.",
          ja: "反対に、相手を本当に頼りにできないと感じている関係にいる人は、より早く記憶力の低下を経験します。"
        },
        {
          start: 586.0,
          en: "And those good relationships, they don't have to be smooth all the time. Some of our octogenarian couples could bicker with each other day in and day out, but as long as they felt that they could really count on the other when the going got tough, those arguments didn't take a toll on their memories.",
          ja: "そして良い関係というのは、常に順風満帆である必要はありません。80代の夫婦の中には毎日口喧嘩をする人たちもいましたが、いざという時に相手を頼れると感じている限り、そうした口論が記憶力に悪影響を及ぼすことはなかったのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "securely attached relationship",
          heardAs: "セキュアリー アタッチト リレイションシップ",
          type: "心理学専門表現",
          explanation:
            "attachment（愛着）。発達心理学でいう「安定した愛着関係（secure attachment）」を指します。"
        },
        {
          phrase: "bicker with each other day in and day out",
          heardAs: "ビカー ウィズ イーチ アザー デイ イン アン デイ アウト",
          type: "英検1級動詞＋イディオム",
          explanation:
            "bicker は「つまらないことで口喧嘩をする」。day in and day out は「毎日毎日、来る日も来る日も」。"
        },
        {
          phrase: "take a toll on their memories",
          heardAs: "テイク ア トウル オン ゼア メモリーズ",
          type: "英検1級超頻出イディオム",
          explanation:
            "take a toll on ~ は「〜に深刻な悪影響・犠牲をもたらす」。環境・健康・経済どのテーマでも頻出です。"
        }
      ],
      dictation: {
        prompt: "脳と記憶を守る人間関係の条件を聞き取りましょう。",
        distractors: ["attacked", "flicker", "poll", "stroll"],
        segments: [
          { text: "being in a securely " },
          { blank: "attached", hint: "結びついた・愛着のある（8文字）" },
          { text: " relationship to another person in your 80s is protective... Some of our octogenarian couples could " },
          { blank: "bicker", hint: "口喧嘩する（6文字）" },
          { text: " with each other day in and day out, but... those arguments didn't take a " },
          { blank: "toll", hint: "犠牲・悪影響（take a ___）（4文字）" },
          { text: " on their memories." }
        ]
      }
    },
    {
      id: "clip-5",
      number: 5,
      title: "生涯にわたって人間関係を育む",
      subtitle: "華やかではなくても、生涯続く大切な営み",
      start: 630.9,
      end: 683.0,
      durationLabel: "10:31 – 11:23",
      eikenPoint: "話者の結論（leaned in to relationships）と調査全体の総括を掴む",
      transcript: [
        {
          start: 630.9,
          en: "Relationships are messy and they're complicated and the hard work of tending to family and friends, it's not sexy or glamorous. It's also lifelong. It never ends.",
          ja: "人間関係は厄介で複雑であり、家族や友人を大切にし続ける地道な努力は、華やかでも魅力的でもありません。しかも生涯続くものであり、終わりがないのです。"
        },
        {
          start: 644.1,
          en: "The people in our 75-year study who were the happiest in retirement were the people who had actively worked to replace workmates with new playmates.",
          ja: "私たちの75年研究で定年後に最も幸せだったのは、職場の同僚の代わりに新しい遊び仲間を積極的に作ろうと努力した人々でした。"
        },
        {
          start: 655.1,
          en: "Just like the millennials in that recent survey, many of our men when they were starting out as young adults really believed that fame and wealth and high achievement were what they needed to go after to have a good life.",
          ja: "最近の調査のミレニアル世代と同じように、対象者の多くも若い頃は、名声や富、高い業績こそが良い人生のために追い求めるべきものだと本気で信じていました。"
        },
        {
          start: 669.7,
          en: "But over and over, over these 75 years, our study has shown that the people who fared the best were the people who leaned in to relationships, with family, with friends, with community.",
          ja: "しかしこの75年間、研究が繰り返し示してきたのは、最も良い人生を送ったのは、家族や友人、地域社会とのつながりに身を委ねて大切にした人々だったということです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "not sexy or glamorous",
          heardAs: "ノット セクスィー オア グラマラス",
          type: "英検1級重要形容詞",
          explanation:
            "glamorous は「華やかな、魅力的な」。地道な努力の対比として口語的に使われています。"
        },
        {
          phrase: "replace workmates with new playmates",
          heardAs: "リプレイス ワークメイツ ウィズ ニュー プレイメイツ",
          type: "韻を踏んだ対比表現",
          explanation:
            "workmates（仕事仲間）と playmates（遊び仲間）で韻を踏み、定年後の生き方を分かりやすく表現しています。"
        },
        {
          phrase: "the people who fared the best",
          heardAs: "ザ ピープル フー フェアード ザ ベスト",
          type: "重要自動詞 fare",
          explanation:
            "fare は「（ある状況下で）うまくやっていく、暮らす」。fare well / fare the best で「最も良い結果を残す・幸せに暮らす」。"
        }
      ],
      dictation: {
        prompt: "研究全体の結論を締めくくる重要語を聞き取りましょう。",
        distractors: ["generous", "requirement", "feared", "dared"],
        segments: [
          { text: "the hard work of tending to family and friends, it's not sexy or " },
          { blank: "glamorous", hint: "華やかな（9文字）" },
          { text: ". ... The people in our 75-year study who were the happiest in " },
          { blank: "retirement", hint: "定年・退職後（10文字）" },
          { text: " ... our study has shown that the people who " },
          { blank: "fared", hint: "やっていった・暮らした（5文字）" },
          { text: " the best were the people who leaned in to relationships." }
        ]
      }
    }
  ],
  vocab: [
    {
      word: "exceedingly",
      phonetic: "/ɪkˈsiːdɪŋli/",
      pos: "副詞",
      meaning: "極めて、非常に、この上なく",
      eikenTag: "英検1級 頻出",
      note: "exceed（超える）の派生語。extremely や remarkably と同じ役割の硬い強意副詞。",
      example: "Long-term studies spanning several decades are exceedingly rare."
    },
    {
      word: "persistence",
      phonetic: "/pərˈsɪstəns/",
      pos: "名詞",
      meaning: "粘り強さ、持続性、固執",
      eikenTag: "英検1級 必須",
      note: "形容詞 persistent（粘り強い、しつこい・持続的な）。persistent drought（長引く干ばつ）などでも頻出。",
      example: "Her quiet persistence eventually overcame every obstacle in her path."
    },
    {
      word: "toxic",
      phonetic: "/ˈtɑːksɪk/",
      pos: "形容詞",
      meaning: "有毒な、有害な、悪影響を与える",
      eikenTag: "英検1級 超頻出",
      note: "環境（toxic waste）にも人間関係（toxic relationship）にも使われる重要語。",
      example: "Chronic loneliness can have a toxic effect on both mental and physical health."
    },
    {
      word: "isolated",
      phonetic: "/ˈaɪsəleɪtɪd/",
      pos: "形容詞",
      meaning: "孤立した、隔離された",
      eikenTag: "英検1級 頻出",
      note: "動詞 isolate（孤立させる）、名詞 isolation（孤立・隔離）。social isolation（社会的孤立）は現代社会の頻出テーマ。",
      example: "Elderly residents often feel isolated when community centers close."
    },
    {
      word: "affection",
      phonetic: "/əˈfekʃən/",
      pos: "名詞",
      meaning: "愛情、愛着、好意",
      eikenTag: "英検1級 頻出",
      note: "形容詞 affectionate（愛情深い）。affect（影響を与える）と混同しないよう注意。",
      example: "Children thrive in environments filled with warmth and genuine affection."
    },
    {
      word: "octogenarian",
      phonetic: "/ˌɑːktədʒəˈneriən/",
      pos: "名詞 / 形容詞",
      meaning: "80代の人 / 80代の",
      eikenTag: "英検1級 上級語彙",
      note: "octo-（8）がヒント。長寿・高齢化社会の話題で登場する語。",
      example: "The active octogenarian still walks five kilometers every morning."
    },
    {
      word: "bicker",
      phonetic: "/ˈbɪkər/",
      pos: "動詞",
      meaning: "つまらないことで口喧嘩をする、言い争う",
      eikenTag: "英検1級 頻出",
      note: "squabble と同義。深刻な対立ではなく、日常的な小競り合いを表す。",
      example: "Although the siblings bicker constantly, they deeply care for one another."
    },
    {
      word: "take a toll on",
      phonetic: "/teɪk ə ˈtoʊl ɒn/",
      pos: "イディオム",
      meaning: "〜に深刻な悪影響を与える、打撃を与える",
      eikenTag: "英検1級 超頻出",
      note: "toll は元々「通行料・犠牲者数」。健康・経済・環境など幅広いトピックで出題される。",
      example: "Years of overwork eventually took a heavy toll on his health."
    },
    {
      word: "glamorous",
      phonetic: "/ˈɡlæmərəs/",
      pos: "形容詞",
      meaning: "華やかな、魅力的な、まばゆい",
      eikenTag: "英検1級 頻出",
      note: "名詞 glamour（魅力・華やかさ）。スペル（-morous）に注意。",
      example: "Behind the glamorous image of the industry lies years of unglamorous effort."
    },
    {
      word: "fare",
      phonetic: "/fer/",
      pos: "動詞 / 名詞",
      meaning: "（ある状況で）やっていく、暮らす / 運賃",
      eikenTag: "英検1級 多義語",
      note: "動詞としての fare well / fare poorly（うまくいく／いかない）は長文・リスニングで頻出。",
      example: "Small businesses fared surprisingly well during the regional recovery."
    }
  ],
  quiz: [
    {
      id: "q1",
      part: "英検1級 Part 2 形式（理由の把握）",
      question:
        "According to the speaker, why do most long-term studies of human life fail to continue past a decade?",
      options: [
        "Because participants become too wealthy and lose interest in the research.",
        "Because participants drop out, funding dries up, or researchers get distracted or die.",
        "Because universities prefer studying cholesterol levels rather than life stories.",
        "Because 724 participants is too large a sample size to track over time."
      ],
      correctIndex: 1,
      explanation:
        "Clip 1 で \"too many people drop out of the study, or funding for the research dries up, or the researchers get distracted, or they die\" と4つの理由を挙げています。"
    },
    {
      id: "q2",
      part: "英検1級 Part 2 形式（調査結果の特定）",
      question:
        "When the researchers examined data from participants at age 50, what best predicted who would be healthiest at age 80?",
      options: [
        "Their middle-age cholesterol levels.",
        "Whether they had achieved fame and wealth by midlife.",
        "How satisfied they were in their relationships.",
        "How many acquaintances they met at work each day."
      ],
      correctIndex: 2,
      explanation:
        "Clip 3 で \"it wasn't their middle age cholesterol levels that predicted how they were going to grow old. It was how satisfied they were in their relationships.\" と明言されています。"
    },
    {
      id: "q3",
      part: "英検1級 Part 2 形式（詳細理解）",
      question:
        "What did the study find about octogenarian couples who bickered with each other regularly?",
      options: [
        "Their arguments caused earlier memory decline regardless of their trust level.",
        "Their memories did not suffer as long as they felt they could count on each other in tough times.",
        "They were less healthy than couples who got divorced in midlife.",
        "They rarely stayed together past their 80s."
      ],
      correctIndex: 1,
      explanation:
        "Clip 4 で \"as long as they felt that they could really count on the other when the going got tough, those arguments didn't take a toll on their memories.\" と説明されています。"
    },
    {
      id: "q4",
      part: "英検1級 Part 4 形式（話者の主張・核心）",
      question:
        "According to the 75-year study, which retirees were the happiest?",
      options: [
        "Those who spent their retirement focusing solely on screen time and hobbies.",
        "Those who avoided messy family relationships to keep life simple.",
        "Those who actively worked to replace workmates with new playmates.",
        "Those who continued working harder to achieve higher status."
      ],
      correctIndex: 2,
      explanation:
        "Clip 5 で \"The people in our 75-year study who were the happiest in retirement were the people who had actively worked to replace workmates with new playmates.\" と述べています。"
    }
  ]
},
{
  id: "lesson-05",
  lessonNumber: "LESSON 05",
  shortTitle: "単一の物語の危険性",
  title: "「単一の物語」の危険性",
  originalTitle: "The danger of a single story",
  speaker: "Chimamanda Ngozi Adichie (ナイジェリア出身 世界的作家)",
  youtubeId: "D9Ihs241zeg",
  audioUrl: "https://download.ted.com/talks/ChimamandaAdichie_2009G.mp3",
  audioOffset: 6.9,
  sourceUrl: "https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story",
  credit: "Audio: Chimamanda Ngozi Adichie / TED (CC BY-NC-ND)",
  level: "英検1級 Part 2 & 4 異文化・社会論 対策",
  estimatedMinutes: 20,
  summary:
    "ある人や地域について「ひとつの側面（単一の物語）」しか知らないことが、いかにしてステレオタイプや偏見、尊厳の喪失を生むのかを語る現代の古典的スピーチ。異文化理解・メディア・権力構造など英検1級最頻出テーマの語彙を広告ゼロの公式音声で学びましょう。",
  clips: [
    {
      id: "clip-1",
      number: 1,
      title: "物語に対して人はいかに影響を受けやすいか",
      subtitle: "幼少期の読書体験と「自分も物語に存在していい」という気づき",
      start: 111.0,
      end: 163.0,
      durationLabel: "1:51 – 2:43",
      eikenPoint: "話者の内面変化（perception の転換）と抽象語彙（impressionable, vulnerable）を捉える",
      transcript: [
        {
          start: 111.0,
          en: "What this demonstrates, I think, is how impressionable and vulnerable we are in the face of a story, particularly as children.",
          ja: "このことが示しているのは、特に子ども時代において、私たちが物語を前にしていかに影響を受けやすく、無防備であるかということです。"
        },
        {
          start: 120.4,
          en: "Because all I had read were books in which characters were foreign, I had become convinced that books by their very nature had to have foreigners in them and had to be about things with which I could not personally identify.",
          ja: "私が読んだ本はすべて登場人物が外国人のものばかりだったので、本というものは本質的に外国人が登場し、自分自身とは個人的に共感できない事柄について書かれるものなのだと確信するようになっていました。"
        },
        {
          start: 134.4,
          en: "Now, things changed when I discovered African books. There weren't many of them available, and they weren't quite as easy to find as the foreign books.",
          ja: "しかし、アフリカの本に出会ったことで状況は変わりました。手に入る数は多くなく、外国の本ほど簡単には見つかりませんでした。"
        },
        {
          start: 142.6,
          en: "But because of writers like Chinua Achebe and Camara Laye, I went through a mental shift in my perception of literature. I realized that people like me, girls with skin the color of chocolate, whose kinky hair could not form ponytails, could also exist in literature. I started to write about things I recognized.",
          ja: "しかしチヌア・アチェベやカマラ・ライといった作家たちのおかげで、文学に対する私の認識に意識の転換が起きました。私のような人間—チョコレート色の肌を持ち、縮れた髪をポニーテールにできない少女—も文学の中に存在し得るのだと気づいたのです。そして私は自分の知っている世界について書き始めました。"
        }
      ],
      nativeNotes: [
        {
          phrase: "impressionable and vulnerable",
          heardAs: "インプレッショナブル アン ヴァルネラブル",
          type: "英検1級重要形容詞ペア",
          explanation:
            "impressionable（影響を受けやすい・多感な）と vulnerable（傷つきやすい・無防備な）。子どもや若者を語る文脈で頻出です。"
        },
        {
          phrase: "by their very nature",
          heardAs: "バイ ゼア ヴェリー ネイチャー",
          type: "強調イディオム",
          explanation:
            "「まさにその本質上、本来的に」。very は名詞を強調する「まさに〜」の用法です。"
        },
        {
          phrase: "a mental shift in my perception",
          heardAs: "ア メンタル シフト イン マイ パーセプション",
          type: "英検1級頻出名詞",
          explanation:
            "perception は「認識、見方、知覚」。視点や考え方の転換を述べる定番表現です。"
        }
      ],
      dictation: {
        prompt: "物語が子どもに与える影響と認識の変化を表す語を聞き取りましょう。",
        distractors: ["impressive", "valuable", "reception", "deception"],
        segments: [
          { text: "What this demonstrates, I think, is how " },
          { blank: "impressionable", hint: "影響を受けやすい（14文字）" },
          { text: " and " },
          { blank: "vulnerable", hint: "無防備な・傷つきやすい（10文字）" },
          { text: " we are in the face of a story... I went through a mental shift in my " },
          { blank: "perception", hint: "認識・見方（10文字）" },
          { text: " of literature." }
        ]
      }
    },
    {
      id: "clip-2",
      number: 2,
      title: "ルームメイトの「善意の同情」と偏見",
      subtitle: "悪意なきステレオタイプが奪う「対等な人間関係」",
      start: 292.1,
      end: 327.6,
      durationLabel: "4:52 – 5:28",
      eikenPoint: "話者の鋭い洞察（patronizing, well-meaning pity）のニュアンスを掴む",
      transcript: [
        {
          start: 292.1,
          en: "She assumed that I did not know how to use a stove. What struck me was this: She had felt sorry for me even before she saw me.",
          ja: "彼女は私がコンロの使い方を知らないと思い込んでいました。私に衝撃を与えたのは、彼女が私に会う前からすでに私を哀れんでいたということでした。"
        },
        {
          start: 301.3,
          en: "Her default position toward me, as an African, was a kind of patronizing, well-meaning pity.",
          ja: "アフリカ人としての私に対する彼女の基本姿勢は、どこか上から目線で、善意に基づいた哀れみのようなものでした。"
        },
        {
          start: 309.0,
          en: "My roommate had a single story of Africa: a single story of catastrophe.",
          ja: "私のルームメイトはアフリカについて「単一の物語」を持っていました。それは「大惨事」という単一の物語です。"
        },
        {
          start: 315.2,
          en: "In this single story, there was no possibility of Africans being similar to her in any way, no possibility of feelings more complex than pity, no possibility of a connection as human equals.",
          ja: "この単一の物語の中では、アフリカ人がどんな点でも彼女と似ている可能性はなく、哀れみ以上の複雑な感情を抱く余地もなく、対等な人間としてつながる可能性もなかったのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "patronizing, well-meaning pity",
          heardAs: "ペイトゥロナイジング、ウェルミーニング ピティ",
          type: "英検1級重要形容詞",
          explanation:
            "patronizing は「恩着せがましい、上から目線の」。善意（well-meaning）であっても相手を見下す態度になり得ることを鋭く指摘しています。"
        },
        {
          phrase: "a single story of catastrophe",
          heardAs: "ア スィングル ストーリー アヴ カタストロフィー",
          type: "英検1級重要名詞",
          explanation:
            "catastrophe は「大惨事、破局」。貧困・紛争・飢饉といった悲劇だけのイメージを指しています。"
        },
        {
          phrase: "no possibility of ... no possibility of ...",
          heardAs: "ノウ ポスィビリティ アヴ",
          type: "反復による強調",
          explanation:
            "no possibility of ~ を3回繰り返すことで、単一の物語がいかに想像力と対等な関係性を閉ざすかを強調しています。"
        }
      ],
      dictation: {
        prompt: "偏見と同情の本質を表す重要語を聞き取りましょう。",
        distractors: ["paralyzing", "apostrophe", "sequels", "pioneering"],
        segments: [
          { text: "Her default position toward me, as an African, was a kind of " },
          { blank: "patronizing", hint: "上から目線の（11文字）" },
          { text: ", well-meaning pity. My roommate had a single story of Africa: a single story of " },
          { blank: "catastrophe", hint: "大惨事（11文字）" },
          { text: ". ... no possibility of a connection as human " },
          { blank: "equals", hint: "対等な存在（6文字）" },
          { text: "." }
        ]
      }
    },
    {
      id: "clip-3",
      number: 3,
      title: "メディア報道と「単一の物語」の作り方",
      subtitle: "自分自身もメキシコ人への偏見に陥っていたという告白",
      start: 540.9,
      end: 583.7,
      durationLabel: "9:01 – 9:44",
      eikenPoint: "メディアの影響（immersed in media coverage）と単一の物語の定義を押さえる",
      transcript: [
        {
          start: 540.9,
          en: "I remember walking around on my first day in Guadalajara, watching the people going to work, rolling up tortillas in the marketplace, smoking, laughing.",
          ja: "グアダラハラに着いた初日、街を歩きながら、人々が仕事に向かい、市場でトルティーヤを巻き、タバコを吸い、笑い合っているのを見ていたのを覚えています。"
        },
        {
          start: 552.0,
          en: "I remember first feeling slight surprise. And then, I was overwhelmed with shame.",
          ja: "最初は軽い驚きを覚えました。そしてそのあと、激しい恥の感情に圧倒されました。"
        },
        {
          start: 558.1,
          en: "I realized that I had been so immersed in the media coverage of Mexicans that they had become one thing in my mind, the abject immigrant. I had bought into the single story of Mexicans and I could not have been more ashamed of myself.",
          ja: "私はメキシコ人に関するメディア報道にあまりにも浸かりきっていたため、頭の中で彼らが「みじめな移民」という一つの存在になってしまっていたと気づいたのです。メキシコ人に関する単一の物語を鵜呑みにしてしまっていて、これ以上ないほど自分自身を恥じました。"
        },
        {
          start: 573.0,
          en: "So that is how to create a single story, show a people as one thing, as only one thing, over and over again, and that is what they become.",
          ja: "つまり、単一の物語の作り方はこうです。ある人々をたった一つの側面として、それだけの存在として何度も何度も見せ続けること。そうすれば、彼らはその通りの存在になってしまうのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "overwhelmed with shame",
          heardAs: "オーヴァーウェルムド ウィズ シェイム",
          type: "感情を表す定番受動態",
          explanation:
            "be overwhelmed with ~（〜に圧倒される、打ちのめされる）。感情（shame, grief, joy）とよく組み合わされます。"
        },
        {
          phrase: "immersed in the media coverage",
          heardAs: "イマースト イン ザ メディア カヴァレッジ",
          type: "英検1級重要語",
          explanation:
            "be immersed in ~（〜に没頭している・浸りきっている）、media coverage（メディア報道）。"
        },
        {
          phrase: "the abject immigrant",
          heardAs: "ジ アブジェクト イミグラント",
          type: "英検1級上級形容詞",
          explanation:
            "abject は「みじめな、卑屈な、極度の」。abject poverty（極貧）でも頻出する形容詞です。"
        }
      ],
      dictation: {
        prompt: "メディア報道への反省と単一の物語の定義を聞き取りましょう。",
        distractors: ["overlooked", "emerged", "abstract", "subject"],
        segments: [
          { text: "And then, I was " },
          { blank: "overwhelmed", hint: "圧倒された（11文字）" },
          { text: " with shame. I realized that I had been so " },
          { blank: "immersed", hint: "浸かりきった（8文字）" },
          { text: " in the media coverage of Mexicans that they had become one thing in my mind, the " },
          { blank: "abject", hint: "みじめな（6文字）" },
          { text: " immigrant." }
        ]
      }
    },
    {
      id: "clip-4",
      number: 4,
      title: "物語と「権力（Power）」の関係",
      subtitle: "物語を「2番目から」語ることで歴史はどう変わるか",
      start: 602.4,
      end: 658.1,
      durationLabel: "10:02 – 10:58",
      eikenPoint: "歴史的文脈（start with 'secondly'）を用いた論証の仕組みを理解する",
      transcript: [
        {
          start: 602.4,
          en: "Like our economic and political worlds, stories too are defined by the principle of nkali: How they are told, who tells them, when they're told, how many stories are told, are really dependent on power.",
          ja: "経済や政治の世界と同じように、物語もまた「ンカリ（他者より優位に立つ）」の原則によって規定されています。物語がどう語られ、誰が語り、いつ語られ、いくつ語られるかは、まさに権力に左右されるのです。"
        },
        {
          start: 618.9,
          en: "Power is the ability not just to tell the story of another person, but to make it the definitive story of that person.",
          ja: "権力とは、他者の物語を語るだけでなく、それをその人の「決定的な物語」にしてしまう力のことです。"
        },
        {
          start: 626.0,
          en: "The Palestinian poet Mourid Barghouti writes that if you want to dispossess a people, the simplest way to do it is to tell their story and to start with, \"secondly.\"",
          ja: "パレスチナの詩人ムリード・バルグーティーは、ある人々から権利や誇りを奪いたければ、最も簡単な方法は彼らの物語を「2番目に」から語り始めることだと書いています。"
        },
        {
          start: 637.3,
          en: "Start the story with the arrows of the Native Americans, and not with the arrival of the British, and you have an entirely different story. Start the story with the failure of the African state, and not with the colonial creation of the African state, and you have an entirely different story.",
          ja: "イギリス人の到来ではなく先住民の矢から物語を始めれば、まったく別の物語になります。アフリカ国家の植民地的な創設ではなく、アフリカ国家の失敗から物語を始めれば、まったく別の物語になるのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "the definitive story",
          heardAs: "ザ ディフィニティヴ ストーリー",
          type: "英検1級重要形容詞",
          explanation:
            "definitive は「決定的な、最終的な、権威ある」。define（定義する）の派生語です。"
        },
        {
          phrase: "dispossess a people",
          heardAs: "ディスポゼス ア ピープル",
          type: "英検1級重要動詞",
          explanation:
            "dispossess は「（財産・権利・土地などを）奪う、立ち退かせる」。dis-（剥奪）+ possess（所有する）。"
        },
        {
          phrase: "colonial creation",
          heardAs: "コロウニアル クリエイション",
          type: "歴史・社会論頻出語",
          explanation:
            "colonial（植民地の）。colony（植民地）、colonize（植民地化する）と合わせて必須。"
        }
      ],
      dictation: {
        prompt: "物語と権力・歴史の語られ方を表す語を聞き取りましょう。",
        distractors: ["defective", "dispose", "colossal", "sensitive"],
        segments: [
          { text: "Power is the ability not just to tell the story of another person, but to make it the " },
          { blank: "definitive", hint: "決定的な（10文字）" },
          { text: " story of that person. ... if you want to " },
          { blank: "dispossess", hint: "奪う・剥奪する（10文字）" },
          { text: " a people... Start the story with the failure of the African state, and not with the " },
          { blank: "colonial", hint: "植民地の（8文字）" },
          { text: " creation of the African state..." }
        ]
      }
    },
    {
      id: "clip-5",
      number: 5,
      title: "尊厳を癒やす多様な物語の力",
      subtitle: "単一の物語を拒絶した先にある「取り戻された楽園」",
      start: 1063.2,
      end: 1117.1,
      durationLabel: "17:43 – 18:37",
      eikenPoint: "スピーチの結論における対比（dispossess/malign ↔ empower/humanize）を掴む",
      transcript: [
        {
          start: 1063.2,
          en: "Stories matter. Many stories matter. Stories have been used to dispossess and to malign, but stories can also be used to empower and to humanize.",
          ja: "物語は重要です。多くの物語が存在することが重要なのです。物語は奪い、中傷するためにも使われてきましたが、力を与え、人間性を回復するためにも使えるのです。"
        },
        {
          start: 1075.5,
          en: "Stories can break the dignity of a people, but stories can also repair that broken dignity.",
          ja: "物語は人々の尊厳を打ち砕くこともありますが、傷ついたその尊厳を修復することもできるのです。"
        },
        {
          start: 1082.9,
          en: "The American writer Alice Walker wrote this about her Southern relatives who had moved to the North. She introduced them to a book about the Southern life that they had left behind. \"They sat around, reading the book themselves, listening to me read the book, and a kind of paradise was regained.\"",
          ja: "アメリカの作家アリス・ウォーカーは、北部へ移り住んだ南部の親戚についてこう書いています。彼女は彼らが後にした南部の暮らしを描いた本を紹介しました。「彼らは車座になって、自分でその本を読み、私が読むのを聞き、一種の楽園が取り戻されたのです。」"
        },
        {
          start: 1104.3,
          en: "I would like to end with this thought: That when we reject the single story, when we realize that there is never a single story about any place, we regain a kind of paradise.",
          ja: "私はこの思いで締めくくりたいと思います。私たちが単一の物語を拒絶するとき、どの場所についても単一の物語など決して存在しないのだと気づくとき、私たちは一種の楽園を取り戻すのです。"
        }
      ],
      nativeNotes: [
        {
          phrase: "to dispossess and to malign",
          heardAs: "トゥ ディスポゼス アン トゥ マライン",
          type: "英検1級上級動詞",
          explanation:
            "malign は「〜を中傷する、悪く言う」（g は発音しないサイレント文字！）。empower / humanize と見事に対比されています。"
        },
        {
          phrase: "break the dignity of a people",
          heardAs: "ブレイク ザ ディグニティ アヴ ア ピープル",
          type: "英検1級必須名詞",
          explanation:
            "dignity は「尊厳、威厳」。human dignity（人間の尊厳）は英検1級ライティング・リスニングの最重要キーワードです。"
        },
        {
          phrase: "regain a kind of paradise",
          heardAs: "リゲイン ア カインドヴ パラダイス",
          type: "音声変化＋締めくくり",
          explanation:
            "kind of は「カインドヴ」と繋がり、アリス・ウォーカーの引用（was regained）と呼応してスピーチを美しく締めくくっています。"
        }
      ],
      dictation: {
        prompt: "物語の力と結論を表す重要語を聞き取りましょう。",
        distractors: ["align", "destiny", "retain", "resign"],
        segments: [
          { text: "Stories have been used to dispossess and to " },
          { blank: "malign", hint: "中傷する（6文字）" },
          { text: ", but stories can also be used to empower and to humanize. Stories can break the " },
          { blank: "dignity", hint: "尊厳（7文字）" },
          { text: " of a people... when we realize that there is never a single story about any place, we " },
          { blank: "regain", hint: "取り戻す（6文字）" },
          { text: " a kind of paradise." }
        ]
      }
    }
  ],
  vocab: [
    {
      word: "impressionable",
      phonetic: "/ɪmˈpreʃənəbl/",
      pos: "形容詞",
      meaning: "影響を受けやすい、感受性が強い",
      eikenTag: "英検1級 頻出",
      note: "impression（印象）+ -able。「若い頃の心は印象が刻まれやすい」イメージ。",
      example: "Advertisers often target impressionable teenagers on social media."
    },
    {
      word: "vulnerable",
      phonetic: "/ˈvʌlnərəbl/",
      pos: "形容詞",
      meaning: "傷つきやすい、無防備な、脆弱な",
      eikenTag: "英検1級 超頻出",
      note: "be vulnerable to ~（〜に対して脆弱である／影響を受けやすい）。",
      example: "Coastal cities are increasingly vulnerable to extreme weather events."
    },
    {
      word: "patronizing",
      phonetic: "/ˈpætrənaɪzɪŋ/",
      pos: "形容詞",
      meaning: "恩着せがましい、見下した、保護者ぶった",
      eikenTag: "英検1級 頻出",
      note: "動詞 patronize（見下した態度をとる / ひいきにする）。文脈で意味を見分けるのが重要。",
      example: "She disliked the speaker's patronizing tone toward local residents."
    },
    {
      word: "catastrophe",
      phonetic: "/kəˈtæstrəfi/",
      pos: "名詞",
      meaning: "大惨事、破局、大災害",
      eikenTag: "英検1級 頻出",
      note: "形容詞 catastrophic（壊滅的な）。環境・災害・経済危機のパッセージで頻出。",
      example: "Reducing media coverage to catastrophe alone distorts public perception."
    },
    {
      word: "immersed",
      phonetic: "/ɪˈmɜːrst/",
      pos: "形容詞",
      meaning: "没頭した、浸りきった",
      eikenTag: "英検1級 頻出",
      note: "immerse oneself in ~（〜に没頭する）。語学学習の immersion program でも使われる。",
      example: "He was so immersed in his research that he lost track of time."
    },
    {
      word: "abject",
      phonetic: "/ˈæbdʒekt/",
      pos: "形容詞",
      meaning: "みじめな、極度の、卑屈な",
      eikenTag: "英検1級 上級語彙",
      note: "abject poverty（極度の貧困）、abject failure（完全な失敗）のコロケーションが定番。",
      example: "Aid programs aim to lift communities out of abject poverty."
    },
    {
      word: "definitive",
      phonetic: "/dɪˈfɪnɪtɪv/",
      pos: "形容詞",
      meaning: "決定的な、最終的な、権威のある",
      eikenTag: "英検1級 頻出",
      note: "definite（明確な）よりさらに「これで確定・決定的」という強い意味。",
      example: "No single biography can claim to be the definitive account of a person's life."
    },
    {
      word: "dispossess",
      phonetic: "/ˌdɪspəˈzes/",
      pos: "動詞",
      meaning: "（権利・財産などを）奪う、立ち退かせる",
      eikenTag: "英検1級 上級語彙",
      note: "名詞 dispossession（剥奪）。歴史・社会正義の文脈で登場する。",
      example: "Indigenous communities fought against policies designed to dispossess them of their land."
    },
    {
      word: "malign",
      phonetic: "/məˈlaɪn/",
      pos: "動詞 / 形容詞",
      meaning: "中傷する、悪く言う / 有害な",
      eikenTag: "英検1級 上級語彙",
      note: "g は黙字。反対語は benign（優しい・良性の）。malignant（悪性の）と同語源。",
      example: "Unfair stereotypes are often used to malign minority groups."
    },
    {
      word: "dignity",
      phonetic: "/ˈdɪɡnəti/",
      pos: "名詞",
      meaning: "尊厳、威厳、品位",
      eikenTag: "英検1級 必須",
      note: "human dignity（人間の尊厳）、treat someone with dignity（尊厳をもって扱う）。",
      example: "Every individual deserves to be treated with respect and dignity."
    }
  ],
  quiz: [
    {
      id: "q1",
      part: "英検1級 Part 2 形式（体験の影響）",
      question:
        "How did discovering African writers like Chinua Achebe and Camara Laye change the speaker's view of literature?",
      options: [
        "It made her stop reading British and American children's books completely.",
        "It made her realize that people like her could also exist in literature, shifting her perception.",
        "It convinced her that books must always focus on foreign characters.",
        "It discouraged her from writing stories about things she personally recognized."
      ],
      correctIndex: 1,
      explanation:
        "Clip 1 で \"I went through a mental shift in my perception of literature. I realized that people like me... could also exist in literature.\" と述べています。"
    },
    {
      id: "q2",
      part: "英検1級 Part 2 形式（話者の分析）",
      question:
        "How does the speaker describe her American college roommate's default attitude toward her?",
      options: [
        "Open hostility based on cultural differences.",
        "Indifference toward African history and literature.",
        "A patronizing, well-meaning pity rooted in a single story of catastrophe.",
        "Genuine curiosity about modern Nigerian music and universities."
      ],
      correctIndex: 2,
      explanation:
        "Clip 2 で \"Her default position toward me, as an African, was a kind of patronizing, well-meaning pity. My roommate had a single story of Africa: a single story of catastrophe.\" と語られています。"
    },
    {
      id: "q3",
      part: "英検1級 Part 2 形式（自己省察）",
      question:
        "Why did the speaker feel overwhelmed with shame during her first day in Guadalajara, Mexico?",
      options: [
        "Because she realized she had bought into a single story of Mexicans created by media coverage.",
        "Because she could not speak Spanish well enough to communicate at the marketplace.",
        "Because she had written an essay criticizing immigration policies in the U.S.",
        "Because local residents treated her with patronizing pity."
      ],
      correctIndex: 0,
      explanation:
        "Clip 3 で \"I realized that I had been so immersed in the media coverage of Mexicans that they had become one thing in my mind, the abject immigrant. I had bought into the single story...\" と自己省察しています。"
    },
    {
      id: "q4",
      part: "英検1級 Part 4 形式（比喩・主張の理解）",
      question:
        "What does the speaker mean by quoting Mourid Barghouti's idea of telling a people's story starting with 'secondly'?",
      options: [
        "Historical stories should always be told in reverse chronological order.",
        "Omitting the initial context—such as colonial history—completely changes how a people is judged.",
        "Secondary sources are more reliable than personal stories when studying history.",
        "Only poets have the power to tell definitive stories about nations."
      ],
      correctIndex: 1,
      explanation:
        "Clip 4 で、先住民の矢やアフリカ国家の失敗だけから語り始め、イギリス人の到来や植民地的な創設（1番目の背景）を省くことで、まったく別の物語になってしまうという権力の構造を説明しています。"
    }
  ]
}
];

const LESSON_DATA = LESSONS[0];
