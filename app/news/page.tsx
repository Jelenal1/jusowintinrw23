'use client'
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";

import { db } from "./firebase.js";
import { useState } from "react";

interface Post {
    id: string;
    date: string;
    title: string;
    content: string;
}

function BlogPosts() {
    const [blogposts, setBlogposts] = useState<Post[]>([]);

    const q = query(collection(db, "blogposts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setBlogposts(
            querySnapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title, date: doc.data().date, content: doc.data().content }))
        );
    });

    return (
        <div className="p-2">
            {blogposts.map((post) => {
                return (
                    <div
                        className="flex flex-col border mx-auto text-center my-2 lg:w-3/4 "
                        key={post.id}
                    >
                        <h1 className="text-2xl">{post.title}</h1>
                        <h2 className="text-lg mb-4">{post.date}</h2>
                        {post.content.split("\n").map((text, index) => {
                            return <p className="text-lg" key={index}>{text}</p>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}
export default BlogPosts;
