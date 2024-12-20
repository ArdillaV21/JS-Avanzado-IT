import { getData } from "../async.js"
import { jph } from "../variable.js"

export const Comments = async (id) =>{
    let commentData = ""
    const comments = await getData(jph+"/comments/?postId="+id) 

    comments.forEach( cmnt => {
        commentData += `
            <div class="list-group-item">
            <h4 class="h6">${cmnt.name}</h4>
            <a href="mailto:${cmnt.email}" class="fw-bold">${cmnt.email}</a>
            <hr>
            <p>${cmnt.body}</p>
            </div>
        `
    })
    return comments;
}