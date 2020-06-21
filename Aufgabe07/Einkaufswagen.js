"use strict";
//console.log(JSON.parse(localStorage.getItem("name")!));
let produkte = JSON.parse((localStorage.getItem("name")));
console.log(produkte);
seitenstruktur();
function seitenstruktur() {
    //for schleife
    for (let index = 0; index < produkte.length; index++) {
        //Div generieren
        let newDiv = document.createElement("div");
        newDiv.id = "Produkte" + index;
        /*document.getElementById("warenkorbProdukte")?.appendChild(newDiv);
        newDiv.setAttribute("class", "Produkte");*/
        if (produkte[index].kategorie == 0) {
            document.getElementById("warenkorbProdukte")?.appendChild(newDiv);
            newDiv.setAttribute("class", "Produkte");
        }
        if (produkte[index].kategorie == 1) {
            document.getElementById("warenkorbProdukte")?.appendChild(newDiv);
            newDiv.setAttribute("class", "Produkte");
        }
        if (produkte[index].kategorie == 2) {
            document.getElementById("warenkorbProdukte")?.appendChild(newDiv);
            newDiv.setAttribute("class", "Produkte");
        }
        //Bild
        let newBildI = document.createElement("img");
        newBildI.setAttribute("src", produkte[index].url);
        document.getElementById("Produkte" + index)?.appendChild(newBildI);
        //Name
        let newNameP = document.createElement("p");
        newNameP.innerHTML = produkte[index].name;
        document.getElementById("Produkte" + index)?.appendChild(newNameP);
        //Beschreibung
        /*let newBeschrP: HTMLElement = document.createElement("p");
        newBeschrP.innerHTML = produkte[index].beschreibung;
        document.getElementById("Produkte" + index)?.appendChild(newBeschrP);`*/
        //Preis
        let newPreisP = document.createElement("p");
        newPreisP.innerHTML = produkte[index].preis + " €";
        document.getElementById("Produkte" + index)?.appendChild(newPreisP);
        //Button
        let newButton = document.createElement("input");
        newButton.setAttribute("class", "Button");
        newButton.value = "Entfernen";
        newButton.type = "submit";
        document.getElementById("Produkte" + index)?.appendChild(newButton);
        newButton.addEventListener("click", löschen.bind(produkte[index]));
        newButton.setAttribute("index", index.toString());
        //newButton.addEventListener("click", einkaufswagen);
        //newButton.setAttribute("name", produkte[index].name);
        //newButton.setAttribute("preis", produkte[index].preis.toString());
    }
    function löschen(_event) {
        let index = _event.target?.getAttribute("index");
        document.getElementById("Produkte" + index)?.remove();
        produkte.splice(parseInt(index), 1);
        localStorage.setItem("name", JSON.stringify(produkte));
        location.reload();
    }
    document.getElementById("dochNicht")?.addEventListener("click", allesLöschen);
    function allesLöschen(_event) {
        document.getElementById("warenkorbProdukte")?.remove();
        localStorage.clear();
        produkte.splice(0);
        let gesPr = document.createElement("h2");
        gesPr.innerHTML = "Preis: 0€";
        document.getElementById("gesamtPreis")?.appendChild(gesPr);
        document.getElementById("wegMitDemPreis")?.remove();
    }
    let gesamtPreis = 0;
    for (let index = 0; index < produkte.length; index++) {
        gesamtPreis += produkte[index].preis;
    }
    let gesPr = document.createElement("h2");
    gesPr.id = "wegMitDemPreis";
    gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
    document.getElementById("gesamtPreis")?.appendChild(gesPr);
}
//# sourceMappingURL=Einkaufswagen.js.map