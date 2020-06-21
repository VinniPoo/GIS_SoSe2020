//Array auslesen fetch
/*async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
    let produkteJSON: string = await response.text();
    console.log(JSON.parse(produkteJSON)[0].name);
    //seitenstruktur(JSON.parse(produkteJSON));
}
communicate("Sounds.json");
console.log(localStorage);
localStorage.clear();
for (let index: number = 0; index < parseInt(localStorage.?getItem("produktAnzahl")!); index++) { //(<HTMLInputElement>_event.target)?.getAttribute("name")!)
    const element = array[index];
    
    parseInt(localStorage.?getItem("name" + index)!);
}*/
interface Artikel {
    url: string;
    name: string;
    beschreibung: string;
    preis: number;
    kategorie: number;

}
//console.log(JSON.parse(localStorage.getItem("name")!));

let produkte: Artikel[] = JSON.parse((localStorage.getItem("name")!));
console.log(produkte);

seitenstruktur();

function seitenstruktur(): void {
    //for schleife
    for (let index: number = 0; index < produkte.length; index++) {
        //Div generieren
        let newDiv: HTMLElement = document.createElement("div");
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
        let newBildI: HTMLElement = document.createElement("img");
        newBildI.setAttribute("src", produkte[index].url);
        document.getElementById("Produkte" + index)?.appendChild(newBildI);

        //Name
        let newNameP: HTMLElement = document.createElement("p");
        newNameP.innerHTML = produkte[index].name;
        document.getElementById("Produkte" + index)?.appendChild(newNameP);

        //Beschreibung
        /*let newBeschrP: HTMLElement = document.createElement("p");
        newBeschrP.innerHTML = produkte[index].beschreibung;
        document.getElementById("Produkte" + index)?.appendChild(newBeschrP);`*/

        //Preis
        let newPreisP: HTMLElement = document.createElement("p");
        newPreisP.innerHTML = produkte[index].preis + " €";
        document.getElementById("Produkte" + index)?.appendChild(newPreisP);

        //Button
        let newButton: HTMLInputElement = document.createElement("input");
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

    function löschen(this: Artikel, _event: Event): void {
        let index: string = (<HTMLInputElement>_event.target)?.getAttribute("index")!;
        document.getElementById("Produkte" + index)?.remove();
        produkte.splice(parseInt(index), 1);
        localStorage.setItem("name", JSON.stringify(produkte));
        location.reload();
    }

    document.getElementById("dochNicht")?.addEventListener("click", allesLöschen);

    function allesLöschen(_event: Event): void {
        document.getElementById("warenkorbProdukte")?.remove();
        localStorage.clear();
        produkte.splice(0);

        let gesPr: HTMLElement = document.createElement("h2");
        gesPr.innerHTML = "Preis: 0€";
        document.getElementById("gesamtPreis")?.appendChild(gesPr);
    
        document.getElementById("wegMitDemPreis")?.remove();
    }

    let gesamtPreis: number = 0;
    for (let index: number = 0; index < produkte.length; index++) {
        gesamtPreis += produkte[index].preis;
    }
    let gesPr: HTMLElement = document.createElement("h2");
    gesPr.id = "wegMitDemPreis";
    gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
    document.getElementById("gesamtPreis")?.appendChild(gesPr);
}