namespace Aufgabe09 {
    async function htmlAusgabe(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://vinnipooh.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html";
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        let answerString: string = await answer.text();
        let variable: HTMLElement = <HTMLElement> document.getElementById("myDiv");
        variable.innerHTML = answerString;
    }
    document.getElementById("button")?.addEventListener("click", htmlAusgabe);
    
    async function jsonAusgabe(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://vinnipooh.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json";
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        let answerString: string = await answer.json();
        console.log(answerString);
        /*let variable: HTMLElement = <HTMLElement> document.getElementById("Test123");
        variable.innerHTML = answerString;*/
    }
    document.getElementById("button2")?.addEventListener("click", jsonAusgabe);
}