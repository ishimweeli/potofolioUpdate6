
const containerComponents = document.getElementsByClassName('container');
const theId = localStorage.getItem('articleId');
const token = sessionStorage.getItem("token")
const handleReadMore = () => {
    document.onclick = function (e) {
        console.log("The event we have here is", e.target.getAttribute("id"))
        console.log(e.target.tagName)
        if (e.target.tagName == 'BUTTON') {
            localStorage.setItem("articleId", e.target.getAttribute("id"))
            window.location.href = './fullBlog/fullstory.html'
        }
    }
    // console.log("The id is here", e)
}



const displayData = async () => {
    const article = await fetch('https://fast-garden-04062.herokuapp.com/articles')
    const data = await article.json()

    let ui = ''

    data.map(article => {

        ui += `<div class="box">
        <div class="image">

           <img src="download.jpg">
          </div>
          <div class="name_job">${article.date}</div>
          <div class="name_job">${article.title}</div>

        <div class="name_job">${article.author}</div>
          <p>
        ${article.articleBody ? article.articleBody.slice(0, 20) : ""} ${article && article.articleBody && article.articleBody.length >= 200 ? "..." : ""}</p>

          <div class="btns">
            <button id='${article._id}' onClick='deleteArticle()'>DELETE</button>
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


// const DeleteArticles = async () => {
//     console.log("id is here")
//     try {
//         await fetch(`${theId}`, {
//             method: 'DELETE', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': token
//             },
//             body: JSON.stringify(),
//         })
//         // commentInput.value = ""
//         window.location.reload()
//     } catch (err) {
//         console.log(err)
//         alert(err)
//     }

// }
// DeleteArticles()








// const updateArticles = async () => {
//     console.log(commentInput.value)
//     try {
//         await fetch(`https://fast-garden-04062.herokuapp.com/articles/${theId}`, {
//             method: 'POST', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'x-access-token': token
//             },
//             body: JSON.stringify({ comments: commentInput.value }),
//         })
//         // commentInput.value = ""
//         window.location.reload()
//     } catch (err) {
//         console.log(err)
//         alert(err)
//     }

// }


