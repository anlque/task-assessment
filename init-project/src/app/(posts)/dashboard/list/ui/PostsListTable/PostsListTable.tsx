'use client'

import { useListPostsReducer } from "../../model/useListPostsReducer";
import useSWR from "swr";
import { Post } from "../../../types/posts";
import { Pagination as PaginationType } from "../../../types/pagination";
import { Loader } from "@/app/components/Loader/Loader";
import { fetchPosts, fetchPagination } from "@/app/api/fetchData";
import { useCallback, useEffect } from "react";
import { SearchParamsSort,SearchParamsOrder } from "../../../types/params";
import { useDebounce } from "@/app/hooks/useDebounce/useDebounce";
import {Table} from "@/app/components/Table/Table";
import { FiltersPanel } from "@/app/components/FiltersPanel/FiltersPanel";
import { Pagination } from "@/app/components/Pagination/Pagination";

interface PostsListTableProps {
    className?: string
}

export const PostsListTable=({className}: PostsListTableProps)=>{
    const {postsState, dispatch} = useListPostsReducer()
    const {params, posts} = postsState

    const { data, error, isLoading } = useSWR<Post[]>(['http://localhost:3000/posts', {...params}, 'user'], fetchPosts, {
        fallback: <Loader />
    });

    console.log('postsState',postsState);
    

    const { data: paginationData } = useSWR<PaginationType>('http://localhost:3000/pagination', fetchPagination);
    
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

    const debounceSearch = useDebounce(onSetSearch, 500);


    const onSetPage = useCallback((page: string)=>{
        dispatch({
            type: 'SET_PAGE',
            page: page
        })
        },[])

    useEffect(()=>{
        if(data){
            onSetPosts(data)
        }
    },[data])

    return <div className={className}>
                <FiltersPanel 
                    sort={params.sort}
                    order={params.order}
                    search={params.search}
                    onSetSort={onSetSort}
                    onSetOrder={onSetOrder}
                    onSetSearch={debounceSearch}
                />
                { data &&
                  <Table 
                    items={data} 
                    error={error} 
                    isLoading={isLoading} 
                  />
                  } 

                <div className="mt-4">
                        {paginationData &&
                        <Pagination 
                            totalPages={paginationData.totalPages}
                            currentPage={params.page}
                            onPageChange={onSetPage}
                        />
                        }
                </div>
            </div>
}