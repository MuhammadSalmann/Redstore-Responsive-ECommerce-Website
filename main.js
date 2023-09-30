const list = document.querySelector("nav ul");
const imgBtns = document.querySelectorAll(".sm-img-btn");
const imgBtnsArray = Array.from(imgBtns)
// console.log(imgBtnsArray[0]);
let banner = document.getElementById("main-img")

const login = document.getElementById("Login-form");
const reg = document.getElementById("Register-form");
const indicator = document.querySelector(".account hr");


imgBtnsArray.forEach(btns => {
    btns.addEventListener('click', (event) => {
        console.log(event.target);
        if(event.target == imgBtnsArray[0]) {
            banner.src = imgBtnsArray[0].src
        } 
        else if(event.target == imgBtnsArray[1]) {
            banner.src = imgBtnsArray[1].src
        }
        else if(event.target == imgBtnsArray[2]) {
            banner.src = imgBtnsArray[2].src
        }
        else if(event.target == imgBtnsArray[3]) {
            banner.src = imgBtnsArray[3].src
        }
    })
})

function menuToggle() {
    
    if(list.style.height == '0px') {
        list.style.height = '300px'
    } else {
        list.style.height = '0px'
    }
}

function Login() {
    login.style.left = "0px";
    reg.style.left = "350px";
    indicator.style.transform = "translateX(-60px)"
}

function Register() {
    login.style.left = "-400px";
    reg.style.left = "0px";
    indicator.style.transform = "translateX(50px)"
}

