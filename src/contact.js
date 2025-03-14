function openContact() {

    const contact_main = document.getElementById("main_page")

    contact_main.innerHTML =""

    const contactButton = document.createElement("button")
    

    contactButton.textContent = "call it"

    contact_main.appendChild(contactButton)

}



export default openContact