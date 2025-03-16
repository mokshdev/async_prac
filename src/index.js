

function walkDog() {

    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            resolve("you  walk the dog");
            
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


walkDog()
    .then(value => {
        console.log(value)
        return cleanKitchen()
    })
    .then(value => {
        console.log(value)
        return throwTrash()
    })
    .then(value => 
        console.log(value)
    )
