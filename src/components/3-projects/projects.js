// ================================ Templating ===============================

const createProjectPreviewCard = (thumbnailFilepath, Project) => {

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

    const completeThumbPath = thumbnailFilepath + Project.thumbnail;
    //console.log(completeThumbPath)

    // 0800 030 007
    // 0800 030 007

    return `               
        <li class="border-solid border-4 border-gray-300" id="${Project.id}">
            <div class="project-preview-wrapper w-full aspect-[4/3]">
                <div class="project-preview-card w-full grid grid-rows-[5fr_2fr_1fr] h-full m-4">
                    <div class="overflow-hidden">
                        <img src="${completeThumbPath}" alt="project-preview-thumb" class="pr-8">
                    </div>
                    <div class="pr-4 mt-2 overflow-hidden">${Project.description}</div>
                    <div class="grid grid-cols-2 grid-rows-2 mb-2 mt-3">
                        <a rel="noopener noreferrer">
                            <button  class="cursor-pointer w-full">
                                View More
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

const createProjectDetailsModal = (thumbnailFilepath, Project) => {
    
    return `
    <!-- Selected project -->
    <div id="selected-project-modal">
        <section class="lg:mt-14 mb-20">
            <header class="mb-8">
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
            <div class="flex justify-evenly">
                <button disabled class="bg-neutral-800 py-1 px-1 sm:px-4">prev</button>
                <button disabled class="bg-neutral-800 py-1 px-1 sm:px-4">
                    all projects
                </button>
                <button disabled class="bg-neutral-800 py-1 px-1 sm:px-4">next</button>
            </div>
        </section>
    </div> 
    `;
}

// ============================== Functions =================================

const renderProjectPreviews = (selector, thumbnailFilepath, projectList) => {
    const entryPoint = document.querySelector(selector);

    projectList.forEach(project => {
        entryPoint.innerHTML += createProjectPreviewCard(thumbnailFilepath, project)
    });
}

// ================================ Listeners ===============================
