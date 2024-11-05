import { getData } from "../async.js"
import { jph } from "../variable.js"
import { Comments } from "./comment.js"

export const Post = async (post) => {
    const userData = await getData(jph+"/users/"+1)
    const comments = await Comments(post.id)
    return `
        <article class="card">
            <header class="card-header">
                <h2 class="h3">${post.title}</h2>
                <p>Publicado por ${userData.name}</p>
            </header>
            <p class="card-body">${post.body}</p>
            <section class="card-footer">
                <h3 class="h5">Comentarios</h3>
                ${/*commentsForm()*/""}
                <div class="list-group list-group-flush">
                    ${comments}
                </div>
            </section>
        </article>
    `
}