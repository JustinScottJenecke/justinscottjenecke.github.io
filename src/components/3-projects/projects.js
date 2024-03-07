// =============================== Data and Declarations ====================

// All DOM references for featured projects
const FP_PREVIEW_IMAGE_ELEMENT = document.querySelector('[data-fp-label="preview-image"]'); 
const FP_NAME_ELEMENT = document.querySelector('[data-fp-label="name"]'); 
const FP_CATEGORY_ELEMENT = document.querySelector('[data-fp-label="category"]'); 
const FP_TECH_STACK_ELEMENT = document.querySelector('[data-fp-label="tech-stack"]'); 
const FP_ABOUT_ELEMENT = document.querySelector('[data-fp-label="about"]'); 
const FP_LINKS_ELEMENT = document.querySelector('[data-fp-label="links"]'); 

// Project Stores:
const PROJECT_STORE = {
    allProjects : [],
    featuredProjects : [],

    /**
     * Iterates over array of project objects and returns a new array of projects which have a featured property with a value of true (see project-schema.xml)
     * @param {Array} unfilteredProjects - Array of project objects to be filtered
     * @returns {Array} filteredProjects - list of projects whose featured propery === true
     */
    filterFeaturedProjects : (unfilteredProjects) => {
        return unfilteredProjects.filter(project => project.featured);
    }
}

// ============================== Functions ===========================================

/**
 * Description: Promised based function which loads in data from projects .json file, uses Response interface to convert data to json, and assigns the data to 'loadedProjects' array
 * @param {string} filepath - The filepath of the json data to be fetch asynchronously
 * @require let loadedProjects - Must be a let: the array to be overwritten where the data of the resolved promise will be stored
 */
const loadAllProjects = (filepath) => {

fetch(filepath)
    .catch(error => {
        console.error('Request failed:', error)
    })
    // use Response Interface .json() method
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else
            console.log('error getting response')
            return null
    })
    // callback that has access modified data
    .then(data => PROJECT_STORE.allProjects = data)
    .then(loadedProjects => PROJECT_STORE.featuredProjects = PROJECT_STORE.filterFeaturedProjects(loadedProjects))
}

// ====================== Event Listeners =============================================

window.addEventListener( 'DOMContentLoaded', () => {
    loadAllProjects("./src/data/projects.json", PROJECT_STORE.allProjects);
}) 