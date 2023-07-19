'use client';
import { collection, query, where, onSnapshot, doc } from 'firebase/firestore';

import { db } from './firebase.js';
import { useState } from 'react';

interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  imageurl: string;
}

function BlogPosts() {
  const [blogposts, setBlogposts] = useState<Post[]>([]);

  const q = query(collection(db, 'blogposts'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    setBlogposts(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        date: doc.data().date,
        content: doc.data().content,
        imageurl: doc.data().imageurl,
      }))
    );
  });

  return (
    <div className="p-2 min-h-screen">
      {blogposts.map((post) => {
        return (
          <div
            className="flex flex-col border mx-auto text-center my-2 lg:w-3/4 "
            key={post.id}
          >
            {post.imageurl === '' ? null : (
              <>
                <div className="h-96 aspect-square">
                  <img
                    src={post.imageurl}
                    className="object-cover w-full h-full"
                  />
                </div>
              </>
            )}

            <h1 className="text-2xl">{post.title}</h1>
            <h2 className="text-lg mb-4">{post.date}</h2>
            {post.content.split('\n').map((text, index) => {
              return (
                <p className="text-lg" key={index}>
                  {text}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default BlogPosts;
