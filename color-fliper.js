const myBtn = document.querySelector(".btn");
const myDiv = document.querySelector(".container");
const headerH1 = document.querySelector(".header");
myBtn.addEventListener("mouseover", function () {

    mouseOver();
})
myBtn.addEventListener("mouseout", function () {
    myBtn.style.backgroundColor = "";
    myBtn.style.color = "black";
})

function mouseOver() {
    myBtn.style.transition = "all ease .4s"
    myBtn.style.backgroundColor = "#222";
    myBtn.style.color = "white";
}

function changeColor() {
    myBtn.addEventListener("click", function () {
        myDiv.style.setProperty('--random-color', '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
        const currentColor = "dadaw";
        headerH1.textContent = "Background Color:" + currentColor;
    })
}

changeColor();