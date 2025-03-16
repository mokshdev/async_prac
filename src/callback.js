console.log("hello");


function walkDog(callback) {


    setTimeout(()=>{
        console.log("you  walk the dog");
        callback()
    }, 1500)
}


function cleanKitchen(callback) {


    setTimeout(()=>{
        console.log("you cleaned the kitchen");
        callback()
    }, 2500)
}

function takeOutTrash(callback) {


    setTimeout(()=>{
        console.log("you took out the trash");
        callback()
    }, 500)
}


walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("you finished all the chore");
            
        })
    })
})