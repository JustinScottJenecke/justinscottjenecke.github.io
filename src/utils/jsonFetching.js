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