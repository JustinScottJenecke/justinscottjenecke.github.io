
const STORAGE_KEYS = {
    MASTER_KEY : "apid-jjpw-8565",
    featuredProjects : "-featured-projects"
};

/**
 * Persists array of featured projects to session storage for caching purposes
 * @param {Array} filteredProjectObjects - Array of project objects that have featured property set to true
 * @returns {Boolean}
 */
const presistFeaturedProjects = (filteredProjectObjects) => {
    sessionStorage.setItem(`${STORAGE_KEYS.MASTER_KEY + STORAGE_KEYS.featuredProjects}`, JSON.stringify(filteredProjectObjects));
    return true;
};

/**
 * Retrieves array of featured projects to be used in featured-projects-component or returns null 
 * @returns {Array|null}
 */
const retrieveFeatureProjects = () => {
    return JSON.parse(sessionStorage.getItem((`${STORAGE_KEYS.MASTER_KEY + STORAGE_KEYS.featuredProjects}`)));
};