import { useCardPostsReducer } from "../model/useCardParamsReducer";
import { Post } from "../../types/posts";
import { Loader } from "@/app/components/Loader/Loader";
import { SearchParamsSort, SearchParamsOrder } from "../../types/params";
import { useDebounce } from "@/app/hooks/useDebounce/useDebounce";
import { FiltersPanel } from "@/app/components/FiltersPanel/FiltersPanel";
import { CardList } from "@/app/components/CardList/CardList";
import {
  useRef,
  MutableRefObject,
  useEffect,
  useCallback,
  useState,
} from "react";
import { useInfiniteScroll } from "@/app/hooks/useDebounce/useInfiniteScroll";
import useSWRInfinite from "swr/infinite";
import { plainFetcher } from "@/app/api/fetchData";
interface PostCardListProps {
  className?: string;
}

export const PostCardList = ({ className }: PostCardListProps) => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { postsState, dispatch } = useCardPostsReducer();

  const { params, posts } = postsState;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { data, error, isLoading, size, setSize } = useSWRInfinite<Post[]>(
    (index) =>
      `http://localhost:3000/posts?_limit=${params.limit}&_page=${
        index + 1
      }&_sort=${params.sort}&_order=${params.order}&q=${
        params.search
      }&_expand=user&userId=${params.userId}`,
    plainFetcher
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

  const onSetSearch = useCallback(
    (search: string) => {
      dispatch({
        type: "SET_SEARCH",
        search: search,
      });
    },
    [data]
  );

  const onSetPosts = useCallback((posts: Post[]) => {
    dispatch({
      type: "SET_POSTS",
      posts: posts,
    });
  }, []);

  const debounceSearch = useDebounce(onSetSearch, 500);

  useEffect(() => {
    if (data && data.flat().length < +params.limit) {
      setHasMore(false);
    }
  }, [data, params.limit]);

  useEffect(() => {
    if (data) {
      onSetPosts(data?.flat());
    }
  }, [data]);

  const onFetchNextPage = () => {
    if (hasMore) {
      setSize(size + 1);
    }
  };

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onFetchNextPage,
  });

  return (
    <div ref={wrapperRef} className={`overflow-scroll h-full ${className}`}>
      <FiltersPanel
        sort={params.sort}
        order={params.order}
        search={params.search}
        onSetSort={onSetSort}
        onSetOrder={onSetOrder}
        onSetSearch={debounceSearch}
      />
      {data && (
        <CardList items={data.flat()} error={error} isLoading={isLoading} />
      )}

      {isLoading && <Loader />}

      {<div className="h-4 m-2" ref={triggerRef} />}
    </div>
  );
};
