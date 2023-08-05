'use client';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import BlogPosts from '../BlogPosts';
import Login from './Login';
import { auth } from '../firebase';
import UploadForm from './UploadForm';
import { useState } from 'react';
import BlogPostsAdmin from './BlogPostsAdmin';

export default function RenderBlogposts() {
  const [loggedIn, setLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
      return;
    }
    setLoggedIn(false);
  });

  return (
    <div>
      <h1 className="text-2xl text-center">Blog</h1>
      {loggedIn ? (
        <>
        <button className='flex ml-auto mr-5 bg-red-400 text-2xl p-2 rounded-xl' onClick={() => signOut(auth)}>🚪 Logout</button>
          <UploadForm />
          <BlogPostsAdmin />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
