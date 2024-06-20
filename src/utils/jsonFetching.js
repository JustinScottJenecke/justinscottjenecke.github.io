/** 
 * Promise based function to asynchronously load in data from any local json file
 * @param {string} filepath - File path of target json file which hold data to be loaded.
 * @returns {Promise}
 */
const fetchAndParseJSON = (filepath) => {
    return fetch(filepath)
        .catch(error => {
            console.error('Request failed:', error)
        })
        // use Response Interface .json() method
        .then(response => {
            return response.ok ? response.json() : console.log('error getting response')
        })
}