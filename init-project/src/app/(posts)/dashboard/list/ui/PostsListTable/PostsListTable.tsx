"use client";

import { useListPostsReducer } from "../../model/useListPostsReducer";
import useSWR from "swr";
import { Post } from "../../../types/posts";
import { Pagination as PaginationType } from "../../../types/pagination";
import { Loader } from "@/app/components/Loader/Loader";
import { fetchPosts, fetchPagination } from "@/app/api/fetchData";
import { useCallback, useEffect } from "react";
import { SearchParamsSort, SearchParamsOrder } from "../../../types/params";
import { useDebounce } from "@/app/hooks/useDebounce/useDebounce";
import { Table } from "@/app/components/Table/Table";
import { FiltersPanel } from "@/app/components/FiltersPanel/FiltersPanel";
import { Pagination } from "@/app/components/Pagination/Pagination";

interface PostsListTableProps {
  className?: string;
}

export const PostsListTable = ({ className }: PostsListTableProps) => {
  const { postsState, dispatch } = useListPostsReducer();
  const { params, posts } = postsState;

  const { data, error, isLoading } = useSWR<Post[]>(
    ["http://localhost:3000/posts", { ...params }, "user"],
    fetchPosts,
    {
      fallback: <Loader />,
    }
  );

  const { data: paginationData } = useSWR<PaginationType>(
    "http://localhost:3000/pagination",
    fetchPagination
  );

  const onSetSort = useCallback((sort: SearchParamsSort) => {
    dispatch({
      type: "SET_SORT",
      sort: sort,
    });
  }, []);

  const onSetOrder = useCallback((order: SearchParamsOrder) => {
    dispatch({
      type: "SET_ORDER",
      order: order,
    });
  }, []);

  const onSetSearch = useCallback((search: string) => {
    dispatch({
      type: "SET_SEARCH",
      search: search,
    });
  }, []);

  const onSetPosts = useCallback((posts: Post[]) => {
    dispatch({
      type: "SET_POSTS",
      posts: posts,
    });
  }, []);

  const debounceSearch = useDebounce(onSetSearch, 500);

  const onSetPage = useCallback((page: number) => {
    dispatch({
      type: "SET_PAGE",
      page: page,
    });
  }, []);

  const reloadPage = () => {
    location.reload();
  };

  useEffect(() => {
    if (data) {
      onSetPosts(data);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex flex-col w-full items-center mt-12">
        <span className="text-red-500 mb-4">
          Smth went wrong, try to reload page
        </span>
        <button
          className="p-2 bg-gray-100 w-1/12 border border-gray-800"
          onClick={reloadPage}
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <FiltersPanel
        sort={params.sort}
        order={params.order}
        search={params.search}
        onSetSort={onSetSort}
        onSetOrder={onSetOrder}
        onSetSearch={debounceSearch}
      />
      {data && <Table items={data} error={error} isLoading={isLoading} />}

      <div className="mt-4">
        {paginationData && (
          <Pagination
            totalPages={paginationData.totalPages}
            currentPage={params.page}
            onPageChange={onSetPage}
          />
        )}
      </div>
    </div>
  );
};
