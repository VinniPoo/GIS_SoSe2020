 namespace Aufgabe06 {

    interface Artikel {
        url: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: number;
    }

    let produkte: Artikel[] = [
        {
            url: "Bilder/Solo_Pro.png",
            name: "Sounds Solo Pro",
            beschreibung: "Der innovative On-Ear Kopfhörer Sounds Solo Pro mit ultra schneller Bluetooth Verbindung auf modernsten,\n" +
                "technischem Stand besticht durch sein schlichtes Design.\n" +
                "Als erster wireless Kopfhörer mit integriertem, aktivem Noise – Cancelling steht der Sounds Solo Pro für noch mehr Musikgenuss.",
            preis: 299.95,
            kategorie: 0
        },
        {
            url: "Bilder/Solo_Wireless.png",
            name: "Sounds Solo Wireless",
            beschreibung: "Der schlichte On-Ear Kopfhörer Sounds Solo Wireless wurde wegen erstklassigem Sound 2019\n" +
                "zum Wireless Soundsystem des Jahres gekrönt.\n" +
                "Um auch für längeres Hörvergnügen bereit zu sein hat das System eine Akkulaufzeit von bis zu 40 Stunden.\n" +
                "<br> ----------------------------------------------------------------",
            preis: 199.95,
            kategorie: 0
        },
        {
            url: "Bilder/Studio_Wireless.png",
            name: "Sounds Studio Wireless",
            beschreibung: "Der einzigartige Over-Ear Kopfhörer Sounds Studio Wireless\n" +
                "besitzt nicht nur eine erste Klasse Bluetooth Verbindung und ein aktives Noise Cancelling,\n" +
                "sondern ist vor allem aufgrund seines integrierten Sound Sourround Systems einzigartig.\n" +
                "Wir vom Sounds, versprechen ein Musikerlebniss auf Live Basis.",
            preis: 349.95,
            kategorie: 0
        },
        {
            url: "Bilder/Beats_EP.png",
            name: "Sounds EP",
            beschreibung: "Für den robusten On-Ear Kopfhörer Sounds EP steht sein leichtes Gestell\n" +
                "und das breite Klangspektrum mit dem er die Hörer begeistert.\n" +
                "Spezial: Das Modell ist in 8 coolen, verschiedenen Farben erhältlich.\n" +
                "<br> ----------------------------------------------------------------",
            preis: 99.95,
            kategorie: 0
        },


        {
            url: "Bilder/Powerbeats_Pro.png",
            name: "Powersounds Pro",
            beschreibung: "Die kabellosen In-Ear Kopfhörer Powersounds Pro besitzen eine Akkulaufzeit von bis zu 9 Stunden.\n" +
                "Der große Tragekomfort ist individuell anpassbar durch die verstellbaren Ohrbügel.\n" +
                "Zudem sind sie schweiß- und wasserbeständig. <br> ----------------------------------------------------------------",
            preis: 249.95,
            kategorie: 1
        },
        {
            url: "Bilder/Powerbeats.png",
            name: "Powersounds",
            beschreibung: "Durch das optimierte, runde Kabel sind die In-Ear Kopfhörer Powersounds perfekt für Sportler geeignet.\n" +
                "Schweiß- und Wasserbeständigkeit, sowie die erste Klasse Bluetooth Verbindung machen diese Kopfhörer zum perfekten Begleiter\n" +
                "für alle Aktiven",
            preis: 149.95,
            kategorie: 1
        },
        {
            url: "Bilder/BeatsX.png",
            name: "SoundsX",
            beschreibung: "Der SoundsX In-Ear Kopfhörer ist mit verschiedenen Ohreinsätzen und natürlicher Akkustik wie für dich gemacht.\n" +
                "Als Zusatzfunktion hat er eine erstklassige Schnellladefunktion, in nur 5 Minuten zu 2 Stunden Akkulaufzeit.",
            preis: 99.95,
            kategorie: 1
        },
        {
            url: "Bilder/Urbeats3.png",
            name: "Ursounds3",
            beschreibung: "Mit dem Ursounds3 In-Ear Kopfhörer bist du der Boss.\n" +
                "Manage deinen Alltag in dem du mit RemoteTalk Anrufe annimmst, bequem am Kopfhörer Musik steuerst oder Siri aktivierst.\n" +
                "Das ergonomische Design sorgt für ganztägigen Tragekomfort.",
            preis: 64.95,
            kategorie: 1
        },


        {
            url: "Bilder/UE_Megablast.png",
            name: "Sounds Megablast",
            beschreibung: "Im leistungsstarken Lautsprecher Sounds Megablast sorgt eine Amazon Alexa Integration dafür,\n" +
                "dass genau die Musik gespielt wird die du hören willst.\n" +
                "Der Lautsprecher mit dem klarsten Sound und dezimiertem Hochtöner sorgt nicht nur für Lautstärke,\n" +
                "sondern auch für originalgetreue Wiedergabe deiner Beats.",
            preis: 299.99,
            kategorie: 2
        },
        {
            url: "Bilder/UE_Blast.png",
            name: "Sounds Blast",
            beschreibung: "Der mobile Bluetooth Lautsprecher Sounds Blast passt sich mit integrierter Sprachsteuerung\n" +
                "(Amazon Alexa Integration) genau deinen Wünschen an.\n" +
                "Mit dem klaren und kraftvollen Sound steht er für das preisgekrönte 360-Grad-Sound-Konzept von Sounds\n" +
                "und verstärkt den Bass durch tiefe, satte Struktur.",
            preis: 199.99,
            kategorie: 2
        },
        {
            url: "Bilder/UE_Megaboom3.png",
            name: "Sounds Boom3",
            beschreibung: "Surfe mit dem Sounds Megaboom3 Lautsprecher deine Klangwelle und lass das Gerät auf dem Wasser schwimmen.\n" +
                "Der Megaboom3 überzeugt durch raumfüllende Klangausgabe aufgrund des besonderen Designs.\n" +
                "Zusatzspecial: Die innovative One-Touch-Musiksteuerung.",
            preis: 199.99,
            kategorie: 2
        },
        {
            url: "Bilder/UE_Boom3.png",
            name: "Sounds Boom3",
            beschreibung: "Den Sounds Boom3 Lautsprecher kannst du aus 16 krassen Farben auswählen.\n" +
                "Verbinde dich mit den Boxen deiner Freunde und macht das einzigartige Musikerlebniss von Sounds noch besonderer,\n" +
                "indem vor euren Ohren ein Live-Musikerlebnis entsteht. Gänsehaut.",
            preis: 149.00,
            kategorie: 2
        },
        {
            url: "Bilder/UE_Wonderboom2.png",
            name: "Sounds Wonderboom2",
            beschreibung: "Sei der Mittelpunkt jeder Party mit dem Sounds Wonderboom2 Lautsprecher und nimm ihn mit wohin du willst!\n" +
                "Durch Wasser- und Staubdichte ist dein kleiner Freund perfekt geschützt.\n" +
                "Das 360-Grad-Sound-System mit starkem Bass macht aus jeder kleinen Party eine krasse Rave.",
            preis: 99.99,
            kategorie: 2
        }
    ];

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
        newButton.addEventListener("click", warenAnzahl);
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

    function warenAnzahl(_event: Event): void {
        warenZähler++;
        amount.innerHTML = warenZähler.toString();
        //console.log(warenZähler);

        preis += parseFloat((<HTMLInputElement>_event.target)?.getAttribute("preis")!);
        console.log(preis + " €");
        document.getElementById("Warenkorb")?.appendChild(amount);
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