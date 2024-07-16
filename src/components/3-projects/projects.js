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

}

const closeModal = () => {
    
    const parentNode = document.querySelector('#projects-main')
    const element = document.querySelector('#selected-project-modal');
    
    parentNode.removeChild(element)
}

const createProjectDetailsModal = (thumbnailFilepath, Project) => {
    
    return `
    <!-- Selected project -->
    <div id="selected-project-modal" class="selected-project-modal">
        <section class="lg:mt-14 mb-20">
            <header class="mb-8">
                <button class="hover:text-red-300 border-solid border-2 p-2 border-gray-300"  onclick="closeModal()">
                    return();
                </button>
                <h2 class="pb-2">
                    Selected Project
                </h2>
                <p>
                    View some of the highlights from my list <br>
                    of personal projects:
                </p>
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
                </div>
                <!-- project info -->
                <ul class=" 
                    fp-project-info
                    p-0 sm:p-4 mt-2 flex flex-col h-100">
                    <li>
                        <h4 data-fp-label="name" class="text-center text-slate-200">Project Name:</h4>
                    </li>
                    <li>
                        <h5>Category:</h5>
                        <p class="md:pl-4 inline md:block">
                            <span data-fp-label="category">
                                ?
                            </span>
                        </p>
                    </li>
                    <li>
                        <h5>Tech Stack:</h5>
                        <p class="md:pl-4 inline md:block">
                            <span data-fp-label="tech-stack">
                                ?
                            </span>
                        </p>
                    </li>
                    <li class="grow">
                        <h5>About:</h5>
                        <p class="md:pl-4 overflow-clip	" data-fp-label="about">
                            ?
                        </p>
                    </li>
                    <li class="justify-self-end mt-5">
                        <ul data-fp-label="links" class="flex justify-around">
                            <!-- dynamic links go here -->
                        </ul>
                    </li>
                </ul>
            </article>

        </section>
    </div> 
    `;
}

// ============================== Functions =================================

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

// ================================ Listeners ===============================

    // Controller for dynamically rendering project previews
    document.addEventListener('DOMContentLoaded', () => {

        fetchAndParseJSON("./src/data/projects.json")
            .then(projectData => {
                ALL_PROJECTS = projectData;
                return renderProjectPreviews('#all-projects-container', "./src/resource/projects/", projectData)
            })
    })

    // Listener for dynamically rendering selected project details
    document.querySelector('#all-projects-container').addEventListener('click', (e) => {
       
        const selectedProjectId = getProjectThumbId(e);

        if (selectedProjectId) {
            const selectedProject = ALL_PROJECTS.filter(project => project.id == selectedProjectId);
            console.log(selectedProject[0])

            document.querySelector('#projects-main').innerHTML += createProjectDetailsModal("", "")
            insertFeaturedProject("./src/resource/projects/", selectedProject[0]);
            
            // fetchAndParseJSON('./src/data/projects.json')
            // .then(allProjects => {
            //     return allProjects.filter(project => project.id == selectedProjectId);
            // })
            // .then(filteredProject => {
            //     // console.log(filteredProject) bug here - result returns array
            //     document.querySelector('#projects-main').innerHTML += createProjectDetailsModal("", "")
            //     insertFeaturedProject("./src/resource/projects/", filteredProject[0]);
            // })
            // .catch(error => console.error('problem with templating', error))            
        }

    })
