const domains = [
  {
    title: "Frontend Development",
    icon: "F",
    category: "Screens people touch",
    what: "Frontend development is about building the part of a website or app that people can see, click, scroll, and use.",
    where: "It is used anywhere a person opens a website or web app, like shopping, watching videos, reading news, or chatting online.",
    examples: ["Instagram feed", "YouTube home page", "Netflix browsing screen", "Amazon product page"],
    tools: ["HTML for page structure", "CSS for styling", "JavaScript for interaction", "React for building bigger UIs"],
    paths: "JavaScript can also lead to backend development with Node.js, mobile apps with React Native, desktop apps, browser extensions, and simple games.",
    roadmap: ["Learn HTML and CSS basics.", "Add JavaScript for buttons, menus, and forms.", "Build a personal portfolio or small shopping page.", "Ask yourself: do I enjoy making things look and feel good?"],
    build: "Websites and app screens",
    mainLanguage: "JavaScript",
    appExamples: "Instagram, YouTube, Netflix"
  },
  {
    title: "Backend Development",
    icon: "B",
    category: "Behind the scenes",
    what: "Backend development is about the hidden part of an app that stores data, checks rules, and sends the right information to the screen.",
    where: "It is used when you log in, place an order, save a post, send a message, or pay online.",
    examples: ["Food order tracking", "Login systems", "Online payments", "Saving Instagram likes"],
    tools: ["Python with Django or FastAPI", "JavaScript with Node.js", "Java or Go", "Databases like PostgreSQL"],
    paths: "Python can lead to AI, data science, automation, and backend. JavaScript can lead to frontend, backend, and mobile apps. Go can lead to cloud and DevOps tools.",
    roadmap: ["Learn one language well.", "Understand simple databases.", "Build a notes app that saves data.", "Ask yourself: do I enjoy logic and problem solving?"],
    build: "Servers, APIs, login, data systems",
    mainLanguage: "Python or JavaScript",
    appExamples: "Swiggy, Gmail, Amazon"
  },
  {
    title: "Full Stack Development",
    icon: "S",
    category: "Frontend + backend",
    what: "Full stack development means building both the visible screen and the hidden system behind it.",
    where: "It is useful for building complete websites, startup products, admin dashboards, and personal projects.",
    examples: ["A blog with login", "An online store", "A college event website", "A chat app"],
    tools: ["HTML, CSS, JavaScript", "React", "Node.js or Python", "A database"],
    paths: "JavaScript is especially flexible here because it can build the frontend, backend, mobile apps, and desktop apps.",
    roadmap: ["Learn frontend basics first.", "Learn how data is saved and shown.", "Build a full notes or habit tracker app.", "Ask yourself: do I enjoy seeing the whole product come together?"],
    build: "Complete web apps",
    mainLanguage: "JavaScript",
    appExamples: "Notion, Shopify, Airbnb"
  },
  {
    title: "Machine Learning",
    icon: "M",
    category: "Teaching computers patterns",
    what: "Machine learning is about helping computers learn patterns from examples, like learning to guess what movie you may like.",
    where: "It is used in recommendations, spam filters, face unlock, fraud detection, and voice assistants.",
    examples: ["YouTube recommendations", "Netflix suggestions", "Gmail spam filter", "Phone face unlock"],
    tools: ["Python", "Pandas for data", "Scikit-learn for simple models", "TensorFlow or PyTorch later"],
    paths: "Python also opens paths into backend development, AI engineering, data science, automation, scripting, and research tools.",
    roadmap: ["Learn Python basics.", "Learn simple math and data tables.", "Train a small model to predict something simple.", "Ask yourself: do I enjoy patterns, experiments, and data?"],
    build: "Prediction and recommendation systems",
    mainLanguage: "Python",
    appExamples: "YouTube, Netflix, Gmail"
  },
  {
    title: "AI Engineering",
    icon: "AI",
    category: "Building with smart tools",
    what: "AI engineering is about using AI models to build helpful products, like chatbots, study assistants, or tools that summarize text.",
    where: "It is used in customer support bots, writing tools, coding assistants, image tools, and search helpers.",
    examples: ["ChatGPT-style assistants", "AI note summaries", "AI image generators", "Smart search in apps"],
    tools: ["Python or JavaScript", "AI APIs", "Prompting", "Vector databases later"],
    paths: "Python connects AI with data science, machine learning, automation, and backend. JavaScript connects AI with web apps and chat interfaces.",
    roadmap: ["Learn basic programming first.", "Build a small chatbot using an API.", "Add a feature like summarize, explain, or quiz me.", "Ask yourself: do I enjoy making smart assistants for people?"],
    build: "Chatbots and AI-powered apps",
    mainLanguage: "Python or JavaScript",
    appExamples: "ChatGPT, Grammarly, Canva AI"
  },
  {
    title: "Data Science",
    icon: "D",
    category: "Finding stories in data",
    what: "Data science is about looking at data and finding useful answers, like what customers buy most or why sales changed.",
    where: "It is used in business decisions, sports analysis, health reports, finance, marketing, and product improvement.",
    examples: ["Spotify Wrapped", "Cricket score analysis", "Shopping trends", "Fitness app reports"],
    tools: ["Python", "Pandas", "Jupyter Notebook", "Charts with Matplotlib or Seaborn"],
    paths: "Python can also lead to machine learning, AI engineering, backend, automation, and scientific computing.",
    roadmap: ["Learn Python basics.", "Learn tables, charts, and averages.", "Analyze a small CSV file like movie ratings.", "Ask yourself: do I enjoy asking questions and finding answers with data?"],
    build: "Reports, dashboards, insights",
    mainLanguage: "Python",
    appExamples: "Spotify Wrapped, Google Analytics, Fitbit"
  },
  {
    title: "Android Development",
    icon: "A",
    category: "Apps for Android phones",
    what: "Android development is about building apps for Android phones and tablets.",
    where: "It is used for apps on Samsung, OnePlus, Pixel, Xiaomi, and many other Android devices.",
    examples: ["WhatsApp Android app", "Paytm app", "Zomato app", "Google Maps on Android"],
    tools: ["Kotlin", "Java", "Android Studio", "Jetpack Compose"],
    paths: "Kotlin can also be used for backend development. Java can lead to backend, Android, enterprise apps, and large systems.",
    roadmap: ["Learn basic programming.", "Learn Kotlin basics.", "Build a simple calculator or habit app.", "Ask yourself: do I enjoy making phone apps?"],
    build: "Android mobile apps",
    mainLanguage: "Kotlin",
    appExamples: "WhatsApp, Paytm, Zomato"
  },
  {
    title: "iOS Development",
    icon: "i",
    category: "Apps for iPhone",
    what: "iOS development is about building apps for iPhone, iPad, and Apple Watch.",
    where: "It is used for apps in the Apple App Store, from banking apps to health apps to games.",
    examples: ["iPhone camera apps", "Apple Health", "Instagram on iPhone", "Banking apps on iOS"],
    tools: ["Swift", "SwiftUI", "Xcode", "Apple developer tools"],
    paths: "Swift mainly leads to Apple apps, but it can also be used for some server-side and systems work.",
    roadmap: ["Learn programming basics.", "Learn Swift basics.", "Build a simple to-do or weather screen.", "Ask yourself: do I enjoy polished mobile experiences?"],
    build: "iPhone and iPad apps",
    mainLanguage: "Swift",
    appExamples: "Instagram iOS, Apple Health, Uber"
  },
  {
    title: "DevOps",
    icon: "O",
    category: "Helping software run smoothly",
    what: "DevOps is about helping apps get built, tested, released, and kept running without chaos.",
    where: "It is used whenever a company needs to update apps often and keep them reliable.",
    examples: ["Netflix staying online", "Bank apps updating safely", "Automatic website deployment", "Monitoring app health"],
    tools: ["Linux basics", "GitHub Actions", "Docker", "Python or Go scripts"],
    paths: "Go can lead to cloud tools, backend systems, and DevOps platforms. Python can lead to automation, backend, data, and AI.",
    roadmap: ["Learn Git and Linux basics.", "Learn how websites are deployed.", "Use GitHub Actions for a small project.", "Ask yourself: do I enjoy systems, automation, and reliability?"],
    build: "Deployment and automation systems",
    mainLanguage: "Go or Python",
    appExamples: "Netflix, GitHub, AWS tools"
  },
  {
    title: "Cybersecurity",
    icon: "C",
    category: "Protecting people and systems",
    what: "Cybersecurity is about protecting apps, accounts, networks, and data from attacks and mistakes.",
    where: "It is used in banks, hospitals, social media, government systems, and every company with user data.",
    examples: ["Two-factor login", "Password safety", "Fraud alerts", "Secure online payments"],
    tools: ["Python", "Linux", "Networking basics", "Security tools like Burp Suite later"],
    paths: "Python can help with security scripts, automation, backend, AI, and data analysis. Linux skills also help in DevOps and cloud.",
    roadmap: ["Learn how the internet works at a simple level.", "Learn Python and Linux basics.", "Try beginner security labs legally.", "Ask yourself: do I enjoy puzzles and protecting people?"],
    build: "Security checks and protection systems",
    mainLanguage: "Python",
    appExamples: "Bank apps, Gmail, payment apps"
  },
  {
    title: "Cloud Computing",
    icon: "CL",
    category: "Renting powerful computers online",
    what: "Cloud computing means using computers on the internet to run apps, store files, and handle many users.",
    where: "It is used when apps need to work for people in many cities and countries at the same time.",
    examples: ["Google Drive storage", "Netflix streaming", "Online games", "Food delivery tracking"],
    tools: ["AWS, Azure, or Google Cloud", "Linux", "Docker", "Go or Python"],
    paths: "Go is common in cloud tools and backend systems. Python is useful for automation, AI, data, and backend.",
    roadmap: ["Learn what servers are.", "Deploy a simple website.", "Try cloud storage and basic databases.", "Ask yourself: do I enjoy making apps available to the world?"],
    build: "Online infrastructure and storage",
    mainLanguage: "Go or Python",
    appExamples: "Google Drive, Netflix, Zoom"
  },
  {
    title: "Game Development",
    icon: "G",
    category: "Playable worlds",
    what: "Game development is about building games: the characters, rules, movement, score, sound, and fun.",
    where: "It is used in mobile games, PC games, console games, learning games, and simulations.",
    examples: ["Subway Surfers", "Minecraft", "Among Us", "Chess apps"],
    tools: ["C# with Unity", "C++ with Unreal", "JavaScript for browser games", "Godot with GDScript"],
    paths: "C# can also lead to backend and Windows apps. JavaScript can lead to web, backend, mobile, and browser games.",
    roadmap: ["Start with a simple 2D game.", "Learn movement, score, and collision.", "Build Pong or a quiz game.", "Ask yourself: do I enjoy rules, animation, and playful feedback?"],
    build: "2D and 3D games",
    mainLanguage: "C# or JavaScript",
    appExamples: "Minecraft, Subway Surfers, Among Us"
  },
  {
    title: "Blockchain",
    icon: "BC",
    category: "Shared digital records",
    what: "Blockchain is about building systems where many computers share and agree on records, often without one central owner.",
    where: "It is used in cryptocurrencies, digital ownership, some finance apps, and experiments with transparent records.",
    examples: ["Bitcoin", "NFT marketplaces", "Crypto wallets", "Smart contracts"],
    tools: ["Solidity", "JavaScript", "Rust", "Blockchain wallets and test networks"],
    paths: "JavaScript also opens frontend, backend, mobile, and full stack. Rust can lead to systems programming, backend, blockchain, and performance-heavy tools.",
    roadmap: ["Learn normal web development first.", "Understand wallets and transactions simply.", "Build a tiny smart contract on a test network.", "Ask yourself: do I enjoy finance, trust, and new internet ideas?"],
    build: "Smart contracts and crypto apps",
    mainLanguage: "Solidity",
    appExamples: "Bitcoin, MetaMask, OpenSea"
  },
  {
    title: "UI/UX Design",
    icon: "U",
    category: "Making apps easy and pleasant",
    what: "UI/UX design is about deciding how an app should look, feel, and guide people so it is easy to use.",
    where: "It is used before and during app building, especially for websites, mobile apps, dashboards, and products.",
    examples: ["Clean checkout screens", "Easy app onboarding", "Readable dashboards", "Beautiful music app layouts"],
    tools: ["Figma", "Design thinking", "User research", "HTML and CSS can help"],
    paths: "HTML and CSS can lead toward frontend development. Design skills can lead to product design, UX research, brand design, and no-code product building.",
    roadmap: ["Learn layout, color, spacing, and typography.", "Copy simple app screens for practice.", "Design a food ordering flow in Figma.", "Ask yourself: do I enjoy making things simple for people?"],
    build: "App layouts and user flows",
    mainLanguage: "No code first",
    appExamples: "Apple apps, Spotify, Airbnb"
  },
  {
    title: "Embedded Systems",
    icon: "E",
    category: "Code inside devices",
    what: "Embedded systems means writing code that runs inside physical devices, not just phones or laptops.",
    where: "It is used in cars, washing machines, watches, cameras, medical devices, and smart home products.",
    examples: ["Smart watches", "Car sensors", "TV remotes", "Smart bulbs"],
    tools: ["C", "C++", "Arduino", "Microcontrollers"],
    paths: "C and C++ can lead to game engines, operating systems, robotics, high-performance apps, and hardware programming.",
    roadmap: ["Learn basic electronics ideas.", "Try Arduino or a simulator.", "Make an LED blink or sensor project.", "Ask yourself: do I enjoy mixing code with real-world devices?"],
    build: "Smart devices and hardware projects",
    mainLanguage: "C or C++",
    appExamples: "Smartwatch, car systems, smart bulbs"
  },
  {
    title: "Automation",
    icon: "AU",
    category: "Let computers do boring work",
    what: "Automation is about writing small programs that do repeated tasks for you.",
    where: "It is used for renaming files, filling reports, scraping simple data, sending reminders, and connecting tools.",
    examples: ["Auto-organizing downloads", "Email reports", "Excel cleanup", "Price tracking"],
    tools: ["Python", "Shell basics", "APIs", "Spreadsheets"],
    paths: "Python automation can grow into backend, data science, AI engineering, testing, cybersecurity, and DevOps.",
    roadmap: ["Learn Python basics.", "Automate one boring task from your life.", "Make a script that organizes files.", "Ask yourself: do I enjoy saving time with small tools?"],
    build: "Scripts and helper tools",
    mainLanguage: "Python",
    appExamples: "Excel tasks, Gmail filters, file organizers"
  },
  {
    title: "Software Testing",
    icon: "T",
    category: "Checking if apps work",
    what: "Software testing is about checking apps carefully so users do not face broken buttons, wrong totals, or crashes.",
    where: "It is used in every serious app before new features are released.",
    examples: ["Testing login", "Checking checkout totals", "Finding app crashes", "Testing forms"],
    tools: ["JavaScript testing tools", "Python testing tools", "Playwright", "Manual testing skills"],
    paths: "JavaScript testing can lead to frontend and backend. Python testing can lead to automation, backend, data, and DevOps.",
    roadmap: ["Use apps like a detective.", "Learn basic testing ideas.", "Write tests for a tiny website.", "Ask yourself: do I enjoy finding problems before users do?"],
    build: "Test plans and automated checks",
    mainLanguage: "JavaScript or Python",
    appExamples: "Bank apps, ecommerce, ride apps"
  },
  {
    title: "Database Engineering",
    icon: "DB",
    category: "Organizing app data",
    what: "Database engineering is about storing information neatly so apps can find it quickly and safely.",
    where: "It is used when apps save users, orders, messages, payments, products, or search history.",
    examples: ["Amazon product inventory", "WhatsApp message storage", "Bank transaction history", "Library book records"],
    tools: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Python or JavaScript"],
    paths: "SQL helps in backend, data science, analytics, business intelligence, and cloud data roles. Python or JavaScript can connect databases to real apps.",
    roadmap: ["Learn what tables and rows are.", "Write simple SQL queries.", "Build a small student records app.", "Ask yourself: do I enjoy organizing information clearly?"],
    build: "Data storage and query systems",
    mainLanguage: "SQL",
    appExamples: "Amazon, WhatsApp, banking apps"
  },
  {
    title: "Robotics",
    icon: "RB",
    category: "Code that moves machines",
    what: "Robotics is about writing software that helps machines sense, decide, and move in the real world.",
    where: "It is used in factories, delivery robots, drones, medical machines, and student robotics competitions.",
    examples: ["Drones", "Robot vacuum cleaners", "Factory arms", "Self-driving car experiments"],
    tools: ["Python", "C++", "Arduino", "ROS later", "Sensors and motors"],
    paths: "Python leads to automation, AI, data, and robotics. C++ leads to robotics, embedded systems, games, and high-performance software.",
    roadmap: ["Learn basic Python or C++.", "Try a simple Arduino or robot simulator.", "Make a robot avoid obstacles.", "Ask yourself: do I enjoy code that affects the physical world?"],
    build: "Robots, drones, and smart machines",
    mainLanguage: "Python or C++",
    appExamples: "Drones, robot vacuums, warehouse robots"
  },
  {
    title: "AR/VR Development",
    icon: "XR",
    category: "Digital worlds around you",
    what: "AR and VR development is about building experiences you can see through headsets, phones, or glasses.",
    where: "It is used in games, virtual classrooms, training simulations, shopping previews, and design walkthroughs.",
    examples: ["VR games", "IKEA furniture preview", "Snapchat filters", "Virtual museum tours"],
    tools: ["Unity", "C#", "Unreal Engine", "3D basics", "ARKit or ARCore later"],
    paths: "C# can lead to Unity games, AR/VR apps, backend, and Windows apps. 3D skills can also lead to game art and product visualization.",
    roadmap: ["Learn simple 3D ideas.", "Build a tiny Unity scene.", "Make an object appear in AR.", "Ask yourself: do I enjoy immersive visual experiences?"],
    build: "AR filters and VR experiences",
    mainLanguage: "C#",
    appExamples: "Snapchat filters, VR games, IKEA Place"
  },
  {
    title: "Technical Writing",
    icon: "TW",
    category: "Explaining technology clearly",
    what: "Technical writing is about explaining software, tools, and steps so other people can understand and use them.",
    where: "It is used in documentation, tutorials, help centers, API guides, and product manuals.",
    examples: ["Help pages in apps", "Setup guides", "API documentation", "Beginner tutorials"],
    tools: ["Markdown", "Git", "Basic HTML", "Screenshots", "Clear writing"],
    paths: "Markdown and basic web skills can lead to documentation engineering, developer relations, content design, and frontend basics.",
    roadmap: ["Learn Markdown.", "Write a simple guide for a project.", "Explain one coding concept in your own words.", "Ask yourself: do I enjoy making hard things feel easy?"],
    build: "Docs, tutorials, and guides",
    mainLanguage: "Markdown",
    appExamples: "GitHub docs, Notion guides, help centers"
  },
  {
    title: "Product Management",
    icon: "PM",
    category: "Choosing what to build",
    what: "Product management is about understanding users, choosing useful features, and helping a team build the right thing.",
    where: "It is used in startups, app companies, SaaS products, ecommerce, fintech, and almost every software team.",
    examples: ["Planning a new app feature", "Improving checkout flow", "Prioritizing bug fixes", "Studying user feedback"],
    tools: ["User research", "Roadmaps", "Analytics basics", "Figma", "No-code tools"],
    paths: "Basic coding, data, and design knowledge can lead to product management, startup building, UX strategy, and growth roles.",
    roadmap: ["Study apps you use daily.", "Write why a feature is useful.", "Design a tiny product plan.", "Ask yourself: do I enjoy users, decisions, and teamwork?"],
    build: "Feature plans and product roadmaps",
    mainLanguage: "No code first",
    appExamples: "Notion, Swiggy, Spotify"
  }
];

const languages = [
  {
    name: "Python",
    icon: "Py",
    logo: "python/python-original.svg",
    note: "Beginner-friendly and useful in many paths.",
    accent: "#2e9d63",
    paths: ["Backend", "Machine Learning", "AI", "Data Science", "Automation", "Cybersecurity"]
  },
  {
    name: "JavaScript",
    icon: "JS",
    logo: "javascript/javascript-original.svg",
    note: "The main language of the web.",
    accent: "#f2c94c",
    paths: ["Frontend", "Backend", "Full Stack", "Mobile apps", "Browser games", "Desktop apps"]
  },
  {
    name: "TypeScript",
    icon: "TS",
    logo: "typescript/typescript-original.svg",
    note: "JavaScript with extra safety for bigger apps.",
    accent: "#3178c6",
    paths: ["Frontend", "Backend", "Full Stack", "Large web apps", "AI interfaces"]
  },
  {
    name: "Java",
    icon: "Ja",
    logo: "java/java-original.svg",
    note: "Common in Android and large company systems.",
    accent: "#d63384",
    paths: ["Android", "Backend", "Enterprise apps", "Banking systems", "Large systems"]
  },
  {
    name: "Kotlin",
    icon: "Kt",
    logo: "kotlin/kotlin-original.svg",
    note: "A modern favorite for Android apps.",
    accent: "#7f52ff",
    paths: ["Android", "Backend", "Mobile apps", "Cross-platform experiments"]
  },
  {
    name: "Go",
    icon: "Go",
    logo: "go/go-original-wordmark.svg",
    note: "Simple, fast, and loved for cloud tools.",
    accent: "#0071e3",
    paths: ["Backend", "Cloud", "DevOps tools", "Infrastructure", "APIs"]
  },
  {
    name: "Swift",
    icon: "Sw",
    logo: "swift/swift-original.svg",
    note: "The friendly route into Apple apps.",
    accent: "#ff8a00",
    paths: ["iOS", "iPadOS", "Apple Watch", "macOS apps"]
  },
  {
    name: "C#",
    icon: "C#",
    logo: "csharp/csharp-original.svg",
    note: "Great for Unity games and some backend work.",
    accent: "#7c3aed",
    paths: ["Game Dev", "Unity", "Backend", "Windows apps"]
  },
  {
    name: "C/C++",
    icon: "C++",
    logo: "cplusplus/cplusplus-original.svg",
    note: "Closer to hardware and performance.",
    accent: "#52525b",
    paths: ["Embedded", "Game engines", "Robotics", "Operating systems", "Performance apps"]
  },
  {
    name: "SQL",
    icon: "SQL",
    logo: "postgresql/postgresql-original.svg",
    note: "The language for asking databases questions.",
    accent: "#2563eb",
    paths: ["Backend", "Data Science", "Analytics", "Databases", "Business intelligence"]
  },
  {
    name: "Rust",
    icon: "Rs",
    logo: "rust/rust-original.svg",
    note: "Used when speed and safety both matter.",
    accent: "#b45309",
    paths: ["Blockchain", "Systems", "Backend", "Cloud tools", "Performance apps"]
  },
  {
    name: "HTML/CSS",
    icon: "HC",
    logo: ["html5/html5-original.svg", "css3/css3-original.svg"],
    note: "The starting point for beautiful web pages.",
    accent: "#e34f26",
    paths: ["Frontend", "UI implementation", "Landing pages", "Email templates", "Portfolio sites"]
  },
  {
    name: "Dart",
    icon: "Dt",
    logo: "dart/dart-original.svg",
    note: "Used with Flutter for smooth mobile apps.",
    accent: "#0175c2",
    paths: ["Android", "iOS", "Cross-platform apps", "Desktop apps"]
  },
  {
    name: "Solidity",
    icon: "Sol",
    logo: "solidity/solidity-original.svg",
    note: "Used for smart contracts in blockchain.",
    accent: "#111827",
    paths: ["Blockchain", "Smart contracts", "Crypto apps", "Web3 experiments"]
  }
];

const domainVisuals = {
  "Frontend Development": { label: "UI", accent: "#0071e3" },
  "Backend Development": { label: "API", accent: "#2e9d63" },
  "Full Stack Development": { label: "FS", accent: "#7c3aed" },
  "Machine Learning": { label: "ML", accent: "#d97706" },
  "AI Engineering": { label: "AI", accent: "#db2777" },
  "Data Science": { label: "DS", accent: "#0891b2" },
  "Android Development": { label: "And", accent: "#3ddc84" },
  "iOS Development": { label: "iOS", accent: "#111827" },
  DevOps: { label: "Ops", accent: "#f97316" },
  Cybersecurity: { label: "Sec", accent: "#dc2626" },
  "Cloud Computing": { label: "CL", accent: "#0284c7" },
  "Game Development": { label: "Game", accent: "#9333ea" },
  Blockchain: { label: "BC", accent: "#0f766e" },
  "UI/UX Design": { label: "UX", accent: "#e11d48" },
  "Embedded Systems": { label: "Chip", accent: "#475569" },
  Automation: { label: "Auto", accent: "#16a34a" },
  "Software Testing": { label: "QA", accent: "#ca8a04" },
  "Database Engineering": { label: "DB", accent: "#2563eb" },
  Robotics: { label: "Bot", accent: "#64748b" },
  "AR/VR Development": { label: "XR", accent: "#8b5cf6" },
  "Technical Writing": { label: "Doc", accent: "#0d9488" },
  "Product Management": { label: "PM", accent: "#f43f5e" }
};

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

function renderLanguageLogo(language) {
  const logos = Array.isArray(language.logo) ? language.logo : [language.logo];
  const logoClass = logos.length > 1 ? " duo" : "";
  const images = logos
    .filter(Boolean)
    .map((logo) => `<img src="${deviconBase}${logo}" alt="" loading="lazy" onerror="this.remove()">`)
    .join("");

  return `<span class="language-icon${logoClass}" aria-hidden="true">
    ${images}
    <span class="language-fallback">${language.icon}</span>
  </span>`;
}

const domainButtons = document.querySelector("#domainButtons");
const search = document.querySelector("#domainSearch");
const detail = {
  icon: document.querySelector("#domainIcon"),
  category: document.querySelector("#domainCategory"),
  title: document.querySelector("#domainTitle"),
  what: document.querySelector("#domainWhat"),
  where: document.querySelector("#domainWhere"),
  examples: document.querySelector("#domainExamples"),
  tools: document.querySelector("#domainTools"),
  paths: document.querySelector("#domainLanguagePaths"),
  roadmap: document.querySelector("#domainRoadmap")
};

function makeList(items, ordered = false) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderButtons(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const visibleDomains = domains.filter((domain) => {
    return [domain.title, domain.category, domain.mainLanguage, domain.appExamples]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });

  domainButtons.innerHTML = visibleDomains
    .map((domain) => {
      const active = domain.title === currentDomain.title ? " active" : "";
      const visual = domainVisuals[domain.title] || { label: domain.icon, accent: "#1d1d1f" };
      return `<button class="domain-button${active}" type="button" data-domain="${domain.title}">
        <span class="tech-icon mini" style="--icon-color: ${visual.accent}">${visual.label}</span>
        <span>${domain.title}</span>
      </button>`;
    })
    .join("");
}

let currentDomain = domains[0];

function selectDomain(title) {
  currentDomain = domains.find((domain) => domain.title === title) || domains[0];
  const visual = domainVisuals[currentDomain.title] || { label: currentDomain.icon, accent: "#1d1d1f" };
  detail.icon.textContent = visual.label;
  detail.icon.style.setProperty("--icon-color", visual.accent);
  detail.category.textContent = currentDomain.category;
  detail.title.textContent = currentDomain.title;
  detail.what.textContent = currentDomain.what;
  detail.where.textContent = currentDomain.where;
  detail.examples.innerHTML = makeList(currentDomain.examples);
  detail.tools.innerHTML = makeList(currentDomain.tools);
  detail.paths.textContent = currentDomain.paths;
  detail.roadmap.innerHTML = makeList(currentDomain.roadmap, true);
  renderButtons(search.value);
}

function renderLanguages() {
  document.querySelector("#languageCards").innerHTML = languages
    .map((language) => `<article class="language-card" style="--accent: ${language.accent}">
      <div class="language-topline">
        ${renderLanguageLogo(language)}
        <p class="eyebrow">Language path</p>
      </div>
      <h3>${language.name}</h3>
      <p>${language.note}</p>
      <div class="path-list">
        ${language.paths.map((path) => `<span class="path-pill">${path}</span>`).join("")}
      </div>
    </article>`)
    .join("");
}

function renderComparison() {
  document.querySelector("#comparisonRows").innerHTML = domains
    .map((domain) => `<tr>
      <td><strong>${domain.title}</strong></td>
      <td>${domain.build}</td>
      <td>${domain.mainLanguage}</td>
      <td>${domain.appExamples}</td>
    </tr>`)
    .join("");
}

domainButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-domain]");
  if (!button) return;
  selectDomain(button.dataset.domain);
});

search.addEventListener("input", () => renderButtons(search.value));

const choices = {
  python: "Start with Python, build tiny tools, then try data, backend, AI, or automation.",
  javascript: "Start with HTML, CSS, and JavaScript, then build websites, full stack apps, or mobile apps.",
  design: "Start with Figma and simple UI practice, then try UX design or add HTML and CSS for frontend."
};

document.querySelector(".starter-choice").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-choice]");
  if (!button) return;
  document.querySelectorAll(".choice").forEach((choice) => choice.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("#choiceResult").textContent = choices[button.dataset.choice];
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

renderLanguages();
renderComparison();
selectDomain(currentDomain.title);
