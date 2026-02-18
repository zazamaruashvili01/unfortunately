let step = 0;
const zaza = document.getElementById('zaza');
const maiko = document.getElementById('maiko');
const intruder = document.getElementById('intruder');
const narration = document.getElementById('narration');
const bubbles = document.getElementById('bubbles');

function say(text, side) {
    bubbles.innerHTML = `<div class="bubble" style="${side}: 50px;">${text}</div>`;
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.fontSize = "30px";
    heart.style.left = "50%";
    heart.style.bottom = "200px";
    heart.style.animation = "fadeIn 1s ease";
    bubbles.innerHTML = "";
    bubbles.appendChild(heart);
}

function playDrama() {
    step++;

    if (step === 1) {
        narration.innerText = "...";
        zaza.style.left = "150px";
        maiko.style.right = "150px";
        say("👀", "left");
    }

    else if (step === 2) {
        narration.innerText = "უცებ გაუგებრობა...";
        maiko.querySelector('.head').style.borderColor = "red";
        say("😔", "right");
    }

    // 👇 მესამე ტიპი ჩნდება
    else if (step === 3) {
        narration.innerText = "ვიღაც მესამე ჩნდება...(სახელცი არვიცი)";
        intruder.style.opacity = "1";
        intruder.style.bottom = "0px";
        say("😏", "left");
    }

    // 👇 ზაზა აგდებს
    else if (step === 4) {
        narration.innerText = "...";
        intruder.style.left = "800px"; // გაფრინდა სცენიდან
        intruder.style.transform = "rotate(720deg)";
        say("🚀", "left");
    }

    else if (step === 5) {
        narration.innerText = "...";
        say("მაპატიე... ❤️", "left");
        zaza.style.transform = "rotate(20deg)";
    }

   else if (step === 6) {
    narration.innerText = "გადაწყვეტილება შენზეა...";
    document.getElementById("choices").style.display = "block";
    bubbles.innerHTML = "";
}


    else {
        narration.innerText = "...";
        intruder.style.opacity = "0";
        step = 0;
    }
}

function forgive() {
    const choices = document.getElementById("choices");
    choices.style.display = "none";

    narration.innerText = "❤️";

    // მიუახლოვდნენ
    zaza.style.left = "220px";
    maiko.style.right = "220px";

    // ხელჩაკიდება (უბრალოდ მიაბრუნებს ხელებს)
    zaza.querySelector(".arm.right").style.transform = "rotate(0deg)";
    maiko.querySelector(".arm.left").style.transform = "rotate(0deg)";

    bubbles.innerHTML = "❤️❤️❤️";
}
function notForgive() {
    const choices = document.getElementById("choices");
    choices.style.display = "none";

    narration.innerText = ":(...";

    zaza.classList.add("walk-away");
    maiko.classList.add("walk-away-right");

    bubbles.innerHTML = "💔";
}
