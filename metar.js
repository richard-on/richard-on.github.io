function input(){

    let xhrMetar = new XMLHttpRequest();
    let xhrTaf = new XMLHttpRequest();

    xhrMetar.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            successMetar(JSON.parse(this.responseText));
        }
    });

    xhrTaf.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            successTaf(JSON.parse(this.responseText));
        }
    });

    const icaoRegex = new RegExp("^[A-Z]{4}$");
    let icaoCode = document.getElementById("icao-code").value.toUpperCase();

    if(icaoRegex.test(icaoCode)){
        let url = "https://api.checkwx.com/metar/" + icaoCode + "/decoded";
        let urlTaf = "https://api.checkwx.com/taf/" + icaoCode + "/decoded";

        xhrMetar.open("GET", url, true);
        xhrMetar.setRequestHeader('X-API-Key', 'c6decebc5b424af5b86420f021');
        xhrMetar.send();
        successMetar(xhrMetar);

        xhrTaf.open("GET", urlTaf, true);
        xhrTaf.setRequestHeader('X-API-Key', 'c6decebc5b424af5b86420f021');
        xhrTaf.send();
        successTaf(xhrTaf);

    }
    else{
        console.log("Error!")
    }
}

let outputWrapper = document.getElementById("metar-output");

function successMetar(response) {
    if (response.results > 0) {
        let metar = response.data[0];

        document.getElementById('icao-metar').innerText = metar.icao;
        document.getElementById('name-metar').innerText = metar.station.name;
        document.getElementById('raw').innerText = metar.raw_text;

        outputWrapper.style.display = "block";


    } else {
        outputWrapper.style.display = "block";
        document.getElementById('raw').innerText = "No results returned from API. " +
            "This airport probably doesn't exist.";
    }
}

let outputWrapperTaf = document.getElementById("taf-output");

function successTaf(response) {
    if (response.results > 0) {
        let taf = response.data[0];

        document.getElementById('icao-taf').innerText = taf.icao;
        document.getElementById('name-taf').innerText = taf.station.name;
        document.getElementById('taf').innerText = taf.raw_text;

        outputWrapperTaf.style.display = "block";

    } else {
        outputWrapperTaf.style.display = "none";
    }
}




