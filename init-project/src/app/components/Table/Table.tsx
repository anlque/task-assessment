import { Post } from "@/app/(posts)/dashboard/types/posts";
import { Loader } from "../Loader/Loader";
import Link from "next/link";

interface TableProps {
  className?: string;
  items: Post[];
  error: string;
  isLoading: boolean;
}

export const Table = (props: TableProps) => {
  const { className, items, error, isLoading } = props;

  if (error) return <div>Failed to load posts</div>;
  if (isLoading) return <Loader />;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <table className="bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400 min-w-[100px] text-left">
              Post ID
            </th>
            <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400 text-left">
              User
            </th>
            <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400 text-left">
              Post Title
            </th>
            <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400 text-left">
              Post Description
            </th>
            <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400 text-left">
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((post: Post) => (
            <tr key={post.id}>
              <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100 w-1/12">
                <Link
                  className="text-[#0000FF] underline underline-offset-4 decoration-[#0000FF] decoration-solid"
                  href={`/item/${post.id}`}
                >
                  #{post.id}
                </Link>
              </td>
              <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100 w-1/12">
                <p className="truncate whitespace-nowrap w-30">
                  {post.user.name}
                </p>
              </td>
              <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100 w-2/12">
                <p className="truncate whitespace-nowrap w-28">{post.title}</p>
              </td>
              <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100 w-2/12">
                <p className="truncate whitespace-nowrap w-28">
                  {post.description}
                </p>
              </td>
              <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100 w-2/12">
                <p className="truncate w-40">{post.body}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
