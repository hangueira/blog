import { getAllPosts } from '@/service/posts';
import Post from './postsGrid';

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <section>
      <h2 className='ml-2 text-2xl font-bold'>신규 Posts</h2>
      <Post posts={posts} />
    </section>
  );
}
