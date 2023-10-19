'use client'

import { SearchParams, SearchParamsOrder, SearchParamsSort } from '@/app/(posts)/dashboard/list/model/ParamsContext';
import { OrderSelect } from '../OrderSelect/OrderSelect';
import { SortSelect } from '../SortSelect/SortSelect';
import { SearchInput } from '../SearchInput/SearchInput';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import type { Pagination as PaginationType } from '@/app/(posts)/dashboard/list/page';

interface TableProps<T>{
    items: T[],
    error: string,
    isLoading: boolean,
    params: SearchParams,
    paginationData: PaginationType,
    onSetSort: (sort: SearchParamsSort)=>void,
    onSetOrder: (order: SearchParamsOrder)=>void,
    onSetSearch: (search: string) => void,
    onSetPage: (page: string) => void,
}

export default function Table<T>(props: TableProps<T>) {

  const { items, 
          error, 
          isLoading,
          params,
          paginationData,
          onSetSort,
          onSetOrder,
          onSetSearch,
          onSetPage
        } = props


  if (error) return <div>Failed to load posts</div>;
  if (isLoading) return <Loader />


  return (
      <div>
        <div className="mb-4 flex space-x-4 items-center bg-gray-100 py-1 px-3 rounded-lg">
          <SortSelect sort={params.sort} onSelect={onSetSort} />  
          <OrderSelect order={params.order} onSelect={onSetOrder} />
          <SearchInput search={params.search} onChange={onSetSearch} />
        </div>

            <table className="min-w-full bg-white">
            <thead>
                <tr>
                  <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400 min-w-[100px]">Post ID</th>
                  <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400">User</th>
                  <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400">Post Title</th>
                  <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400">Post Description</th>
                  <th className="py-2 px-4 border-x border-gray-100 font-normal text-gray-400">Body</th>
                </tr>
              </thead>
              <tbody>
                {items.map((post: any) => (
                  <tr key={post.id}>
                    <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100">#{post.id}</td>
                    <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100">{post.user.name}</td>
                    <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100">{post.title}</td>
                    <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100">{post.title}</td>
                    <td className="py-2 px-4 border-y border-t-gray-300 border-y-gray-100">{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
        
              <Pagination 
                    totalPages={paginationData.totalPages}
                    currentPage={params.page}
                    onPageChange={onSetPage}
              />
            </div>
          </div>
  );
}
