thoughts = [

]

function renderThoughtsPage() {
  const projectsTag = document.getElementById("projectsTag");
  const aboutTag = document.getElementById("aboutTag");
  const thoughtsTag = document.getElementById("thoughtsTag");
  projectsTag.classList.remove("bg-accent");
  aboutTag.classList.remove("bg-accent");
  thoughtsTag.classList.add("bg-accent");

  const mainContainer = document.querySelector("main");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // Header
  const header = document.createElement("div");
  header.className = "font-mono";
  
  const title = document.createElement("h1");
  title.className = "text-3xl font-bold";
  title.textContent = "Thoughts";

  const description = document.createElement("p");
  description.className = "mt-4";
  description.textContent = "I think therefore I am";

  const divider = document.createElement("hr");
  divider.className = "my-8 border-white";

  header.appendChild(title);
  header.appendChild(description);
  header.appendChild(divider);

  mainContainer.appendChild(header);

  (thought) => {
    const thoughtDiv = document.createElement("div");
    thoughtDiv.className = "font-inter";

    const title = document.createElement("h2");
    title.className = "font-bold text-xl mb-2";
    title.textContent = thought.title;

    const description = document.createElement("p");
    description.className = "text-md mb-3";
    description.textContent = thought.description;

    const linksDiv = document.createElement("div");
    linksDiv.className = "flex text-white gap-2 text-2xl mb-4";

    thought.links.forEach((link) => {
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

    thought.tags.forEach((tag) => {
      const tagDiv = document.createElement("div");
      tagDiv.className = "rounded-lg bg-light px-4 text-dark text-sm";
      tagDiv.textContent = tag;
      tagsDiv.appendChild(tagDiv);
    });

    const divider = document.createElement("hr");
    divider.className = "my-8 border-white";

    thoughtDiv.appendChild(title);
    thoughtDiv.appendChild(description);
    thoughtDiv.appendChild(linksDiv);
    thoughtDiv.appendChild(tagsDiv);
    thoughtDiv.appendChild(divider);

    thoughtItems.appendChild(thoughtDiv);
  }
}


addEventListener("load", () => {
  if (location.hash === "#thoughts") {
    renderThoughtsPage();
  }
})
