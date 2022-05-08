
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const message = document.getElementById('message');



const handleQueries = async () => {
    const data = {
        name: userName.value,
        email: email.value,
        message: message.value
    }
    await fetch('https://fast-garden-04062.herokuapp.com/queries', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    console.log(data);

}