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
      <h1 className="text-2xl text-center">Blog</h1>
      <BlogPosts />
    </>
  );
}
export default RenderBlogposts;
