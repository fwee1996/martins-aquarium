import { getTips } from "../database.js"
export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    //i change const to let:
    let htmlString = '<article class="tipList">'
    // Create HTNL representations of each fish here
    for (const tip of tips) {
        htmlString += `<section class="tip card">
            <div class="tip__description">${tip.description}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}