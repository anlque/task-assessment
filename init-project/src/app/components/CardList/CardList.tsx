import { Post } from "@/app/(posts)/dashboard/types/posts"
import { CardItem } from "./CardItem/CardItem"

interface CardListProps {
    className?: string,
    items: Post[],
    error?: string,
    isLoading?: boolean
}

export const CardList = (props: CardListProps)=>{

    const {className, items, error, isLoading } = props

    return <div className={`grid grid-cols-4 ${className}`}>
                {items.length &&
                    items.map((item)=> <CardItem key={item.id} item={item} />)
                }
            </div>
}