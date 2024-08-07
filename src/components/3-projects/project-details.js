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

const FeaturedProjectData = {
    projects: [],
    activeIndex: 1
};

const FPElementControls = {
    nextBtn: document.querySelector('[data-fp-controls="previous"]'),
    prevBtn: document.querySelector('[data-fp-controls="next"]')
}

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

    PREVIEW_ELEMENT.previewImage.innerHTML = `
        <img src="${thumbnailPath}" alt="project-preview-image">
    `;

    // console.log(project);

    PREVIEW_ELEMENT.name.innerText = project.title;
    PREVIEW_ELEMENT.category.innerText = project.category;
    PREVIEW_ELEMENT.techStack.innerText = project["tech-stack"];
    PREVIEW_ELEMENT.about.innerText = project.description;
    PREVIEW_ELEMENT.links.innerHTML = `
        <li>
            <a href="${project.links.repo}" target="_blank" rel="noopener noreferrer">
                <!-- icon button -->
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">G</button>
                    <button class="">Repo</button>
                </div>
            </a>
        </li>
        <li class='hidden'>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">D</button>
                    <button class="">Demo</button>
                </div>
            </a>
        </li>
    `;
}

// ====================== Event Listeners =============================================

document.addEventListener('DOMContentLoaded', () => {

    // Fetch all and filter featured projects from json file
    // dependancy -> not using import due to hosting solution.
    fetchAndParseJSON('./src/data/projects.json')
        .then(allProjects => {
            // console.log(allProjects)
            return allProjects.filter(project => project.featured);
        })
        .then(filteredProjects => {

            // presistFeaturedProjects(filteredProjects);
            FeaturedProjectData.projects = filteredProjects
            insertFeaturedProject("./src/resource/projects/", FeaturedProjectData.projects[FeaturedProjectData.activeIndex]);

            // console.log(retrieveFeatureProjects());
        })
        .catch(error => console.error('problem with templating', error))
    }
)

FPElementControls.nextBtn.addEventListener("click", () => {

    // if featured project list has next, set next to featured, otherwise reset to first element.
    FeaturedProjectData.projects[FeaturedProjectData.activeIndex + 1] !== undefined ? FeaturedProjectData.activeIndex++ : FeaturedProjectData.activeIndex = 0;
    console.log(FeaturedProjectData.projects[FeaturedProjectData.activeIndex]);

    // insertFeaturedProject(null, null);
    insertFeaturedProject("./src/resource/projects/", FeaturedProjectData.projects[FeaturedProjectData.activeIndex]);
    
})

FPElementControls.prevBtn.addEventListener("click", () => {
    
    // if featured project list has prev, set prev to featured, otherwise reset to last element.
    FeaturedProjectData.projects[FeaturedProjectData.activeIndex - 1] !== undefined ? FeaturedProjectData.activeIndex-- : FeaturedProjectData.activeIndex = FeaturedProjectData.projects.length - 1;
    console.log(FeaturedProjectData.projects[FeaturedProjectData.activeIndex]);
    
    // insertFeaturedProject(null, null);
    insertFeaturedProject("./src/resource/projects/", FeaturedProjectData.projects[FeaturedProjectData.activeIndex]);
    
})