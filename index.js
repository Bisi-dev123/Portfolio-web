console.log("parent: ", document.body.parentNode);


// // On focus of input, alert "You're editing the name field!"
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('click', (e) => {
        alert(`You are editing the ${e.target.name} field!`);
    });
})

// On send message, alert "Your message has been sent!"
document.querySelector('#contactform').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
})
