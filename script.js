const hex = document.querySelector(".hex");
const bttn = document.querySelector(".generate");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    hex.innerHTML = '#' + randomColor;
    document.body.style.backgroundColor = '#' + randomColor;
}

bttn.addEventListener('click', generateColor);


generateColor();