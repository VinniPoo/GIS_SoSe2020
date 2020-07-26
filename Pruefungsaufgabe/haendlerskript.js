"use strict";
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    let zutaten = JSON.parse((localStorage.getItem("artikel")));
    console.log(zutaten);
    seitenstruktur();
    function seitenstruktur() {
        for (let i = 0; i < zutaten.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "div");
            newDiv.id = "Produkte" + i;
            document.getElementById("warenkorbProdukte1")?.appendChild(newDiv);
            newDiv.setAttribute("class", "div");
            let newBild = document.createElement("img");
            newBild.setAttribute("src", zutaten[i].bild);
            newDiv.appendChild(newBild);
            let newButton = document.createElement("input");
            newButton.value = "Löschen";
            newButton.type = "submit";
            newButton.id = "button";
            newDiv.appendChild(newButton);
            newButton.addEventListener("click", entfernen.bind(zutaten[i]));
            newButton.setAttribute("index", i.toString());
        }
        function entfernen(_event) {
            let index = _event.target?.getAttribute("index");
            document.getElementById("Produkte" + index)?.remove();
            zutaten.splice(parseInt(index), 1);
            localStorage.setItem("artikel", JSON.stringify(zutaten));
            location.reload();
        }
        document.getElementById("entfernen")?.addEventListener("click", allesEntfernen);
        function allesEntfernen(_event) {
            document.getElementById("warenkorbProdukte1")?.remove();
            localStorage.clear();
            zutaten.splice(0);
        }
        let total = 0;
        for (let index = 0; index < zutaten.length; index++) {
            total += zutaten[index].preis;
        }
        let summe = document.createElement("div");
        summe.id = "summenDiv";
        summe.innerHTML = "Preis: " + total.toString() + "€";
        document.getElementById("warenkorbProdukte1")?.appendChild(summe);
    }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
//# sourceMappingURL=haendlerskript.js.map