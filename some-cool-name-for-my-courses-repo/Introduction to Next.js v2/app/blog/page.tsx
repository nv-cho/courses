import { getAllPosts } from "lib/cms";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <div>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
