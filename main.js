import { projects } from "./projectsList.js";
const outerContainer = document.querySelector(".outer-container");

const projectCards = projects.map((project) => {
  let demoButton = "";
  let codeButton = "";

  project.demoLink
    ? (demoButton = `<a href="${project.demoLink}" class="btn btn-success" target="_blank">See Demo</a>`)
    : "";

  project.codeLink
    ? (codeButton = `<a href="${project.codeLink}" class="btn btn-warning" target="_blank">See Code</a>`)
    : "";

  return `<div class="card inner-container" style="width: 18rem">
      <img class="card-img-top" src="${project.image}" alt="${project.title} Image" />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div class="mt-auto">
        ${demoButton}
        ${codeButton}
        </div>
        
      </div>
    </div>`;
});

outerContainer.innerHTML = projectCards.join("");
