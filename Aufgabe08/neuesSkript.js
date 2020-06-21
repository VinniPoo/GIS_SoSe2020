"use strict";
let knepp = document?.getElementById("button");
knepp.addEventListener("click", ausgeben);
async function ausgeben(_event) {
    let formData = new FormData(document.forms[0]);
    let url = "https://vinnipooh.herokuapp.com/";
    let query = new URLSearchParams(formData);
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
//# sourceMappingURL=neuesSkript.js.map