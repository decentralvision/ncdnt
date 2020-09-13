  
const BASE_URL = "http://localhost:3000"
const REPORTS_URL = `${BASE_URL}/reports`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => onLoad())
    const onLoad = () => {
        fetch(REPORTS_URL)
        .then(res => res.json())
        .then(json => {
            json.data.forEach(report => renderReport(report))
        })
        const mobileMenu = document.getElementById("nav-mobile")
        const desktopMenu = document.getElementById("nav-desktop")
        renderMenu(mobileMenu, menuParams)
        renderMenu(desktopMenu, menuParams)
    }

const renderReport = (reportHash) => {
    //to do
    // img_url = reportHash.attributes.
    const event_desc = reportHash.attributes.event_desc
    // document.getElementById("touchMe").innerHTML = event_desc;

    const column = document.createElement("div")
    column.classList = "col s12 m4 l4"
        const card = document.createElement("div")
        card.className="card"
            const cardImageDiv = document.createElement("div")
            cardImageDiv.classList="card-image waves-effect waves-block waves-light"
                const cardImage = document.createElement("img")
                cardImage.className="activator"
                cardImage.src="img/project1.jpg"
            const cardContent = document.createElement("div")
            cardContent.className="card-content"
                const cardTitle = document.createElement("span")
                cardTitle.classList = "card-title activator grey-text text-darken-4"
                // cardTitle.innerText = ~~JSON DATE TO DO~~
                const cardMore = document.createElement("i")
                cardMore.classList = "mdi-navigation-more-vert right"
  
                
            const cardDetails = document.createElement("div")
            cardDetails.className="card-reveal"
                const eventP = document.createElement("p")
                eventP.innerHTML = event_desc

                const detailsTitle = document.createElement("span")
                detailsTitle.classList = "card-title grey-text text-darken-4"

                const cardExit = document.createElement("i")
                cardExit.classList = "mdi-navigation-close right"

        //append card image to card
        cardImageDiv.appendChild(cardImage)

        //append more button to title and and title to card face
        cardTitle.appendChild(cardMore)
        cardContent.appendChild(cardTitle)

        //append exit button to title and title to details card
        detailsTitle.appendChild(cardExit)
        cardDetails.appendChild(detailsTitle)
        //append report event desc to card details
        cardDetails.appendChild(eventP)
        //append card elements to card
        card.appendChild(cardImageDiv)
        card.appendChild(cardContent)
        card.appendChild(cardDetails)
        //append card to column
        column.appendChild(card)
        //append column to reports div 
        $("#reports .row")[0].appendChild(column)
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
