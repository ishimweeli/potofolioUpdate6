
const containerComponents = document.getElementsByClassName('container');
const commentInput = document.getElementById('comment_area')

const theId = localStorage.getItem('articleId');

// console.log(commentInput)

const handleComment = async () => {
    console.log(commentInput.value)
    try {
        await fetch(`https://fast-garden-04062.herokuapp.com/articles/${theId}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                // 'x-access-token': token
            },
            body: JSON.stringify({ comments: commentInput.value }),
        })
        // commentInput.value = ""
        window.location.reload()
    } catch (err) {
        console.log(err)
        alert(err)
    }

}
const displayData = async () => {
    const article = await fetch(`https://fast-garden-04062.herokuapp.com/articles/${theId}`)
    const data = await article.json()
    let ui = ''
    console.log(data)
    if (!data) {
        ui += `<div><h1>No data retrieved</h1></div>`
    } else {
        ui += `<div class="box">
        <div class="image">

           <img src="https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg">
          </div>
          <div class="name_job">${data.date}</div>
          <div class="name_job">${data.title}</div>

        <div class="name_job">${data.author}</div>
          <p>
        ${data.articleBody}</p>
        <br/>
        <hr/>
        <h3>Comments</h3>
        ${data.comments.map(comment => `<div>
        <h4>User: Unknown</h4>
        <p>${comment.date}</p>
        <p>${comment.text}</p>
        </div>`)}
         </div>`
    }
    // ui += `
    // `
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML = ui
    console.log(data)
}

displayData()

