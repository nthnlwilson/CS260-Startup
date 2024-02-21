const submit_confetti_button = document.getElementById("submit-confetti");

submit_confetti_button.addEventListener('click', () => {
    getName();
    initialConfetti();
    randomConfetti();
});

function initialConfetti() {
    // for testing confetti options
    // default values are commented
    const testConfettiSettings = {
        particleCount: 150,  // 50
        angle: 90,           // 90
        spread: 270,         // 45
        startVelocity: 45,   // 45
        decay: 0.9,          // .9
        gravity: 1,          // 1
        drift: 0,            // 0
        flat: false,         // false
        ticks: 200,          // 200   how many times the confetti will move
        //origin: object,
        scalar: 1,           // 1      size of particles
        colors: ['#f00', '#00f', '#0f0'], // Adjust the confetti colors
    };

    // Create initial confetti explosion
    confetti(testConfettiSettings);
};

function randomConfetti() {
    const interval = 200; // interval between explosions in ms
    const numExplosions = 5;
    let count = 0   // Counter for tracking explosions

    // Create confetti explosions at the set interval until the stop point
    let intervalId = setInterval(() => {
        confetti({
            particleCount: 50,  // 50
            spread: 360,         // 45
            startVelocity: 30,   // 45
            origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2
            },
            scalar: .8,           // 1      size of particles
            colors: ['#f00', '#00f', '#0f0'], // Adjust the confetti colors
        });
        count++;

        if (count >= numExplosions) {
            clearInterval(intervalId);
        }
    }, interval);
}




function getName() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    // window.location.href = "play.html";
}


function saveImage() {

}


function showImage() {

}

function previewImage(event, previewId) {
    const imagePreview = document.getElementById(previewId);
  
    // if file is selected
    if (event.target.files && event.target.files[0]) {  //checks if the object exists then if there's stuff in it
        // read file
        const reader = new FileReader();

        // if file successfully read
        reader.onload = (e) => {
            // set the preview image source to the loaded image
            imagePreview.src = e.target.result;
        };

        // read file as DataURL
        reader.readAsDataURL(event.target.files[0]);
    } else {
        // no file selected, put placeholder image back
        imagePreview.src = "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg";
    }
}

// dark mode toggle

const allHTML = document.getElementById('html');
const nav = document.querySelector('.navbar');
const drop = document.querySelector('.dropdown-menu')
const lightSwitch = document.getElementById('lightSwitch');
const darkSwitch = document.getElementById('darkSwitch');

function toggleMode(mode) {
    allHTML.dataset.bsTheme = mode;
    switch (mode) {
      case "light":
        nav.classList.remove('navbar-dark', 'bg-dark');
        nav.classList.add('navbar-light', 'bg-light');
        drop.classList.remove('bg-dark');
        drop.classList.add('bg-light');
        darkSwitch.classList.remove('active');
        lightSwitch.classList.add('active');
        break;
      case "dark":
        nav.classList.remove('navbar-light', 'bg-light');
        nav.classList.add('navbar-dark', 'bg-dark');
        drop.classList.remove('bg-light');
        drop.classList.add('bg-dark');
        lightSwitch.classList.remove('active');
        darkSwitch.classList.add('active');
        break;
    }
  }
  
  lightSwitch.addEventListener('click', () => toggleMode("light"));
  darkSwitch.addEventListener('click', () => toggleMode("dark"));
