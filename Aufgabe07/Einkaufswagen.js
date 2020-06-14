"use strict";
var Aufgabe007;
(function (Aufgabe007) {
    //Array auslesen fetch
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let produkteJSON = await response.text();
        console.log(JSON.parse(produkteJSON)[0].name);
        //seitenstruktur(JSON.parse(produkteJSON));
    }
    communicate("Sounds.json");
    console.log(localStorage);
    /*for (let index: number = 0; index < parseInt(localStorage.?getItem("produktAnzahl")!); index++) { //(<HTMLInputElement>_event.target)?.getAttribute("name")!)
        const element = array[index];
        
        parseInt(localStorage.?getItem("name" + index)!);
    }*/
})(Aufgabe007 || (Aufgabe007 = {}));
//# sourceMappingURL=Einkaufswagen.js.map