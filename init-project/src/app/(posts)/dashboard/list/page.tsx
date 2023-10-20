'use client'

import useSWR from 'swr'
import { fetchPosts, fetchPagination } from '@/app/api/fetchData';
import { useCallback } from 'react';
import Table from '@/app/components/Table/Table'
import { ParamsContext,ParamsDispatchContext, SearchParamsOrder, SearchParamsSort } from './model/ParamsContext';
import useParamsReducer from './model/paramsReducer';
import { Loader } from '@/app/components/Loader/Loader';
import { useDebounce } from '@/app/hooks/useDebounce/useDebounce';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface Pagination {
      "total": number,
      "perPage": number,
      "totalPages": number
}

export default function Page() {

  const {params, dispatch} = useParamsReducer()

  const { data, error, isLoading } = useSWR<Post[]>(['http://localhost:3000/posts', {...params}, 'user'], fetchPosts, {
    fallback: <Loader />
  });

  const { data: paginationData } = useSWR<Pagination>('http://localhost:3000/pagination', fetchPagination);
 
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

  const debounceSearch = useDebounce(onSetSearch, 500);


  const onSetPage = useCallback((page: string)=>{
      dispatch({
        type: 'SET_PAGE',
        page: page
      })
    },[])


    return <ParamsContext.Provider value={params}>
              <ParamsDispatchContext.Provider value={dispatch}>
                <div className='container flex flex-col p-10'>
                  <h4 className='font-semibold mb-5'>Post List</h4>
                  { data && paginationData &&
                  <Table 
                    items={data} 
                    error={error} 
                    isLoading={isLoading} 
                    params={params}
                    paginationData={paginationData}
                    onSetSort={onSetSort}
                    onSetOrder={onSetOrder}
                    onSetSearch={debounceSearch}
                    onSetPage={onSetPage}
                  />} 
                </div>
              </ParamsDispatchContext.Provider>
          </ParamsContext.Provider>
           
  }


