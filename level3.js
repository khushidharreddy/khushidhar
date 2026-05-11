// STATIONS

const stations = [

    "DP","AK","PE","QA",
    "BT","FM","RC","CU",
    "KN","LM","SJ","VG",
    "HX","ZF"

];


// WEIGHTED MATRIX

const matrix = [

[0,3,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],

[3,0,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],

[9,4,0,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],

[-1,10,2,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1],

[-1,-1,-1,5,0,6,11,-1,-1,-1,-1,-1,-1,-1],

[-1,-1,-1,-1,6,0,3,-1,-1,-1,-1,-1,-1,-1],

[-1,-1,-1,-1,11,3,0,4,-1,-1,-1,-1,-1,-1],

[-1,-1,-1,-1,-1,-1,4,0,2,-1,-1,-1,-1,-1],

[-1,-1,-1,-1,-1,-1,-1,2,0,5,8,-1,-1,-1],

[-1,-1,-1,-1,-1,-1,-1,-1,5,0,3,-1,-1,-1],

[-1,-1,-1,-1,-1,-1,-1,-1,8,3,0,4,-1,-1],

[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,0,2,-1],

[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,0,7],

[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0]

];


// CREATE TABLE

const matrixContainer = document.getElementById("matrixContainer");

let table = "<table>";

table += "<tr><th></th>";

stations.forEach(station => {

    table += `<th>${station}</th>`;

});

table += "</tr>";

for(let i=0; i<matrix.length; i++){

    table += `<tr><th>${stations[i]}</th>`;

    for(let j=0; j<matrix[i].length; j++){

        table += `<td>${matrix[i][j]}</td>`;

    }

    table += "</tr>";
}

table += "</table>";

matrixContainer.innerHTML = table;


// MST VARIABLES

let totalCost = 0;


// BUILD MST

function buildMST(){

    let edges = [];

    for(let i=0; i<matrix.length; i++){

        for(let j=i+1; j<matrix.length; j++){

            if(matrix[i][j] !== -1){

                edges.push({

                    from:i,
                    to:j,
                    weight:matrix[i][j]

                });

            }

        }

    }

    edges.sort((a,b) => a.weight - b.weight);

    let parent = [];

    for(let i=0; i<stations.length; i++){

        parent[i] = i;

    }

    function find(x){

        if(parent[x] === x){

            return x;

        }

        return parent[x] = find(parent[x]);

    }

    function union(a,b){

        parent[find(a)] = find(b);

    }

    totalCost = 0;

    let result = "";

    edges.forEach(edge => {

        if(find(edge.from) !== find(edge.to)){

            union(edge.from, edge.to);

            totalCost += edge.weight;

            result += `

                ${stations[edge.from]}
                ➜
                ${stations[edge.to]}
                (Cost : ${edge.weight})

                <br><br>

            `;

        }

    });

    document.getElementById("edgeOutput").innerHTML = result;

    document.getElementById("costOutput").innerHTML = totalCost;

    addConsoleMessage("Minimum-cost network constructed...");

}


// CONVERT TO BINARY

function convertBinary(){

    let binary = totalCost.toString(2);

    document.getElementById("binaryOutput").innerHTML = binary;

    addConsoleMessage("Restoration cost converted to binary...");

}


// RESET

function resetSystem(){

    document.getElementById("edgeOutput").innerHTML =
    "Waiting for reconstruction...";

    document.getElementById("costOutput").innerHTML = "0";

    document.getElementById("binaryOutput").innerHTML =
    "Waiting for binary conversion...";

    document.getElementById("consoleOutput").innerHTML =
    "> Smart City Network Recovery Initialized... <br>";

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


function goToLevel4(){

    window.location.href = "level4.html";

}

function goToLevel5(){

    window.location.href = "level5.html";

}