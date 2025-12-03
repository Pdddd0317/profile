import { ResumeData } from './types';

const AVATAR_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop";

export const DATA_ZH: ResumeData = {
  personalInfo: {
    name: "付鹏达",
    englishName: "Fu Pengda",
    title: "AI Enthusiast & BME Student at Hong Kong Polytechnic University",
    email: "alfred_fu2003@163.com",
    phone: "18798645517",
    location: "贵州贵阳",
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
      period: "2025.11 - 2026.01 (预计)",
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
      image: "https://picsum.photos/id/1/600/400",
      buttonText: "查看代码"
    },
    {
      id: "proj2",
      title: "基于 UE5 的真实校园模拟器",
      role: "第一负责人",
      period: "2023.09 - 2024.06",
      description: "以北京交通大学为背景，集合 VR、方向盘、射击模拟器的沉浸式校园模拟体验。",
      techStack: ["UE5", "Lumen", "C++", "Blueprints", "VR"],
      achievements: [
        "全流程主导 UE5 项目，复刻 22万 m² 校园，帧率稳定 90 FPS。",
        "自研 AI-NPC 插件，集成 MetaHuman + ConvAI，响应延迟 <300 ms。",
        "实现多设备接入（Logitech G29, Pico VR），输入延迟 <8 ms。"
      ],
      image: "https://picsum.photos/id/2/600/400",
      buttonText: "查看演示"
    }
  ],
  awards: [
    { title: "北京交通大学校级“优秀共青团员”", date: "2022-2023" },
    { title: "北京交通大学“校级招生宣传优秀个人” (全校4位)", date: "2022-2023" },
    { title: "全国大学生财经素养大赛三等奖", date: "2021.10" },
    { title: "北京交通大学“校级优秀共青团干部”", date: "2023-2024" }
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
      contactTitle: "期待与您合作",
      contactSubtitle: "目前开放 AI 工程与全栈开发机会，欢迎联系。",
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
    location: "Guiyang, Guizhou",
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
      degree: "Computer Science & Technology (Bachelor)",
      period: "2021.09 - 2025.06",
      details: "School of Computer and Information Technology",
      tags: ["211", "Double First-Class"]
    },
    {
      school: "Hong Kong Polytechnic University",
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
      period: "2025.11 - 2026.01 (Est.)",
      location: "Beijing",
      description: [
        "Participated in research and development of smart contract auditing tools.",
        "Utilized RAG + Step-Back Prompting to guide LLM reasoning.",
        "Assisted in writing academic papers."
      ]
    },
    {
      id: "exp2",
      company: "Guizhou Oriental Century Tech",
      role: "Software Developer (AI Dept)",
      period: "2024.01 - 2024.03",
      location: "Guiyang",
      description: [
        "Responsible for algorithm testing and optimization, completed monocular and binocular ranging algorithm coding and model training.",
        "Used ArcGIS for image depth analysis and converted depth maps into point cloud data."
      ]
    },
    {
      id: "exp3",
      company: "China Railway No.5 Engineering Group",
      role: "Software Tester (Software Dept)",
      period: "2023.07 - 2023.08",
      location: "Guiyang",
      description: [
        "Led iterative testing for 'Construction Project Integrated Management Platform', producing 120+ test cases in 2 weeks.",
        "Led MySQL slow query governance, reducing material ledger load time from 6.2s to 0.9s via index reconstruction and SQL rewriting.",
        "Reduced system failure rate by 42% after launch."
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Teaching Monitoring System based on CV",
      role: "Project Lead",
      period: "2024.05 - 2025.05",
      description: "Real-time monitoring of classroom scenes via cameras, accurately identifying student behaviors to support teaching management.",
      techStack: ["YOLOv8", "CBAM", "PySide6", "Computer Vision"],
      achievements: [
        "Proposed a fusion strategy of CBAM and PIOU2 loss function based on YOLOv8, significantly improving detection performance.",
        "Developed a highly interactive UI supporting multiple sources like images, videos, and IP cameras.",
        "Successfully built a high-accuracy, real-time classroom monitoring system."
      ],
      image: "https://picsum.photos/id/1/600/400",
      buttonText: "View Code"
    },
    {
      id: "proj2",
      title: "UE5 Real Campus Simulator",
      role: "Project Lead",
      period: "2023.09 - 2024.06",
      description: "An immersive campus simulation game based on Beijing Jiaotong University, integrating VR, steering wheels, and shooting simulators.",
      techStack: ["UE5", "Lumen", "C++", "Blueprints", "VR"],
      achievements: [
        "Led the UE5 project, recreating 220,000 m² of campus with stable 90 FPS.",
        "Self-developed AI-NPC plugin integrating MetaHuman + ConvAI with <300ms response latency.",
        "Implemented multi-device support (Logitech G29, Pico VR) with <8ms input latency."
      ],
      image: "https://picsum.photos/id/2/600/400",
      buttonText: "View Demo"
    }
  ],
  awards: [
    { title: "BJTU 'Excellent Youth League Member'", date: "2022-2023" },
    { title: "BJTU 'Outstanding Individual in Admissions Publicity' (Top 4)", date: "2022-2023" },
    { title: "National College Student Financial Literacy Competition (3rd Prize)", date: "2021.10" },
    { title: "BJTU 'Excellent Youth League Cadre'", date: "2023-2024" }
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
      skills: "Professional Skills",
      skillsSubtitle: "Expertise",
      projects: "Featured Projects",
      projectsSubtitle: "Portfolio",
      experience: "Work Experience",
      experienceSubtitle: "Career",
      education: "Education",
      awards: "Honors & Awards",
      contactTitle: "Let's Work Together",
      contactSubtitle: "Currently open for new opportunities in AI engineering and Full Stack development.",
      emailButton: "Send Email",
      callButton: "Call Me",
      copyright: "All rights reserved."
    }
  }
};
