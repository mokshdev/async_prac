function openMenu() {

    const menu_main = document.getElementById("main_page")
    const head = document.createElement("h1")
    const ul = document.createElement("ul")


    const items = ["Item Spaghetti Carbonara",
         "Butter Chicken",
        "Sushi Platter",
        "Tacos al Pastor",
        "Margherita Pizza"        
        ]


    items.forEach(text => {
        const li = document.createElement("li"); // Create <li> element
        li.textContent = text; // Set text content
        ul.appendChild(li); // Append <li> to <ul>
    });


    
    menu_main.innerHTML =""
    
    

    head.textContent = "menu section"






    menu_main.appendChild(head)
    menu_main.appendChild(ul)

}



export default openMenu