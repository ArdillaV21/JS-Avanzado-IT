import { getData } from "./async.js";
import {root, main, links, brand, pub, jph} from "./variable.js"
import Nav from "./components/navigation.js";

root.innerHTML += Nav(links,brand)

document.addEventListener('click', (e) => {
    e.preventDefault()
    const tag = e.target.tagName

    if(tag === "A"){

    }
    if(tag === "BUTTON"){
        if(e.target.hasAttribute('data-url')){
            const {url, link} = e.target.dataset
            const server = link === "remote" ? jph : link === "local" ? pub : null;
            history.pushState("","",url)
            const data = server ? getData(`${server}/${url}`) : null;

            render(data, url)
        }
    }
})

function render(){
    const content = document.createDocumentFragment()
    main.appendChild(content)
    root.appendChild(main)
}