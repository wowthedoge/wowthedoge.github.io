const aboutText = `
Hi! I am a software engineer, currently based in Malaysia. Welcome to my portfolio site.

I’m currently working in Ideagen, on a secure FedRAMP-authorized document collaboration platform used by US governments, accounting firms like EY and Baker Tilly, banks, and other large corporations. I’ve had the opportunity to work on the full software stack, from frontend to backend to cloud and devops and security.

In 2018, I wrote my first Hello World when considering computer science as a major. My first few personal projects were random apps and games that I did for fun, but it wasn’t until I stumbled upon ByteByteGo, open source, cloud-native projects and ThePrimeagen that I really got into the world of software engineering. I enjoy the deep technical complexity, learning how things work under the hood and the challenges of optimizing, automating and securing systems.

Apart from tech, I like literature, art, and being in nature. My dream is to work on interesting projects during the weekdays, and hike in the mountains during the weekends.
`

const currentWorkText = `
- At work: Implementing the oAuth DPoP enhancement and token exchange to prevent token replay attacks
- Building a JIT compiler with Haskell and C
- oAuth from scratch in .NET
`

const futurePlansText = `
- Contributing to the TypeScript MCP SDK. I believe the MCP will be huge in the near future, and there will be endpoints to connect LLMs to the software infrastructure and development lifecycle in many different areas, such as documentation, authorization policies, schema management, etc. I'm particularly interested in how this can be done securely. 
`

function replaceTextWithLink(text) {
  const replaceWith = {
    "ByteByteGo": "https://www.linkedin.com/company/bytebytego/posts/?feedView=all",
    "ThePrimeagen": "https://www.youtube.com/c/theprimeagen",
    "Ideagen": "https://www.ideagen.com",
    "JIT compiler with Haskell and C": "https://github.com/wowthedoge/Haskellpiler",
    "TypeScript MCP SDK": "https://github.com/modelcontextprotocol/typescript-sdk",
    "oAuth DPoP enhancement": "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop",
    "token exchange": "https://datatracker.ietf.org/doc/html/rfc8693",
  };

  Object.keys(replaceWith).forEach(key => {
    text = text.replace(
      key,
      `<a href="${replaceWith[key]}" target="_blank" class="cursor-pointer underline hover:text-light duration-300">${key}</a>`
    );
  });

  return text;
}

function renderAboutPage() {
  const projectsTag = document.getElementById("projectsTag");
  const aboutTag = document.getElementById("aboutTag");
  const thoughtsTag = document.getElementById("thoughtsTag");
  projectsTag.classList.remove("bg-accent");
  aboutTag.classList.add("bg-accent");
  thoughtsTag.classList.remove("bg-accent");

  const mainContainer = document.querySelector("main");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // Main content
  const content = document.createElement("div");
  content.className = "font-mono";

  const title = document.createElement("h1");
  title.className = "text-3xl font-bold";
  title.textContent = "About";

  const description = document.createElement("pre");
  description.className = "mt-4 font-inter whitespace-pre-wrap text-lg";
  description.innerHTML = replaceTextWithLink(aboutText);

  const divider = document.createElement("hr");
  divider.className = "my-8 border-white";

  content.appendChild(title);
  content.appendChild(description);

  mainContainer.appendChild(content);

  // Current Work
  const currentWorkSection = document.createElement("div");

  const currentWorkHeader = document.createElement("h3");
  currentWorkHeader.className = "text-2xl font-bold mt-10";
  currentWorkHeader.textContent = "📝 What I'm currently working on (May 10, 2025):";

  const currentWorkContent = document.createElement("pre");
  currentWorkContent.className = "text-lg whitespace-pre-wrap font-inter";
  currentWorkContent.innerHTML = replaceTextWithLink(currentWorkText)

  currentWorkSection.appendChild(currentWorkHeader);
  currentWorkSection.appendChild(currentWorkContent);

  mainContainer.appendChild(currentWorkSection);

  // Future plans
  const futurePlansSection = document.createElement("div");

  const futurePlansHeader = document.createElement("h3");
  futurePlansHeader.className = "text-2xl font-bold mt-6";
  futurePlansHeader.textContent = "🔮 Future plans:";

  const futurePlansContent = document.createElement("pre");
  futurePlansContent.className = "text-lg whitespace-pre-wrap font-inter";
  futurePlansContent.innerHTML = replaceTextWithLink(futurePlansText)

  futurePlansSection.appendChild(futurePlansHeader);
  futurePlansSection.appendChild(futurePlansContent);

  mainContainer.appendChild(futurePlansSection);
}

addEventListener("load", () => {
  if (!location.hash) {
    location.hash = "#about"
  }

  if (location.hash === "#about") {
    renderAboutPage();
  } 
});

