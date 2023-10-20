import { useReducer } from "react";
import { postsListReducer } from "./postsListReducer";
import { initialListPostsState } from "./ListPostsContext";

export const useListPostsReducer = () => {
  const [postsState, dispatch] = useReducer(
    postsListReducer,
    initialListPostsState
  );
  return { postsState, dispatch };
};
