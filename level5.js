// NODES

const nodes = [

    "Z1","Z2","Z3",
    "Z4","Z5","Z6","Z7"

];


// DISTANCE MATRIX

const matrix = [

[0,6,9,Infinity,3,Infinity,4],

[6,0,5,8,2,Infinity,Infinity],

[9,5,0,4,7,12,Infinity],

[Infinity,8,4,0,6,9,10],

[3,2,7,6,0,11,8],

[Infinity,Infinity,12,9,11,0,3],

[4,Infinity,Infinity,10,8,3,0]

];


// CREATE TABLE

const matrixContainer = document.getElementById("matrixContainer");

let table = "<table>";

table += "<tr><th></th>";

nodes.forEach(node => {

    table += `<th>${node}</th>`;

});

table += "</tr>";

for(let i=0; i<matrix.length; i++){

    table += `<tr><th>${nodes[i]}</th>`;

    for(let j=0; j<matrix[i].length; j++){

        if(matrix[i][j] === Infinity){

            table += `<td>∞</td>`;

        }

        else{

            table += `<td>${matrix[i][j]}</td>`;

        }

    }

    table += "</tr>";
}

table += "</table>";

matrixContainer.innerHTML = table;


// VARIABLES

let finalRoute = "";
let finalCost = 0;
let finalCode = "";


// DIJKSTRA

function findShortestPath(){

    const source = 1; // Z2
    const destination = 5; // Z6

    let distances = new Array(nodes.length).fill(Infinity);

    let visited = new Array(nodes.length).fill(false);

    let previous = new Array(nodes.length).fill(null);

    distances[source] = 0;

    for(let count=0; count<nodes.length-1; count++){

        let minDistance = Infinity;
        let currentNode = -1;

        for(let i=0; i<nodes.length; i++){

            if(!visited[i] && distances[i] < minDistance){

                minDistance = distances[i];
                currentNode = i;

            }

        }

        visited[currentNode] = true;

        for(let j=0; j<nodes.length; j++){

            if(

                !visited[j] &&
                matrix[currentNode][j] !== Infinity &&
                distances[currentNode] + matrix[currentNode][j] < distances[j]

            ){

                distances[j] =
                distances[currentNode] + matrix[currentNode][j];

                previous[j] = currentNode;

            }

        }

    }

    let path = [];

    let current = destination;

    while(current !== null){

        path.unshift(nodes[current]);

        current = previous[current];

    }

    finalRoute = path.join(" ➜ ");

    finalCost = distances[destination];

    document.getElementById("routeOutput").innerHTML =
    finalRoute;

    document.getElementById("costOutput").innerHTML =
    finalCost;

    addConsoleMessage("Shortest valid route identified...");
    addConsoleMessage("Transmission path stabilized...");

}


// GENERATE CODE

function generateUnlockCode(){

    finalCode = "256";

    document.getElementById("codeOutput").innerHTML =
    finalCode;

    addConsoleMessage("Emergency routing code generated...");

}


// RESET

function resetSystem(){

    document.getElementById("routeOutput").innerHTML =
    "Waiting for route analysis...";

    document.getElementById("costOutput").innerHTML =
    "0";

    document.getElementById("codeOutput").innerHTML =
    "Waiting for unlock code...";

    document.getElementById("consoleOutput").innerHTML =
    "> Emergency Routing System Initialized... <br>";

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

function goToLevel4(){

    window.location.href = "level4.html";

}