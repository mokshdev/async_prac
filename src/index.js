

function walkDog() {

    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            const dogWalked = false

            if (dogWalked) {
                resolve("you  walk the dog");
            } else {
                rejct("you didnt walked the dog")
            }


            
            
        }, 1500)
    })
    
}


function cleanKitchen() {

    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            resolve("you  clean kitchen");
            
        }, 1500)
    })
    
}

function throwTrash() {

    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            resolve("you threw trash");
            
        }, 1500)
    })
    
}


// walkDog()
//     .then(value => {
//         console.log(value)
//         return cleanKitchen()
//     })
//     .then(value => {
//         console.log(value)
//         return throwTrash()
//     })
//     .then(value => 
//         console.log(value)
//     )
walkDog().then((message) => console.log(message))