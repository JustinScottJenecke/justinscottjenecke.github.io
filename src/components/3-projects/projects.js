// =============================== Data and Declarations ====================

// All DOM references for featured projects
const FP_PREVIEW_IMAGE_ELEMENT = document.querySelector('[data-fp-label="preview-image"]'); 
const FP_NAME_ELEMENT = document.querySelector('[data-fp-label="name"]'); 
const FP_CATEGORY_ELEMENT = document.querySelector('[data-fp-label="category"]'); 
const FP_TECH_STACK_ELEMENT = document.querySelector('[data-fp-label="tech-stack"]'); 
const FP_ABOUT_ELEMENT = document.querySelector('[data-fp-label="about"]'); 
const FP_LINKS_ELEMENT = document.querySelector('[data-fp-label="links"]'); 


// ============================== State ===========================================

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

    // Fetch all projects from json file
    fetchAndParseData('./src/data/projects.json')
        .then(data => console.log(data))
})