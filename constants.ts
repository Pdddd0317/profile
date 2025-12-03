import { ResumeData } from './types';

// IT-style cartoon avatar (Friendly/Normal style)
const AVATAR_URL = "https://692fec5552213e0bf969fc8a.imgix.net/b089e9f791f6c5178c2c3e63a580504c.jpg";

// Reliable High-Quality Project Images (Unsplash IDs + Custom)
const IMAGES = {
  classroom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", // Classroom/Tech
  ue5: "https://692fec5552213e0bf969fc8a.imgix.net/UE5-BJTU.png", // Custom UE5 Image
  pool: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=800&auto=format&fit=crop", // Swimming Pool
  river: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=800&auto=format&fit=crop", // River/Nature
  music: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop" // Music/Studio
};

export const DATA_ZH: ResumeData = {
  personalInfo: {
    name: "付鹏达",
    englishName: "Fu Pengda",
    title: "AI Enthusiast & BME Student at Hong Kong Polytechnic University",
    email: "alfred_fu2003@163.com",
    phone: "18798645517",
    location: "中国香港",
    intro: "热衷于计算机视觉、UE5 虚拟仿真及人工智能技术的创新应用。拥有从算法模型训练（YOLO, Transformers）到全栈系统开发（React, PySide, SpringBoot）的完整项目经验。同时，在大模型训练部署以及 RAG（检索增强生成）技术的落地应用方面积累了丰富的实战经验。致力于将复杂的 AI 技术转化为直观、高效的实际应用。",
    avatarUrl: AVATAR_URL,
    ctaButton: "查看我的项目"
  },
  skills: [
    {
      category: "编程语言",
      items: ["Java", "Python", "C", "SQL", "MatLab"],
      level: 90
    },
    {
      category: "开发框架 & 工具",
      items: ["UE5", "ArcGIS", "YOLOv8", "PySide6", "React", "Tableau"],
      level: 85
    },
    {
      category: "核心能力",
      items: ["计算机视觉", "RAG/LLM", "数字孪生", "全栈开发"],
      level: 88
    },
    {
      category: "语言",
      items: ["普通话 (Native)", "英语 (IELTS 6.0)"],
      level: 80
    }
  ],
  education: [
    {
      school: "北京交通大学",
      degree: "计算机科学与技术 (本科)",
      period: "2021.09 - 2025.06",
      details: "计算机与信息技术学院",
      tags: ["211", "双一流"]
    },
    {
      school: "香港理工大学",
      degree: "Biomedical Engineering (硕士)",
      period: "2026.02 - 2027.06",
      details: "研0 (Incoming)",
      tags: ["QS Top 100", "海外"]
    }
  ],
  experience: [
    {
      id: "exp1",
      company: "中国科学院软件研究所",
      role: "研究助理 (区块链)",
      period: "2025.11 - 2026.01",
      location: "北京",
      description: [
        "参与智能合约审计工具相关论文研究和开发。",
        "利用 RAG + Step-Back Prompting 引导 LLM 进行推理。",
        "协助撰写相关学术论文。"
      ]
    },
    {
      id: "exp2",
      company: "贵州东方世纪科技股份有限公司",
      role: "软件开发 (人工智能部)",
      period: "2024.01 - 2024.03",
      location: "贵阳",
      description: [
        "负责算法测试和优化，完成完整的单目和双目测距算法编写和模型训练。",
        "利用 ArcGIS 进行图像深度分析，并将深度图转换成点云数据。"
      ]
    },
    {
      id: "exp3",
      company: "中铁五局集团建筑工程有限责任公司",
      role: "软件测试 (软件部)",
      period: "2023.07 - 2023.08",
      location: "贵阳",
      description: [
        "负责「施工项目综合管控平台」迭代测试，2周内输出 120+ 用例，发现 38 个缺陷。",
        "主导 MySQL 慢查询治理，通过索引重构与 SQL 重写，将物资台账加载时间从 6.2s 降到 0.9s。",
        "上线后系统故障率下降 42%。"
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "基于计算机视觉的教学监控系统",
      role: "第一负责人",
      period: "2024.05 - 2025.05",
      description: "通过摄像头实时监测课堂场景，精准识别学生行为并为教学管理提供数据支持。",
      techStack: ["YOLOv8", "CBAM", "PySide6", "Computer Vision"],
      achievements: [
        "提出基于 YOLOv8 的 CBAM 与 PIOU2 损失函数融合策略，显著提升检测性能。",
        "开发交互性强的 UI，支持图片、视频、网络摄像头等多源输入。",
        "成功打造实时性强、准确性高的课堂监控系统。"
      ],
      image: IMAGES.classroom,
      buttonText: "查看详情"
    },
    {
      id: "proj2",
      title: "基于 UE5 的真实校园模拟器",
      role: "第一负责人",
      period: "2023.09 - 2024.06",
      description: "以北京交通大学为背景，集合 VR、方向盘、射击模拟器的沉浸式校园模拟体验。",
      techStack: ["UE5", "Lumen", "C++", "VR/AR", "MetaHuman"],
      achievements: [
        "全流程主导 UE5 项目，复刻 22万 m² 校园，帧率稳定 90 FPS。",
        "自研 AI-NPC 插件，集成 MetaHuman + ConvAI，响应延迟 <300 ms。",
        "实现多设备接入（Logitech G29, Pico VR），输入延迟 <8 ms。"
      ],
      image: IMAGES.ue5,
      buttonText: "查看演示"
    },
    {
      id: "proj3",
      title: "基于计算机视觉的溺水监测系统",
      role: "第一负责人",
      period: "2023.05 - 2024.03",
      description: "构建基于视觉的溺水监测系统，实时判断泳池情况并发出警告。",
      techStack: ["YOLOv5x", "Mediapipe", "LSTM", "Computer Vision"],
      achievements: [
        "自研「多点位标注法」，构建4路高空泳池数据集（2.3万张图片），标注效率提升3倍。",
        "双模型级联：YOLOv5x检测人体 + Mediapipe提取关键点 + LSTM行为分类。",
        "准确率达 96.4%，误报率低至 0.3次/小时。"
      ],
      image: IMAGES.pool,
      buttonText: "查看代码"
    },
    {
      id: "proj4",
      title: "图像真实距离测量系统",
      role: "开发岗",
      period: "2024.01 - 2024.03",
      description: "为水利行业设计，通过河道横断面照片估计真实距离与深度。",
      techStack: ["SfM", "RAFT-Stereo", "ArcGIS Pro", "Python"],
      achievements: [
        "落地「水利断面测距」算法栈：单目SfM + 双目RAFT-Stereo，双目亚像素误差0.28 px。",
        "ArcGIS深度学习二次开发，将深度图转LAS点云，10km河道5min完成，精度±3cm。",
        "自动化后处理输出CAD图纸，减少70%外业测量人日。"
      ],
      image: IMAGES.river,
      buttonText: "查看详情"
    },
    {
      id: "proj5",
      title: "基于人工智能的音乐自动生成系统",
      role: "第一负责人",
      period: "2022.05 - 2023.03",
      description: "用户选择风格后输入开头即可自动产出完整音乐的生成式AI系统。",
      techStack: ["Transformer", "Deep Learning", "MIDI", "Python"],
      achievements: [
        "爬取并处理15万条跨风格MIDI数据，设计分层Transformer-LM进行三通道（和弦/旋律/鼓）并行解码。",
        "最大序列2048 token，训练200 epoch，NLL优于baseline 27%。",
        "MIDI后端动态配器，支持一键导出WAV，端到端延迟 1.8s。"
      ],
      image: IMAGES.music,
      buttonText: "试听Demo"
    }
  ],
  awards: [
    { title: "北京交通大学“校级优秀共青团干部”", date: "2023-2024" },
    { title: "北京交通大学校级“优秀共青团员”", date: "2022-2023" },
    { title: "北京交通大学“校级招生宣传优秀个人” (全校4位)", date: "2022-2023" },
    { title: "全国大学生财经素养大赛三等奖", date: "2021.10" }
  ],
  ui: {
    nav: {
      skills: "技能",
      projects: "项目",
      experience: "经历",
      education: "教育",
      contact: "联系",
    },
    sectionTitles: {
      skills: "专业技能",
      skillsSubtitle: "Expertise",
      projects: "项目展示",
      projectsSubtitle: "Projects",
      experience: "工作经历",
      experienceSubtitle: "Experience",
      education: "教育经历",
      awards: "荣誉奖项",
      contactTitle: "很高兴认识您",
      contactSubtitle: "感谢您的来访，欢迎随时与我联系。",
      emailButton: "发送邮件",
      callButton: "拨打电话",
      copyright: "保留所有权利。"
    }
  }
};

export const DATA_EN: ResumeData = {
  personalInfo: {
    name: "Fu Pengda",
    englishName: "Fu Pengda",
    title: "AI Enthusiast & BME Student at Hong Kong Polytechnic University",
    email: "alfred_fu2003@163.com",
    phone: "18798645517",
    location: "Hong Kong, China",
    intro: "Passionate about innovative applications in Computer Vision, UE5 Virtual Simulation, and Artificial Intelligence. I possess comprehensive project experience ranging from algorithm model training (YOLO, Transformers) to full-stack system development (React, PySide, SpringBoot). Additionally, I have accumulated rich practical experience in the deployment of Large Models and the implementation of RAG (Retrieval-Augmented Generation) technologies. I am dedicated to transforming complex AI technologies into intuitive and efficient practical applications.",
    avatarUrl: AVATAR_URL,
    ctaButton: "View My Projects"
  },
  skills: [
    {
      category: "Programming",
      items: ["Java", "Python", "C", "SQL", "MatLab"],
      level: 90
    },
    {
      category: "Frameworks & Tools",
      items: ["UE5", "ArcGIS", "YOLOv8", "PySide6", "React", "Tableau"],
      level: 85
    },
    {
      category: "Core Competencies",
      items: ["Computer Vision", "RAG/LLM", "Digital Twins", "Full Stack"],
      level: 88
    },
    {
      category: "Languages",
      items: ["Mandarin (Native)", "English (IELTS 6.0)"],
      level: 80
    }
  ],
  education: [
    {
      school: "Beijing Jiaotong University",
      degree: "Computer Science and Technology (Bachelor)",
      period: "2021.09 - 2025.06",
      details: "School of Computer and Information Technology",
      tags: ["211", "Double First-Class"]
    },
    {
      school: "The Hong Kong Polytechnic University",
      degree: "Biomedical Engineering (Master)",
      period: "2026.02 - 2027.06",
      details: "Incoming Student",
      tags: ["QS Top 100", "Overseas"]
    }
  ],
  experience: [
    {
      id: "exp1",
      company: "Institute of Software, CAS",
      role: "Research Assistant (Blockchain)",
      period: "2025.11 - 2026.01",
      location: "Beijing",
      description: [
        "Participated in research and development of smart contract audit tools.",
        "Utilized RAG + Step-Back Prompting to guide LLM reasoning.",
        "Assisted in writing academic papers."
      ]
    },
    {
      id: "exp2",
      company: "Guizhou Oriental Century Technology Co., Ltd.",
      role: "Software Developer (AI Dept)",
      period: "2024.01 - 2024.03",
      location: "Guiyang",
      description: [
        "Responsible for algorithm testing and optimization, completing full mono/binocular ranging algorithm coding and model training.",
        "Utilized ArcGIS for deep depth analysis and converted depth maps into point clouds."
      ]
    },
    {
      id: "exp3",
      company: "China Railway 5th Bureau Group",
      role: "Software Testing (Software Dept)",
      period: "2023.07 - 2023.08",
      location: "Guiyang",
      description: [
        "Tested 'Construction Project Comprehensive Control Platform', outputting 120+ cases in 2 weeks and finding 38 defects.",
        "Led MySQL slow query governance, reducing material ledger load time from 6.2s to 0.9s via index refactoring and SQL rewrite.",
        "Reduced system failure rate by 42% after launch."
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Teaching Monitoring System Based on CV",
      role: "Project Lead",
      period: "2024.05 - 2025.05",
      description: "Real-time classroom monitoring via cameras to precisely identify student behavior and support teaching management.",
      techStack: ["YOLOv8", "CBAM", "PySide6", "Computer Vision"],
      achievements: [
        "Proposed CBAM + PIOU2 loss fusion strategy based on YOLOv8, significantly improving detection performance.",
        "Developed high-interactivity UI supporting multiple inputs (image, video, webcam, etc.).",
        "Successfully built a real-time, high-accuracy classroom monitoring system."
      ],
      image: IMAGES.classroom,
      buttonText: "View Details"
    },
    {
      id: "proj2",
      title: "Realistic Campus Simulator Based on UE5",
      role: "Project Lead",
      period: "2023.09 - 2024.06",
      description: "Immersive campus simulation based on BJTU, integrating VR, steering wheels, and shooting simulators.",
      techStack: ["UE5", "Lumen", "C++", "VR/AR", "MetaHuman"],
      achievements: [
        "Led UE5 project, recreating 220,000 m² campus with stable 90 FPS.",
        "Developed AI-NPC plugin integrating MetaHuman + ConvAI with response latency <300 ms.",
        "Integrated multiple devices (Logitech G29, Pico VR) with input latency <8 ms."
      ],
      image: IMAGES.ue5,
      buttonText: "Watch Demo"
    },
    {
      id: "proj3",
      title: "Drowning Monitoring System Based on CV",
      role: "Project Lead",
      period: "2023.05 - 2024.03",
      description: "Vision-based drowning monitoring system capable of real-time situational awareness and issuing warnings.",
      techStack: ["YOLOv5x", "Mediapipe", "LSTM", "Computer Vision"],
      achievements: [
        "Self-developed 'Multi-point Labeling Method' for 4-channel high-angle pool dataset (23k images), tripling labeling efficiency.",
        "Dual-model cascade: YOLOv5x (Human) + Mediapipe (Keypoints) + LSTM (Behavior Classification).",
        "Achieved 96.4% accuracy with a false positive rate of only 0.3 times/hour."
      ],
      image: IMAGES.pool,
      buttonText: "View Code"
    },
    {
      id: "proj4",
      title: "Real Distance Measurement from Images",
      role: "Developer",
      period: "2024.01 - 2024.03",
      description: "Designed for water conservancy to estimate real distance and depth from river cross-section photos.",
      techStack: ["SfM", "RAFT-Stereo", "ArcGIS Pro", "Python"],
      achievements: [
        "Implemented 'River Section Ranging' algo stack: Monocular SfM + Binocular RAFT-Stereo, sub-pixel error 0.28 px.",
        "ArcGIS Deep Learning secondary dev to convert depth maps to LAS point clouds (10km river in 5min, ±3cm accuracy).",
        "Automated post-processing to CAD drawings, reducing field work by 70%."
      ],
      image: IMAGES.river,
      buttonText: "View Details"
    },
    {
      id: "proj5",
      title: "AI Music Generation System",
      role: "Project Lead",
      period: "2022.05 - 2023.03",
      description: "Generative AI system producing complete music tracks from user-selected style and introductory input.",
      techStack: ["Transformer", "Deep Learning", "MIDI", "Python"],
      achievements: [
        "Processed 150k multi-style MIDI files, designed hierarchical Transformer-LM for 3-channel (Chord/Melody/Drum) parallel decoding.",
        "Max sequence 2048 tokens, trained 200 epochs, NLL 27% better than baseline.",
        "MIDI backend dynamic orchestration with one-click WAV export, end-to-end latency 1.8s."
      ],
      image: IMAGES.music,
      buttonText: "Listen Demo"
    }
  ],
  awards: [
    { title: "BJTU 'Outstanding School-level League Cadre'", date: "2023-2024" },
    { title: "BJTU 'Outstanding League Member'", date: "2022-2023" },
    { title: "BJTU 'Outstanding Individual in Admissions Publicity' (Top 4)", date: "2022-2023" },
    { title: "National College Student Financial Literacy Competition (3rd Prize)", date: "2021.10" }
  ],
  ui: {
    nav: {
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    sectionTitles: {
      skills: "Skills",
      skillsSubtitle: "Expertise",
      projects: "Projects",
      projectsSubtitle: "Selected Work",
      experience: "Experience",
      experienceSubtitle: "Career Path",
      education: "Education",
      awards: "Honors & Awards",
      contactTitle: "Nice to meet you",
      contactSubtitle: "Thanks for visiting, feel free to reach out.",
      emailButton: "Send Email",
      callButton: "Call Me",
      copyright: "All rights reserved."
    }
  }
};