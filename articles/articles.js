

const first_name = document.getElementById('title');
const last_name = document.getElementById('author');
const email = document.getElementById('articleBody');
const password = document.getElementById('image');
const error = document.getElementsByClassName('error-message')


const handleArticles = async () => {
    let message = ''

    if (!password.value || password.value == "") {
        message = "Please, provide your password"
    }
    if (!email.value || email.value == "") {
        message = "Please, provide your email"
    }
    if (!last_name.value || last_name.value == "") {
        message = "Please, provide your last name"
    }
    if (!first_name.value || first_name.value == "") {
        message = "Please, provide your first name"
    }
    const data = {
        image: image.value,
        title: title.value,
        author: author.value,
        articleBody: articleBody.value

    }
    if (title.value == "" || author.value == "" || articleBody.value == "") {
        error[ 0 ].innerHTML = message;
    } else {
        try {
            await fetch('https://fast-garden-04062.herokuapp.com/articles', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
        } catch (err) {
            // console.log(error)
            // message="Not registered. Please, try again" 
            error[ 0 ].innerHTML = "Not registered. Please, try again"
        }

    }
    sessionStorage.setItem('token', login.token)
    // if (register.token) window.location.href = "/login/login.html"
}
handleArticles()