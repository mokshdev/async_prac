    import odinImage from "./restraunt.jpg";
    import openHome from "./home";
    import openMenu from "./menu";
    import openContact from "./contact";





    function initialLoad() {
        // setting tags

        const heading_main = document.createElement('h1') 
        const content_main = document.getElementById("content")
        const image = document.createElement("img")
        const button = document.createElement("button")
        const div = document.createElement("div")

        const div_nav = div
        const homeButton = document.createElement("button")
        const menuButton = document.createElement("button")
        const contactButton = document.createElement("button")







        // adding text
        heading_main.textContent ="welcome to moksh's restraunt"
        image.src = odinImage;
        image.id = "restraunt_img"



        div_nav.id = "nav_bar"
        homeButton.textContent = "Home"
        menuButton.textContent = "Menu"
        contactButton.textContent = "Contact"





        //appending tags
        content_main.appendChild(heading_main)
        content_main.appendChild(image)
        content_main.appendChild(div_nav)
        div_nav.appendChild(homeButton)
        div_nav.appendChild(menuButton)
        div_nav.appendChild(contactButton)
        


   
        homeButton.onclick = openHome
        menuButton.onclick = openMenu
        // contactButton.onclick = openContact
    }


    export default initialLoad