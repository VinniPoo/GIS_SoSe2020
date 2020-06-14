"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        seitenstruktur(JSON.parse(produkteJSON));
    }
    communicate("Sounds.json");
    function seitenstruktur(produkte) {
        //for schleife
        for (let index = 0; index < produkte.length; index++) {
            //Div generieren
            let newDiv = document.createElement("div");
            newDiv.id = "Produkte" + index;
            if (produkte[index].kategorie == 0) {
                document.getElementById("OverEar")?.appendChild(newDiv);
                newDiv.setAttribute("class", "Produkte");
            }
            if (produkte[index].kategorie == 1) {
                document.getElementById("inEar")?.appendChild(newDiv);
                newDiv.setAttribute("class", "Produkte");
            }
            if (produkte[index].kategorie == 2) {
                document.getElementById("Boxen")?.appendChild(newDiv);
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
            let newBeschrP = document.createElement("p");
            newBeschrP.innerHTML = produkte[index].beschreibung;
            document.getElementById("Produkte" + index)?.appendChild(newBeschrP);
            //Preis
            let newPreisP = document.createElement("p");
            newPreisP.innerHTML = produkte[index].preis + " €";
            document.getElementById("Produkte" + index)?.appendChild(newPreisP);
            //Button
            let newButton = document.createElement("input");
            newButton.setAttribute("class", "Button");
            newButton.value = "Kaufen";
            newButton.type = "submit";
            document.getElementById("Produkte" + index)?.appendChild(newButton);
            newButton.addEventListener("click", warenAnzahl.bind(produkte[index]));
            //newButton.addEventListener("click", einkaufswagen);
            newButton.setAttribute("name", produkte[index].name);
            newButton.setAttribute("preis", produkte[index].preis.toString());
        }
        let warenZähler = 0;
        let preis = 0;
        let amount = document.createElement("p");
        amount.setAttribute("id", "zähler");
        document.getElementById("overOnEar")?.addEventListener("click", hide);
        document.getElementById("inEar1")?.addEventListener("click", hide1);
        document.getElementById("Boxen1")?.addEventListener("click", hide2);
        document.getElementById("all")?.addEventListener("click", hide3);
        function warenAnzahl(_event) {
            warenZähler++;
            amount.innerHTML = warenZähler.toString();
            //console.log(warenZähler);
            //preis += parseFloat((<HTMLInputElement>_event.target)?.getAttribute("preis")!);
            preis += this.preis;
            console.log(preis + " €");
            document.getElementById("Warenkorb")?.appendChild(amount);
            localStorage.setItem("name" + warenZähler, this.name);
            localStorage.setItem("produktAnzahl", warenZähler.toString());
            //(<HTMLElement>document.getElementById("overEar")).innerHTML = localStorage.getItem("click")!;
        }
    }
    function hide(_event) {
        document.getElementById("OverEar").style.display = "inline-block";
        document.getElementById("Anker1").style.display = "block";
        document.getElementById("inEar").style.display = "none";
        document.getElementById("Anker2").style.display = "none";
        document.getElementById("Boxen").style.display = "none";
        document.getElementById("Anker3").style.display = "none";
        document.getElementById("Trenner1").style.display = "none";
        document.getElementById("Trenner2").style.display = "none";
    }
    function hide1(_event) {
        document.getElementById("OverEar").style.display = "none";
        document.getElementById("Anker1").style.display = "none";
        document.getElementById("inEar").style.display = "inline-block";
        document.getElementById("Anker2").style.display = "block";
        document.getElementById("Boxen").style.display = "none";
        document.getElementById("Anker3").style.display = "none";
        document.getElementById("Trenner1").style.display = "none";
        document.getElementById("Trenner2").style.display = "none";
    }
    function hide2(_event) {
        document.getElementById("OverEar").style.display = "none";
        document.getElementById("Anker1").style.display = "none";
        document.getElementById("inEar").style.display = "none";
        document.getElementById("Anker2").style.display = "none";
        document.getElementById("Boxen").style.display = "inline-block";
        document.getElementById("Anker3").style.display = "block";
        document.getElementById("Trenner1").style.display = "none";
        document.getElementById("Trenner2").style.display = "none";
    }
    function hide3(_event) {
        document.getElementById("OverEar").style.display = "inline-block";
        document.getElementById("Anker1").style.display = "block";
        document.getElementById("inEar").style.display = "inline-block";
        document.getElementById("Anker2").style.display = "block";
        document.getElementById("Boxen").style.display = "inline-block";
        document.getElementById("Anker3").style.display = "block";
        document.getElementById("Trenner1").style.display = "block";
        document.getElementById("Trenner2").style.display = "block";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map