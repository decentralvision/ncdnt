  
const BASE_URL = "http://localhost:3000"
const REPORTS_URL = `${BASE_URL}/reports`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => initAutocomplete())


const initAutocomplete = () => {

    fetch(REPORTS_URL)
    .then(res => res.json())
    .then(json => {
        json.data.forEach(report=> renderReport(report))
    })
    const mobileMenu = document.getElementById("nav-mobile")
    const desktopMenu = document.getElementById("nav-desktop")
    renderMenu(mobileMenu, menuParams)
    renderMenu(desktopMenu, menuParams)
    createMap()
}

const renderReport = (reportHash) => {
    //to do
    img_url = reportHash.attributes.
    event_desc = reportHash.attributes.event_desc.slice(0, 10)
    document.getElementById("touchMe").innerHTML = event_desc;

    const column = document.createElement("div")
    column.className = "col s12 m4 l4"
        const card = document.createElement("div")
        card.className="card"
            const cardImageDiv = document.createElement("div")
            cardImageDiv.className="card-image waves-effect waves-block waves-light"
                const cardImage = document.createElement("img")
                cardImage.className="activator"
                cardImage.src="img/project1.jpg"
            const cardContent = document.createElement("div")
            cardContent.className="card-content"
                const cardTitle = document.createElement("span")
                cardTitle.className = "card-title grey-text text-darken-4"
                const cardMore = document.createElement("i")
                cardMore.className = "mdi-navigation-more-vert right"
                const event_desc = document.createElement("p")
                event_desc.innerHTML = reportHash.attributes.event_desc.slice(0, 10)
                
}

const createMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39, lng: -95},
        zoom: 4,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
        zoomControl: true
    });
}
// render menu code

const menuParams = {}

const divList = $(".section.scrollspy")
divList.each(function(index, section) {
    sectionName = section.id
    menuParams[toTitleCase(sectionName)] = `#${sectionName}`
})

const renderMenu = (menu, menuParams) => {
    for (menuItem in menuParams) {
        let listItem = document.createElement("li")
        let menuLink = document.createElement("a")
        menuLink.href=menuParams[menuItem]
        menuLink.innerText=menuItem
        // menuLink.target = "_blank"
        listItem.appendChild(menuLink)
        // listItem.addEventListener("click", (event) => {
        //     event.preventDefault()
        // })
        menu.appendChild(listItem)
    }
    // sample vv
    // <li><a href="Log-out" target="_blank">Log Out</a></li>
}

// helper
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
