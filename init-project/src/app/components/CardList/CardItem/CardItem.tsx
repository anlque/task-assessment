import { Post } from "@/app/(posts)/dashboard/types/posts"
import Link from "next/link"

interface CardItemProps{
    className?: string,
    item: Post
}

export const CardItem = (props: CardItemProps)=>{
    const { className, item } = props

    return <div className={`p-10 bg-gray-200 m-2 ${className}`}>
                <p className="mb-2">
                    <span className="font-semibold pr-1">Post ID:</span>
                    <Link className='text-[#0000ffbc] underline underline-offset-4 decoration-[#0000ffbc] decoration-solid' href={`/item/${item.id}`}>
                        #{item.id}
                    </Link> 
                </p>
                <p className="truncate mb-2">
                    <span className="font-semibold pr-1">User:</span>
                    <span>{item.user.name}</span>
                </p>
                <p className="truncate mb-2">
                    <span className="font-semibold pr-1">Post Title:</span>
                    <span>{item.title}</span>
                </p>
                <p className="truncate mb-2">
                    <span className="font-semibold pr-1">Post Description:</span>
                    <span>{item.description}</span>
                </p>
                <p className="truncate mb-2">
                    <span className="font-semibold pr-1">Post Body:</span>
                    <span>{item.body}</span>
                </p>
            </div>
}

