// STATIONS

const stations = [

    "AK", "BT", "CU", "DP",
    "FM", "HX", "KN", "LM",
    "PE", "QA", "RC", "SJ",
    "VG", "ZF"

];


// DEPENDENCY MATRIX

const matrix = [

[0,0,0,0,1,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,1,0,1,0,0,0,0,0,0],
[0,0,0,0,0,1,0,0,1,0,0,0,0,0],
[1,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,0,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0,0],
[0,0,1,0,0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0,1,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,1,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0]

];


// CREATE MATRIX TABLE

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

        if(matrix[i][j] === 1){

            table += `<td class="one">1</td>`;

        }

        else{

            table += `<td>0</td>`;

        }

    }

    table += "</tr>";
}

table += "</table>";

matrixContainer.innerHTML = table;


// GENERATE GRAPH

function generateGraph(){

    let graphText = "";

    for(let i=0; i<matrix.length; i++){

        graphText += `<strong>${stations[i]}</strong> ➜ `;

        let dependencies = [];

        for(let j=0; j<matrix[i].length; j++){

            if(matrix[i][j] === 1){

                dependencies.push(stations[j]);

            }

        }

        if(dependencies.length === 0){

            graphText += "No Dependency";

        }

        else{

            graphText += dependencies.join(", ");

        }

        graphText += "<br><br>";

    }

    document.getElementById("graphOutput").innerHTML = graphText;

    addConsoleMessage("Dependency graph generated...");

}


// TOPOLOGICAL SORT

function resolveDependencies(){

    let indegree = new Array(stations.length).fill(0);

    for(let i=0; i<matrix.length; i++){

        for(let j=0; j<matrix.length; j++){

            if(matrix[i][j] === 1){

                indegree[i]++;

            }

        }

    }

    let queue = [];

    for(let i=0; i<indegree.length; i++){

        if(indegree[i] === 0){

            queue.push(i);

        }

    }

    let result = [];

    while(queue.length > 0){

        let current = queue.shift();

        result.push(stations[current]);

        for(let i=0; i<matrix.length; i++){

            if(matrix[i][current] === 1){

                indegree[i]--;

                if(indegree[i] === 0){

                    queue.push(i);

                }

            }

        }

    }

    if(result.length !== stations.length){

        document.getElementById("sequenceOutput").innerHTML =
        "CIRCULAR DEPENDENCY DETECTED";

        addConsoleMessage("Synchronization failed...");

    }

    else{

        document.getElementById("sequenceOutput").innerHTML =
        result.join(" ➜ ");

        addConsoleMessage("Dependencies resolved...");
        addConsoleMessage("Synchronization restored...");

    }

}


// RESET

function resetSystem(){

    document.getElementById("graphOutput").innerHTML =
    "Waiting for graph generation...";

    document.getElementById("sequenceOutput").innerHTML =
    "No activation sequence generated...";

    document.getElementById("consoleOutput").innerHTML =
    "> Smart City Dependency Resolver Initialized... <br>";

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

function goToLevel3(){

    window.location.href = "level3.html";

}

function goToLevel4(){

    window.location.href = "level4.html";

}
function goToLevel5(){

    window.location.href = "level5.html";

}