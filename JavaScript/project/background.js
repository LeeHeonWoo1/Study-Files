const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const i_length = images.length

const chosenImage = images[Math.floor(Math.random()*i_length)]

const body = document.getElementById('body');

body.style.backgroundImage = `url('../images/${chosenImage}')`