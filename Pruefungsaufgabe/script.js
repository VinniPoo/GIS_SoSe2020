"use strict";
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    async function produkteHolen(_url) {
        let response = await fetch(_url);
        let produkte = await response.text();
        seitenstruktur(JSON.parse(produkte));
        console.log(JSON.parse(produkte));
    }
    produkteHolen("produkte.json");
    function seitenstruktur(zutaten) {
        for (let i = 0; i < zutaten.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "div");
            newDiv.id = "Produkte" + i;
            if (zutaten[i].kategorie == 0) {
                document.getElementById("waffeln")?.appendChild(newDiv);
                newDiv.setAttribute("class", "div");
            }
            if (zutaten[i].kategorie == 1) {
                document.getElementById("eis")?.appendChild(newDiv);
                newDiv.setAttribute("class", "div");
            }
            if (zutaten[i].kategorie == 2) {
                document.getElementById("toppings")?.appendChild(newDiv);
                newDiv.setAttribute("class", "div");
            }
            if (zutaten[i].kategorie == 3) {
                document.getElementById("soßen")?.appendChild(newDiv);
                newDiv.setAttribute("class", "div");
            }
            let newBild = document.createElement("img");
            newBild.setAttribute("src", zutaten[i].bild);
            newDiv.appendChild(newBild);
            let newName = document.createElement("h4");
            newName.innerHTML = zutaten[i].name;
            newDiv.appendChild(newName);
            let newPreis = document.createElement("h4");
            newPreis.innerHTML = zutaten[i].preis.toString() + " €";
            newDiv.appendChild(newPreis);
            let newButton = document.createElement("input");
            newButton.value = "Kaufen";
            newButton.type = "submit";
            newButton.id = "button";
            newDiv.appendChild(newButton);
            newButton.addEventListener("click", warenZähler.bind(zutaten[i]));
            newButton.setAttribute("name", zutaten[i].name);
            newButton.setAttribute("preis", zutaten[i].preis.toString());
            newButton.addEventListener("click", kaufen.bind(zutaten[i]));
        }
        let warenAnzahl = 0;
        let preis = 0;
        let anzahl = document.createElement("p");
        anzahl.setAttribute("id", "zähler");
        let warenkorb = new Array;
        function warenZähler(_event) {
            warenAnzahl++;
            anzahl.innerHTML = warenZähler.toString();
            preis += this.preis;
            let kosten = document.createElement("p");
            kosten.innerHTML = preis + "€";
            document.getElementById("einkaufswagen")?.appendChild(kosten);
            warenkorb.push(this);
            localStorage.setItem("artikel", JSON.stringify(warenkorb));
            document.getElementById("warenkorb")?.appendChild(anzahl);
            anzahl.innerHTML = JSON.parse(localStorage.getItem("artikel")).length;
        }
        function kaufen(_event) {
            let einkauf = JSON.parse(localStorage.getItem("artikel"));
            let holProdukte = document.getElementById("einkaufswagen");
            let newEinkauf = document.createElement("img");
            newEinkauf.src = this.bild;
            holProdukte.appendChild(newEinkauf);
        }
    }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
//# sourceMappingURL=script.js.map