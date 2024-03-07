// =============================== Data and Declarations ====================

// All DOM references for featured projects
const FP_PREVIEW_IMAGE_ELEMENT = document.querySelector('[data-fp-label="preview-image"]'); 
const FP_NAME_ELEMENT = document.querySelector('[data-fp-label="name"]'); 
const FP_CATEGORY_ELEMENT = document.querySelector('[data-fp-label="category"]'); 
const FP_TECH_STACK_ELEMENT = document.querySelector('[data-fp-label="tech-stack"]'); 
const FP_ABOUT_ELEMENT = document.querySelector('[data-fp-label="about"]'); 
const FP_LINKS_ELEMENT = document.querySelector('[data-fp-label="links"]'); 

let loadedProjects = [];

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
    .then(data => loadedProjects = data)
}

// ====================== Event Listeners =============================================

window.addEventListener( 'DOMContentLoaded', () => {
    loadAllProjects("./src/data/projects.json", loadedProjects);
}) 