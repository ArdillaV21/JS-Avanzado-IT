import { getData } from "./async.js";
import {root, links, brand} from "./variable.js"
import Nav from "./components/navigation.js";

root.innerHTML += Nav(links,brand)

document.addEventListener('click', (e) => {
    const tag = e.target.tagName
    if(tag == "A"){
        e.preventDefault()
    }
})