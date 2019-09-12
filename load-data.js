// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Create a div with a "Column 4" class
            const column4 = document.createElement('div')
            column4.setAttribute('class', 'column-4')

            // Create a div with a "Card" class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create an h2 and set the text content to the film's title
            const h2 = document.createElement('h2')
            h2.textContent = movie.title

            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300) // Limit to 300 chars
            p.textContent = `${movie.description}...` // End with an ellipses

            // Append h2 and p to the card element
            card.appendChild(h2)
            card.appendChild(p)

            // Append the card to the column element
            column4.appendChild(card)

            // Append the column to the cards container element
            document.getElementById("cardsContainer").appendChild(column4);
        })
    } else {
        console.log('error')
    }
}

// Send request
request.send()