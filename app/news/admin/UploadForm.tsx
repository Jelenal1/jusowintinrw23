'use client';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function UploadForm() {
  const postImage = async (image: File) => {
    const imageRef = ref(storage, `blog/${image.name}`);
    const snapshot = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    console.log(url);
    return url;
  };

  const postDataToDb = async (
    title: string,
    date: string,
    content: string,
    imageurl: string
  ) => {
    try {
      await addDoc(collection(db, 'blogposts'), {
        title: title,
        date: date,
        content: content,
        imageurl: imageurl,
      });
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handlePost = async (title: string, date: string, content: string, image: File) => {
    if (image) {
      const imageurl = await postImage(image);
    postDataToDb(title, date, content, imageurl);
    } else {
      postDataToDb(title, date, content, '');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handlePost(
      e.target.title.value,
      (new Date()).toLocaleDateString(),
      e.target.content.value,
      e.target.image.files[0]
    );
    e.target.title.value = '';
    e.target.content.value = '';
    e.target.image.value = '';
  };

  return (
    <form
      className="flex flex-col mx-auto text-center border px-5 pt-2 pb-3 my-2 w-2/3 lg:w-1/3"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Title</label>
      <input
        type="text"
        name="title"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <label htmlFor="image">Image</label>
      <input
        type="file"
        accept="image/*"
        name="image"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <textarea
        name="content"
        className="border rounded-sm w-full"
        rows={5}
      ></textarea>
      <input
        type="submit"
        value="Submit"
        className="hover:cursor-pointer w-fit bg-rose-300 rounded-lg px-2 py-1 mx-auto mt-2"
      />
    </form>
  );
}
