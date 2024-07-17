// ================================ Global Constants ==================================

let ALL_PROJECTS = [];

// ================================ ProjectPreview Card ===============================

const createProjectPreviewCard = (thumbnailFilepath, Project) => {

    const completeThumbPath = thumbnailFilepath + Project.thumbnail;

    const buttons = {
        demo: Project.links.demo ? 
            `
                <a href="${Project.links.demo}" target="_blank" rel="noopener noreferrer" >
                    <button class="cursor-pointer w-full">
                        Live Demo
                    </button>
                </a>
            ` : "",
        repo: Project.links.repo ? 
            `
                <a href="${Project.links.repo}" target="_blank" rel="noopener noreferrer" >
                    <button class="cursor-pointer w-full">
                        Repository
                    </button>
                </a>
            ` : "",
        video: Project.links.video ? 
            `
                <a href="${Project.links.video}" target="_blank" rel="noopener noreferrer" >
                    <button class="cursor-pointer w-full">
                        Demo Video
                    </button>
                </a>
            ` : "" 
    }

    const banner = `
        <div class="project-banner">
            <div class="flex flex-col justify-center items-center p-3 pt-8">
                <h3 class="bg-slate-900">
                    Effect Content
                </h3>
            </div>
        </div>
    `

    return `               
        <li class="project-preview-card border-solid border-4 border-gray-300" id="${Project.id}">
            <div class="project-preview-wrapper w-full aspect-[4/3]">
                <div class="project-preview-card w-full grid grid-rows-[5fr_2fr_1fr] h-full m-4">
                    <div class="overflow-hidden">
                        <img src="${completeThumbPath}" alt="project-preview-thumb" class="pr-8">
                    </div>
                    <div class="pr-4 mt-2 overflow-hidden">${Project.description}</div>
                    <div class="grid grid-cols-2 grid-rows-2 mb-2 mt-3">
                        <a rel="noopener noreferrer">
                            <button class="project-details-btn cursor-pointer w-full" data-project-id="${Project.id}">
                                View Details
                            </button>
                        </a>
                        ${buttons.demo}
                        ${buttons.repo}
                        ${buttons.video}
                    </div>
                </div>
            </div>
        </li>
    `;
}

// ================================= Project Details Modal ========================================

const projectDetailsModal = {

    parentNode: document.querySelector('#selected-project-modal-container'),
    selector: '#selected-project-modal',
    status: false,
    toogleOn: (Filepath, project) => {
        projectDetailsModal.parentNode.innerHTML += createProjectDetailsModal(Filepath,project);
        projectDetailsModal.status = true;

        // if (projectDetailsModal.status) 

    },
    toggleOff: () => { 
        // if (!projectDetailsModal.status) 
        projectDetailsModal.parentNode.innerHTML = "";
        projectDetailsModal.status = false
    }

}

/**
 * Lifecycle function to render out a list of project-preview cards inside a container specified in the selector parameter.
 * @param {String} selector - CSS Selector of container element where project preview cards will be rendered inside.
 * @param {String} thumbnailFilepath - Filepath where all Project thumbnails are stored locally.
 * @param {Array} projectList - Array of Project objects containing project data.
 */
const renderProjectPreviews = (selector, thumbnailFilepath, projectList) => {
    const entryPoint = document.querySelector(selector);

    projectList.forEach(project => {
        entryPoint.innerHTML += createProjectPreviewCard(thumbnailFilepath, project)
    });
}

/**
 * Handler function that extracts the id of a project-preview-card 
 * from the project preview list if the click event's target has 
 * a class of 'project-details-btn'.
 * 
 * @param {document#event:click} event 
 * @returns 
 */
const getProjectThumbId = (event) => {

    if(event.target.classList.contains('project-details-btn')) {

        console.log(event.target.dataset.projectId);
        return event.target.dataset.projectId;
    }
}

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
            <a href="https://github.com/JustinScottJenecke" target="_blank" rel="noopener noreferrer">
                <!-- icon button -->
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">G</button>
                    <button class="">Repo</button>
                </div>
            </a>
        </li>
        <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">D</button>
                    <button class="">Demo</button>
                </div>
            </a>
        </li>
    `;
}

// Template
const createProjectDetailsModal = (dataFilePath, project) => {

    const thumbnailPath = dataFilePath + project.thumbnail;

    const previewImage = `
        <img src="${thumbnailPath}" alt="project-preview-image">
    `; 
    
    return `
    <!-- Selected project -->
    <div id="selected-project-modal" class="selected-project-modal">
        <section class="lg:mt-14 mb-20">
            <header class="mb-2 flex flex-col sm:flex-row sm:justify-between">
                <button class="sm:order-2 hover:text-red-300 border-solid border-2 border-gray-300 h-min p-2"  onclick="projectDetailsModal.toggleOff()">
                    return();
                </button>
                <h2 class="pb-2">
                    ${project.title}
                </h2>
            </header>
            <article class="
                flex flex-col mb-4
                md:flex-row
                ">
                <!-- preview pane -->
                <div data-fp-label="preview-image" class=" 
                    fp-preview-pane flex items-center	
                    border-solid border-4 border-gray-300 p-3 m-2 
                    md:p-6 sm:mx-24 md:mx-0">
                    ${previewImage}
                </div>
                <!-- project info -->
                <ul class=" 
                    fp-project-info
                    p-0 sm:p-4 mt-2 flex flex-col h-100">
                    <li>
                        <h5>Category:</h5>
                        <p class="md:pl-4 inline md:block">
                            <span data-fp-label="category">
                                ${project.category}
                            </span>
                        </p>
                    </li>
                    <li>
                        <h5>Tech Stack:</h5>
                        <p class="md:pl-4 inline md:block">
                            <span data-fp-label="tech-stack">
                                ${project['tech-stack']}
                            </span>
                        </p>
                    </li>
                    <li class="grow">
                        <h5>About:</h5>
                        <p class="md:pl-4 overflow-clip	" data-fp-label="about">
                            ${project.description}
                        </p>
                    </li>
                    <li class="justify-self-end mt-5">
                        <ul data-fp-label="links" class="flex justify-around">
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
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                                        <button class="rounded-full bg-neutral-800 w-6 sm:w-8 md:w-10 aspect-square">D</button>
                                        <button class="">Demo</button>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </article>

        </section>
    </div> 
    `;
}

// ================================ Listeners ===============================

    // Controller for dynamically rendering project previews
    document.addEventListener('DOMContentLoaded', () => {

        // document.body.innerHTML += createProjectDetailsModal("", "");
        // document.querySelector(projectDetailsModal.selector).style = "z-index: -20; display: none;",

        fetchAndParseJSON("./src/data/projects.json")
            .then(projectData => {
                ALL_PROJECTS = projectData;
                return renderProjectPreviews('#all-projects-container', "./src/resource/projects/", projectData)
            })
    })

    // Listener for dynamically rendering selected project details
    document.querySelector('#all-projects-container').addEventListener('click', (e) => {

        console.log(99)
        
        let selectedProjectId = getProjectThumbId(e);

        if (selectedProjectId) {

            const selectedProject = ALL_PROJECTS.filter(project => project.id == selectedProjectId);
            console.log(selectedProject[0])

            projectDetailsModal.toogleOn("./src/resource/projects/", selectedProject[0]);
            // insertFeaturedProject("./src/resource/projects/", selectedProject[0]);         
        }

        selectedProjectId = false

    })
