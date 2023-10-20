import { useCardPostsReducer } from "../model/useCardParamsReducer"
import useSWR from "swr"
import { fetchPosts } from "@/app/api/fetchData"
import { Post } from "../../types/posts"
import { Loader } from "@/app/components/Loader/Loader"
import { SearchParamsSort,SearchParamsOrder } from "../../types/params"
import { useDebounce } from "@/app/hooks/useDebounce/useDebounce"
import { FiltersPanel } from "@/app/components/FiltersPanel/FiltersPanel"
import { CardList } from "@/app/components/CardList/CardList"
import { useRef, MutableRefObject,useEffect,useCallback,useState } from "react"
import { useInfiniteScroll } from "@/app/hooks/useDebounce/useInfiniteScroll"

interface PostCardListProps {
    className? : string
}

export const PostCardList = ({className}: PostCardListProps)=> {

    const [hasMore, setHasMore] = useState<boolean>(true)
    const {postsState, dispatch} = useCardPostsReducer()

    const {params, posts} = postsState

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { data, error, isLoading } = useSWR<Post[]>(['http://localhost:3000/posts', {...params}, 'user'], fetchPosts, {
        fallback: <Loader />
    });
    const onSetSort = useCallback((sort: SearchParamsSort)=>{
        dispatch({
        type: 'SET_SORT',
        sort: sort
        })
    },[])

    const onSetOrder = useCallback((order: SearchParamsOrder)=>{
        dispatch({
        type: 'SET_ORDER',
        order: order
        })
    },[])

    const onSetSearch = useCallback((search: string)=>{
        dispatch({
        type: 'SET_SEARCH',
        search: search
        })
    },[])

    const onSetPosts = useCallback((posts: Post[])=>{
        dispatch({
        type: 'SET_POSTS',
        posts: posts
        })
    },[])

    const onSetPage = useCallback((page: string)=>{
        dispatch({
            type: 'SET_PAGE',
            page: page
        })
        },[])

    const debounceSearch = useDebounce(onSetSearch, 500);

    useEffect(()=>{
        if(data){ 
            onSetPosts(data)
        }
    },[data])

    useEffect(()=>{
        if(data && data.length < +params.limit){
            setHasMore(false)
        }
    },[data,params.limit])

    const onFetchNextPage = ()=>{
        if(hasMore) {
            onSetPage(`${Number(params.page) + 1}`)
        }
    }
    useInfiniteScroll({ 
        triggerRef, 
        wrapperRef, 
        callback: onFetchNextPage
      });
    
    return <div 
                ref={wrapperRef}
                className={`overflow-scroll h-full ${className}`}>
                <FiltersPanel 
                    sort={params.sort}
                    order={params.order}
                    search={params.search}
                    onSetSort={onSetSort}
                    onSetOrder={onSetOrder}
                    onSetSearch={debounceSearch}
                />
                { posts &&
                <CardList 
                    items={posts} 
                    error={error} 
                    isLoading={isLoading} 
                />
                } 

            {<div className='h-4 m-2' ref={triggerRef} /> }
            </div>
}