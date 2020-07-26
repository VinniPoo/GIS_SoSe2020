namespace Prüfungsaufgabe {
    interface Artikel {
        bild: string;
        name: string;
        preis: number;
        kategorie: number;

    }
    let zutaten: Artikel[] = JSON.parse((localStorage.getItem("artikel")!));
    console.log(zutaten);

    seitenstruktur();

    function seitenstruktur(): void {
        for (let i: number = 0; i < zutaten.length; i++) {
            let newDiv: HTMLElement = document.createElement("div");
            newDiv.setAttribute("class", "div");
            newDiv.id = "Produkte" + i;


            document.getElementById("warenkorbProdukte1")?.appendChild(newDiv);
            newDiv.setAttribute("class", "div");


            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", zutaten[i].bild);
            newDiv.appendChild(newBild);

            let newButton: HTMLInputElement = document.createElement("input");
            newButton.value = "Löschen";
            newButton.type = "submit";
            newButton.id = "button";
            newDiv.appendChild(newButton);
            newButton.addEventListener("click", entfernen.bind(zutaten[i]));
            newButton.setAttribute("index", i.toString());
        }

        function entfernen(this: Artikel, _event: Event): void {
            let index: string = (<HTMLInputElement>_event.target)?.getAttribute("index")!;
            document.getElementById("Produkte" + index)?.remove();
            zutaten.splice(parseInt(index), 1);
            localStorage.setItem("artikel", JSON.stringify(zutaten));
            location.reload();
        }

        document.getElementById("entfernen")?.addEventListener("click", allesEntfernen);

        function allesEntfernen(_event: Event): void {
            document.getElementById("warenkorbProdukte1")?.remove();
            localStorage.clear();
            zutaten.splice(0);
        }

        let total: number = 0;
        for (let index: number = 0; index < zutaten.length; index++) {
            total += zutaten[index].preis;
        }
        let summe: HTMLElement = document.createElement("div");
        summe.id = "summenDiv";
        summe.innerHTML = "Preis: " + total.toString() + "€";
        document.getElementById("warenkorbProdukte1")?.appendChild(summe);
    }
}