// ================================ Templating ===============================

const createProjectPreviewCard = (thumbnailFilepath, Project) => {

    const buttons = {

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
    console.log(completeThumbPath)

    // 0800 030 007
    // 0800 030 007

    return `               
        <li class="border-solid border-4 border-gray-300" id="${Project.id}">
            <div class="project-preview-wrapper w-full aspect-[4/3] relative">
                <div class="project-preview-card w-full absolute grid grid-rows-[5fr_2fr_2fr] h-full m-4">
                    <div class="overflow-hidden">
                        <img src="${completeThumbPath}" alt="project-preview-thumb" class="pr-8">
                    </div>
                    <div class="pr-4 mt-2 overflow-hidden">${Project.description}</div>
                    <div class="grid grid-cols-2 grid-rows-2 mb-4">
                        <button  class="cursor-pointer">
                            View More
                        </button>
                        ${Project.links.demo &&
        `
                            <button  class="cursor-pointer">
                                Live Demo
                            </button>
                        `}
                        ${Project.links.repo &&
                        `       
                            <a href="${Project.links.repo}" target="_blank" rel="noopener noreferrer">
                                <button  class="hover:cursor-pointer">
                                    Repository
                                </button>
                            </a>
                        `}
                        ${Project.links.preview &&
                        `
                            <button class="hover:cursor-pointer">
                                Demo Video
                            </button>
                        `}
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
