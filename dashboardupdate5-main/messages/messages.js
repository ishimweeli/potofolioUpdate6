
const token = sessionStorage.getItem("token")

const containerComponents = document.getElementsByClassName('container');
const displayQueries = async () => {
    const queries = await fetch('https://fast-garden-04062.herokuapp.com/queries', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    })
    const data = await queries.json()
    console.log(data)
    let ui = ''
    data.map(queries => {
        ui += `<div class="message-body">
        <p>
        ${queries.message}
        </p>
        <p>
        ${queries.name}
        </p>
        <p>
            <a href="mailto:${queries.email} ">${queries.email}</a>
        <p>
        <h3>Message:</h3>${queries.message}
        </p>
        
    </div>`
    })
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML += ui
    console.log(data)
}
displayQueries()