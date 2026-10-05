import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, CodeXml, FileText, Icon } from "lucide-react";

import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";

import { Html5 } from "@/components/ui/svgs/html";
import { Css3 } from "@/components/ui/svgs/css";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Typescript } from "@/components/ui/svgs/typescript";

import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";

import { Nodejs } from "@/components/ui/svgs/nodejs";

import { Mongodb } from "@/components/ui/svgs/mongodb";

import { Git } from "@/components/ui/svgs/git";
import { Github } from "@/components/ui/svgs/github";
import { Docker } from "@/components/ui/svgs/docker";
import { Vercel } from "@/components/ui/svgs/vercel";

import { Mui } from "@/components/ui/svgs/mui";

export const DATA = {
  name: "Sahil Singh",
  initials: "SS",
  location: "Ahmedabad, Gujarat",
  locationLink: "",
  description:
    "Full Stack Developer who loves building modern web applications, solving real-world problems, and turning ideas into scalable digital products.",
  summary:
    "I’m a Full Stack Developer passionate about building and scaling modern web applications. I’ve worked on real-world projects ranging from e-commerce platforms and content management systems to admin dashboards and financial applications. My experience spans frontend, backend, databases, APIs, authentication, and deployment. I enjoy learning new technologies, solving challenging problems, and turning ideas into clean, reliable, and user-friendly products.",
  avatarUrl: "/ss-profile.jpeg",
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: Html5 },
        { name: "CSS3", icon: Css3 },
        { name: "JavaScript", icon: Javascript },
        { name: "TypeScript", icon: Typescript },
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Svelte", icon: "/svelte.png" },
        { name: "Tailwind CSS", icon: Tailwindcss },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "MUI", icon: Mui },
        { name: "Motion", icon: "/motion-icon.png" },
        { name: "WordPress", icon: "/wordpress-icon.webp" },
        { name: "TinyMCE", icon: "/tinymce-icon.png" },
        { name: "TipTap", icon: "/tiptapdev_logo.jpeg" },
      ],
    },

    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js", icon: Nodejs },
        { name: "Express.js", icon: "/express.webp" },
        { name: "REST APIs", icon: "/api-main.png" },
        { name: "GraphQL", icon: "/graphql-icon.svg" },
        { name: "Socket.IO", icon: "/Socket-io.svg" },
        { name: "JWT", icon: "/jwt-icon.webp" },
      ],
    },

    {
      category: "Database",
      items: [
        { name: "MySQL", icon: "/mysql-icon.png" },
        { name: "MongoDB", icon: Mongodb },
        { name: "Sequelize", icon: "/sequelize-logo.png" },
      ],
    },

    {
      category: "Tools & Deployment",
      items: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: Github },
        { name: "Postman", icon: "/postman-icon.webp" },
        { name: "Docker", icon: Docker },
        { name: "Vercel", icon: Vercel },
      ],
    },
    {
      category: "Other Tools",
      items: [
        { name: "Canva", icon: "/canva-icon.webp" },
        { name: "FileZilla", icon: "/FileZilla_logo.svg" },
        { name: "Web3Forms", icon: "/web3forms-icon.png" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Sahil-Resume.pdf", icon: FileText, label: "My Resume" },
    // { href: "/project", icon: CodeXml, label: "My Projects" },
  ],
  contact: {
    email: "sahil0sumit1705@gmail.com",
    tel: "+91 93742 56348",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sahil-Singh-1705",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahil-singh-669685346?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sahil_dev_17",

        icon: Icons.x,

        navbar: true,
      },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: true,
      // },
    },
  },

  work: [
    {
      company: "TechySquad",
      href: "#",
      badges: [],
      location: "Ahmedabad, India",
      title: "Junior Developer",
      logoUrl: "/Techysquad-Logomark.png",

      start: "Oct 2025",
      end: "Present",

      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "MySQL",
        "MongoDB",
        "WordPress",
      ],

      description: [
        "Developed and maintained trading, financial, service-based, and multilingual websites using modern frontend and backend technologies, with a strong focus on responsive design, performance, and user experience.",
        "Built and managed custom CMS platforms for dynamic content management, implementing REST APIs, database-driven features, authentication, content updates, feature enhancements, and payment gateway workflows.",
        "Developed and integrated frontend and backend modules using React, Next.js, Node.js, Express.js, MySQL, and Sequelize, including dashboards, user management, KYC workflows, security features, and API integrations.",
        "Collaborated on client-focused websites and web applications, integrating third-party services such as Web3Forms and external widgets while improving functionality, responsiveness, accessibility, and overall user experience.",
      ],
    },

    {
      company: "TechySquad",
      href: "#",
      badges: [],
      location: "Ahmedabad, India",
      title: "MERN Stack Developer Intern",
      logoUrl: "/Techysquad-Logomark.png",

      start: "Apr 2025",
      end: "Sep 2025",

      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "MySQL",
        "MongoDB",
        "WordPress",
      ],

      description: [
        "WP-Custom-CMS: Built a custom content management system using React, WordPress, GraphQL, and Tiptap, enabling users to manage website content, pages, and rich-text sections without requiring direct access to the WordPress dashboard.",
        "Task Management: Developed a full-stack task management platform using React, Node.js, MongoDB, WebSockets, and React DnD, implementing real-time notifications, task assignment, drag-and-drop workflows, and separate admin and employee functionality.",
        "Web Development: Developed responsive and interactive websites using React.js and Next.js, implementing reusable components, Framer Motion animations, sliders, API integrations, responsive layouts, and performance-focused frontend solutions.",
      ],
    },
  ],
  education: [
    {
      school: "Silver Oak University",
      href: "https://silveroakuni.ac.in/",
      degree: "Bachelor of Computer Application (BCA) - CGPA : 7.95",
      logoUrl: "/silver-oak.webp",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Apex CMS",
      href: "https://github.com/Sahil-Singh-1705/Apex-CMS",
      active: true,
      description:
        "A full-stack CMS for managing website content, images, and multilingual data through an admin dashboard with rich text editing, authentication, and REST APIs.",
      technologies: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "MUI",
        "Bootstrap",
        "React.js",
        "TinyMCE",
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "JWT",
        "Winston",
        "REST API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Singh-1705/Apex-CMS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Apex-CMS.png",
    },
    {
      title: "Task Master",
      href: "https://github.com/Sahil-Singh-1705/Task-Master",
      active: true,
      description:
        "A task management system with admin and employee dashboards, drag-and-drop task workflows, task assignment, real-time notifications, and admin approval for completed tasks.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "React DnD",
        "Node.js",
        "Express.js",
        "JWT",
        "Socket.IO",
        "REST API",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Singh-1705/Task-Master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tm-main.png",
    },

    {
      title: "WP-Custom-CMS",
      href: "https://github.com/Sahil-Singh-1705/WP-Custom-CMS",
      active: true,
      description:
        "Custom CMS for WordPress websites that lets clients manage posts and pages without accessing the WordPress dashboard, with authentication, Tiptap editing, drafts, previews, and publishing.",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "Tiptap Editor",
        "Node.js",
        "Express.js",
        "GraphQL",
        "JWT",
        "MySQL",
        "WordPress",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Singh-1705/WP-Custom-CMS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/WP-Custom-CMS.png",
    },

    {
      title: "Fusion Store",
      href: "https://github.com/Sahil-Singh-1705/Fusion-Store",
      active: true,
      description:
        "Full-stack e-commerce platform with product browsing, cart and order management, user authentication, and an admin dashboard for managing products, categories, users, and orders.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Framer Motion",
        "MUI",
        "Node.js",
        "Express.js",
        "JWT",
        "REST API",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sahil-Singh-1705/Fusion-Store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Fs-image02.png",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
