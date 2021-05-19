function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let photo = document.getElementById("photo");
photo.style.backgroundImage = "url('https://cdn.jetphotos.com/full/5/63098_1620666849.jpg')";
console.log(photo.style.backgroundImage);