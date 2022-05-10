
const containerComponents = document.getElementsByClassName('container');
const displayData = async () => {
    const article = await fetch('https://fast-garden-04062.herokuapp.com/articles')
    const data = await article.json()
    let ui = ''
    data.map(article => {
        ui += `<div class="box">
        <div class="image">

           <img src="./articles/download.jpg">
          </div>
          <div class="name_job">${article.date}</div>
          <div class="name_job">${article.title}</div>

        <div class="name_job">${article.author}</div>
          <p>
        ${article.articleBody}</p>
         
          <div class="btns">
            <button>read more</button>
            </div>
          </p>
         </div>`
    })
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML = ui
    console.log(data)
}

displayData()

