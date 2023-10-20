import { createContext } from "react";
import { PostsState, PostsDispatch } from "../../types/params";

export const initialCardPostsState: PostsState = {
  params: {
    limit: "12",
    page: "1",
    sort: "id",
    order: "asc",
    search: "",
    userId: "3",
  },
  posts: [],
};

export const CardPostsContext = createContext<PostsState>(
  initialCardPostsState
);
export const CardPostsDispatchContext = createContext<PostsDispatch | null>(
  null
);
