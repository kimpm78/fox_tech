const data = {
  videos: [
    {
      id: '1',
      title: `【前編】ゲーム最強で万能！？AMD Ryzen 9 7950X3Dを検証したぞ！Ryzen 9 7950XやRyzen 7 7700X、Core i9-13900Kと比べ、その性能を調べてくぞ！`,
      author: `gradeon`,
      timeAgo: `1年前に登録`,
      youtubeUrl:
        'https://www.youtube.com/embed/sqAyWHDmhTE?si=1k33aHtsQDNu8WQJ',
      imageSrc: '/src/assets/gradeon_profile.jpeg',
    },
    {
      id: '2',
      title: `ASUS Rog Ally | Tekken 8 Ranked Match 60 fps 1080p Medium Settings | Competitive Play!`,
      author: `TewezeyGAMES`,
      timeAgo: `1日前に登録`,
      youtubeUrl:
        'https://www.youtube.com/embed/IBB0iDYdl0c?si=opzWeOtUolEO0Zsv',
      imageSrc: '/src/assets/Tewezey_profile.jpeg',
    },
    {
      id: '3',
      title: `【やっぱりいい】M3を搭載した「MacBook Air」をレビュー。やはり最新モデルはいいですね！`,
      author: `戸田覚`,
      timeAgo: `15分前に登録`,
      youtubeUrl:
        'https://www.youtube.com/embed/DlPS2hr1GGo?si=sirMOaV1XM37jGAq',
      imageSrc: '/src/assets/channels3_profile.jpeg',
    },
    {
      id: '4',
      title: `最大6.2GHz駆動のヤバイヤツを試す！突如現れた最強CPU、Intel 「Core i9-14900KS」緊急検証＜安定動作のヒント有り＞`,
      author: `PAD:PC Watch`,
      timeAgo: `1年前に登録`,
      youtubeUrl:
        'https://www.youtube.com/embed/nqnAM_4LWsg?si=nlM-VQEt69wuyBt4',
      imageSrc: '/src/assets/channels4_profile.jpg',
    },
    {
      id: '5',
      title: `【超高級】キーボード界で覇権を取ったCORSAIR K70 MAXがラピットトリガー搭載で帰ってきた！`,
      author: `椛/momiji`,
      timeAgo: `1日前に登録`,
      youtubeUrl:
        'https://www.youtube.com/embed/hPilRkC7zf4?si=ezqgNC40nmeQZlRB',
      imageSrc: '/src/assets/channels5_profile.jpg',
    },
    {
      id: '6',
      title: `【水冷/白/高性能】10万円自作PCの組み立て方。全てに妥協せず誰でも組める。`,
      author: `At.Holyネズミ`,
      timeAgo: `8か月前に登録`,
      youtubeUrl:
        'https://www.youtube.com/embed/hvx3RCmq4Bk?si=Mw57qqHboVpZ_Wde',
      imageSrc: '/src/assets/channels6_profile.jpg',
    },
  ],
  youtubers: [
    {
      id: '1',
      imageSrc: '/src/assets/pereira.jpg',
      type: 'youtuber',
      name: `ペレイラ`,
      fullName: `Margaret E. Pereira`,
      text: `海外で有名な製品レビューユーチューバー。彼女が購読している数は520万人であれば、
     製品を説明しながら購買者に合理的なことを教えてくれる。彼女の映像を見ることになれば、製品の販売量が高くなるという話がある。`,
    },
    {
      id: '2',
      imageSrc: '/src/assets/Hal_Garrett.jpg',
      type: 'youtuber',
      name: `ギャレット`,
      fullName: `Hal Garrett`,
      text: `チャンネル登録者数：955,000人、平均エンゲージメント：30,149、推定視聴回数：856,701回。主にスマートフォンやパソコン、周辺機器等のガジェットや、自作PCの動画を発信するYouTubeチャンネルです。特にガジェットレビューに関しては、所感を分かりやすく正直に表現している点が特徴。`,
    },
  ],
  myProducts: [
    {
      id: '1',
      title: `アップル M2搭載の15型「MacBook Air」`,
      timeAgo: `2023.10.18`,
      imageSrc: '/src/assets/macbook.jpg',
    },
    {
      id: '2',
      title: `ASUS、重さ約608gの7型ポータブルゲーム機「ROG Ally」を本日6月14日から発売`,
      timeAgo: `2023.06.14`,
      imageSrc: '/src/assets/myproduct2.jpg',
    },
    {
      id: '3',
      title: `「Thunderbolt 5」登場。最大120Gbps転送が可能な最強インターフェイス`,
      timeAgo: `2023.12.23`,
      imageSrc: '/src/assets/myproduct3.jpg',
    },
  ],
  topics: [
    {
      id: '1',
      title: `iiyama、さくら色にライトアップしたゲーミングPC「さくらモデル」`,
      time: `2024.01.20`,
      Url: 'https://news.kakaku.com/prdnews/cd=pc/ctcd=0010/id=138997/',
      imageSrc: '/src/assets/topics_1.jpg',
      type: 'basics',
    },
    {
      id: '2',
      title: `《2024年》タブレットおすすめ19選 iPadやAndroid、Windowsの良品が勢揃い！`,
      time: `2024.02.16`,
      Url: 'https://kakakumag.com/pc-smartphone/?id=9972',
      imageSrc: '/src/assets/topics_2.jpg',
      type: 'basics',
    },
    {
      id: '3',
      title: `ソニー、アニメ「ぼっち・ざ・ろっく！」コラボウォークマン2モデルの注文受付開始`,
      time: `2024.03.05`,
      Url: 'https://news.kakaku.com/prdnews/cd=pc/ctcd=0130/id=138919/',
      imageSrc: '/src/assets/topics_3.jpg',
      type: 'desktop',
    },
    {
      id: '4',
      title: `GIGABYTE、「GeForce RTX 4060 Ti」を搭載したビデオカード`,
      time: `2024.03.18`,
      Url: 'https://news.kakaku.com/prdnews/cd=pc/ctcd=0550/id=138987/',
      imageSrc: '/src/assets/topics_4.jpg',
      type: 'graphic',
    },
    {
      id: '5',
      title: `アップル、M3チップ搭載の13型/15型「MacBook Air」を本日3月8日に発売`,
      time: `2024.03.08`,
      Url: 'https://news.kakaku.com/prdnews/cd=pc/ctcd=0029/id=138736/',
      imageSrc: '/src/assets/topics_5.jpg',
      type: 'laptop',
    },
    {
      id: '6',
      title: `万能ポータブルゲーミングPC「ROG Ally」で、eスポーツはどこまでできる？`,
      time: `2023.12.27`,
      Url: 'https://esports-world.jp/column/35154/',
      imageSrc: '/src/assets/topics_6.jpg',
      type: 'UMPC',
    },
  ],
  followers: [
    {
      id: '1',
      name: `フィリッパ ・オールドリッジ`,
      text: `PUBG 最強プレイヤーはPUBGの世界大会出場経験を
      持つプロプレイヤー選手です。`,
      imageSrc: '/src/assets/follow_us1.jpg',
    },
    {
      id: '2',
      name: `ダッド ・ウィリアムソン`,
      text: `フォートナイトの最強プレイヤーはフォートナイトの
      世界大会出場経験を持つプロプレイヤー選手です。`,
      imageSrc: '/src/assets/follow_us2.jpg',
    },
  ],
};

export default data;
