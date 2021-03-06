let knepp: HTMLElement = <HTMLElement>document?.getElementById("button");
knepp.addEventListener("click", ausgeben);

async function ausgeben(_event: Event): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://vinnipooh.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    console.log(query.toString());
    await fetch(url);
    for (let entry of query) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
}

//https://vinnipooh.herokuapp.com/