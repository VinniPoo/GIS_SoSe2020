namespace Prüfungsaufgabe {
    interface Artikel {
        bild: string;
        name: string;
        preis: number;
        kategorie: number;

    }

    async function produkteHolen(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let produkte: string = await response.text();
        seitenstruktur(JSON.parse(produkte));
        console.log(JSON.parse(produkte));

    }

    produkteHolen("produkte.json");

    function seitenstruktur(zutaten: Artikel[]): void {
        for (let i: number = 0; i < zutaten.length; i++) {
            let newDiv: HTMLElement = document.createElement("div");
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

            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", zutaten[i].bild);
            newDiv.appendChild(newBild);

            let newName: HTMLElement = document.createElement("h4");
            newName.innerHTML = zutaten[i].name;
            newDiv.appendChild(newName);

            let newPreis: HTMLElement = document.createElement("h4");
            newPreis.innerHTML = zutaten[i].preis.toString() + " €";
            newDiv.appendChild(newPreis);

            let newButton: HTMLInputElement = document.createElement("input");
            newButton.value = "Kaufen";
            newButton.type = "submit";
            newButton.id = "button";
            newDiv.appendChild(newButton);
            newButton.addEventListener("click", warenZähler.bind(zutaten[i]));
            newButton.setAttribute("name", zutaten[i].name);
            newButton.setAttribute("preis", zutaten[i].preis.toString());
            newButton.addEventListener("click", kaufen.bind(zutaten[i]));
        }

        let warenAnzahl: number = 0;
        let preis: number = 0;
        let anzahl: HTMLElement = document.createElement("p");
        anzahl.setAttribute("id", "zähler");

        let warenkorb: Artikel[] = new Array;

        function warenZähler(this: Artikel, _event: Event): void {
            warenAnzahl++;
            anzahl.innerHTML = warenZähler.toString();

            preis += this.preis;

            let kosten: HTMLElement = document.createElement("p");
            kosten.innerHTML = preis + "€";
            document.getElementById("einkaufswagen")?.appendChild(kosten);

            warenkorb.push(this);
            localStorage.setItem("artikel", JSON.stringify(warenkorb));
            document.getElementById("warenkorb")?.appendChild(anzahl);
            anzahl.innerHTML = JSON.parse(localStorage.getItem("artikel")!).length;
        }



        function kaufen(this: Artikel, _event: Event): void {
            let einkauf: Artikel[] = JSON.parse(localStorage.getItem("artikel")!);
            let holProdukte: HTMLElement = document.getElementById("einkaufswagen")!;
            let newEinkauf: HTMLImageElement = document.createElement("img");
            newEinkauf.src = this.bild;
            holProdukte.appendChild(newEinkauf);
        }
    }
}