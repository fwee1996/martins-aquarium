//Book2-column3 -HTML Representations of Data/Automating Martin's Website
//convert that raw data into HTML representations 
//and render them in the browser. 
//Automate the creation of HTML list of fish from the 
//objects in your fish collection, 
//so that you never have to copy/paste the HTML directly 
//when a fish dies, or a fish is added.

//This module exports a function as well. 
//This one returns a newly constructed string that is filled with HTML syntax. 
//The HTML will be a visual representation of the fish object 
//for a person to see in the web browser.

// // Import the function that returns a copy of the fish array
// import { getFish } from "../database.js"




// export const FishList = () => {
//     // Invoke the function that you imported from the database module
//     const newSortedFishes = getFish()

//     // Start building a string filled with HTML syntax
//     //i change const to let:
//     let htmlString = '<article class="fishList">'
//     // Create HTNL representations of each fish here
//     for (const fish of newSortedFishes) {
//         htmlString += `<section class="fish card">
//             <div><img class="fish__image image--card" src="${fish.image}" /></div>
//             <div class="fish__name">${fish.name}</div>
//             <div class="fish__species">${fish.species}</div>
//             <div class="fish__length">${fish.length}</div>
//             <div class="fish__location">${fish.location}</div>
//             <div class="fish__diet">${fish.food}</div>
//         </section>`
//     }
//     htmlString += `</article>`

//     return htmlString
// }



//we moved FishList.js into a new fish directory so we had to change file path
//FishList: 
//import { getFish } from "../database.js" 
//------see that theres 2 dots now because 
//database.js is located higher level directory now compared to FishList.js

//main.js:
//import { FishList } from './fish/FishList.js'



//test:
    import { getFish, mostHolyFish, soldierFish, nonHolyFish } from "../database.js";

    export const FishList = () => {
        // Invoke the function that you imported from the database module
        const allFish = getFish()
        const mostHoly=mostHolyFish(allFish)
        const soldiers=soldierFish(allFish)
        const regulars=nonHolyFish(allFish)
        //make it all into one sorted array:
        const sortedFishes = [...mostHoly, ...soldiers, ...regulars]
   let htmlString = '<article class="fishList">'
//     // Create HTNL representations of each fish here
 for (const fish of sortedFishes) {
        htmlString += `<section class="fish card">
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}


