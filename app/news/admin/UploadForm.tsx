'use client';

export default function UploadForm() {
  return (
    <form
      method="post"
      className="flex flex-col mx-auto text-center border px-5 pt-2 pb-3 my-2 w-2/3 lg:w-1/3"
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
        rows={15}
      ></textarea>
      <input
        type="submit"
        value="Submit"
        className="hover:cursor-pointer w-fit bg-rose-300 rounded-lg px-2 py-1 mx-auto mt-2"
      />
    </form>
  );
}
