'use client';
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from '../firebase.js';
import { useState } from 'react';
import { deleteObject } from 'firebase/storage';

interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  imageurl: string;
}

function BlogPostsAdmin() {
  const [blogposts, setBlogposts] = useState<Post[]>([]);
  const [onEdit, setOnEdit] = useState(false);

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

  const handleDelete = async (id: string) => {
    const docRef = doc(db, 'blogposts', id);
    await deleteDoc(docRef);
  };

  return (
    <div className="p-2">
      {blogposts.length === 0 ? <h1>Loading...</h1> : null}
      {blogposts.map((post) => {
        return (
          <div
            className="flex flex-col border mx-auto text-center my-2 lg:w-3/4 "
            key={post.id}
          >
            <div className="flex">
              <button
                className="mx-auto w-full bg-rose-200"
                onClick={() => handleDelete(post.id)}
              >
                🗑️
              </button>
              <button className="mx-auto w-full bg-yellow-200">✏️</button>
              <button className="mx-auto w-full bg-green-200">✅</button>
            </div>
            <div className="h-96 aspect-square">
              <img src={post.imageurl} className="object-cover w-full h-full" />
            </div>
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
export default BlogPostsAdmin;
