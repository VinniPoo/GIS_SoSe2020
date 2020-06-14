namespace Aufgabe007{
//Array auslesen fetch
async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
    let produkteJSON: string = await response.text();
    console.log(JSON.parse(produkteJSON)[0].name);
    //seitenstruktur(JSON.parse(produkteJSON));
}
communicate("Sounds.json");
console.log(localStorage);

/*for (let index: number = 0; index < parseInt(localStorage.?getItem("produktAnzahl")!); index++) { //(<HTMLInputElement>_event.target)?.getAttribute("name")!)
    const element = array[index];
    
    parseInt(localStorage.?getItem("name" + index)!);
}*/
}