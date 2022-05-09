
const containerComponents = document.getElementsByClassName('container');
const displayData = async () => {
    const articles = await fetch('https://fast-garden-04062.herokuapp.com/articles')
    const data = await articles.json()
    let ui = ''
    data.map(article => {
        ui += `<div class="box">
        <div class="image">
           <img src="pic me1.jpg">
          </div>
          <div class="name_job">${article.title}</div>
          
          <p>
          ${article.articleBody}</p>
          </p>
          <div class="btns">
            <button>Read More</button>
            </div>
        </div>`
    })
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML = ui
    console.log(data)
}
displayData()
