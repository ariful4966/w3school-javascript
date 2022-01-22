const hello = document.getElementById('hello');

hello.addEventListener('click', function () {
    document.getElementById('demo').innerHTML="Hello Javascript!"
})

// Atribute change

const imgLightOff = document.getElementById('imgBtn');
const imgLightOn= document.getElementById('imgBtnOn');

imgLightOff.addEventListener('dblclick', function () {
    document.getElementById('myImage').src='media/pic_bulboff.gif'
})

imgLightOn.addEventListener('click', ()=>{
    document.getElementById('myImage').src='media/pic_bulbon.gif'
})

// cnage font size

const heading = document.getElementById('demoHead');
heading.style.fontSize = "50px"


const hide = document.getElementById('hide');
hide.style.display = "none"

const show = document.getElementById('show');
show.style.display="block"