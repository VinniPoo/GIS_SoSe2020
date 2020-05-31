"use strict";
let overOnEar = [
    { url: "Bilder/Solo_Pro.png",
        name: "Sounds Solo Pro",
        beschreibung: "Der innovative On-Ear Kopfhörer Sounds Solo Pro mit ultra schneller Bluetooth Verbindung auf modernsten,\n" +
            "technischem Stand besticht durch sein schlichtes Design.\n" +
            "Als erster wireless Kopfhörer mit integriertem, aktivem Noise – Cancelling steht der Sounds Solo Pro für noch mehr Musikgenuss.",
        preis: "299,95 €" },
    { url: "Bilder/Solo_Wireless.png",
        name: "Sounds Solo Wireless",
        beschreibung: "Der schlichte On-Ear Kopfhörer Sounds Solo Wireless wurde wegen erstklassigem Sound 2019\n" +
            "zum Wireless Soundsystem des Jahres gekrönt.\n" +
            "Um auch für längeres Hörvergnügen bereit zu sein hat das System eine Akkulaufzeit von bis zu 40 Stunden.\n" +
            "<br> ----------------------------------------------------------------",
        preis: "199,95 €" },
    { url: "Bilder/Studio_Wireless.png",
        name: "Sounds Studio Wireless",
        beschreibung: "Der einzigartige Over-Ear Kopfhörer Sounds Studio Wireless\n" +
            "besitzt nicht nur eine erste Klasse Bluetooth Verbindung und ein aktives Noise Cancelling,\n" +
            "sondern ist vor allem aufgrund seines integrierten Sound Sourround Systems einzigartig.\n" +
            "Wir vom Sounds, versprechen ein Musikerlebniss auf Live Basis.",
        preis: "349,95 €" },
    { url: "Bilder/Beats_EP.png",
        name: "Sounds EP",
        beschreibung: "Für den robusten On-Ear Kopfhörer Sounds EP steht sein leichtes Gestell\n" +
            "und das breite Klangspektrum mit dem er die Hörer begeistert.\n" +
            "Spezial: Das Modell ist in 8 coolen, verschiedenen Farben erhältlich.\n" +
            "<br> ----------------------------------------------------------------",
        preis: "99,95 €" }
];
let inEar = [
    { url: "Bilder/Powerbeats_Pro.png",
        name: "Powersounds Pro",
        beschreibung: "Die kabellosen In-Ear Kopfhörer Powersounds Pro besitzen eine Akkulaufzeit von bis zu 9 Stunden.\n" +
            "Der große Tragekomfort ist individuell anpassbar durch die verstellbaren Ohrbügel.\n" +
            "Zudem sind sie schweiß- und wasserbeständig. <br> ----------------------------------------------------------------",
        preis: "249,95 €" },
    { url: "Bilder/Powerbeats.png",
        name: "Powersounds",
        beschreibung: "Durch das optimierte, runde Kabel sind die In-Ear Kopfhörer Powersounds perfekt für Sportler geeignet.\n" +
            "Schweiß- und Wasserbeständigkeit, sowie die erste Klasse Bluetooth Verbindung machen diese Kopfhörer zum perfekten Begleiter\n" +
            "für alle Aktiven",
        preis: "149,95 €" },
    { url: "Bilder/BeatsX.png",
        name: "SoundsX",
        beschreibung: "Der SoundsX In-Ear Kopfhörer ist mit verschiedenen Ohreinsätzen und natürlicher Akkustik wie für dich gemacht.\n" +
            "Als Zusatzfunktion hat er eine erstklassige Schnellladefunktion, in nur 5 Minuten zu 2 Stunden Akkulaufzeit.",
        preis: "99,95 €" },
    { url: "Bilder/Urbeats3.png",
        name: "Ursounds3",
        beschreibung: "Mit dem Ursounds3 In-Ear Kopfhörer bist du der Boss.\n" +
            "Manage deinen Alltag in dem du mit RemoteTalk Anrufe annimmst, bequem am Kopfhörer Musik steuerst oder Siri aktivierst.\n" +
            "Das ergonomische Design sorgt für ganztägigen Tragekomfort.",
        preis: "64,95 €" }
];
let boxen = [
    { url: "Bilder/UE_Megablast.png",
        name: "Sounds Megablast",
        beschreibung: "Im leistungsstarken Lautsprecher Sounds Megablast sorgt eine Amazon Alexa Integration dafür,\n" +
            "dass genau die Musik gespielt wird die du hören willst.\n" +
            "Der Lautsprecher mit dem klarsten Sound und dezimiertem Hochtöner sorgt nicht nur für Lautstärke,\n" +
            "sondern auch für originalgetreue Wiedergabe deiner Beats.",
        preis: "299,99 €" },
    { url: "Bilder/UE_Blast.png",
        name: "Sounds Blast",
        beschreibung: "Der mobile Bluetooth Lautsprecher Sounds Blast passt sich mit integrierter Sprachsteuerung\n" +
            "(Amazon Alexa Integration) genau deinen Wünschen an.\n" +
            "Mit dem klaren und kraftvollen Sound steht er für das preisgekrönte 360-Grad-Sound-Konzept von Sounds\n" +
            "und verstärkt den Bass durch tiefe, satte Struktur.",
        preis: "199,99 €" },
    { url: "Bilder/UE_Megaboom3.png",
        name: "Sounds Boom3",
        beschreibung: "Surfe mit dem Sounds Megaboom3 Lautsprecher deine Klangwelle und lass das Gerät auf dem Wasser schwimmen.\n" +
            "Der Megaboom3 überzeugt durch raumfüllende Klangausgabe aufgrund des besonderen Designs.\n" +
            "Zusatzspecial: Die innovative One-Touch-Musiksteuerung.",
        preis: "199,99 €" },
    { url: "Bilder/UE_Boom3.png",
        name: "Sounds Boom3",
        beschreibung: "Den Sounds Boom3 Lautsprecher kannst du aus 16 krassen Farben auswählen.\n" +
            "Verbinde dich mit den Boxen deiner Freunde und macht das einzigartige Musikerlebniss von Sounds noch besonderer,\n" +
            "indem vor euren Ohren ein Live-Musikerlebnis entsteht. Gänsehaut.",
        preis: "149,00 €" },
    { url: "Bilder/UE_Wonderboom2.png",
        name: "Sounds Wonderboom2",
        beschreibung: "Sei der Mittelpunkt jeder Party mit dem Sounds Wonderboom2 Lautsprecher und nimm ihn mit wohin du willst!\n" +
            "Durch Wasser- und Staubdichte ist dein kleiner Freund perfekt geschützt.\n" +
            "Das 360-Grad-Sound-System mit starkem Bass macht aus jeder kleinen Party eine krasse Rave.",
        preis: "99,99 €" }
];
for (let index = 0; index < overOnEar.length; index++) {
    //Div
    let newDiv = document.createElement("div");
    newDiv.id = "OvProdukt" + index;
    document.getElementById("OverEar")?.appendChild(newDiv);
    newDiv.setAttribute("class", "Produkte");
    //Bild
    let newBildI = document.createElement("img");
    newBildI.setAttribute("src", overOnEar[index].url);
    document.getElementById("OvProdukt" + index)?.appendChild(newBildI);
    //Name
    let newNameP = document.createElement("p");
    newNameP.innerHTML = overOnEar[index].name;
    document.getElementById("OvProdukt" + index)?.appendChild(newNameP);
    //Beschreibung
    let newBeschrP = document.createElement("p");
    newBeschrP.innerHTML = overOnEar[index].beschreibung;
    document.getElementById("OvProdukt" + index)?.appendChild(newBeschrP);
    //Preis
    let newPreisP = document.createElement("p");
    newPreisP.innerHTML = overOnEar[index].preis;
    document.getElementById("OvProdukt" + index)?.appendChild(newPreisP);
    //Button
    let newButton = document.createElement("input");
    newButton.setAttribute("class", "Button");
    newButton.value = "Kaufen";
    newButton.type = "submit";
    document.getElementById("OvProdukt" + index)?.appendChild(newButton);
}
for (let index = 0; index < inEar.length; index++) {
    //Div
    let newDiv = document.createElement("div");
    newDiv.id = "InProdukt" + index;
    document.getElementById("inEar")?.appendChild(newDiv);
    newDiv.setAttribute("class", "Produkte");
    //Bild
    let newBildI = document.createElement("img");
    newBildI.setAttribute("src", inEar[index].url);
    document.getElementById("InProdukt" + index)?.appendChild(newBildI);
    //Name
    let newNameP = document.createElement("p");
    newNameP.innerHTML = inEar[index].name;
    document.getElementById("InProdukt" + index)?.appendChild(newNameP);
    //Beschreibung
    let newBeschrP = document.createElement("p");
    newBeschrP.innerHTML = inEar[index].beschreibung;
    document.getElementById("InProdukt" + index)?.appendChild(newBeschrP);
    //Preis
    let newPreisP = document.createElement("p");
    newPreisP.innerHTML = inEar[index].preis;
    document.getElementById("InProdukt" + index)?.appendChild(newPreisP);
    //Button
    let newButton = document.createElement("input");
    newButton.setAttribute("class", "Button");
    newButton.value = "Kaufen";
    newButton.type = "submit";
    document.getElementById("InProdukt" + index)?.appendChild(newButton);
}
for (let index = 0; index < boxen.length; index++) {
    //Div
    let newDiv = document.createElement("div");
    newDiv.id = "BoProdukt" + index;
    document.getElementById("Boxen")?.appendChild(newDiv);
    newDiv.setAttribute("class", "Produkte");
    //Bild
    let newBildI = document.createElement("img");
    newBildI.setAttribute("src", boxen[index].url);
    document.getElementById("BoProdukt" + index)?.appendChild(newBildI);
    //Name
    let newNameP = document.createElement("p");
    newNameP.innerHTML = boxen[index].name;
    document.getElementById("BoProdukt" + index)?.appendChild(newNameP);
    //Beschreibung
    let newBeschrP = document.createElement("p");
    newBeschrP.innerHTML = boxen[index].beschreibung;
    document.getElementById("BoProdukt" + index)?.appendChild(newBeschrP);
    //Preis
    let newPreisP = document.createElement("p");
    newPreisP.innerHTML = boxen[index].preis;
    document.getElementById("BoProdukt" + index)?.appendChild(newPreisP);
    //Button
    let newButton = document.createElement("input");
    newButton.setAttribute("class", "Button");
    newButton.value = "Kaufen";
    newButton.type = "submit";
    document.getElementById("BoProdukt" + index)?.appendChild(newButton);
}
//# sourceMappingURL=script.js.map