import { FaFacebook, FaWhatsapp, FaTelegram, FaPhone } from "react-icons/fa";

export const SKILL_DATA = [
  {
    skill_name: "Flutter",
    image: "flutter.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Dart",
    image: "dart.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Bloc",
    image: "bloc.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GetX",
    image: "getx.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Android",
    image: "android.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "iOS",
    image: "apple.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQLite",
    image: "sqlite.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "REST API",
    image: "postman.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "VS Code",
    image: "vscode.svg",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/kareem.zedan.411821",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/201501301718",
  },
] as const;

export const FOOTER_CONTACTS = [
  {
    name: "Telegram",
    label: "01501301718",
    icon: FaTelegram,
    link: "https://t.me/+201501301718",
  },
  {
    name: "Phone",
    label: "01044764595",
    icon: FaPhone,
    link: "tel:+201044764595",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Flutter",
    image: "flutter.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Dart",
    image: "dart.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material Design",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Android",
    image: "android.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "iOS",
    image: "apple.svg",
    width: 70,
    height: 70,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "SQLite",
    image: "sqlite.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "REST API",
    image: "postman.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Bloc",
    image: "bloc.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GetX",
    image: "getx.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Kotlin",
    image: "kotlin.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Swift",
    image: "swift.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "VS Code",
    image: "vscode.svg",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    slug: "capital-taxi",
    title: "Capital Taxi",
    shortDescription:
      "A ride-hailing app for booking taxis with real-time tracking, multiple user modes, and seamless payment integration.",
    fullDescription:
      "Capital Taxi is a full-featured ride-hailing mobile application built with Flutter. The app supports both Captain (driver) and Passenger modes, allowing users to switch between roles seamlessly.\n\nKey features include:\n• Real-time GPS tracking and route visualization\n• Social authentication (Google, Facebook, Phone)\n• Live map integration with pickup/dropoff selection\n• Multiple vehicle types with dynamic pricing\n• Driver matching and trip management\n• Clean onboarding flow with mode selection\n\nBuilt with clean architecture principles, the app delivers a smooth user experience across Android and iOS platforms.",
    image: "/projects/capital-taxi-cover.png",
    showcase: "/projects/capital-taxi-showcase.png",
    images: [
      "/projects/capital-taxi-1.png",
      "/projects/capital-taxi-2.png",
      "/projects/capital-taxi-3.png",
      "/projects/capital-taxi-4.png",
      "/projects/capital-taxi-5.png",
      "/projects/capital-taxi-6.png",
      "/projects/capital-taxi-7.png",
      "/projects/capital-taxi-8.png",
    ],
    video: "",
    playStoreLink: "",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Google Maps", "Firebase", "REST API", "GetX"],
  },
  {
    slug: "moqawlak",
    title: "Moqawlak - مقاولك",
    shortDescription:
      "A Saudi app for contracting and maintenance services, connecting homeowners with service providers across Saudi Arabia.",
    fullDescription:
      "Moqawlak (مقاولك) is a Saudi application for contracting and home maintenance services, designed to help individuals and homeowners easily connect with service providers across various cities in Saudi Arabia.\n\nThrough the Moqawlak app, users can request a variety of contracting and home maintenance services, including:\n\n⚡ Electrical services\n🚰 Plumbing\n🎨 Painting\n🪵 Carpentry\n🧱 Renovation and general maintenance\n\nKey Features:\n• Browse service providers by city and region\n• In-app chat with technicians\n• Service categories with specialized workers\n• User profiles with ratings and reviews\n• Easy booking and service tracking\n\nThe app displays service providers based on city and area to help users find the right service faster.",
    image: "/projects/moqawlak-cover.png",
    showcase: "/projects/moqawlak-showcase.png",
    images: [
      "/projects/moqawlak-1.png",
      "/projects/moqawlak-2.png",
      "/projects/moqawlak-3.png",
      "/projects/moqawlak-4.png",
      "/projects/moqawlak-5.png",
    ],
    video: "",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.mokawlk.user",
    appStoreLink: "https://apps.apple.com/us/app/مقاولك/id6759940906",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Google Maps", "Chat"],
  },
  {
    slug: "awfar",
    title: "Awfar - أوفر",
    shortDescription:
      "Syria's #1 discount platform - turning every outing into real savings with exclusive deals on restaurants, cafes, and entertainment.",
    fullDescription:
      "Welcome to Awfar (أوفر) – Syria's first platform that turns all your outings into real savings! 🚀\n\nIf you're looking for the best Damascus experiences while paying less, you're in the right place. With Awfar, your outings become more affordable, and your trips around Damascus and its suburbs are full of fun without straining your budget.\n\n💡 How Awfar Works:\n• Download the app for free\n• Browse and discover the best Damascus deals and nearby discounts\n• Go to the place, open Awfar, scan the QR code at the cashier, and get your discount instantly!\n\n🎯 What Awfar Covers:\n🍔 Restaurants & Cafes - From shawarma and burgers to Damascus's finest restaurants\n🎢 Entertainment & Kids' Activities - Huge discounts on arcades, amusement parks, and events\n💅 Beauty & Wellness Centers - Exclusive discounts at Damascus salons\n🛍️ Shopping & Malls - Real discounts for smart shopping\n\n💳 Flexible Payment Options:\nCash payments or electronic wallets (Sham Cash, with Syriatel Cash & MTN coming soon)\n\n✅ Real discounts, not fake ones\n✅ Instant cash savings on your bill\n✅ Fast & works in all conditions\n✅ Discover new places in Damascus",
    image: "/projects/awfar-cover.png",
    showcase: "/projects/awfar-showcase.png",
    images: [
      "/projects/awfar-1.png",
      "/projects/awfar-2.png",
      "/projects/awfar-3.png",
      "/projects/awfar-4.png",
      "/projects/awfar-5.png",
      "/projects/awfar-6.png",
      "/projects/awfar-7.png",
    ],
    video: "",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.dalel.elsham",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "QR Scanner", "E-Wallet", "Google Maps"],
  },
  {
    slug: "talabat-clone",
    title: "Talabat Clone",
    shortDescription:
      "A food delivery app clone with restaurants, groceries, talabat mart, and health & wellness — built with Flutter.",
    fullDescription:
      "A full-featured Talabat-style food delivery application built with Flutter. The app delivers a modern ordering experience with multiple verticals in one place.\n\nKey Features:\n• Splash & branded onboarding flow\n• Social login (Google, Apple, Facebook, Email)\n• Multi-vertical home: Food, Talabat Mart, Groceries, Health & Wellness\n• Location-based delivery address selection\n• Restaurant discovery with ratings, filters, and cuisines\n• Great value deals and promotional banners\n• Shortcuts: Past orders, Super Saver, Must-tries, Best Sellers\n• Grocery shopping with categories and trending products\n• Clean orange-branded UI matching modern delivery apps\n\nBuilt for a smooth, production-ready mobile experience across Android and iOS.",
    image: "/projects/talabat-cover.png",
    showcase: "/projects/talabat-showcase.png",
    images: [
      "/projects/talabat-1.png",
      "/projects/talabat-2.png",
      "/projects/talabat-3.png",
      "/projects/talabat-4.png",
      "/projects/talabat-5.png",
    ],
    video: "",
    playStoreLink: "",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Google Maps", "GetX"],
  },
  {
    slug: "muthamin",
    title: "Muthamin - مثمن",
    shortDescription:
      "An integrated real estate appraisal platform in Oman connecting property owners, banks, and certified appraisers.",
    fullDescription:
      "Muthamin (مثمن) is an integrated real estate appraisal platform that connects property owners, banks, and certified real estate appraisers in the Sultanate of Oman.\n\nThrough the app, users can easily request property valuations, upload required documents, track request status, receive appraisal offers from appraisers, and get valuation reports securely and quickly.\n\nKey Features:\n• Request appraisals for residential, commercial properties, and land\n• Connect with certified, experienced real estate appraisers\n• Securely upload property documents\n• Receive and compare appraisal offers\n• Track request status in real time\n• Secure electronic payments\n• Instant notifications for updates and report delivery\n• Dedicated dashboard for appraisers to manage requests and offers\n• Easy bilingual interface (Arabic & English)\n\nMuthamin aims to digitize and simplify the real estate appraisal process, making it faster, more transparent, and easier for everyone.",
    image: "/projects/muthamin-cover.png",
    showcase: "/projects/muthamin-showcase.png",
    images: [
      "/projects/muthamin-1.png",
      "/projects/muthamin-2.png",
      "/projects/muthamin-3.png",
      "/projects/muthamin-4.png",
      "/projects/muthamin-5.png",
      "/projects/muthamin-6.png",
      "/projects/muthamin-7.png",
    ],
    video: "",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.muthamin.app.muthamin",
    appStoreLink: "https://apps.apple.com/us/app/muthamin-مثمن/id6787793573",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "E-Payments", "Bilingual UI"],
  },
  {
    slug: "istibdal",
    title: "Istibdal - استبدال",
    shortDescription:
      "A smart bartering app to exchange unused items for what you need — browse, chat, and trade safely without paying cash.",
    fullDescription:
      "Istibdal (استبدال) turns your unused items into new opportunities. With this smart app, bartering is easier and faster than ever — list what you have and swap it for what you need without spending money.\n\nKey Features:\n• List items professionally with clear photos and accurate condition details\n• Discover thousands of offers by category or location\n• Direct and fast chat to agree on trade details without middlemen\n• Trusted rating system for safer deals\n• Full protection and transparency for all parties\n• Cash + barter options when values differ\n• Sent/received offers with negotiation status tracking\n• Verified items and trust badges\n\nWhy pay when you can exchange? Swap what you have, save money, and give unused items new value.",
    image: "/projects/istibdal-cover.png",
    showcase: "/projects/istibdal-showcase.png",
    images: [
      "/projects/istibdal-1.png",
      "/projects/istibdal-2.png",
      "/projects/istibdal-3.png",
      "/projects/istibdal-4.png",
      "/projects/istibdal-5.png",
      "/projects/istibdal-6.png",
    ],
    video: "",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.istibdalonline.app",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "Chat", "REST API", "Maps"],
  },
  {
    slug: "sarfak",
    title: "Sarfak - صرفك",
    shortDescription:
      "A daily expense tracker and budget manager — log spending, set monthly limits, and see clear reports to control your money.",
    fullDescription:
      "Sarfak (صرفك) helps you manage your personal budget and track daily expenses in a simple, organized way — so you know where your money goes and make better financial decisions.\n\nKey Features:\n📊 Easy expense tracking — add daily expenses quickly and see where money is spent\n💰 Budget management — set a monthly budget and follow the remaining amount\n📈 Clear reports — summaries and category charts to understand spending patterns\n🧾 Expense categories — food, transport, bills, rent, shopping, health, and more\n🔒 Secure personal account — create an account to keep and manage your data\n🎯 Simple dark UI — fast, easy money management without complexity\n💡 Habit savings calculator — see how much you save if you quit daily habits\n\nImprove your financial habits, know your expenses accurately, and stick to your budget with Sarfak.",
    image: "/projects/sarfak-cover.png",
    showcase: "/projects/sarfak-showcase.png",
    images: [
      "/projects/sarfak-1.png",
      "/projects/sarfak-2.png",
      "/projects/sarfak-3.png",
      "/projects/sarfak-4.png",
      "/projects/sarfak-5.png",
      "/projects/sarfak-6.png",
      "/projects/sarfak-7.png",
      "/projects/sarfak-8.png",
    ],
    video: "",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.sarfak.mobile",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "Charts", "Local Storage", "Auth"],
  },
  {
    slug: "mawj-lance",
    title: "Mawj Lance - موج لانس",
    shortDescription:
      "An Arabic freelance marketplace for micro-services — post projects, compare offers, chat, and pay safely with escrow.",
    fullDescription:
      "Mawj Lance (موج لانس) is an Arabic freelance and micro-services marketplace that connects project owners with top freelancers in a safe, interactive environment.\n\nWhy Mawj Lance?\n• Access hundreds of specialists across academic and digital fields\n• Huge variety: design, writing, marketing, and academic consulting\n• Competitive offers — post for free and receive price quotes in minutes\n• Full financial guarantee with Escrow — payment released only after you accept the work\n• Instant chat — share files and track progress in real time\n\nService Categories:\n📚 Academic & Research — sources, research plans, tutoring, scientific reports, mind maps, courses\n💼 Business & Consulting — feasibility studies, SPSS, data entry, financial consulting\n💻 Tech & Engineering — websites, stores, mobile apps, AutoCAD, technical solutions\n🎨 Design & Creativity — logos, brand identity, PowerPoint, social media designs\n✍️ Writing & Translation — professional translation, content writing, proofreading, summaries\n\nFor Clients: Post your project → Compare offers (price, rating, portfolio) → Accept and start\nFor Freelancers: Build your profile → Browse projects → Deliver work and get paid easily",
    image: "/projects/mawj-lance-cover.png",
    showcase: "/projects/mawj-lance-showcase.png",
    images: [
      "/projects/mawj-lance-1.png",
      "/projects/mawj-lance-2.png",
      "/projects/mawj-lance-3.png",
      "/projects/mawj-lance-4.png",
      "/projects/mawj-lance-5.png",
    ],
    video: "",
    playStoreLink: "",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "Chat", "Escrow Payments", "REST API"],
  },
  {
    slug: "hisnak",
    title: "Hisnak - حصنك",
    shortDescription:
      "A comprehensive Islamic app — prayer times, Quran, adhkar, Qibla, tasbih, reciters, daily wird, challenges, and spiritual tracking.",
    fullDescription:
      "Hisnak (حصنك) is a comprehensive Islamic lifestyle app that brings prayer, Quran, remembrance, and personal spiritual habits into one calm, modern Arabic experience.\n\nKey Features:\n🕌 Prayer times — location-based times with countdown, Hijri date, and full daily schedule\n📖 Quran (المصحف) — browse by surah, juz, hizb, and pages with a clean Uthmani reading view\n🎧 Listen to reciters — search and favorite famous reciters with multiple riwayat (Hafs, Warsh, Mujawwad)\n🤲 Adhkar — morning, evening, sleep, and general athkar with progress tracking\n🧭 Qibla compass — map distance to Mecca and device angle guidance\n📿 Digital tasbih — dhikr counter with rounds and bead animation\n📅 Daily wird & khatmah — track Quran reading goals and completion streaks\n🎯 Challenges — habit challenges like quitting music with day-by-day progress\n✅ Daily tasks — spiritual task checklist with completion percentage\n💬 Hadith & Quran messages — shareable daily content\n\nBuilt with Flutter for a smooth RTL Arabic experience across Android and iOS.",
    image: "/projects/hisnak-promo.png",
    showcase: "/projects/hisnak-promo.png",
    images: [
      "/projects/hisnak-1.png",
      "/projects/hisnak-2.png",
      "/projects/hisnak-3.png",
      "/projects/hisnak-4.png",
      "/projects/hisnak-5.png",
      "/projects/hisnak-6.png",
      "/projects/hisnak-7.png",
      "/projects/hisnak-8.png",
      "/projects/hisnak-9.png",
      "/projects/hisnak-10.png",
      "/projects/hisnak-11.png",
      "/projects/hisnak-12.png",
      "/projects/hisnak-13.png",
      "/projects/hisnak-14.png",
      "/projects/hisnak-15.png",
    ],
    video: "",
    playStoreLink: "",
    appStoreLink: "",
    githubLink: "",
    technologies: ["Flutter", "Dart", "Firebase", "Maps", "Audio", "Local Storage"],
  },
] as const;

export const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Flutter Developer",
    place: "Client & Product Projects",
    summary:
      "Building and shipping cross-platform mobile apps for Android and iOS across ride-hailing, marketplaces, fintech-adjacent tools, real estate, and Islamic lifestyle products.",
    achievements: [
      "Delivered production Flutter apps with store presence on Google Play and the App Store",
      "Implemented complex flows: maps, realtime tracking, chat, payments, and bilingual Arabic/English UI",
      "Integrated REST APIs, Firebase, and state management with Bloc / GetX for maintainable architecture",
      "Owned UI implementation from designs through polished, RTL-ready mobile experiences",
    ],
  },
  {
    period: "Ongoing",
    role: "Mobile App Delivery",
    place: "End-to-end Flutter builds",
    summary:
      "Taking apps from concept to release — structure, screens, integrations, performance, and store deployment.",
    achievements: [
      "Shipped multi-domain products including Capital Taxi, Moqawlak, Awfar, Muthamin, and Hisnak",
      "Handled Play Store and App Store deployment, release packaging, and post-launch fixes",
      "Focused on performance, clean UI, and reliable API/Firebase integration for client-ready apps",
    ],
  },
] as const;

export const SERVICES = [
  {
    title: "Flutter Mobile App Development",
    description:
      "Cross-platform Android & iOS apps built with Flutter and Dart — clean architecture, scalable features, production-ready quality.",
    icon: "mobile",
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-accurate, responsive mobile UI with smooth motion, RTL Arabic support, and modern design systems.",
    icon: "ui",
  },
  {
    title: "API & Backend Integration",
    description:
      "REST API integration, auth flows, error handling, and reliable data layers for real-world app usage.",
    icon: "api",
  },
  {
    title: "Firebase Integration",
    description:
      "Auth, Firestore/Realtime DB, cloud messaging, storage, and analytics wired into Flutter apps.",
    icon: "firebase",
  },
  {
    title: "App Store & Google Play Deployment",
    description:
      "Release builds, store listings support, signing, and publishing apps to Google Play and the App Store.",
    icon: "store",
  },
  {
    title: "App Maintenance & Performance",
    description:
      "Bug fixes, updates, profiling, and optimization to keep apps fast, stable, and easy to maintain.",
    icon: "maintenance",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "تعامل احترافي من البداية للنهاية. التطبيق اتنفذ بجودة عالية، الواجهة نظيفة، والأداء ممتاز على أندرويد وiOS. التزام بالمواعيد وتواصل واضح طوال المشروع.",
    name: "أحمد م.",
    role: "Product Owner",
    project: "Marketplace App",
  },
  {
    quote:
      "تم تحويل التصميم لتطبيق Flutter متكامل بسرعة ودقة. دعم اللغة العربية ممتاز، وربط الـ API وFirebase تم بشكل منظم ومستقر بعد الإطلاق.",
    name: "سارة خ.",
    role: "Startup Founder",
    project: "Consumer Mobile App",
  },
  {
    quote:
      "تجربة ممتازة في تطوير تطبيق خدمات. الجودة عالية، المتابعة بعد الرفع على المتاجر سريعة، وأي تعديلات كانت تتنفذ باحترافية وبدون تأخير.",
    name: "عمر ح.",
    role: "Project Manager",
    project: "Service Platform",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  cv: "/cv.pdf",
};
