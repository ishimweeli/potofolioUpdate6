
const email = document.getElementById('email');
const password = document.getElementById('password');


// console.log(email, password);
const handleLogin = async () => {
    const data = {
        email: email.value,
        password: password.value
    }
    // console.log(data);
    const res = await fetch('https://fast-garden-04062.herokuapp.com/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),

    })
    const login = await res.json()
    sessionStorage.setItem('token', login.token)
    if (login.token && login.email === 'eliab0@gmail.com') window.location.href = "../dashboardupdate5-main/dashboard.html"
    console.log(login)

}