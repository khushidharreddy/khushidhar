// ZONES

const zones = [

    {
        name:"Zone A",
        cost:6,
        benefit:12
    },

    {
        name:"Zone B",
        cost:5,
        benefit:14
    },

    {
        name:"Zone C",
        cost:5,
        benefit:13
    },

    {
        name:"Zone D",
        cost:7,
        benefit:13
    },

    {
        name:"Zone E",
        cost:3,
        benefit:8
    },

    {
        name:"Zone F",
        cost:3,
        benefit:0
    }

];


// ENERGY LIMIT

const energyLimit = 20;


// CREATE TABLE

const tableContainer = document.getElementById("tableContainer");

let table = `

<table>

<tr>

<th>Zone</th>
<th>Energy Cost</th>
<th>Benefit</th>

</tr>

`;

zones.forEach(zone => {

    table += `

    <tr>

        <td>${zone.name}</td>
        <td>${zone.cost}</td>
        <td>${zone.benefit}</td>

    </tr>

    `;

});

table += "</table>";

tableContainer.innerHTML = table;


// VARIABLES

let totalBenefit = 0;
let totalEnergy = 0;
let selected = [];


// OPTIMIZATION

function optimizeGrid(){

    totalBenefit = 0;
    totalEnergy = 0;
    selected = [];

    let remaining = energyLimit;

    zones.forEach(zone => {

        if(zone.cost <= remaining){

            selected.push(zone.name);

            remaining -= zone.cost;

            totalEnergy += zone.cost;

            totalBenefit += zone.benefit;

        }

    });

    document.getElementById("selectedZones").innerHTML =
    selected.join(" ➜ ");

    document.getElementById("energyUsed").innerHTML =
    totalEnergy;

    document.getElementById("benefitOutput").innerHTML =
    totalBenefit;

    document.getElementById("zoneCount").innerHTML =
    selected.length;

    addConsoleMessage("Energy grid optimized...");

}


// GENERATE FINAL CODE

function generateKey(){

    let B = totalBenefit;

    let E = totalEnergy;

    let n = selected.length;

    let S = B + E + n;

    function digitSum(num){

        return num.toString().split("").reduce((a,b) => a + Number(b),0);

    }

    let F = digitSum(B) * digitSum(E);

    let K = Math.floor(S + (F / 3));

    let finalKey = K + (n - 1);

    let unlockCode = finalKey + "GRID";

    document.getElementById("finalCode").innerHTML =
    unlockCode;

    addConsoleMessage("Final unlock code generated...");

}


// RESET

function resetSystem(){

    document.getElementById("selectedZones").innerHTML =
    "Waiting for optimization...";

    document.getElementById("energyUsed").innerHTML = "0";

    document.getElementById("benefitOutput").innerHTML = "0";

    document.getElementById("zoneCount").innerHTML = "0";

    document.getElementById("finalCode").innerHTML =
    "Waiting for unlock code...";

    document.getElementById("consoleOutput").innerHTML =
    "> Energy Grid Management System Initialized... <br>";

}


// CONSOLE

function addConsoleMessage(message){

    const consoleBox = document.getElementById("consoleOutput");

    consoleBox.innerHTML += `> ${message}<br>`;

    consoleBox.scrollTop = consoleBox.scrollHeight;

}


// NAVIGATION

function goToLevel1(){

    window.location.href = "level1.html";

}

function goToLevel2(){

    window.location.href = "level2.html";

}

function goToLevel3(){

    window.location.href = "level3.html";

}

function goToLevel5(){

    window.location.href = "level5.html";

}
