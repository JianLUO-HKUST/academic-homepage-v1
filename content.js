const siteContent = {
  en: {
    brandName: "JianLUO",
    nav: [
      { id: "home", label: "Home" },
      { id: "bio", label: "Bio" },
      { id: "research", label: "Research" },
      { id: "projects", label: "Projects" },
      { id: "cv", label: "CV" },
      { id: "contact", label: "Contact" }
    ],
    heroCrumb: "Home / Academic Profile",
    heroGreeting: "Hello, I am",
    heroName: "JianLUO",
    heroAffiliation: "MPhil Candidate, APEX Lab, INFO Hub, HKUST(GZ)",
    heroPhdNote: "Preparing for 2027 Spring/Fall PhD applications",
    heroCardTitle: "JianLUO",
    heroCardSubtitle: "1st Year MPhil at HKUSTGZ",
    heroProfileLocation: "Email: jluo960@connect.hkust-gz.edu.cn",
    heroProfileStatus: "X: @JianLUO234118",
    heroProfileAddress: "Address: HKUST (Guangzhou), No. 1 Duxue Road, Nansha District, Guangzhou, Guangdong, China",
    heroLinkScholarText: "X",
    heroLinkGithubText: "Email",
    heroLinkEmailText: "Map",
    heroMiniNote1: "HCI Designer",
    heroMiniNote2: "Kitchen Lover",
    heroMiniNote3: "Open to Collaboration",
    heroMiniNote4: "Design + Engineering",
    heroMiniNote5: "Curious About the World",
    heroMiniNote6: "I have a dog named Xiaoman",
    heroLinkScholar: "https://x.com/JianLUO234118",
    heroLinkGithub: "mailto:jluo960@connect.hkust-gz.edu.cn",
    heroLinkEmail: "https://maps.google.com/?q=广东省广州市南沙区笃学路一号香港科技大学（广州）",
    researchNotesTitle: "Research Interests",
    researchNotesItems: [
      "Human-AI Alignment and Iteraction",
      "Generative User Interfaces/Applications",
      "Context-Aware Interaction",
      "AI-Driven Design Workflows",
      "XR for Physical and Cognitive Well-being"
    ],
    skillsTitle: "Skills",
    skillsProTitle: "Proficient",
    skillsLearningTitle: "Learning",
    heroInterests: "Research Interests: Human-AI alignment, Progressive Intention Alignment, Generative User Interface/Application, Context-awareness in Human-AI Interaction",
    cvButton: "Download CV",
    contactButton: "Contact",
    bioTitle: "Bio",
    bioText: "I am an MPhil student in the Information Hub at the Hong Kong University of Science and Technology (Guangzhou), where I am affiliated with APEX Lab (Augmenting People by Empowering X). I am advised by Associate Professor Mingming Fan, with co-supervision from Assistant Professor Xin Tong and Assistant Professor David Yip. My research lies in human-computer interaction, with a focus on human-AI alignment, especially progressive intent alignment and context-aware interaction in human-AI and human-agent collaboration. I am particularly interested in how generative user interfaces and applications can better support the evolving process of aligning human intent with AI systems. I am also interested in using emerging interaction technologies to support the physical and cognitive well-being of middle-aged and older adults, including XR-based training and intervention design. With an interdisciplinary background in broadcasting and digital media design, I bring a technology-oriented design mindset to my research and enjoy using emerging AI tools to prototype and validate new interaction ideas.",
    researchTitle: "Ongoing Research",
    researchSectionNote: "Academic studies currently ongoing or deeply involved in.",
    researchItems: [
      {
        title: "Human-AI Alignment and Iteraction",
        works: [
          {
            title: "When AI Fails to Be a Peer",
            abstract: "This project explores why current AI systems in research ideation are often helpful but not experienced as true peers. Rather than only generating content, the project investigates how AI could better support peer-like functions such as challenging assumptions, offering alternative perspectives, taking initiative, and providing constructive critique. It focuses on understanding criticality gaps in current systems and designing agent roles that better support collaborative idea development.",
            type: "Human-AI Collaboration",
            keywords: ["Human-AI Collaboration", "Research Ideation", "Critical Thinking", "Peer-Function Agents"],
            image: "assets/images/when-ai-fails-peer.png"
          },
          {
            title: "Pre-Task Intent Alignment for Mobile Voice Assistants",
            abstract: "An early-stage research project exploring how a lightweight generative UI can help users clarify goals, constraints, and preferences before a mobile voice assistant executes a task. It introduces a pre-task alignment layer that supports task structuring, option preview, and better handoff to downstream apps.",
            type: "Intent Alignment Research",
            keywords: ["Intent Alignment", "Voice Assistants", "Generative UI"],
            image: "assets/images/pretask-intent.png"
          },
          {
            title: "Maintaining Collaborative Continuity During Membership Transition",
            abstract: "A human-AI collaboration project exploring how teams can maintain continuity when members leave, join, or change roles. Rather than replicating people, it proposes a bounded transition support paradigm that helps departing members, remaining teammates, and newcomers transfer collaboration-relevant knowledge while protecting privacy and respecting organizational boundaries.",
            type: "Human-AI Collaboration",
            keywords: ["Human-AI Collaboration", "Knowledge Handover", "Membership Transition", "Collaborative Continuity"],
            image: "assets/images/membership-transition-continuity.png"
          }
        ]
      },
      {
        title: "Generative User Interfaces/Applications",
        works: [
          {
            title: "BerryPicker",
            abstract: "BerryPicker is a generative application system that supports users in creating apps from fragmented ideas, references, and collected materials. It first provides a clue space where users can freely gather and organize multimodal fragments such as screenshots, links, and notes. The system then uses AI to perform semantic recognition, clustering, and task inference, aggregating these fragments into potential tasks and aligning them with the user’s intent before generation. Based on the aligned task, BerryPicker generates an interactive application and further supports continuous refinement and modification through natural language.",
            partner: "In collaboration with Huawei Device",
            keywords: ["Generative Applications", "Intent Alignment", "Human-AI Interaction", "Interactive App Creation"],
            image: "assets/images/berrypicker.png"
          }
        ]
      },
      {
        title: "Context-Aware Interaction",
        works: [
          {
            title: "Less is More",
            abstract: "An early-stage research project that investigates diminished reality as a perceptual interaction paradigm rather than simply a visual effect. It examines how removing visual information differs from masking or blurring in terms of attention, cognitive load, and task performance, with a focus on privacy, focus support, and perceptual closure. Current work centers on conceptual framing, prototype development, and planned eye-tracking studies.",
            type: "Perceptual Interaction Research",
            keywords: ["Diminished Reality", "Perceptual Interaction", "Eye Tracking", "Attention Design"],
            image: "assets/images/less-is-more.png"
          },
          {
            title: "Designing for Aging Hands, Designing for All",
            abstract: "A research project exploring personalized mobile interaction mechanisms based on the needs of older adults. By examining challenges such as dry skin, stiffness, imprecise touch, and visual decline, the project investigates how generative UI and adaptive interaction mechanisms can better support task clarification, lightweight guidance, and more inclusive mobile experiences. It aims to extend insights from older adults’ needs toward broader universal design.",
            type: "Inclusive Mobile Interaction",
            keywords: ["Inclusive Design", "Older Adults", "Mobile Interaction", "Adaptive Interfaces"],
            image: "assets/images/aging-hands-for-all.png"
          }
        ]
      },
      {
        title: "XR for Physical and Cognitive Well-being",
        works: [
          {
            title: "Move & Aware",
            abstract: "Move & Aware is an assistive VR system for older adults that supports body awareness and mobility training through interactive scenarios and adaptive feedback. The system integrates immersive environments, multimodal guidance, progress visualization, and personalized training logic to encourage safe exercise and sustained engagement.",
            status: "Finished",
            courseCode: "CMAA5013",
            keywords: ["Assistive Technology", "VR Interaction", "Older Adults", "Adaptive Feedback"],
            image: "assets/images/move-aware.png"
          },
          {
            title: "Contextual Hand Rehabilitation for Older Adults",
            abstract: "This project explores a mixed reality pouring training system for older adults, using a familiar daily activity to support hand rehabilitation in a contextual and measurable way. By embedding training into tea-pouring scenarios and providing real-time quantitative feedback, the system aims to improve engagement, precision, and adaptability in rehabilitation. Current work focuses on system design, quantified metrics, and planned evaluation.",
            type: "Mixed Reality Rehabilitation Research",
            keywords: ["Mixed Reality", "Hand Rehabilitation", "Older Adults", "Quantified Training"],
            image: "assets/images/contextual-hand-rehab.png"
          }
        ]
      }
    ],
    skillsItems: [
      "Interaction Design",
      "UX Research",
      "Design Prototype",
      "Figma",
      "XR Design",
      "Vibecoding"
    ],
    skillsLearningItems: [
      "Arduino Hardware Development",
      "XR Development",
      "Interactive Storytelling"
    ],
    publicationsTitle: "Publications",
    publications: [
      {
        title: "Co-Creative Interfaces for Research Ideation",
        venue: "CHI",
        year: "2026",
        authors: "Your Name, A. Collaborator, B. Student",
        abstract: "We present an interface that combines structured prompts and adaptive visual feedback to support early-stage research ideation. A mixed-method study shows improved idea diversity and confidence.",
        pdf: "#"
      },
      {
        title: "Visual Narratives in Scientific Communication",
        venue: "UIST",
        year: "2025",
        authors: "Your Name, C. Researcher",
        abstract: "This paper introduces a visual narrative toolkit for communicating complex technical content to broad audiences. Results suggest improved comprehension and recall.",
        pdf: "#"
      },
      {
        title: "Designing Trust in AI-Augmented Learning Systems",
        venue: "CSCW",
        year: "2024",
        authors: "Your Name, D. Advisor, E. Coauthor",
        abstract: "We investigate trust calibration mechanisms in AI-augmented educational interfaces and provide design guidelines grounded in longitudinal deployment findings.",
        pdf: "#"
      }
    ],
    projectsTitle: "Projects",
    projectsSectionNote: "Practice-oriented project explorations.",
    projectGroups: [
      {
        period: "MPhil Period",
        items: [
          {
            title: "Move & Aware",
            description: "Move & Aware is an assistive VR system for older adults that supports body awareness and mobility training through interactive scenarios and adaptive feedback. The system integrates immersive environments, multimodal guidance, progress visualization, and personalized training logic to encourage safe exercise and sustained engagement.",
            type: "Assistive VR System",
            status: "Finished",
            courseCode: "CMAA5013",
            keywords: ["Assistive Technology", "VR Interaction", "Older Adults", "Adaptive Feedback"],
            image: "assets/images/move-aware.png"
          },
          {
            title: "BerryPicker",
            description: "BerryPicker is a generative application system that supports users in creating apps from fragmented ideas, references, and collected materials. It first provides a clue space where users can freely gather and organize multimodal fragments such as screenshots, links, and notes. The system then uses AI to perform semantic recognition, clustering, and task inference, aggregating these fragments into potential tasks and aligning them with the user’s intent before generation. Based on the aligned task, BerryPicker generates an interactive application and further supports continuous refinement and modification through natural language.",
            type: "Generative App System",
            partner: "In collaboration with Huawei Device",
            keywords: ["Generative Applications", "Intent Alignment", "Human-AI Interaction", "Interactive App Creation"],
            image: "assets/images/berrypicker.png"
          },
          {
            title: "Chang'an Is a Chip",
            description: "Chang’an Is a Chip is an interactive narrative game that explores AI ethics through decision-making in a near-future city shaped by surveillance, algorithmic bias, and contested human autonomy. Players act as a system auditor, collect evidence, make choices, observe consequences, and reflect on ethical tensions through branching storylines and multiple endings. When a nanny robot is killed while trying to save a human child, how should the killer be judged: as a murderer, for destroying property, or under a law not yet prepared for such a case? The project combines narrative design, game mechanics, and value-based reflection to support discussion and public engagement with AI ethics.",
            type: "Interactive Narrative Game",
            status: "Finished",
            courseCode: "CMAA5013",
            keywords: ["AI Ethics", "Interactive Narrative", "Game Design", "Ethical Reflection"],
            image: "assets/images/changan-chip.png"
          }
        ]
      },
      {
        period: "Undergraduation Period",
        items: [
          {
            title: "Pulse Wings",
            description: "Pulse Wings is an interactive butterfly installation that transforms real-time heartbeat data into wing motion and ambient light, exploring the relationship between physiological signals, emotion, and embodied interaction. It is implemented using a pulse sensor, Arduino-based control, servo motors, and LED mapping to create synchronized kinetic and visual feedback.",
            type: "Interactive Installation",
            keywords: ["Biofeedback", "Embodied Interaction", "Physical Computing", "Interactive Installation"],
            image: "assets/images/pulse-wings.png"
          },
          {
            title: "Elevate with Confidence",
            description: "Elevate with Confidence explores how multimodal interaction can improve elevator accessibility for visually impaired users in shopping malls and other public environments. The system combines field research with a working prototype that integrates audio guidance, tactile feedback, spatial positioning, and visual indicators to support safe and independent navigation.",
            type: "Accessibility Design",
            keywords: ["Accessibility", "Assistive Technology", "Human-Centered Design", "Multimodal Interaction"],
            images: ["assets/images/elevate-confidence-1.png", "assets/images/elevate-confidence-2.png"],
            image: "assets/images/elevate-confidence-1.png"
          },
          {
            title: "Future History",
            description: "Future History is an AI-assisted sci-fi strategy board game set in a future world shaped by competing political and industrial powers. Players recruit heroes, explore the map, build decks, and compete for resources and territories through a system that combines deck-building, territorial control, and battle mechanics. The project was developed through multiple rounds of concept design, prototyping, playtesting, and visual refinement, with AI tools supporting worldbuilding, asset generation, and iterative design.",
            type: "Strategy Board Game",
            keywords: ["Game Design", "Strategy Game", "AI-Assisted Design", "Worldbuilding"],
            image: "assets/images/future-history.png"
          },
          {
            title: "Seeing Stories",
            description: "Seeing Stories is a research project that combines eye-tracking methods with film studies to analyze how audiences visually attend to classic film shots and how these attention patterns relate to emotional responses and viewing preferences. Through controlled experiments, gaze data analysis, and quantitative comparison across shot types, the project explores how cinematic techniques guide attention and how such insights can support both film analysis and creative practice.",
            type: "Eye-Tracking Research",
            keywords: ["Eye Tracking", "Film Studies", "Audience Research", "Visual Attention"],
            image: "assets/images/seeing-stories.png"
          },
          {
            title: "Digital Dunhuang",
            description: "Digital Dunhuang is an online smart exhibition hall designed to make Dunhuang murals and sculptures more accessible through immersive digital technologies. The project integrates panoramic scenes, 3D models, multimedia storytelling, and interactive learning modules to support cultural preservation, public education, and wider engagement with Dunhuang heritage.",
            type: "Digital Heritage Experience",
            keywords: ["Digital Heritage", "Interactive Exhibition", "Cultural Preservation", "Immersive Experience"],
            image: "assets/images/digital-dunhuang.png"
          }
        ]
      }
    ],
    teachingTitle: "Teaching",
    teachingItems: [
      "CS601: Human-Computer Interaction (Spring 2026)",
      "CS520: Data Visualization (Fall 2025)",
      "CS399: Research Methods in Computing (Spring 2025)"
    ],
    cvTitle: "CV",
    cvText: "Click here to download my full CV.",
    cvButtonInline: "Download Full CV",
    contactTitle: "Contact",
    projectTypeLabel: "Type",
    contactLabelEmail: "Email:",
    contactLabelX: "X:",
    contactLabelAddress: "Address:",
    contactEmail: "jluo960@connect.hkust-gz.edu.cn",
    contactOffice: "@JianLUO234118",
    contactScholar: "HKUST (Guangzhou), No. 1 Duxue Road, Nansha District, Guangzhou, Guangdong, China",
    footerText: "© 2026 JianLUO. All rights reserved.",
    abstractButtonShow: "Show Abstract",
    abstractButtonHide: "Hide Abstract",
    pdfButton: "PDF"
  },
  zh: {
    brandName: "JianLUO",
    nav: [
      { id: "home", label: "首页" },
      { id: "bio", label: "简介" },
      { id: "research", label: "研究" },
      { id: "projects", label: "项目" },
      { id: "cv", label: "简历" },
      { id: "contact", label: "联系" }
    ],
    heroCrumb: "首页 / 学术主页",
    heroGreeting: "你好，我是",
    heroName: "JianLUO（罗健）",
    heroAffiliation: "研究型硕士，无障碍人机交互实验室，信息枢纽，香港科技大学（广州）",
    heroPhdNote: "正在准备申请 2027 春/秋季 PhD",
    heroCardTitle: "JianLUO",
    heroCardSubtitle: "港科大（广州）研究型硕士一年级",
    heroProfileLocation: "邮箱：jluo960@connect.hkust-gz.edu.cn",
    heroProfileStatus: "X：@JianLUO234118",
    heroProfileAddress: "地址：广东省广州市南沙区笃学路一号香港科技大学（广州）",
    heroLinkScholarText: "X",
    heroLinkGithubText: "邮箱",
    heroLinkEmailText: "地图",
    heroMiniNote1: "人机交互设计师",
    heroMiniNote2: "厨房爱好者",
    heroMiniNote3: "欢迎合作",
    heroMiniNote4: "设计 + 工程",
    heroMiniNote5: "对世界充满好奇",
    heroMiniNote6: "我养了一条狗叫小满",
    heroLinkScholar: "https://x.com/JianLUO234118",
    heroLinkGithub: "mailto:jluo960@connect.hkust-gz.edu.cn",
    heroLinkEmail: "https://maps.google.com/?q=广东省广州市南沙区笃学路一号香港科技大学（广州）",
    researchNotesTitle: "研究兴趣",
    researchNotesItems: [
      "人机智能对齐与交互",
      "生成式用户界面与应用",
      "情境感知交互",
      "AI 驱动设计工作流",
      "XR 支持身体与认知健康"
    ],
    skillsTitle: "技能",
    skillsProTitle: "熟练掌握",
    skillsLearningTitle: "正在学习中",
    heroInterests: "研究方向：人机智能对齐、渐进式意图对齐、生成式用户界面与应用、人机交互中的情境感知",
    cvButton: "下载简历",
    contactButton: "联系我",
    bioTitle: "简介",
    bioText: "我目前是香港科技大学（广州）信息枢纽（Info Hub）的研究型硕士生，隶属于无障碍人机交互实验室（APEX Lab，Augmenting People by Empowering X）。我的导师是 Mingming Fan 副教授，联合指导老师包括 Xin Tong 助理教授和 David Yip 助理教授。我的研究位于人机交互领域，重点关注人机智能对齐（Human-AI Alignment），尤其是渐进式意图对齐（Progressive Intention Alignment），以及人机与人-智能体协作中的情境感知交互（Context-Aware Interaction）。我尤其关注生成式用户界面与应用（Generative User Interfaces/Applications）如何更好支持“人类意图与 AI 系统持续对齐”的动态过程。同时，我也关注如何利用新型交互技术支持中老年人的身体与认知健康，例如基于 XR 的训练与干预设计。基于广播电视学与数字媒体设计的跨学科背景，我在研究中强调技术导向的设计思维，并乐于使用新兴 AI 工具进行交互原型构建与验证。",
    researchTitle: "研究",
    researchSectionNote: "正在进行或深度参与的学术研究",
    researchItems: [
      {
        title: "人机智能对齐与交互（Human-AI Alignment and Iteraction）",
        works: [
          {
            title: "When AI Fails to Be a Peer",
            abstract: "该项目探索了为什么当前用于研究构思的 AI 系统虽然常常有帮助，却并不被体验为真正的“同伴”。项目并不只关注内容生成，而是进一步研究 AI 如何更好地承担类似同伴的功能，例如质疑假设、提供替代视角、主动推进讨论以及给出建设性批判。项目聚焦于理解当前系统中的“批判性缺口”，并设计能够更好支持协同创意发展的智能体角色。",
            type: "人与AI协同",
            keywords: ["人与AI协同", "研究构思", "批判性思维", "同伴功能智能体"],
            image: "assets/images/when-ai-fails-peer.png"
          },
          {
            title: "面向移动语音助手的前置任务意图对齐",
            abstract: "一个早期阶段的研究项目，探索如何通过轻量级生成式界面，在移动语音助手执行任务前帮助用户澄清目标、约束和偏好。项目提出了一个前置任务对齐层，用于支持任务结构化、选项预览以及与后续应用之间更清晰的任务交接。",
            type: "意图对齐研究",
            keywords: ["意图对齐", "语音助手", "生成式界面"],
            image: "assets/images/pretask-intent.png"
          },
          {
            title: "成员变动中的协作连续性维护",
            abstract: "一个关于人与AI协同的项目，探索团队在成员离开、加入或角色变动时如何维持协作连续性。它并不试图复制个人，而是提出一种有边界的过渡支持范式，帮助离开者、留任成员与新成员传递与协作相关的知识，同时保护隐私并尊重组织边界。",
            type: "人与AI协同",
            keywords: ["人与AI协同", "知识交接", "成员流动", "协作连续性"],
            image: "assets/images/membership-transition-continuity.png"
          }
        ]
      },
      {
        title: "生成式用户界面与应用",
        works: [
          {
            title: "BerryPicker",
            abstract: "BerryPicker 是一个支持用户从碎片化想法、参考资料和收集线索中创建应用的生成式应用系统。系统首先提供一个线索空间，允许用户自由收集和整理截图、链接、笔记等多模态碎片；随后利用 AI 对这些线索进行语义识别、聚类与任务推理，将其聚合为潜在任务，并在生成之前与用户完成意图对齐。在对齐后的任务基础上，BerryPicker 生成可交互的应用，并支持用户通过自然语言对结果进行持续迭代与修改。",
            partner: "与华为终端合作",
            keywords: ["生成式应用", "意图对齐", "人机交互", "交互式应用创建"],
            image: "assets/images/berrypicker.png"
          }
        ]
      },
      {
        title: "情境感知交互",
        works: [
          {
            title: "Less is More",
            abstract: "一个早期阶段的研究项目，将减弱现实（Diminished Reality）视为一种感知交互范式，而不只是单纯的视觉特效。项目关注“移除信息”与“模糊/遮罩信息”在注意分配、认知负荷和任务表现上的差异，重点讨论其在隐私保护、聚焦支持与知觉闭合中的作用。当前工作主要聚焦于概念框架、原型开发和后续眼动实验设计。",
            type: "感知交互研究",
            keywords: ["减弱现实", "感知交互", "眼动追踪", "注意力设计"],
            image: "assets/images/less-is-more.png"
          },
          {
            title: "Designing for Aging Hands, Designing for All",
            abstract: "一个基于老年人需求来探索个性化移动交互机制的研究项目。通过关注皮肤干燥、手部僵硬、触控不准和视觉衰退等问题，项目研究生成式界面与自适应交互机制如何更好地支持任务澄清、轻量引导以及更具包容性的移动使用体验。其目标是从老年人的交互需求出发，进一步延展到更广泛的通用设计。",
            type: "包容性移动交互",
            keywords: ["包容性设计", "老年人", "移动交互", "自适应界面"],
            image: "assets/images/aging-hands-for-all.png"
          }
        ]
      },
      {
        title: "XR 支持身体与认知健康",
        works: [
          {
            title: "Move & Aware",
            abstract: "Move & Aware 是一个面向老年人的辅助型 VR 系统，通过交互式场景和自适应反馈支持身体觉察与行动能力训练。系统整合了沉浸式环境、多模态引导、进度可视化和个性化训练逻辑，以鼓励安全锻炼和持续参与。",
            status: "已完成",
            courseCode: "CMAA5013",
            keywords: ["辅助技术", "VR交互", "老年人", "自适应反馈"],
            image: "assets/images/move-aware.png"
          },
          {
            title: "面向老年人的情境化手部康复",
            abstract: "该项目探索了一种面向老年人的混合现实倒水训练系统，利用熟悉的日常活动，以情境化且可量化的方式支持手部康复。系统将训练嵌入倒茶等真实生活情境中，并提供实时定量反馈，以提升康复过程中的参与度、动作精度与适应性。当前工作主要聚焦于系统设计、量化指标构建与后续评估方案。",
            type: "混合现实康复研究",
            keywords: ["混合现实", "手部康复", "老年人", "量化训练"],
            image: "assets/images/contextual-hand-rehab.png"
          }
        ]
      }
    ],
    skillsItems: [
      "交互设计",
      "用户研究",
      "设计原型",
      "Figma",
      "XR 交互设计",
      "Vibecoding"
    ],
    skillsLearningItems: [
      "Arduino 硬件开发",
      "XR 开发",
      "互动叙事"
    ],
    publicationsTitle: "论文",
    publications: [
      {
        title: "用于科研构思的共创式交互界面",
        venue: "CHI",
        year: "2026",
        authors: "Your Name, A. Collaborator, B. Student",
        abstract: "我们提出一种结合结构化提示与自适应视觉反馈的交互界面，用于支持早期科研选题发散。用户研究显示其可提升想法多样性与自信心。",
        pdf: "#"
      },
      {
        title: "科学传播中的可视化叙事",
        venue: "UIST",
        year: "2025",
        authors: "Your Name, C. Researcher",
        abstract: "本文提出面向科研传播的可视化叙事工具包，结果显示该方法可提升受众理解与记忆效果。",
        pdf: "#"
      },
      {
        title: "AI 增强学习系统中的信任设计",
        venue: "CSCW",
        year: "2024",
        authors: "Your Name, D. Advisor, E. Coauthor",
        abstract: "我们研究了 AI 增强学习系统中的信任校准机制，并基于长期部署提出设计建议。",
        pdf: "#"
      }
    ],
    projectsTitle: "项目",
    projectsSectionNote: "偏向实践的项目探索",
    projectGroups: [
      {
        period: "研究型硕士阶段",
        items: [
          {
            title: "Move & Aware",
            description: "Move & Aware 是一个面向老年人的辅助型 VR 系统，通过交互式场景和自适应反馈支持身体觉察与行动能力训练。系统整合了沉浸式环境、多模态引导、进度可视化和个性化训练逻辑，以鼓励安全锻炼和持续参与。",
            type: "辅助型VR系统",
            status: "已完成",
            courseCode: "CMAA5013",
            keywords: ["辅助技术", "VR交互", "老年人", "自适应反馈"],
            image: "assets/images/move-aware.png"
          },
          {
            title: "BerryPicker",
            description: "BerryPicker 是一个支持用户从碎片化想法、参考资料和收集线索中创建应用的生成式应用系统。系统首先提供一个线索空间，允许用户自由收集和整理截图、链接、笔记等多模态碎片；随后利用 AI 对这些线索进行语义识别、聚类与任务推理，将其聚合为潜在任务，并在生成之前与用户完成意图对齐。在对齐后的任务基础上，BerryPicker 生成可交互的应用，并支持用户通过自然语言对结果进行持续迭代与修改。",
            type: "生成式应用系统",
            partner: "与华为终端合作",
            keywords: ["生成式应用", "意图对齐", "人机交互", "交互式应用创建"],
            image: "assets/images/berrypicker.png"
          },
          {
            title: "Chang’an Is a Chip",
            description: "Chang’an Is a Chip 是一个交互叙事游戏项目，通过近未来城市中的决策情境探讨 AI 伦理议题。玩家扮演系统审计员，在监控、算法偏见与人类自主性冲突并存的城市中收集证据、做出选择、观察后果，并在分支叙事与多结局中反思伦理张力。当一台保姆机器人在试图拯救人类儿童时被杀害，行为人应被认定为杀人、毁坏财产，还是应适用尚未完善的新型法律框架？项目融合叙事设计、游戏机制与价值反思，支持公众对 AI 伦理的讨论与参与。",
            type: "交互叙事游戏",
            status: "已完成",
            courseCode: "CMAA5013",
            keywords: ["AI伦理", "交互叙事", "游戏设计", "伦理反思"],
            image: "assets/images/changan-chip.png"
          }
        ]
      },
      {
        period: "本科阶段",
        items: [
          {
            title: "Pulse Wings",
            description: "Pulse Wings 是一个交互式蝴蝶装置，将实时心跳数据映射为翅膀运动与环境光变化，探索生理信号、情绪与具身交互之间的关系。系统基于脉搏传感器、Arduino 控制、舵机驱动与 LED 映射，实现运动与视觉反馈的同步联动。",
            type: "Interactive Installation",
            keywords: ["Biofeedback", "Embodied Interaction", "Physical Computing", "Interactive Installation"],
            image: "assets/images/pulse-wings.png"
          },
          {
            title: "自信出行（Elevate with Confidence）",
            description: "Elevate with Confidence 探索了多模态交互如何提升视障用户在购物中心及其他公共环境中的电梯可达性。该项目将实地调研与可运行原型相结合，通过整合语音引导、触觉反馈、空间定位和视觉指示，支持用户实现更安全、更独立的导航体验。",
            type: "无障碍设计",
            keywords: ["无障碍设计", "辅助技术", "以人为中心的设计", "多模态交互"],
            images: ["assets/images/elevate-confidence-1.png", "assets/images/elevate-confidence-2.png"],
            image: "assets/images/elevate-confidence-1.png"
          },
          {
            title: "Future History",
            description: "Future History 是一个由 AI 辅助设计的科幻策略桌游，设定在一个由对立政治与工业力量共同塑造的未来世界中。玩家需要招募英雄、探索地图、构筑牌组，并通过结合牌组构筑、领地控制和战斗机制的系统来争夺资源与区域。该项目经历了多轮概念设计、原型制作、试玩测试与视觉打磨，并借助 AI 工具支持世界观构建、美术资产生成和迭代设计。",
            type: "策略桌游",
            keywords: ["游戏设计", "策略游戏", "AI辅助设计", "世界观构建"],
            image: "assets/images/future-history.png"
          },
          {
            title: "Seeing Stories",
            description: "Seeing Stories 是一个结合眼动方法与电影研究的项目，旨在分析观众如何在经典电影镜头中分配视觉注意，以及这些注意模式如何与情绪反应和观看偏好相关联。通过受控实验、注视数据分析以及不同镜头类型之间的定量比较，该项目探索电影语言如何引导观众注意力，并进一步为电影分析与创作实践提供启发。",
            type: "眼动研究",
            keywords: ["眼动追踪", "电影研究", "受众研究", "视觉注意"],
            image: "assets/images/seeing-stories.png"
          },
          {
            title: "Digital Dunhuang",
            description: "Digital Dunhuang 是一个在线智慧展厅项目，旨在通过沉浸式数字技术让敦煌壁画与雕塑更易被公众接触和理解。项目整合了全景场景、3D 模型、多媒体叙事和互动学习模块，以支持文化遗产保护、公众教育以及更广泛的敦煌文化传播。",
            type: "数字文化遗产体验",
            keywords: ["数字文化遗产", "交互展览", "文化保护", "沉浸式体验"],
            image: "assets/images/digital-dunhuang.png"
          }
        ]
      }
    ],
    teachingTitle: "教学",
    teachingItems: [
      "CS601：人机交互（2026 春）",
      "CS520：数据可视化（2025 秋）",
      "CS399：计算研究方法（2025 春）"
    ],
    cvTitle: "简历",
    cvText: "点击这里可以下载我的完整简历。",
    cvButtonInline: "下载完整简历",
    contactTitle: "联系",
    projectTypeLabel: "类型",
    contactLabelEmail: "邮箱：",
    contactLabelX: "X：",
    contactLabelAddress: "地址：",
    contactEmail: "jluo960@connect.hkust-gz.edu.cn",
    contactOffice: "@JianLUO234118",
    contactScholar: "广东省广州市南沙区笃学路一号香港科技大学（广州）",
    footerText: "© 2026 JianLUO. 版权所有。",
    abstractButtonShow: "查看摘要",
    abstractButtonHide: "收起摘要",
    pdfButton: "PDF"
  }
};

