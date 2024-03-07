// =============================== Data and Declarations ====================

// All DOM references for featured projects
const PREVIEW_ELEMENT = {
    previewImage : document.querySelector('[data-fp-label="preview-image"]'),
    name : document.querySelector('[data-fp-label="name"]'),
    category : document.querySelector('[data-fp-label="category"]'),
    techStack : document.querySelector('[data-fp-label="tech-stack"]'),
    about : document.querySelector('[data-fp-label="about"]'),
    links : document.querySelector('[data-fp-label="links"]')
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

// ====================== Event Listeners =============================================

window.addEventListener('DOMContentLoaded', () => {
    
    // Fetch all and filter featured projects from json file
    fetchAndParseData('./src/data/projects.json')
        .then(allProjects => {
            // console.log(allProjects)
            return allProjects.filter(project => project.featured)  
        })
        .then(filteredProjects => console.log(filteredProjects))
})