// =============================== Data and Declarations ====================

// import { fetchAndParseJSON } from "../../utils/jsonFetching.js";

// All DOM references for featured projects
// const PREVIEW_ELEMENT = {
//     previewImage: document.querySelector('[data-fp-label="preview-image"]'),
//     name: document.querySelector('[data-fp-label="name"]'),
//     category: document.querySelector('[data-fp-label="category"]'),
//     techStack: document.querySelector('[data-fp-label="tech-stack"]'),
//     about: document.querySelector('[data-fp-label="about"]'),
//     links: document.querySelector('[data-fp-label="links"]')
// }

// ============================== Functions ===========================================


const insertFeaturedProject = (dataFilePath, project) => {

    // All DOM references for featured projects
    const PREVIEW_ELEMENT = {
        previewImage: document.querySelector('[data-fp-label="preview-image"]'),
        name: document.querySelector('[data-fp-label="name"]'),
        category: document.querySelector('[data-fp-label="category"]'),
        techStack: document.querySelector('[data-fp-label="tech-stack"]'),
        about: document.querySelector('[data-fp-label="about"]'),
        links: document.querySelector('[data-fp-label="links"]')
    }

    const thumbnailPath = dataFilePath + project.thumbnail;

    PREVIEW_ELEMENT.previewImage.innerHTML += `
        <img src="${thumbnailPath}" alt="project-preview-image">
    `;

    // console.log(project);

    PREVIEW_ELEMENT.name.innerText = project.title;
    PREVIEW_ELEMENT.category.innerText = project.category;
    PREVIEW_ELEMENT.techStack.innerText = project["tech-stack"];
    PREVIEW_ELEMENT.about.innerText = project.description;
    PREVIEW_ELEMENT.links.innerHTML += `
        <li>
            <a href="https://github.com/JustinScottJenecke" target="_blank" rel="noopener noreferrer">
                <!-- icon button -->
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">G</button>
                    <button class="">Repo</button>
                </div>
            </a>
        </li>
        <li>
            <a href="https://github.com/JustinScottJenecke" target="_blank" rel="noopener noreferrer">
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">D</button>
                    <button class="">Demo</button>
                </div>
            </a>
        </li>
    `;
}

// ====================== Event Listeners =============================================

