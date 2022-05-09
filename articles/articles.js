
const token = sessionStorage.getItem("token")
const title = document.getElementById('title');
const author = document.getElementById('author');
const articleBody = document.getElementById('articleBody');
const img = document.getElementById('img');

const handleArticles = async () => {
    const data = {
        img: img.value,
        title: title.value,
        author: author.value,
        articleBody: articleBody.value
    }
    await fetch('https://fast-garden-04062.herokuapp.com/articles', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify(data),
    })
    console.log(data);

}
