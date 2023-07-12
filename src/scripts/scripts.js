import React from 'react';
import { createRoot } from 'react-dom/client';
import { TextAreaCard } from '../components/TextAreaCard.jsx';
import { Graph } from '../components/Graph.jsx'
import { Alert } from '../components/Alert.jsx'

// Obtenemos el elemento del botón
var btnAnalyze = document.getElementById("btn-analyze");

// Agregar un evento de escucha a los botones
btnAnalyze.addEventListener("click", function () {
    deleteContainers();
    handleAnalyze();
});

function analyze(x, y) {
    // Definimos una lista para almacenar los valores convertidos
    var convertedList = [];
    // Definimos el número de iteraciones
    var iterations = 1000;

    // Generar los puntos del atractor de Henon
    for (var i = 0; i < iterations; i++) {
        var newX = y + 1 - 1.4 * Math.pow(x, 2);
        var newY = 0.3 * x;

        x = newX;
        y = newY;

        console.log(x + ", " + y);

        var convertedX = x <= 0.39912 ? 0 : 1;
        var convertedY = y < 0.11977 ? 0 : 1;

        console.log(convertedX + " " + convertedY);

        // Agregar los valores convertidos a una lista
        convertedList.push(convertedX);
        convertedList.push(convertedY);
    }

    return convertedList;
}

function handleAnalyze() {
    const inputX = document.getElementById("input-x").value;
    const inputY = document.getElementById("input-y").value;

    // Convertir los valores de entrada a números
    var x = parseFloat(inputX);
    var y = parseFloat(inputY);

    // Verificar si los valores de entrada son números válidos
    if (isNaN(x) || isNaN(y)) {
        console.log("Ingrese valores numéricos válidos para X e Y.");
        renderAlert("Ingrese valores numéricos válidos para X e Y.");
        return;
    }

    // Verificar si el punto (x, y) se encuentra dentro de los puntos A, B, C y D
    if (
        (x >= -1.33 && x <= 1.32 && y >= -0.5 && y <= 0.42) ||
        (x >= -1.06 && x <= 1.245 && y >= -0.5 && y <= 0.42)
    ) {
        var convertedList = analyze(x, y);
        renderTextAreaCard(convertedList.join(""));
        renderGraph(x, y);
    } else {
        console.log("El punto (x, y) no se encuentra dentro de los puntos A, B, C y D.");
        renderAlert("El punto (x, y) no se encuentra dentro de los puntos A, B, C y D.");
    }
}

var converterContainer = document.getElementById("converter-container");

function renderTextAreaCard(convertedText) {
    var textAreaCardComponent = React.createElement(TextAreaCard, {
        convertedText: convertedText
    });

    var textAreaCardContainer = document.createElement("div");

    createRoot(textAreaCardContainer).render(textAreaCardComponent);

    converterContainer.appendChild(textAreaCardContainer);
}

var graphValidatedContainer = document.getElementById("graph-validated-container");

function renderGraph(x, y) {
    var graphComponent = React.createElement(Graph, {
        x: x,
        y: y
    });

    var graphContainer = document.createElement("div");

    createRoot(graphContainer).render(graphComponent);

    graphValidatedContainer.appendChild(graphContainer);
}

function renderAlert(alertText) {
    var alertComponent = React.createElement(Alert, {
        alertText: alertText
    });

    var alertContainer = document.createElement("div");

    createRoot(alertContainer).render(alertComponent);

    graphValidatedContainer.appendChild(alertContainer);
}

function deleteContainers() {
    document.getElementById("graph-validated-container").innerHTML = "";
    document.getElementById("converter-container").innerHTML = "";
}
