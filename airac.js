/*let data= [["2105", "20.05.2021"],["2106", "17.06.2021"],["2107", "20.05.2021"],["2108", "20.05.2021"],
    ["2109", "20.05.2021"],["2110", "20.05.2021"]]

let initDate = 1621458000000;
let initCycle = 2105;

let period = 2419200000;
//let next = 1623877200000;

let time = Date.now();

let airacField = document.getElementById("airac-cycle");
airacField.innerText = "AIRAC " + initCycle.toString();

/*do{
    time = Date.now();
    if(time >= (initDate + period)){
        initDate += period;
        initCycle++;
        airacField.innerText = "AIRAC " + initCycle.toString();
    }

}
while (true);






let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
console.log(today);*/