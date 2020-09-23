  
const BASE_URL = "http://localhost:3000"
const REPORTS_URL = `${BASE_URL}/reports`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => onLoad())
    const onLoad = () => {
        getReportCards()
        const mobileMenu = document.getElementById("nav-mobile")
        const desktopMenu = document.getElementById("nav-desktop")
        renderMenu(mobileMenu, menuParams)
        renderMenu(desktopMenu, menuParams)
    }
// Report read ajax call

const renderReport = (reportHash, children) => {
    // reportHash.images
    //to do
    // img_url = reportHash.attributes.
    const event_desc = reportHash.attributes.event_desc
    const susp_desc = reportHash.attributes.suspect_desc
    const event_date = reportHash.attributes.created_at
    const image_url = reportHash.attributes.images[0].image_link

    // document.getElementById("touchMe").innerHTML = event_desc;

    const column = document.createElement("div")
    column.classList = "col s12 m4 l4"
        const card = document.createElement("div")
        card.className="card"
            const cardImageDiv = document.createElement("div")
            cardImageDiv.classList="card-image waves-effect waves-block waves-light"
                const cardImage = document.createElement("img")
                cardImage.className="activator"
                cardImage.src= image_url
            const cardContent = document.createElement("div")
            cardContent.className="card-content"
                const cardTitle = document.createElement("span")
                cardTitle.classList = "card-title activator grey-text text-darken-4"
                cardTitle.innerText = `${event_date.slice(5,7)}-${event_date.slice(8,10)}-${event_date.slice(2,4)}`
                const cardMore = document.createElement("i")
                cardMore.classList = "mdi-navigation-more-vert right"
  
                
            const cardDetails = document.createElement("div")
            cardDetails.className="card-reveal"
                const susP = document.createElement("p")
                susP.innerHTML = susp_desc
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
        //append report event & susp desc to card details
        cardDetails.appendChild(eventP)
        cardDetails.appendChild(susP)
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

// build report cards helper
const getReportCards = () => {
    fetch(REPORTS_URL)
    .then(res => res.json())
    .then(json => {
        json.data.forEach(report => renderReport(report, json.included))
    })
}

// Report submit ajax call - TO DO
$('form').submit(function(event) {
    event.preventDefault();
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    const report = { 
        
            'event_desc'              : $('input[name=event_desc]').val(),
            'suspect_desc'             : $('input[name=suspect_desc]').val(),
            'location_attributes': {
                'lat': $('input[name=location_lat]').val(),
                'lng': $('input[name=location_lng]').val()
            },
            'images_attributes': [{
                'image_link': $('input[name=image_link]').val(),
                'image_checksum' : $('input[name=image_checksum]').val()
            }]

    };

    const configObj = {
        method        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(report)
    }

    const url = `${REPORTS_URL}` // the url where we want to POST

    const submit = (url, configObj) => {
        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
            if (json.message)
            //to do alert
                window.alert(json.message)
            else
            //to do refresh report list
                getReportCards()
                window.alert("your report was submitted")
            })
    }
    submit(url, configObj)
});