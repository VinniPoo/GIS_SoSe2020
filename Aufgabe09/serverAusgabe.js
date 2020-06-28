"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    async function htmlAusgabe(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://vinnipooh.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html";
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answerString = await answer.text();
        let variable = document.getElementById("myDiv");
        variable.innerHTML = answerString;
    }
    document.getElementById("button")?.addEventListener("click", htmlAusgabe);
    async function jsonAusgabe(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://vinnipooh.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json";
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answerString = await answer.json();
        console.log(answerString);
        /*let variable: HTMLElement = <HTMLElement> document.getElementById("Test123");
        variable.innerHTML = answerString;*/
    }
    document.getElementById("button2")?.addEventListener("click", jsonAusgabe);
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=serverAusgabe.js.map