import { Post } from "@/app/(posts)/dashboard/types/posts";
import { getPost } from "@/app/api/fetchData";
import Image from "next/image";

interface PostBlockProps {
  className?: string;
  id: string;
}

export const PostBlock = async ({ className, id }: PostBlockProps) => {
  const post: Post = await getPost(id);

  return (
    <main className={`w-full h-full flex justify-left p-20 ${className}`}>
      {post && (
        <div className="w-8/12 h-9/12 bg-gray-200 p-20 relative">
          <p className="absolute">
            <span className="pr-1">Post ID:</span>
            <span>{post.id}</span>
          </p>
          <p className="mt-20 max-w-[400px]">
            <span className="font-extrabold text-3xl">{post.title}</span>
          </p>
          <p className="mt-6 text-lg">
            <span>{post.user.name}</span>
          </p>
          <p className="mt-6">
            <span>{post.description}</span>
          </p>
          <p className="mt-6">
            <span>{post.body}</span>
          </p>
          <div className="absolute top-10 right-10">
            {post.image && (
              <div className="w-[200px] h-[200px] overflow-hidden">
                <Image
                  className="object-contain"
                  fill={true}
                  src={post.image}
                  alt={post.title}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};
