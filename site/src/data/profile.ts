export type Locale = 'en' | 'zh';
type Localized = Record<Locale, string>;
export type TimelineItem = {
  period: string;
  title: Localized;
  subtitle: Localized;
  location: Localized;
  description?: Localized;
  descriptionItems?: Localized[];
};
export type RecognitionItem = { period: string; title: Localized; subtitle: Localized };
export type Publication = {
  year: string;
  venue: Localized;
  title: Localized;
  authors: string[];
  status: Localized;
  correspondingAuthor?: string;
  equalContribution?: string[];
  pdf?: string;
  code?: string;
  url: string;
  description: Localized;
};

export const profile = {
  name: 'Xiao Ao',
  authorName: 'Ao Xiao',
  displayName: { en: 'Xiao Ao', zh: '肖傲' },
  role: { en: 'Undergraduate Student', zh: '数学与应用数学本科生' },
  institution: { en: 'Northwest Normal University', zh: '西北师范大学' },
  affiliation: { en: 'Mathematics and Statistics · Northwest Normal University', zh: '数学与统计学院 · 西北师范大学' },
  location: { en: 'Lanzhou, China', zh: '中国 · 兰州' },
  description: { en: 'Nonlinear Analysis & Complex Analysis', zh: '关注非线性分析与复分析' },
  email: 'xiaoao2math@163.com',
  avatar: '/xiao-ao.jpg',
  cv: '/xiao-ao-cv.pdf',
  motto: { en: 'Think clearly. Explore deeply.', zh: '清晰地思考，深入地探索。' },
  intro: {
    en: [
      'I am an undergraduate in Mathematics and Applied Mathematics at the College of Mathematics and Statistics, Northwest Normal University. My primary academic interests include nonlinear differential equations, boundary value problems, and complex analysis.',
      'In my studies and research, I focus on understanding and exploring mathematical theory. Through literature reading, theoretical derivation, independent thinking, and the assistance of artificial intelligence tools, I continue to deepen my understanding of mathematical problems. I currently focus on differential equations and mathematical analysis, and have obtained some preliminary results in related problems. Looking ahead, I hope to explore the possibilities of AI-assisted mathematical research, pursue mathematical questions that interest me, and broaden my academic horizons.',
      'Outside my studies, I actively participate in mathematical modeling and data mining competitions, and share mathematical knowledge and learning resources through Douyin and WeChat. I value clear communication, rigorous thinking, and exchanges with my peers.'
    ],
    zh: [
      '我是西北师范大学数学与统计学院数学与应用数学专业本科生，主要学术兴趣包括非线性微分方程、边值问题与复分析。',
      '在学习与研究中，我注重对数学理论的理解与探索，通过文献阅读、理论推导、独立思考以及人工智能工具的辅助，不断深化对数学问题的认识。目前，我主要关注微分方程与数学分析相关领域，并在相关问题的研究中取得了一些初步成果。未来，我希望进一步探索人工智能辅助数学研究的可能性，持续深入研究感兴趣的数学问题，不断拓展学术视野。',
      '学习之外，我积极参加数学建模与数据挖掘竞赛，也通过抖音和微信公众号分享数学知识与学习资源。我重视清晰的表达、严谨的思考，以及与同伴之间的交流。'
    ]
  },
  primarySocials: [{ label: 'GitHub', url: 'https://github.com/xiaoao2math-droid' }],
  interests: [
    { en: 'Nonlinear Differential Equations', zh: '非线性微分方程' },
    { en: 'Boundary Value Problems', zh: '边值问题' },
    { en: 'Complex Analysis', zh: '复分析' },
    { en: 'Mathematical Modeling', zh: '数学建模' }
  ]
};

export const education: TimelineItem[] = [{
  period: '2024 – 2028',
  title: { en: 'Northwest Normal University', zh: '西北师范大学' },
  subtitle: { en: 'B.Sc. in Mathematics and Applied Mathematics (in progress)', zh: '数学与应用数学 · 理学学士（在读）' },
  location: { en: 'Lanzhou, China', zh: '中国 · 兰州' },
  descriptionItems: [
    { en: 'GPA 4.01/5.0 · Major rank: Top 2.5% · Overall assessment: 1/56', zh: 'GPA 4.01/5.0 · 专业排名前 2.5% · 综合测评 1/56' },
    { en: 'A foundation in analysis, algebra, geometry, probability, and mathematical modeling.', zh: '系统学习分析、代数、几何、概率统计与数学建模，持续训练数学证明和问题分析能力。' }
  ]
}, {
  period: '2021 – 2024',
  title: { en: 'Hengyang No. 8 High School', zh: '衡阳市第八中学' },
  subtitle: { en: 'High School', zh: '高中' },
  location: { en: 'Hengyang, China', zh: '中国 · 衡阳' }
}];

export const technicalSkills = [
  { label: { en: 'Languages', zh: '编程与计算' }, items: ['Python', 'MATLAB'] },
  { label: { en: 'Libraries', zh: '科学计算' }, items: ['NumPy', 'Pandas', 'Matplotlib'] },
  { label: { en: 'Writing', zh: '研究与写作' }, items: ['LaTeX', 'Mathematical Proofs', 'Literature Review'] }
];

export const courses = [
  { title: { zh: '数学分析 I', en: 'Mathematical Analysis I' }, score: 98 },
  { title: { zh: '数学分析 II', en: 'Mathematical Analysis II' }, score: 97 },
  { title: { zh: '数学分析 III', en: 'Mathematical Analysis III' }, score: 94 },
  { title: { zh: '高等代数 I', en: 'Advanced Algebra I' }, score: 96 },
  { title: { zh: '高等代数 II', en: 'Advanced Algebra II' }, score: 93 },
  { title: { zh: '解析几何', en: 'Analytic Geometry' }, score: 98 },
  { title: { zh: '近世代数', en: 'Abstract Algebra' }, score: 97 },
  { title: { zh: '常微分方程', en: 'Ordinary Differential Equations' }, score: 98 },
  { title: { zh: '概率论与数理统计', en: 'Probability & Mathematical Statistics' }, score: 98 },
  { title: { zh: '复变函数', en: 'Complex Analysis' }, score: 94 },
  { title: { zh: '数学建模', en: 'Mathematical Modeling' }, score: 98 }
];

export const publications: Publication[] = [
  {
    year: '2026',
    venue: { en: 'arXiv:2608.05711 · v2', zh: 'arXiv:2608.05711 · v2' },
    title: {
      en: 'Positive solutions to semipositone problems with mean curvature operator in Minkowski space',
      zh: 'Positive solutions to semipositone problems with mean curvature operator in Minkowski space'
    },
    authors: ['Ao Xiao'],
    status: { en: 'Under review', zh: '在审' },
    pdf: 'https://arxiv.org/pdf/2608.05711',
    url: 'https://arxiv.org/abs/2608.05711',
    description: { en: 'Independent research on positive solutions for a one-dimensional Minkowski-curvature equation with mixed boundary conditions and a sign-changing nonlinearity.', zh: '独立研究。围绕具有混合边界条件与变号非线性项的一维 Minkowski 曲率方程，研究正解的存在性。' }
  },
  {
    year: '2026',
    venue: { en: 'CMFT', zh: 'CMFT' },
    title: { en: 'An Infinitesimal Circular Morera Theorem', zh: 'An Infinitesimal Circular Morera Theorem' },
    authors: ['Ao Xiao', 'Qiteng Guo'],
    correspondingAuthor: 'Ao Xiao',
    status: { en: 'Accepted by CMFT', zh: 'CMFT 已录用' },
    pdf: '/papers/xiao-guo-cmft-manuscript.pdf',
    url: 'https://arxiv.org/abs/2608.04540',
    description: { en: 'An infinitesimal circular version of Morera’s theorem, characterizing holomorphicity through asymptotic local circular integrals.', zh: 'Morera 定理的无穷小圆周版本，通过局部圆周积分的渐近条件刻画全纯性。' }
  }
];

export const publicationNote = { en: 'Research papers and preprints. * Corresponding author.', zh: '研究论文与预印本。* 表示通讯作者。' };

export const competitions: RecognitionItem[] = [
  { period: '2026', title: { zh: '全国大学生数学建模竞赛甘肃省特等奖（队长）', en: 'Gansu Provincial Grand Prize, CUMCM (team leader)' }, subtitle: { zh: '省级', en: 'Provincial' } },
  { period: '2026', title: { zh: '美国大学生数学建模竞赛 H 奖（队长）', en: 'Honorable Mention, Mathematical Contest in Modeling (team leader)' }, subtitle: { zh: '国际竞赛', en: 'International' } },
  { period: '2025', title: { zh: '全国大学生数学建模竞赛省级一等奖', en: 'Provincial First Prize, CUMCM' }, subtitle: { zh: '省级', en: 'Provincial' } },
  { period: '2025', title: { zh: '甘肃省第二届数据挖掘大赛省级特等奖（队长）', en: 'Provincial Grand Prize, Gansu Data Mining Competition (team leader)' }, subtitle: { zh: '省级', en: 'Provincial' } },
  { period: '2025', title: { zh: '全国大学生数学竞赛省级三等奖', en: 'Provincial Third Prize, Chinese Mathematics Competitions' }, subtitle: { zh: '省级', en: 'Provincial' } },
  { period: '2025', title: { zh: '第十一届全国大学生统计建模大赛甘肃省三等奖', en: 'Provincial Third Prize, National Statistical Modeling Contest' }, subtitle: { zh: '省级', en: 'Provincial' } },
  { period: '2026', title: { zh: '统计建模校赛一等奖 · 数学建模校赛二等奖', en: 'University First Prize in Statistical Modeling · Second Prize in Mathematical Modeling' }, subtitle: { zh: '校级', en: 'University' } }
];

export const honors: RecognitionItem[] = [
  { period: '2026', title: { zh: '校级一等奖学金', en: 'First-class University Scholarship' }, subtitle: { zh: '西北师范大学', en: 'Northwest Normal University' } },
  { period: '2025', title: { zh: '校级一等奖学金', en: 'First-class University Scholarship' }, subtitle: { zh: '西北师范大学', en: 'Northwest Normal University' } },
  { period: '2025', title: { zh: '优秀共青团员', en: 'Outstanding Communist Youth League Member' }, subtitle: { zh: '西北师范大学', en: 'Northwest Normal University' } },
  { period: '2025', title: { zh: '师大好同学', en: 'Exemplary Student for Peer Support' }, subtitle: { zh: '西北师范大学', en: 'Northwest Normal University' } }
];

export const personal = {
  life: {
    zh: '我运营抖音“西师傲傲”和微信公众号“傲傲数学”，围绕数学知识科普、数学文化与学习资源分享开展内容策划和制作，累计关注者 3,000+。希望让严谨的数学知识进入更日常、更有温度的表达。',
    en: 'I run “西师傲傲” on Douyin and the WeChat account “傲傲数学”, sharing mathematical ideas, learning resources, and mathematical culture with 3,000+ combined followers. I hope to make rigorous mathematics more approachable through clear, engaging communication.'
  },
  collaboration: {
    zh: '欢迎围绕非线性分析、复分析、数学建模与数学学习展开交流。如果我们的兴趣有所交集，欢迎通过邮件联系我。',
    en: 'I welcome conversations about nonlinear analysis, complex analysis, mathematical modeling, and learning mathematics. If our interests overlap, please feel free to reach out by email.'
  }
};

export const personalLinks = [
  { label: 'Email', url: 'mailto:xiaoao2math@163.com' },
  { label: 'WeChat', url: '#wechat' },
  { label: 'GitHub', url: 'https://github.com/xiaoao2math-droid' }
];
