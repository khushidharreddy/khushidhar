// STATIONS

const stations = [

    "QA", "FM", "BT", "HX",
    "DP", "AK", "RC", "LM",
    "ZF", "KN", "PE", "CU",
    "SJ", "VG"

];


// DISPLAY STATIONS

const stationContainer = document.getElementById("stationContainer");

stations.forEach(station => {

    const div = document.createElement("div");

    div.classList.add("station");

    div.innerText = station;

    stationContainer.appendChild(div);

});


// ASCII VALUE FUNCTION

function getAsciiValue(station){

    return station.charCodeAt(0) + station.charCodeAt(1);

}


// CONVERT VALUES

function convertValues(){

    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    stations.forEach(station => {

        const row = `

            <tr>
                <td>${station}</td>
                <td>${getAsciiValue(station)}</td>
            </tr>

        `;

        tableBody.innerHTML += row;

    });

}


// SORT STATIONS

function sortStations(){

    let sorted = [...stations];

    sorted.sort((a,b) => {

        return getAsciiValue(a) - getAsciiValue(b);

    });

    document.getElementById("sortedOutput").innerHTML =
    sorted.join(" ➜ ");

}


// COUNT INVERSIONS

function countInversions(){

    const values = stations.map(getAsciiValue);

    let count = 0;

    for(let i=0; i<values.length; i++){

        for(let j=i+1; j<values.length; j++){

            if(values[i] > values[j]){

                count++;

            }

        }

    }

    document.getElementById("inversionCount").innerText = count;

}


// RESET

function resetSystem(){

    document.getElementById("tableBody").innerHTML = "";

    document.getElementById("sortedOutput").innerHTML =
    "Waiting for signal recovery...";

    document.getElementById("inversionCount").innerText = "0";

}


// NAVIGATION

function goToLevel2(){

    window.location.href = "level2.html";

}

function goToLevel3(){

    window.location.href = "level3.html";

}

function goToLevel4(){

    window.location.href = "level4.html";

}

function goToLevel5(){

    window.location.href = "level5.html";

}