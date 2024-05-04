import { getLocations } from "../database.js"
export const LocationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    //i change const to let:
    let htmlString = '<article class="locationList">'
    // Create HTML representations of each fish here
    for (const location of locations) {
        htmlString += `<section class="location card">
            <div class="location__name">${location.name}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}