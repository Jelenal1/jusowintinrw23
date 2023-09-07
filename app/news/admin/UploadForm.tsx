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
    imageurl: string,
    fillimage: boolean,
    author: string
  ) => {
    try {
      await addDoc(collection(db, 'blogposts'), {
        title: title,
        date: date,
        content: content,
        imageurl: imageurl,
        fillimage: fillimage,
        author: author
      });
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handlePost = async (title: string, date: string, content: string, image: File, fillimage: boolean, author: string) => {
    if (image) {
      const imageurl = await postImage(image);
    postDataToDb(title, date, content, imageurl, fillimage, author);
    } else {
      postDataToDb(title, date, content, '', fillimage, author);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handlePost(
      e.target.title.value,
      (new Date()).toLocaleDateString(),
      e.target.content.value,
      e.target.image.files[0],
      e.target.fillimage.checked,
      e.target.author.value
    );
    e.target.title.value = '';
    e.target.content.value = '';
    e.target.image.value = '';
    e.target.fillimage.checked = false;
    e.target.author.value = '';
  };

  return (
    <form
      className="flex flex-col mx-auto text-center border px-5 pt-2 pb-3 my-2 w-2/3 lg:w-1/3"
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <label htmlFor="image">Image</label>
      <input
        type="file"
        accept="image/*"
        name="image"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <label htmlFor="fillimage">Stretch Picture</label>
      <input type="checkbox" id="fillimage" defaultChecked={false} />
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
