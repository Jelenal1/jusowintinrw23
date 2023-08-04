'use client';
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';

import { db } from '../firebase.js';
import { useState } from 'react';

interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  imageurl: string;
}

function BlogPostsAdmin() {
  const [blogposts, setBlogposts] = useState<Post[]>([]);
  const [onEdit, setOnEdit] = useState<Post | null>(null);

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

  const handleSave = async () => {
    setOnEdit(null);
    if (onEdit === null) return;
    await setDoc(doc(db, 'blogposts', onEdit.id), {
      title: onEdit.title,
      date: (new Date()).toLocaleDateString(),
      content: onEdit.content,
      imageurl: onEdit.imageurl,
    });
  };

  return (
    <div className="p-5">
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
              <button
                className="mx-auto w-full bg-yellow-200"
                onClick={() => setOnEdit(post)}
              >
                ✏️
              </button>
            </div>
            {onEdit?.id === post.id ? (
              <>
                <div className="h-96 aspect-square">
                  <img
                    src={post.imageurl}
                    className="object-cover w-full h-full"
                  />
                </div>
                <input type="file" name="image" typeof="image/*" />
                <input
                  type="text"
                  name="title"
                  defaultValue={post.title}
                  className="text-xl border"
                  onChange={(e) => {
                    setOnEdit({ ...post, title: e.target.value });
                  }}
                />
                <h2 className="text-lg mb-4">{post.date}</h2>
                <textarea
                  name="content"
                  cols={30}
                  rows={10}
                  defaultValue={post.content}
                  onChange={(e) => {
                    setOnEdit({ ...post, content: e.target.value });
                  }}
                  className='border-y'
                ></textarea>
                <button
                  className="mx-auto w-full bg-green-200"
                  onClick={() => handleSave()}
                >
                  ✅
                </button>
              </>
            ) : (
              <>
                <div className="h-96 aspect-square">
                  <img
                    src={post.imageurl}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="text-2xl">{post.title}</h1>
                <h2 className="text-lg mb-4">{post.date}</h2>
               
                {post.content.split('\n').map((text, index) => {
                  return (
                    <p className="text-lg text-left" key={index}>
                      {text}
                    </p>
                  );
                })}
          
          
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default BlogPostsAdmin;
