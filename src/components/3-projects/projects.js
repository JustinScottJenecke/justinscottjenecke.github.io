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

// ============================== Functions =================================

const renderProjectPreviews = (selector, thumbnailFilepath, projectList) => {
    const entryPoint = document.querySelector(selector);

    projectList.forEach(project => {
        entryPoint.innerHTML += createProjectPreviewCard(thumbnailFilepath, project)
    });
}

// ================================ Listeners ===============================
