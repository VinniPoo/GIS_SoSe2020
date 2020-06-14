namespace Aufgabe07 {

    interface Artikel {
        url: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON: string = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        seitenstruktur(JSON.parse(produkteJSON));
    }
    communicate("Sounds.json");


    function seitenstruktur(produkte: Artikel[]): void {
        //for schleife
        for (let index: number = 0; index < produkte.length; index++) {

            //Div generieren
            let newDiv: HTMLElement = document.createElement("div");
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
            let newBildI: HTMLElement = document.createElement("img");
            newBildI.setAttribute("src", produkte[index].url);
            document.getElementById("Produkte" + index)?.appendChild(newBildI);

            //Name
            let newNameP: HTMLElement = document.createElement("p");
            newNameP.innerHTML = produkte[index].name;
            document.getElementById("Produkte" + index)?.appendChild(newNameP);

            //Beschreibung
            let newBeschrP: HTMLElement = document.createElement("p");
            newBeschrP.innerHTML = produkte[index].beschreibung;
            document.getElementById("Produkte" + index)?.appendChild(newBeschrP);

            //Preis
            let newPreisP: HTMLElement = document.createElement("p");
            newPreisP.innerHTML = produkte[index].preis + " €";
            document.getElementById("Produkte" + index)?.appendChild(newPreisP);

            //Button
            let newButton: HTMLInputElement = document.createElement("input");
            newButton.setAttribute("class", "Button");
            newButton.value = "Kaufen";
            newButton.type = "submit";
            document.getElementById("Produkte" + index)?.appendChild(newButton);
            newButton.addEventListener("click", warenAnzahl.bind(produkte[index]));
            //newButton.addEventListener("click", einkaufswagen);
            newButton.setAttribute("name", produkte[index].name);
            newButton.setAttribute("preis", produkte[index].preis.toString());
        }


        let warenZähler: number = 0;
        let preis: number = 0;
        let amount: HTMLElement = document.createElement("p");
        amount.setAttribute("id", "zähler");
        document.getElementById("overOnEar")?.addEventListener("click", hide);
        document.getElementById("inEar1")?.addEventListener("click", hide1);
        document.getElementById("Boxen1")?.addEventListener("click", hide2);
        document.getElementById("all")?.addEventListener("click", hide3);

        function warenAnzahl(this: Artikel, _event: Event): void {
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

    function hide(_event: Event): void {
        (<HTMLElement>document.getElementById("OverEar")).style.display = "inline-block";
        (<HTMLElement>document.getElementById("Anker1")).style.display = "block";
        (<HTMLElement>document.getElementById("inEar")).style.display = "none";
        (<HTMLElement>document.getElementById("Anker2")).style.display = "none";
        (<HTMLElement>document.getElementById("Boxen")).style.display = "none";
        (<HTMLElement>document.getElementById("Anker3")).style.display = "none";
        (<HTMLElement>document.getElementById("Trenner1")).style.display = "none";
        (<HTMLElement>document.getElementById("Trenner2")).style.display = "none";
    }
    function hide1(_event: Event): void {
        (<HTMLElement>document.getElementById("OverEar")).style.display = "none";
        (<HTMLElement>document.getElementById("Anker1")).style.display = "none";
        (<HTMLElement>document.getElementById("inEar")).style.display = "inline-block";
        (<HTMLElement>document.getElementById("Anker2")).style.display = "block";
        (<HTMLElement>document.getElementById("Boxen")).style.display = "none";
        (<HTMLElement>document.getElementById("Anker3")).style.display = "none";
        (<HTMLElement>document.getElementById("Trenner1")).style.display = "none";
        (<HTMLElement>document.getElementById("Trenner2")).style.display = "none";
    }
    function hide2(_event: Event): void {
        (<HTMLElement>document.getElementById("OverEar")).style.display = "none";
        (<HTMLElement>document.getElementById("Anker1")).style.display = "none";
        (<HTMLElement>document.getElementById("inEar")).style.display = "none";
        (<HTMLElement>document.getElementById("Anker2")).style.display = "none";
        (<HTMLElement>document.getElementById("Boxen")).style.display = "inline-block";
        (<HTMLElement>document.getElementById("Anker3")).style.display = "block";
        (<HTMLElement>document.getElementById("Trenner1")).style.display = "none";
        (<HTMLElement>document.getElementById("Trenner2")).style.display = "none";
    }
    function hide3(_event: Event): void {
        (<HTMLElement>document.getElementById("OverEar")).style.display = "inline-block";
        (<HTMLElement>document.getElementById("Anker1")).style.display = "block";
        (<HTMLElement>document.getElementById("inEar")).style.display = "inline-block";
        (<HTMLElement>document.getElementById("Anker2")).style.display = "block";
        (<HTMLElement>document.getElementById("Boxen")).style.display = "inline-block";
        (<HTMLElement>document.getElementById("Anker3")).style.display = "block";
        (<HTMLElement>document.getElementById("Trenner1")).style.display = "block";
        (<HTMLElement>document.getElementById("Trenner2")).style.display = "block";
    }
}