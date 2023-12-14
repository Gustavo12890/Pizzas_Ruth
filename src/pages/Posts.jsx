import { useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    const data = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(response);
            
            const dados = response.data;
            // console.log(dados);
            setPosts(dados);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        data();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <Menu/>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default Posts