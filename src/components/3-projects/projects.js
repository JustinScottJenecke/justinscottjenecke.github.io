// ================================ Templating ===============================

const createProjectPreviewCard = (thumbnailFilepath, Project) => {

    const buttons = {

    }


    const completeThumbPath = thumbnailFilepath + Project.thumbnail;
    console.log(completeThumbPath)

    // 0800 030 007
    // 0800 030 007

    return `               
        <li class="border-solid border-4 border-gray-300" id="${Project.id}">
            <div class="card-wrapper w-full aspect-[4/3] relative">
                <div class="card-cover-image w-full absolute grid grid-rows-[5fr_2fr_2fr] h-full m-4">
                    <div class="overflow-hidden ">
                        <img src="${completeThumbPath}" alt="project-preview-thumb" class="pr-8">
                    </div>
                    <div class="pr-4 mt-2">${Project.description}</div>
                    <div class="grid grid-cols-2 grid-rows-2 mb-4">
                        <button>
                            View More
                        </button>
                        ${Project.links.demo && 
                        `
                            <button>
                                Live Demo
                            </button>
                        `}
                        ${Project.links.repo &&  
                        `
                            <button>
                                Repository
                            </button>
                        `}
                        ${Project.links.preview &&  
                        `
                            <button>
                                Demo Video
                            </button>
                        `}
                    </div>
                </div>
                <div class="card-content aspect-[4/3]">
                    <ul class="flex flex-col p-3 pt-8">
                        Effect Content
                    </ul>
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
