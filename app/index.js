import { getData } from "./async.js";
import {root, links, brand} from "./variable.js"
import Nav from "./components/navigation.js";

root.innerHTML += Nav(links,brand)

document.addEventListener('click', (e) => {
    e.preventDefault()
    const tag = e.target.tagName

    if(tag === "A"){

    }
    if(tag === "BUTTON"){

    }
})