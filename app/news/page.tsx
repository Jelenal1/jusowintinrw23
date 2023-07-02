'use client'
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebase.js";

interface Post {
    id: string;
    titel: string;
    date: string;
    content: string;
}

function BlogPosts() {
  const [blogposts, setBlogposts] = useState<Post[]>([]);

  const q = query(collection(db, "blogposts"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, titel: doc.data().titel, date: doc.data().date, content: doc.data().content }));
    setBlogposts(data);
  });

  return (
    <div className="p-2">
      {blogposts.map((post) => {
        return (
          <div
            className="flex flex-col p-5 bg-rose-400 rounded-3xl mx-auto my-2 lg:w-3/4 "
            key={post.id}
          >
            <h1 className="text-2xl mx-auto">{post.titel}</h1>
            <h2 className="text-lg mx-auto">{post.date}</h2>
            {post.content.split("\n").map((text) => {
              return <p className="text-start text-lg">{text}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}
export default BlogPosts;
