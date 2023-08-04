import BlogPosts from './BlogPosts';

interface Post {
  id: string;
  date: string;
  title: string;
  content: string;
  imagename: string;
}

function RenderBlogposts() {
  return (
    <>
      <h1 className="text-2xl lg:text-3xl text-center my-4">Blog</h1>
      <BlogPosts />
    </>
  );
}
export default RenderBlogposts;
