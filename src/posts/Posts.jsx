import React, { useEffect, useState } from "react";
import axios from "axios";

export const Posts = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setState(res.data);
        };

        getData();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {state.length >= 1 ? (
                state.map((post) => <h6 key={post.id}>{post.title}</h6>)
            ) : (
                <h6>No posts</h6>
            )}
        </div>
    );
};
