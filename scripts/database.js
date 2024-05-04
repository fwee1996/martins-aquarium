// Database:Displaying (and maintain) HTML representations of state.
// Filtering objects in state. For example, one view in the application could be to only show orange fish, or fish of a certain size, or fish found in a certain location.
// Sorting objects in state by size, date harvested, etc.
/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fishes: [
        {
            name: "Bart",
            food: "crustaceans",
            //for image open the image in new tab and copy image address:
            image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
            species: "Clownfish",
            length: 5,
            location: "Coral Reef"
        },
        {
            name: "Jessica Chastain",
            food: "crustaceans",
            //for image open the image in new tab and copy image address:
            image: "https://www.color-meanings.com/wp-content/uploads/Mandarin-Dragonet-1024x683.jpeg",
            species: "Mandarin Dragonet",
            length: 3,
            location: "Pacific Ocean"
        },{
            name: "Queen Latifah",
            food: "jellyfish",
            //for image open the image in new tab and copy image address:
            image: "https://www.color-meanings.com/wp-content/uploads/Queen-Angelfish-1024x683.jpeg",
            species: "Queen Angelfish",
            length: 9,
            location: "Atlantic Ocean"
        },{
            name: "Michael",
            food: "sea critters",
            //for image open the image in new tab and copy image address:
            image: "https://www.color-meanings.com/wp-content/uploads/Clown-Triggerfish-1024x683.jpeg",
            species: "Clown Tigerfish",
            length: 20,
            location: "Indian Ocean"
        },
        {
            name: "Chadwick",
            food: "crustaceans",
            //for image open the image in new tab and copy image address:
            image: "https://www.color-meanings.com/wp-content/uploads/Boesemans-Rainbowfish-1024x683.jpeg",
            species: "Boeseman’s Rainbowfish",
            length: 4,
            location: "Indonesia"
        },{
            name: "Lady Luck",
            food: "fish",
            //for image open the image in new tab and copy image address:
            image: "https://www.color-meanings.com/wp-content/uploads/Super-Red-Asian-Arowana-1024x683.jpeg",
            species: "Super Red Asian Arowana",
            length: 24,
            location: "Southeast Asia"
        }
     ]
     ,
     tips: [
        {
            description: "Change 10-25% of the water every 1-2 weeks"
        } ,
        {
            description: "Maintain temperature: 76°F - 82°F for saltwater fish, 72°F - 82°F for freshwater fish"
        },
        {
            description:"Test water regularly for pH, salinity, and temperature" 
        },
        {
            description: "Use effective filtration system for cleaning"
        },
        {
            description: "Use efficient water pumps for oxygen"
        }  
    ],
    locations: [
       {
           name: "Coral Reef"
       } ,
       {
        name: "Pacific Ocean"
       },
       {
        name:"Atlantic Ocean" 
       },
       {
        name: "Indian Ocean"
       },
       {
        name: "Indonesia"
       },  
       {name:"Southeast Asia"
    }
   ]
}


export const getFish = () => {
    //rmbr database. :
return database.fishes
}

//multiples of 3
 //make sure to have fishes parameter in () : 
export const mostHolyFish = (fishes) => {
    const holyFish = []
    for (const fish of fishes) { // Corrected iteration over fishes
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish}

//multiples of 5
export const soldierFish = (fishes) => {
    const soldierFish = []
    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldierFish.push(fish)
        }
    }
    return soldierFish
}

//the rest:
    export const nonHolyFish = (fishes) => {
        const regularFish = []
        for (const fish of fishes) {
               //or: % 3 || 5 ! ==0
            if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
                regularFish.push(fish)
            }
        }
        return regularFish
    }



////Alt for declaring all 3 fn and exporting as one getFish fn
// //multiples of 3
// //make sure to have fishes in () for  const mostHolyFish = (fishes) 
// const mostHolyFish = (fishes) => {
//     const holyFish = []
//     for (const fish of fishes) { // Corrected iteration over fishes
//         if (fish.length % 3 === 0) {
//             holyFish.push(fish)
//         }
//     }
//     return holyFish
// }

// //multiples of 5
// const soldierFish = (fishes) => {
//     const soldierFish = []
//     for (const fish of fishes) {
//         if (fish.length % 5 === 0) {
//             soldierFish.push(fish)
//         }
//     }
//     return soldierFish
// }

// //the rest of the fish:
// const nonHolyFish = (fishes) => {
//     const regularFish = []
//     for (const fish of fishes) {
//         //or: % 3 || 5 ! ==0
//         if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
//             regularFish.push(fish)
//         }
//     }
//     return regularFish
// }

// export const getFish = () => {
//     const allFish = database.fishes 
//     const holyFish = mostHolyFish(allFish)
//     const soldierFishes = soldierFish(allFish)
//     const nonHolyFishes = nonHolyFish(allFish)

//     return {
//         holyFish,
//         soldierFishes,
//         nonHolyFishes
//     }
// }




// returns a copy of the fish array.
// The function is exported so other modules can import it and use it.
// export const getFish = () => {
//     return database.fish.map(fish => ({...fish}))
// }
//cant use anymore bcs now got nonHoly, Holy etc

// Concept Checking Questions: Look at above code
// What is the data type of the database variable? Object
// What is the data type of the fish property? Array
// What is the data type of the name property? String
// What is the data type of the size property? Number
// What data types will the fish array contain? 
//The fish array will contain objects of individual fish.
 



 export const getTips = () => {
     return database.tips.map(tips => ({...tips}));
 }

 
 export const getLocations = () => {
    return database.locations.map(locations => ({...locations}));
}

