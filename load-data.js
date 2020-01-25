// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Create a div with a "Sample Card" class
            const card = document.createElement('div')
            card.setAttribute('class', 'sample-card')

            // Create an h3 and set the text content to the film's title
            const h3 = document.createElement('h3')
            h3.textContent = movie.title

            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 120) // Limit to 120 chars
            p.textContent = `${movie.description}...` // End with an ellipses

            // Append h3 and p to the card element
            card.appendChild(h3)
            card.appendChild(p)

            // Append the card to the div with "Column 12" class
            document.getElementById("Cards-Container").appendChild(card);
        })
    } else {
        console.log('error')
    }
}

// Send request
request.send()
