// =============================== Data and Declarations ====================

// All DOM references for featured projects
const PREVIEW_ELEMENT = {
    previewImage: document.querySelector('[data-fp-label="preview-image"]'),
    name: document.querySelector('[data-fp-label="name"]'),
    category: document.querySelector('[data-fp-label="category"]'),
    techStack: document.querySelector('[data-fp-label="tech-stack"]'),
    about: document.querySelector('[data-fp-label="about"]'),
    links: document.querySelector('[data-fp-label="links"]')
}

// ============================== Functions ===========================================

const fetchAndParseData = (filepath) => {
    return fetch(filepath)
        .catch(error => {
            console.error('Request failed:', error)
        })
        // use Response Interface .json() method
        .then(response => {
            return response.ok ? response.json() : console.log('error getting response')
        })
}

const insertFeaturedProject = (project) => {
    PREVIEW_ELEMENT.previewImage.innerHTML += `
        <img src="/src/resource/projects/tutorspace-rest-api.png" alt="project-preview-image">
    `

    PREVIEW_ELEMENT.name.innerText = project.title
    PREVIEW_ELEMENT.category.innerText = project.category
    PREVIEW_ELEMENT.techStack.innerText = project.techStack
    PREVIEW_ELEMENT.about.innerText = project.description
    PREVIEW_ELEMENT.links.innerHTML += `
        <li>
            <a href="https://github.com/JustinScottJenecke" target="_blank" rel="noopener noreferrer">
                <!-- icon button -->
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-10 aspect-square">G</button>
                    <button class="">Repo</button>
                </div>
            </a>
        </li>
        <li>
            <a href="https://github.com/JustinScottJenecke" target="_blank" rel="noopener noreferrer">
                <div class="bg-neutral-700 rounded-tl-full rounded-bl-full pr-6">
                    <button class="rounded-full bg-neutral-800 w-10 aspect-square">D</button>
                    <button class="">Demo</button>
                </div>
            </a>
        </li>
    `;
}

// ====================== Event Listeners =============================================

window.addEventListener('DOMContentLoaded', () => {

    // Fetch all and filter featured projects from json file
    fetchAndParseData('./src/data/projects.json')
        .then(allProjects => {
            // console.log(allProjects)
            return allProjects.filter(project => project.featured);
        })
        .then(filteredProjects => {
            insertFeaturedProject(filteredProjects[0]);
        })
        .catch(error => console.error('problem with templating'), error)
})