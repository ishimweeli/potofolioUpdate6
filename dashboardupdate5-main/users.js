const token = sessionStorage.getItem("token")

const containerComponents = document.getElementsByClassName('sales-details');
const displayUsers = async () => {
    const users = await fetch('https://fast-garden-04062.herokuapp.com/users', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        },
    })
    const data = await users.json()
    console.log(data)
    let ui = ''
    data.map(user => {
        ui +=
            `<ul class="details">
              <li class="topic">first_name</li>
              <li><a href="#">${user.first_name}</a></li>


            </ul>
            <ul class="details">
              <li class="topic">last_name</li>
              <li><a href="#">${user.last_name}</a></li>
              
            </ul>
            <ul class="details">
              <li class="topic">Email</li>
              <li><a href="#">${user.email}</a></li>
      


            </ul>
            <ul class="details">
              <li class="topic">id</li>
              <li><a href="#">4</a>${user._id}</li>
              
            </ul>
            <ul class="details">
              <li class="topic">Date</li>
              <li><a href="#">${user.registration_date}</a></li>


            </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>`
    })
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML += ui
    console.log(data)
}
displayUsers()