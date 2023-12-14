import { useState } from "react";
import axios from "axios";

function NovoPost() {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const createPost = async (e) => {
        e.preventDefault();

        const post = {title, body, userId:1};
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {body : post,});
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>NovoPost</h1>
            
            <form onSubmit={(e) => createPost(e)}>
                <label htmlFor="title"></label>
                <input type="text" name="title" id="title" placeholder="Digite o Título" onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="body"></label>
                <textarea name="body" id="body" placeholder="Digite o conteúdo" onChange={(e) => setBody(e.target.value)}></textarea>
                <input type="submit" value="Criar Post" />
            </form>
        </div>
    )
}

export default NovoPost