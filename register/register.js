

const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error=document.getElementsByClassName('error-message')


const handleRegister = async () => {
    let message = ''

    if (!password.value||password.value=="")  {
        message = "Please, provide your password"
    }
    if (!email.value||email.value=="") {
        message = "Please, provide your email"
    }
    if (!last_name.value||last_name.value=="") {
        message = "Please, provide your last name"
    }
    if (!first_name.value||first_name.value=="") {
        message = "Please, provide your first name"
     }
    const data = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value
    }
    if (first_name.value == "" || last_name.value == "" || email.value == "" || password.value == "") {
       error[0].innerHTML=message; 
    } else {
        try {
            await fetch('https://fast-garden-04062.herokuapp.com/register', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })   
        } catch (err) {
            // console.log(error)
            // message="Not registered. Please, try again" 
           error[0].innerHTML ="Not registered. Please, try again" 
        }
   
    }
    sessionStorage.setItem('token', register.token)
    if (register.token) window.location.href = "/login/login.html"
}
