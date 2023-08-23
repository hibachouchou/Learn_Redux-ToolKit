import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./postsSlice/PostsSlice";

export const Post = () => {
    const dispatch = useDispatch()
    const postes = useSelector((state) => state.postsData.posts)
    const isLoading = useSelector((state) => state.postsData.isLoading)
    const error = useSelector((state) => state.postsData.error)

    useEffect(() => {
        dispatch(getAllPosts()) 
    }, [dispatch]);

    return (
        <div>
            <h2>Posts</h2>
            {error !== null && <h4>{error}</h4>}
           {isLoading ? <h3>Loading ... </h3> : <> {postes.length >= 1 ? (
                postes.map((post) => <h6 key={post.id}>{post.title}</h6>)
            ) : (
                <h6>No posts</h6>
            )} </>} 
           
        </div>
    );
};
