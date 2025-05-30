const projects = [
  {
    title: "JIT compiler in Haskell and C",
    description: 
`
I've been curious about runtimes for a while now - how the JVM/similar virtual machine runtimes work, multithreading, event loops, async and coroutines, garbage collection. This project is to learn about those.

This is my second attempt - in my first attempt I bit off a bit too much and attempted it in C++ with LLVM, though I didn't have much experience with low-level programming. This time I started with Haskell (I love Haskell’s syntax and a functional language is a little nicer for a recursive parsing) compiling into bytecode for a C-based interpreter that manually manages memory.`,
    tags: ["Haskell", "C", "Compilers"],
    links: [
      {
        href: "https://github.com/wowthedoge/haskellpiler",
        icon: "fa-github",
        label: "GitHub",
      },
    ],
  },
  {
    title: "Tiny Droids",
    description: "Arcade Mobile Game",
    tags: ["Unity", "C#", "Android"],
    links: [
      { href: "https://github.com", icon: "fa-github", label: "GitHub" },
      { href: "https://example.com", icon: "fa-globe", label: "Website" },
    ],
  },
];

function renderProjectsPage() {
  const projectsTag = document.getElementById("projectsTag");
  const aboutTag = document.getElementById("aboutTag");
  const thoughtsTag = document.getElementById("thoughtsTag");
  projectsTag.classList.add("bg-accent");
  aboutTag.classList.remove("bg-accent");
  thoughtsTag.classList.remove("bg-accent");

  const mainContainer = document.querySelector("main");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // Header
  const header = document.createElement("div");
  header.className = "font-mono";

  const title = document.createElement("h1");
  title.className = "text-3xl font-bold";
  title.textContent = "Projects";

  // const description = document.createElement("p");
  // description.className = "mt-4";
  // description.textContent =
  //   "I like doing projects I like doing projects I like doing projects I like doing projects";

  const divider = document.createElement("hr");
  divider.className = "my-8 border-white";

  header.appendChild(title);
  // header.appendChild(description);
  header.appendChild(divider);

  mainContainer.appendChild(header);

  // Project items
  const projectItems = document.createElement("div");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "font-inter";

    const title = document.createElement("h2");
    title.className = "font-bold text-xl mb-2";
    title.textContent = project.title;

    const description = document.createElement("pre");
    description.className = "text-md mb-3 whitespace-pre-wrap font-inter";
    description.textContent = project.description;

    const linksDiv = document.createElement("div");
    linksDiv.className = "flex text-white gap-2 text-2xl mb-4";

    project.links.forEach((link) => {
      const linkAnchor = document.createElement("a");
      linkAnchor.href = link.href;
      linkAnchor.setAttribute("aria-label", link.label);

      const icon = document.createElement("i");
      icon.className = `fa ${link.icon}`;
      linkAnchor.appendChild(icon);

      linksDiv.appendChild(linkAnchor);
    });

    const tagsDiv = document.createElement("div");
    tagsDiv.className = "flex gap-2";

    project.tags.forEach((tag) => {
      const tagDiv = document.createElement("div");
      tagDiv.className = "rounded-lg bg-light px-4 text-dark text-sm";
      tagDiv.textContent = tag;
      tagsDiv.appendChild(tagDiv);
    });

    const divider = document.createElement("hr");
    divider.className = "my-8 border-white";

    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    projectDiv.appendChild(linksDiv);
    projectDiv.appendChild(tagsDiv);
    projectDiv.appendChild(divider);

    projectItems.appendChild(projectDiv);
  });

  mainContainer.appendChild(projectItems);
}

addEventListener("load", () => {
  if (location.hash === "#projects") {
    renderProjectsPage();
  }
});
