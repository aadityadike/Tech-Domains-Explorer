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
  }
];

const languages = [
  {
    name: "Python",
    note: "Beginner-friendly and useful in many paths.",
    accent: "#2e9d63",
    paths: ["Backend", "Machine Learning", "AI", "Data Science", "Automation", "Cybersecurity"]
  },
  {
    name: "JavaScript",
    note: "The main language of the web.",
    accent: "#f2c94c",
    paths: ["Frontend", "Backend", "Full Stack", "Mobile apps", "Browser games", "Desktop apps"]
  },
  {
    name: "Java",
    note: "Common in Android and large company systems.",
    accent: "#d63384",
    paths: ["Android", "Backend", "Enterprise apps", "Banking systems", "Large systems"]
  },
  {
    name: "Go",
    note: "Simple, fast, and loved for cloud tools.",
    accent: "#0071e3",
    paths: ["Backend", "Cloud", "DevOps tools", "Infrastructure", "APIs"]
  },
  {
    name: "Swift",
    note: "The friendly route into Apple apps.",
    accent: "#ff8a00",
    paths: ["iOS", "iPadOS", "Apple Watch", "macOS apps"]
  },
  {
    name: "C#",
    note: "Great for Unity games and some backend work.",
    accent: "#7c3aed",
    paths: ["Game Dev", "Unity", "Backend", "Windows apps"]
  },
  {
    name: "C/C++",
    note: "Closer to hardware and performance.",
    accent: "#52525b",
    paths: ["Embedded", "Game engines", "Robotics", "Operating systems", "Performance apps"]
  },
  {
    name: "Solidity",
    note: "Used for smart contracts in blockchain.",
    accent: "#111827",
    paths: ["Blockchain", "Smart contracts", "Crypto apps", "Web3 experiments"]
  }
];

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
      return `<button class="domain-button${active}" type="button" data-domain="${domain.title}">
        <span class="brand-mark">${domain.icon}</span>
        <span>${domain.title}</span>
      </button>`;
    })
    .join("");
}

let currentDomain = domains[0];

function selectDomain(title) {
  currentDomain = domains.find((domain) => domain.title === title) || domains[0];
  detail.icon.textContent = currentDomain.icon;
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
      <p class="eyebrow">Language path</p>
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
