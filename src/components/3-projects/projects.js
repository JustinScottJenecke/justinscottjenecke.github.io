// All DOM references for featured projects
const FP_PREVIEW_IMAGE_ELEMENT = document.querySelector('[data-fp-label="preview-image"]'); 
const FP_NAME_ELEMENT = document.querySelector('[data-fp-label="name"]'); 
const FP_CATEGORY_ELEMENT = document.querySelector('[data-fp-label="category"]'); 
const FP_TECH_STACK_ELEMENT = document.querySelector('[data-fp-label="tech-stack"]'); 
const FP_ABOUT_ELEMENT = document.querySelector('[data-fp-label="about"]'); 
const FP_LINKS_ELEMENT = document.querySelector('[data-fp-label="links"]'); 

let loadedProjects = [];

const loadAllProjects = () => {

fetch("./src/data/projects.json")
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
    .then(() => console.log(loadedProjects));
}