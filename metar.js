function input(){

    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            success(JSON.parse(this.responseText));
        }
    });

    const icaoRegex = new RegExp("^[A-Z]{4}$");
    let icaoCode = document.getElementById("icao-code").value.toUpperCase();

    if(icaoRegex.test(icaoCode)){
        let url = "https://api.checkwx.com/metar/" + icaoCode + "/decoded";
        console.log(url);
        xhr.open("GET", url, true);
        xhr.setRequestHeader('X-API-Key', 'c6decebc5b424af5b86420f021');
        xhr.send();
        console.log("Sent!")
    }
    else{
        console.log("Error!")
    }
}

function success(response) {
    if (response.results > 0) {
        let metar = response.data[0];

        document.getElementById('icao').innerText = metar.icao;
        document.getElementById('name').innerText = metar.station.name;
        document.getElementById('raw').innerText = metar.raw_text;

        let outputWrapper = document.getElementById("metar-output");
        outputWrapper.style.display = "block";

    } else {
        document.getElementById('raw').innerText = "No results returned from API. " +
            "This airport probably doesn't exist";
    }
}


